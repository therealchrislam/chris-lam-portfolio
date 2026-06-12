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
      <section className="mt-20 grid grid-cols-1 gap-12 sm:mt-28 sm:grid-cols-3 sm:gap-8">
        <Reveal className="sm:col-span-2">
          <h2 className="font-title text-6xl lowercase leading-none tracking-[-0.02em] sm:text-7xl">
            about
          </h2>
          <div className="mt-7 max-w-xl space-y-4 font-serif text-base leading-[1.55] tracking-[-0.01em] sm:text-lg">
            <p>
              chris lam is a freelance commercial and film producer based in
              santa monica, california, working under chris lam productions
              llc.
            </p>
            <p>
              he produces commercials, branded content, and out-of-home
              campaigns for brands and agencies — recent work includes fox
              sports, foot locker, and postmates.
            </p>
          </div>
          <Link
            href="/about/"
            className="mt-7 inline-block font-mono text-xs lowercase underline-offset-4 hover:underline sm:text-sm"
          >
            full bio →
          </Link>
        </Reveal>
        <Reveal delay={150}>
          <nav className="flex flex-col items-start gap-3 sm:pt-24">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="wordmark text-3xl underline-offset-8 transition-opacity duration-300 hover:underline hover:opacity-60 sm:text-4xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* Select works */}
      <section id="work" className="mt-24 scroll-mt-24 sm:mt-36">
        <Reveal>
          <h2 className="font-title text-6xl lowercase leading-none tracking-[-0.02em] sm:text-7xl">
            select works
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-14 sm:grid-cols-2 sm:gap-y-24">
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
