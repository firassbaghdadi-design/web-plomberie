import type { Metadata } from "next";
import { FOUNDED, INDEXABLE, LAST_UPDATED, PATHS, SITE_URL, business, faqs, services, type FaqKey } from "./site";

type PageInput = { title: string; description: string; path: string };

const absolute = (path: string) => `${SITE_URL}${path}`;

export function pageMeta({ title, description, path }: PageInput): Metadata {
  const url = absolute(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", locale: "fr_FR", siteName: business.name, title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const businessId = `${SITE_URL}/#business`;

export const businessNode = {
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": businessId,
  name: business.name,
  legalName: business.legalName,
  url: absolute("/"),
  telephone: business.phoneTel,
  email: business.email,
  foundingDate: String(FOUNDED),
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
  areaServed: business.areaServed.map((a) => ({ "@type": a.type, name: a.name })),
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

export function breadcrumbNode(items: { name: string; path: string }[]) {
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

export function webPageNode({ title, description, path }: PageInput) {
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

export function serviceNode(name: string, path: string, description: string) {
  return {
    "@type": "Service",
    name,
    description,
    url: absolute(path),
    provider: { "@id": businessId },
    areaServed: business.areaServed.map((a) => ({ "@type": a.type, name: a.name })),
  };
}

export const rootCrumb = { name: "Accueil", path: PATHS.home };
