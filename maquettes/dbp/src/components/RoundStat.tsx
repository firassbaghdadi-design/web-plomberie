/**
 * L'objet signature : un thermostat rond de 1953 dans l'esprit du « Round » d'Honeywell, refait en SVG et CSS.
 * Bague de métal brossé (dégradé conique + stries concentriques + moletage), cadran en émail blanc légèrement bombé,
 * graduations fines de 10 à 30 °C (demi-degrés), plage de confort 16–21 soulignée de rouge-orange, aiguille fine
 * à contrepoids, capuchon chromé, verre bombé avec reflets.
 * Motion.tsx fait tourner l'aiguille de 16 à 21° au chargement, puis la fait suivre le défilement (16° en haut, 21° en bas).
 */
const C = 200;
/** Angle de l'aiguille pour une température : 10 °C à -135°, 30 °C à +135° (270° de course). */
export const needleAngle = (t: number) => -135 + (t - 10) * 13.5;
const polar = (deg: number, r: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
};
const arc = (t0: number, t1: number, r: number) => {
  const [x0, y0] = polar(needleAngle(t0), r);
  const [x1, y1] = polar(needleAngle(t1), r);
  const large = needleAngle(t1) - needleAngle(t0) > 180 ? 1 : 0;
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

const ticks = Array.from({ length: 41 }, (_, i) => 10 + i / 2);
const labels = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const knurl = Array.from({ length: 144 }, (_, i) => i * 2.5);
const f = (n: number) => n.toFixed(2);

export function RoundStat({ className = "" }: { className?: string }) {
  return (
    <div className={`roundstat relative aspect-square ${className}`} role="img" aria-label="Thermostat rond : l'aiguille monte de 16 à 21 degrés au fil de la page">
      {/* Ombre portée sur le mur : deux couches, une large et douce, une courte et dense. */}
      <div className="absolute inset-[3%] translate-y-[5%] rounded-full bg-black/45 blur-2xl" aria-hidden="true" />
      <div className="absolute inset-[1.5%] translate-y-[1.6%] rounded-full bg-black/50 blur-[6px]" aria-hidden="true" />
      {/* Bague de métal brossé */}
      <div className="roundstat-ring absolute inset-0 rounded-full" aria-hidden="true" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="rs-enamel" cx="44%" cy="38%" r="70%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".55" stopColor="#f8f7f3" />
            <stop offset=".86" stopColor="#ebe9e3" />
            <stop offset="1" stopColor="#d9d6ce" />
          </radialGradient>
          <radialGradient id="rs-well" cx="50%" cy="50%" r="50%">
            <stop offset=".9" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity=".28" />
          </radialGradient>
          <linearGradient id="rs-bevel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset=".5" stopColor="#9da1a6" stopOpacity=".6" />
            <stop offset="1" stopColor="#3d4044" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id="rs-bevel-in" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2e3033" stopOpacity=".85" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".9" />
          </linearGradient>
          <radialGradient id="rs-cap" cx="38%" cy="32%" r="75%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".35" stopColor="#d7dadd" />
            <stop offset=".7" stopColor="#7d8186" />
            <stop offset="1" stopColor="#2f3236" />
          </radialGradient>
          <linearGradient id="rs-needle" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c43000" />
            <stop offset=".5" stopColor="#ff5a14" />
            <stop offset="1" stopColor="#b02a00" />
          </linearGradient>
          <linearGradient id="rs-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".75" />
            <stop offset=".35" stopColor="#fff" stopOpacity=".08" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter id="rs-needle-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2.4" dy="3.2" stdDeviation="2.2" floodColor="#000" floodOpacity=".32" />
          </filter>
          <filter id="rs-print" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation=".18" />
          </filter>
        </defs>

        {/* Moletage de la bague */}
        <g stroke="#2b2d30" strokeOpacity=".38" strokeWidth=".9">
          {knurl.map((d) => {
            const [x0, y0] = polar(d, 193);
            const [x1, y1] = polar(d, 199);
            return <line key={d} x1={f(x0)} y1={f(y0)} x2={f(x1)} y2={f(y1)} />;
          })}
        </g>
        {/* Chanfreins : extérieur clair en haut, intérieur creusé */}
        <circle cx={C} cy={C} r="192.5" fill="none" stroke="url(#rs-bevel)" strokeWidth="1.6" />
        <circle cx={C} cy={C} r="150" fill="none" stroke="url(#rs-bevel-in)" strokeWidth="3" />

        {/* Cadran émaillé */}
        <circle cx={C} cy={C} r="148.5" fill="url(#rs-enamel)" />
        <circle cx={C} cy={C} r="148.5" fill="url(#rs-well)" />

        <g filter="url(#rs-print)">
          {/* Plage de confort 16–21 */}
          <path d={arc(16, 21, 131)} fill="none" stroke="#ff4a00" strokeWidth="4.2" strokeLinecap="butt" />
          <path d={arc(10, 30, 136)} fill="none" stroke="#1a1a1a" strokeWidth=".7" />
          {/* Graduations : demi-degrés fins, degrés pleins plus longs */}
          {ticks.map((t) => {
            const major = Number.isInteger(t);
            const big = labels.includes(t);
            const [x0, y0] = polar(needleAngle(t), 136);
            const [x1, y1] = polar(needleAngle(t), big ? 119 : major ? 125 : 129.5);
            return <line key={t} x1={f(x0)} y1={f(y0)} x2={f(x1)} y2={f(y1)} stroke="#151515" strokeWidth={big ? 1.9 : major ? 1.15 : 0.7} />;
          })}
          {labels.map((t) => {
            const [x, y] = polar(needleAngle(t), 102);
            const hot = t >= 16 && t <= 20;
            return (
              <text key={t} x={f(x)} y={f(y)} textAnchor="middle" dominantBaseline="central" fontSize="15.5" fontWeight="600" fill={hot ? "#c43000" : "#151515"} style={{ letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>
                {t}
              </text>
            );
          })}
          <text x={C} y="152" textAnchor="middle" fontSize="8.4" fontWeight="600" fill="#151515" style={{ letterSpacing: "0.32em" }}>DBP · PARIS</text>
          <text x={C} y="163" textAnchor="middle" fontSize="6" fill="#6b6b6b" style={{ letterSpacing: "0.3em" }}>VILLA GAGLIARDINI</text>
          {/* Lecture centrale, en chiffres fins */}
          <text x={C} y="262" textAnchor="middle" fontSize="34" fontWeight="600" fill="#111" style={{ letterSpacing: "-0.06em", fontVariantNumeric: "tabular-nums" }}>
            <tspan data-temp>16,0</tspan><tspan fill="#ff4a00">°</tspan>
          </text>
          <text x={C} y="280" textAnchor="middle" fontSize="6.4" fill="#6b6b6b" style={{ letterSpacing: "0.34em" }}>CELSIUS · DEPUIS 2007</text>
        </g>

        {/* Aiguille fine à contrepoids, avec son ombre sur l'émail */}
        <g data-needle className="roundstat-needle" style={{ transform: `rotate(${needleAngle(16)}deg)` }} filter="url(#rs-needle-shadow)">
          <path d={`M ${C - 1.6} ${C + 30} L ${C - 0.7} ${C - 128} L ${C} ${C - 133} L ${C + 0.7} ${C - 128} L ${C + 1.6} ${C + 30} Z`} fill="url(#rs-needle)" />
          <path d={`M ${C - 5.5} ${C + 26} Q ${C} ${C + 46} ${C + 5.5} ${C + 26} Z`} fill="#1b1b1b" />
        </g>
        {/* Capuchon chromé */}
        <circle cx={C} cy={C} r="13" fill="url(#rs-cap)" />
        <circle cx={C} cy={C} r="13" fill="none" stroke="#1d1f22" strokeOpacity=".5" strokeWidth=".8" />
        <circle cx={C - 3.6} cy={C - 4.2} r="3.2" fill="#fff" fillOpacity=".85" />

        {/* Verre bombé : reflet principal en croissant, liseré et éclat */}
        <path d="M 78 150 A 128 128 0 0 1 246 62 A 150 150 0 0 0 96 176 Z" fill="url(#rs-glass)" />
        <ellipse cx="292" cy="296" rx="26" ry="9" transform="rotate(-42 292 296)" fill="#fff" fillOpacity=".22" />
        <circle cx={C} cy={C} r="147" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1" />
      </svg>
    </div>
  );
}
