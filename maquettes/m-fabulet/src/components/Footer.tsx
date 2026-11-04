import Link from "next/link";
import { trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { PATHS, business } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-bois-night pb-28 pt-16 text-creme/70 sm:pb-12">
      <div className="wrap grid gap-12 border-t border-creme/15 pt-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="creme" />
          <div className="mt-6 text-[0.98rem]">{business.address.street}<br />{business.address.postalCode} {business.address.city}</div>
          <div className="mt-4"><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap text-creme hover:text-orange-light">{business.phoneDisplay}</a> · <a href={`tel:${business.mobileTel}`} className="whitespace-nowrap text-creme hover:text-orange-light">{business.mobileDisplay}</a></div>
          <div className="mt-1"><a href={`mailto:${business.email}`} className="hover:text-orange-light">{business.email}</a></div>
        </div>
        <div className="lg:col-span-3">
          <div className="cap text-orange-light">Métiers</div>
          <ul className="mt-4 space-y-2">{trades.map((t) => <li key={t.path}><Link href={t.path} className="hover:text-creme">{t.title}</Link></li>)}</ul>
        </div>
        <div className="lg:col-span-3">
          <div className="cap text-orange-light">Communes</div>
          <ul className="mt-4 space-y-2">{localPages.map((p) => <li key={p.path}><Link href={p.path} className="hover:text-creme">Couvreur à {p.zone}</Link></li>)}</ul>
        </div>
        <div className="lg:col-span-2">
          <div className="cap text-orange-light">Maison</div>
          <ul className="mt-4 space-y-2">
            <li><Link href={PATHS.company} className="hover:text-creme">L&apos;entreprise</Link></li>
            <li><Link href={PATHS.works} className="hover:text-creme">Réalisations</Link></li>
            <li><Link href={PATHS.contact} className="hover:text-creme">Contact</Link></li>
            <li><Link href={PATHS.legal} className="hover:text-creme">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-12 flex flex-wrap justify-between gap-4 text-[0.85rem] text-creme/45">
        <span>{business.name} · Artisan · {business.rm}</span>
        <span>Garantie décennale {business.insurer} · Installateur conseil expert Velux</span>
      </div>
    </footer>
  );
}
