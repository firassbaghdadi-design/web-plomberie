import { home, trades } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name}

> ${home.brief}

## Coordonnées
- ${business.address.street}, ${business.address.postalCode} Paris
- Téléphone : ${business.phoneDisplay}
- Horaires : ${business.hours}
- Zone : ${business.areaServed.join(", ")}
- Fondée en ${business.founded} (à confirmer)

## Métiers
${trades.map((t) => `- ${t.title} : ${t.text}`).join("\n")}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis gratuit](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
