// Stand-in for a not-yet-supplied photo/video still. Mirrors the empty state
// of Claude Design's <image-slot> (dashed ring + centered icon + caption) so
// the site keeps looking intentional until real stills are dropped in.
export default function Placeholder({
  label,
  bordered = true,
  className = "",
}: {
  label: string;
  bordered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/[0.03] px-4 text-center ${
        bordered ? "border border-dashed border-cream/15" : ""
      } ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cream/35"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[92%] font-mono text-[11px] uppercase leading-snug tracking-wide text-cream/40">
        {label}
      </span>
    </div>
  );
}
