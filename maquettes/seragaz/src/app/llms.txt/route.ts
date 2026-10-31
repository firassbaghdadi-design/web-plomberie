import { home } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { PATHS, SITE_URL, business, qualifications } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name} — ${business.longName}

> ${home.brief}

## Coordonnées
- ${business.address.street}, ${business.address.postalCode} Paris
- Téléphone : ${business.phoneDisplay} (${business.phoneHours.toLowerCase()})
- E-mail : ${business.email}
- ${business.hours}
- Zone : Paris et petite couronne, ${business.radius} (${business.areaList.join(", ")})

## Qualifications (selon l'entreprise)
${qualifications.map((q) => `- ${q.title} : ${q.text}`).join("\n")}

## Pages
${allPages.map((p) => `- [${p.h1}](${SITE_URL}${p.path})`).join("\n")}
- [Contact et devis gratuit](${SITE_URL}${PATHS.contact})
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
