import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean; position?: string };

/**
 * Photo téléchargée au build, petite et cadrée serré, en noir et blanc (la couleur revient au survol).
 * Si elle manque, un aplat gris légendé prend sa place : jamais de zone vide.
 */
export function Img({ id, alt, className = "", imgClassName = "", priority, position }: Props) {
  const src = imgSrc(id);
  return (
    <div className={`photo-bw ${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-paper-2 ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end bg-paper-2 p-3">
          <span className="meta-faint">{alt}</span>
        </div>
      )}
    </div>
  );
}
