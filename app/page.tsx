import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import { getProjects } from "@/data/projects";

export default function HomePage() {
  const projects = getProjects();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 4) * 70}>
          <Link
            href={`/work/${project.slug}/`}
            className="group relative block aspect-[3/4] overflow-hidden bg-ink"
          >
            <div className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]">
              <Placeholder label={project.tilePlaceholder} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/[0.05] to-black/25" />
            <div className="pointer-events-none absolute left-5 top-5 font-mono text-[11px] tracking-wide text-cream/85">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="pointer-events-none absolute left-[60px] right-5 top-5 text-right font-mono text-[10px] leading-snug tracking-wide text-cream/85">
              {project.category}
            </div>
            <div className="pointer-events-none absolute inset-x-5 bottom-5">
              <div className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
                {project.title}
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-wide text-cream/60">
                {project.client} / {project.year}
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
