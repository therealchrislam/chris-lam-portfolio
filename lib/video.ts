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
