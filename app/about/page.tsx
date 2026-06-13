import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 gap-12 sm:grid-cols-3">
      <div className="animate-fade-in sm:order-2 sm:col-span-1">
        <div className="relative aspect-[3/4] bg-black/5">
          <Image
            src="/headshot-placeholder.svg"
            alt="Chris Lam headshot"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="sm:order-1 sm:col-span-2">
        <h1 className="animate-fade-up font-display text-5xl uppercase leading-[0.88] tracking-tight text-black sm:text-7xl">
          About
        </h1>
        <div className="mt-6 max-w-xl space-y-5 text-sm leading-relaxed text-black/70">
          <p>
            Chris Lam is a freelance commercial and film producer based in
            Santa Monica, California, working under Chris Lam Productions LLC.
          </p>
          <p>
            He produces commercials, branded content, and out-of-home
            campaigns for brands and agencies — recent work includes Fox
            Sports, Foot Locker, and Postmates. Placeholder bio copy: replace
            with a few sentences about background, approach, and the kinds of
            projects you take on.
          </p>
        </div>

        <Reveal>
          <div id="contact" className="mt-14 border-t border-black/10 pt-8">
            <h2 className="text-xs uppercase tracking-widest text-black/40">
              Contact
            </h2>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed">
              <li>
                <a
                  href="mailto:hello@chrislamproductions.com"
                  className="text-black/70 transition-colors duration-200 hover:text-black"
                >
                  hello@chrislamproductions.com
                </a>
              </li>
              <li className="text-black/40">Santa Monica, CA</li>
              <li className="text-black/40">Chris Lam Productions LLC</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
