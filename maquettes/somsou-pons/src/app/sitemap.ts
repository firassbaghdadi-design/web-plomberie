import type { MetadataRoute } from "next";
import { localPages } from "@/lib/local";
import { LAST_UPDATED, PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    [PATHS.home, 1],
    [PATHS.presentation, 0.7],
    [PATHS.trades, 0.8],
    [PATHS.qualifications, 0.6],
    [PATHS.agencies, 0.8],
    [PATHS.plumbing, 0.9],
    [PATHS.heating, 0.9],
    [PATHS.emergency, 0.9],
    [PATHS.renovation, 0.9],
    ...localPages.map((p) => [`/${p.slug}`, 0.8] as [string, number]),
    [PATHS.contact, 0.7],
  ];
  return pages.map(([path, priority]) => ({ url: `${SITE_URL}${path === "/" ? "/" : path}`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority }));
}
