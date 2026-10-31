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
 * Un feuillet du carnet à souches. À gauche la souche : « N° », le numéro au numéroteur et la rubrique ;
 * une ligne de perforations sépare la souche du feuillet. Sur téléphone, la souche devient une ligne au-dessus du
 * feuillet et la perforation court horizontalement. data-folio alimente le numéroteur de l'en-tête.
 */
export function Feuillet({ n, rubrique, children, id, className = "", labelledBy, ariaLabel, tone = "white" }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} data-folio={n} data-rubrique={rubrique} className={`feuillet relative ${tone === "paper" ? "bg-paper" : "bg-white"} ${className}`}>
      <div className="perf-x absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="wrap grid lg:grid-cols-[11rem_1px_minmax(0,1fr)] lg:gap-x-12 xl:grid-cols-[13rem_1px_minmax(0,1fr)] xl:gap-x-16">
        <div className="flex items-baseline gap-4 pt-10 sm:pt-14 lg:block lg:pt-24">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-baseline gap-3 text-copper">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">N°</span>
              <Roll value={n} className="text-[2.2rem] font-extralight tracking-[-0.02em] lg:text-[3.4rem]" />
            </div>
            <p className="label mt-1 lg:mt-4">{rubrique}</p>
          </div>
        </div>
        <div className="perf-y hidden justify-self-center lg:block" aria-hidden="true" />
        <div className="min-w-0 pb-20 pt-6 sm:pb-28 sm:pt-8 lg:pt-24">{children}</div>
      </div>
    </section>
  );
}
