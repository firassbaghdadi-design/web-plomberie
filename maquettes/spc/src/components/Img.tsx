import type { Photo } from "@/lib/photos";

type Props = { photo: Photo; className?: string; imgClassName?: string; priority?: boolean; position?: string };

/** Image téléchargée au build. Si elle manque, un aplat zinc légendé prend sa place : jamais de zone vide. */
export function Img({ photo, className = "", imgClassName = "", priority, position }: Props) {
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-zinc-wash ${className}`}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={photo.alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={photo.alt} className="absolute inset-0 flex items-end bg-gradient-to-br from-zinc-wash to-line p-6">
          <span className="label">{photo.alt}</span>
        </div>
      )}
    </div>
  );
}
