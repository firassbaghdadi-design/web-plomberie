import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "@/lib/site";

const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
const SCRAPERS = ["AhrefsBot", "SemrushBot", "MJ12bot", "Bytespider"];

export default function robots(): MetadataRoute.Robots {
  // Maquette privée : rien n'est exploré tant que NEXT_PUBLIC_INDEXABLE n'est pas à « true ».
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
      { userAgent: SCRAPERS, disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
