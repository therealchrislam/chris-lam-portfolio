import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import { capabilities } from "@/data/projects";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-20 lg:px-12 lg:py-24">
      <div className="animate-fade-in relative aspect-[3/4] bg-panel lg:order-1">
        <Placeholder label="Portrait — Chris Lam" />
      </div>

      <div className="lg:order-2">
        <div className="animate-fade-up text-xs tracking-[0.14em] text-cream/55">
          ABOUT
        </div>
        <h1 className="animate-fade-up mt-6 font-display text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-5xl">
          Freelance commercial and film producer, based in Los Angeles.
        </h1>
        <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-cream/80">
          <p>
            Chris Lam produces commercials and branded films through Special
            Group and other agency partners, working under Chris Lam
            Productions LLC. Recent work spans casting and clearance
            strategy, on-location production, and post-production
            management for clients including Foot Locker, Fox Sports, and
            Postmates.
          </p>
          <p>
            Background includes time at Wieden+Kennedy on the Nike account.
            USC-trained, LA-based, and equally comfortable running a set or
            steering a post schedule.
          </p>
        </div>

        <Reveal>
          <div className="mt-12">
            <div className="mb-4 text-xs tracking-[0.14em] text-cream/55">
              CAPABILITIES
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="border-t border-cream/[0.12] pt-3 text-sm"
                >
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
