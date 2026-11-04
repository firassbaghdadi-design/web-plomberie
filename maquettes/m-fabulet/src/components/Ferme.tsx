/**
 * Concept signature : la ferme de charpente du logo M. Fabulet (triangle, poinçon, contrefiches).
 * Elle s'assemble pièce par pièce, puis les tuiles viennent se poser dessus. Toujours en accent discret :
 * - FermeGable suit le pignon de la photo du héros (les arbalétriers sont les bords du toit découpé) ;
 * - FermeMark est la petite ferme qui marque les sections et se construit quand on arrive dessus.
 */

type Seg = [number, number, number, number];

function tilesAlong(x1: number, y1: number, x2: number, y2: number, n: number, dy: number): Seg[] {
  const out: Seg[] = [];
  for (let k = 0; k < n; k++) {
    const a = (k + 0.06) / n, b = (k + 0.94) / n;
    out.push([x1 + (x2 - x1) * a, y1 + (y2 - y1) * a + dy, x1 + (x2 - x1) * b, y1 + (y2 - y1) * b + dy]);
  }
  return out;
}

function GableSvg({ apex, className, start = "0.9s" }: { apex: number; className: string; start?: string }) {
  const A = apex * 10;
  const pieces: { d: Seg; c: string; w: number; o?: number }[] = [
    { d: [0, 100, A, 0], c: "#6B4423", w: 3 },
    { d: [1000, 100, A, 0], c: "#6B4423", w: 3 },
    { d: [0, 100, 1000, 100], c: "#FBF7F0", w: 1, o: 0.35 },
    { d: [A, 0, A, 100], c: "#FBF7F0", w: 1, o: 0.7 },
    { d: [A, 100, A / 2, 50], c: "#FBF7F0", w: 1, o: 0.7 },
    { d: [A, 100, (A + 1000) / 2, 50], c: "#FBF7F0", w: 1, o: 0.7 },
  ];
  // Deux rangs de tuiles décalés d'un demi-pas, comme sur un vrai versant.
  const tiles = [
    ...tilesAlong(0, 100, A, 0, 30, -4).reverse(),
    ...tilesAlong(1000, 100, A, 0, 18, -4).reverse(),
    ...tilesAlong(0 + A / 60, 100 - 100 / 60, A, 0, 29, -9.5).reverse(),
    ...tilesAlong(1000 - (1000 - A) / 36, 100 - 100 / 36, A, 0, 17, -9.5).reverse(),
  ];
  return (
    <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className={`ferme ferme-auto pointer-events-none absolute inset-x-0 top-0 z-[3] h-[var(--eave)] w-full overflow-visible ${className}`} style={{ ["--start" as string]: start }} aria-hidden="true">
      {pieces.map((p, i) => (
        <line key={i} className="piece" x1={p.d[0]} y1={p.d[1]} x2={p.d[2]} y2={p.d[3]} pathLength={1} stroke={p.c} strokeOpacity={p.o ?? 1} strokeWidth={p.w} strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ ["--i" as string]: i }} />
      ))}
      {tiles.map((t, i) => (
        <line key={`t${i}`} className="tile" x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]} stroke={i >= 48 ? "#C9683A" : i % 4 === 1 ? "#9A4A1F" : "#B4532A"} strokeWidth={5} vectorEffect="non-scaling-stroke" style={{ ["--i" as string]: (i % 30) + (i >= 48 ? 6 : 0) }} />
      ))}
    </svg>
  );
}

export function FermeGable() {
  return (
    <>
      <GableSvg apex={66} className="md:hidden" />
      <GableSvg apex={63} className="hidden md:block" />
    </>
  );
}

/** Petite ferme autonome (proportions du logo), qui s'assemble au défilement. */
export function FermeMark({ className = "h-8 w-16", tone = "bois" }: { className?: string; tone?: "bois" | "creme" }) {
  const c = tone === "bois" ? "#6B4423" : "#F4ECDF";
  const pieces: Seg[] = [
    [4, 52, 116, 52],
    [4, 52, 60, 8],
    [116, 52, 60, 8],
    [60, 8, 60, 52],
    [60, 52, 32, 30],
    [60, 52, 88, 30],
  ];
  const tiles = [...tilesAlong(4, 52, 60, 8, 5, -5).reverse(), ...tilesAlong(116, 52, 60, 8, 5, -5).reverse()];
  return (
    <svg viewBox="0 0 120 60" className={`ferme overflow-visible ${className}`} aria-hidden="true">
      {pieces.map((p, i) => (
        <line key={i} className="piece" x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} pathLength={1} stroke={c} strokeWidth={i < 3 ? 2.2 : 1.4} strokeLinecap="round" style={{ ["--i" as string]: i }} />
      ))}
      {tiles.map((t, i) => (
        <line key={`t${i}`} className="tile" x1={t[0]} y1={t[1]} x2={t[2]} y2={t[3]} stroke="#B4532A" strokeWidth={3.2} style={{ ["--i" as string]: i % 5 }} />
      ))}
    </svg>
  );
}
