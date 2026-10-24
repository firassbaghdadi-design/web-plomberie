import type { MetadataRoute } from "next";
import { LAST_UPDATED, PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const priority: Record<string, number> = {
    [PATHS.home]: 1,
    [PATHS.maintenance]: 0.9,
    [PATHS.repair]: 0.9,
    [PATHS.install]: 0.9,
    [PATHS.prices]: 0.9,
    [PATHS.paris18]: 0.9,
    [PATHS.repairGuide]: 0.8,
    [PATHS.maintenanceGuide]: 0.8,
    [PATHS.contact]: 0.8,
    [PATHS.legal]: 0.3,
    [PATHS.privacy]: 0.3,
  };
  // Les pages ont été revues le jour de la refonte : une date de révision unique, mise à jour à chaque modification réelle.
  return Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority: priority[path] ?? 0.6,
  }));
}
