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
export const photoAlt = (id: string) => (id in pexels ? pexels[id as PexelsId].alt : "Photo SMAP");

/**
 * Légendes techniques des planches, façon portfolio d'architecte : pièce, matières et revêtements visibles sur la photo.
 * Elles décrivent l'image, pas un chantier précis de l'entreprise.
 */
export type Spec = [string, string];
export const photoSpecs: Record<string, { room: string; specs: Spec[] }> = {
  bains: { room: "Salle de bains", specs: [["Matières", "Verre clair, faïence, robinetterie chromée"], ["Équipement", "Douche vitrée et baignoire"]] },
  bains2: { room: "Salle de bains", specs: [["Matières", "Faïence claire, meuble suspendu"], ["Lumière", "Naturelle"]] },
  bains3: { room: "Salle de bains", specs: [["Matières", "Terrazzo, laiton, céramique"], ["Équipement", "Baignoire et robinetterie murale"]] },
  douche: { room: "Douche", specs: [["Matières", "Carreaux géométriques, laiton"], ["Équipement", "Douche murale"]] },
  cuisine: { room: "Cuisine", specs: [["Matières", "Façades bois, plan de travail"], ["Pièce", "Cuisine ouverte d'appartement"]] },
  cuisine2: { room: "Cuisine", specs: [["Matières", "Bois, carreaux hexagonaux"], ["Pièce", "Cuisine et couloir"]] },
  chantier: { room: "Chantier", specs: [["Étape", "Travaux en cours"], ["Lieu", "Appartement"]] },
  renovation: { room: "Rénovation", specs: [["Étape", "Reprise d'une pièce"], ["Lieu", "Appartement"]] },
  plan: { room: "Relevé", specs: [["Étape", "Plan au crayon, à l'échelle"], ["Outils", "Règle, crayon, mètre"]] },
  facade: { room: "Immeuble", specs: [["Lieu", "Façade parisienne"], ["Interventions", "Parties communes, colonnes"]] },
  cuivre: { room: "Plomberie", specs: [["Outil", "Clé à molette"], ["Interventions", "Fuites, raccords, robinetterie"]] },
};
export const specsFor = (id: string) => photoSpecs[id] ?? { room: "Réalisation", specs: [["Source", "Photo publiée par SMAP"]] as Spec[] };
