import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { CtaBand, FaqList, LocalBlock, contactHref, fr } from "@/components/Sections";
import { Scale } from "@/components/Thermostat";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

/**
 * Le héros est une affiche suisse : une bande d'informations, le titre en grotesque géante, une petite photo serrée,
 * puis l'échelle des températures, de 16 à 21, chaque chiffre plus grand que le précédent : la chaleur qui monte.
 */
function Hero() {
  const strip = ["Plomberie · Chauffage", "Paris 20e · 75020", "1, villa Gagliardini · depuis 2007", "48°52′ N · 2°24′ E"];
  return (
    <section className="relative">
      <div className="wrap flex flex-col lg:min-h-[calc(100svh-var(--head-h))]">
        <ul className="cols gap-y-1 border-b border-ink py-2.5 lg:py-3">
          {strip.map((s, i) => (
            <li key={s} className={`fade-in meta col-span-2 md:col-span-3 ${i > 1 ? "max-md:text-ink-faint" : ""} ${i === 3 ? "lg:text-right" : ""}`} style={{ ["--d" as string]: `${i * 60}ms` }}>{s}</li>
          ))}
        </ul>

        <div className="cols items-start pt-6 lg:pt-8">
          <h1 className="col-span-4 text-[13.2vw] leading-[0.9] tracking-[-0.06em] md:col-span-6 md:text-[9.6vw] lg:col-span-10 lg:text-[clamp(4.4rem,7.6vw,8rem)]">
            <span className="rise"><span>Plombier chauffagiste</span></span>
            <span className="rise"><span style={{ ["--d" as string]: "120ms" }}>à Paris 20e</span></span>
          </h1>
          <figure className="fade-in col-span-1 row-start-2 mt-7 md:col-span-1 lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:mt-2" style={{ ["--d" as string]: "500ms" }}>
            <Img id="plombier" alt={photoAlt("plombier")} priority className="aspect-square" position="50% 40%" />
            <figcaption className="meta-faint mt-1.5 hidden lg:block">Fig. 1 — Le cuivre, à la main</figcaption>
          </figure>
          <p className="fade-in col-span-3 row-start-2 mt-7 text-[1.02rem] leading-snug md:col-span-3 lg:col-span-4 lg:row-start-2 lg:mt-10 lg:text-[1.22rem]" style={{ ["--d" as string]: "420ms" }}>
            {fr("De la fuite au radiateur, du dépannage au confort : une entreprise de quartier, installée près de la porte des Lilas.")}
          </p>
          <div className="fade-in col-span-4 mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 md:col-span-6 lg:col-span-6 lg:col-start-6 lg:row-start-2 lg:mt-10" style={{ ["--d" as string]: "560ms" }}>
            <Link href={contactHref()} className="btn-primary max-sm:w-full" data-track="cta_devis">
              Demander un devis ou une intervention <ArrowIcon />
            </Link>
            <a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.5rem] font-semibold tracking-[-0.045em] transition-colors hover:text-heat-deep" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-auto lg:pt-10">
          <Scale />
        </div>
      </div>
    </section>
  );
}

/** En-tête de section pleine largeur : le filet épais, la température et la rubrique sur une ligne. */
function Head({ t, rubrique, light = false }: { t: string; rubrique: string; light?: boolean }) {
  return (
    <>
      <div className={`h-[3px] ${light ? "bg-white" : "bg-ink"}`} aria-hidden="true" />
      <p className={`meta flex justify-between pt-2.5 ${light ? "text-white/70" : "text-ink-faint"}`}>
        <span className="num"><span className={light ? "text-white" : "text-ink"}>{t}</span><span className="deg">°</span></span>
        <span>{rubrique}</span>
      </p>
    </>
  );
}

function Welcome() {
  return (
    <Section t="16,0" rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-[54rem]">{home.brief}</p>
      <p className="mt-8 max-w-[36rem] text-ink-soft">
        Pour une fuite, un évier bouché, un radiateur froid ou une chaudière à entretenir, un seul numéro : le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
      </p>
    </Section>
  );
}

