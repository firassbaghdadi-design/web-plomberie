import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";

export function Footer() {
  const link = "transition hover:text-accent";
  return (
    <footer className="border-t border-line bg-mist pb-24 text-[0.95rem] md:pb-0">
      <div className="wrap pt-16 sm:pt-24" style={{ paddingRight: "var(--gutter)" }}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label">Plus de 45 ans de métier · depuis {business.founded}</p>
            <p className="mt-6 max-w-sm">
              Plomberie, gaz et chauffage, par une équipe de dix à dix-neuf salariés installée rue d&apos;Alésia, dans le 14e arrondissement.
            </p>
            <a href={`tel:${business.phoneTel}`} className="num mt-8 block whitespace-nowrap text-[2rem] font-extralight tracking-tight text-ink transition hover:text-accent sm:text-[2.5rem]" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="label">Métiers</p>
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
              <p className="label">EBL</p>
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
        <p aria-hidden="true" className="mt-20 select-none whitespace-nowrap text-center text-[clamp(5rem,26vw,24rem)] font-extralight leading-[0.8] tracking-[0.08em] text-ink/90">
          EBL
        </p>
        <div className="mt-10 flex flex-col gap-3 border-t border-line py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {business.legalName}. Tous droits réservés.</p>
          <p>De la cave aux toits, depuis {business.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
