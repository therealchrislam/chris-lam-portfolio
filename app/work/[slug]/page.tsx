import Link from "next/link";
import { notFound } from "next/navigation";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import { getProject, getProjects } from "@/data/projects";
import { getVimeoEmbedUrl } from "@/lib/video";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.hook,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = getProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const meta = [project.client, project.category, project.year]
    .filter(Boolean)
    .join(" · ");
  const videoUrls = project.videoUrls ?? [];
  const embedUrls = videoUrls
    .map((url) => getVimeoEmbedUrl(url))
    .filter((url): url is string => Boolean(url));
  // Links that exist but aren't a single embeddable video (e.g. a Vimeo
  // folder link) — the only way to watch those is off-site.
  const externalUrls = videoUrls.filter((url) => !getVimeoEmbedUrl(url));
  // Agency/client sit apart from the crew grid — who commissioned it, set
  // off with a rule, above who actually made it.
  const topCredits = project.credits.filter(
    (c) => c.role === "AGENCY" || c.role === "CLIENT",
  );
  const crewCredits = project.credits.filter(
    (c) => c.role !== "AGENCY" && c.role !== "CLIENT",
  );
  // Crew credits can optionally be tagged with a `group` (e.g. "AGENCY",
  // "PRODUCTION") to render as its own labeled section — in department
  // order of first appearance. Anything ungrouped renders as one plain
  // grid, same as every project that doesn't use this.
  const ungroupedCrew = crewCredits.filter((c) => !c.group);
  const creditGroups = crewCredits.reduce<{ group: string; items: typeof crewCredits }[]>(
    (groups, credit) => {
      if (!credit.group) return groups;
      const bucket = groups.find((g) => g.group === credit.group);
      if (bucket) bucket.items.push(credit);
      else groups.push({ group: credit.group, items: [credit] });
      return groups;
    },
    [],
  );

  return (
    <article className="animate-page-in">
      {embedUrls.length > 0 ? (
        // Real player(s): each sized to its own 16:9 aspect instead of the
        // tall cinematic hero below, so they never letterbox with dead
        // black space, and the title sits in normal flow underneath
        // instead of fighting the player's own control bar for the same
        // pixels. Stacked when a project shipped more than one cut.
        <div>
          <div className="px-6 pt-8 sm:px-10 lg:px-12">
            <Link
              href="/"
              className="inline-block text-xs tracking-wide text-cream/70 transition-colors duration-200 hover:text-cream"
            >
              ← ALL WORK
            </Link>
          </div>
          <div className="mt-6 space-y-2 sm:mt-8 sm:space-y-3">
            {embedUrls.map((url, i) => (
              <div key={url} className="relative aspect-video w-full bg-black">
                <iframe
                  src={url}
                  title={`${project.client} — ${project.title}${
                    embedUrls.length > 1 ? ` — Spot ${i + 1}` : ""
                  }`}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
          <div
            className="animate-fade-up px-6 pt-8 sm:px-10 lg:px-12"
            style={{ animationDelay: "150ms" }}
          >
            <p className="mb-3.5 text-xs tracking-[0.14em] text-cream/55">
              {meta}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-cream/70 sm:text-base">
              {project.hook}
            </p>
          </div>
        </div>
      ) : project.stills && project.stills.length > 0 ? (
        // No video, but real photography exists: a strong first image as
        // the hero, everything else in a plain grid below — same shape as
        // the video layout (back link → media → title) so photo-only
        // projects read as intentional, not like a placeholder waiting on
        // an asset.
        <div>
          <div className="px-6 pt-8 sm:px-10 lg:px-12">
            <Link
              href="/"
              className="inline-block text-xs tracking-wide text-cream/70 transition-colors duration-200 hover:text-cream"
            >
              ← ALL WORK
            </Link>
          </div>
          {project.stillsGrid ? (
            // Masonry: every image keeps its own source aspect ratio
            // (no cropping) — for sets whose stills range from portrait
            // selfies to square swings to wide crowd shots.
            <div className="mt-6 columns-2 gap-2 px-6 sm:mt-8 sm:columns-3 sm:gap-3 sm:px-10 lg:px-12">
              {project.stills.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.client} — ${project.title}`}
                  className="mb-2 w-full break-inside-avoid bg-panel sm:mb-3"
                />
              ))}
            </div>
          ) : (
            <>
              <div className="relative mt-6 aspect-video w-full bg-panel sm:mt-8">
                <img
                  src={project.stills[0]}
                  alt={`${project.client} — ${project.title}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              {project.stills.length > 1 && (
                <div className="mt-2 grid grid-cols-2 gap-2 px-6 sm:mt-3 sm:grid-cols-3 sm:gap-3 sm:px-10 lg:px-12">
                  {project.stills.slice(1).map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden bg-panel"
                    >
                      <img
                        src={src}
                        alt={`${project.client} — ${project.title}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          <div
            className="animate-fade-up px-6 pt-8 sm:px-10 lg:px-12"
            style={{ animationDelay: "150ms" }}
          >
            <p className="mb-3.5 text-xs tracking-[0.14em] text-cream/55">
              {meta}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-cream/70 sm:text-base">
              {project.hook}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative h-[70vh] min-h-[440px] overflow-hidden bg-panel lg:h-[78vh]">
          <Placeholder label={project.heroPlaceholder} bordered={false} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/[0.18] to-transparent" />

          <Link
            href="/"
            className="absolute left-6 top-7 text-xs tracking-wide transition-opacity duration-200 hover:opacity-65 sm:left-10 lg:left-12"
          >
            ← ALL WORK
          </Link>

          <div
            className="animate-fade-up pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-12 lg:pb-16"
            style={{ animationDelay: "150ms" }}
          >
            <p className="mb-3.5 text-xs tracking-[0.14em] text-cream/70">
              {meta}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-cream/70 sm:text-base">
              {project.hook}
            </p>
            {externalUrls.length > 0 && (
              <div className="pointer-events-auto mt-5 flex flex-wrap gap-4">
                {externalUrls.map((url, i) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs tracking-wide text-cream underline decoration-cream/40 underline-offset-4 transition-colors duration-200 hover:decoration-cream"
                  >
                    WATCH ON VIMEO
                    {externalUrls.length > 1 ? ` #${i + 1}` : ""} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-28">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 border-y border-cream/[0.12] py-10 sm:grid-cols-[200px_1fr] sm:gap-10">
            <div className="text-xs tracking-[0.14em] text-cream/55">
              CREDITS
            </div>
            <div>
              {topCredits.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-x-10 gap-y-5 border-b border-cream/[0.12] pb-8 sm:mb-10 sm:pb-10">
                  {topCredits.map((credit) => (
                    <div key={`${credit.role}-${credit.name}`}>
                      <div className="text-[11px] tracking-wide text-cream/55">
                        {credit.role}
                      </div>
                      <div className="mt-1 text-sm">{credit.name}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="space-y-8 sm:space-y-10">
                {ungroupedCrew.length > 0 && (
                  <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {ungroupedCrew.map((credit) => (
                      <div key={`${credit.role}-${credit.name}`}>
                        <div className="text-[11px] tracking-wide text-cream/55">
                          {credit.role}
                        </div>
                        <div className="mt-1 text-sm">{credit.name}</div>
                      </div>
                    ))}
                  </div>
                )}
                {creditGroups.map((g) => (
                  <div key={g.group}>
                    <div className="mb-4 text-[11px] tracking-[0.14em] text-cream/55">
                      {g.group}
                    </div>
                    <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {g.items.map((credit) => (
                        <div key={`${credit.role}-${credit.name}`}>
                          <div className="text-[11px] tracking-wide text-cream/55">
                            {credit.role}
                          </div>
                          <div className="mt-1 text-sm">{credit.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {project.press && project.press.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-5">
                  {project.press.map((p) => (
                    <a
                      key={p.url}
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs tracking-wide text-cream/55 underline decoration-cream/25 underline-offset-4 transition-colors duration-200 hover:text-cream hover:decoration-cream/60"
                    >
                      AS SEEN IN {p.label.toUpperCase()} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="pt-16 text-right sm:pt-20 lg:pt-24">
          <Link
            href={`/work/${next.slug}/`}
            className="text-[13px] tracking-wide text-cream/55 transition-colors duration-200 hover:text-cream"
          >
            NEXT PROJECT — {next.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
