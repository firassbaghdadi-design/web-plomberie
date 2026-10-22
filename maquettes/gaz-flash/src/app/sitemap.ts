import type { MetadataRoute } from "next";
import { LAST_UPDATED, PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const priority: Record<string, number> = { [PATHS.home]: 1, [PATHS.maintenance]: 0.9, [PATHS.repair]: 0.9, [PATHS.install]: 0.9, [PATHS.prices]: 0.9, [PATHS.contact]: 0.8 };
  return Object.values(PATHS).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_UPDATED,
    priority: priority[path] ?? 0.6,
  }));
}
