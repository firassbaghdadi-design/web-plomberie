import files from "./photo-files.json";
import manifest from "./photos.generated.json";

type Entry = { alt: string };
const m = manifest as { src: Record<string, string | null>; source: Record<string, string> };
const all: Record<string, Entry> = { ...files.pexels, ...files.site };

/** Image téléchargée au build ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m.src[key] ?? null;
export const photoAlt = (key: string) => all[key]?.alt ?? "";
/** true si la photo vient bien du site de l'entreprise (et pas d'une photo de repli). */
export const isCompanyPhoto = (key: string) => m.source[key] === "site";
export const pexelsCredits = Object.entries(files.pexels).map(([key, f]) => ({ key, ...f }));
