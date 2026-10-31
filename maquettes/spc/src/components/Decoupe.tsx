import type { Photo } from "@/lib/photos";

type Props = {
  photo: Photo;
  /** Silhouette de la découpe : un toit à la Mansart avec ses souches, ou une lucarne. */
  shape?: "mansard" | "lucarne" | "none";
  /** Bichromie : la photo prend la couleur du logo. */
  duo?: boolean;
  className?: string;
  priority?: boolean;
  position?: string;
};

/**
 * Photo découpée dans la silhouette d'un toit parisien, posée sur l'aplat de couleur.
 * Sans photo (pas de réseau au build), un panneau de zinc à joints debout prend sa place : jamais de bloc vide.
 */
export function Decoupe({ photo, shape = "mansard", duo = true, className = "", priority, position }: Props) {
  const clip = shape === "none" ? "" : shape;
  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${clip} ${duo ? "duo" : "natural"} ${className}`}>
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo.src} alt={photo.alt} loading={priority ? "eager" : "lazy"} decoding="async" style={position ? { objectPosition: position } : undefined} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div role="img" aria-label={photo.alt} className="seams absolute inset-0" style={{ ["--seam" as string]: "34px", background: "linear-gradient(160deg, rgb(var(--accent-light) / .55), rgb(var(--accent)) 45%, rgb(var(--deep)))" }}>
          <div className="seams absolute inset-0" style={{ ["--seam" as string]: "34px" }} />
        </div>
      )}
    </div>
  );
}
