import Link from "next/link";
import { PATHS, agency, nav, services } from "@/lib/site";
import { legal, TODO } from "@/lib/legal";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ardoise pb-10 pt-16 text-platre/75">
      <div className="container-x grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7">{agency.tagline}. Un seul interlocuteur pour votre site, votre référencement, votre fiche Google, votre publicité et le suivi de vos demandes.</p>
        </div>
        <nav aria-label="Plan du site">
          <p className="font-display text-lg font-bold text-platre">Le site</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-platre hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services" className="text-sm">
          <p className="font-display text-lg font-bold text-platre">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${PATHS.services}/${s.slug}`} className="hover:text-platre hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm leading-7">
          <p className="font-display text-lg font-bold text-platre">Contact</p>
          <p className="mt-4">
            <a href={`mailto:${agency.email}`} className="hover:text-platre hover:underline">
              {agency.email}
            </a>
            {agency.phoneTel ? (
              <>
                <br />
                <a href={`tel:${agency.phoneTel}`} className="hover:text-platre hover:underline">
                  {agency.phoneDisplay}
                </a>
              </>
            ) : null}
          </p>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-platre/15 pt-6 text-xs text-platre/60">
        <p>
          {legal.name || agency.name}
          {legal.form ? `, ${legal.form}` : ""} · SIREN {legal.siren || TODO}
        </p>
        <p className="flex gap-5">
          <Link href={PATHS.legal} className="hover:text-platre hover:underline">
            Mentions légales
          </Link>
          <Link href={PATHS.privacy} className="hover:text-platre hover:underline">
            Confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
