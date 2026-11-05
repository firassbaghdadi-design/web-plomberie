import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean; position?: string; zoom?: boolean; grade?: "doux" | "fort" };

/**
 * Image téléchargée au build, étalonnée chaude et sombre (« tirage »).
 * Si elle manque, un panneau de bois sombre légendé prend sa place : jamais de zone vide.
 */
export function Img({ id, alt, className = "", imgClassName = "", priority, position, zoom = true, grade = "doux" }: Props) {
  const src = imgSrc(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} grain ${grade === "fort" ? "tirage-fort" : "tirage"} overflow-hidden bg-nuit-3 ${className}`} data-photo={zoom && !priority ? "" : undefined}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="photo-vide absolute inset-0 flex items-end p-6">
          <span className="cap text-cuivre-light/80">{alt}</span>
        </div>
      )}
    </div>
  );
}
