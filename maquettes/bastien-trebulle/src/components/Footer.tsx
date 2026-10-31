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

/** Le colophon de la revue : le nom en très grand, puis l'ours (adresses, sommaire, métiers et quartiers). */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg pb-28 pt-20 md:pb-14 lg:pt-28">
      <div className="wrap">
        <p className="label">Colophon</p>
        <p className="serif mt-6 text-[clamp(3.2rem,12.5vw,13rem)] font-light leading-[0.86] tracking-[-0.02em] text-fg">
          Bastien <em className="italic text-brass">&amp;</em>
          <br />
          <span className="pl-[12vw]">Trebulle</span>
        </p>
        <div className="brass-rule mt-14" />

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Siège</p>
            <p className="serif mt-4 text-[1.4rem] leading-snug text-fg">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="serif num mt-6 block whitespace-nowrap text-[2.2rem] font-light text-fg transition hover:text-brass-light" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-fg-faint">Urgence 24h/24 · bureau {business.phoneOfficeDisplay}</p>
            <a href={`mailto:${business.email}`} className="mt-3 inline-block text-sm text-fg-soft transition hover:text-brass-light">{business.email}</a>
          </div>
          <div className="lg:col-span-3">
            <p className="label">La maison</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-brass-light">{n.label}</Link></li>)}
              <li><Link href={PATHS.partners} className="transition hover:text-brass-light">Nos partenaires</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <p className="label">Métiers et quartiers</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {[...trades, ...zones].map((p) => <li key={p.href}><Link href={p.href} className="transition hover:text-brass-light">{p.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Mark className="h-5 w-5 shrink-0" /> {business.legalName} · {business.rcs} · Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date})</p>
          <p><Link href={PATHS.legal} className="transition hover:text-brass-light">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
