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
        onReveal={() => setRevealed(true)}
        onHide={() => setRevealed(false)}
      />

      {/* Invisible left-edge zone — hovering it reveals the sidebar, which
          pushes the content right. Desktop + project pages only. */}
      {isProject && (
        <div
          aria-hidden
          onMouseEnter={() => setRevealed(true)}
          className="fixed inset-y-0 left-0 z-40 hidden w-10 lg:block"
        />
      )}

      <main
        className={`px-6 pb-24 pt-4 transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-12 lg:pt-10 ${
          collapsed ? "lg:ml-0" : "lg:ml-72"
        }`}
      >
        {children}
      </main>
    </>
  );
}
