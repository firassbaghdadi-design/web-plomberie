/**
 * Concept signature, en accent seulement : la ferme de charpente du logo M. Fabulet (entrait, arbalétriers,
 * poinçon, contrefiches), dessinée d'un trait fin de cuivre. Elle se trace pièce par pièce quand on arrive dessus.
 */

type Seg = [number, number, number, number];

const PIECES: Seg[] = [
  [4, 52, 116, 52],
  [4, 52, 60, 8],
  [116, 52, 60, 8],
  [60, 8, 60, 52],
  [60, 52, 32, 30],
  [60, 52, 88, 30],
];

export function FermeMark({ className = "h-8 w-16", auto = false, start }: { className?: string; auto?: boolean; start?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={`ferme ${auto ? "ferme-auto" : ""} overflow-visible text-cuivre ${className}`} style={start ? { ["--start" as string]: start } : undefined} aria-hidden="true">
      {PIECES.map((p, i) => (
        <line key={i} className="piece" x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} pathLength={1} stroke="currentColor" strokeOpacity={i < 3 ? 1 : 0.7} strokeWidth={i < 3 ? 1.5 : 1} strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ ["--i" as string]: i }} />
      ))}
    </svg>
  );
}
