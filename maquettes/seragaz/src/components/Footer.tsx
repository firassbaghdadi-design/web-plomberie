import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav, reviews } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const link = "transition hover:text-blue";
  return (
    <footer className="border-t border-line bg-mist pb-24 text-[0.95rem] md:pb-0">
      <div className="wrap pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-10" />
            <p className="mt-6 max-w-sm">
              Société d'entretien et réparation d'appareils à gaz, à Paris 9e depuis 1985. Une histoire familiale commencée en 1903.
            </p>
            <a href={`tel:${business.phoneTel}`} className="num mt-8 block whitespace-nowrap text-[2rem] font-extralight tracking-tight text-navy transition hover:text-blue sm:text-[2.4rem]" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-ink-faint">{business.hours}<br />{business.phoneHours}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label">Prestations</p>
              <ul className="mt-5 space-y-2.5">
                {nav.map((n) => <li key={n.href}><Link href={n.href} className={link}>{n.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label">Près de chez vous</p>
              <ul className="mt-5 space-y-2.5">
                {localPages.map((p) => <li key={p.slug}><Link href={p.path} className={link}>{p.crumb}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label">SERAGAZ</p>
              <ul className="mt-5 space-y-2.5">
                <li><Link href={PATHS.presentation} className={link}>Qui sommes-nous ?</Link></li>
                <li><Link href={PATHS.reviews} className={link}>Avis clients</Link></li>
                <li><Link href={PATHS.contact} className={link}>Contact et devis gratuit</Link></li>
                <li><Link href={PATHS.sitemap} className={link}>Plan du site</Link></li>
                <li><Link href={PATHS.legal} className={link}>Mentions légales</Link></li>
              </ul>
              <address className="mt-8 not-italic">
                {business.address.street}<br />{business.address.postalCode} Paris
              </address>
            </div>
          </div>
        </div>
        <p aria-hidden="true" className="mt-20 select-none whitespace-nowrap text-center text-[clamp(3.4rem,17.5vw,16.5rem)] font-extralight leading-[0.8] tracking-[0.04em] text-navy/90">
          SERAGAZ
        </p>
        <div className="mt-10 flex flex-col gap-3 border-t border-line py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>SERAGAZ · {business.legalForm}</p>
          <p>
            <a href={reviews.url} className="underline decoration-line underline-offset-4 transition hover:text-blue" rel="noopener" target="_blank">
              Note de {reviews.ratingText}/5 sur Google ({reviews.count} avis, relevé du {reviews.observed})
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
