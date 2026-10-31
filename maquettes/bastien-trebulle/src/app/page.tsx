import Link from "next/link";
import { Drums } from "@/components/Drums";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { MeterFace } from "@/components/MeterFace";
import { CtaBand, FaqList, Folio, LocalBlock, Reputation, contactHref, roman } from "@/components/Sections";
import { ArrowIcon } from "@/components/Icons";
import { home, homeFaq, trades } from "@/lib/content";
import { photoFor } from "@/lib/photos";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business, reputation } from "@/lib/site";
import { works } from "@/lib/works";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const years = new Date().getFullYear() - 1880;

/**
 * Le héros, composé comme une couverture de revue : une photo de chantier plein cadre, étalonnée très sombre ; en tête,
 * la ligne d'ours (fondation, métiers, adresse) ; le titre en Cormorant très fin, sur trois lignes décalées, la dernière
 * en italique de laiton ; et, posé dessus comme un bijou, le compteur d'eau en laiton qui lit « 1880 ».
 */
function Hero() {
  const photo = photoFor({ theme: "hero" });
  return (
    <section className="relative isolate -mt-[var(--head-h)] overflow-hidden" aria-label="Bastien & Trebulle, plombier couvreur à Paris 16e">
      <Img photo={photo} priority tone="grade-deep" className="absolute inset-0 -z-20" imgClassName="slow-zoom" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#0c0d0f_8%,rgba(12,13,15,.78)_45%,rgba(12,13,15,.35)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-bg to-transparent" aria-hidden="true" />

      <div className="wrap relative flex min-h-[100svh] flex-col pb-10 pt-[calc(var(--head-h)+1.25rem)] lg:pb-12">
        {/* ligne d'ours */}
        <div className="fade-in flex items-center justify-between gap-6 border-b border-line-strong/70 pb-4 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-fg-faint sm:text-[0.66rem]">
          <span>Maison fondée en <span className="text-brass-light">1880</span></span>
          <span className="hidden md:inline">Plomberie · Couverture · Chauffage</span>
          <span className="hidden sm:inline">3, rue Gros · Paris XVI<sup>e</sup></span>
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-7 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:py-8">
          <h1 className="relative z-10 text-[3.4rem] leading-[0.9] tracking-[-0.02em] sm:text-[6rem] lg:col-span-7 lg:text-[clamp(5.6rem,8.4vw,9.6rem)]">
            <span className="line-up"><span>Plombier</span></span>{" "}
            <span className="line-up pl-[11vw] lg:pl-[13vw]"><span style={{ ["--d" as string]: "120ms" }}>couvreur</span></span>{" "}
            <span className="line-up"><span className="italic text-brass-light" style={{ ["--d" as string]: "240ms" }}>à Paris 16e</span></span>
          </h1>

          {/* l'objet précieux */}
          <div className="object-in pointer-events-none relative z-0 mt-5 ml-auto w-[64vw] max-w-[23rem] sm:-mt-16 sm:w-[44vw] lg:col-span-5 lg:mt-0 lg:w-[min(34vw,31rem)] lg:max-w-none" style={{ ["--d" as string]: "350ms" }}>
            <MeterFace />
          </div>
        </div>

        <div className="fade-in grid gap-8 border-t border-line-strong/70 pt-7 lg:grid-cols-12 lg:items-end" style={{ ["--d" as string]: "600ms" }}>
          <p className="order-3 max-w-md text-[1.02rem] leading-relaxed text-fg-soft lg:order-none lg:col-span-4">
            L&apos;excellence de la plomberie et de la couverture à Paris. Dépannage et rénovation haut de gamme, par une maison du 16e arrondissement.
          </p>
          <div className="order-1 lg:order-none lg:col-span-4">
            <Link href={contactHref()} className="btn-primary max-sm:w-full" data-track="cta_devis">Demander un devis <ArrowIcon /></Link>
          </div>
          <a href={`tel:${business.phoneTel}`} className="group order-2 block lg:order-none lg:col-span-4 lg:text-right" data-track="cta_tel">
            <span className="label block">Urgence 24h/24 · 7j/7</span>
            <span className="serif num mt-1 block text-[2.1rem] font-light leading-none text-fg transition group-hover:text-brass-light sm:text-[2.6rem]">{business.phoneDisplay}</span>
          </a>
        </div>
      </div>
      <p className="vertical absolute bottom-10 right-3 hidden text-[0.6rem] uppercase tracking-[0.3em] text-fg-faint xl:block">Planche I · compteur de laiton, lecture 1880</p>
    </section>
  );
}

function Welcome() {
  return (
    <Folio n="01" rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref dropcap max-w-4xl">{home.brief}</p>
      <p className="mt-10 max-w-2xl text-[1.02rem]">
        Pour une fuite, une toiture ou une chaudière, un seul numéro : le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>, joignable 24h/24.
      </p>
    </Folio>
  );
}

