// Turns a Vimeo share URL (e.g. "https://vimeo.com/817998639") into an
// embeddable player URL. Returns null for anything that isn't a single-video
// link — folder/showcase/user links can't be embedded — so callers can fall
// back to linking out instead.
export function getVimeoEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (!match) return null;
  // title/byline/portrait=0: suppress Vimeo's own title-card overlay — the
  // page already renders the project title, so the two would double up.
  return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0`;
}

// Fetches the video's real thumbnail from Vimeo's keyless oEmbed endpoint —
// used for grid tiles that aren't playing the video themselves. Returns null
// (falls back to the Placeholder) for non-embeddable links, or on any
// network/parse failure.
export async function getVimeoThumbnail(
  url: string | undefined,
): Promise<string | null> {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (!match) return null;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
        `https://vimeo.com/${match[1]}`,
      )}&width=960`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}
