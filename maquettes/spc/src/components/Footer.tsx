import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";
import { Monogram } from "./Logo";

/** Pied de page : le réseau, sous la cave. Le sigle SPC en grotesque très large occupe toute la largeur. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03090e] pb-28 pt-14 md:pb-12">
      <div className="wrap">
        <div className="grid gap-12 border-t-2 border-white pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Bureau</p>
            <p className="mt-4 text-white">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[2rem] font-semibold tracking-tight text-white [font-stretch:110%] transition hover:text-brand-light" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm"><a href={`mailto:${business.email}`} className="transition hover:text-white">{business.email}</a></p>
            <p className="mt-2 text-sm text-white/55">{business.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">L&apos;entreprise</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-white">{n.label}</Link></li>)}
              <li><Link href={PATHS.gallery} className="transition hover:text-white">Réalisations</Link></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Autour du 12e</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {localPages.map((p) => <li key={p.path}><Link href={p.path} className="transition hover:text-white">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="display mt-20 select-none text-[29vw] leading-[.78] text-brand-mid lg:text-[min(26vw,24rem)]" style={{ fontStretch: "125%", fontWeight: 760 }}>SPC</p>
        <p className="mt-6 max-w-xl text-[0.95rem] text-white/70">Plomberie d&apos;immeuble, couverture, travaux sur corde et assainissement, du faîtage à la cave. Dans le 12e depuis {business.founded}.</p>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-[0.8rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Monogram className="h-5 w-5 shrink-0" /> {business.legalName} · SIREN {business.siren}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-white">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
