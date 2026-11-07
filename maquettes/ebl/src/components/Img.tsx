import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean };

/** Image téléchargée au build. Si elle manque, un aplat crème légendé prend sa place : jamais de zone vide. */
export function Img({ id, alt, className = "", imgClassName = "", priority }: Props) {
  const src = imgSrc(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-cream-deep ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end bg-gradient-to-br from-tabac-light/50 via-cream-deep to-olive-mist/40 p-6">
          <span className="label text-tabac-deep">{alt}</span>
        </div>
      )}
    </div>
  );
}
