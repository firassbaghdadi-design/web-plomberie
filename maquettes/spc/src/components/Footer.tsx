import Link from "next/link";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";
import { Monogram } from "./Logo";

/** Pied de page : au bas de la descente, le regard ; puis le nom de l'entreprise en grand et en graisse fine. */
export function Footer() {
  return (
    <footer className="bg-white pb-28 pt-6 md:pb-14">
      <div className="wrap">
        <div className="regard" aria-hidden="true" />
        <div className="mt-10 flex flex-col gap-8 border-t border-line pt-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label">Société Plomberie Couverture · Paris 12e</p>
            <p className="mt-4 text-[4.2rem] font-extralight leading-[0.9] tracking-[0.06em] text-ink sm:text-[6rem] lg:text-[7.5rem]">SPC</p>
          </div>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Plomberie d&apos;immeuble, couverture, travaux sur corde et assainissement, du faîtage à la cave. Dans le 12e depuis {business.founded}.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Bureau</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm"><a href={`mailto:${business.email}`} className="transition hover:text-accent-deep">{business.email}</a></p>
            <p className="mt-2 text-sm text-ink-faint">{business.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">L&apos;entreprise</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-accent-deep">{n.label}</Link></li>)}
              <li><Link href={PATHS.gallery} className="transition hover:text-accent-deep">Réalisations</Link></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Autour du 12e</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {localPages.map((p) => <li key={p.path}><Link href={p.path} className="transition hover:text-accent-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Monogram className="h-5 w-5 shrink-0" /> {business.legalName} · SIREN {business.siren}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-accent-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
