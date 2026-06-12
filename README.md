# Chris Lam Productions — Portfolio

Minimal black-and-white portfolio site for Chris Lam, freelance commercial/film producer (Chris Lam Productions LLC, Santa Monica, CA).

Built with Next.js (App Router, static export) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # static export to ./out
```

The build outputs a fully static site to `out/` — no server required.

## Adding a new project

All project data lives in one file: [`data/projects.ts`](data/projects.ts). Add a new object to the `projects` array:

```ts
{
  slug: "nike-air-max-day",            // URL: /work/nike-air-max-day
  title: "Air Max Day",
  client: "Nike",
  category: "Commercial",              // shown as the tag on the grid
  year: "2026",
  coverImage: "/covers/nike.jpg",      // put the file in public/covers/
  videoUrl: "https://player.vimeo.com/video/123456789",
  description: "Two to four sentences about the project.",
  credits: [
    { role: "Director", name: "Jane Doe" },
    { role: "Agency", name: "W+K" },
    { role: "Production Company", name: "Smuggler" },
    { role: "Producer", name: "Chris Lam" },
    { role: "Editor", name: "John Doe" },
    { role: "Colorist", name: "Jane Doe" },
    { role: "Sound Mix", name: "John Doe" },
    { role: "Music", name: "Jane Doe" },
  ],
},
```

That's it — the homepage grid and the project page at `/work/<slug>` are generated automatically at build time.

### Field notes

- **`slug`** — lowercase, hyphenated, unique. It becomes the URL.
- **`coverImage`** — drop the image into `public/covers/` and reference it as `/covers/filename.jpg`. 16:9 works best (the grid crops to 16:9). The current entries use grey-box SVG placeholders — replace them with real stills.
- **`videoUrl`** — three options:
  - **Vimeo**: `https://player.vimeo.com/video/VIDEO_ID`
  - **YouTube**: `https://www.youtube.com/embed/VIDEO_ID`
  - **Self-hosted file**: a path or URL ending in `.mp4`/`.webm` (rendered with a native `<video>` tag)
  - **`null`** — for image-only projects (e.g. OOH); the cover image is shown full-width instead.
- **`credits`** — any roles you like, rendered in order as a two-column list.

Projects appear on the homepage in array order — reorder the array to reorder the grid.

## Other content to update

- **Bio + contact** — [`app/about/page.tsx`](app/about/page.tsx) (placeholder bio, email, and headshot). Replace `public/headshot-placeholder.svg` with a real photo.
- **Site title / SEO description** — [`app/layout.tsx`](app/layout.tsx)
- **Header name/title** — [`components/Header.tsx`](components/Header.tsx)

## Deploying

### Vercel
Push to a Git repo and import it at vercel.com — zero config needed.

### Netlify
Push to a Git repo and import at netlify.com with:
- **Build command:** `npm run build`
- **Publish directory:** `out`

## Design constraints

The Tailwind theme is intentionally restricted to `black`, `white`, and one light gray (`#f5f5f5`, for subtle background fill only). Four type voices, all self-hosted at build time via `next/font` (no runtime Google requests):

- **Archivo** (variable width axis, rendered ultra-black at 125% width via the `.wordmark` class) — corner wordmarks, nav, section labels
- **Instrument Serif** (`font-title`) — the big lowercase display titles
- **Libre Caslon Text** (`font-serif`) — body paragraphs
- **Space Mono** (`font-mono`) — metadata: client/category/role lines, credits, contact

Hover states use underlines and opacity, never color.

Animations are CSS-only: a scroll-reveal fade-up driven by [`components/Reveal.tsx`](components/Reveal.tsx) (IntersectionObserver + the `.reveal` classes in [`app/globals.css`](app/globals.css)), a fade-in on hero/video, and a slow image zoom on hover. All of it respects `prefers-reduced-motion`. The fixed corner wordmarks live in [`components/BrandMarks.tsx`](components/BrandMarks.tsx).
