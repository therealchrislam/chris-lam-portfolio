"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

type NavProject = {
  slug: string;
  navTitle: string;
};

// Coordinates the auto-hiding sidebar with the main content margin. On a
// project page the sidebar tucks off-screen (macOS-toolbar style) and the
// content expands to full width; hovering the left edge slides it back in as
// an overlay.
export default function AppShell({
  projects,
  children,
}: {
  projects: NavProject[];
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const isProject = pathname.startsWith("/work/");
  const [revealed, setRevealed] = useState(false);
  const collapsed = isProject && !revealed;

  // Auto-hide again after navigating (e.g. picking a project from the
  // revealed sidebar) so the new page takes focus.
  useEffect(() => {
    setRevealed(false);
  }, [pathname]);

  return (
    <>
      <Sidebar
        projects={projects}
        collapsed={collapsed}
        overlay={isProject}
        onReveal={() => setRevealed(true)}
        onHide={() => setRevealed(false)}
      />

      {/* Left-edge reveal zone with a hamburger hint — desktop, project pages. */}
      {isProject && (
        <button
          type="button"
          aria-label="Show navigation"
          onMouseEnter={() => setRevealed(true)}
          onFocus={() => setRevealed(true)}
          className="fixed inset-y-0 left-0 z-40 hidden w-14 lg:block"
        >
          <span
            className={`absolute top-9 left-6 flex flex-col gap-[5px] transition-opacity duration-300 ${
              collapsed ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </span>
        </button>
      )}

      <main
        className={`px-6 pb-24 pt-4 transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-12 lg:pt-10 ${
          isProject ? "lg:ml-0" : "lg:ml-72"
        }`}
      >
        {children}
      </main>
    </>
  );
}
