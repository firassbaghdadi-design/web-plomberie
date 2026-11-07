import files from "./photo-files.json";
import manifest from "./photos.generated.json";

export type PhotoId = keyof typeof files;

export const photoAlt = (id: PhotoId) => files[id].alt;
export const photoSrc = (id: PhotoId) => (manifest as Record<string, string | null>)[id] ?? null;

import siteManifest from "./site-photos.generated.json";
/** Images reprises du site actuel de l'entreprise (téléchargées au build) ; null si le téléchargement a échoué. */
export const siteSrc = (key: string) => (siteManifest as Record<string, string | null>)[key] ?? null;
