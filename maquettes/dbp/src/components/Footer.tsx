import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";
import { Monogram } from "./Logo";

/** Pied de page : grand nom en graisse légère, coordonnées alignées, zones desservies. */
export function Footer() {
  const zones = allPages.filter((p) => p.path.startsWith("/plombier-chauffagiste-"));
  return (
    <footer className="bg-white pb-36 pt-20 md:pb-24 lg:pt-28">
      <div className="wrap">
        <div className="section-rule" />
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label">Plomberie · Chauffage · Paris 20e</p>
            <p className="mt-3 text-[3.6rem] leading-[0.95] tracking-[-0.05em] text-ink sm:text-[6rem] lg:text-[8rem]">DBP</p>
          </div>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Du dépannage au confort : le plombier chauffagiste de la porte des Lilas, depuis 2007.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Atelier</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">Métro {business.metro}</p>
            <p className="mt-4 text-sm">
              Note de {business.rating.value}/5 sur{" "}
              <a href={business.googleUrl} target="_blank" rel="noopener" className="link-line text-sm">Google</a>{" "}
              ({business.rating.count} avis, relevé d&apos;{business.rating.date})
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">Le site</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-accent-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Plombier chauffagiste près de chez vous</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {zones.map((p) => <li key={p.path}><Link href={p.path} className="transition hover:text-accent-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Monogram className="h-5 w-5 shrink-0" /> {business.legalName} · {business.rcs}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-accent-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
