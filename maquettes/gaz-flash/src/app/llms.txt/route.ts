import { PATHS, SITE_URL, business, priceGroups, ranges, services, shortAnswer, sweepPrice } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${SITE_URL}${path}`;
  const body = `# ${business.name}

> ${shortAnswer}

## Coordonnées
- Adresse : ${business.address.street}, ${business.address.postalCode} ${business.address.city}
- Téléphone : ${business.phoneDisplay}
- E-mail : ${business.email}
- Horaires : ${business.hoursLabel}
- Zones : Paris, Seine-Saint-Denis, Hauts-de-Seine, Val-de-Marne

## Services
${Object.values(services).map((s) => `- [${s.title}](${url(s.path)}) : ${s.short}`).join("\n")}
- [Nos tarifs](${url(PATHS.prices)}) : tarifs TTC d'entretien et de ramonage

## Tarifs d'entretien (TTC, Paris 18e / autres arrondissements et petite couronne)
${priceGroups.map((g) => `- ${g.title} : contrat annuel ${g.contract.paris18} / ${g.contract.other} ; forfait révision ${g.review.paris18} / ${g.review.other}`).join("\n")}
- Ramonage du conduit de fumée gaz (avec l'entretien) : ${sweepPrice}

## Gammes d'installation
${ranges.map((r) => `- [${r.title}](${url(r.path)})`).join("\n")}

## L'entreprise
- [L'entreprise](${url(PATHS.company)}) : valeurs, engagements, certifications (Professionnel du Gaz, Qualibat RGE)
- [Contact](${url(PATHS.contact)})
- [Mentions légales](${url(PATHS.legal)})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
