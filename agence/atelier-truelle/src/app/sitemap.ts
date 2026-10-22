import type { MetadataRoute } from "next";
import { LAST_UPDATED, PATHS, SITE_URL, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number, "monthly" | "yearly"][] = [
    [PATHS.home, 1, "monthly"],
    [PATHS.method, 0.8, "monthly"],
    [PATHS.services, 0.9, "monthly"],
    ...services.map((s): [string, number, "monthly" | "yearly"] => [`${PATHS.services}/${s.slug}`, 0.8, "monthly"]),
    [PATHS.trades, 0.7, "monthly"],
    [PATHS.contact, 0.7, "yearly"],
    [PATHS.legal, 0.2, "yearly"],
    [PATHS.privacy, 0.2, "yearly"],
  ];
  return pages.map(([path, priority, changeFrequency]) => ({ url: `${SITE_URL}${path === "/" ? "/" : path}`, lastModified: LAST_UPDATED, changeFrequency, priority }));
}
