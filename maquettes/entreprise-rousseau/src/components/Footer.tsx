import Link from "next/link";
import { business, copy, nav, sister } from "@/lib/site";
import { Logo } from "./Photo";
import { PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative bg-ink pb-28 pt-20 text-white/80 lg:pb-16">
      <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-xl bg-white px-3 py-2">
            <Logo id={business.logo} alt={business.name} className="h-11 w-auto" width={200} height={44} />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7">{business.tagline}. {copy.common.footerBlurb}</p>
        </div>
        <nav aria-label="Plan du site">
          <p className="font-display text-lg text-white">Le site</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="text-sm not-italic leading-7">
          <p className="font-display text-lg text-white">{business.name}</p>
          <p className="mt-4 flex gap-2">
            <PinIcon className="mt-1 h-4 w-4 shrink-0 text-brand-light" />
            <span>
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </span>
          </p>
          <p className="mt-2">
            <a href={`tel:${business.phoneTel}`} className="font-medium text-white hover:text-amber">
              {business.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${business.email}`} className="hover:text-amber">
              {business.email}
            </a>
          </p>
        </address>
        <address className="text-sm not-italic leading-7">
          <p className="font-display text-lg text-white">
            <a href={sister.url} className="hover:text-amber">
              {sister.name}
            </a>
          </p>
          <p className="mt-4 flex gap-2">
            <PinIcon className="mt-1 h-4 w-4 shrink-0 text-brand-light" />
            <span>
              {sister.street}
              <br />
              {sister.postalCode} {sister.city}
            </span>
          </p>
          <p className="mt-2">
            <a href={`tel:${sister.phoneTel}`} className="font-medium text-white hover:text-amber">
              {sister.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${sister.email}`} className="hover:text-amber">
              {sister.email}
            </a>
          </p>
        </address>
      </div>
      <div className="container-x mt-14 border-t border-white/10 pt-6 text-xs text-white/55">
        {business.legalName}, SAS · SIREN {business.siren}{business.name !== "Entreprise Rousseau" ? ` · enseigne ${business.name}` : ""} · {business.address.street}, {business.address.postalCode} {business.address.city}
      </div>
    </footer>
  );
}
