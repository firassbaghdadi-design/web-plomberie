/** Croquis dessinés « à la main » (SVG en ligne) : zone d'intervention et repère d'accès. */

const CX = 280;
const CY = 232;

const wobble = (a: number, seed: number) => 1 + 0.05 * Math.sin(a * 3 + seed) + 0.035 * Math.sin(a * 7 + seed * 2);
const polar = (deg: number, r: number, seed: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  const rr = r * wobble(a, seed);
  return [CX + rr * 1.22 * Math.sin(a), CY - rr * Math.cos(a)];
};

/** Courbe lisse (Catmull-Rom → Bézier) passant par les points. */
function smooth(points: [number, number][], close = false) {
  const n = points.length;
  const get = (i: number) => points[(i + n) % n];
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  const last = close ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const p0 = close ? get(i - 1) : points[Math.max(i - 1, 0)];
    const p1 = get(i);
    const p2 = get(i + 1);
    const p3 = close ? get(i + 2) : points[Math.min(i + 2, n - 1)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + (close ? "Z" : "");
}

function sector(from: number, to: number, inner: number, outer: number, seed: number) {
  const steps = Math.max(4, Math.round((to - from) / 14));
  const outerPts: [number, number][] = [];
  const innerPts: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const deg = from + ((to - from) * i) / steps;
    outerPts.push(polar(deg, outer, seed));
    innerPts.push(polar(deg, inner, 3));
  }
  const outerPath = smooth(outerPts);
  const innerRev = smooth([...innerPts].reverse()).replace(/^M/, "L");
  return `${outerPath} ${innerRev} Z`;
}

export function ZoneMap() {
  const paris: [number, number][] = Array.from({ length: 14 }, (_, i) => polar((i * 360) / 14, 54, 3));
  const pin = polar(8, 40, 3);
  const zones = [
    { id: "93", name: "Seine-Saint-Denis", from: 335, to: 465, fill: "#e8dcc2", label: polar(55, 112, 1) },
    { id: "94", name: "Val-de-Marne", from: 105, to: 185, fill: "#dfd0ae", label: polar(146, 112, 1) },
    { id: "92", name: "Hauts-de-Seine", from: 185, to: 335, fill: "#ece3cf", label: polar(262, 112, 1) },
  ];
  return (
    <figure className="mx-auto w-full max-w-[600px]">
      <svg viewBox="0 0 560 420" role="img" aria-labelledby="zone-title zone-desc" className="h-auto w-full">
        <title id="zone-title">Croquis de la zone d'intervention de Gaz Flash</title>
        <desc id="zone-desc">Paris au centre, entouré des Hauts-de-Seine à l'ouest, de la Seine-Saint-Denis au nord et à l'est, et du Val-de-Marne au sud-est. Le 18e arrondissement, où se trouve l'entreprise, est marqué au nord de Paris.</desc>
        <g strokeLinejoin="round" strokeLinecap="round">
          {zones.map((z) => (
            <path key={z.id} d={sector(z.from, z.to, 54, 166, z.id === "93" ? 1 : z.id === "94" ? 2 : 4)} fill={z.fill} stroke="#2c353d" strokeWidth="2.6" strokeDasharray="1 0" />
          ))}
          <path d={smooth(paris, true)} fill="#fbe6e1" stroke="#2c353d" strokeWidth="3" />
          <path d={smooth(paris, true)} fill="none" stroke="#e4342b" strokeWidth="1.4" strokeDasharray="4 5" transform="translate(1.5 1.5)" />
        </g>
        {zones.map((z) => (
          <g key={`t${z.id}`} fontFamily="Caveat, cursive" fill="#2c353d" textAnchor="middle">
            <text x={z.label[0]} y={z.label[1] - 6} fontSize="40" fontWeight="700">{z.id}</text>
            <text x={z.label[0]} y={z.label[1] + 20} fontSize="22" fontWeight="600">{z.name}</text>
          </g>
        ))}
        <text x={CX} y={CY + 22} textAnchor="middle" fontFamily="Caveat, cursive" fontSize="32" fontWeight="700" fill="#2c353d">Paris</text>
        <g transform={`translate(${pin[0].toFixed(1)} ${pin[1].toFixed(1)})`}>
          <path d="M0 0 C-9 -10 -12 -18 -12 -24 A12 12 0 1 1 12 -24 C12 -18 9 -10 0 0Z" fill="#c9261d" stroke="#2c353d" strokeWidth="2" />
          <circle cx="0" cy="-24" r="4.5" fill="#fffcf4" />
        </g>
        <g fontFamily="Caveat, cursive" fontWeight="700" fill="#9e1b14" textAnchor="middle">
          <path d={`M${pin[0].toFixed(1)} 46 L${pin[0].toFixed(1)} ${(pin[1] - 40).toFixed(1)}`} fill="none" stroke="#9e1b14" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
          <text x={pin[0]} y="34" fontSize="28">Gaz Flash, 18e</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center text-[0.88rem] text-ink-soft">Croquis de la zone d'intervention, pas à l'échelle.</figcaption>
    </figure>
  );
}

export function AccessSketch() {
  return (
    <figure className="w-full max-w-[520px]">
      <svg viewBox="0 0 520 250" role="img" aria-labelledby="acc-title acc-desc" className="h-auto w-full">
        <title id="acc-title">Croquis d'accès à Gaz Flash</title>
        <desc id="acc-desc">Le 7 rue Sainte-Isaure, où se trouve l'entreprise, à une courte distance à pied de la place Jules-Joffrin et de la station de métro de la ligne 12.</desc>
        <g fill="none" stroke="#2c353d" strokeWidth="2.4" strokeLinecap="round">
          <path d="M20 70 C120 60 200 92 300 84 C390 78 450 66 505 76" />
          <path d="M20 96 C120 88 200 120 300 112 C390 106 450 94 505 104" />
          <path d="M120 10 C128 70 112 150 126 240" />
          <path d="M150 10 C158 70 142 150 156 240" />
          <path d="M360 10 C370 60 352 160 372 240" />
          <path d="M392 10 C402 60 384 160 404 240" />
        </g>
        <path d="M158 126 C210 150 270 150 330 128" fill="none" stroke="#c9261d" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
        <g transform="translate(140 118)">
          <path d="M0 0 C-9 -10 -12 -18 -12 -24 A12 12 0 1 1 12 -24 C12 -18 9 -10 0 0Z" fill="#c9261d" stroke="#2c353d" strokeWidth="2" />
          <circle cx="0" cy="-24" r="4.5" fill="#fffcf4" />
        </g>
        <g transform="translate(346 112)">
          <circle r="17" fill="#fffcf4" stroke="#2c353d" strokeWidth="2.4" />
          <text textAnchor="middle" y="7" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="22" fill="#2c353d">M</text>
        </g>
        <g fontFamily="Caveat, cursive" fontWeight="700" fill="#2c353d">
          <text x="28" y="196" fontSize="26">7 rue Sainte-Isaure</text>
          <text x="268" y="176" fontSize="26">place Jules-Joffrin</text>
          <text x="268" y="202" fontSize="22" fill="#9e1b14">métro ligne 12</text>
          <text x="196" y="170" fontSize="22" fill="#9e1b14">à pied</text>
        </g>
      </svg>
      <figcaption className="text-[0.88rem] text-ink-soft">Croquis de repérage, pas à l'échelle : la place Jules-Joffrin est à moins de 200 mètres à vol d'oiseau, d'après les coordonnées de la fiche Google.</figcaption>
    </figure>
  );
}
