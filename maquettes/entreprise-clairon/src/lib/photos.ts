import pexels from "./pexels.json";
import manifest from "./site-photos.generated.json";

export type PexelsId = keyof typeof pexels;
type SitePhoto = { src: string; w: number; h: number; alt: string; page: string };
const m = manifest as { photos: Record<string, string | null>; logo: { src: string; w: number; h: number } | null; site: SitePhoto[] };

/** Image téléchargée au build ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m.photos[key] ?? null;
export const logoFile = m.logo;
/** Photos publiées par l'entreprise sur son site actuel (récupérées au build, plus grandes que 700 × 450 px). */
export const sitePhotos = m.site;
export const pexelsCredits = Object.entries(pexels).map(([id, c]) => ({ id, ...c }));
export const photoAlt = (id: string) => (id in pexels ? pexels[id as PexelsId].alt : "Photo Entreprise Clairon");
