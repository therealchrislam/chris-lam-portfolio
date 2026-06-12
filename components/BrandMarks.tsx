import Link from "next/link";

/** Fixed corner wordmarks, à la the reference: ghosted "producer"
 *  top-left, "chris / lam" top-right with the surname running
 *  vertically down the page edge. */
export default function BrandMarks() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Link
        href="/"
        className="wordmark pointer-events-auto absolute left-6 top-8 text-3xl text-white opacity-30 transition-opacity duration-300 hover:opacity-70 sm:left-10 sm:top-10 sm:text-5xl"
      >
        producer
      </Link>
      <Link
        href="/"
        className="pointer-events-auto absolute right-6 top-8 flex flex-col items-end sm:right-10 sm:top-10"
      >
        <span className="wordmark text-3xl text-white sm:text-5xl">chris</span>
        <span className="wordmark text-3xl text-white [writing-mode:vertical-rl] sm:text-5xl">
          lam
        </span>
      </Link>
    </div>
  );
}
