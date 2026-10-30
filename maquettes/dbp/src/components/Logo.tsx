/**
 * L'entreprise n'a pas de logo public. Proposition : un monogramme « DBP » en lettres fines dans un cercle de
 * thermostat à arc ouvert, dont la couleur suit l'accent du moment (bleu froid, puis rouge doux).
 */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path d="M9.2 31.4A15.6 15.6 0 1 1 30.8 31.4" stroke="rgb(var(--accent))" strokeWidth="1.4" strokeLinecap="round" />
      <text x="20" y="22.6" textAnchor="middle" fontSize="10.4" fontWeight="600" fill="#13171c" style={{ letterSpacing: "-0.02em" }}>DBP</text>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className="h-9 w-9 shrink-0 lg:h-10 lg:w-10" />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.12rem] font-medium tracking-[-0.01em] sm:text-[1.2rem] ${light ? "text-white" : "text-ink"}`}>DBP</span>
        <span className={`mt-1.5 text-[0.54rem] font-medium uppercase tracking-[0.26em] sm:text-[0.58rem] ${light ? "text-white/70" : "text-ink-faint"}`}>Plomberie · Chauffage</span>
      </span>
    </span>
  );
}
