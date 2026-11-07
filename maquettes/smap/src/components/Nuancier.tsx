/**
 * Objet signature de la maquette SMAP : un nuancier d'échantillons de matériaux, tenu par un rivet en laiton,
 * qui s'ouvre en éventail au chargement (CSS, globals.css : .fan). Chaque matière est dessinée en CSS et en SVG,
 * de façon déterministe (tirage pseudo-aléatoire à graine fixe) pour que le rendu serveur reste stable.
 */

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Zellige : carreaux de terre émaillée, chaque carreau a sa nuance et son reflet. */
function Zellige() {
  const r = rng(7);
  const greens = ["#2d5a4d", "#356656", "#264f44", "#3f7262", "#2a5547", "#47796a", "#30604f"];
  return (
    <div className="mat-zellige">
      {Array.from({ length: 18 }, (_, i) => (
        <i key={i} style={{ ["--c" as string]: greens[Math.floor(r() * greens.length)], ["--x" as string]: `${20 + r() * 50}%`, ["--y" as string]: `${15 + r() * 45}%` }} />
      ))}
    </div>
  );
}

/** Terrazzo : éclats de marbre et de terre cuite pris dans un liant clair. */
function Terrazzo({ uid }: { uid: string }) {
  const r = rng(23);
  const palette = ["#a85438", "#a85438", "#8a8379", "#2d5a4d", "#d9cbb4", "#f7f3ec", "#3a3430", "#c78b6c", "#b9b0a3"];
  const chips = Array.from({ length: 95 }, () => {
    const cx = r() * 104 - 2, cy = r() * 204 - 2;
    const big = r() < 0.18;
    const rad = big ? 4 + r() * 4 : 0.8 + r() * 2.4;
    const n = 5 + Math.floor(r() * 3);
    const rot = r() * Math.PI;
    const pts = Array.from({ length: n }, (_, k) => {
      const a = rot + (k / n) * Math.PI * 2;
      const rr = rad * (0.6 + r() * 0.5);
      return `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
    }).join(" ");
    return { pts, fill: palette[Math.floor(r() * palette.length)], o: 0.82 + r() * 0.18 };
  });
  return (
    <svg className="mat-svg" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id={`tz-${uid}`}><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="3" /><feColorMatrix values="0 0 0 0 .45 0 0 0 0 .41 0 0 0 0 .36 0 0 0 .32 0" /></filter>
      </defs>
      <rect width="100" height="200" fill="#e7e0d4" />
      {chips.map((c, i) => <polygon key={i} points={c.pts} fill={c.fill} opacity={c.o} />)}
      <rect width="100" height="200" filter={`url(#tz-${uid})`} />
    </svg>
  );
}

/** Laiton brossé : dégradé métallique, reflet oblique et stries fines de brossage. */
function Brass({ uid }: { uid: string }) {
  return (
    <>
      <div className="mat-brass" />
      <svg className="mat-svg" viewBox="0 0 100 200" preserveAspectRatio="none" aria-hidden="true" style={{ mixBlendMode: "overlay" }}>
        <defs>
          <filter id={`br-${uid}`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.006 1.1" numOctaves="2" seed="9" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1.1 0 0 0 -.45" /></filter>
        </defs>
        <rect width="100" height="200" filter={`url(#br-${uid})`} />
      </svg>
    </>
  );
}

/** Chêne huilé : fil du bois tiré d'un bruit étiré, sur un fond miel. */
function Oak({ uid }: { uid: string }) {
  return (
    <svg className="mat-svg" viewBox="0 0 100 200" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`ok-g-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c99f6e" /><stop offset=".5" stopColor="#b98a58" /><stop offset="1" stopColor="#a5764a" /></linearGradient>
        <filter id={`ok-${uid}`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.11 0.008" numOctaves="4" seed="14" /><feColorMatrix values="0 0 0 0 .33 0 0 0 0 .2 0 0 0 0 .1 1.9 0 0 0 -.78" /></filter>
        <filter id={`ok2-${uid}`} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.5 0.03" numOctaves="2" seed="2" /><feColorMatrix values="0 0 0 0 .98 0 0 0 0 .9 0 0 0 0 .75 1.2 0 0 0 -.62" /></filter>
      </defs>
      <rect width="100" height="200" fill={`url(#ok-g-${uid})`} />
      <rect width="100" height="200" filter={`url(#ok-${uid})`} />
      <rect width="100" height="200" filter={`url(#ok2-${uid})`} />
    </svg>
  );
}

/** Tomettes hexagonales en terre cuite, joint clair, nuances de cuisson. */
function Tomette() {
  const r = rng(41);
  const tones = ["#a85438", "#b4603f", "#9c4b31", "#bd6a47", "#a3563b", "#8f4429"];
  const s = 9; // rayon d'un hexagone
  const w = Math.sqrt(3) * s;
  const hexes: { pts: string; fill: string; hl: number }[] = [];
  for (let row = -1; row < 15; row++) {
    for (let col = -1; col < 7; col++) {
      const cx = col * w + (row % 2 ? w / 2 : 0);
      const cy = row * s * 1.5;
      const pts = Array.from({ length: 6 }, (_, k) => {
        const a = Math.PI / 6 + (k * Math.PI) / 3;
        return `${(cx + Math.cos(a) * (s - 0.7)).toFixed(2)},${(cy + Math.sin(a) * (s - 0.7)).toFixed(2)}`;
      }).join(" ");
      hexes.push({ pts, fill: tones[Math.floor(r() * tones.length)], hl: r() });
    }
  }
  return (
    <svg className="mat-svg" viewBox="0 0 100 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="100" height="200" fill="#d8cbbb" />
      {hexes.map((h, i) => <polygon key={i} points={h.pts} fill={h.fill} opacity={0.88 + h.hl * 0.12} />)}
    </svg>
  );
}

const samples = [
  { n: "N° 01", t: "Zellige", s: "Terre émaillée · vert bouteille", r: -5, face: () => <Zellige /> },
  { n: "N° 02", t: "Terrazzo", s: "Éclats de marbre · liant clair", r: 8, face: (u: string) => <Terrazzo uid={u} /> },
  { n: "N° 03", t: "Laiton brossé", s: "Robinetterie · fini satiné", r: 21, face: (u: string) => <Brass uid={u} /> },
  { n: "N° 04", t: "Chêne huilé", s: "Parquet · fil droit", r: 34, face: (u: string) => <Oak uid={u} /> },
  { n: "N° 05", t: "Tomette", s: "Terre cuite · hexagonale", r: 47, face: () => <Tomette /> },
];

export const materialNames = samples.map((s) => s.t);

export function Nuancier({ uid = "n", className = "" }: { uid?: string; className?: string }) {
  return (
    <div className={`fan ${className}`} role="img" aria-label="Nuancier d'échantillons de matériaux : zellige, terrazzo, laiton brossé, chêne huilé et tomette en terre cuite">
      {samples.map((m, i) => (
        <div key={m.t} className="fan-card" style={{ ["--r" as string]: `${m.r}deg`, ["--i" as string]: i }}>
          <div className="fan-face">{m.face(`${uid}${i}`)}</div>
          <p className="fan-label">
            <span className="n">{m.n}</span>
            <span className="t">{m.t}</span>
            <span className="s">{m.s}</span>
          </p>
          <span className="fan-hole" aria-hidden="true" />
        </div>
      ))}
      <span className="fan-rivet" aria-hidden="true" />
    </div>
  );
}

/** Petit carré d'échantillon pour les repères de section (couleurs des matières du nuancier). */
export const chipColors = ["#a85438", "#2d5a4d", "#c9a159", "#b98a58", "#e7e0d4", "#8a8379"];
