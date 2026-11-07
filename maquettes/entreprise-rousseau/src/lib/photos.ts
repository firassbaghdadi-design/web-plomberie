import files from "./photo-files.json";
import manifest from "./photos.generated.json";

export const CDN = "https://primary.jwwb.nl/public/r/g/g/temp-evvbcsehnfqopbccznvb/";

export type PhotoId = keyof typeof files;

export const photoSrc = (id: PhotoId) => (manifest as Record<string, string | null>)[id] ?? null;
export const remoteSrc = (id: PhotoId) => `${CDN}${files[id]}`;
