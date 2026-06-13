export type Credit = {
  role: string;
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Condensed label for the sidebar — must fit on one line. */
  navTitle: string;
  client: string;
  category: string;
  year: string;
  coverImage: string;
  videoUrl: string | null;
  description: string;
  credits: Credit[];
};

// Source of truth: a Google Sheet shared as "anyone with the link can view".
// Override the id with PORTFOLIO_SHEET_ID at build time if it ever moves.
const SHEET_ID =
  process.env.PORTFOLIO_SHEET_ID ??
  "12sCFUyrXzHnDqsaPvjBCyCFS0oCqf4pYO7DbEl_4YIc";

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

// --- CSV parsing -----------------------------------------------------------
// Minimal RFC-4180-ish parser: handles quoted fields, escaped "" quotes,
// and commas/newlines inside quotes.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

// --- field helpers ---------------------------------------------------------
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Turn a Vimeo share URL into an embeddable player URL. Returns null for
// folder/user links (those aren't a single video) or empty cells.
function vimeoEmbed(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? `https://player.vimeo.com/video/${m[1]}` : null;
}

// Pull a year out of names like "World Cup '26" → "2026".
function yearFromName(name: string): string {
  const m = name.match(/'(\d{2})/);
  return m ? `20${m[1]}` : "";
}

// A consistent on-brand cover when the sheet has no image, rendered as an
// inline SVG data URI so no files are needed.
function placeholderCover(label: string): string {
  const text = label.toUpperCase().replace(/&/g, "&amp;");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect width='1600' height='900' fill='#efefef'/><text x='800' y='465' fill='#bdbdbd' font-family='Helvetica,Arial,sans-serif' font-size='46' letter-spacing='10' text-anchor='middle'>${text}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// --- mapping ---------------------------------------------------------------
function rowsToProjects(rows: string[][]): Project[] {
  if (rows.length === 0) return [];

  const header = rows[0].map((h) => h.trim().toUpperCase());
  const col = (name: string) => header.indexOf(name);

  const iName = col("PROJECT NAME");
  const iBrand = col("BRAND");
  const iAgency = col("AGENCY");
  const iVimeo = col("VIMEO LINK");
  const iDesc = col("DESCRIPTION/ROLE");
  const iYear = col("YEAR"); // optional columns — add them to the sheet anytime
  const iCategory = col("CATEGORY");
  const iCover = col("COVER");

  const cell = (r: string[], i: number) => (i >= 0 ? (r[i] ?? "").trim() : "");

  const seen = new Set<string>();
  const projects: Project[] = [];

  for (const r of rows.slice(1)) {
    const name = cell(r, iName);
    if (!name) continue; // skip blank rows

    const brand = cell(r, iBrand);
    const agency = cell(r, iAgency);
    const brandLabel = brand && brand !== "-" ? brand : "";

    let base =
      slugify([brandLabel, name].filter(Boolean).join("-")) || "project";
    let slug = base;
    let n = 2;
    while (seen.has(slug)) slug = `${base}-${n++}`;
    seen.add(slug);

    const credits: Credit[] = [];
    if (agency) credits.push({ role: "Agency", name: agency });
    credits.push({ role: "Producer", name: "Chris Lam" });

    const cover = cell(r, iCover);
    const year = cell(r, iYear) || yearFromName(name);

    projects.push({
      slug,
      title: name,
      navTitle: brandLabel ? `${brandLabel}: ${name}` : name,
      client: brandLabel || agency || "—",
      category: cell(r, iCategory),
      year,
      coverImage: cover || placeholderCover(brandLabel || name),
      videoUrl: vimeoEmbed(cell(r, iVimeo)),
      description: cell(r, iDesc),
      credits,
    });
  }

  return projects;
}

// Replace placeholder covers with the project's Vimeo thumbnail, fetched
// from Vimeo's keyless oEmbed endpoint at build time. An explicit COVER from
// the sheet always wins; on any failure the placeholder is kept.
async function addVimeoThumbnail(project: Project): Promise<void> {
  if (!project.videoUrl) return;
  if (!project.coverImage.startsWith("data:")) return; // explicit cover wins
  const m = project.videoUrl.match(/video\/(\d+)/);
  if (!m) return;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${m[1]}&width=1280`,
    );
    if (!res.ok) return;
    const data = (await res.json()) as { thumbnail_url?: string };
    if (data.thumbnail_url) project.coverImage = data.thumbnail_url;
  } catch {
    // network/parse failure — keep the placeholder cover
  }
}

// --- build-time fetch ------------------------------------------------------
// Memoized per build so the sheet is only pulled once across all pages.
let cache: Promise<Project[]> | null = null;

async function fetchProjects(): Promise<Project[]> {
  // Default ("force-cache") so the route stays statically prerenderable for
  // `output: export`. Each fresh build starts with an empty cache, so the
  // sheet is pulled anew every deploy.
  const res = await fetch(CSV_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch portfolio sheet (HTTP ${res.status}). Make sure the ` +
        `Google Sheet is shared as "anyone with the link can view".`,
    );
  }
  const projects = rowsToProjects(parseCsv(await res.text()));
  await Promise.all(projects.map(addVimeoThumbnail));
  return projects;
}

export function getProjects(): Promise<Project[]> {
  if (!cache) cache = fetchProjects();
  return cache;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return (await getProjects()).find((p) => p.slug === slug);
}
