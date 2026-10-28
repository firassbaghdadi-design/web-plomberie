/**
 * Rideau d'ouverture : la truelle du logo gâche le ciment dans un seau, vu de profil.
 * Même dessin que le symbole (lame papier, col, manche encre) ; seau encre, ciment papier.
 * Tout est en CSS (globals.css, « Gâchée ») ; sans animation, le dessin reste fixe, truelle plantée dans le ciment.
 */
export function Gachee({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 190" className={`gachee ${className}`} aria-hidden="true">
      <defs>
        <clipPath id="gachee-surface">
          <ellipse cx="100" cy="92" rx="47" ry="9.5" />
        </clipPath>
      </defs>

      {/* Anse, rabattue vers l'arrière */}
      <path d="M50 96 C 50 52, 150 52, 150 96" fill="none" stroke="#F4EEE3" strokeOpacity=".45" strokeWidth="2.4" strokeLinecap="round" />

      {/* Ouverture du seau : le ciment et ses ondes */}
      <ellipse cx="100" cy="92" rx="51" ry="11" fill="#14191C" />
      <ellipse cx="100" cy="92" rx="47" ry="9.5" fill="#EAE0CE" />
      <g clipPath="url(#gachee-surface)" fill="none" stroke="#14191C" strokeLinecap="round">
        <g className="gachee-waves">
          <path d="M20 90 q 10 -3 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" strokeOpacity=".22" strokeWidth="1.2" />
          <path d="M14 95.5 q 10 -2.5 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" strokeOpacity=".16" strokeWidth="1.2" />
        </g>
        <ellipse className="gachee-ripple" cx="100" cy="92" rx="14" ry="3.2" strokeOpacity=".35" strokeWidth="1.1" />
        <ellipse className="gachee-ripple gachee-ripple-2" cx="100" cy="92" rx="14" ry="3.2" strokeOpacity=".35" strokeWidth="1.1" />
      </g>

      {/* La truelle du logo, lame vers le bas : elle touille */}
      <g className="gachee-sweep">
        <g className="gachee-tilt" strokeLinejoin="round" strokeLinecap="round">
          <g transform="translate(100 108) scale(1.75) rotate(180) translate(-32 -7)">
            <path d="M32 7 L45.5 37 L32 30.5 L18.5 37 Z" fill="#F4EEE3" stroke="#F4EEE3" strokeWidth="2" />
            <path d="M32 31 L32 41" stroke="#F4EEE3" strokeWidth="3.4" />
            <rect x="27.6" y="40" width="8.8" height="16" rx="4.4" fill="#14191C" />
          </g>
        </g>
      </g>

      {/* Éclaboussures discrètes */}
      <circle className="gachee-drop" cx="84" cy="86" r="2.2" fill="#EAE0CE" />
      <circle className="gachee-drop gachee-drop-2" cx="118" cy="85" r="1.8" fill="#EAE0CE" />
      <circle className="gachee-drop gachee-drop-3" cx="100" cy="84" r="1.5" fill="#EAE0CE" />

      {/* Corps du seau, devant la lame */}
      <path d="M49 92 A 51 11 0 0 0 151 92 L 139 168 Q 100 176 61 168 Z" fill="#14191C" />
      <path d="M49 92 A 51 11 0 0 0 151 92" fill="none" stroke="#F4EEE3" strokeWidth="2.4" />
      <path d="M53.5 118 Q 100 128 146.5 118" fill="none" stroke="#F4EEE3" strokeOpacity=".18" strokeWidth="1.4" />
      <path d="M57.5 143 Q 100 152 142.5 143" fill="none" stroke="#F4EEE3" strokeOpacity=".18" strokeWidth="1.4" />
      <circle cx="51.5" cy="98" r="2.6" fill="#F4EEE3" fillOpacity=".55" />
      <circle cx="148.5" cy="98" r="2.6" fill="#F4EEE3" fillOpacity=".55" />
    </svg>
  );
}
