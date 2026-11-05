/**
 * Monogramme redessiné en vectoriel d'après logo.gif du site actuel (anneau bleu traversé par deux traits),
 * suivi du nom en minuscules comme sur le logo d'origine, ici composé en Fraunces. Bleu du logo : #0071E5.
 */
export function Monogram({ className = "h-9 w-9", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke={light ? "#cdb084" : "#0071e5"} strokeWidth="3" strokeLinecap="round">
      <path d="M36.5 11.2A17 17 0 0 0 9.4 14.5" />
      <path d="M11.5 36.8A17 17 0 0 0 38.6 33.5" />
      <path d="M3 14.5h21.5" />
      <path d="M23.5 33.5H45" />
    </svg>
  );
}

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 sm:gap-3.5">
      <Monogram light={light} className={compact ? "h-8 w-8" : "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"} />
      <span className="flex flex-col leading-none">
        <span className={`serif text-[1.12rem] font-normal tracking-[-0.015em] sm:text-[1.25rem] lg:text-[1.36rem] ${light ? "text-cream" : "text-ink"}`}>martinet-thibault</span>
        <span className={`mt-1.5 text-[0.54rem] font-medium uppercase tracking-[0.3em] sm:text-[0.58rem] ${light ? "text-cream/60" : "text-ink-faint"}`}>entreprise · depuis 1880</span>
      </span>
    </span>
  );
}
