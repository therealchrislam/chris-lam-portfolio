import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-12">
        <Reveal className="sm:order-2 sm:col-span-1">
          <div className="relative aspect-[3/4] bg-white/5">
            <Image
              src="/headshot-placeholder.svg"
              alt="Chris Lam headshot"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="sm:order-1 sm:col-span-2">
          <Reveal>
            <h1 className="font-title text-6xl lowercase leading-[0.88] tracking-[-0.03em] sm:text-7xl">
              about
            </h1>
            <div className="mt-10 max-w-xl space-y-6 font-serif text-base leading-[1.65] tracking-[-0.015em] text-white/90 sm:text-lg">
              <p>
                chris lam is a freelance commercial and film producer based in
                santa monica, california, working under chris lam productions
                llc.
              </p>
              <p>
                he produces commercials, branded content, and out-of-home
                campaigns for brands and agencies — recent work includes fox
                sports, foot locker, and postmates. placeholder bio copy:
                replace with a few sentences about background, approach, and
                the kinds of projects you take on.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div id="contact" className="mt-20 scroll-mt-24 border-t border-white/10 pt-12">
              <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">Contact</h2>
              <ul className="mt-8 space-y-4 font-serif text-base tracking-[-0.01em] sm:text-lg">
                <li>
                  <a
                    href="mailto:hello@chrislamproductions.com"
                    className="text-white/90 transition-colors duration-300 hover:text-white"
                  >
                    hello@chrislamproductions.com
                  </a>
                </li>
                <li className="text-white/50">Santa Monica, CA</li>
                <li className="text-white/50">Chris Lam Productions LLC</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
