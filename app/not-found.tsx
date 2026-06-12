import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tightest sm:text-5xl">404</h1>
      <p className="mt-4">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm underline underline-offset-4"
      >
        Back to all work
      </Link>
    </section>
  );
}
