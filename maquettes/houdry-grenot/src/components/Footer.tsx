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
            <p className="label">Plomberie à Paris 17e · depuis {business.founded}</p>
            <p className="mt-6 max-w-sm">
              Une entreprise de plomberie installée dans le 17e arrondissement de Paris : dépannage, sanitaire, tuyauterie et salles de bains, pour les particuliers et les copropriétés.
            </p>
            <a href={`tel:${business.phoneTel}`} className="num mt-8 block whitespace-nowrap text-[2rem] font-extralight tracking-tight text-ink transition hover:text-accent sm:text-[2.5rem]" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="mt-1 inline-block break-all text-ink-soft transition hover:text-accent">{business.email}</a>
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
              <p className="label">Houdry-Grenot</p>
              <ul className="mt-5 space-y-2.5">
                <li><Link href={PATHS.contact} className={link}>Contact et devis</Link></li>
                <li><Link href={PATHS.sitemap} className={link}>Plan du site</Link></li>
                <li><Link href={PATHS.legal} className={link}>Mentions légales</Link></li>
              </ul>
              <address className="mt-8 not-italic">
                {business.address.postalCode} {business.address.city}
              </address>
            </div>
          </div>
        </div>
        <p aria-hidden="true" className="mt-20 select-none whitespace-nowrap text-center text-[clamp(2.2rem,10.2vw,10rem)] font-extralight leading-[0.9] tracking-[0.06em] text-ink/90">
          HOUDRY-GRENOT
        </p>
        <div className="mt-10 flex flex-col gap-3 border-t border-line py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {business.legalName}. Tous droits réservés.</p>
          <p>Au service du 17e depuis {business.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
