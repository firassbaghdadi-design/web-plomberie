
/**
 * Le cadran du thermostat, fil conducteur de la page. Anneau gradué de 16° à 21° (six repères), arc de progression,
 * bouton qui tourne, valeur au centre. Tout ce qui bouge est piloté par Motion.tsx via les attributs data-dial-* :
 * l'arc, le bouton, la valeur lue, et la couleur d'accent (du bleu froid au rouge doux).
 */
const CX = 110;
const CY = 110;
const R = 88;
const point = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)] as const;
};
const [x0, y0] = point(135, R);
const [x1, y1] = point(45, R);
const ARC = `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 1 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
const TICKS = [16, 17, 18, 19, 20, 21].map((t, i) => ({ t, deg: 135 + i * 54 }));

export function Dial({ labels = false, className = "", ariaHidden = true }: { labels?: boolean; className?: string; ariaHidden?: boolean }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden={ariaHidden} role={ariaHidden ? undefined : "img"} fill="none">
      <circle cx={CX} cy={CY} r="100" fill="#fff" />
      <circle cx={CX} cy={CY} r="100" stroke="#e2e7ec" strokeWidth="1" />
      <path d={ARC} stroke="#e2e7ec" strokeWidth="3" strokeLinecap="round" pathLength={100} />
      <path d={ARC} data-dial-arc className="dial-arc" stroke="rgb(var(--accent))" strokeWidth="3" strokeLinecap="round" pathLength={100} />
      {TICKS.map(({ t, deg }) => {
        const [ax, ay] = point(deg, 74);
        const [bx, by] = point(deg, 80);
        const [lx, ly] = point(deg, 64);
        return (
          <g key={t}>
            <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#9aa3ac" strokeWidth="1.2" strokeLinecap="round" />
            {labels ? (
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="9" fill="#6a727b" className="num">{t}</text>
            ) : null}
          </g>
        );
      })}
      <g data-dial-knob className="dial-knob">
        <circle cx={CX} cy={CY - R} r="7" fill="#fff" stroke="rgb(var(--accent))" strokeWidth="1.6" />
        <circle cx={CX} cy={CY - R} r="2.2" fill="rgb(var(--accent))" />
      </g>
      <text x={CX} y={labels ? CY + 4 : CY + 4} textAnchor="middle" dominantBaseline="central" fontSize={labels ? 30 : 42} fill="#13171c" style={{ letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }} data-temp>16,0°</text>
      {labels ? (
        <text x={CX} y={CY + 26} textAnchor="middle" fontSize="7.4" fill="#6a727b" style={{ letterSpacing: "0.22em", textTransform: "uppercase" }} data-dial-mood>Dépannage</text>
      ) : null}
    </svg>
  );
}

/** Indicateur de défilement fixe : le cadran en petit, au bas de l'écran. Caché tant que le grand cadran du héros est visible. */
export function DockedDial() {
  return (
    <div data-dial-fixed className="dial-fixed fixed bottom-[4.9rem] right-3 z-[55] md:bottom-6 md:right-6" role="img" aria-label="Thermostat : la température de la page monte de 16 à 21 degrés au fil de la lecture">
      <Dial className="h-[3.9rem] w-[3.9rem] drop-shadow-[0_6px_16px_rgba(19,23,28,.16)] md:h-[5.2rem] md:w-[5.2rem]" />
    </div>
  );
}

