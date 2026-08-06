import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-12">
      <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-sm text-cream/70">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-xs tracking-widest text-cream/55 transition-colors duration-200 hover:text-cream"
      >
        ← All work
      </Link>
    </section>
  );
}
