import Link from "next/link";
import { Feuillet } from "@/components/Feuillet";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { LetterDate } from "@/components/LetterDate";
import { CtaBand, FaqList, LocalBlock, contactHref, fr } from "@/components/Sections";
import { Tampon } from "@/components/Tampon";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const years = new Date().getFullYear() - 1957;

function Hero() {
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-8 sm:pt-12 lg:min-h-[calc(100svh-var(--head-h))] lg:grid-cols-12 lg:gap-x-14 lg:pb-14 lg:pt-10">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          {/* L'en-tête de lettre de la maison */}
          <div className="fade-in max-lg:order-1">
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
              <p className="leading-none">
                <span className="smallcaps block text-[0.62rem] text-ink-faint sm:text-[0.7rem]">Anciens Établissements</span>
                <span className="mt-2 block text-[1.45rem] font-extralight tracking-[0.14em] text-ink sm:text-[2.1rem]">KUSCHNICK</span>
              </p>
              <p className="text-[0.6rem] uppercase leading-[1.75] tracking-[0.16em] text-ink-faint sm:text-right sm:text-[0.7rem] sm:tracking-[0.2em]">
                Couverture · Plomberie<br className="max-sm:hidden" /><span className="sm:hidden"> · </span>Fumisterie · Chauffage central
              </p>
            </div>
            <div className="rule-double mt-4" />
            <p className="mt-5 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[0.8rem] text-ink-faint">
              <span>Maison fondée en 1957 · {business.address.street}, Paris XIe</span>
              <LetterDate className="text-ink-soft" />
            </p>
          </div>

          <h1 className="mt-10 text-[2.85rem] max-lg:order-2 font-light leading-[0.96] tracking-[-0.05em] sm:mt-16 sm:text-[4.9rem] lg:mt-auto lg:pt-14 lg:text-[clamp(4rem,6.1vw,6.4rem)]">
            <span className="line-up"><span>Plombier couvreur</span></span>
            <span className="line-up"><span className="text-copper" style={{ ["--d" as string]: "150ms" }}>à Paris 11e</span></span>
          </h1>

          <p className="fade-in mt-14 max-w-[36rem] max-lg:order-4 lg:mt-9 text-[1.1rem] leading-relaxed sm:text-[1.2rem]" style={{ ["--d" as string]: "380ms" }}>
            <span className="smallcaps mr-2 text-[0.68rem] text-copper">Objet :</span>
            la plomberie, le toit, le chauffage et les conduits de votre immeuble, confiés à une maison du faubourg Saint-Antoine depuis 1957.
          </p>

          <div className="fade-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 max-lg:order-5" style={{ ["--d" as string]: "520ms" }}>
            <Link href={contactHref()} className="btn-primary" data-track="cta_devis">
              Demander un devis ou une intervention <ArrowIcon />
            </Link>
            <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
              <span className="label">Tél.</span>
              <span className="num whitespace-nowrap text-[1.4rem] font-light tracking-tight text-ink transition group-hover:text-copper-deep">{business.phoneDisplay}</span>
            </a>
          </div>

          <dl className="fade-in mt-14 grid grid-cols-3 border-t border-line max-lg:order-6 lg:mt-16" style={{ ["--d" as string]: "700ms" }}>
            <div className="pr-3 pt-5"><dt className="label">Fondée en</dt><dd className="num mt-1.5 text-[1.5rem] font-extralight leading-none text-ink sm:text-[2.1rem]">1957</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Ancienneté</dt><dd className="num mt-1.5 text-[1.5rem] font-extralight leading-none text-ink sm:text-[2.1rem]">{years} ans</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Métiers</dt><dd className="num mt-1.5 text-[1.5rem] font-extralight leading-none text-ink sm:text-[2.1rem]">4</dd></div>
          </dl>
        </div>

        <figure className="relative mt-10 max-lg:order-3 lg:col-span-5 lg:mt-0">
          <div data-mask className="h-full overflow-hidden rounded-[3px]">
            <Img id="toits" alt={photoAlt("toits")} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[36rem]" imgClassName="archive-to-color" />
          </div>
          <div className="absolute -bottom-9 left-4 sm:-bottom-10 lg:-left-12 lg:bottom-16">
            <Tampon className="h-24 w-24 drop-shadow-sm sm:h-28 sm:w-28" />
          </div>
          <figcaption className="mt-3 flex justify-end gap-4 text-[0.78rem] text-ink-faint lg:justify-between">
            <span className="hidden lg:inline">Couverture, fumisterie : les souches et les toits</span>
            <span className="num">48°51′ N · 2°23′ E</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <Feuillet n="01" rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{home.brief}</p>
      <p className="mt-8 max-w-2xl text-[1.02rem]">
        Pour une fuite, un toit, un radiateur ou une souche de cheminée, un seul numéro : le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
      </p>
    </Feuillet>
  );
}

