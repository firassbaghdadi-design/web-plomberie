import { PATHS, SITE_URL, brand, business, reviews, services, sister } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const a = business.address;
  const body = `# ${business.name}

> ${brand.shortAnswer}

## À propos
${business.name} (SIREN ${business.siren}) est notée ${reviews.ratingText}/5 sur Google (${reviews.count} avis, relevé du ${reviews.observed}). Autre établissement de la même entreprise : ${sister.name}, ${sister.street}, ${sister.postalCode} ${sister.city} (${sister.url}).

## Services
- [Plomberie](${SITE_URL}${PATHS.plumbing}) : ${services.plumbing.items.map((i) => i.name.toLowerCase()).join(", ")}
- [Chauffage](${SITE_URL}${PATHS.heating}) : ${services.heating.items.map((i) => i.name.toLowerCase()).join(", ")}
- [Salles de bains et douches](${SITE_URL}${PATHS.bathrooms}) : ${services.bathrooms.items.map((i) => i.name.toLowerCase()).join(", ")}

## Contact
- Téléphone : ${business.phoneDisplay}
- E-mail : ${business.email}
- Adresse : ${a.street}, ${a.postalCode} ${a.city}
- Bureau ouvert au public : ${business.hoursText.toLowerCase()}
- [Formulaire de contact](${SITE_URL}${PATHS.contact})

## Pages importantes
- [Accueil](${SITE_URL}/)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
