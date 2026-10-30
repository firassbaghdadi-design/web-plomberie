import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, LocalBlock, Sec, fr } from "@/components/Sections";
import { home, trades } from "@/lib/content";
import { pairByKey } from "@/lib/photos";
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

function Hero() {
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-8 sm:pt-12 lg:min-h-[calc(100svh-var(--head-h))] lg:grid-cols-12 lg:gap-x-14 lg:pb-14 lg:pt-10">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <p className="fade-in text-[0.8rem] font-medium uppercase tracking-[0.22em] text-accent max-lg:order-1">Maison artisanale · Paris 11e · depuis {business.founded}</p>
          <h1 className="hp hp-load mt-8 text-[2.9rem] font-light leading-[0.98] tracking-[-0.05em] max-lg:order-2 sm:mt-14 sm:text-[4.9rem] lg:mt-auto lg:pt-14 lg:text-[clamp(4rem,6vw,6.3rem)]">
            <span className="line-up"><span>Plombier chauffagiste</span></span>
            <span className="line-up"><span className="text-accent" style={{ ["--d" as string]: "150ms" }}>à Paris 11e</span></span>
          </h1>
          <p className="fade-in mt-9 max-w-[36rem] text-[1.1rem] leading-relaxed max-lg:order-4 sm:text-[1.2rem]" style={{ ["--d" as string]: "380ms" }}>
            Urgence, rénovation ou projet : une quarantaine de compagnons au service des Parisiens et de leurs immeubles, rue Saint-Ambroise.
          </p>
          <div className="fade-in mt-10 max-lg:order-5" style={{ ["--d" as string]: "520ms" }}>
            <CtaButtons />
          </div>
          <dl className="fade-in mt-14 grid grid-cols-3 border-t border-line max-lg:order-6 lg:mt-16" style={{ ["--d" as string]: "700ms" }}>
            <div className="pr-3 pt-5"><dt className="label">Depuis</dt><dd className="num mt-1.5 text-[1.6rem] font-extralight leading-none text-ink sm:text-[2.2rem]">1964</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Compagnons</dt><dd className="num mt-1.5 text-[1.6rem] font-extralight leading-none text-ink sm:text-[2.2rem]">~40</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Astreinte</dt><dd className="num mt-1.5 text-[1.6rem] font-extralight leading-none text-ink sm:text-[2.2rem]">24 h/24</dd></div>
          </dl>
        </div>
        <figure className="relative mt-10 max-lg:order-3 lg:col-span-5 lg:mt-0">
          <div data-mask className="h-full overflow-hidden rounded-[3px]">
            <Img id="equipe-paris" priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[36rem]" imgClassName="slow-zoom" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>Un compagnon de la maison, dans Paris sous la neige</span>
            <span className="num hidden sm:inline">{years} ans d&apos;atelier</span>
          </figcaption>
        </figure>
      </div>
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

      <Sec n="02" rubrique="Interventions" labelledBy="titre-metiers">
        <h2 id="titre-metiers" className="h2 hp max-w-3xl">Six situations, une seule maison</h2>
        <ul className="mt-12 border-t border-line">
          {trades.map((t) => (
            <li key={t.href} className="border-b border-line">
              <Link href={t.href} className="row-link grid grid-cols-[2.6rem_minmax(0,1fr)_auto] items-start gap-x-4 py-7 sm:grid-cols-[4rem_minmax(0,18rem)_minmax(0,1fr)_auto]">
                <span className="num pt-1 text-[0.85rem] text-accent">{t.n}</span>
                <span className="row-title text-[1.35rem] font-light leading-snug text-ink sm:text-[1.7rem]">{t.title}</span>
                <span className="col-span-2 col-start-2 mt-2 text-[0.98rem] sm:col-span-1 sm:col-start-auto sm:mt-1.5">{t.text}</span>
                <ArrowIcon className="row-arrow mt-2 hidden h-5 w-5 text-ink-faint sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Sec>

      <Sec n="03" rubrique="La maison" labelledBy="titre-maison" tone="paper">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="titre-maison" className="h2 hp">Une maison familiale depuis 1964</h2>
            <div className="prose-mt mt-8 max-w-xl">
              <p>Fondée par René Monteil dans le 11e arrondissement, le quartier historique des artisans du métal, la maison est restée indépendante et parisienne depuis soixante ans.</p>
              <p>Une quarantaine de collaborateurs, dont certains travaillent ensemble depuis plus de vingt ans : c&apos;est la preuve d&apos;un savoir-faire transmis, d&apos;une équipe stable et d&apos;une confiance mutuelle qui se ressent sur chaque chantier.</p>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 border-t border-line">
              {[["Technicité", "Le bon matériau, la bonne procédure"], ["Réactivité", "Équipes opérationnelles sans délai"], ["Proximité", "Une économie locale parisienne"]].map(([a, b]) => (
                <div key={a} className="pr-3 pt-5"><dt className="text-[1.05rem] font-medium text-ink">{a}</dt><dd className="mt-1.5 text-[0.88rem] leading-snug">{b}</dd></div>
              ))}
            </dl>
            <Link href={PATHS.house} className="link-line mt-10 text-[0.95rem]">Découvrir la maison <ArrowIcon /></Link>
          </div>
          <div className="grid grid-cols-5 gap-4 lg:col-span-6">
            <div data-mask className="col-span-3 overflow-hidden rounded-[3px]"><Img id="equipe-1" className="aspect-[3/4]" /></div>
            <div data-mask className="col-span-2 mt-12 overflow-hidden rounded-[3px]"><Img id="equipe-4" className="aspect-[2/3]" /></div>
          </div>
        </div>
      </Sec>

      {showcase.length ? (
        <Sec n="04" rubrique="Réalisations" labelledBy="titre-real">
          <h2 id="titre-real" className="h2 hp max-w-3xl">Des chantiers parisiens, avant et après</h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {showcase.map((p) => p && (
              <div key={p.key}>
                <BeforeAfter pair={p} />
                <p className="mt-4 text-[1.05rem] font-medium text-ink">{p.title}</p>
                <p className="mt-1 text-[0.95rem]">{p.text}</p>
              </div>
            ))}
          </div>
          <Link href={PATHS.works} className="link-line mt-12 text-[0.95rem]">Voir les dix chantiers <ArrowIcon /></Link>
        </Sec>
      ) : null}

      <Sec n="05" rubrique="Qualifications" labelledBy="titre-qualif" tone="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="titre-qualif" className="h2 hp">Des qualifications reconnues</h2>
            <p className="mt-8 max-w-lg">Syndics, hôtels, gestionnaires immobiliers, associations : la maison travaille pour eux depuis plusieurs années. Les labels ci-contre sont ceux que revendique son site actuel, à confirmer avant publication.</p>
          </div>
          <ul className="border-t border-line lg:col-span-6">
            {certs.map((c, i) => (
              <li key={c} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b border-line py-4 text-ink"><span className="num pt-[0.18em] text-[0.8rem] text-accent">{String(i + 1).padStart(2, "0")}</span>{c}</li>
            ))}
          </ul>
        </div>
      </Sec>

      <Sec n="06" rubrique="Zone" labelledBy="titre-zone">
        <h2 id="titre-zone" className="h2 hp max-w-3xl">Paris et Île-de-France, du 11e au reste de la capitale</h2>
        <p className="mt-8 max-w-xl">L&apos;ancrage historique de la maison est le 11e arrondissement. Elle couvre l&apos;ensemble de Paris et sa périphérie proche, avec des pages dédiées aux quartiers voisins.</p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {zones.map((z) => <li key={z.href}><Link href={z.href} className="link-line text-[1.05rem]">Plombier {z.label}</Link></li>)}
        </ul>
      </Sec>

      <FaqList items={home.faq} title="Tout ce qu'il faut savoir" n="07" />
      <LocalBlock n="08" />
      <CtaBand title="Une fuite, une panne, un projet ?" text="Racontez votre situation : un compagnon de la maison vous rappelle." />
      <JsonLd nodes={nodes} />
    </>
  );
}
