import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* Works grid - straight into first featured project */}
      <section id="work" className="scroll-mt-24">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 sm:gap-y-32">
          {projects.map((project, i) => {
            const featured = i % 3 === 0;
            return (
              <Reveal
                key={project.slug}
                delay={featured ? 0 : (i % 3) * 120}
                className={featured ? "sm:col-span-2" : ""}
              >
                <WorkItem project={project} featured={featured} />
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
