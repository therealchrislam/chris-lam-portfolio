"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalize(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export default function Header() {
  const pathname = normalize(usePathname() ?? "/");

  const linkClass = (active: boolean) =>
    `font-mono text-[13px] tracking-wide transition-colors duration-200 ${
      active ? "text-cream" : "text-cream/45 hover:text-cream"
    }`;

  return (
    <header className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-cream/[0.14] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <nav className="flex flex-col gap-2.5">
        <Link href="/" className={linkClass(pathname === "/")}>
          WORK
        </Link>
        <Link href="/about/" className={linkClass(pathname === "/about")}>
          ABOUT
        </Link>
        <Link href="/contact/" className={linkClass(pathname === "/contact")}>
          CONTACT
        </Link>
      </nav>

      <Link
        href="/"
        className="whitespace-nowrap text-center font-display text-4xl font-bold uppercase leading-none tracking-tight text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
      >
        Chris Lam
      </Link>

      <div className="text-right">
        <div className="mb-2.5 font-mono text-[11px] tracking-wide text-cream/45">
          FREELANCE PRODUCER // EX-W+K
        </div>
        <Link
          href="/contact/"
          className="font-mono text-[11px] tracking-wide text-cream/45 transition-colors duration-200 hover:text-cream"
        >
          INFORMATION
        </Link>
      </div>
    </header>
  );
}
