import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean; position?: string; zoom?: boolean };

/** Image téléchargée au build. Si elle manque, un aplat crème légendé prend sa place : jamais de zone vide. */
export function Img({ id, alt, className = "", imgClassName = "", priority, position, zoom = true }: Props) {
  const src = imgSrc(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} grain warm overflow-hidden bg-creme-2 ${className}`} data-photo={zoom && !priority ? "" : undefined}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end bg-gradient-to-br from-creme-2 via-creme-3 to-[#d9bf9c] p-6">
          <span className="cap text-bois">{alt}</span>
        </div>
      )}
    </div>
  );
}
