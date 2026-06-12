import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkItem from "@/components/WorkItem";
import { projects } from "@/data/projects";

const HERO_VIDEO =
  "https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1";

const nav = [
  { href: "#work", label: "work" },
  { href: "/about/", label: "about" },
  { href: "/about/#contact", label: "contact" },
];

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

      {/* About intro + nav */}
      <section className="mt-28 border-t border-white/10 pt-16 sm:mt-40 sm:pt-20">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-12">
          <Reveal className="sm:col-span-2">
            <h2 className="font-title text-6xl lowercase leading-[0.88] tracking-[-0.03em] sm:text-7xl">
              about
            </h2>
            <div className="mt-10 max-w-xl space-y-6 font-serif text-base leading-[1.65] tracking-[-0.015em] sm:mt-12 sm:text-lg">
              <p className="text-white/90">
                chris lam is a freelance commercial and film producer based in
                santa monica, california, working under chris lam productions
                llc.
              </p>
              <p className="text-white/90">
                he produces commercials, branded content, and out-of-home
                campaigns for brands and agencies — recent work includes fox
                sports, foot locker, and postmates.
              </p>
            </div>
            <Link
              href="/about/"
              className="mt-10 inline-block font-mono text-xs uppercase tracking-wider text-white/50 transition-colors duration-300 hover:text-white"
            >
              View full bio →
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <nav className="flex flex-col items-start gap-6 sm:gap-8 sm:pt-2">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="wordmark text-3xl text-white transition-all duration-300 hover:opacity-60 sm:text-4xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* Select works */}
      <section id="work" className="mt-28 scroll-mt-28 border-t border-white/10 pt-16 sm:mt-40 sm:pt-20">
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
