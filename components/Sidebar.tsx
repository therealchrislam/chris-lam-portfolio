"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProject = {
  slug: string;
  navTitle: string;
};

type SidebarProps = {
  projects: NavProject[];
  collapsed: boolean;
  onReveal: () => void;
  onHide: () => void;
};

function normalize(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export default function Sidebar({
  projects,
  collapsed,
  onReveal,
  onHide,
}: SidebarProps) {
  const pathname = normalize(usePathname() ?? "/");

  const linkClass = (active: boolean) =>
    `block text-xs uppercase tracking-widest leading-snug transition-colors duration-200 ${
      active ? "text-black" : "text-black/40 hover:text-black"
    }`;

  return (
    <aside
      onMouseEnter={onReveal}
      onMouseLeave={onHide}
      className={`animate-fade-in bg-white px-6 pt-8 pb-4 lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-72 lg:flex-col lg:overflow-y-auto lg:px-10 lg:py-10 lg:transition-transform lg:duration-500 lg:ease-[cubic-bezier(0.22,1,0.36,1)] ${
        collapsed ? "lg:-translate-x-full" : "lg:translate-x-0"
      }`}
    >
      <div>
        <Link
          href="/"
          className="block font-display text-3xl uppercase tracking-tight text-black"
        >
          Chris <span className="bg-yellow px-1.5">Lam</span>
        </Link>
        <p className="mt-3 text-xs uppercase tracking-widest text-black/50">
          Freelance Producer
        </p>
      </div>

      <nav className="mt-12 hidden space-y-2 lg:block">
        {projects.map((project) => {
          const href = `/work/${project.slug}/`;
          const active = pathname === normalize(href);
          return (
            <Link
              key={project.slug}
              href={href}
              className={`relative block truncate text-xs uppercase tracking-widest leading-snug transition-colors duration-200 ${
                active ? "text-black" : "text-black/40 hover:text-black"
              }`}
            >
              {active && (
                <span className="absolute top-1/2 -left-4 h-1.5 w-1.5 -translate-y-1/2 bg-yellow" />
              )}
              {project.navTitle}
            </Link>
          );
        })}
      </nav>

      <nav className="mt-8 flex gap-6 lg:mt-auto lg:block lg:space-y-2 lg:pt-12">
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
      </nav>
    </aside>
  );
}
