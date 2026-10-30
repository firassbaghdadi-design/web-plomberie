type Props = {
  /** Numéro du niveau, du faîtage (haut) vers la cave (bas). */
  n: string;
  /** Nom du niveau de l'immeuble : Faîtage, Toiture, Étages… */
  level: string;
  children: React.ReactNode;
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
  tone?: "white" | "zinc";
  className?: string;
};

/**
 * Un niveau de l'immeuble : un tronçon de la descente d'eau pluviale longe la marge gauche, un collier de fixation
 * le tient en haut, et l'eau (la couleur du logo) descend dans le tronçon quand la section arrive à l'écran.
 */
export function Niveau({ n, level, children, id, labelledBy, ariaLabel, tone = "white", className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} data-niveau={n} data-level={level} className={`niveau ${tone === "zinc" ? "bg-zinc-wash" : "bg-white"} ${className}`}>
      <div className="wrap relative">
        <div className="rail" aria-hidden="true"><span className="rail-water" /></div>
        <span className="collier" aria-hidden="true" />
        <p className="niveau-label label flex items-baseline gap-3" aria-hidden="true">
          <span className="num text-accent">N{n}</span>
          <span className="h-px w-8 translate-y-[-0.25em] bg-line" />
          <span>{level}</span>
        </p>
        <div className="niveau-body pb-20 pt-[5.4rem] sm:pb-28 sm:pt-28">{children}</div>
      </div>
    </section>
  );
}
