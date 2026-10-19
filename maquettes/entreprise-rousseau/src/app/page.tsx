import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MockupBanner } from "@/components/MockupBanner";
import { Process } from "@/components/Process";
import { Reflexes } from "@/components/Reflexes";
import { Services } from "@/components/Services";
import { StickyCall } from "@/components/StickyCall";
import { TrustStrip } from "@/components/TrustStrip";
import { canonicalFor, homeDescription, homeTitle } from "@/lib/metadata";
import { INDEXABLE, LAST_UPDATED, SITE_URL, business, faq, services } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: canonicalFor("/") },
  openGraph: { url: canonicalFor("/"), title: homeTitle, description: homeDescription },
};

const businessId = `${SITE_URL}/#business`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Plumber", "HVACBusiness"],
      "@id": businessId,
      name: business.name,
      legalName: business.legalName,
      url: `${SITE_URL}/`,
      telephone: business.phoneTel,
      foundingDate: business.foundingYear,
      description: homeDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        postalCode: business.address.postalCode,
        addressLocality: business.address.city,
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Paris" },
        ...business.establishments.map((name) => ({ "@type": "City", name })),
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de plomberie et chauffage",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.schemaName, provider: { "@id": businessId } },
        })),
      },
      ...(business.reviews
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: business.reviews.rating,
              ratingCount: business.reviews.count,
              bestRating: 5,
              worstRating: 1,
            },
          }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: business.name,
      inLanguage: "fr-FR",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: homeTitle,
      description: homeDescription,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": businessId },
      dateModified: LAST_UPDATED,
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".reponse-bref", "h1"] },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-paper focus:px-4 focus:py-3 focus:font-semibold"
      >
        Aller au contenu
      </a>
      {INDEXABLE ? null : <MockupBanner />}
      <Header />
      <main id="contenu">
        <Hero />
        <TrustStrip />
        <Services />
        <Reflexes />
        <Process />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <StickyCall />
      <JsonLd data={graph} />
    </>
  );
}
