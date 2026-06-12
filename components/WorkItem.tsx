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
      <div className="overflow-hidden bg-gray">
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
      <h3
        className={`mt-5 font-title lowercase leading-[0.9] tracking-[-0.02em] ${
          featured ? "text-5xl sm:text-8xl" : "text-4xl sm:text-6xl"
        }`}
      >
        {project.client} - {project.title}
      </h3>
      <ul className="mt-4 font-mono text-xs lowercase leading-[1.7] sm:text-sm">
        <li>client: {project.client}</li>
        <li>
          category: {project.category}, {project.year}
        </li>
        <li>role: producer</li>
      </ul>
    </Link>
  );
}
