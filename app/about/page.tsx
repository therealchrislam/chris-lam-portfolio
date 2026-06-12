import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="grid grid-cols-1 gap-12 sm:grid-cols-3">
      <div className="sm:order-2 sm:col-span-1">
        <div className="relative aspect-[3/4] bg-white/5">
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
        <h1 className="text-xs uppercase tracking-widest text-white">About</h1>
        <div className="mt-6 max-w-xl space-y-5 text-sm leading-relaxed text-white/80">
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

        <div id="contact" className="mt-14 border-t border-white/10 pt-8">
          <h2 className="text-xs uppercase tracking-widest text-white/40">
            Contact
          </h2>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed">
            <li>
              <a
                href="mailto:hello@chrislamproductions.com"
                className="text-white/80 transition-colors duration-200 hover:text-white"
              >
                hello@chrislamproductions.com
              </a>
            </li>
            <li className="text-white/40">Santa Monica, CA</li>
            <li className="text-white/40">Chris Lam Productions LLC</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
