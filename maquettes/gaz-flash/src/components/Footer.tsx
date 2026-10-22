import Link from "next/link";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Photo";
import { PhoneIcon, PinIcon, ClockIcon, MailIcon } from "./Icons";

export function Footer() {
  const { legal, address } = business;
  return (
    <footer className="relative mt-24 bg-coal-2 pb-24 text-white/80 lg:pb-0">
      <div className="h-[6px] bg-gradient-to-r from-flame via-ember to-flame" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-block rounded-[3px] bg-white px-3 py-1.5" aria-label={`${business.name}, accueil`}>
            <Logo id="logo" alt={business.name} className="h-10 w-auto" width={126} height={40} />
          </Link>
          <p className="mt-6 max-w-sm text-[0.97rem] leading-relaxed">
            Chauffagiste à Paris 18e depuis 1965. Entretien, dépannage, installation et ramonage au gaz à Paris et en petite couronne.
          </p>
          <ul className="mt-6 space-y-3 text-[0.97rem]">
            <li className="flex gap-3">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-ember" />
              <span>
                {address.street}
                <br />
                {address.postalCode} {address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-ember" />
              <a href={`tel:${business.phoneTel}`} className="font-semibold text-white hover:text-ember">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-1 h-5 w-5 shrink-0 text-ember" />
              <a href={`mailto:${business.email}`} className="break-all hover:text-ember">
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-ember" />
              <span>{business.hoursLabel}</span>
            </li>
          </ul>
        </div>

        <nav aria-label="Pages du site">
          <p className="font-display text-2xl font-bold uppercase tracking-wider text-white">Le site</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className="font-display text-2xl font-bold uppercase tracking-wider text-white">Nos services</p>
          <ul className="mt-4 space-y-2">
            <li><Link href={PATHS.maintenance} className="hover:text-ember">Entretien de chaudière</Link></li>
            <li><Link href={PATHS.repair} className="hover:text-ember">Dépannage</Link></li>
            <li><Link href={PATHS.install} className="hover:text-ember">Installation</Link></li>
            <li><Link href={PATHS.sweep} className="hover:text-ember">Ramonage</Link></li>
            <li><Link href={PATHS.prices} className="hover:text-ember">Nos tarifs</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:justify-between">
          <p>
            {business.legalName} · {legal.form} au capital de {legal.capital} · {legal.rcs} · SIRET {legal.siret}
          </p>
          <p className="flex gap-5">
            <Link href={PATHS.legal} className="hover:text-white">Mentions légales</Link>
            <Link href={PATHS.privacy} className="hover:text-white">Données personnelles</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
