import { home, trades } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name}

> ${home.brief}

## Coordonnées
- ${business.address.street}, ${business.address.postalCode} Paris
- Téléphone d'urgence 24h/24 : ${business.phoneDisplay}
- Bureau : ${business.phoneOfficeDisplay}
- E-mail : ${business.email}
- Zone : ${business.areaServed.join(", ")}
- ${business.legalName}, ${business.rcs}, fondée en ${business.founded}

## Métiers
${trades.map((t) => `- ${t.title} : ${t.text}`).join("\n")}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis gratuit](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
