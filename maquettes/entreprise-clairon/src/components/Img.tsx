import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean; src?: string };

/** Image téléchargée au build (ou `src` imposé). Si elle manque, un aplat légendé prend sa place : jamais de zone vide. */
export function Img({ id, alt, className = "", imgClassName = "", priority, src: forced }: Props) {
  const src = forced ?? imgSrc(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-mist ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end bg-gradient-to-br from-[#10263f] to-[#0a1a2d] p-6">
          <span className="label">{alt}</span>
        </div>
      )}
    </div>
  );
}
