import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";

const locals = ["/plombier-paris-7", "/plombier-paris-14", "/plombier-paris-16", "/plombier-issy-les-moulineaux", "/plombier-boulogne-billancourt"];

export function Footer() {
  const zones = locals.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  return (
    <footer className="relative z-10 border-t border-line bg-white pb-28 pt-16 md:pb-14 lg:pt-24">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label">Entreprise</p>
            <p className="mt-3 text-[2.9rem] font-extralight leading-[0.95] tracking-[-0.03em] text-ink sm:text-[4.4rem] lg:text-[6rem]">Charles Pereira</p>
          </div>
          <p className="max-w-sm text-[0.95rem] lg:text-right">Plomberie et chauffage à Paris 15e, depuis 2008. Un réseau, une adresse : le boulevard Garibaldi.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Siège</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">Métro {business.metro}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">Métiers</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-accent-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Plombier dans les quartiers voisins</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              <li><Link href={PATHS.plumbing} className="transition hover:text-accent-deep">Plombier Paris 15e</Link></li>
              {zones.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-accent-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName} · {business.rcs}</p>
          <p><Link href={PATHS.legal} className="transition hover:text-accent-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
