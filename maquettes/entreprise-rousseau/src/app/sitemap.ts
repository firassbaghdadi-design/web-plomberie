import type { MetadataRoute } from "next";
import { LAST_UPDATED, PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number, "monthly" | "yearly"][] = [
    [PATHS.home, 1, "monthly"],
    [PATHS.plumbing, 0.9, "monthly"],
    [PATHS.heating, 0.9, "monthly"],
    [PATHS.bathrooms, 0.9, "monthly"],
    [PATHS.contact, 0.7, "yearly"],
  ];
  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  }));
}
