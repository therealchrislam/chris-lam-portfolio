import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
};

const EMAIL = "lam.chris.clam@gmail.com";
const [EMAIL_USER, EMAIL_DOMAIN] = EMAIL.split("@");

export default function ContactPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
      <div className="animate-fade-up text-xs tracking-[0.14em] text-cream/55">
        CONTACT
      </div>
      <a
        href={`mailto:${EMAIL}`}
        className="animate-fade-up mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight transition-opacity duration-200 hover:opacity-70 sm:text-4xl lg:text-6xl"
      >
        {EMAIL_USER.toUpperCase()}@
        <wbr />
        {EMAIL_DOMAIN.toUpperCase()}
      </a>

      <Reveal>
        <div className="mt-12 flex flex-wrap gap-8">
          {/* Placeholders — point these at the real profiles when ready. */}
          <a
            href="#"
            className="border-b border-cream/25 pb-1 text-sm tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            className="border-b border-cream/25 pb-1 text-sm tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            className="border-b border-cream/25 pb-1 text-sm tracking-wide text-cream/80 transition-colors duration-200 hover:text-cream"
          >
            RESUME
          </a>
        </div>
      </Reveal>

      <div className="mt-14 text-[13px] tracking-wide text-cream/55">
        LOS ANGELES, CA
      </div>
    </section>
  );
}
