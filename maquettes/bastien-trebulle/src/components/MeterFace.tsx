import { Drums } from "./Drums";
import { Gauge } from "./Gauge";

const rim = Array.from({ length: 120 }, (_, i) => {
  const a = (i / 120) * Math.PI * 2;
  const big = i % 10 === 0;
  const mid = i % 5 === 0;
  const r1 = 186, r2 = big ? 166 : mid ? 173 : 179;
  return <line key={i} x1={200 + Math.sin(a) * r1} y1={200 - Math.cos(a) * r1} x2={200 + Math.sin(a) * r2} y2={200 - Math.cos(a) * r2} stroke="rgb(var(--accent))" strokeWidth={big ? 1.4 : 0.7} strokeLinecap="round" opacity={big ? 1 : 0.6} />;
});

/**
 * Le cadran du héros : la face d'un compteur d'eau. Au centre, la fenêtre aux quatre rouleaux de laiton lit « 1880 »,
 * l'année de fondation ; en bas, un petit cadran à aiguille donne la note Google et une rosace tourne lentement.
 */
export function MeterFace() {
  return (
    <div className="face relative mx-auto aspect-square w-full max-w-[34rem]" role="img" aria-label="Compteur d'eau dont les rouleaux indiquent l'année de fondation, 1880">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <circle cx="200" cy="200" r="198" stroke="rgb(var(--accent))" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="194" stroke="rgb(var(--accent))" strokeWidth=".5" opacity=".5" />
        {rim}
        <circle cx="200" cy="200" r="150" stroke="rgb(var(--accent))" strokeWidth=".5" opacity=".25" />
      </svg>
      <div className="absolute left-1/2 top-[19%] -translate-x-1/2 text-center">
        <p className="whitespace-nowrap font-medium tracking-[0.18em] text-ink" style={{ fontSize: "max(0.82rem, 4cqw)" }}>BASTIEN &amp; TREBULLE</p>
        <p className="mt-[1.2cqw] whitespace-nowrap uppercase tracking-[0.22em] text-ink-faint" style={{ fontSize: "max(0.5rem, 2cqw)" }}>Paris XVIe · plomberie · couverture</p>
      </div>
      <p className="absolute left-1/2 top-[36%] -translate-x-1/2 whitespace-nowrap font-medium uppercase tracking-[0.3em] text-ink-faint" style={{ fontSize: "max(0.5rem, 2.1cqw)" }}>Fondée en</p>
      <div className="absolute left-1/2 top-[51%] -translate-x-1/2 -translate-y-1/2">
        <Drums value="1880" size="17.5cqw" />
      </div>
      <p className="absolute left-1/2 top-[62.5%] -translate-x-1/2 whitespace-nowrap uppercase tracking-[0.2em] text-ink-faint" style={{ fontSize: "max(0.5rem, 2cqw)" }}>Cinq générations d&apos;artisans</p>
      <div className="absolute left-[29%] top-[67.5%] w-[17%]">
        <Gauge value={4.6} max={5} className="h-auto w-full" label="Cadran de la note Google : 4,6 sur 5" />
        <p className="mt-[0.6cqw] text-center tracking-[0.1em] text-ink-soft" style={{ fontSize: "max(0.5rem, 2cqw)" }}>4,6 / 5</p>
      </div>
      <svg viewBox="0 0 100 100" className="absolute left-[54%] top-[67.5%] w-[17%]" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="48" stroke="rgb(var(--accent))" strokeWidth=".8" opacity=".35" />
        <g className="starwheel">
          {Array.from({ length: 6 }, (_, i) => <path key={i} d="M50 50 L44 18 Q50 8 56 18 Z" fill="rgb(var(--accent))" opacity=".16" transform={`rotate(${i * 60} 50 50)`} stroke="rgb(var(--accent))" strokeWidth=".6" />)}
        </g>
        <circle cx="50" cy="50" r="3" fill="#a8873f" />
      </svg>
    </div>
  );
}
