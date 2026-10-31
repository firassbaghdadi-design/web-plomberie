import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";
import { DropMark } from "./Logo";

const zones = ["/plombier-paris-13", "/plombier-paris-15", "/plombier-paris-6", "/plombier-montrouge", "/plombier-gentilly"];

/** Pied de page : le nom en grand, fin, comme une dernière goutte posée. */
export function Footer() {
  const pages = zones.map((p) => allPages.find((x) => x.path === p)).filter(Boolean);
  return (
    <footer className="bg-white pb-28 pt-20 md:pb-14 lg:pt-28">
      <div className="wrap tx">
        <div className="border-t border-line pt-12">
          <p className="flex items-end gap-4 text-[3.4rem] font-extralight leading-[0.95] tracking-[-0.03em] text-ink sm:text-[5.4rem] lg:text-[7rem]">
            <DropMark className="mb-[0.5rem] h-[0.62em] w-[0.44em] shrink-0" /> S. Petit
          </p>
          <p className="mt-5 max-w-md text-[0.95rem]">Plombier, salles de bains, chauffage et gaz. Paris 14e, depuis 2007.</p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">Adresse</p>
            <p className="mt-4 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-5 block whitespace-nowrap text-[1.8rem] font-extralight tracking-tight text-ink transition hover:text-eau-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-2 text-sm text-ink-faint">{business.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="label">Le site</p>
            <ul className="mt-4 space-y-2 text-[0.95rem]">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-eau-deep">{n.label}</Link></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <p className="label">Quartiers voisins</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.95rem] sm:grid-cols-2">
              <li><Link href={PATHS.plumbing} className="transition hover:text-eau-deep">Plombier Paris 14e</Link></li>
              {pages.map((p) => p && <li key={p.path}><Link href={p.path} className="transition hover:text-eau-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-[0.8rem] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>{business.legalName} · {business.rcs} · Fondée en 2007</p>
          <p><Link href={PATHS.legal} className="transition hover:text-eau-deep">Mentions légales et crédits</Link></p>
        </div>
      </div>
    </footer>
  );
}
