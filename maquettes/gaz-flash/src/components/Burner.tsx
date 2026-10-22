const FLAMES = 30;
const flame = "M0 0C8 -9 11 -21 0 -46C-11 -21 -8 -9 0 0Z";
const inner = "M0 0C4 -5 5 -11 0 -24C-5 -11 -4 -5 0 0Z";

/** Brûleur de chaudière animé : couronne de flammes autour d'un cadran de température. */
export function Burner() {
  const ticks = Array.from({ length: 41 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 400" className="burner h-full w-full" role="img" aria-label="Illustration d'un brûleur de chaudière gaz et de son cadran de température">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A3D" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#E4342B" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E4342B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="petal" x1="0" y1="0" x2="0" y2="-46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2F7BFF" />
          <stop offset="38%" stopColor="#7FB2FF" />
          <stop offset="68%" stopColor="#FFB067" />
          <stop offset="100%" stopColor="#FF5A3C" />
        </linearGradient>
        <linearGradient id="core" x1="0" y1="0" x2="0" y2="-24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CFE2FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <radialGradient id="face" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#3B464F" />
          <stop offset="100%" stopColor="#1B2229" />
        </radialGradient>
      </defs>

      <circle className="heat-glow" cx="200" cy="200" r="198" fill="url(#glow)" />

      <g className="dial-ring" fill="none" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1.2">
        <circle cx="200" cy="200" r="186" strokeDasharray="2 9" />
        <circle cx="200" cy="200" r="176" strokeDasharray="60 18" strokeOpacity="0.08" />
      </g>

      {Array.from({ length: FLAMES }, (_, i) => (
        <g key={i} transform={`rotate(${(360 / FLAMES) * i} 200 200) translate(200 96)`}>
          <path className="flame-petal" d={flame} fill="url(#petal)" style={{ animationDelay: `${((i * 137) % 100) * -17}ms`, animationDuration: `${1.4 + ((i * 53) % 10) / 14}s` }} />
          <path className="flame-petal" d={inner} fill="url(#core)" opacity="0.85" style={{ animationDelay: `${((i * 71) % 100) * -15}ms` }} />
        </g>
      ))}

      <circle cx="200" cy="200" r="98" fill="none" stroke="#FF8A3D" strokeOpacity="0.55" strokeWidth="2" />
      <circle cx="200" cy="200" r="90" fill="url(#face)" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1.5" />

      <g stroke="#FFFFFF">
        {ticks.map((i) => {
          const angle = -120 + i * 6;
          const major = i % 5 === 0;
          return <line key={i} x1="200" y1={major ? 120 : 124} x2="200" y2="131" strokeWidth={major ? 2.4 : 1.2} strokeOpacity={major ? 0.85 : 0.35} transform={`rotate(${angle} 200 200)`} />;
        })}
      </g>

      <g className="dial-needle">
        <path d="M200 205 L196 128 L200 118 L204 128 Z" fill="#FF5A3C" />
        <circle cx="200" cy="200" r="8" fill="#FF8A3D" />
      </g>

      <text x="200" y="262" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="46" fill="#FFFFFF">
        21°
      </text>
      <text x="200" y="282" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" fontSize="14" letterSpacing="3.5" fill="#FFB067">
        CONFORT
      </text>
    </svg>
  );
}
