import Link from "next/link";
import { PATHS, agencies, business, nav } from "@/lib/site";
import { LogoSP } from "./Photo";

export function Footer() {
  return (
    <footer className="pb-28 lg:pb-10" style={{ background: "var(--paper)" }}>
      <div className="frieze" aria-hidden="true" />
      <div className="container-x pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr]">
          <div>
            <LogoSP className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-7">{business.tagline}.</p>
          </div>
          {agencies.map((a) => (
            <address key={a.key} className="text-sm not-italic leading-7">
              <p className="caption">{a.role}</p>
              <p className="mt-2 text-lg text-ink">{a.short}</p>
              <p className="mt-2">
                {a.street}
                <br />
                {a.postalCode} {a.city}
              </p>
              <p className="mt-2">
                <a href={`tel:${a.phoneTel}`} className="whitespace-nowrap text-ink hover:text-brand">
                  {a.phoneDisplay}
                </a>
                <br />
                <a href={`mailto:${a.email}`} className="break-all hover:text-brand">
                  {a.email}
                </a>
              </p>
            </address>
          ))}
          <nav aria-label="Plan du site">
            <p className="caption">Le site</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li><Link href="/" className="hover:text-brand">Accueil</Link></li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand">{item.label}</Link>
                </li>
              ))}
              <li><Link href={PATHS.plumbing} className="hover:text-brand">Plombier Paris</Link></li>
              <li><Link href={PATHS.heating} className="hover:text-brand">Chauffagiste Paris</Link></li>
            </ul>
          </nav>
        </div>
        <span aria-hidden="true" className="wordmark mt-16 sm:mt-24">
          Somsou-Pons
        </span>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-soft">
          <span>
            {business.legalName} · SIREN {business.siren} · siège social {business.address.street}, {business.address.postalCode} {business.address.city}
          </span>
          <span className="caption !text-[0.66rem]">Depuis 1876</span>
        </div>
      </div>
    </footer>
  );
}
