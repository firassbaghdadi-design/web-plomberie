import commons from "./commons.json";
import manifest from "./site-photos.generated.json";

export type CommonsId = keyof typeof commons;
const m = manifest as Record<string, string | null>;

/** Image téléchargée au build (site actuel ou Commons) ; null si le téléchargement a échoué. */
export const imgSrc = (key: string) => m[key] ?? null;
export const commonsAlt = (id: CommonsId) => commons[id].alt;
export const credits = Object.entries(commons).map(([id, c]) => ({ id, ...c }));
