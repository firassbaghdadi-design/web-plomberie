import type { MetadataRoute } from "next";
import { allPages } from "@/lib/pages";
import { LAST_UPDATED, PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: [string, number][] = [["/", 1], ...allPages.map((p) => [p.path, 0.8] as [string, number]), [PATHS.contact, 0.7], [PATHS.legal, 0.2]];
  return paths.map(([path, priority]) => ({ url: `${SITE_URL}${path === "/" ? "/" : path}`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority }));
}
