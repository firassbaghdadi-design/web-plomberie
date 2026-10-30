import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";
import { Monogram } from "./Logo";

const locals = ["/plombier-paris-3", "/plombier-paris-4", "/plombier-paris-10", "/plombier-paris-12", "/plombier-paris-20"];

/** Pied de page composé comme le bas d'un papier à en-tête : raison sociale, capital, registre, adresse. */
export function Footer() {
  const zones = locals.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  return (
    <footer className="bg-white pb-28 pt-20 md:pb-14 lg:pt-28">
      <div className="wrap">
        <div className="rule-double" />
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="smallcaps text-ink-faint">Anciens Établissements</p>
            <p className="mt-3 text-[3rem] font-extralight leading-[0.95] tracking-[0.02em] text-ink sm:text-[4.6rem] lg:text-[6rem]">KUSCHNICK</p>
          </div>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Couverture · Plomberie · Fumisterie · Chauffage central. Une maison du faubourg Saint-Antoine depuis 1957.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Siège et atelier</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] font-extralight tracking-tight text-ink transition hover:text-copper-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">Métro {business.metro}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">La maison</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-copper-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Plombier dans les arrondissements voisins</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              <li><Link href={PATHS.plumbing} className="transition hover:text-copper-deep">Plombier Paris 11e</Link></li>
              {zones.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-copper-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Monogram className="h-5 w-5 shrink-0" /> {business.legalName} · {business.rcs} · Fondée en 1957</p>
          <p><Link href={PATHS.legal} className="transition hover:text-copper-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
