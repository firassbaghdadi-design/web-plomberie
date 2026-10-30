/** Petit cadran à aiguille : l'aiguille balaie un arc de 270° gradué de 0 à `max` et s'arrête sur `value`. */
export function Gauge({ value, max, className = "h-24 w-24", label }: { value: number; max: number; className?: string; label: string }) {
  const sweep = 270;
  const angle = -135 + (value / max) * sweep;
  const ticks = Array.from({ length: 21 }, (_, i) => {
    const a = ((-135 + (i / 20) * sweep) * Math.PI) / 180;
    const long = i % 4 === 0;
    const r1 = 44, r2 = long ? 37 : 40.5;
    return <line key={i} x1={50 + Math.sin(a) * r1} y1={50 - Math.cos(a) * r1} x2={50 + Math.sin(a) * r2} y2={50 - Math.cos(a) * r2} stroke="rgb(var(--accent))" strokeWidth={long ? 1.3 : 0.7} strokeLinecap="round" opacity={long ? 1 : 0.55} />;
  });
  return (
    <svg viewBox="0 0 100 100" className={`gauge ${className}`} role="img" aria-label={label} fill="none">
      <circle cx="50" cy="50" r="48" stroke="rgb(var(--accent))" strokeWidth=".8" opacity=".35" />
      {ticks}
      <g className="needle" style={{ ["--a" as string]: `${angle}deg`, ["--a0" as string]: "-135deg" }}>
        <line x1="50" y1="56" x2="50" y2="20" stroke="#a8873f" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      <circle cx="50" cy="50" r="3.2" fill="#a8873f" />
    </svg>
  );
}
