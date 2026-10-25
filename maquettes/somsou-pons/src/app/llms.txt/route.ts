import { localPages } from "@/lib/local";
import { home } from "@/lib/content";
import { PATHS, SITE_URL, agencies, business, qualifications } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${business.name}

> ${home.brief}

## Agences
${agencies.map((a) => `- ${a.name} : ${a.street}, ${a.postalCode} ${a.city} · ${a.phoneDisplay} · ${a.email}`).join("\n")}

## Qualifications (selon l'entreprise)
${qualifications.map((q) => `- Qualibat ${q.code} : ${q.label} (${q.level}${q.gas ? ", mention gaz domestique" : ""})`).join("\n")}
- Professionnel du Gaz, mention RGE

## Pages
- [Présentation](${SITE_URL}${PATHS.presentation})
- [Nos métiers](${SITE_URL}${PATHS.trades})
- [Plombier à Paris](${SITE_URL}${PATHS.plumbing})
- [Chauffagiste à Paris](${SITE_URL}${PATHS.heating})
- [Dépannage plomberie à Paris](${SITE_URL}${PATHS.emergency})
- [Rénovation d'appartement à Paris](${SITE_URL}${PATHS.renovation})
${localPages.map((p) => `- [${p.h1}](${SITE_URL}/${p.slug})`).join("\n")}
- [Nos agences](${SITE_URL}${PATHS.agencies})
- [Contact](${SITE_URL}${PATHS.contact})

SIREN ${business.siren}.
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
