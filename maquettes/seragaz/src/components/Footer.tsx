import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav, reviews } from "@/lib/site";
import { FlameMark, PhoneIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night pb-24 text-white/75 md:pb-0">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="wrap relative pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex rounded-2xl bg-white px-4 py-3"><Logo className="h-11" /></span>
            <p className="mt-6 max-w-sm">
              Société d'entretien et réparation d'appareils à gaz, à Paris 9e depuis 1985. Une histoire familiale commencée en 1903.
            </p>
            <a href={`tel:${business.phoneTel}`} className="mt-8 flex items-center gap-3 whitespace-nowrap font-display text-3xl text-white hover:text-flame sm:text-4xl">
              <PhoneIcon className="h-6 w-6 text-flame" /> {business.phoneDisplay}
            </a>
            <p className="mt-3 text-sm">{business.hours}<br />{business.phoneHours}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label text-flame">Prestations</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label text-flame">Près de chez vous</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                {localPages.map((p) => <li key={p.slug}><Link href={p.path} className="hover:text-white">{p.crumb}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label text-flame">SERAGAZ</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                <li><Link href={PATHS.presentation} className="hover:text-white">Qui sommes-nous ?</Link></li>
                <li><Link href={PATHS.reviews} className="hover:text-white">Avis clients</Link></li>
                <li><Link href={PATHS.contact} className="hover:text-white">Contact et devis gratuit</Link></li>
                <li><Link href={PATHS.sitemap} className="hover:text-white">Plan du site</Link></li>
                <li><Link href={PATHS.legal} className="hover:text-white">Mentions légales</Link></li>
              </ul>
              <address className="mt-8 not-italic text-[0.95rem]">
                {business.address.street}<br />{business.address.postalCode} Paris
              </address>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2"><FlameMark className="h-5 w-4" /> SERAGAZ · {business.legalForm}</p>
          <p>
            <a href={reviews.url} className="underline decoration-white/30 underline-offset-4 hover:text-white" rel="noopener" target="_blank">
              Note de {reviews.ratingText}/5 sur Google ({reviews.count} avis, relevé du {reviews.observed})
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
