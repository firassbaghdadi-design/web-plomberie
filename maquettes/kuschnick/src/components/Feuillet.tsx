import { Roll } from "./Roll";

type Props = {
  n: string;
  rubrique: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
  ariaLabel?: string;
  tone?: "white" | "paper";
};

/**
 * Une rubrique du journal. En tête : une ligne de perforations (l'accent discret du carnet à souches de la maison),
 * le gros filet d'imprimerie, puis la ligne de rubrique avec son nom à gauche et son numéro au numéroteur à droite.
 * data-folio alimente le numéroteur de l'en-tête.
 */
export function Feuillet({ n, rubrique, children, id, className = "", labelledBy, ariaLabel, tone = "white" }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} data-folio={n} data-rubrique={rubrique} className={`feuillet relative ${tone === "paper" ? "bg-paper-2" : ""} ${className}`}>
      <div className="wrap pt-14 sm:pt-20">
        <div className="perf-x" aria-hidden="true" />
        <div className="rule-thick mt-3" />
        <div className="flex items-baseline justify-between gap-6 border-b border-line py-3">
          <p className="kicker">{rubrique}</p>
          <p className="flex items-baseline gap-2 text-ink-faint">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em]">N°</span>
            <Roll value={n} className="font-serif text-[1.15rem] text-ink" />
          </p>
        </div>
        <div className="min-w-0 pb-20 pt-10 sm:pb-24 sm:pt-12">{children}</div>
      </div>
    </section>
  );
}
