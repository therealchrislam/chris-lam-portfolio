import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <h1 className="font-display text-5xl uppercase tracking-tight sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-sm text-black/70">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-xs uppercase tracking-widest text-black/40 transition-colors duration-200 hover:text-black"
      >
        ← All works
      </Link>
    </section>
  );
}
