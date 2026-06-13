"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProject = {
  slug: string;
  navTitle: string;
};

function normalize(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export default function Sidebar({ projects }: { projects: NavProject[] }) {
  const pathname = normalize(usePathname() ?? "/");

  const linkClass = (active: boolean) =>
    `block text-xs uppercase tracking-widest leading-relaxed transition-colors duration-200 ${
      active ? "text-white" : "text-white/40 hover:text-white"
    }`;

  return (
    <aside className="animate-fade-in px-6 pt-8 pb-4 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:overflow-y-auto lg:px-10 lg:py-10">
      <div>
        <Link
          href="/"
          className="block text-xs uppercase tracking-widest text-white"
        >
          Chris Lam
        </Link>
        <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
          Freelance Producer
        </p>
      </div>

      <nav className="mt-12 hidden space-y-3 lg:block">
        {projects.map((project) => {
          const href = `/work/${project.slug}/`;
          return (
            <Link
              key={project.slug}
              href={href}
              className={`${linkClass(pathname === normalize(href))} truncate`}
            >
              {project.navTitle}
            </Link>
          );
        })}
      </nav>

      <nav className="mt-8 flex gap-6 lg:mt-auto lg:block lg:space-y-3 lg:pt-12">
        <Link href="/" className={`${linkClass(pathname === "/")} lg:hidden`}>
          Works
        </Link>
        <Link href="/about/" className={linkClass(pathname === "/about")}>
          About
        </Link>
        <a
          href="mailto:hello@chrislamproductions.com"
          className={linkClass(false)}
        >
          Contact
        </a>
        <p className="hidden pt-6 text-[10px] uppercase tracking-widest text-white/30 lg:block">
          Santa Monica, CA
        </p>
      </nav>
    </aside>
  );
}
