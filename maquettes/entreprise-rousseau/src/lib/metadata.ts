import type { Metadata } from "next";
import { INDEXABLE, SITE_URL, business, googleReviews } from "./site";

export const homeTitle = `Plombier chauffagiste Paris 14e | ${business.name}`;

export const homeDescription = `Plombier chauffagiste à Paris 14e depuis plus de 80 ans : dépannage, chaudières, salles de bains et douches. Noté ${googleReviews.rating.toString().replace(".", ",")}/5 sur Google. Appelez le ${business.phoneDisplay}.`;

export const robots: Metadata["robots"] = INDEXABLE
  ? { index: true, follow: true }
  : { index: false, follow: false };

export const canonicalFor = (path: string) => `${SITE_URL}${path}`;
