import { imgSrc } from "@/lib/photos";

type Props = { id: string; alt: string; className?: string; imgClassName?: string; priority?: boolean; tone?: "night" | "blue" };

/** Image téléchargée au build. Si elle manque, un aplat dessiné (lignes de plan et flamme) prend sa place : jamais de zone vide. */
export function Img({ id, alt, className = "", imgClassName = "", priority, tone = "night" }: Props) {
  const src = imgSrc(id);
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${tone === "night" ? "bg-night" : "bg-blue-deep"} ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={alt} className="grid-lines absolute inset-0 flex items-end p-6">
          <span className="label text-white/50">{alt}</span>
        </div>
      )}
    </div>
  );
}
