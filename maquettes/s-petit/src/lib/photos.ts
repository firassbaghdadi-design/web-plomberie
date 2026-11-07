import files from "./photo-files.json";
import manifest from "./photos.generated.json";

const m = manifest as Record<string, string | null>;
const all: Record<string, { alt: string }> = files.pexels;

/** Image téléchargée au build ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m[key] ?? null;
export const photoAlt = (key: string) => all[key]?.alt ?? "";
export const pexelsCredits = Object.entries(files.pexels).map(([key, f]) => ({ key, ...f }));
