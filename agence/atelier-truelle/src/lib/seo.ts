import type { Metadata } from "next";
import { INDEXABLE, LAST_UPDATED, SITE_URL, agency, type Faq } from "./site";

type PageInput = { title: string; description: string; path: string };

export function pageMeta({ title, description, path }: PageInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", locale: "fr_FR", siteName: agency.name, title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const orgId = `${SITE_URL}/#organisation`;

export const organisationNode = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": orgId,
  name: agency.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.svg`,
  description: "Agence web et de marketing digital spécialisée dans les entreprises du bâtiment : site web, référencement local, fiche Google et avis, publicité en ligne, suivi des demandes.",
  email: agency.email,
  ...(agency.phoneTel ? { telephone: agency.phoneTel } : {}),
  areaServed: { "@type": "AdministrativeArea", name: agency.area },
  knowsAbout: ["Création de site web", "Référencement local", "Fiche d'établissement Google", "Publicité en ligne", "Marketing digital", "Plomberie", "Chauffage", "Électricité", "Couverture"],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: agency.name,
  inLanguage: "fr-FR",
  publisher: { "@id": orgId },
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
    about: { "@id": orgId },
    dateModified: LAST_UPDATED,
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".reponse-bref", "h1"] },
  };
}

export function faqNode(items: readonly Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
}

export function serviceNode(name: string, path: string, description: string) {
  return { "@type": "Service", name, description, url: `${SITE_URL}${path}`, provider: { "@id": orgId }, areaServed: { "@type": "AdministrativeArea", name: agency.area } };
}
