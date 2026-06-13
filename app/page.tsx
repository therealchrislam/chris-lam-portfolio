import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/data/projects";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <section className="grid grid-cols-1 gap-x-8 gap-y-14 pt-4 sm:grid-cols-2 sm:pt-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 90}>
            <Link href={`/work/${project.slug}/`} className="group block">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/5">
                <img
                  src={project.coverImage}
                  alt={`${project.client} — ${project.title}`}
                  className="h-full w-full object-cover transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-90"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-black/40 transition-colors duration-200 group-hover:text-black/70">
                {project.client}
              </p>
              <h2 className="mt-1 text-xs uppercase tracking-widest text-black">
                {project.title}
              </h2>
            </Link>
          </Reveal>
        ))}
    </section>
  );
}
