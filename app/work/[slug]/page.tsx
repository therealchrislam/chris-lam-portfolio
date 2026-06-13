import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      {project.videoUrl ? (
        <VideoEmbed
          url={project.videoUrl}
          title={`${project.client} — ${project.title}`}
        />
      ) : (
        <div className="relative aspect-video w-full bg-white/5">
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

      <header className="mt-10">
        <h1 className="text-xs uppercase tracking-widest text-white">
          {project.client}: {project.title}
        </h1>
        {meta && (
          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
            {meta}
          </p>
        )}
      </header>

      {project.description && (
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/80">
          {project.description}
        </p>
      )}

      {project.credits.length > 0 && (
        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-xs uppercase tracking-widest text-white/40">
            Credits
          </h2>
          <dl className="mt-5 max-w-xl">
            {project.credits.map((credit) => (
              <div
                key={`${credit.role}-${credit.name}`}
                className="grid grid-cols-2 gap-6 border-b border-white/5 py-2 text-sm"
              >
                <dt className="text-white/40">{credit.role}</dt>
                <dd className="text-white">{credit.name}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <nav className="mt-12 flex items-center justify-between border-t border-white/10 pt-8 text-xs uppercase tracking-widest">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}/`}
            className="text-white/40 transition-colors duration-200 hover:text-white"
          >
            ← Prev
          </Link>
        ) : (
          <span />
        )}
        <Link
          href="/"
          className="text-white/40 transition-colors duration-200 hover:text-white"
        >
          All works
        </Link>
        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}/`}
            className="text-white/40 transition-colors duration-200 hover:text-white"
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
