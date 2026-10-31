type Props = {
  /** Cote de niveau, en mètres, comme sur une coupe d'architecte (ex. « +24,00 »). */
  cote: string;
  /** Nom du niveau de l'immeuble : Faîtage, Toiture, Étages, Cave… */
  level: string;
  /** Profondeur de 0 (sous le toit) à 1 (la cave) : la couleur du logo s'assombrit avec elle. */
  depth?: number;
  /** « zinc » : un niveau clair, couleur de zinc patiné, pour rythmer la descente. */
  tone?: "brand" | "zinc";
  children: React.ReactNode;
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
  className?: string;
};

/** Mélange de la couleur du logo et du presque-noir de la cave, selon la profondeur. */
export const depthColor = (depth: number) => {
  const p = Math.round(100 - Math.min(1, Math.max(0, depth)) * 84);
  return `color-mix(in srgb, rgb(var(--accent)) ${p}%, rgb(var(--abyss)))`;
};

/**
 * Un niveau de l'immeuble. La cote est posée en tête avec le triangle du relevé d'architecte,
 * et le fond prend la couleur du logo à la profondeur du niveau.
 */
export function Etage({ cote, level, depth = 0.4, tone = "brand", children, id, labelledBy, ariaLabel, className = "" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      data-cote={cote}
      data-level={level}
      data-tone={tone}
      className={`etage ${tone === "zinc" ? "etage-zinc" : ""} ${className}`}
      style={tone === "zinc" ? undefined : { background: depthColor(depth) }}
    >
      <div className="wrap pb-20 pt-10 sm:pb-28 sm:pt-12">
        <p className="cote mb-12 sm:mb-16" aria-hidden="true">
          <span className="cote-mark" />
          <span className="cote-val">{cote}</span>
          <span>{level}</span>
        </p>
        {children}
      </div>
    </section>
  );
}

/** Cotes de la coupe, du faîtage à la cave d'un immeuble du 12e. */
export const COTES = [
  { cote: "+24,00", level: "Faîtage" },
  { cote: "+21,40", level: "Toiture" },
  { cote: "+18,60", level: "Combles" },
  { cote: "+12,00", level: "Étages" },
  { cote: "+6,20", level: "Paliers" },
  { cote: "±0,00", level: "Rez-de-chaussée" },
  { cote: "−0,40", level: "Cour" },
  { cote: "−3,50", level: "Cave" },
  { cote: "−4,80", level: "Réseau" },
];
export const coteAt = (i: number) => COTES[Math.min(Math.max(0, i), COTES.length - 1)];
/** Profondeur du i-ème niveau d'une page qui en compte n. */
export const depthAt = (i: number, n: number) => 0.12 + (0.84 * i) / Math.max(1, n - 1);
