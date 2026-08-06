# Chris Lam Productions — Portfolio

Dark, editorial portfolio site for Chris Lam, freelance commercial/film
producer (Chris Lam Productions LLC, Los Angeles). Originally designed in
[Claude Design](https://claude.ai/design).

Built with Next.js (App Router, static export) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # static export to ./out
```

The build outputs a fully static site to `out/` — no server required.

## Adding / editing a project

All project data lives in one file: [`data/projects.ts`](data/projects.ts).
It's a plain hardcoded array — there's no external sheet or CMS. Add a new
object to the `projects` array:

```ts
{
  slug: "nike-air-max-day",              // URL: /work/nike-air-max-day
  title: "Air Max Day",
  client: "Nike",
  category: "Commercial",                // shown as the tag on the grid tile
  year: "2026",
  hasVideo: true,                        // shows the "VIDEO" badge on the hero
  hook: "One line under the title on the project page.",
  ask: "What the client/agency asked for.",
  role: "What Chris actually did on it.",
  work: [],                              // supporting bullets, not rendered yet
  credits: [
    { role: "AGENCY", name: "W+K" },
    { role: "PRODUCER", name: "Chris Lam" },
  ],
  gallery: ["Caption 1", "Caption 2"],    // "more from this project" tiles
  tilePlaceholder: "Nike — Air Max Day still",   // homepage grid placeholder caption
  heroPlaceholder: "Hero still — Air Max Day",   // project-page hero placeholder caption
},
```

That's it — the homepage grid and the project page at `/work/<slug>/` are
generated automatically at build time, in array order (reorder the array to
reorder the grid).

### About real images

Every image on the site — grid tiles, hero, gallery, the About portrait — is
currently a [`Placeholder`](components/Placeholder.tsx): a dashed-border tile
showing its caption, standing in until real stills exist. To drop a real
photo in, replace the relevant `<Placeholder label="..." />` with a
`next/image` (or plain `<img>`) pointed at a file in `public/`.

## Other content to update

- **Bio + capabilities** — [`app/about/page.tsx`](app/about/page.tsx) and the
  `capabilities` list in [`data/projects.ts`](data/projects.ts)
- **Contact links** — [`app/contact/page.tsx`](app/contact/page.tsx) (email is
  live; Instagram/LinkedIn/Resume are still `#` placeholders)
- **Site title / SEO description** — [`app/layout.tsx`](app/layout.tsx)
- **Header wordmark / nav** — [`components/Header.tsx`](components/Header.tsx)
- **Footer** — [`components/Footer.tsx`](components/Footer.tsx)

## Design

Near-black background (`ink`, `#0a0a09`) with off-white text (`cream`,
`#f2f0eb`) — monochrome, no accent color. Three type voices, self-hosted at
build time via `next/font/google` (no runtime Google requests):

- **Archivo** (`font-display`) — wordmark, project titles, headlines
- **Space Grotesk** (`font-sans`) — body copy
- **Space Mono** (`font-mono`) — nav, eyebrows, credits, captions

A fixed, subtly-animated film-grain overlay sits above every page
([`components/GrainOverlay.tsx`](components/GrainOverlay.tsx)). Scroll-reveal
fades are CSS-driven via [`components/Reveal.tsx`](components/Reveal.tsx)
(IntersectionObserver + the `.reveal` classes in
[`app/globals.css`](app/globals.css)). Everything respects
`prefers-reduced-motion`.

## Deploying

### Vercel
Push to a Git repo and import it at vercel.com — zero config needed.

### Netlify
Push to a Git repo and import at netlify.com with:
- **Build command:** `npm run build`
- **Publish directory:** `out`
