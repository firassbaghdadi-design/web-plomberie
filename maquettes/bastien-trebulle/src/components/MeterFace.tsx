import { Drums } from "./Drums";
import { Gauge } from "./Gauge";

/** Graduations du cadran émaillé : 120 traits ivoire, un sur dix plus long. */
const ticks = Array.from({ length: 120 }, (_, i) => {
  const a = (i / 120) * Math.PI * 2;
  const big = i % 10 === 0;
  const mid = i % 5 === 0;
  const r1 = 163, r2 = big ? 148 : mid ? 154 : 158;
  return <line key={i} x1={200 + Math.sin(a) * r1} y1={200 - Math.cos(a) * r1} x2={200 + Math.sin(a) * r2} y2={200 - Math.cos(a) * r2} stroke="#ede7db" strokeWidth={big ? 1.3 : 0.55} strokeLinecap="round" opacity={big ? 0.95 : 0.5} />;
});

/** Moletage de la lunette : 180 stries fines. */
const knurl = Array.from({ length: 180 }, (_, i) => {
  const a = (i / 180) * Math.PI * 2;
  return <line key={i} x1={200 + Math.sin(a) * 191} y1={200 - Math.cos(a) * 191} x2={200 + Math.sin(a) * 198} y2={200 - Math.cos(a) * 198} stroke="#2b1f09" strokeWidth=".7" opacity=".45" />;
});

/** Chiffres romains du pourtour, en ivoire : le compteur se lit comme un cadran d'horloger. */
const romans = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"].map((r, i) => {
  if (![2, 3, 7, 8].includes(i)) return null;
  const a = (i / 10) * Math.PI * 2;
  return (
    <text key={r} x={200 + Math.sin(a) * 134} y={200 - Math.cos(a) * 134 + 4} textAnchor="middle" fontFamily="'Cormorant Garamond Variable', Georgia, serif" fontSize="12" fill="#ede7db" opacity=".7">
      {r}
    </text>
  );
});

/**
 * L'objet précieux du héros : un compteur d'eau en laiton, cadran d'émail noir, lunette moletée, deux vis, verre bombé.
 * Au centre, la fenêtre aux quatre rouleaux lit « 1880 », l'année de fondation ; en bas, un petit cadran donne la note
 * Google et une rosace de laiton tourne lentement. Tout est dessiné en SVG et en CSS : aucune image à charger.
 */
