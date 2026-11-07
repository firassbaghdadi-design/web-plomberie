/**
 * L'entreprise n'a pas de logo public. Proposition typographique : « DBP » en grotesque serrée, suivi d'un degré
 * rouge-orange, et la ligne de métier en petit, comme la signature d'une affiche.
 */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" fill="#0b0b0b" />
      <text x="5" y="31" fontSize="15" fontWeight="700" fill="#fff" style={{ letterSpacing: "-0.06em" }}>DBP</text>
      <circle cx="33.5" cy="9" r="2.6" fill="none" stroke="#ff4a00" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-baseline gap-3">
      <span className={`text-[1.55rem] font-bold leading-none tracking-[-0.07em] ${light ? "text-white" : "text-ink"}`}>
        DBP<span className="deg">°</span>
      </span>
      <span className={`hidden text-[0.74rem] font-medium leading-tight sm:block ${light ? "text-white/70" : "text-ink-faint"}`}>
        Plomberie-Chauffage
      </span>
    </span>
  );
}
