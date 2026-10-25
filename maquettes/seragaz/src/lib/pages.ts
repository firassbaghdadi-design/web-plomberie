import { originalPages, reviewsPage } from "./content";
import { localPages, maintenance } from "./local";
import type { Page } from "./types";

/** Photo du héros de chaque page (clés de src/lib/commons.json ou images du site actuel). */
const photos: Record<string, string> = {
  "/presentation-seragaz-specialiste-chaudiere-gaz-a-paris-9-75009": "dunkerque",
  "/depannage-de-chaudiere-gaz-a-paris-9-75009": "atelier",
  "/remplacement-chaudiere-gaz-a-paris-9-75009": "accueil",
  "/desembouage-a-paris-9-75009": "toits-large",
  "/ramonage-a-paris-9-75009": "cheminees",
  "/deplacement-de-compteur": "gare-nord",
  "/contrat-entretien-chaudiere-gaz-paris": "toits",
  "/depannage-chaudiere-gaz-paris-10": "canal",
  "/depannage-chaudiere-gaz-paris-18": "montmartre",
  "/depannage-chaudiere-gaz-paris-17": "batignolles",
  "/entretien-chaudiere-gaz-paris-9": "dunkerque",
  "/entretien-chaudiere-gaz-paris-8": "saint-lazare",
  "/remplacement-chaudiere-gaz-paris-17": "batignolles",
  "/remplacement-chaudiere-gaz-paris-11": "cirque",
  "/chauffagiste-clichy": "clichy",
  "/chauffagiste-levallois-perret": "levallois",
  "/chauffagiste-vincennes": "vincennes",
};

export const allPages: Page[] = [...originalPages, reviewsPage, maintenance, ...localPages].map((p) => ({ ...p, photo: photos[p.path] ?? p.photo }));
export const pageByPath = (path: string) => allPages.find((p) => p.path === path)!;
