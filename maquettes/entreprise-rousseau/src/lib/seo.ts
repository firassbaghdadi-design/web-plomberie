import type { Metadata } from "next";
import { INDEXABLE, LAST_UPDATED, SITE_URL, business, faqs, reviews, services } from "./site";

type PageInput = { title: string; description: string; path: string };

export function pageMeta({ title, description, path }: PageInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", locale: "fr_FR", siteName: business.name, title, description, url, images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${business.name}, ${business.tagline}` }] },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}

export const businessId = `${SITE_URL}/#business`;

export const businessNode = {
  "@type": ["LocalBusiness", "Plumber", "HVACBusiness"],
  "@id": businessId,
  name: business.name,
  legalName: business.legalName,
  url: `${SITE_URL}/`,
  telephone: business.phoneTel,
  email: business.email,
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de plomberie, chauffage et salles de bains",
    itemListElement: Object.values(services).map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, url: `${SITE_URL}${service.path}`, provider: { "@id": businessId } },
    })),
  },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
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
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageNode({ title, description, path }: PageInput) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
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

export function faqNode(key: keyof typeof faqs) {
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
    url: `${SITE_URL}${path}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "AdministrativeArea", name: business.area },
  };
}

export const googleRatingText = `${reviews.ratingText}/5 sur Google (${reviews.count} avis)`;
