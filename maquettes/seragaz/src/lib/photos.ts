import commons from "./commons.json";
import pexels from "./pexels.json";
import manifest from "./site-photos.generated.json";

export type CommonsId = keyof typeof commons;
export type PexelsId = keyof typeof pexels;
const m = manifest as Record<string, string | null>;

/** Image téléchargée au build (site actuel, Commons ou Pexels) ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m[key] ?? null;
export const commonsAlt = (id: CommonsId) => commons[id].alt;
export const credits = Object.entries(commons).map(([id, c]) => ({ id, ...c }));
export const pexelsCredits = Object.entries(pexels).map(([id, c]) => ({ id, ...c }));

/** Texte alternatif de n'importe quelle photo de la maquette. */
export const photoAlt = (id: string) =>
  id === "accueil"
    ? "Intervention SERAGAZ sur une chaudière gaz (photo publiée par l'entreprise)"
    : id === "atelier"
      ? "Technicien SERAGAZ au travail (photo publiée par l'entreprise)"
      : id in pexels
        ? pexels[id as PexelsId].alt
        : commonsAlt(id as CommonsId);
