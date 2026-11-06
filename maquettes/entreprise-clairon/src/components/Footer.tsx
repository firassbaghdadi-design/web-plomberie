import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";

export function Footer() {
  const link = "transition hover:text-accent";
  return (
    <footer className="border-t border-line bg-mist pb-24 text-[0.95rem] md:pb-0">
      <div className="wrap pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Entreprise familiale depuis {business.founded}</p>
            <p className="mt-6 max-w-sm">
              Plomberie, couverture, chauffage et petite maçonnerie, par une équipe de compagnons qualifiés installée rue d&apos;Ouessant, dans le 15e arrondissement.
            </p>
            <a href={`tel:${business.phoneTel}`} className="num mt-8 block whitespace-nowrap text-[2rem] font-extralight tracking-tight text-ink transition hover:text-accent sm:text-[2.5rem]" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="mt-1 inline-block text-ink-soft transition hover:text-accent">{business.email}</a>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label">Métiers</p>
              <ul className="mt-5 space-y-2.5">
                {nav.map((n) => <li key={n.href}><Link href={n.href} className={link}>{n.label}</Link></li>)}
                <li><Link href="/renovation-salle-de-bains-paris-15" className={link}>Salle de bains</Link></li>
                <li><Link href="/plombier-syndic-copropriete-paris-15" className={link}>Syndics</Link></li>
              </ul>
            </div>
            <div>
              <p className="label">Près de chez vous</p>
              <ul className="mt-5 space-y-2.5">
                {localPages.filter((p) => !/salle-de-bains|syndic/.test(p.slug)).map((p) => <li key={p.slug}><Link href={p.path} className={link}>{p.crumb}</Link></li>)}
              </ul>
            </div>
            <div>
              <p className="label">Clairon</p>
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
        <p aria-hidden="true" className="mt-20 select-none whitespace-nowrap text-center text-[clamp(3.3rem,16.5vw,15.5rem)] font-extralight leading-[0.8] tracking-[0.12em] text-ink/90">
          CLAIRON
        </p>
        <div className="mt-10 flex flex-col gap-3 border-t border-line py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {business.legalName}. Tous droits réservés.</p>
          <p>D&apos;aplomb depuis {business.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
