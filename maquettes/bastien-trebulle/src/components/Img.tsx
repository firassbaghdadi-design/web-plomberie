import type { Photo } from "@/lib/photos";

type Props = { photo: Photo; alt?: string; className?: string; imgClassName?: string; priority?: boolean; position?: string };

const rim = Array.from({ length: 60 }, (_, i) => {
  const a = (i / 60) * Math.PI * 2;
  const r2 = i % 5 === 0 ? 86 : 90;
  return <line key={i} x1={100 + Math.sin(a) * 96} y1={100 - Math.cos(a) * 96} x2={100 + Math.sin(a) * r2} y2={100 - Math.cos(a) * r2} strokeWidth=".8" />;
});

/** Image récupérée au build. Si elle manque, un aplat clair à fins traits de cadran prend sa place : jamais de zone vide. */
export function Img({ photo, alt, className = "", imgClassName = "", priority, position }: Props) {
  const text = alt ?? photo.alt;
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden bg-accent-wash ${className}`}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={text} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      ) : (
        <div role="img" aria-label={text} className="absolute inset-0 flex items-end bg-gradient-to-br from-white to-accent-wash p-6">
          <svg viewBox="0 0 200 200" className="absolute right-[-8%] top-[-8%] h-[70%] w-auto text-accent opacity-[.1]" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="100" cy="100" r="96" strokeWidth="1" /><circle cx="100" cy="100" r="78" strokeWidth=".6" />{rim}</svg>
          <span className="label relative">{text}</span>
        </div>
      )}
    </div>
  );
}
