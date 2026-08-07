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
  const embedUrl = getVimeoEmbedUrl(project.videoUrl);
  // videoUrl exists but isn't a single embeddable video (e.g. a Vimeo
  // folder link) — the only way to watch it is off-site.
  const externalOnly = Boolean(project.videoUrl) && !embedUrl;

  return (
    <article>
      {embedUrl ? (
        // A real player: sized to its own 16:9 aspect instead of the tall
        // cinematic hero below, so it never letterboxes with dead black
        // space, and the title sits in normal flow underneath it instead of
        // fighting the player's own control bar for the same pixels.
        <div className="animate-fade-in">
          <div className="px-6 pt-8 sm:px-10 lg:px-12">
            <Link
              href="/"
              className="inline-block text-xs tracking-wide text-cream/70 transition-colors duration-200 hover:text-cream"
            >
              ← ALL WORK
            </Link>
          </div>
          <div className="relative mt-6 aspect-video w-full bg-black sm:mt-8">
            <iframe
              src={embedUrl}
              title={`${project.client} — ${project.title}`}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="px-6 pt-8 sm:px-10 lg:px-12">
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
        <div className="animate-fade-in relative h-[70vh] min-h-[440px] overflow-hidden bg-panel lg:h-[78vh]">
          <Placeholder label={project.heroPlaceholder} bordered={false} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.92] via-black/[0.18] to-transparent" />

          <Link
            href="/"
            className="absolute left-6 top-7 text-xs tracking-wide transition-opacity duration-200 hover:opacity-65 sm:left-10 lg:left-12"
          >
            ← ALL WORK
          </Link>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-12 lg:pb-16">
            <p className="mb-3.5 text-xs tracking-[0.14em] text-cream/70">
              {meta}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-cream/70 sm:text-base">
              {project.hook}
            </p>
            {externalOnly && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-5 inline-block text-xs tracking-wide text-cream underline decoration-cream/40 underline-offset-4 transition-colors duration-200 hover:decoration-cream"
              >
                WATCH ON VIMEO ↗
              </a>
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
              <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.credits.map((credit) => (
                  <div key={`${credit.role}-${credit.name}`}>
                    <div className="text-[11px] tracking-wide text-cream/55">
                      {credit.role}
                    </div>
                    <div className="mt-1 text-sm">{credit.name}</div>
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
