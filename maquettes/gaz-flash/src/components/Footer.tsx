import Link from "next/link";
import { PATHS, business, pageInfo, google } from "@/lib/site";
import { Logo } from "./Photo";

const col = "mt-3 space-y-1.5 text-[0.96rem]";
const link = "text-paper-sheet/85 no-underline hover:text-white hover:underline";

export function Footer() {
  const { legal, address } = business;
  return (
    <footer className="mt-24 bg-ink-2 pb-24 text-paper-sheet/85 lg:pb-0">
      <div className="h-2 bg-red" />
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-block bg-paper-sheet px-3 py-2" aria-label={`${business.name}, accueil`}>
            <Logo id="logo" alt={business.name} className="h-10 w-auto" width={126} height={40} />
          </Link>
          <p className="hand mt-4 text-[1.5rem] text-white">Une maison du quartier, depuis 1965.</p>
          <address className="mt-3 not-italic leading-relaxed">
            {address.street}
            <br />
            {address.postalCode} {address.city}
          </address>
          <p className="mt-2">
            <a href={`tel:${business.phoneTel}`} className="font-display text-2xl font-semibold text-white no-underline">
              {business.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-[0.93rem]">{business.hoursLabel}</p>
          <p className="mt-2 text-[0.93rem]">
            <a href={`mailto:${business.email}`} className={`${link} break-all`}>
              {business.email}
            </a>
          </p>
        </div>

        <nav aria-label="Services">
          <p className="label text-white">Services</p>
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
          <p className="label text-white">Près de chez vous</p>
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
          <p className="label text-white">La maison</p>
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
      <div className="border-t border-white/15">
        <div className="wrap py-5 text-[0.85rem] text-white/65">
          <p>
            {business.legalName} · {legal.form} au capital de {legal.capital} · {legal.rcs} · SIRET {legal.siret} · TVA intracommunautaire {legal.vat}
          </p>
          <p className="mt-1">Photos : © Fotolia, © Gazflash.</p>
        </div>
      </div>
    </footer>
  );
}
