/** Manomètre de chaudière dessiné : l'aiguille se lève au chargement (repère « depuis 1985 »). Purement décoratif. */
export function Gauge({ className = "h-40 w-40" }: { className?: string }) {
  const ticks = Array.from({ length: 25 }, (_, i) => -120 + i * 10);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#f6f7f4" stroke="#0b2546" strokeWidth="4" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="#d7dee6" strokeWidth="1" />
      <path d="M 100 100 m -72.7 42 A 84 84 0 0 1 27.3 58" fill="none" />
      {ticks.map((a, i) => {
        const r1 = i % 5 === 0 ? 66 : 72;
        const rad = ((a - 90) * Math.PI) / 180;
        return <line key={a} x1={100 + Math.cos(rad) * r1} y1={100 + Math.sin(rad) * r1} x2={100 + Math.cos(rad) * 80} y2={100 + Math.sin(rad) * 80} stroke={a > 60 ? "#c2410c" : a > 0 ? "#88bb3d" : "#0b2546"} strokeWidth={i % 5 === 0 ? 3 : 1.5} strokeLinecap="round" />;
      })}
      <text x="100" y="138" textAnchor="middle" fontFamily="Figtree Variable, sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" fill="#45556a">BAR</text>
      <text x="100" y="62" textAnchor="middle" fontFamily="Bricolage Grotesque Variable, sans-serif" fontSize="15" fontWeight="700" fill="#00519e">SERAGAZ</text>
      <g className="needle" style={{ ["--angle" as string]: "22deg" }}>
        <path d="M100 100 L97 104 L100 30 L103 104 Z" fill="#061a33" />
      </g>
      <circle cx="100" cy="100" r="9" fill="#061a33" />
      <circle cx="100" cy="100" r="3.5" fill="#88bb3d" />
    </svg>
  );
}
