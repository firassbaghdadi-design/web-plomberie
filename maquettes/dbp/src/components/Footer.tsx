import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, nav } from "@/lib/site";

/** Pied de page : les coordonnées en colonnes, puis le nom en pleine largeur, comme la signature d'une affiche. */
export function Footer() {
  const zones = allPages.filter((p) => p.path.startsWith("/plombier-chauffagiste-"));
  return (
    <footer className="bg-white pb-28 pt-6 md:pb-10">
      <div className="wrap">
        <div className="h-1 bg-ink" />
        <div className="cols gap-y-10 pt-6">
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <p className="meta-faint">Atelier</p>
            <p className="mt-2 font-medium">{business.address.street}<br />{business.address.postalCode} Paris</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2rem] font-semibold tracking-[-0.045em] transition-colors hover:text-heat-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="meta-faint mt-2">Métro {business.metro}</p>
            <p className="meta-faint mt-3">
              Note de {business.rating.value}/5 sur{" "}
              <a href={business.googleUrl} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-heat-deep">Google</a>{" "}
              ({business.rating.count} avis, relevé d&apos;{business.rating.date})
            </p>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:col-start-6">
            <p className="meta-faint">Le site</p>
            <ul className="mt-2 space-y-1.5 font-medium">
              {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition-colors hover:text-heat-deep">{n.label}</Link></li>)}
              <li><Link href={PATHS.legal} className="transition-colors hover:text-heat-deep">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="meta-faint">Plombier chauffagiste près de chez vous</p>
            <ul className="mt-2 grid gap-x-6 gap-y-1.5 font-medium sm:grid-cols-2">
              {zones.map((p) => <li key={p.path}><Link href={p.path} className="transition-colors hover:text-heat-deep">{p.crumb}</Link></li>)}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-[33vw] lg:mt-20 lg:text-[min(30vw,27rem)]" aria-hidden="true">
          <span className="giant block">DBP<span className="deg">°</span></span>
        </p>
        <div className="mt-4 flex flex-col gap-1 border-t border-ink pt-3 sm:flex-row sm:justify-between">
          <p className="meta-faint">{business.legalName} · {business.rcs}</p>
          <p className="meta-faint">Plomberie · Chauffage · Paris 20e · depuis 2007</p>
        </div>
      </div>
    </footer>
  );
}
