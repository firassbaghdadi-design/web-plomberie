import Link from "next/link";
import { Feuillet } from "@/components/Feuillet";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { IssueNumber, LetterDate } from "@/components/LetterDate";
import { CtaBand, FaqList, LocalBlock, Photo, contactHref, fr } from "@/components/Sections";
import { Tampon } from "@/components/Tampon";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const years = new Date().getFullYear() - 1957;

/** La une du jour : titre du journal, ligne de date, manchette (métier + zone), chapeau, puis la très grande photo. */
function Hero() {
  return (
    <section className="relative">
      <div className="wrap pt-5 sm:pt-7">
        {/* Le titre du journal, entre ses deux « oreilles » */}
        <div className="fade-in grid items-end gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <p className="hidden text-[0.66rem] uppercase leading-[1.7] tracking-[0.2em] text-ink-faint lg:block">
            Couverture · Plomberie<br />Fumisterie · Chauffage central
          </p>
          <p className="text-center leading-none">
            <span className="smallcaps block text-[0.58rem] text-ink-faint sm:text-[0.66rem]">Anciens Établissements</span>
            <span className="mt-1 block font-serif text-[2.3rem] tracking-[-0.01em] text-ink sm:text-[3.2rem] lg:text-[3.5rem]">Kuschnick</span>
          </p>
          <p className="hidden text-right text-[0.66rem] uppercase leading-[1.7] tracking-[0.2em] text-ink-faint lg:block">
            Maison fondée en 1957<br />{business.address.street}, Paris XIe
          </p>
        </div>
        <div className="rule-double mt-3 sm:mt-4" />
        <p className="fade-in flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink py-2 text-[0.7rem] text-ink-faint sm:text-[0.74rem]">
          <LetterDate weekday className="text-ink-soft" />
          <span className="hidden uppercase tracking-[0.22em] md:inline">Édition du XIe arrondissement</span>
          <IssueNumber />
        </p>

        {/* La manchette */}
        <h1 className="mt-5 whitespace-nowrap text-[2.72rem] leading-[1] tracking-[-0.025em] sm:mt-7 sm:text-[5.6rem] lg:text-[clamp(4.4rem,6.85vw,7.6rem)]">
          <span className="line-up lg:inline-block lg:align-bottom"><span>Plombier couvreur</span></span>{" "}
          <span className="line-up lg:inline-block lg:align-bottom"><span className="italic text-copper" style={{ ["--d" as string]: "150ms" }}>à Paris 11e</span></span>
        </h1>

        <div className="mt-5 grid gap-6 border-t border-line pt-5 sm:mt-6 lg:grid-cols-12 lg:gap-0">
          <p className="chapeau fade-in max-w-[40rem] max-sm:text-[1.14rem] lg:col-span-7 lg:pr-12" style={{ ["--d" as string]: "380ms" }}>
            La plomberie, le toit, le chauffage et les conduits de votre immeuble, confiés à une maison du faubourg Saint-Antoine depuis 1957.
          </p>
          <div className="fade-in flex flex-wrap items-center gap-x-8 gap-y-4 max-sm:hidden lg:col-span-5 lg:border-l lg:border-line lg:pl-12" style={{ ["--d" as string]: "520ms" }}>
            <Link href={contactHref()} className="btn-primary" data-track="cta_devis">
              Demander un devis ou une intervention <ArrowIcon />
            </Link>
            <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
              <span className="label">Tél.</span>
              <span className="num whitespace-nowrap font-serif text-[1.55rem] text-ink transition group-hover:text-copper-deep">{business.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* La grande photo de la une */}
        <figure className="relative mt-6 sm:mt-8">
          <div className="overflow-hidden">
            <Img id="une" alt={photoAlt("une")} priority position="50% 62%" className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]" imgClassName="archive-to-color" />
          </div>
          <div className="pointer-events-none absolute -top-10 right-3 sm:-top-12 sm:right-8">
            <Tampon className="h-20 w-20 drop-shadow-sm sm:h-28 sm:w-28" />
          </div>
          <figcaption className="caption mt-2.5 flex items-baseline justify-between gap-6 border-b border-line pb-2.5">
            <span><b>Paris 11e.</b> Zinc, ardoise et souches de cheminée : les toits que la maison entretient depuis 1957.</span>
            <span className="num hidden shrink-0 sm:inline">48°51′ N · 2°23′ E</span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 border-b border-ink">
          {[["Fondée en", "1957"], ["Ancienneté", `${years} ans`], ["Métiers", "4"]].map(([k, v], i) => (
            <div key={k} className={`py-5 ${i ? "border-l border-line pl-4 sm:pl-8" : ""}`}>
              <dt className="label">{k}</dt>
              <dd className="num mt-1 font-serif text-[1.8rem] leading-none text-ink sm:text-[2.6rem]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <Feuillet n="01" rubrique="À la une" ariaLabel="En bref">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7 lg:pr-12">
          <p className="reponse-bref chapeau dropcap">{home.brief}</p>
          <p className="mt-8 max-w-2xl border-t border-line pt-5 text-[1.02rem]">
            Pour une fuite, un toit, un radiateur ou une souche de cheminée, un seul numéro : le{" "}
            <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
          </p>
        </div>
        <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
          <Photo id="atelier" className="aspect-[4/5]" caption={<><b>À l&apos;atelier.</b> Le travail d&apos;atelier, le geste juste.</>} />
        </div>
      </div>
    </Feuillet>
  );
}

const tradePhoto: Record<string, string> = { "01": "tuyaux", "02": "couvreur", "03": "radiateur", "04": "cheminees" };

/** Les quatre métiers, en quatre colonnes de journal : photo, référence, titre, chapeau, lecteurs concernés. */
function Trades() {
  return (
    <Feuillet n="02" rubrique="Désignation des travaux" labelledBy="titre-metiers">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titre-metiers" className="h2 max-w-3xl" data-reveal>Quatre métiers, un seul en-tête.</h2>
        <p className="max-w-md text-[0.98rem]" data-reveal>Les métiers déclarés par la maison depuis sa fondation : ceux qui font tenir un immeuble parisien, de la cave au faîtage.</p>
      </div>
      <div className="mt-12 border-t border-ink">
      <ul className="grid sm:-mx-5 sm:grid-cols-2 xl:-mx-6 xl:grid-cols-4">
        {trades.map((t, i) => (
          <li key={t.n} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className={`border-b border-line pt-6 sm:px-5 sm:pb-8 xl:border-b-0 xl:px-6 ${i % 2 ? "sm:border-l" : ""} ${i === 2 ? "xl:border-l" : ""}`}>
            <Link href={t.href} className="row-link photo-hover group block pb-8 sm:pb-0">
              <div data-ink="" className="overflow-hidden">
                <Img id={tradePhoto[t.n]} alt={photoAlt(tradePhoto[t.n])} className="aspect-[4/3] xl:aspect-[4/5]" imgClassName="transition-transform duration-[1.6s]" />
              </div>
              <p className="mt-5 flex items-baseline justify-between">
                <span className="kicker">Réf. {t.n}</span>
                <ArrowIcon className="row-arrow h-4 w-4 text-ink-faint" />
              </p>
              <h3 className="row-title mt-2 text-[1.9rem] leading-tight sm:text-[2.1rem]">{t.title}</h3>
              <p className="mt-3 text-[0.98rem]">{t.text}</p>
              <p className="mt-4 border-t border-line pt-3 text-[0.8rem] text-ink-faint"><span className="font-semibold uppercase tracking-[0.14em]">Pour</span> · {t.who}</p>
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <p className="mt-4 flex justify-between text-[0.78rem] text-ink-faint">
        <span>Devis gratuit sur demande</span>
        <span className="num">Paris 11e et voisins</span>
      </p>
    </Feuillet>
  );
}

/** Le grand reportage : les toits de zinc du 11e, bord à bord, en noir et blanc puis en couleur. */
function Spread() {
  return (
    <section aria-label="Reportage : les toits de Paris" className="relative pt-4">
      <div data-ink="" className="overflow-hidden">
        <Img id="panorama" alt={photoAlt("panorama")} className="aspect-[4/5] sm:aspect-[16/8] lg:aspect-[21/8]" position="50% 55%" />
      </div>
      <div className="wrap">
        <div className="grid gap-6 border-b border-ink py-6 lg:grid-cols-12 lg:gap-0">
          <p className="kicker lg:col-span-2">Reportage</p>
          <p className="font-serif text-[1.6rem] italic leading-snug text-ink sm:text-[2.1rem] lg:col-span-7 lg:pr-12">« De la cave au faîtage : les quatre métiers de l&apos;immeuble parisien. »</p>
          <p className="caption self-end lg:col-span-3 lg:border-l lg:border-line lg:pl-8">Zinc, ardoise, souches de cheminée et lucarnes : le paysage de travail de la maison depuis 1957. Photo Pexels.</p>
        </div>
      </div>
    </section>
  );
}

/** La maison : un article d'histoire, avec l'encadré du registre et ses points de conduite. */
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
    <Feuillet n="03" rubrique="La maison" labelledBy="titre-maison">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7 lg:pr-12">
          <div className="num font-serif text-[6rem] italic leading-[0.8] tracking-[-0.03em] text-copper sm:text-[10rem]" aria-hidden="true">1957</div>
          <h2 id="titre-maison" className="h2 mt-8" data-reveal>Une maison du faubourg, depuis {years} ans.</h2>
          <p className="dropcap mt-7 max-w-xl" data-reveal>
            « Anciens Établissements » : la formule des maisons qui prolongent l&apos;œuvre d&apos;un fondateur en gardant son nom. On la lisait peinte au-dessus des devantures du faubourg Saint-Antoine, le quartier des artisans de Paris.
          </p>
          <aside className="mt-10 max-w-xl border border-ink p-5 sm:p-7">
            <p className="kicker">Au registre</p>
            <dl className="mt-3">
              {rows.map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3 py-2">
                  <dt className="shrink-0 text-ink-faint">{k}</dt>
                  <span className="mb-[0.3em] h-px flex-1 border-b border-dotted border-perf" aria-hidden="true" />
                  <dd className="num shrink-0 font-serif text-[1.08rem] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <Link href={PATHS.house} className="link-line mt-10 text-[0.95rem]">L&apos;histoire de la maison <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12">
          <Photo id="cle" className="aspect-[4/5]" caption={<><b>L&apos;établi.</b> L&apos;outil du métier, sur l&apos;établi.</>} />
          <div className="mt-8">
            <Photo id="toits" className="aspect-[16/10]" caption={<><b>Au crépuscule.</b> Les souches du quartier.</>} />
          </div>
        </div>
      </div>
    </Feuillet>
  );
}

/** Les quartiers : le sommaire des éditions locales, arrondissement par arrondissement. */
function Quarters() {
  const rows = [
    { zone: "11e", text: "Le quartier de la maison : faubourg Saint-Antoine, Charonne, Bastille, Voltaire.", href: PATHS.plumbing, label: "Plombier Paris 11e" },
    ...localPages.map((p) => ({ zone: p.zone!.replace("Paris ", ""), text: p.lead.split(":")[0].split(".")[0], href: p.path, label: p.crumb })),
  ];
  return (
    <Feuillet n="04" rubrique="Éditions de quartier" labelledBy="titre-quartiers" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-5 lg:pr-12">
          <h2 id="titre-quartiers" className="h2" data-reveal>Le 11e, et les arrondissements voisins.</h2>
          <p className="mt-6 max-w-md" data-reveal>Depuis la rue Trousseau, le faubourg Saint-Antoine ouvre sur le 12e, la rue de Charonne mène au 20e, la Bastille au Marais et le canal au 10e.</p>
          <div className="mt-10 hidden lg:block">
            <Photo id="une" className="aspect-[4/5]" position="50% 50%" caption={<><b>Vu des toits.</b> Le faubourg, quartier des artisans de Paris.</>} />
          </div>
        </div>
        <ul className="self-start border-t border-ink lg:col-span-7 lg:border-l lg:border-t-0 lg:border-line lg:pl-12">
          {rows.map((r, i) => (
            <li key={r.href} className="border-b border-line" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={r.href} className="index-row row-link grid grid-cols-[4.4rem_minmax(0,1fr)_1.25rem] items-baseline gap-4 py-6 sm:grid-cols-[6.5rem_minmax(0,1fr)_1.25rem]">
                <span className="num font-serif text-[2.3rem] italic leading-none text-copper sm:text-[3rem]">{r.zone}</span>
                <span className="row-title block">
                  <span className="block font-serif text-[1.2rem] text-ink">{r.label}</span>
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
      <Spread />
      <House />
      <Quarters />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" n="05" />
      <LocalBlock n="06" />
      <CtaBand title={fr("Votre immeuble mérite une maison de métier.")} text="Une fuite, un toit, un radiateur, un conduit : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