/** Du dépannage au confort : un tableau d'affiche, chaque ligne porte son degré en très grand. */
function Trades() {
  return (
    <section aria-labelledby="titre-metiers" className="bg-white">
      <div className="wrap pb-20 sm:pb-28">
        <Head t="17,0" rubrique="Du dépannage au confort" />
        <div className="cols mt-8 lg:mt-10">
          <h2 id="titre-metiers" className="h2 col-span-4 md:col-span-6 lg:col-span-7" data-reveal>Deux métiers, de 16° à 21°.</h2>
          <p className="col-span-4 mt-6 text-ink-soft md:col-span-4 lg:col-span-4 lg:col-start-9 lg:mt-2" data-reveal>On commence par ce qui presse, une fuite ou un évier bouché, et on finit par ce qui rend un logement agréable : des radiateurs qui chauffent partout et une chaudière suivie.</p>
        </div>
        <ul className="mt-12 border-t-2 border-ink">
          {trades.map((t) => (
            <li key={t.n} className="border-b border-ink/25">
              <Link href={t.href} className="row-invert cols items-end py-4 lg:py-5">
                <span className="giant col-span-2 text-[4.6rem] md:col-span-2 lg:col-span-3 lg:text-[clamp(6rem,8.6vw,9rem)]">
                  {t.n.replace("°", "")}<span className="deg">°</span>
                </span>
                <span className="row-ink col-span-2 pb-1 text-[1.3rem] font-semibold leading-[1.05] tracking-[-0.035em] md:col-span-3 lg:col-span-4 lg:text-[2.1rem]">{t.title}</span>
                <span className="col-span-4 mt-3 md:col-span-5 md:col-start-3 lg:col-span-4 lg:mt-0 lg:pb-1.5">
                  <span className="row-soft block text-[0.98rem] text-ink-soft">{t.text}</span>
                  <span className="meta-faint row-soft mt-1 block">{t.who}</span>
                </span>
                <span className="col-span-1 hidden justify-end pb-2 lg:flex"><ArrowIcon className="row-arrow h-7 w-7" /></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="meta-faint mt-3 flex justify-between">
          <span>Devis gratuit sur demande</span>
          <span className="num">Paris 20e et voisins</span>
        </p>
      </div>
    </section>
  );
}

/** L'entreprise, sur noir : les faits du registre en chiffres forts. */
function House() {
  const figures = [
    { big: "2007", label: "Fondée en" },
    { big: "10–19", label: "Salariés, selon le registre" },
    { big: "1", label: "Villa Gagliardini, l'atelier" },
    { big: "2", label: "Métiers : l'eau et la chaleur" },
  ];
  const rows = [
    ["Forme", "Société à responsabilité limitée"],
    ["Registre", "RCS Paris 494 580 095"],
  ];
  return (
    <section aria-labelledby="titre-maison" className="bg-ink text-white">
      <div className="wrap pb-20 pt-0 sm:pb-28">
        <Head t="18,0" rubrique="L'entreprise" light />
        <div className="cols mt-8 lg:mt-10">
          <h2 id="titre-maison" className="h2 col-span-4 !text-white md:col-span-6 lg:col-span-7" data-reveal>Une entreprise du 20e, depuis 2007.</h2>
          <p className="col-span-4 mt-6 text-white/75 md:col-span-4 lg:col-span-4 lg:col-start-9 lg:mt-2" data-reveal>
            DBP Plomberie-Chauffage est installée villa Gagliardini, une petite voie privée proche de la porte des Lilas. L&apos;entreprise y rassemble une équipe de dix à dix-neuf personnes, selon le registre public, pour deux métiers qui vont ensemble : l&apos;eau et la chaleur.
          </p>
        </div>
        <dl className="cols mt-14 gap-y-10">
          {figures.map((f, i) => (
            <div key={f.label} className="col-span-2 flex flex-col-reverse justify-end border-t border-white/40 pt-3 md:col-span-3" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <dt className="meta mt-4 text-white/70">{f.label}</dt>
              <dd className="giant text-[3.6rem] sm:text-[5rem] lg:text-[clamp(5rem,7.4vw,8rem)]">{f.big}</dd>
            </div>
          ))}
        </dl>
        <div className="cols mt-14 items-end">
          <figure className="col-span-2 md:col-span-2 lg:col-span-2">
            <Img id="cle" alt={photoAlt("cle")} className="aspect-[4/5]" position="50% 50%" />
            <figcaption className="meta mt-2 text-white/60">Fig. 2 — Une clé, un raccord</figcaption>
          </figure>
          <div className="col-span-4 mt-8 md:col-span-4 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <dl className="border-t border-white/40">
              {rows.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/20 py-2.5">
                  <dt className="meta text-white/60">{k}</dt>
                  <dd className="num text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="meta mt-5 text-white/60">
              Note de {business.rating.value}/5 sur <a href={business.googleUrl} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-heat">Google</a> ({business.rating.count} avis, relevé d&apos;{business.rating.date}).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Le confort, à 19° : les chiffres du réglage, en grand. */
function Comfort() {
  const figs = [
    { big: "19", unit: "°", label: "Pièces de vie" },
    { big: "16–17", unit: "°", label: "Chambres" },
    { big: "−7", unit: " %", label: "D'énergie par degré en moins, selon l'ADEME" },
  ];
  return (
    <Section t="19,0" rubrique="Le confort" labelledBy="titre-confort">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_9rem] lg:grid-cols-[minmax(0,1fr)_12rem]">
        <div>
          <h2 id="titre-confort" className="h2 max-w-[44rem]" data-reveal>Puis le chauffage, pour que ça tienne.</h2>
          <p className="mt-6 max-w-[38rem] text-ink-soft" data-reveal>Un radiateur purgé, un robinet thermostatique, une chaudière entretenue chaque année : le confort tient à ces détails. Chaque degré de moins sur la consigne économise environ 7 % d&apos;énergie, selon l&apos;ADEME.</p>
        </div>
        <figure className="w-28 md:w-auto">
          <Img id="thermostat" alt={photoAlt("thermostat")} className="aspect-square" position="50% 50%" />
          <figcaption className="meta-faint mt-1.5">Fig. 3 — La consigne</figcaption>
        </figure>
      </div>
      <dl className="mt-12 grid gap-y-8 border-t-2 border-ink sm:grid-cols-3">
        {figs.map((f, i) => (
          <div key={f.label} className="flex flex-col-reverse justify-end pt-3 sm:pr-6" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
            <dt className="meta mt-3 text-ink-faint">{f.label}</dt>
            <dd className="giant text-[4.4rem] sm:text-[4rem] lg:text-[clamp(4.6rem,6vw,6.6rem)]">{f.big}<span className={f.unit === "°" ? "deg" : "text-[0.5em] tracking-[-0.03em]"}>{f.unit}</span></dd>
          </div>
        ))}
      </dl>
      <Link href={PATHS.heating} className="link-line mt-10 text-[1rem]">Le chauffage à Paris 20e <ArrowIcon className="h-3.5 w-3.5" /></Link>
    </Section>
  );
}

const CODES: Record<string, string> = { "Paris 19e": "75019", "Paris 11e": "75011", "Les Lilas": "93260", "Le Pré-Saint-Gervais": "93310", Bagnolet: "93170" };

/** Les quartiers : une planche de six cases, chacune son code postal en très grand. */
function Quarters() {
  const tiles = [
    { code: "75020", text: "Le quartier de l'atelier : Belleville, Gambetta, Saint-Fargeau, la porte des Lilas.", href: PATHS.plumbing, label: "Plombier Paris 20e" },
    ...localPages.map((p) => ({ code: CODES[p.zone!] ?? "", text: p.lead.split(":")[0].split(".")[0], href: p.path, label: p.crumb })),
  ];
  return (
    <section aria-labelledby="titre-quartiers" className="bg-white">
      <div className="wrap pb-20 sm:pb-28">
        <Head t="20,0" rubrique="Quartiers" />
        <div className="cols mt-8 items-end lg:mt-10">
          <h2 id="titre-quartiers" className="h2 col-span-4 md:col-span-6 lg:col-span-6" data-reveal>Le 20e, et les voisins.</h2>
          <p className="col-span-3 mt-6 text-ink-soft md:col-span-4 lg:col-span-4 lg:col-start-7 lg:mt-0" data-reveal>De la porte des Lilas, le 19e et le 11e sont à quelques stations, Les Lilas, Le Pré-Saint-Gervais et Bagnolet de l&apos;autre côté du périphérique.</p>
          <figure className="col-span-1 mt-6 md:col-span-2 lg:col-span-2 lg:mt-0">
            <Img id="immeuble" alt={photoAlt("immeuble")} className="aspect-[3/4]" position="50% 30%" />
            <figcaption className="meta-faint mt-1.5 hidden md:block">Fig. 4 — Un angle parisien</figcaption>
          </figure>
        </div>
        <ul className="cols mt-12 gap-y-0">
          {tiles.map((r) => (
            <li key={r.href} className="col-span-4 md:col-span-3 lg:col-span-4">
              <Link href={r.href} className="cell-link block border-t-2 border-ink pb-10 pt-3">
                <span className="flex items-start justify-between">
                  <span className="cell-big giant block text-[clamp(4.4rem,22vw,5.6rem)] md:text-[clamp(4rem,9vw,6.4rem)] lg:text-[clamp(5rem,6.6vw,7rem)]">{r.code}</span>
                  <ArrowIcon className="cell-arrow mt-1 h-6 w-6 -rotate-45" />
                </span>
                <span className="mt-4 block text-[1.2rem] font-semibold tracking-[-0.025em]">{r.label}</span>
                <span className="mt-1 block max-w-[24rem] text-[0.95rem] text-ink-soft">{r.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Trades />
      <House />
      <Comfort />
      <Quarters />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" t="20,5" />
      <LocalBlock t="20,8" />
      <CtaBand title={fr("Du dépannage au confort : parlons de votre logement.")} text="Une fuite, un radiateur, une chaudière : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
