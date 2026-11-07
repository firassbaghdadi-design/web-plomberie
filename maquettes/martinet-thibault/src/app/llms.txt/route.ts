import { home } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business, contacts, generations } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name}

> ${home.brief}

## Coordonnées
- ${business.address.street}, ${business.address.postalCode} Paris
${contacts.map((c) => `- ${c.service}${c.name ? ` (${c.name})` : ""} : ${c.phoneDisplay}`).join("\n")}
- ${business.hours}
- Zone : ${business.areaServed.join(", ")}

## Histoire
${generations.map((g) => `- ${g.year} : ${g.who}. ${g.text}`).join("\n")}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis gratuit](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
