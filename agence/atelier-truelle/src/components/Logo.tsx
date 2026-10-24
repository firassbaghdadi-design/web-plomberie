// Symbole : la lame de la truelle est aussi un curseur de souris (voir agence/charte-graphique).
export function TrowelMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#C8553D" />
      <g transform="rotate(-34 32 32) translate(0 1) translate(32 32) scale(1.1) translate(-32 -32)" strokeLinejoin="round" strokeLinecap="round">
        <path d="M32 7 L45.5 37 L32 30.5 L18.5 37 Z" fill="#F4EEE3" stroke="#F4EEE3" strokeWidth="2" />
        <path d="M32 31 L32 41" stroke="#F4EEE3" strokeWidth="3.4" />
        <rect x="27.6" y="40" width="8.8" height="16" rx="4.4" fill="#14191C" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <TrowelMark className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span className={`block text-[0.68rem] font-semibold uppercase tracking-[0.3em] ${light ? "text-zinc" : "text-zinc-dark"}`}>Atelier</span>
        <span className={`mt-1 block font-display text-[1.7rem] font-semibold tracking-tight ${light ? "text-platre" : "text-ardoise"}`}>Truelle</span>
      </span>
    </span>
  );
}
