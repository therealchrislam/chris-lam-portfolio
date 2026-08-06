const EMAIL = "lam.chris.clam@gmail.com";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/[0.12] px-6 py-8 sm:px-10 lg:px-12">
      <p className="font-mono text-[12px] tracking-wide text-cream/45">
        CHRIS LAM PRODUCTIONS LLC — LOS ANGELES
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-[12px] tracking-wide text-cream/45 transition-colors duration-200 hover:text-cream"
      >
        {EMAIL.toUpperCase()}
      </a>
    </footer>
  );
}
