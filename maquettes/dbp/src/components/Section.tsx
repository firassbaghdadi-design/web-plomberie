type Props = {
  /** Température de la section, « 16,0 » à « 21,0 » : elle remplace le numéro de section. */
  t: string;
  rubrique: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
  ariaLabel?: string;
  tone?: "white" | "black";
};

/** Température de la i-ème section sur n, de 16,0° à 21,0°. */
export const heat = (i: number, n: number) => (16 + (5 * i) / Math.max(1, n - 1)).toFixed(1).replace(".", ",");

/**
 * Une section d'affiche : un filet noir épais, la température en très grand dans les trois premières colonnes
 * (collée en haut de l'écran pendant la lecture), la rubrique en petit dessous, le contenu sur les neuf autres.
 */
export function Section({ t, rubrique, children, id, className = "", labelledBy, ariaLabel, tone = "white" }: Props) {
  const [whole, dec] = t.split(",");
  const black = tone === "black";
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} className={`relative ${black ? "bg-ink text-white" : "bg-white"} ${className}`}>
      <div className="wrap">
        <div className={`h-[3px] ${black ? "bg-white" : "bg-ink"}`} aria-hidden="true" />
        <div className="cols pb-20 pt-5 sm:pb-28 lg:pt-6">
          <div className="col-span-4 md:col-span-6 lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--head-h)+1.5rem)]">
              <p className="flex items-end justify-between gap-4 lg:block" aria-hidden="true">
                <span className="giant block text-[5.2rem] sm:text-[6.5rem] lg:text-[clamp(6rem,8.4vw,9rem)]">
                  {whole}
                  <span className="text-[0.42em] tracking-[-0.04em]">,{dec}</span>
                  <span className="deg">°</span>
                </span>
              </p>
              <p className={`meta mt-4 border-t pt-2 ${black ? "border-white/30 text-white/70" : "border-ink/20 text-ink-faint"}`}>{rubrique}</p>
            </div>
          </div>
          <div className={`col-span-4 mt-10 min-w-0 md:col-span-6 lg:col-span-9 lg:mt-0 ${black ? "[&_h2]:text-white [&_h3]:text-white" : ""}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
