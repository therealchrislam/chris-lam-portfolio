import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        <Reveal className="sm:order-2 sm:col-span-1">
          <div className="relative aspect-[3/4] bg-gray">
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
            <h1 className="font-title text-6xl lowercase leading-none tracking-[-0.02em] sm:text-7xl">
              about
            </h1>
            <div className="mt-8 max-w-xl space-y-4 font-serif text-base leading-[1.55] tracking-[-0.01em] sm:text-lg">
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
            <div id="contact" className="mt-16 scroll-mt-24 border-t border-black pt-10">
              <h2 className="wordmark text-2xl">contact</h2>
              <ul className="mt-6 font-mono text-xs lowercase leading-[2] sm:text-sm">
                <li>
                  <a
                    href="mailto:hello@chrislamproductions.com"
                    className="underline-offset-4 hover:underline"
                  >
                    hello@chrislamproductions.com
                  </a>
                </li>
                <li>santa monica, ca</li>
                <li>chris lam productions llc</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
