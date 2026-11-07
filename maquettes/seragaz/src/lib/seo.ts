import type { Metadata } from "next";
import { INDEXABLE, PATHS, SITE_URL, business } from "./site";
import type { Faq } from "./site";

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
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": businessId,
  name: business.name,
  alternateName: business.longName,
  url: `${SITE_URL}/`,
  telephone: business.phoneTel,
  email: business.email,
  foundingDate: business.founded,
  founder: { "@type": "Person", name: "Jean-Marie Franche" },
  employee: { "@type": "Person", name: business.manager, jobTitle: "Dirigeant" },
  hasMap: business.mapsUrl,
  address: { "@type": "PostalAddress", streetAddress: business.address.street, postalCode: business.address.postalCode, addressLocality: business.address.city, addressCountry: "FR" },
  openingHoursSpecification: business.openingSpec.map((o) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: o.days, opens: o.opens, closes: o.closes })),
  areaServed: [{ "@type": "City", name: "Paris" }, ...business.areaList.slice(1).map((name) => ({ "@type": "City", name }))],
  knowsAbout: ["Chaudière gaz", "Chauffe-eau gaz", "Entretien de chaudière", "Ramonage", "Désembouage", "Compteur gaz"],
  hasCredential: ["Partenaire GRDF", "RGE Qualibat", "PG PMG Professionnel Gaz"].map((name) => ({ "@type": "EducationalOccupationalCredential", name })),
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
  dateModified: "2026-10-25",
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
