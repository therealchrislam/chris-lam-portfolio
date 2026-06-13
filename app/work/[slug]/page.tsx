import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import VideoEmbed from "@/components/VideoEmbed";
import { getProject, getProjects } from "@/data/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const meta = [project.category, project.year].filter(Boolean).join(", ");

  return (
    <article>
      <div className="animate-fade-in">
        {project.videoUrl ? (
          <VideoEmbed
            url={project.videoUrl}
            title={`${project.client} — ${project.title}`}
          />
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/5">
            <Image
              src={project.coverImage}
              alt={`${project.client} — ${project.title}`}
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        )}
      </div>

      <header className="mt-10 animate-fade-up">
        <p className="text-xs uppercase tracking-widest text-black/40">
          {project.client}
          {meta ? ` · ${meta}` : ""}
        </p>
        <h1 className="mt-3 font-display text-5xl uppercase leading-[0.88] tracking-tight text-black sm:text-7xl">
          {project.title}
        </h1>
      </header>

      {project.description && (
        <Reveal>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-black/70">
            {project.description}
          </p>
        </Reveal>
      )}

      {project.credits.length > 0 && (
        <Reveal>
          <section className="mt-12 border-t border-black/10 pt-8">
            <h2 className="text-xs uppercase tracking-widest text-black/40">
              Credits
            </h2>
            <dl className="mt-5 max-w-xl">
              {project.credits.map((credit) => (
                <div
                  key={`${credit.role}-${credit.name}`}
                  className="grid grid-cols-2 gap-6 border-b border-black/10 py-2.5 text-xs uppercase tracking-widest"
                >
                  <dt className="text-black/40">{credit.role}</dt>
                  <dd className="text-black">{credit.name}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>
      )}

      <nav className="mt-12 flex items-center justify-between border-t border-black/10 pt-8 text-xs uppercase tracking-widest">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}/`}
            className="text-black/40 transition-colors duration-200 hover:text-black"
          >
            ← Prev
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/"
          className="text-black/40 transition-colors duration-200 hover:text-black"
        >
          All works
        </Link>
        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}/`}
            className="text-black/40 transition-colors duration-200 hover:text-black"
          >
            Next →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
