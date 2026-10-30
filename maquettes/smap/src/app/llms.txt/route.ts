import { home } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name} — ${business.tagline}

> ${home.brief}

## Coordonnées
- Paris 12e (75012)
- Téléphone : ${business.phoneDisplay}
- E-mail : ${business.email}
- Créée en ${business.founded}, installée à Paris 12e
- Métiers : ${business.trades.join(", ")}
- Clientèle : ${business.clients}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
