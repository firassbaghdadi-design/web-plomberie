import { business } from "@/lib/site";

/** Schéma de la zone (sans échelle) : Paris, l'atelier de la rue de Dunkerque et les communes citées par l'entreprise. */
export function ZoneMap() {
  const towns = [
    { n: "Clichy", x: 232, y: 66, a: "end" },
    { n: "Levallois-Perret", x: 160, y: 98, a: "end" },
    { n: "Boulogne-Billancourt", x: 172, y: 268, a: "end" },
    { n: "Le Pré-Saint-Gervais", x: 408, y: 82, a: "start" },
    { n: "Vincennes", x: 482, y: 206, a: "start" },
    { n: "Saint-Mandé", x: 452, y: 244, a: "start" },
  ];
  const paris = "M115 178 L134 142 L172 112 L228 93 L290 86 L346 93 L396 112 L430 140 L452 172 L446 206 L420 236 L380 258 L330 272 L275 277 L220 270 L174 252 L139 228 L117 202 Z";
  return (
    <svg viewBox="0 0 580 380" className="h-auto w-full" role="img" aria-label={`Zone d'intervention de SERAGAZ : Paris et ${business.areaList.slice(1).join(", ")}, dans un rayon d'environ 15 km autour du 9e arrondissement`}>
      <circle cx="284" cy="138" r="178" fill="none" stroke="rgba(255,255,255,.16)" strokeDasharray="3 7" />
      <circle cx="284" cy="138" r="118" fill="none" stroke="rgba(255,255,255,.1)" />
      <path d={paris} fill="rgba(0,81,158,.32)" stroke="rgba(255,255,255,.55)" strokeWidth="1.4" strokeLinejoin="round" />
      <text x="283" y="232" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="12" letterSpacing="4" fontWeight="700">PARIS · 1er — 20e</text>
      <circle cx="284" cy="138" r="22" fill="rgba(136,187,61,.18)" />
      <circle cx="284" cy="138" r="7" fill="#88bb3d" />
      <text x="298" y="134" fill="#fff" fontSize="13" fontWeight="700">SERAGAZ</text>
      <text x="298" y="150" fill="rgba(255,255,255,.65)" fontSize="11">69 rue de Dunkerque, 9e</text>
      {towns.map((t) => (
        <g key={t.n}>
          <circle cx={t.x} cy={t.y} r="4" fill="#fff" />
          <text x={t.x + (t.a === "start" ? 10 : -10)} y={t.y + 4} textAnchor={t.a as "start" | "end"} fill="rgba(255,255,255,.85)" fontSize="13">{t.n}</text>
        </g>
      ))}
      <text x="290" y="362" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="10" letterSpacing="2.5">RAYON D'ENVIRON 15 KM · SCHÉMA SANS ÉCHELLE</text>
    </svg>
  );
}
