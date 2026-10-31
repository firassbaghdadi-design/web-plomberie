import type { Photo } from "@/lib/photos";

type Props = { photo: Photo; alt?: string; className?: string; imgClassName?: string; priority?: boolean; position?: string; tone?: "grade" | "grade-deep" | "none" };

/**
 * Image récupérée au build, étalonnée sombre (désaturée, contrastée, légèrement chaude) pour tenir sur l'encre.
 * Si elle manque, une plaque d'anthracite éclairée d'un halo de laiton prend sa place : jamais de zone vide.
 */
export function Img({ photo, alt, className = "", imgClassName = "", priority, position, tone = "grade" }: Props) {
  const text = alt ?? photo.alt;
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-raise ${className}`}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={text} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${tone === "none" ? "" : tone} ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={text} className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#2a2419_0%,#16150f_45%,#0c0d0f_100%)]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(237,231,219,.025)_0_1px,transparent_1px_7rem)]" aria-hidden="true" />
          <span className="serif absolute bottom-5 left-5 right-5 text-[0.95rem] italic text-fg-faint">{text}</span>
        </div>
      )}
    </div>
  );
}
