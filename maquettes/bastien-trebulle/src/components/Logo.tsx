/** Petit compteur de laiton : la marque de la maquette. */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const long = i % 6 === 0;
    const r1 = 24, r2 = long ? 19 : 21.5;
    return <line key={i} x1={32 + Math.sin(a) * r1} y1={32 - Math.cos(a) * r1} x2={32 + Math.sin(a) * r2} y2={32 - Math.cos(a) * r2} stroke="#ede7db" strokeWidth={long ? 1.6 : 0.8} strokeLinecap="round" opacity={long ? 1 : 0.6} />;
  });
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="30" stroke="#c8a565" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="26.5" fill="#0c0d0f" stroke="#7c612f" strokeWidth=".8" />
      {ticks}
      <g transform="rotate(38 32 32)"><path d="M32 13 L33.4 35 L30.6 35 Z" fill="#ead39c" /></g>
      <circle cx="32" cy="32" r="3" fill="#c8a565" />
    </svg>
  );
}

/**
 * Le nom en capitales fines de Cormorant, esperluette italique de laiton. Le logo du site actuel est sombre sur blanc :
 * il ne se lirait pas sur l'encre de cette direction, d'où ce monogramme typographique.
 */
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Mark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      <span className="flex flex-col leading-none">
        <span className="serif whitespace-nowrap text-[1.02rem] tracking-[0.14em] text-fg sm:text-[1.28rem]">BASTIEN <em className="italic text-brass">&amp;</em> TREBULLE</span>
        <span className="mt-1.5 whitespace-nowrap text-[0.5rem] font-medium uppercase tracking-[0.34em] text-fg-faint sm:text-[0.56rem]">Paris XVIe · depuis 1880</span>
      </span>
    </span>
  );
}
