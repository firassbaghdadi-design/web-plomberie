import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, Chapter, CtaBand, CtaButtons, FaqList, Frame, LocalBlock } from "@/components/Sections";
import { home, trades } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { pairByKey, pairs } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const years = new Date().getFullYear() - 1964;
const zones = [
  { href: PATHS.plumbing, label: "Paris 11e" },
  { href: "/plombier-paris-3", label: "Paris 3e" },
  { href: "/plombier-paris-4", label: "Paris 4e" },
  { href: "/plombier-paris-10", label: "Paris 10e" },
  { href: "/plombier-paris-12", label: "Paris 12e" },
  { href: "/plombier-paris-20", label: "Paris 20e" },
];
const certs = ["Qualibat", "FFB", "SMA BTP", "GCCP", "Reconnu Grenelle Environnement", "Habilitation gaz naturel et propane", "Amiante, sous-section 4"];
const photoOf = (href: string) => allPages.find((p) => p.path === href)?.photo ?? "equipe-1";

/** Plan d'ouverture : la photo de la maison bord à bord, le métier et le quartier en très grand, posés dessus. */
function Hero() {
  return (
    <section className="relative" aria-label="Monteil & Cie, plombier chauffagiste à Paris 11e">
      <Frame photo="equipe-paris" priority zoom className="min-h-[100svh]" veil="frame-veil-side">
        {/* Bandeau de générique, sous l'en-tête */}
        <div className="fade-in wrap pt-[calc(var(--head-h)+1.1rem)]" style={{ ["--d" as string]: "200ms" }}>
          <div className="flex items-center justify-between gap-6 border-t border-ink/20 pt-3 text-[0.64rem] uppercase tracking-[0.26em] text-ink/70">
            <span>Maison fondée en <span className="text-ink">{business.founded}</span></span>
            <span className="hidden md:inline">Plomberie · Chauffage · Couverture · Travaux sur corde</span>
            <span className="hidden sm:inline">{business.address.street}</span>
          </div>
        </div>

        <div className="frame-text wrap mt-auto pb-24 pt-16 md:pb-12 lg:pb-14">
          <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-10">
            <h1 className="hp hp-load text-[3.15rem] leading-[0.92] tracking-[-0.055em] sm:text-[5.6rem] lg:col-span-9 lg:text-[clamp(6rem,8.6vw,9.4rem)]">
              <span className="line-up"><span>Plombier</span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "120ms" }}>chauffagiste</span></span>
              <span className="line-up"><span className="ital text-ink/95" style={{ ["--d" as string]: "260ms" }}>à Paris 11e</span></span>
            </h1>
            <p className="fade-in mt-8 max-w-[26rem] text-[1.05rem] leading-relaxed text-ink/85 lg:col-span-3 lg:mt-0 lg:pb-6 sm:text-[1.12rem]" style={{ ["--d" as string]: "420ms" }}>
              Urgence, rénovation ou projet : une quarantaine de compagnons au service des Parisiens et de leurs immeubles, rue Saint-Ambroise.
            </p>
          </div>
          <div className="fade-in mt-10 flex flex-col gap-10 border-t border-ink/20 pt-7 lg:mt-12 lg:flex-row lg:items-center lg:justify-between" style={{ ["--d" as string]: "560ms" }}>
            <CtaButtons />
            <dl className="grid grid-cols-3 gap-x-8 sm:gap-x-14">
              <div><dt className="label !text-ink/55">Depuis</dt><dd className="num ital mt-1 text-[1.9rem] leading-none text-ink sm:text-[2.3rem]">1964</dd></div>
              <div><dt className="label !text-ink/55">Compagnons, env.</dt><dd className="num ital mt-1 text-[1.9rem] leading-none text-ink sm:text-[2.3rem]">40</dd></div>
              <div><dt className="label !text-ink/55">Astreinte</dt><dd className="num ital mt-1 whitespace-nowrap text-[1.9rem] leading-none text-ink sm:text-[2.3rem]">24 h/24</dd></div>
            </dl>
          </div>
        </div>
        <p aria-hidden="true" className="pointer-events-none absolute right-[calc(var(--gutter)*0.4)] top-[calc(var(--head-h)+3.5rem)] hidden whitespace-nowrap text-[0.6rem] uppercase tracking-[0.3em] text-ink/45 lg:block" style={{ transform: "rotate(-90deg) translateX(-100%)", transformOrigin: "top right" }}>
          Plan 01 · Paris sous la neige · {years} ans d&apos;atelier
        </p>
      </Frame>
    </section>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)];
  const showcase = ["colonne", "toiture"].map(pairByKey).filter(Boolean);
  return (
    <>
      <Hero />
      <Brief text={home.brief} />

      <Chapter n="02" rubrique="Interventions" photo="equipe-fuite" labelledBy="titre-metiers" title={<>Six situations, <span className="ital">une seule maison</span></>}>
        <ul className="border-t border-line">
          {trades.map((t) => (
            <li key={t.href} className="border-b border-line">
              <Link href={t.href} className="row-link group grid grid-cols-[2.6rem_minmax(0,1fr)_auto] items-start gap-x-4 py-7 sm:grid-cols-[4rem_minmax(0,18rem)_minmax(0,1fr)_9rem] sm:items-center lg:grid-cols-[5rem_minmax(0,22rem)_minmax(0,1fr)_11rem]">
                <span className="ital num pt-1 text-[1.3rem] leading-none text-accent-light sm:pt-0">{t.n}</span>
                <span className="row-title text-[1.4rem] font-light leading-snug text-ink sm:text-[1.9rem]">{t.title}</span>
                <span className="col-span-2 col-start-2 mt-2 text-[0.98rem] sm:col-span-1 sm:col-start-auto sm:mt-0">{t.text}</span>
                <span aria-hidden="true" className="relative hidden aspect-[3/2] overflow-hidden rounded-[2px] sm:block"><Img id={photoOf(t.href)} alt="" className="absolute inset-0" imgClassName="transition duration-700 group-hover:scale-105" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Chapter>

      <Chapter n="03" rubrique="La maison" photo="equipe-1" labelledBy="titre-maison" title={<>Une maison familiale <span className="ital">depuis 1964</span></>}>
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-1 lg:pt-6">
            <div className="prose-mt max-w-xl text-[1.12rem]">
              <p>Fondée par René Monteil dans le 11e arrondissement, le quartier historique des artisans du métal, la maison est restée indépendante et parisienne depuis soixante ans.</p>
              <p>Une quarantaine de collaborateurs, dont certains travaillent ensemble depuis plus de vingt ans : c&apos;est la preuve d&apos;un savoir-faire transmis, d&apos;une équipe stable et d&apos;une confiance mutuelle qui se ressent sur chaque chantier.</p>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 border-t border-line">
              {[["Technicité", "Le bon matériau, la bonne procédure"], ["Réactivité", "Équipes opérationnelles sans délai"], ["Proximité", "Une économie locale parisienne"]].map(([a, b]) => (
                <div key={a} className="pr-3 pt-5"><dt className="ital text-[1.3rem] text-ink">{a}</dt><dd className="mt-1.5 text-[0.88rem] leading-snug">{b}</dd></div>
              ))}
            </dl>
            <Link href={PATHS.house} className="link-line mt-12 text-[0.95rem]">Découvrir la maison <ArrowIcon /></Link>
          </div>
          <figure className="lg:col-span-5 lg:col-start-8">
            <div data-mask className="overflow-hidden rounded-[2px]"><Img id="equipe-4" className="aspect-[4/5]" /></div>
            <figcaption className="mt-3 text-[0.78rem] text-ink-faint">Un cordiste de la maison, équipé pour le travail sur corde</figcaption>
          </figure>
        </div>
      </Chapter>

      {showcase.length ? (
        <section aria-labelledby="titre-real">
          <div className="wrap grid gap-x-12 pb-14 pt-24 sm:pt-32 lg:grid-cols-12">
            <p className="slate mb-8 lg:col-span-2 lg:mb-0 lg:pt-4" data-n="04"><span aria-hidden="true" />Réalisations</p>
            <div className="flex flex-col gap-8 lg:col-span-10 lg:flex-row lg:items-end lg:justify-between">
              <h2 id="titre-real" className="h2 hp max-w-3xl">Des chantiers parisiens, <span className="ital">avant et après</span></h2>
              <Link href={PATHS.works} className="link-line shrink-0 text-[0.95rem]">Voir les dix chantiers <ArrowIcon /></Link>
            </div>
          </div>
          <div className="space-y-2">
            {showcase.map((p) => p && <BeforeAfter key={p.key} pair={p} stage index={pairs.indexOf(p) + 1} total={pairs.length} />)}
          </div>
        </section>
      ) : null}

      <Chapter n="05" rubrique="Qualifications" photo="cordiste" labelledBy="titre-qualif" title={<>Des qualifications <span className="ital">reconnues</span></>}>
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="max-w-lg text-[1.08rem] lg:col-span-5">Syndics, hôtels, gestionnaires immobiliers, associations : la maison travaille pour eux depuis plusieurs années. Les labels ci-contre sont ceux que revendique son site actuel, à confirmer avant publication.</p>
          <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
            {certs.map((c, i) => (
              <li key={c} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-line py-4 text-[1.08rem] text-ink"><span className="num pt-[0.2em] text-[0.8rem] text-accent-light">{String(i + 1).padStart(2, "0")}</span>{c}</li>
            ))}
          </ul>
        </div>
      </Chapter>

      <section aria-labelledby="titre-zone" className="relative grid lg:min-h-[86svh] lg:grid-cols-2">
        <Frame photo="equipe-2" className="min-h-[62svh] lg:min-h-full" veil="frame-veil-full !opacity-30" />
        <div className="wrap flex flex-col justify-center py-20 sm:py-28 lg:mx-0 lg:max-w-none lg:px-[clamp(2rem,5vw,6rem)]">
          <p className="slate" data-n="06"><span aria-hidden="true" />Zone</p>
          <h2 id="titre-zone" className="h2 hp mt-8 max-w-2xl">Paris et Île-de-France, <span className="ital">du 11e au reste de la capitale</span></h2>
          <p className="mt-8 max-w-xl">L&apos;ancrage historique de la maison est le 11e arrondissement. Elle couvre l&apos;ensemble de Paris et sa périphérie proche, avec des pages dédiées aux quartiers voisins.</p>
          <ul className="mt-10 border-t border-line">
            {zones.map((z) => (
              <li key={z.href} className="border-b border-line">
                <Link href={z.href} className="row-link flex items-center justify-between py-4">
                  <span className="row-title text-[1.2rem] font-light text-ink">Plombier <span className="ital">{z.label}</span></span>
                  <ArrowIcon className="row-arrow h-4 w-4 text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={home.faq} title="Tout ce qu'il faut savoir" n="07" />
      <LocalBlock n="08" />
      <CtaBand title="Une fuite, une panne, un projet ?" text="Racontez votre situation : un compagnon de la maison vous rappelle." />
      <JsonLd nodes={nodes} />
    </>
  );
}
