import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/projects";

const HERO_VIDEO =
  "https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1";

export default function HomePage() {
  return (
    <>
      {/* Hero reel */}
      <section className="animate-fade-in">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={HERO_VIDEO}
            title="Reel"
            className="pointer-events-none absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
          />
        </div>
      </section>

      {/* Select works */}
      <section id="work" className="mt-16 scroll-mt-20 sm:mt-20">
        <Reveal>
          <h2 className="font-title text-6xl lowercase leading-[0.88] tracking-[-0.03em] sm:text-7xl">
            select works
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-20 sm:mt-16 sm:grid-cols-2 sm:gap-y-32">
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
