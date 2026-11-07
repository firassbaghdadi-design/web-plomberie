import { home } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.legalName} — ${business.tagline}

> ${home.brief}

## Coordonnées
- ${business.address.street}, ${business.address.postalCode} Paris
- Téléphone : ${business.phoneDisplay}
- Plomberie inscrite au registre depuis ${business.founded}, certifiée Professionnel du Gaz
- Métiers : ${business.trades.join(", ")}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
