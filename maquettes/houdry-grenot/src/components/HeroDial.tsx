import { gradAngle } from "@/lib/dial";

const C = 200;
const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: C + r * Math.sin(a), y: C - r * Math.cos(a) };
};
const arcPath = (r: number, from: number, to: number) => {
  const s = pt(r, from);
  const e = pt(r, to);
  return `M${s.x.toFixed(2)} ${s.y.toFixed(2)} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
};

type Props = { src?: string | null; alt: string; marks: number; labels: string[] };

/**
 * Cadran du héros : une photo dans le verre d'un manomètre. Les graduations portent les numéros des sections de la page
 * d'accueil ; au chargement, l'aiguille monte en pression jusqu'au repos.
 */
export function HeroDial({ src, alt, marks, labels }: Props) {
  const REST = gradAngle(marks - 2, marks) + 8;
  const R = 186;
  const len = (2 * Math.PI * R * (REST + 135)) / 360;
  const minors = Array.from({ length: 55 }, (_, i) => -135 + i * 5);
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={alt} className="block h-auto w-full overflow-visible">
      <defs>
        <clipPath id="dial-glass"><circle cx={C} cy={C} r="126" /></clipPath>
      </defs>
      <path d={arcPath(R, -135, 135)} fill="none" stroke="#e6e6e3" strokeWidth="1.5" strokeLinecap="round" />
      <path className="dial-prog" d={arcPath(R, -135, 135)} fill="none" stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" style={{ ["--len" as string]: `${len.toFixed(0)}px` }} />
      {minors.map((a, i) => {
        const p = pt(R - 6, a);
        const q = pt(R - 14, a);
        return <line key={a} className="dial-tick" x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#c9cbce" strokeWidth="1" style={{ ["--d" as string]: `${200 + i * 18}ms` }} />;
      })}
      {Array.from({ length: marks }, (_, k) => {
        const a = gradAngle(k, marks);
        const p = pt(R - 4, a);
        const q = pt(R - 26, a);
        const t = pt(R - 42, a);
        return (
          <g key={k} className="dial-tick" style={{ ["--d" as string]: `${500 + k * 160}ms` }}>
            <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#6e737a" strokeWidth="1.6" />
            <text x={t.x} y={t.y} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" letterSpacing="1.5" fill="#6e737a" style={{ fontFeatureSettings: '"tnum"' }}>{labels[k] ?? String(k + 1).padStart(2, "0")}</text>
          </g>
        );
      })}
      <circle cx={C} cy={C} r="134" fill="none" stroke="#e6e6e3" strokeWidth="1" />
      <g className="dial-photo">
        <circle cx={C} cy={C} r="126" fill="#f1f1ee" />
        {src ? <image href={src} x={C - 190} y={C - 126} width="380" height="252" preserveAspectRatio="xMidYMid slice" clipPath="url(#dial-glass)" /> : null}
        <circle cx={C} cy={C} r="126" fill="none" stroke="rgba(21,23,26,.08)" strokeWidth="1" />
      </g>
      <g className="dial-needle" style={{ ["--rest" as string]: `${REST}deg` }}>
        <line x1={C} y1={C + 26} x2={C} y2={C - 150} stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" />
        <circle cx={C} cy={C} r="9" fill="#fff" stroke="rgb(var(--accent))" strokeWidth="1.6" />
        <circle cx={C} cy={C} r="2.6" fill="rgb(var(--accent))" />
      </g>
    </svg>
  );
}
