import { PATHS, SITE_URL, business, google, pageInfo, priceGroups, ranges, services, sweepPrice, type PagePath } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const link = (path: PagePath, text?: string) => `[${text ?? pageInfo(path).name}](${SITE_URL}${path})`;
  const body = `# ${business.name}

> ${pageInfo(PATHS.home).brief}

## Coordonnées
- Entreprise : ${business.legalName} (${business.name}), ${business.legal.form.toLowerCase()}, ${business.legal.rcs}, SIRET ${business.legal.siret}
- Adresse : ${business.address.street}, ${business.address.postalCode} ${business.address.city}
- Téléphone : ${business.phoneDisplay}
- E-mail : ${business.email}
- Horaires : ${business.hoursLabel}
- Zones : Paris, Seine-Saint-Denis (93), Hauts-de-Seine (92), Val-de-Marne (94)
- Ancienneté : en activité depuis 1965

## Services
${Object.values(services).map((s) => `- ${link(s.path, s.title)} : ${s.short}`).join("\n")}
- ${link(PATHS.prices)} : tarifs TTC d'entretien et de ramonage

## Tarifs d'entretien (TTC ; Paris 18e / autres arrondissements et petite couronne)
${priceGroups.map((g) => `- ${g.title} : contrat annuel ${g.contract.paris18} / ${g.contract.other} ; forfait révision ${g.review.paris18} / ${g.review.other}`).join("\n")}
- Ramonage du conduit de fumée gaz (avec l'entretien) : ${sweepPrice}

## Gammes d'installation
${ranges.map((r) => `- ${link(r.path, r.title)}`).join("\n")}

## Guides et repères locaux
- ${link(PATHS.paris18)} : chauffagiste dans le 18e arrondissement
- ${link(PATHS.repairGuide)} : que faire en cas de panne de chaudière gaz
- ${link(PATHS.maintenanceGuide)} : obligation d'entretien annuel, attestation
- ${link(PATHS.zones)} : zone d'intervention et tarifs par zone
- ${link(PATHS.brands)} : marques et modèles cités (Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc, De Dietrich, Styx)
- ${link(PATHS.faq)} : questions fréquentes

## L'entreprise
- ${link(PATHS.company)} : engagements, certifications annoncées (Professionnel du Gaz, Qualibat RGE), informations légales
- ${link(PATHS.contact)}
- ${link(PATHS.legal)}
- ${link(PATHS.privacy)}

## Avis
- Fiche Google Maps de Gaz Flash : note ${google.ratingLabel} sur 5 d'après ${google.count} avis (relevé du ${google.observed}). Source : ${google.url}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
