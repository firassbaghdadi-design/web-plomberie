import files from "./photo-files.json";
import manifest from "./photos.generated.json";

export type PhotoId = keyof typeof files;

export const photoAlt = (id: PhotoId) => files[id].alt;
export const photoSrc = (id: PhotoId) => (manifest as Record<string, string | null>)[id] ?? null;
