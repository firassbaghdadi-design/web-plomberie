import type { Photo } from "@/lib/photos";

/**
 * La ligne des toits du 12e, en un seul trait : immeubles à brisis de zinc, souches de cheminée, lucarnes.
 * Le trait part de la droite, court sur les toits, puis au bout du dernier toit le chéneau se retourne et devient
 * la descente d'eau pluviale qui longe ensuite toute la page. La photo se dévoile sous la ligne des toits.
 */
type B = { w: number; c: number; m: number; ch?: number[]; dormer?: number[] };
// de droite à gauche : largeur, hauteur de corniche (y), hauteur du brisis, souches (positions en fraction), lucarnes
const buildings: B[] = [
  { w: 150, c: 206, m: 54, ch: [0.3], dormer: [0.65] },
  { w: 190, c: 186, m: 58, ch: [0.22, 0.78], dormer: [0.5] },
  { w: 120, c: 222, m: 40, dormer: [0.5] },
  { w: 210, c: 176, m: 62, ch: [0.6], dormer: [0.25, 0.75] },
  { w: 160, c: 196, m: 50, ch: [0.35], dormer: [0.7] },
  { w: 180, c: 182, m: 60, ch: [0.18, 0.7], dormer: [0.45] },
  { w: 140, c: 214, m: 46, dormer: [0.5] },
  { w: 200, c: 190, m: 56, ch: [0.5], dormer: [0.25, 0.8] },
  { w: 160, c: 200, m: 52, ch: [0.3, 0.72] },
];
const W = 1440, H = 640, END = 22;

function skyline() {
  let x = W;
  let lastC = buildings[0].c;
  let d = `M${W},${buildings[0].c}`;
  for (const b of buildings) {
    const left = Math.max(END, x - b.w);
    const top = b.c - b.m;
    const slope = 16;
    d += ` V${b.c} L${x - slope},${top}`;
    // le terrasson, avec souches de cheminée (de droite à gauche)
    const marks = (b.ch ?? []).map((f) => x - f * (x - left)).sort((a, c) => c - a);
    for (const cx of marks) {
      d += ` H${cx + 8} V${top - 24} H${cx + 5} V${top - 30} H${cx + 1} V${top - 24} H${cx - 1} V${top - 30} H${cx - 5} V${top - 24} H${cx - 8} V${top}`;
    }
    d += ` H${left + slope} L${left},${b.c}`;
    x = left;
    lastC = b.c;
    if (x <= END) break;
  }
  return { d, lastC };
}

const { d: roof, lastC } = skyline();
// le chéneau du dernier toit, puis la descente : coude, et le tuyau qui descend le long de la photo
const gutter = ` H${END} Q0,${lastC} 0,${lastC + 22} V${H}`;
const clip = `${roof.replace(/^M[^ ]+/, `M${W},${H} V${buildings[0].c}`)} H${END} V${H} Z`;

// lucarnes : petites fenêtres dans le brisis, en trait fin
function dormers() {
  const out: string[] = [];
  let x = W;
  for (const b of buildings) {
    const left = Math.max(END, x - b.w);
    for (const f of b.dormer ?? []) {
      const cx = x - f * (x - left);
      const y = b.c - b.m * 0.62;
      out.push(`M${cx - 9},${b.c - 4} V${y} L${cx},${y - 9} L${cx + 9},${y} V${b.c - 4}`);
    }
    x = left;
    if (x <= END) break;
  }
  return out.join(" ");
}

export function Roofline({ photo }: { photo: Photo }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMinYMin slice" className="absolute inset-0 h-full w-full overflow-visible" role="img" aria-label={`Les toits de zinc du 12e arrondissement. ${photo.alt}`}>
      <defs>
        <clipPath id="sous-les-toits">
          <path d={clip} />
        </clipPath>
        <linearGradient id="voile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0d10" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <g clipPath="url(#sous-les-toits)">
        {photo.src ? (
          <g className="roof-photo" style={{ transformOrigin: "60% 70%" }}>
            <image href={photo.src} x={END} y="20" width={W - END} height={H - 20} preserveAspectRatio="xMidYMid slice" />
          </g>
        ) : (
          <rect x={END} y="0" width={W} height={H} fill="#eef1f3" />
        )}
        <rect x="0" y="0" width={W} height={H} fill="url(#voile)" />
      </g>
      <path d={dormers()} fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="1" vectorEffect="non-scaling-stroke" className="roof-photo" />
      <path d={roof + gutter} fill="none" stroke="#17191c" strokeWidth="1.25" strokeLinejoin="round" vectorEffect="non-scaling-stroke" className="roofline-draw" style={{ ["--len" as string]: 5200 }} />
      <path d={`M0,${lastC + 22} V${H}`} fill="none" stroke="rgb(var(--accent))" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="roof-drop" />
    </svg>
  );
}
