import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";

const locals = ["/plombier-paris-3", "/plombier-paris-4", "/plombier-paris-10", "/plombier-paris-12", "/plombier-paris-20"];
const services = [PATHS.leak, PATHS.heating, PATHS.bathroom, PATHS.roofing, PATHS.syndic, PATHS.rope, PATHS.audit];

export function Footer() {
  const zones = locals.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  const svc = services.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  return (
    <footer className="bg-white pb-28 pt-24 md:pb-14 lg:pt-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="text-[3.2rem] font-extralight leading-[0.95] tracking-[-0.04em] text-ink sm:text-[5.2rem] lg:text-[7rem]">Monteil <span className="text-accent">&amp;</span> Cie</p>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Plomberie, chauffage et couverture. Une maison du 11e arrondissement depuis 1964.</p>
        </div>
        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Atelier et bureaux</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">Service client de 8 h à 19 h</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">La maison</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-accent-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <p className="label">Métiers et quartiers</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              {svc.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-accent-deep">{p.crumb}</Link></li>)}
              {zones.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-accent-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName} · Paris 11e · Fondée en {business.founded}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-accent-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
