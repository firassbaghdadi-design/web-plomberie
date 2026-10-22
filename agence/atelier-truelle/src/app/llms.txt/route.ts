import { PATHS, SITE_URL, agency, services, shortAnswer } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${agency.name}

> ${shortAnswer}

## Services
${services.map((s) => `- [${s.name}](${SITE_URL}${PATHS.services}/${s.slug}) : ${s.short}`).join("\n")}

## Pages
- [Méthode](${SITE_URL}${PATHS.method})
- [Services](${SITE_URL}${PATHS.services})
- [Métiers](${SITE_URL}${PATHS.trades})
- [Contact et maquette gratuite](${SITE_URL}${PATHS.contact})

## Contact
- E-mail : ${agency.email}${agency.phoneTel ? `\n- Téléphone : ${agency.phoneDisplay}` : ""}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
