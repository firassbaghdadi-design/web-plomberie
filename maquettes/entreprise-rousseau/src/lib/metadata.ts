import type { Metadata } from "next";
import { INDEXABLE, SITE_URL, business } from "./site";

export const homeTitle = `Plombier chauffagiste Paris 14e | ${business.name}`;

export const homeDescription = `Plombier chauffagiste à Paris 14e depuis ${business.foundingYear} : dépannage de fuites, chauffage, salles de bains. Entreprise familiale. Appelez le ${business.phoneDisplay} pour un devis.`;

export const robots: Metadata["robots"] = INDEXABLE
  ? { index: true, follow: true }
  : { index: false, follow: false };

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;
