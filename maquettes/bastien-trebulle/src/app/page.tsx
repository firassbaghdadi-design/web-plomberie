import Link from "next/link";
import { Drums } from "@/components/Drums";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { MeterFace } from "@/components/MeterFace";
import { CtaBand, CtaButtons, FaqList, Folio, LocalBlock, Reputation, contactHref, fr } from "@/components/Sections";
import { ArrowIcon } from "@/components/Icons";
import { home, homeFaq, trades } from "@/lib/content";
import { photoFor } from "@/lib/photos";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business, reputation } from "@/lib/site";
import { works } from "@/lib/works";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const years = new Date().getFullYear() - 1880;

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="wrap grid pb-14 pt-8 sm:pt-12 lg:min-h-[calc(100svh-var(--head-h))] lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:pb-16 lg:pt-6">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <p className="fade-in flex items-center gap-3 max-lg:order-1"><span className="h-px w-8 bg-accent" aria-hidden="true" /><span className="label !text-accent">Artisans de confiance depuis 1880</span></p>
          <h1 className="mt-6 text-[2.9rem] leading-[0.96] tracking-[-0.05em] max-lg:order-2 sm:text-[4.6rem] lg:text-[clamp(3.8rem,6.1vw,6.2rem)]">
            <span className="line-up"><span>Plombier couvreur</span></span>
            <span className="line-up"><span className="text-accent" style={{ ["--d" as string]: "140ms" }}>à Paris 16e</span></span>
          </h1>
          <div className="my-10 max-lg:order-3 lg:hidden"><MeterFace /></div>
          <p className="fade-in mt-9 max-w-[34rem] text-[1.1rem] leading-relaxed max-lg:order-4 sm:text-[1.2rem]" style={{ ["--d" as string]: "380ms" }}>
            L&apos;excellence de la plomberie et de la couverture à Paris. Dépannage et rénovation haut de gamme, par une maison du 16e arrondissement.
          </p>
          <div className="fade-in mt-10 max-lg:order-5" style={{ ["--d" as string]: "520ms" }}>
            <CtaButtons />
          </div>
          <dl className="fade-in mt-14 grid grid-cols-3 gap-4 border-t border-line pt-6 max-lg:order-6 lg:mt-16" style={{ ["--d" as string]: "700ms" }}>
            <div><dt className="label mb-3">Générations</dt><dd><Drums value="5" size="1.9rem" /></dd></div>
            <div><dt className="label mb-3">Avis Google</dt><dd><Drums value={String(reputation.reviews)} size="1.9rem" /></dd></div>
            <div><dt className="label mb-3">Note sur 5</dt><dd><Drums value={reputation.rating} size="1.9rem" decimals={1} /></dd></div>
          </dl>
        </div>
        <div className="fade-in hidden lg:col-span-5 lg:block" style={{ ["--d" as string]: "300ms" }}>
          <MeterFace />
        </div>
      </div>
    </section>
  );
}

function Band() {
  const photo = photoFor({ theme: "hero" });
  return (
    <section aria-label="Un chantier de l'entreprise" className="wrap pb-6">
      <figure>
        <div data-mask className="overflow-hidden rounded-[4px]">
          <Img photo={photo} className="aspect-[16/10] sm:aspect-[21/9]" imgClassName="slow-zoom" />
        </div>
        <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint"><span>{photo.alt}</span><span className="num">3, rue Gros · Paris XVIe</span></figcaption>
      </figure>
    </section>
  );
}

function Welcome() {
  return (
    <Folio n="01" rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{home.brief}</p>
      <p className="mt-8 max-w-2xl text-[1.02rem]">
        Pour une fuite, une toiture ou une chaudière, un seul numéro : le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>, joignable 24h/24.
      </p>
    </Folio>
  );
}

