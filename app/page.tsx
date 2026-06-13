import Link from "next/link";
import { getProjects } from "@/data/projects";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <section className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}/`}
          className="group block"
        >
          <div className="aspect-video w-full overflow-hidden bg-white/5">
            <img
              src={project.coverImage}
              alt={`${project.client} — ${project.title}`}
              className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-70"
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
            {project.client}
          </p>
          <h2 className="mt-1 text-xs uppercase tracking-widest text-white">
            {project.title}
          </h2>
        </Link>
      ))}
    </section>
  );
}
