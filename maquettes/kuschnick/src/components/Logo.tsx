/**
 * Le site actuel n'a pas de logo (logo par défaut du thème WordPress). Proposition : le titre d'un journal de quartier,
 * « Anciens Établissements » en petites capitales au-dessus de « Kuschnick » en Playfair Display, et un monogramme K
 * dans un cercle fin, comme le tampon de la maison. Accent cuivre.
 */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <circle cx="20" cy="20" r="18.6" stroke="#9c4a22" strokeWidth="1.1" />
      <circle cx="20" cy="20" r="15.4" stroke="#9c4a22" strokeWidth=".6" opacity=".55" />
      <path d="M15.2 11.5v17M15.2 20.4 24.6 11.5M18.6 17.6l6.6 10.9" stroke="#151311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className="h-8 w-8 shrink-0 lg:h-9 lg:w-9" />
      <span className="logo-text flex flex-col leading-none">
        <span className={`text-[0.5rem] font-semibold uppercase tracking-[0.3em] sm:text-[0.54rem] ${light ? "text-paper/70" : "text-ink-faint"}`}>Anciens Établissements</span>
        <span className={`mt-1 font-serif text-[1.3rem] tracking-[0.01em] sm:text-[1.42rem] ${light ? "text-paper" : "text-ink"}`}>Kuschnick</span>
      </span>
    </span>
  );
}
