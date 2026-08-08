// Pulls the numeric video ID out of a Vimeo URL, whichever form it's in:
//   - public share:  https://vimeo.com/817998639
//   - manage/studio: https://vimeo.com/manage/videos/817998639
// Deliberately does NOT match folder/showcase/user links
// (https://vimeo.com/user/X/folder/Y) — those have no single video to embed.
function extractVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(?:manage\/videos\/)?(\d+)(?:[/?#]|$)/);
  return match ? match[1] : null;
}

// Turns a Vimeo URL into an embeddable player URL. Returns null for anything
// that isn't a single-video link, so callers can fall back to linking out.
export function getVimeoEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;
  const id = extractVimeoId(url);
  if (!id) return null;
  // title/byline/portrait=0: suppress Vimeo's own title-card overlay — the
  // page already renders the project title, so the two would double up.
  return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;
}

// Fetches the video's real thumbnail from Vimeo's keyless oEmbed endpoint —
// used for grid tiles that aren't playing the video themselves. Returns null
// (falls back to the Placeholder) for non-embeddable links, or on any
// network/parse failure.
export async function getVimeoThumbnail(
  url: string | undefined,
): Promise<string | null> {
  if (!url) return null;
  const id = extractVimeoId(url);
  if (!id) return null;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
        `https://vimeo.com/${id}`,
      )}&width=960`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}
