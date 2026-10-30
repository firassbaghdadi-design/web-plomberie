const NAMES = ["Piquage", "Coude", "Té", "Réduction", "Manchon", "Vanne", "Union", "Compteur", "Purgeur"];

export const raccordName = (i: number) => NAMES[i % NAMES.length];

/**
 * Une section = un raccord du réseau isométrique. Le composant Network repère `[data-raccord] .raccord-label`
 * pour poser l'écrou-union sur la conduite, à la hauteur du libellé.
 */
export function Raccord({
  n,
  index,
  name,
  id,
  ariaLabel,
  labelledBy,
  className = "",
  children,
}: {
  n: string;
  index?: number;
  name?: string;
  id?: string;
  ariaLabel?: string;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const nm = name ?? raccordName(index ?? Number(n) - 1);
  return (
    <section id={id} data-raccord aria-label={ariaLabel} aria-labelledby={labelledBy} className={`relative z-10 py-16 sm:py-24 ${className}`}>
      <div className="wrap">
        <p className="raccord-label" data-reveal>
          <span className="num">Raccord {n}</span>
          <i aria-hidden="true" />
          <span>{nm}</span>
        </p>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}
