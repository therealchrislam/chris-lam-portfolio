// Fixed, full-viewport film-grain texture sitting above all page content.
// Purely decorative — pointer-events are disabled so it never intercepts
// clicks — and it respects prefers-reduced-motion via the .animate-grain
// rule in globals.css.
export default function GrainOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full overflow-hidden opacity-[0.05] mix-blend-overlay"
    >
      <filter id="grainFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={0.85}
          numOctaves={2}
          stitchTiles="stitch"
        />
      </filter>
      {/* Oversized + the .animate-grain keyframes jitter its position, so the
          drift never reveals an edge against the fixed viewport frame. */}
      <rect
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filter="url(#grainFilter)"
        className="animate-grain"
      />
    </svg>
  );
}
