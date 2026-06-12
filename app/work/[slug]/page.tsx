import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import VideoEmbed from "@/components/VideoEmbed";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <div className="animate-fade-in">
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
              priority
            />
          </div>
        )}
      </div>

      <Reveal>
        <header className="mt-16 border-t border-white/10 pt-16 sm:mt-20 sm:pt-20">
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            {project.client} · {project.category}, {project.year}
          </p>
          <h1 className="mt-8 font-title text-5xl lowercase leading-[0.88] tracking-[-0.03em] sm:mt-10 sm:text-8xl">
            {project.title}
          </h1>
        </header>
      </Reveal>

      <Reveal>
        <p className="mt-14 max-w-2xl font-serif text-base leading-[1.65] tracking-[-0.015em] text-white/90 sm:mt-16 sm:text-lg">
          {project.description}
        </p>
      </Reveal>

      <Reveal>
        <section className="mt-20 border-t border-white/10 pt-10 sm:mt-24 sm:pt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">Credits</h2>
          <dl className="mt-6 max-w-2xl space-y-2">
            {project.credits.map((credit) => (
              <div
                key={`${credit.role}-${credit.name}`}
                className="grid grid-cols-2 gap-6 border-b border-white/5 py-2 font-serif text-sm sm:text-base"
              >
                <dt className="text-white/50 tracking-[-0.01em]">{credit.role}</dt>
                <dd className="font-light tracking-[-0.015em]">{credit.name}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      <div className="mt-20 border-t border-white/10 pt-10">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-wider text-white/50 transition-colors duration-300 hover:text-white"
        >
          ← All projects
        </Link>
      </div>

      {/* All projects archive */}
      <Reveal>
        <section className="mt-28 border-t border-white/10 pt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">
            All projects · {projects.length}
          </h2>
          <div className="mt-8 space-y-3">
            {projects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/work/${proj.slug}/`}
                className={`block font-serif text-sm transition-opacity duration-300 hover:opacity-60 ${
                  proj.slug === slug ? "text-white" : "text-white/50"
                }`}
              >
                <span className="font-light tracking-[-0.01em]">
                  {proj.client} – {proj.title}
                </span>
                <span className="ml-4 text-white/30">{proj.year}</span>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </article>
  );
}
