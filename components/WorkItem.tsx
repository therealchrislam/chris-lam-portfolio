import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function WorkItem({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link href={`/work/${project.slug}/`} className="group block">
      <div className="overflow-hidden bg-white/5">
        <div className="relative aspect-video transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <Image
            src={project.coverImage}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes={featured ? "(max-width: 640px) 100vw, 1440px" : "(max-width: 640px) 100vw, 50vw"}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-6 border-t border-white/10 pt-6">
        <h3
          className={`font-title lowercase leading-[0.88] tracking-[-0.03em] transition-opacity duration-300 group-hover:text-white/80 ${
            featured ? "text-5xl sm:text-8xl" : "text-4xl sm:text-6xl"
          }`}
        >
          {project.client} - {project.title}
        </h3>
        <ul className="mt-4 flex items-baseline gap-4 font-mono text-xs uppercase tracking-wider text-white/40">
          <li>{project.client}</li>
          <li>·</li>
          <li>{project.category}</li>
          <li>·</li>
          <li>{project.year}</li>
        </ul>
      </div>
    </Link>
  );
}
