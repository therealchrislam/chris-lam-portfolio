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
  /**
   * Embed URL for the main video.
   * - Vimeo:   https://player.vimeo.com/video/VIDEO_ID
   * - YouTube: https://www.youtube.com/embed/VIDEO_ID
   * - Self-hosted file: path ending in .mp4 / .webm / .mov (rendered as <video>)
   * - null: no video (image-only project, e.g. OOH)
   */
  videoUrl: string | null;
  description: string;
  credits: Credit[];
};

const PLACEHOLDER_VIDEO = "https://player.vimeo.com/video/76979871";

const PLACEHOLDER_CREDITS: Credit[] = [
  { role: "Director", name: "TBD" },
  { role: "Agency", name: "TBD" },
  { role: "Production Company", name: "TBD" },
  { role: "Executive Producer", name: "TBD" },
  { role: "Producer", name: "Chris Lam" },
  { role: "Editor", name: "TBD" },
  { role: "Colorist", name: "TBD" },
  { role: "Sound Mix", name: "TBD" },
  { role: "Music", name: "TBD" },
];

export const projects: Project[] = [
  {
    slug: "foot-locker-its-black-and-white",
    title: "It's Black and White / Colors",
    navTitle: "Foot Locker: B&W / Colors",
    client: "Foot Locker",
    category: "Branded Content",
    year: "2025",
    coverImage: "/covers/foot-locker.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A branded film for Foot Locker created with Special Group. Placeholder description — replace with two to four sentences about the concept, the production, and the result.",
    credits: [
      { role: "Director", name: "TBD" },
      { role: "Agency", name: "Special Group" },
      { role: "Production Company", name: "TBD" },
      { role: "Producer", name: "Chris Lam" },
      { role: "Editor", name: "TBD" },
      { role: "Colorist", name: "TBD" },
      { role: "Sound Mix", name: "TBD" },
      { role: "Music", name: "TBD" },
    ],
  },
  {
    slug: "fox-sports-world-cup-uzbekistan",
    title: "World Cup '26 — Uzbekistan",
    navTitle: "Fox Sports: Uzbekistan",
    client: "Fox Sports",
    category: "Commercial",
    year: "2026",
    coverImage: "/covers/fox-uzbekistan.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A spot from the Fox Sports FIFA World Cup '26 campaign. Placeholder description — replace with two to four sentences about the spot.",
    credits: PLACEHOLDER_CREDITS,
  },
  {
    slug: "fox-sports-world-cup-mirror",
    title: "World Cup '26 — Mirror",
    navTitle: "Fox Sports: Mirror",
    client: "Fox Sports",
    category: "Commercial",
    year: "2026",
    coverImage: "/covers/fox-mirror.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A spot from the Fox Sports FIFA World Cup '26 campaign. Placeholder description — replace with two to four sentences about the spot.",
    credits: PLACEHOLDER_CREDITS,
  },
  {
    slug: "fox-sports-world-cup-miracle",
    title: "World Cup '26 — Miracle",
    navTitle: "Fox Sports: Miracle",
    client: "Fox Sports",
    category: "Commercial",
    year: "2026",
    coverImage: "/covers/fox-miracle.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A spot from the Fox Sports FIFA World Cup '26 campaign. Placeholder description — replace with two to four sentences about the spot.",
    credits: PLACEHOLDER_CREDITS,
  },
  {
    slug: "fox-sports-world-cup-dollar-bill",
    title: "World Cup '26 — Dollar Bill",
    navTitle: "Fox Sports: Dollar Bill",
    client: "Fox Sports",
    category: "Commercial",
    year: "2026",
    coverImage: "/covers/fox-dollar-bill.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A spot from the Fox Sports FIFA World Cup '26 campaign. Placeholder description — replace with two to four sentences about the spot.",
    credits: PLACEHOLDER_CREDITS,
  },
  {
    slug: "fox-sports-world-cup-pool",
    title: "World Cup '26 — Pool",
    navTitle: "Fox Sports: Pool",
    client: "Fox Sports",
    category: "Commercial",
    year: "2026",
    coverImage: "/covers/fox-pool.svg",
    videoUrl: PLACEHOLDER_VIDEO,
    description:
      "A spot from the Fox Sports FIFA World Cup '26 campaign. Placeholder description — replace with two to four sentences about the spot.",
    credits: PLACEHOLDER_CREDITS,
  },
  {
    slug: "postmates-ooh",
    title: "OOH Campaign",
    navTitle: "Postmates: OOH",
    client: "Postmates",
    category: "OOH Campaign",
    year: "2024",
    coverImage: "/covers/postmates.svg",
    videoUrl: null,
    description:
      "An out-of-home billboard campaign for Postmates. Placeholder description — replace with two to four sentences about the campaign, placements, and scope.",
    credits: [
      { role: "Agency", name: "TBD" },
      { role: "Photographer", name: "TBD" },
      { role: "Producer", name: "Chris Lam" },
      { role: "Retouching", name: "TBD" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
