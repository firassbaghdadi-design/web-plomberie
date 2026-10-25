import { business } from "@/lib/site";

/** Schéma de la zone : le 9e au centre, le rayon de 15 km annoncé par l'entreprise, les communes citées en pied de page. */
export function ZoneMap() {
  const towns = [
    { n: "Clichy", x: 138, y: 92 },
    { n: "Levallois-Perret", x: 92, y: 128 },
    { n: "Boulogne-Billancourt", x: 70, y: 262 },
    { n: "Le Pré-Saint-Gervais", x: 296, y: 118 },
    { n: "Saint-Mandé", x: 308, y: 240 },
    { n: "Vincennes", x: 338, y: 210 },
  ];
  return (
    <svg viewBox="0 0 400 360" className="h-auto w-full" role="img" aria-label={`Zone d'intervention de SERAGAZ : Paris et ${business.areaList.slice(1).join(", ")}, dans un rayon de 15 km autour du 9e arrondissement`}>
      {[150, 110, 70].map((r, i) => (
        <circle key={r} cx="200" cy="170" r={r} fill={i === 2 ? "rgba(136,187,61,.12)" : "none"} stroke="rgba(255,255,255,.18)" strokeDasharray={i === 0 ? "4 6" : undefined} />
      ))}
      <path d="M118 150c10-40 50-70 92-72 46-2 82 22 96 58 10 30 2 64-24 86-30 26-80 32-120 20-34-10-54-40-44-92z" fill="rgba(0,81,158,.35)" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" />
      <text x="200" y="215" textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="11" letterSpacing="3" fontWeight="700">PARIS 1er — 20e</text>
      <circle cx="200" cy="150" r="7" fill="#88bb3d" />
      <circle cx="200" cy="150" r="16" fill="none" stroke="#88bb3d" strokeOpacity=".5" />
      <text x="214" y="146" fill="#fff" fontSize="12" fontWeight="700">SERAGAZ · Paris 9e</text>
      {towns.map((t) => (
        <g key={t.n}>
          <circle cx={t.x} cy={t.y} r="3.5" fill="#fff" />
          <text x={t.x + (t.x > 200 ? 8 : -8)} y={t.y + 4} textAnchor={t.x > 200 ? "start" : "end"} fill="rgba(255,255,255,.8)" fontSize="11">{t.n}</text>
        </g>
      ))}
      <text x="200" y="345" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="10" letterSpacing="2">RAYON D'ENVIRON 15 KM · SCHÉMA SANS ÉCHELLE</text>
    </svg>
  );
}
