import Link from "next/link";
import { PATHS, business, nav, reputation } from "@/lib/site";
import { Mark } from "./Logo";

const trades = [
  { href: PATHS.plumbing, label: "Plombier Paris 16e" },
  { href: PATHS.roofing, label: "Couvreur zingueur Paris 16e" },
  { href: PATHS.heating, label: "Chauffagiste Paris 16e" },
  { href: PATHS.bathroom, label: "Salle de bains clé en main" },
];
const zones = [
  { href: "/plombier-paris-8", label: "Plombier Paris 8e" },
  { href: "/plombier-paris-17", label: "Plombier Paris 17e" },
  { href: "/plombier-paris-7", label: "Plombier couvreur Paris 7e" },
  { href: "/plombier-paris-15", label: "Plombier Paris 15e" },
  { href: "/plombier-levallois-perret", label: "Plombier Levallois-Perret" },
];

export function Footer() {
  return (
    <footer className="bg-white pb-28 pt-20 md:pb-14 lg:pt-28">
      <div className="wrap">
        <div className="rule" />
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-ink sm:text-[4.2rem] lg:text-[5.6rem]">Bastien &amp; Trebulle</p>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Plomberie, couverture et chauffage à Paris 16e. Une maison parisienne depuis 1880.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Siège</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.7rem] tracking-tight text-ink transition hover:text-accent" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">Urgence 24h/24 · bureau {business.phoneOfficeDisplay}</p>
            <a href={`mailto:${business.email}`} className="mt-3 inline-block text-sm text-ink-soft transition hover:text-accent">{business.email}</a>
          </div>
          <div className="lg:col-span-3">
            <p className="label">La maison</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-accent">{n.label}</Link></li>)}
              <li><Link href={PATHS.partners} className="transition hover:text-accent">Nos partenaires</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <p className="label">Métiers et quartiers</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {[...trades, ...zones].map((p) => <li key={p.href}><Link href={p.href} className="transition hover:text-accent">{p.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Mark className="h-5 w-5 shrink-0" /> {business.legalName} · {business.rcs} · Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date})</p>
          <p><Link href={PATHS.legal} className="transition hover:text-accent">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
