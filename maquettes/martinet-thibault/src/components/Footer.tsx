import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, contacts, nav } from "@/lib/site";
import { Monogram } from "./Logo";

const locals = [PATHS.plumbing, PATHS.roofing, PATHS.heating, PATHS.emergency, PATHS.bathroom, "/plombier-paris-9", "/plombier-paris-11", "/couvreur-paris-18", "/chauffagiste-paris-19", "/plombier-paris-3"];

export function Footer() {
  const pages = locals.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  return (
    <footer className="bg-cream-2 pb-28 pt-20 md:pb-14 lg:pt-28">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="serif max-w-4xl text-[2.9rem] font-light leading-[0.96] tracking-[-0.035em] text-ink sm:text-[4.6rem] lg:text-[6.4rem]" style={{ fontVariationSettings: '"opsz" 144' }}>
            Martinet <em className="italic text-brass">Thibault</em>
          </p>
          <p className="max-w-xs text-[0.95rem] lg:text-right">Plomberie, chauffage et toiture à Paris 10e depuis 1880. Cinq générations, une seule adresse.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-ink/15 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Adresse</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="serif num mt-5 block whitespace-nowrap text-[1.9rem] font-light tracking-tight text-ink transition hover:text-brass-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">{business.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">Services</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {contacts.slice(1).map((c) => (
                <li key={c.service}>
                  <span className="text-ink">{c.service.replace("Service ", "")}</span>{" "}
                  <a href={`tel:${c.phoneTel}`} className="num whitespace-nowrap text-ink-faint transition hover:text-brass-deep">{c.phoneDisplay}</a>
                </li>
              ))}
            </ul>
            <p className="label mt-10">Le site</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-brass-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Métiers et quartiers</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {pages.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-brass-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/15 pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3"><Monogram className="h-5 w-5" /> {business.legalName} · SIRET {business.siret} · APE {business.ape}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-brass-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
