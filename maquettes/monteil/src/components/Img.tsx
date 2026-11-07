import { imgSrc, photoAlt } from "@/lib/photos";

type Props = { id: string; alt?: string; className?: string; imgClassName?: string; priority?: boolean; position?: string };

/** Image téléchargée au build. Si elle manque, un aplat sombre légendé prend sa place : jamais de zone vide. */
export function Img({ id, alt, className = "", imgClassName = "", priority, position }: Props) {
  const src = imgSrc(id);
  const text = alt ?? photoAlt(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-night-3 ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={text} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={text} className="absolute inset-0 flex items-start justify-end bg-[radial-gradient(120%_90%_at_70%_20%,#2a3640_0%,#151b21_55%,#0d1115_100%)] p-6 pt-24">
          <span className="label text-ink-faint/70">{text}</span>
        </div>
      )}
    </div>
  );
}