export function MeterFace({ className = "" }: { className?: string }) {
  return (
    <div className={`face relative aspect-square w-full ${className}`} role="img" aria-label="Compteur d'eau en laiton dont les rouleaux indiquent l'année de fondation, 1880">
      <div className="meter-glow pointer-events-none absolute -inset-[22%]" aria-hidden="true" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full drop-shadow-[0_50px_60px_rgba(0,0,0,.75)]" aria-hidden="true">
        <defs>
          <linearGradient id="mf-bezel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6e7bd" />
            <stop offset=".18" stopColor="#b8964f" />
            <stop offset=".38" stopColor="#5e4620" />
            <stop offset=".55" stopColor="#d9bc7c" />
            <stop offset=".72" stopColor="#8a6b31" />
            <stop offset=".88" stopColor="#ecd9a4" />
            <stop offset="1" stopColor="#4d3a19" />
          </linearGradient>
          <linearGradient id="mf-bezel-in" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#f2dfaa" />
            <stop offset=".35" stopColor="#7d602b" />
            <stop offset=".6" stopColor="#c9a965" />
            <stop offset="1" stopColor="#3f2f13" />
          </linearGradient>
          <radialGradient id="mf-enamel" cx=".45" cy=".38" r=".75">
            <stop offset="0" stopColor="#24211c" />
            <stop offset=".6" stopColor="#121110" />
            <stop offset="1" stopColor="#070707" />
          </radialGradient>
          <linearGradient id="mf-glass" x1="0" y1="0" x2=".7" y2=".9">
            <stop offset="0" stopColor="#fff" stopOpacity=".22" />
            <stop offset=".45" stopColor="#fff" stopOpacity=".03" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="mf-screw" cx=".35" cy=".3" r=".8">
            <stop offset="0" stopColor="#f6e7bd" />
            <stop offset=".6" stopColor="#a8873f" />
            <stop offset="1" stopColor="#4d3a19" />
          </radialGradient>
          <clipPath id="mf-face"><circle cx="200" cy="200" r="172" /></clipPath>
        </defs>
        <circle cx="200" cy="200" r="198" fill="url(#mf-bezel)" />
        {knurl}
        <circle cx="200" cy="200" r="186" fill="url(#mf-bezel-in)" />
        <circle cx="200" cy="200" r="176" fill="#0a0907" />
        <circle cx="200" cy="200" r="172" fill="url(#mf-enamel)" />
        <g clipPath="url(#mf-face)">
          {ticks}
          {romans}
          <circle cx="200" cy="200" r="118" fill="none" stroke="#c8a565" strokeWidth=".5" opacity=".35" />
          <g className="sweep"><line x1="200" y1="200" x2="200" y2="40" stroke="#c8a565" strokeWidth=".6" opacity=".25" /></g>
        </g>
        {/* deux vis de la lunette */}
        {[[200, 12], [200, 388]].map(([x, y]) => (
          <g key={y}>
            <circle cx={x} cy={y} r="5.5" fill="url(#mf-screw)" stroke="#3f2f13" strokeWidth=".6" />
            <line x1={x - 3.6} y1={y - 1.6} x2={x + 3.6} y2={y + 1.6} stroke="#3f2f13" strokeWidth="1.1" />
          </g>
        ))}
        {/* verre bombé */}
        <path d="M60 150 A150 150 0 0 1 270 52 A170 170 0 0 0 64 212 Z" fill="url(#mf-glass)" />
      </svg>

      <div className="absolute left-1/2 top-[21%] -translate-x-1/2 text-center">
        <p className="serif whitespace-nowrap tracking-[0.2em] text-fg" style={{ fontSize: "max(0.8rem, 4.4cqw)" }}>BASTIEN <em className="not-italic text-brass">&amp;</em> TREBULLE</p>
        <p className="mt-[0.8cqw] whitespace-nowrap uppercase tracking-[0.32em] text-fg-faint" style={{ fontSize: "max(0.45rem, 1.8cqw)" }}>Paris · MDCCCLXXX</p>
      </div>
      <div className="absolute left-1/2 top-[49%] flex -translate-x-1/2 -translate-y-1/2 items-end gap-[1.4cqw]">
        <Drums value="1880" size="15.5cqw" />
        <span className="serif italic text-brass" style={{ fontSize: "max(0.7rem, 3.4cqw)" }}>m³</span>
      </div>
      <p className="serif absolute left-1/2 top-[59.5%] -translate-x-1/2 whitespace-nowrap italic text-fg-soft" style={{ fontSize: "max(0.6rem, 2.9cqw)" }}>cinq générations d&apos;artisans</p>
      <div className="absolute left-[30%] top-[66.5%] w-[15%]">
        <Gauge value={4.6} max={5} className="h-auto w-full" label="Cadran de la note Google : 4,6 sur 5" />
        <p className="num mt-[0.4cqw] text-center tracking-[0.12em] text-fg-faint" style={{ fontSize: "max(0.45rem, 1.8cqw)" }}>4,6 / 5</p>
      </div>
      <svg viewBox="0 0 100 100" className="absolute left-[55%] top-[66.5%] w-[15%]" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="#c8a565" strokeWidth=".8" opacity=".6" />
        <g className="starwheel">
          {Array.from({ length: 6 }, (_, i) => <path key={i} d="M50 50 L44 18 Q50 8 56 18 Z" fill="#c8a565" opacity=".55" transform={`rotate(${i * 60} 50 50)`} stroke="#ead39c" strokeWidth=".5" />)}
        </g>
        <circle cx="50" cy="50" r="3.4" fill="#ead39c" />
      </svg>
    </div>
  );
}
