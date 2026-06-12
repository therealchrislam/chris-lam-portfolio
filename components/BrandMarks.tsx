import Link from "next/link";

export default function BrandMarks() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-baseline justify-between px-6 py-8 sm:px-10">
        <Link
          href="/"
          className="wordmark text-2xl text-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
        >
          chris lam
        </Link>
        <span className="wordmark text-2xl text-white sm:text-3xl">
          producer
        </span>
      </div>
    </div>
  );
}
