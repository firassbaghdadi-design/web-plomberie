import type { Photo } from "@/lib/photos";

type Props = { photo: Photo; className?: string; priority?: boolean; position?: string };

/**
 * Grande photo téléchargée au build, en couleurs naturelles, cadrée bord à bord.
 * Si elle manque (pas de réseau au build), un panneau de zinc à joints debout prend sa place : jamais de bloc vide.
 */
export function Img({ photo, className = "", priority, position }: Props) {
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} natural overflow-hidden bg-brand ${className}`}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={photo.alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div role="img" aria-label={photo.alt} className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgb(var(--accent-light) / .55), rgb(var(--accent)) 45%, rgb(var(--deep)))" }}>
          <div className="seams absolute inset-0" style={{ ["--seam" as string]: "34px" }} />
        </div>
      )}
    </div>
  );
}
