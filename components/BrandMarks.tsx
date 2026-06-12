"use client";

import Link from "next/link";
import { useState } from "react";

export default function BrandMarks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-baseline justify-between px-6 py-8 sm:px-10">
        <Link
          href="/"
          className="wordmark text-2xl text-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
        >
          chris lam
        </Link>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="wordmark text-2xl text-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
          >
            producer
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 border border-white/10 bg-black py-4">
              <Link
                href="/"
                className="block px-6 py-2 font-serif text-sm text-white/70 transition-colors duration-200 hover:text-white"
                onClick={() => setOpen(false)}
              >
                All works
              </Link>
              <Link
                href="/about/"
                className="block px-6 py-2 font-serif text-sm text-white/70 transition-colors duration-200 hover:text-white"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