/** Le relevé du compteur : quatre lectures, chacune sur ses rouleaux. */
function Reading() {
  const rows = [
    { v: "1880", l: "Fondation de la maison Bastien", dec: 0 },
    { v: "1960", l: "Robert Bastien reprend la maison", dec: 0 },
    { v: String(reputation.reviews), l: "Avis sur la fiche Google", dec: 0 },
    { v: reputation.rating, l: "Note sur 5", dec: 1 },
  ];
  return (
    <Folio n="02" rubrique="Le relevé" labelledBy="titre-releve">
      <h2 id="titre-releve" className="h2 max-w-3xl" data-reveal>Cent quarante-six ans de relevés.</h2>
      <p className="mt-6 max-w-2xl" data-reveal>Cinq générations d&apos;artisans, deux maisons réunies en 2010, plus de 40 salariés aujourd&apos;hui : les chiffres de la maison se lisent comme ceux d&apos;un compteur.</p>
      <dl className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((r) => (
          <div key={r.l} className="border-t border-line pt-6">
            <dd className="mb-5"><Drums value={r.v} size="clamp(2.2rem, 5.6vw, 3.2rem)" decimals={r.dec} /></dd>
            <dt className="text-[0.95rem] text-ink-soft">{r.l}</dt>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-sm text-ink-faint">Dates reprises du site actuel de l&apos;entreprise ; <span className="num">{years}</span> ans depuis 1880.</p>
    </Folio>
  );
}

function Trades() {
  return (
    <Folio n="03" rubrique="Nos expertises" labelledBy="titre-expertises" tone="paper">
      <h2 id="titre-expertises" className="h2 max-w-3xl" data-reveal>Quatre expertises, un seul interlocuteur.</h2>
      <ul className="mt-12 border-t border-line">
        {trades.map((t, i) => (
          <li key={t.n} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="border-b border-line">
            <Link href={t.href} className="row-link grid grid-cols-[2.6rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-2 py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_2rem] md:gap-6 md:py-9">
              <span className="num pt-1 text-[0.9rem] text-accent">{t.n}</span>
              <span className="row-title text-[1.6rem] leading-tight text-ink transition sm:text-[2rem]">{t.title}</span>
              <span className="col-start-2 text-[0.98rem] md:col-start-auto md:pt-2">{t.text}</span>
              <ArrowIcon className="row-arrow col-start-3 row-start-1 mt-2 h-5 w-5 text-ink-faint md:col-start-auto md:row-start-auto" />
            </Link>
          </li>
        ))}
      </ul>
    </Folio>
  );
}

function Emergency() {
  return (
    <section data-folio="04" data-rubrique="Dépannage" aria-labelledby="titre-urgence" className="bg-accent py-20 text-white sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="label !text-white/70">Dépannage d&apos;urgence</p>
          <h2 id="titre-urgence" className="mt-5 text-[2.2rem] !text-white sm:text-[3.4rem]">Dépannage d&apos;urgence 24h/24.</h2>
          <p className="mt-6 max-w-xl text-white/80">Des compagnons de l&apos;entreprise, pas un centre d&apos;appels : intervention sous 2 heures en région parisienne, tarif forfaitaire annoncé à l&apos;avance, dimanches et jours fériés compris.</p>
        </div>
        <div className="lg:col-span-5">
          <a href={`tel:${business.phoneTel}`} className="num block whitespace-nowrap text-[2.4rem] tracking-tight text-white sm:text-[3.4rem]" data-track="cta_tel">{business.phoneDisplay}</a>
          <Link href={PATHS.emergency} className="mt-5 inline-flex items-center gap-3 text-white/85 underline decoration-white/40 underline-offset-8 transition hover:text-white">Les cas d&apos;intervention <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}

function Works() {
  const picks = ["quai-voltaire-notre-realisation", "plomberie-etoile", "hotel-opera-richepanse", "rue-danton"].map((s) => works.find((w) => w.slug === s)!);
  return (
    <Folio n="05" rubrique="Réalisations" labelledBy="titre-realisations">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titre-realisations" className="h2 max-w-3xl" data-reveal>Nos réalisations, votre futur confort.</h2>
        <Link href={PATHS.works} className="link-line text-sm">Découvrir toutes nos réalisations</Link>
      </div>
      <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {picks.map((w, i) => (
          <li key={w.slug} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
            <Link href={PATHS.works} className="row-link block">
              <Img photo={{ ...photoFor({ theme: w.trade.startsWith("Couv") ? "couverture" : "plomberie", n: i }) }} alt={`${w.title}, ${w.place}`} className="aspect-[4/3] rounded-[4px]" />
              <span className="mt-5 flex items-baseline justify-between gap-4"><span className="row-title text-[1.4rem] text-ink transition">{w.title}</span><span className="shrink-0 text-sm text-ink-faint">{w.place}</span></span>
              <span className="label mt-2 block">{w.trade}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Folio>
  );
}

function History() {
  return (
    <Folio n="06" rubrique="Notre histoire" labelledBy="titre-histoire" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="titre-histoire" className="h2" data-reveal>Cinq générations, deux maisons, une seule exigence.</h2>
          <div className="prose-mt mt-8" data-reveal>
            <p>Fondée en 1880 sous le nom Le Bey, l&apos;entreprise Bastien, spécialisée en couverture et plomberie, a traversé cinq générations de dirigeants : reprise par André Bastien dans les années 1930, puis par Robert Bastien en 1960, avant d&apos;être transmise à Édouard Bastien en 1997.</p>
            <p>De son côté, la société Trebulle, fondée en 1886 et également spécialisée en couverture et plomberie, était installée au 88, boulevard de Picpus à Paris. En 2010, Bastien rachète Trebulle et devient Bastien &amp; Trebulle.</p>
          </div>
          <Link href={PATHS.history} className="link-line mt-8 inline-block text-sm">Lire toute l&apos;histoire</Link>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-10 self-center lg:col-span-6">
          {[["1880", "Bastien"], ["1886", "Trebulle"], ["1997", "Édouard Bastien"], ["2010", "Bastien & Trebulle"]].map(([v, l]) => (
            <li key={v} data-reveal className="border-t border-line pt-5"><Drums value={v} size="clamp(1.9rem, 4.6vw, 2.6rem)" /><p className="mt-4 text-sm text-ink-soft">{l}</p></li>
          ))}
        </ul>
      </div>
    </Folio>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(homeFaq)];
  return (
    <>
      <Hero />
      <Band />
      <Welcome />
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
