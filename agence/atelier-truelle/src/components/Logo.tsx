export function TrowelMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#C8553D" />
      <g transform="rotate(38 32 32) translate(0 2)">
        <path d="M32 6 L46 34 Q32 41 18 34 Z" fill="#F6F1E7" />
        <path d="M32 37 L32 45" stroke="#F6F1E7" strokeWidth="3.2" strokeLinecap="round" />
        <rect x="28.2" y="44" width="7.6" height="13" rx="3.8" fill="#F6F1E7" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <TrowelMark className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`block font-display text-[0.7rem] font-semibold uppercase tracking-[0.3em] ${light ? "text-zinc" : "text-zinc-dark"}`}>Atelier</span>
        <span className={`mt-1 block font-display text-2xl font-extrabold tracking-tight ${light ? "text-platre" : "text-ardoise"}`}>Truelle</span>
      </span>
    </span>
  );
}