/** Une planche photo bord à bord, légendée comme dans une revue. */
function Plate() {
  const photo = photoFor({ theme: "toits" });
  return (
    <figure className="relative">
      <div data-mask className="overflow-hidden">
        <Img photo={photo} className="h-[62svh] min-h-[22rem] w-full sm:h-[82svh]" imgClassName="slow-zoom" />
      </div>
      <figcaption className="wrap absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 pb-6">
        <span className="serif max-w-md text-[1.05rem] italic text-fg">Planche II. {photo.alt}.</span>
        <span className="num hidden text-[0.66rem] uppercase tracking-[0.28em] text-fg-faint sm:inline">Paris XVI<sup>e</sup></span>
      </figcaption>
    </figure>
  );
}

/** Le relevé, exposé comme dans une vitrine : quatre lectures de laiton séparées par des filets. */
function Reading() {
  const rows = [
    { v: "1880", l: "Fondation de la maison Bastien", dec: 0 },
    { v: "1960", l: "Robert Bastien reprend la maison", dec: 0 },
    { v: String(reputation.reviews), l: "Avis sur la fiche Google", dec: 0 },
    { v: reputation.rating, l: "Note sur 5", dec: 1 },
  ];
  return (
    <Folio n="02" rubrique="Le relevé" labelledBy="titre-releve" tone="paper" wide>
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 id="titre-releve" className="h2 lg:col-span-7" data-reveal>Cent quarante-six ans <em>de relevés.</em></h2>
        <p className="lg:col-span-5 lg:pt-4" data-reveal>Cinq générations d&apos;artisans, deux maisons réunies en 2010, plus de 40 salariés aujourd&apos;hui : les chiffres de la maison se lisent comme ceux d&apos;un compteur.</p>
      </div>
      <dl className="mt-16 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((r, i) => (
          <div key={r.l} className={`flex flex-col items-start gap-6 py-10 sm:px-8 ${i ? "border-t border-line sm:border-t-0" : ""} ${i % 2 ? "sm:border-l sm:border-line" : ""} ${i === 2 ? "lg:border-l lg:border-line" : ""} sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0`}>
            <dd><Drums value={r.v} size="clamp(2.4rem, 5vw, 3.3rem)" decimals={r.dec} /></dd>
            <dt className="serif text-[1.2rem] italic text-fg-soft">{r.l}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm text-fg-faint">Dates reprises du site actuel de l&apos;entreprise ; <span className="num">{years}</span> ans depuis 1880.</p>
    </Folio>
  );
}

