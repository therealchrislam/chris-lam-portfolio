import Link from "next/link";

/** Fixed corner wordmarks, à la the reference: ghosted "producer"
 *  top-left, "chris / lam" top-right with the surname running
 *  vertically down the page edge. */
export default function BrandMarks() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <Link
        href="/"
        className="wordmark pointer-events-auto absolute left-4 top-4 text-3xl text-black opacity-25 transition-opacity duration-300 hover:opacity-60 sm:left-8 sm:top-6 sm:text-5xl"
      >
        producer
      </Link>
      <Link
        href="/"
        className="pointer-events-auto absolute right-4 top-4 flex flex-col items-end sm:right-8 sm:top-6"
      >
        <span className="wordmark text-3xl text-black sm:text-5xl">chris</span>
        <span className="wordmark text-3xl text-black [writing-mode:vertical-rl] sm:text-5xl">
          lam
        </span>
      </Link>
    </div>
  );
}
