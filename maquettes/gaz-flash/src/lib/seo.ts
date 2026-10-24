import type { Metadata } from "next";
import { FOUNDED, INDEXABLE, LAST_UPDATED, PATHS, SITE_URL, business, faqs, pageInfo, priceGroups, services, sweepPrice, type FaqKey, type PagePath } from "./site";

export const absolute = (path: string) => `${SITE_URL}${path}`;

export function pageMeta(path: PagePath): Metadata {
  const { title, description } = pageInfo(path);
  const url = absolute(path);
  const image = { url: absolute("/opengraph-image/"), width: 1200, height: 630, alt: `${business.name} : chauffagiste à Paris 18e depuis 1965` };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", locale: "fr_FR", siteName: business.name, title, description, url, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export const businessId = `${SITE_URL}/#business`;

const areaServed = business.areaServed.map((a) => ({ "@type": a.type, name: a.name }));

/** Une seule entité LocalBusiness pour tout le site : les pages la référencent par son @id. */
export const businessNode = {
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": businessId,
  name: business.name,
  legalName: business.legalName,
  description:
    "Chauffagiste installé rue Sainte-Isaure, à Paris 18e, depuis 1965 : entretien, dépannage, installation et ramonage au gaz à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne.",
  url: absolute("/"),
  telephone: business.phoneTel,
  email: business.email,
  foundingDate: String(FOUNDED),
  vatID: business.legal.vat.replace(/\s/g, ""),
  taxID: business.legal.siren.replace(/\s/g, ""),
  identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: business.legal.siret.replace(/\s/g, "") },
  logo: { "@type": "ImageObject", url: business.logoUrl },
  image: business.logoUrl,
  hasMap: business.mapsUrl,
  geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.postalCode,
    addressLocality: business.address.city,
    addressCountry: "FR",
  },
  openingHoursSpecification: business.hours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  })),
  areaServed,
  knowsAbout: ["Entretien de chaudière gaz", "Dépannage chauffage gaz", "Installation de chaudière à condensation", "Ramonage de conduit de fumée", "Chauffe-eau gaz", "Régulation de chauffage"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de chauffage au gaz",
    itemListElement: Object.values(services).map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, url: absolute(service.path), provider: { "@id": businessId } },
    })),
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: absolute("/"),
  name: business.name,
  inLanguage: "fr-FR",
  publisher: { "@id": businessId },
};

type Crumb = { name: string; path: string };

export function breadcrumbNode(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function webPageNode(path: PagePath) {
  const { title, description } = pageInfo(path);
  const url = absolute(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": businessId },
    dateModified: LAST_UPDATED,
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".reponse-bref", "h1"] },
  };
}

export function faqNode(key: FaqKey) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs[key].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceNode(path: PagePath, serviceType: string, offers?: object[]) {
  const { h1, description } = pageInfo(path);
  return {
    "@type": "Service",
    name: h1,
    serviceType,
    description,
    url: absolute(path),
    provider: { "@id": businessId },
    areaServed,
    ...(offers ? { offers } : {}),
  };
}

/** Offres issues de la page « Nos tarifs » : mêmes montants que le tableau affiché. */
export function priceOffers() {
  const toNumber = (value: string) => value.replace(/[^\d]/g, "");
  const offers: object[] = [];
  for (const group of priceGroups) {
    for (const [label, key] of [["Contrat d'entretien annuel", "contract"], ["Forfait révision sans engagement", "review"]] as const) {
      for (const [zone, zoneKey] of [["Paris 18e", "paris18"], ["Paris (autres arrondissements) et petite couronne", "other"]] as const) {
        offers.push({
          "@type": "Offer",
          name: `${label} : ${group.title} (${zone})`,
          price: toNumber(group[key][zoneKey]),
          priceCurrency: "EUR",
          eligibleRegion: zone,
        });
      }
    }
  }
  offers.push({ "@type": "Offer", name: "Ramonage du conduit de fumée gaz, avec l'entretien de la chaudière", price: toNumber(sweepPrice), priceCurrency: "EUR" });
  return offers;
}

export type PageNodeOptions = {
  /** Pages intermédiaires du fil d'Ariane, entre l'accueil et la page. */
  trail?: PagePath[];
  faq?: FaqKey;
  service?: { serviceType: string; offers?: object[] };
  extra?: object[];
};

export function pageCrumbs(path: PagePath, trail: PagePath[] = []): Crumb[] {
  return [{ name: "Accueil", path: PATHS.home }, ...[...trail, path].map((p) => ({ name: pageInfo(p).name, path: p as string }))];
}

export function pageNodes(path: PagePath, options: PageNodeOptions = {}) {
  const nodes: object[] = [webPageNode(path), breadcrumbNode(pageCrumbs(path, options.trail))];
  if (options.service) nodes.push(serviceNode(path, options.service.serviceType, options.service.offers));
  if (options.faq) nodes.push(faqNode(options.faq));
  if (options.extra) nodes.push(...options.extra);
  return nodes;
}