/** Les quatre métiers, en tableau de facture d'époque : « Réf. — Désignation des travaux — Pour qui ». */
function Trades() {
  return (
    <Feuillet n="02" rubrique="Désignation des travaux" labelledBy="titre-metiers">
      <h2 id="titre-metiers" className="h2 max-w-3xl" data-reveal>Quatre métiers, un seul en-tête.</h2>
      <p className="mt-6 max-w-2xl" data-reveal>Les métiers déclarés par la maison depuis sa fondation : ceux qui font tenir un immeuble parisien, de la cave au faîtage.</p>
      <div className="mt-12">
        <div className="rule-double" />
        <div className="hidden grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_2rem] gap-6 py-3 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-ink-faint md:grid">
          <span>Réf.</span><span>Désignation</span><span>Détail des travaux</span><span>Pour</span><span />
        </div>
        <ul className="border-t border-line">
          {trades.map((t, i) => (
            <li key={t.n} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="border-b border-line">
              <Link href={t.href} className="facture-row row-link grid grid-cols-[3rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-2 py-7 md:grid-cols-[4.5rem_minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_2rem] md:gap-6 md:py-8">
                <span className="num pt-1 text-[0.9rem] text-copper">{t.n}</span>
                <span className="row-title text-[1.55rem] font-light leading-tight text-ink sm:text-[1.9rem]">{t.title}</span>
                <span className="col-start-2 text-[0.98rem] md:col-start-auto md:pt-1.5">{t.text}</span>
                <span className="col-start-2 text-[0.85rem] text-ink-faint md:col-start-auto md:pt-2">{t.who}</span>
                <ArrowIcon className="row-arrow col-start-3 row-start-1 mt-2 h-5 w-5 text-ink-faint md:col-start-auto md:row-start-auto" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between text-[0.8rem] text-ink-faint">
          <span>Devis gratuit sur demande</span>
          <span className="num">Paris 11e et voisins</span>
        </p>
      </div>
    </Feuillet>
  );
}

/** La maison : les faits du registre, présentés comme le pied d'une facture, avec points de conduite. */
function House() {
  const rows = [
    ["Fondée en", "1957"],
    ["Ancienneté", `${years} ans`],
    ["Forme", "Société anonyme"],
    ["Capital", "121 800 €"],
    ["Équipe", "10 à 19 salariés"],
    ["Siège", "54, rue Trousseau"],
  ];
  return (
    <Feuillet n="03" rubrique="La maison" labelledBy="titre-maison" tone="paper">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <div className="num text-[5.5rem] font-extralight leading-[0.85] tracking-[-0.06em] text-copper sm:text-[8.5rem]" aria-hidden="true">
            1957
          </div>
          <h2 id="titre-maison" className="h2 mt-8" data-reveal>Une maison du faubourg, depuis {years} ans.</h2>
          <p className="mt-6 max-w-xl" data-reveal>
            « Anciens Établissements » : la formule des maisons qui prolongent l&apos;œuvre d&apos;un fondateur en gardant son nom. On la lisait peinte au-dessus des devantures du faubourg Saint-Antoine, le quartier des artisans de Paris.
          </p>
          <dl className="mt-10 max-w-xl">
            {rows.map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-3 py-2.5">
                <dt className="shrink-0 text-ink-faint">{k}</dt>
                <span className="mb-[0.3em] h-px flex-1 border-b border-dotted border-perf" aria-hidden="true" />
                <dd className="num shrink-0 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <Link href={PATHS.house} className="link-line mt-10 text-[0.95rem]">L&apos;histoire de la maison <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
        <figure className="xl:col-span-5 xl:col-start-8">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id="cle" alt={photoAlt("cle")} className="aspect-[4/5]" />
          </div>
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">L&apos;outil du métier, sur l&apos;établi</figcaption>
        </figure>
      </div>
    </Feuillet>
  );
}

function Quarters() {
  const rows = [
    { zone: "11e", text: "Le quartier de la maison : faubourg Saint-Antoine, Charonne, Bastille, Voltaire.", href: PATHS.plumbing, label: "Plombier Paris 11e" },
    ...localPages.map((p) => ({ zone: p.zone!.replace("Paris ", ""), text: p.lead.split(":")[0].split(".")[0], href: p.path, label: p.crumb })),
  ];
  return (
    <Feuillet n="04" rubrique="Quartiers" labelledBy="titre-quartiers">
      <div className="grid gap-12 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <h2 id="titre-quartiers" className="h2" data-reveal>Le 11e, et les arrondissements voisins.</h2>
          <p className="mt-6 max-w-md" data-reveal>Depuis la rue Trousseau, le faubourg Saint-Antoine ouvre sur le 12e, la rue de Charonne mène au 20e, la Bastille au Marais et le canal au 10e.</p>
          <figure className="mt-12 hidden xl:block">
            <div data-mask className="overflow-hidden rounded-[3px]">
              <Img id="atelier" alt={photoAlt("atelier")} className="aspect-[5/4]" />
            </div>
            <figcaption className="mt-3 text-[0.78rem] text-ink-faint">Le faubourg, quartier des artisans de Paris</figcaption>
          </figure>
        </div>
        <ul className="self-start border-t border-line xl:col-span-7">
          {rows.map((r, i) => (
            <li key={r.href} className="border-b border-line" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={r.href} className="row-link grid grid-cols-[4.2rem_minmax(0,1fr)_1.25rem] items-baseline gap-4 py-6 sm:grid-cols-[6rem_minmax(0,1fr)_1.25rem]">
                <span className="num text-[2rem] font-extralight leading-none tracking-tight text-ink sm:text-[2.6rem]">{r.zone}</span>
                <span className="row-title block">
                  <span className="block text-[1.05rem] text-ink">{r.label}</span>
                  <span className="mt-1 block text-[0.92rem] text-ink-faint">{r.text}</span>
                </span>
                <ArrowIcon className="row-arrow h-4 w-4 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Feuillet>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Trades />
      <House />
      <Quarters />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" n="05" />
      <LocalBlock n="06" />
      <CtaBand title={fr("Votre immeuble mérite une maison de métier.")} text="Une fuite, un toit, un radiateur, un conduit : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
