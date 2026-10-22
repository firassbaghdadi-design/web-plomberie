import { PATHS, SITE_URL, agency, offers, shortAnswer } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${agency.name}

> ${shortAnswer}

## Offres
${offers.map((o) => `- ${o.name} : ${o.price}. ${o.lead}`).join("\n")}

## Pages
- [Méthode](${SITE_URL}${PATHS.method})
- [Offres et tarifs](${SITE_URL}${PATHS.offers})
- [Contact et maquette gratuite](${SITE_URL}${PATHS.contact})

## Contact
- E-mail : ${agency.email}${agency.phoneTel ? `\n- Téléphone : ${agency.phoneDisplay}` : ""}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