/** Les métiers en sommaire de revue : une table à quatre cases, grands chiffres romains, titres en Cormorant. */
function Trades() {
  return (
    <Folio n="03" rubrique="Nos expertises" labelledBy="titre-expertises" wide>
      <h2 id="titre-expertises" className="h2 max-w-3xl" data-reveal>Quatre expertises, <em>un seul interlocuteur.</em></h2>
      <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2">
        {trades.map((t, i) => (
          <li key={t.n} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="bg-bg">
            <Link href={t.href} className="row-link group relative flex h-full flex-col p-7 sm:p-10 lg:min-h-[22rem] lg:p-12">
              <span className="serif text-[4rem] font-light italic leading-none text-brass/80 transition group-hover:text-brass-light sm:text-[5.5rem]">{roman(i + 1)}</span>
              <span className="row-title serif mt-8 text-[2rem] leading-tight text-fg transition sm:text-[2.5rem]">{t.title}</span>
              <span className="mt-4 max-w-md text-[0.98rem]">{t.text}</span>
              <span className="mt-auto flex items-center gap-3 pt-8 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-fg-faint">Lire la rubrique <ArrowIcon className="row-arrow h-4 w-4" /></span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-700 group-hover:w-full" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </Folio>
  );
}

/** L'urgence en pleine page : la photo des toits très assombrie, le numéro en très grand. */
function Emergency() {
  const photo = photoFor({ theme: "immeubles" });
  return (
    <section data-folio="04" data-rubrique="Dépannage" aria-labelledby="titre-urgence" className="relative isolate overflow-hidden border-t border-line">
      <Img photo={photo} tone="grade-deep" className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-bg/70" aria-hidden="true" />
      <div className="wrap py-28 text-center sm:py-40">
        <p className="serif text-[2.4rem] font-light italic leading-none text-brass">IV.</p>
        <p className="label mt-4">Dépannage d&apos;urgence</p>
        <h2 id="titre-urgence" className="h2 mx-auto mt-8 max-w-4xl">Dépannage d&apos;urgence <em>24h/24.</em></h2>
        <p className="mx-auto mt-6 max-w-xl">Des compagnons de l&apos;entreprise, pas un centre d&apos;appels : intervention sous 2 heures en région parisienne, tarif forfaitaire annoncé à l&apos;avance, dimanches et jours fériés compris.</p>
        <a href={`tel:${business.phoneTel}`} className="serif num mt-12 block whitespace-nowrap text-[3rem] font-light leading-none text-fg transition hover:text-brass-light sm:text-[6rem] lg:text-[8.5rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        <Link href={PATHS.emergency} className="link-line mt-10 inline-flex items-center gap-3 text-[0.95rem]">Les cas d&apos;intervention <ArrowIcon /></Link>
      </div>
    </section>
  );
}

/** Les réalisations en planches asymétriques : une grande à gauche, trois plus petites, légendes « fig. ». */
function Works() {
  const picks = ["quai-voltaire-notre-realisation", "plomberie-etoile", "hotel-opera-richepanse", "rue-danton"].map((s) => works.find((w) => w.slug === s)!);
  const sizes = ["lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-5", "lg:col-span-12"];
  const ratios = ["aspect-[4/5]", "aspect-[16/10]", "aspect-[16/10]", "aspect-[21/8]"];
  return (
    <Folio n="05" rubrique="Réalisations" labelledBy="titre-realisations" wide>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titre-realisations" className="h2 max-w-3xl" data-reveal>Nos réalisations, <em>votre futur confort.</em></h2>
        <Link href={PATHS.works} className="link-line text-sm">Découvrir toutes nos réalisations</Link>
      </div>
      <ul className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-12">
        {picks.map((w, i) => (
          <li key={w.slug} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className={sizes[i]}>
            <Link href={PATHS.works} className="row-link block">
              <Img photo={{ ...photoFor({ theme: w.trade.startsWith("Couv") ? "couverture" : "plomberie", n: i }) }} alt={`${w.title}, ${w.place}`} className={`${ratios[i]} ${i === 0 ? "lg:aspect-auto lg:h-full lg:min-h-[40rem]" : ""}`} />
              <span className="mt-5 flex items-baseline gap-5">
                <span className="serif shrink-0 text-[1rem] italic text-brass">fig. {pad2(i + 1)}</span>
                <span className="row-title serif text-[1.6rem] leading-tight text-fg transition">{w.title}</span>
              </span>
              <span className="mt-1 block pl-[3.6rem] text-sm text-fg-faint">{w.place} · {w.trade}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Folio>
  );
}
const pad2 = (n: number) => String(n).padStart(2, "0");

/** L'histoire en double page : un grand chapeau italique, le texte sur deux colonnes, les dates sur rouleaux. */
function History() {
  return (
    <Folio n="06" rubrique="Notre histoire" labelledBy="titre-histoire" tone="paper" wide>
      <h2 id="titre-histoire" className="h2 max-w-5xl" data-reveal>Cinq générations, deux maisons, <em>une seule exigence.</em></h2>
      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="prose-mt cols-2" data-reveal>
            <p className="dropcap">Fondée en 1880 sous le nom Le Bey, l&apos;entreprise Bastien, spécialisée en couverture et plomberie, a traversé cinq générations de dirigeants : reprise par André Bastien dans les années 1930, puis par Robert Bastien en 1960, avant d&apos;être transmise à Édouard Bastien en 1997.</p>
            <p>De son côté, la société Trebulle, fondée en 1886 et également spécialisée en couverture et plomberie, était installée au 88, boulevard de Picpus à Paris. En 2010, Bastien rachète Trebulle et devient Bastien &amp; Trebulle.</p>
          </div>
          <Link href={PATHS.history} className="link-line mt-10 inline-block text-sm">Lire toute l&apos;histoire</Link>
        </div>
        <ol className="lg:col-span-5">
          {[["1880", "Bastien"], ["1886", "Trebulle"], ["1997", "Édouard Bastien"], ["2010", "Bastien & Trebulle"]].map(([v, l]) => (
            <li key={v} data-reveal className="flex items-center justify-between gap-6 border-t border-line py-5 last:border-b">
              <span className="serif text-[1.35rem] italic text-fg-soft">{l}</span>
              <Drums value={v} size="clamp(1.8rem, 4vw, 2.4rem)" />
            </li>
          ))}
        </ol>
      </div>
    </Folio>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(homeFaq)];
  return (
    <>
      <Hero />
      <Welcome />
      <Plate />
      <Reading />
      <Trades />
      <Emergency />
      <Works />
      <History />
      <Reputation n="07" />
      <FaqList items={homeFaq} title="Nos experts répondent à vos questions" n="08" />
      <LocalBlock approach="La maison est installée rue Gros, dans le 16e arrondissement, et intervient à Paris et dans toute la région parisienne." n="09" />
      <CtaBand title="Parlons de votre projet." text="Particulier ou professionnel, parlez-nous de votre projet : devis gratuit, conseil technique ou urgence." />
      <JsonLd nodes={nodes} />
    </>
  );
}
