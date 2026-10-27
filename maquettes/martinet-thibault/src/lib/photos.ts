import files from "./photo-files.json";
import manifest from "./photos.generated.json";

const m = manifest as Record<string, string | null>;
type Entry = { alt: string };
const all: Record<string, Entry> = { ...files.pexels, ...files.site };

/** Image téléchargée au build ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m[key] ?? null;
export const photoAlt = (key: string) => all[key]?.alt ?? "";
export const pexelsCredits = Object.entries(files.pexels).map(([key, f]) => ({ key, ...f }));
export const realisations = Array.from({ length: 9 }, (_, i) => `realisation-0${i + 1}`);
