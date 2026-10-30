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
 * Une section : filet fin qui se trace dans l'accent du moment, numéro et rubrique en légende, puis le contenu.
 * Sur téléphone, la légende passe au-dessus du contenu.
 */
export function Section({ n, rubrique, children, id, className = "", labelledBy, ariaLabel, tone = "white" }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} className={`section relative ${tone === "paper" ? "bg-paper" : "bg-white"} ${className}`}>
      <div className="wrap">
        <div className="section-rule" aria-hidden="true" />
        <div className="grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-12 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-x-16">
          <p className="flex items-baseline gap-3 pt-6 lg:block lg:pt-24">
            <span className="num block text-[0.95rem] text-accent">{n}</span>
            <span className="label lg:mt-3 lg:block">{rubrique}</span>
          </p>
          <div className="min-w-0 pb-20 pt-6 sm:pb-28 sm:pt-8 lg:pt-24">{children}</div>
        </div>
      </div>
    </section>
  );
}
