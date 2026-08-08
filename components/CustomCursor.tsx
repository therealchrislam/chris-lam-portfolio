"use client";

import { useEffect, useRef } from "react";

// A small circle that replaces the system pointer, following the mouse.
// Skipped on touch devices (no persistent pointer to track). Stays
// opacity-0 until the first real mousemove, so it never flashes at the
// top-left corner before the cursor's actual position is known.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    if (!dot) return;

    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      dot.style.opacity = "1";
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream opacity-0 mix-blend-difference transition-[transform,opacity] duration-100 ease-out"
    />
  );
}
