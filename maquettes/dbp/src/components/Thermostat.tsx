/**
 * Le thermostat, réinterprété en typographie : plus de cadran, des chiffres.
 * - Scale : l'échelle du héros, 16 à 21, chaque degré plus grand que le précédent, posée sur un filet noir.
 * - Readout : la température de la page, en chasse fixe, dans l'en-tête.
 * Motion.tsx fait monter la température de 16,0° à 21,0° avec la lecture et allume le degré courant de l'échelle.
 */
export const STEPS = [
  { t: 16, label: "Fuite" },
  { t: 17, label: "Débouchage" },
  { t: 18, label: "Sanitaires" },
  { t: 19, label: "Pièces de vie" },
  { t: 20, label: "Radiateurs" },
  { t: 21, label: "Chaudière" },
] as const;

/** Taille de chaque chiffre, en part de la largeur de l'échelle (cqw) : une progression géométrique, la chaleur qui monte. */
const SIZES = [5.8, 7.5, 9.7, 12.6, 16.4, 21.3];

export function Scale() {
  return (
    <div className="relative [container-type:inline-size]" role="img" aria-label="Échelle de température, de 16 à 21 degrés : de la fuite à la chaudière">
      <div className="flex items-end justify-between" aria-hidden="true">
        {STEPS.map((s, i) => (
          <div key={s.t} className="flex flex-col items-start">
            <span className="rise" style={{ ["--d" as string]: `${300 + i * 120}ms`, fontSize: `${SIZES[i]}cqw` }}>
              <span data-step={s.t} className="scale-step giant block pb-[0.02em]">
                {s.t}
                {i === STEPS.length - 1 ? <span className="deg">°</span> : null}
              </span>
            </span>
            <span className="flex h-9 flex-col items-start pt-[7px] lg:h-11 lg:pt-[9px]">
              <span data-tick={s.t} className="scale-tick block h-2 w-px bg-ink" />
              <span className="meta-faint mt-1.5 hidden whitespace-nowrap md:block">{s.label}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="draw absolute inset-x-0 bottom-9 h-[3px] bg-ink lg:bottom-11 lg:h-1" style={{ ["--d" as string]: "100ms" }} aria-hidden="true" />
    </div>
  );
}

/** Température de la page : « 16,0° » au début, « 21,0° » en bas. */
export function Readout({ className = "" }: { className?: string }) {
  return (
    <span className={`num inline-flex items-baseline ${className}`} aria-hidden="true">
      <span data-temp>16,0</span>
      <span className="deg">°</span>
    </span>
  );
}
