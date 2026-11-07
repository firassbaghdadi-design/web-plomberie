import { photoAlt, specsFor, type Spec } from "@/lib/photos";
import { Img } from "./Img";

type Props = {
  id: string;
  /** Numéro de planche, ex. « 04 ». */
  n?: string;
  /** Classe de proportions du cadre (ex. « aspect-[4/5] »). */
  ratio?: string;
  /** Lieu affiché dans la légende (ex. « Paris 12e »). */
  place?: string;
  specs?: Spec[];
  priority?: boolean;
  /** Photo de l'entreprise (site actuel) à la place d'une photo Pexels. */
  src?: string;
  altText?: string;
  className?: string;
  /** Légende sur une ligne (planches larges). */
  row?: boolean;
  /** Le héros se dévoile à l'ouverture ; les autres planches au défilement. */
  hero?: boolean;
};

/**
 * Planche de portfolio : une grande photo d'intérieur, sans cadre, puis une légende technique fine sur filet
 * (numéro de planche, pièce, matières, lieu), comme dans un book d'architecte d'intérieur.
 */
export function Plate({ id, n, ratio = "aspect-[4/3]", place = "Paris 12e", specs, priority, src, altText, className = "", row, hero }: Props) {
  const alt = altText ?? photoAlt(id);
  const meta = specsFor(id);
  const items: Spec[] = [["Pl.", `${n ?? "—"} · ${meta.room}`], ...(specs ?? meta.specs), ["Lieu", place]];
  return (
    <figure className={className}>
      <div className={`img-zoom relative overflow-hidden bg-mist ${ratio} ${hero ? "plate-in" : ""}`} data-mask={hero ? undefined : ""} style={hero ? { ["--d" as string]: "150ms" } : undefined}>
        <div className={`absolute inset-0 ${hero ? "slow-zoom" : ""}`}>
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <Img id={id} alt={alt} priority={priority} className="absolute inset-0 h-full w-full" />
          )}
        </div>
      </div>
      <figcaption>
        <dl className={`plate-cap ${row ? "is-row" : ""}`}>
          {items.map(([k, v]) => (
            <div key={k} className="contents">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  );
}
