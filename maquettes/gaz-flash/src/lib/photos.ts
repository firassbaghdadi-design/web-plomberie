import files from "./photo-files.json";
import manifest from "./photos.generated.json";

export const CDN = "https://gazflash.fr/wp-content/uploads/";

export type PhotoId = keyof typeof files;

export const photoSrc = (id: PhotoId) => (manifest as Record<string, string | null>)[id] ?? null;
export const remoteSrc = (id: PhotoId) => (/^https?:/.test(files[id]) ? files[id] : `${CDN}${files[id]}`);
