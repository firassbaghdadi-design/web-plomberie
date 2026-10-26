import Link from "next/link";
import { PATHS, business, pageInfo, google } from "@/lib/site";
import { Logo } from "./Photo";

const col = "mt-5 space-y-2.5 text-[0.92rem]";
const link = "text-ink-soft no-underline transition-colors hover:text-ink";

export function Footer() {
  const { legal, address } = business;
  return (
    <footer className="mt-32 border-t border-line bg-paper-2 pb-28 sm:mt-44 lg:pb-0">
      <div className="wrap pt-16 sm:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-12">
          <p className="font-display text-[clamp(3.4rem,11vw,9.5rem)] font-extralight leading-[0.9] tracking-[-0.05em] text-ink">Gaz Flash</p>
          <p className="label pb-3 text-ink-soft">Chauffagiste · Paris 18e · depuis 1965</p>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block" aria-label={`${business.name}, accueil`}>
              <Logo id="logo" alt={business.name} className="h-9 w-auto" width={114} height={36} />
            </Link>
            <address className="mt-6 not-italic leading-relaxed text-ink">
              {address.street}
              <br />
              {address.postalCode} {address.city}
            </address>
            <p className="mt-4">
              <a href={`tel:${business.phoneTel}`} className="whitespace-nowrap font-display text-[1.6rem] font-light tracking-[-0.02em] text-ink no-underline hover:text-red-dark">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 max-w-[34ch] text-[0.88rem] text-ink-soft">{business.hoursLabel}</p>
            <p className="mt-2 text-[0.88rem]">
              <a href={`mailto:${business.email}`} className={`${link} break-all`}>
                {business.email}
              </a>
            </p>
          </div>

          <nav aria-label="Services">
            <p className="label text-ink">Services</p>
            <ul className={col}>
              <li><Link className={link} href={PATHS.maintenance}>Entretien de chaudière</Link></li>
              <li><Link className={link} href={PATHS.repair}>Dépannage</Link></li>
              <li><Link className={link} href={PATHS.install}>Installation</Link></li>
              <li><Link className={link} href={PATHS.sweep}>Ramonage</Link></li>
              <li><Link className={link} href={PATHS.prices}>Nos tarifs</Link></li>
              <li><Link className={link} href={PATHS.installs}>Installations par gamme</Link></li>
            </ul>
          </nav>

          <nav aria-label="Guides et repères">
            <p className="label text-ink">Près de chez vous</p>
            <ul className={col}>
              <li><Link className={link} href={PATHS.paris18}>{pageInfo(PATHS.paris18).name}</Link></li>
              <li><Link className={link} href={PATHS.zones}>{pageInfo(PATHS.zones).name}</Link></li>
              <li><Link className={link} href={PATHS.repairGuide}>{pageInfo(PATHS.repairGuide).name}</Link></li>
              <li><Link className={link} href={PATHS.maintenanceGuide}>{pageInfo(PATHS.maintenanceGuide).name}</Link></li>
              <li><Link className={link} href={PATHS.brands}>Marques</Link></li>
              <li><Link className={link} href={PATHS.faq}>Questions fréquentes</Link></li>
            </ul>
          </nav>

          <nav aria-label="L'entreprise">
            <p className="label text-ink">La maison</p>
            <ul className={col}>
              <li><Link className={link} href={PATHS.company}>L'entreprise</Link></li>
              <li><Link className={link} href={PATHS.contact}>Contact</Link></li>
              <li>
                <a className={link} href={google.url} target="_blank" rel="noopener noreferrer">
                  Fiche Google ({google.ratingLabel}/5)
                </a>
              </li>
              <li><Link className={link} href={PATHS.legal}>Mentions légales</Link></li>
              <li><Link className={link} href={PATHS.privacy}>Données personnelles</Link></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-line py-8 text-[0.78rem] leading-relaxed text-ink-soft">
          <p>
            {business.legalName} · {legal.form} au capital de {legal.capital} · {legal.rcs} · SIRET {legal.siret} · TVA intracommunautaire {legal.vat}
          </p>
          <p className="mt-1">
            Photos : © Fotolia, © Gazflash. Cheminées à Montmartre : Dietmar Rabich, CC BY-SA 4.0 ; toits de Montmartre : FreCha, CC BY-SA 4.0 (Wikimedia Commons).
          </p>
        </div>
      </div>
    </footer>
  );
}
