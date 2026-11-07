import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";

export function Footer() {
  const link = "transition hover:text-mustard-light";
  return (
    <footer className="grain-bg bg-olive-deep pb-24 text-[1.08rem] text-cream/75 md:pb-0">
      <div className="stripes-dark" aria-hidden="true" />
      <div className="wrap pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-mustard">Plus de 45 ans de métier · depuis {business.founded}</p>
            <p className="mt-6 max-w-sm">
              Plomberie, gaz et chauffage, par une équipe de dix à dix-neuf salariés installée rue d&apos;Alésia, dans le 14e arrondissement.
            </p>
            <a href={`tel:${business.phoneTel}`} className="num mt-8 block whitespace-nowrap font-serif text-[2.1rem] text-cream transition hover:text-mustard-light sm:text-[2.7rem]" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label text-cream/50">Métiers</p>
              <ul className="mt-5 space-y-2.5">
                {nav.map((n) => <li key={n.href}><Link href={n.href} className={link}>{n.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label text-cream/50">Près de chez vous</p>
              <ul className="mt-5 space-y-2.5">
                {localPages.map((p) => <li key={p.slug}><Link href={p.path} className={link}>{p.crumb}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label text-cream/50">EBL</p>
              <ul className="mt-5 space-y-2.5">
                <li><Link href={PATHS.contact} className={link}>Contact et devis</Link></li>
                <li><Link href={PATHS.sitemap} className={link}>Plan du site</Link></li>
                <li><Link href={PATHS.legal} className={link}>Mentions légales</Link></li>
              </ul>
              <address className="mt-8 not-italic">
                {business.address.street}<br />{business.address.postalCode} Paris
              </address>
            </div>
          </div>
        </div>
        <p aria-hidden="true" className="mt-20 flex select-none items-end justify-between gap-4 whitespace-nowrap font-serif leading-[0.8] text-cream">
          <span className="text-[clamp(5rem,24vw,22rem)] tracking-[0.04em]">EBL</span>
          <span className="pb-[0.6em] text-[clamp(1.6rem,6vw,5.5rem)] text-mustard">1978</span>
        </p>
        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 py-8 text-[0.98rem] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {business.legalName}. Tous droits réservés.</p>
          <p>De la cave aux toits, depuis {business.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
