/**
 * Concept signature : le canal Saint-Martin et ses écluses.
 * Chaque section s'ouvre sur un petit sas d'écluse vu en coupe ; quand la section arrive à l'écran,
 * l'eau y monte, puis la porte aval s'ouvre vers la section suivante, comme l'eau passe d'écluse en écluse.
 */
export function LockMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 26" className={`lock ${className}`} aria-hidden="true">
      <path d="M1 7.5h4" stroke="#0071e5" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <path className="lock-water" d="M5 9h16v13H5z" fill="rgba(0,113,229,.16)" />
      <path className="lock-water" d="M5 9h16" stroke="#0071e5" strokeWidth="1.4" />
      <path d="M5 4v18h16" stroke="#9aa6b6" strokeWidth="1" fill="none" />
      <path className="lock-gate lock-gate-out" d="M21 4v18" stroke="#0d1b2e" strokeWidth="1.6" />
      <path d="M21 22h4" stroke="#9aa6b6" strokeWidth="1" />
    </svg>
  );
}

/** Libellé de section : sas d'écluse, numéro, titre court. `data-ecluse` place aussi une porte sur le canal de l'en-tête. */
export function Ecluse({ n, children, className = "", light = false }: { n: string; children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${light ? "text-white/70" : ""} ${className}`} data-ecluse={typeof children === "string" ? children : n}>
      <LockMark />
      <span className={`num ${light ? "text-white" : "text-blue-deep"}`}>{n}</span>
      <span aria-hidden="true" className={`h-px w-6 ${light ? "bg-white/30" : "bg-line"}`} />
      <span>{children}</span>
    </p>
  );
}
