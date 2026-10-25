import Link from "next/link";
import { PATHS, agencies, business, nav } from "@/lib/site";
import { LogoSP } from "./Photo";
import { PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pb-28 pt-20 text-white/80 lg:pb-12" style={{ background: "var(--green-d)" }}>
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr_1fr_0.8fr]">
        <div>
          <div className="inline-block rounded-2xl bg-paper px-4 py-3">
            <LogoSP className="h-14 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7">{business.tagline}.</p>
        </div>
        {agencies.map((a) => (
          <address key={a.key} className="text-sm not-italic leading-7">
            <p className="font-display text-lg font-semibold text-white">{a.name}</p>
            <p className="mt-3 flex gap-2">
              <PinIcon className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
              <span>
                {a.street}
                <br />
                {a.postalCode} {a.city}
              </span>
            </p>
            <p className="mt-2">
              <a href={`tel:${a.phoneTel}`} className="font-semibold text-white hover:text-amber">
                {a.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${a.email}`} className="break-all hover:text-amber">
                {a.email}
              </a>
            </p>
          </address>
        ))}
        <nav aria-label="Plan du site">
          <p className="font-display text-lg font-semibold text-white">Le site</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link href="/" className="hover:text-amber">Accueil</Link></li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">{item.label}</Link>
              </li>
            ))}
            <li><Link href={PATHS.plumbing} className="hover:text-amber">Plombier Paris</Link></li>
            <li><Link href={PATHS.heating} className="hover:text-amber">Chauffagiste Paris</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container-x mt-12 border-t border-white/15 pt-6 text-xs text-white/60">
        {business.legalName} · SIREN {business.siren} · siège social {business.address.street}, {business.address.postalCode} {business.address.city}
      </div>
      <span aria-hidden="true" data-rise className="wordmark container-x mt-10">
        SOMSOU-PONS
      </span>
    </footer>
  );
}
