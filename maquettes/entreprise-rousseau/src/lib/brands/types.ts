import type { PhotoId } from "../photos";

export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
export type Item = { name: string; photo: PhotoId; text: string };
export type Service = { title: string; short: string; photo: PhotoId; items: Item[] };
export type Faq = { q: string; a: string };
export type Quote = { author: string; date: string; text: string };

export type PageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  lead: string;
  heroPhoto: PhotoId;
  heroAlt: string;
  introTitle: string;
  intro: string;
  accent: string;
  faqTitle: string;
  ctaTitle: string;
  ctaText: string;
};

export type Brand = {
  id: "rousseau" | "sandrin";
  siteUrl: string;
  theme: { themeColor: string; ogFrom: string; ogTo: string; ogAccent: string };
  business: {
    name: string;
    legalName: string;
    tagline: string;
    siren: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    address: { street: string; postalCode: string; city: string };
    geo: { lat: number; lng: number };
    hours: { days: Day[]; opens: string; closes: string }[];
    hoursText: string;
    mapsUrl: string;
    reviewUrl: string;
    logo: PhotoId;
    storefront: PhotoId;
    area: string;
    areaServed: { type: "City" | "AdministrativeArea"; name: string }[];
  };
  sister: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
    phoneDisplay: string;
    phoneTel: string;
    email: string;
    hoursText: string;
    url: string;
  };
  reviews: { rating: number; ratingText: string; count: number; observed: string; quotes: Quote[] };
  services: { plumbing: Service; heating: Service; bathrooms: Service };
  steps: { title: string; text: string }[];
  reflexes: string[];
  emergency: { title: string; lead: string };
  faqs: { home: Faq[]; plumbing: Faq[]; heating: Faq[]; bathrooms: Faq[] };
  shortAnswer: string;
  copy: {
    home: {
      title: string;
      description: string;
      eyebrow: string;
      h1a: string;
      h1b: string;
      badgeTop: string;
      badgeBottom: string;
      heroPhoto: PhotoId;
      heroPhotoAlt: string;
      secondPhoto: PhotoId;
      secondPhotoAlt: string;
      welcomeEyebrow: string;
      welcomeTitle: string;
      welcome: string[];
      ticker: string[];
      galleryTitle: string;
      gallery: { id: PhotoId; alt: string; cls: string }[];
      agencyEyebrow: string;
      agencyTitle: string;
      faqTitle: string;
      ctaTitle: string;
      ctaText: string;
    };
    plumbing: PageCopy;
    heating: PageCopy & { noteTitle: string; notePoints: string[] };
    bathrooms: PageCopy & { gallery: PhotoId[] };
    contact: { title: string; description: string; h1: string; lead: string; routeLabel: string };
    stats: { years: string; yearsNumber: number; trades: string };
    common: { reviewsTitle: string; processTitle: string; processLead: string; footerBlurb: string; notFoundTitle: string };
  };
};
