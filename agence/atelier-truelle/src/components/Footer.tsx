import Link from "next/link";
import { PATHS, agency, nav, services } from "@/lib/site";
import { legal, TODO } from "@/lib/legal";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noir pt-20 text-platre/70">
      <div className="container-x grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-7">
            {agency.tagline}. Nous aidons les artisans à être trouvés et appelés sur Internet, avec une seule personne pour tout suivre.
          </p>
          <p className="mt-6">
            <a href={`mailto:${agency.email}`} className="link-line text-lg text-platre">
              {agency.email}
            </a>
            {agency.phoneTel ? (
              <>
                <br />
                <a href={`tel:${agency.phoneTel}`} className="link-line text-lg text-platre">
                  {agency.phoneDisplay}
                </a>
              </>
            ) : null}
          </p>
        </div>
        <nav aria-label="Plan du site" className="text-[0.95rem]">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terre">Le site</p>
          <ul className="space-y-2">
            <li><Link href={PATHS.home} className="link-line hover:text-platre">Accueil</Link></li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-line hover:text-platre">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services" className="text-[0.95rem] md:col-span-2">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terre">Ce que nous faisons</p>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${PATHS.services}/${s.slug}`} className="link-line hover:text-platre">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-x mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-platre/15 pt-6 text-xs text-platre/55">
        <p>
          {legal.name || agency.name}
          {legal.form ? `, ${legal.form}` : ""} · SIREN {legal.siren || TODO}
        </p>
        <p className="max-w-md">Photographies : Pexels (licence libre). Images d'illustration : elles ne montrent pas nos clients.</p>
        <p className="flex gap-5">
          <Link href={PATHS.legal} className="link-line hover:text-platre">Mentions légales</Link>
          <Link href={PATHS.privacy} className="link-line hover:text-platre">Confidentialité</Link>
        </p>
      </div>

      <div className="mt-8 select-none overflow-hidden pl-[4vw]" aria-hidden="true">
        <p className="wordmark" data-rise="">Truelle<span className="text-terre">.</span></p>
      </div>
    </footer>
  );
}
