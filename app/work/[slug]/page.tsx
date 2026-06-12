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
          <div className="relative aspect-video w-full bg-gray">
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
        <header className="mt-10 sm:mt-14">
          <h1 className="font-title text-5xl lowercase leading-[0.9] tracking-[-0.02em] sm:text-8xl">
            {project.client} - {project.title}
          </h1>
          <ul className="mt-6 font-mono text-xs lowercase leading-[1.7] sm:text-sm">
            <li>client: {project.client}</li>
            <li>
              category: {project.category}, {project.year}
            </li>
            <li>role: producer</li>
          </ul>
        </header>
      </Reveal>

      <Reveal>
        <p className="mt-9 max-w-2xl font-serif text-base leading-[1.55] tracking-[-0.01em] sm:text-lg">
          {project.description}
        </p>
      </Reveal>

      <Reveal>
        <section className="mt-16 border-t border-black pt-10">
          <h2 className="wordmark text-2xl">credits</h2>
          <dl className="mt-7 max-w-2xl">
            {project.credits.map((credit) => (
              <div
                key={`${credit.role}-${credit.name}`}
                className="grid grid-cols-2 gap-4 py-1 font-mono text-xs lowercase leading-[1.7] sm:text-sm"
              >
                <dt>{credit.role}</dt>
                <dd>{credit.name}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      <div className="mt-16">
        <Link
          href="/#work"
          className="font-mono text-xs lowercase underline-offset-4 hover:underline sm:text-sm"
        >
          ← back to all work
        </Link>
      </div>
    </article>
  );
}
