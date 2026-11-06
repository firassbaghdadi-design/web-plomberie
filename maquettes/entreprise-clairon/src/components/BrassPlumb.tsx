/**
 * Le fil à plomb en laiton, objet signature du héros (« plombier » vient du latin plumbum, le plomb).
 * Laiton tourné : œillet, tête moletée, bagues filetées, corps gravé « CLAIRON · 1943 », pointe en acier.
 * Il descend d'un cordon fin, oscille à peine au chargement puis se stabilise : d'aplomb. Décoratif (aria-hidden).
 */
export function BrassPlumb({ cord = 220, className = "", founded = "1943" }: { cord?: number; className?: string; founded?: string }) {
  const h = cord + 268;
  return (
    <div className={`bob-hang pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 120 ${h}`} width="120" height={h} className="h-auto w-full overflow-visible">
        <defs>
          {/* Laiton : reflets verticaux d'un métal tourné */}
          <linearGradient id="bp-brass" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#3b2b10" />
            <stop offset=".08" stopColor="#6f5322" />
            <stop offset=".22" stopColor="#c9a25a" />
            <stop offset=".31" stopColor="#f7e7b8" />
            <stop offset=".38" stopColor="#dcbb76" />
            <stop offset=".58" stopColor="#a47d3b" />
            <stop offset=".78" stopColor="#6a4f20" />
            <stop offset=".9" stopColor="#8f6e33" />
            <stop offset="1" stopColor="#2e220c" />
          </linearGradient>
          <linearGradient id="bp-brass-dark" x1="0" x2="1">
            <stop offset="0" stopColor="#2a1f0b" />
            <stop offset=".3" stopColor="#9c7838" />
            <stop offset=".36" stopColor="#e9d29a" />
            <stop offset=".6" stopColor="#7a5c27" />
            <stop offset="1" stopColor="#24190a" />
          </linearGradient>
          <linearGradient id="bp-steel" x1="0" x2="1">
            <stop offset="0" stopColor="#2b323b" />
            <stop offset=".35" stopColor="#c9d2dc" />
            <stop offset=".5" stopColor="#8a96a4" />
            <stop offset="1" stopColor="#1e252d" />
          </linearGradient>
          <linearGradient id="bp-cord" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#cfae6e" stopOpacity=".2" />
            <stop offset=".25" stopColor="#d9bb80" />
            <stop offset="1" stopColor="#a8874b" />
          </linearGradient>
          <radialGradient id="bp-glow" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#f3d99c" stopOpacity=".22" />
            <stop offset="1" stopColor="#f3d99c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bp-shade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity=".35" />
          </linearGradient>
          <pattern id="bp-knurl" width="3" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 4 L3 0" stroke="#2a1f0b" strokeOpacity=".55" strokeWidth=".7" />
            <path d="M0 0 L3 4" stroke="#fff3cf" strokeOpacity=".25" strokeWidth=".5" />
          </pattern>
        </defs>

        {/* Cordon torsadé */}
        <line x1="60" y1="0" x2="60" y2={cord} stroke="url(#bp-cord)" strokeWidth="1.4" />
        <line x1="60" y1="0" x2="60" y2={cord} stroke="#3b2b10" strokeOpacity=".5" strokeWidth="1.4" strokeDasharray="1.2 2.4" />

        <g transform={`translate(0 ${cord})`}>
          <ellipse cx="60" cy="140" rx="64" ry="120" fill="url(#bp-glow)" />
          {/* Œillet */}
          <ellipse cx="60" cy="9" rx="7.5" ry="8.5" fill="none" stroke="url(#bp-brass-dark)" strokeWidth="3.2" />
          <ellipse cx="60" cy="9" rx="7.5" ry="8.5" fill="none" stroke="#fbeabf" strokeOpacity=".35" strokeWidth=".6" transform="translate(-.6 -.6)" />
          {/* Tête moletée */}
          <rect x="47" y="17" width="26" height="20" rx="2" fill="url(#bp-brass)" />
          <rect x="47" y="17" width="26" height="20" rx="2" fill="url(#bp-knurl)" />
          <rect x="47" y="17" width="26" height="1.2" fill="#fff4d2" fillOpacity=".55" />
          <rect x="47" y="35.4" width="26" height="1.6" fill="#1f1607" fillOpacity=".55" />
          {/* Collet et épaulement */}
          <path d="M42 37 H78 L82 44 H38 Z" fill="url(#bp-brass-dark)" />
          <rect x="34" y="44" width="52" height="5" fill="url(#bp-brass)" />
          <rect x="34" y="48.4" width="52" height="1" fill="#1f1607" fillOpacity=".6" />
          {/* Corps tourné, puis cône */}
          <path d="M32 49 H88 V136 Q88 150 80 162 L63.2 222 H56.8 L40 162 Q32 150 32 136 Z" fill="url(#bp-brass)" />
          <path d="M32 49 H88 V136 Q88 150 80 162 L63.2 222 H56.8 L40 162 Q32 150 32 136 Z" fill="url(#bp-shade)" />
          {/* Bagues filetées */}
          {[62, 66, 70].map((y) => (
            <g key={y}>
              <rect x="32" y={y} width="56" height=".9" fill="#2a1f0b" fillOpacity=".55" />
              <rect x="32" y={y + 1} width="56" height=".5" fill="#fff3cf" fillOpacity=".35" />
            </g>
          ))}
          {[122, 126].map((y) => (
            <g key={y}>
              <rect x="32" y={y} width="56" height=".9" fill="#2a1f0b" fillOpacity=".55" />
              <rect x="32" y={y + 1} width="56" height=".5" fill="#fff3cf" fillOpacity=".35" />
            </g>
          ))}
          {/* Gravure */}
          <g fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" letterSpacing="2.2">
            <text x="60.5" y="96.6" fontSize="8.2" fill="#fff1c8" fillOpacity=".35">CLAIRON</text>
            <text x="60" y="96" fontSize="8.2" fill="#3a2a0e">CLAIRON</text>
            <text x="60.5" y="110.6" fontSize="6.4" fill="#fff1c8" fillOpacity=".3">{founded}</text>
            <text x="60" y="110" fontSize="6.4" fill="#3a2a0e">{founded}</text>
          </g>
          <rect x="40" y="82" width="40" height=".6" fill="#3a2a0e" fillOpacity=".55" />
          {/* Reflet spéculaire */}
          <path d="M45 52 C44 90 44 128 46 150 L57 214" fill="none" stroke="#fff8e2" strokeOpacity=".55" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M79 54 V136 Q79 148 73 160" fill="none" stroke="#f6dfa4" strokeOpacity=".22" strokeWidth="1.2" />
          {/* Pointe en acier */}
          <path d="M56.8 222 H63.2 L60 248 Z" fill="url(#bp-steel)" />
          <path d="M58.6 223 L60 246" stroke="#f2f6fa" strokeOpacity=".6" strokeWidth=".5" />
        </g>
      </svg>
    </div>
  );
}
