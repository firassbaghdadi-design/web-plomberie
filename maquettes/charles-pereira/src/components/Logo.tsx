/** Repère : un raccord en coude, vu en perspective isométrique (deux conduites, une bague). */
export function Monogram({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="#1d4e89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 11.5 17 5.2 28 11.5v10.2" />
      <path d="M9.5 13.6 17 9.3l7.5 4.3v10.4" />
      <path d="M28 21.7 17 28" />
      <path d="M24.5 24 17 28.3" />
      <path d="M6 11.5v10.2L17 28" />
      <path d="M9.5 13.6v6.4" />
      <path d="M28 27.8l5 2.9M28 21.7v6.1" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Monogram />
      <span className="logo-text flex flex-col leading-none">
        <span className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-ink-faint">Entreprise</span>
        <span className="mt-1.5 text-[1.12rem] font-medium tracking-[-0.01em] text-ink">Charles Pereira</span>
      </span>
    </span>
  );
}
