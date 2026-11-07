import Link from "next/link";
import { trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { PATHS, business } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-creme/10 bg-nuit-deep pb-28 pt-20 text-creme-soft sm:pb-12">
      <div className="wrap"><p className="font-serif text-[3rem] leading-[0.95] text-creme sm:text-[5rem] lg:text-[7rem]">Couvreur à <span className="disp-i">La Garenne-Colombes</span></p></div>
      <div className="wrap mt-16 grid gap-12 border-t border-cuivre/30 pt-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <div className="mt-6 text-[0.98rem]">{business.address.street}<br />{business.address.postalCode} {business.address.city}</div>
          <div className="mt-4"><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap font-serif text-[1.2rem] text-creme hover:text-cuivre-pale">{business.phoneDisplay}</a> · <a href={`tel:${business.mobileTel}`} className="whitespace-nowrap font-serif text-[1.2rem] text-creme hover:text-cuivre-pale">{business.mobileDisplay}</a></div>
          <div className="mt-1"><a href={`mailto:${business.email}`} className="hover:text-cuivre-pale">{business.email}</a></div>
        </div>
        <div className="lg:col-span-3">
          <div className="cap text-cuivre-light">Métiers</div>
          <ul className="mt-4 space-y-2">{trades.map((t) => <li key={t.path}><Link href={t.path} className="hover:text-creme">{t.title}</Link></li>)}</ul>
        </div>
        <div className="lg:col-span-3">
          <div className="cap text-cuivre-light">Communes</div>
          <ul className="mt-4 space-y-2">{localPages.map((p) => <li key={p.path}><Link href={p.path} className="hover:text-creme">Couvreur à {p.zone}</Link></li>)}</ul>
        </div>
        <div className="lg:col-span-2">
          <div className="cap text-cuivre-light">Maison</div>
          <ul className="mt-4 space-y-2">
            <li><Link href={PATHS.company} className="hover:text-creme">L&apos;entreprise</Link></li>
            <li><Link href={PATHS.works} className="hover:text-creme">Réalisations</Link></li>
            <li><Link href={PATHS.contact} className="hover:text-creme">Contact</Link></li>
            <li><Link href={PATHS.legal} className="hover:text-creme">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-12 flex flex-wrap justify-between gap-4 text-[0.85rem] text-creme-faint">
        <span>{business.name} · Artisan · {business.rm}</span>
        <span>Garantie décennale {business.insurer} · Installateur conseil expert Velux</span>
      </div>
    </footer>
  );
}
