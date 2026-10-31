import type { Metadata } from "next";
import { INDEXABLE, PATHS, SITE_URL, SHARE_URL, business } from "./site";
import type { Faq } from "./site";

type PageInput = { title: string; description: string; path: string };

export function pageMeta({ title, description, path }: PageInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", locale: "fr_FR", siteName: business.name, title, description, url, images: [{ url: `${SHARE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${business.name}, ${business.tagline}` }] },
    twitter: { card: "summary_large_image", title, description, images: [`${SHARE_URL}/opengraph-image`] },
  };
}

export const businessId = `${SITE_URL}/#business`;

export const businessNode = {
  "@type": ["LocalBusiness", "Plumber", "RoofingContractor"],
  "@id": businessId,
  name: business.name,
  alternateName: business.legalName,
  url: `${SITE_URL}/`,
  telephone: business.phoneTel,
  email: business.email,
  foundingDate: business.founded,
  employee: { "@type": "Person", name: business.manager, jobTitle: "Dirigeant" },
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 19 },
  hasMap: business.mapsUrl,
  address: { "@type": "PostalAddress", streetAddress: business.address.street, postalCode: business.address.postalCode, addressLocality: business.address.city, addressCountry: "FR" },
  areaServed: ["Paris 15e", "Paris 7e", "Paris 14e", "Paris 16e", "Issy-les-Moulineaux", "Vanves"].map((name) => ({ "@type": "City", name })),
  knowsAbout: ["Plomberie", "Sanitaire", "Robinetterie", "Tuyauterie", "Rénovation de salle de bains", "Couverture", "Chauffage", "Petite maçonnerie"],
  contactPoint: { "@type": "ContactPoint", telephone: business.phoneTel, contactType: "customer service", areaServed: "FR", availableLanguage: "French", url: `${SITE_URL}${PATHS.contact}` },
};

export const websiteNode = { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: business.name, inLanguage: "fr-FR", publisher: { "@id": businessId } };

export const breadcrumbNode = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_URL}${item.path === "/" ? "" : item.path}` })),
});

export const webPageNode = ({ title, description, path }: PageInput, type = "WebPage") => ({
  "@type": type,
  "@id": `${SITE_URL}${path === "/" ? "/" : path}#webpage`,
  url: `${SITE_URL}${path === "/" ? "/" : path}`,
  name: title,
  description,
  inLanguage: "fr-FR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": businessId },
  dateModified: "2026-10-27",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".reponse-bref", "h1"] },
});

export const faqNode = (faq: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
});

export const serviceNode = (name: string, path: string, description: string, area = "Paris") => ({
  "@type": "Service",
  name,
  description,
  url: `${SITE_URL}${path}`,
  provider: { "@id": businessId },
  areaServed: { "@type": "City", name: area },
});
