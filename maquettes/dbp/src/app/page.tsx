import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { CtaBand, FaqList, LocalBlock, contactHref, fr } from "@/components/Sections";
import { Dial } from "@/components/Thermostat";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

function Hero() {
  return (
    <section className="relative">
      <div className="wrap grid pb-20 pt-8 sm:pt-12 lg:min-h-[calc(100svh-var(--head-h))] lg:grid-cols-12 lg:gap-x-14 lg:pb-16 lg:pt-10">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <p className="fade-in label max-lg:order-1">Paris 20e · villa Gagliardini · depuis 2007</p>

          <h1 className="mt-8 text-[2.9rem] leading-[0.96] tracking-[-0.055em] max-lg:order-2 sm:text-[5rem] lg:mt-auto lg:pt-14 lg:text-[clamp(4rem,6.2vw,6.6rem)]">
            <span className="line-up"><span>Plombier chauffagiste</span></span>
            <span className="line-up"><span className="text-accent" style={{ ["--d" as string]: "150ms" }}>à Paris 20e</span></span>
          </h1>

          <p className="fade-in mt-10 max-w-[34rem] text-[1.1rem] leading-relaxed max-lg:order-4 sm:text-[1.2rem] lg:mt-9" style={{ ["--d" as string]: "380ms" }}>
            De la fuite au radiateur, du dépannage au confort : une entreprise de quartier, installée près de la porte des Lilas.
          </p>

          <div className="fade-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 max-lg:order-5" style={{ ["--d" as string]: "520ms" }}>
            <Link href={contactHref()} className="btn-primary" data-track="cta_devis">
              Demander un devis ou une intervention <ArrowIcon />
            </Link>
            <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
              <span className="label">Tél.</span>
              <span className="num whitespace-nowrap text-[1.4rem] tracking-tight text-ink transition group-hover:text-accent-deep">{business.phoneDisplay}</span>
            </a>
          </div>

          <dl className="fade-in mt-14 grid grid-cols-3 border-t border-line max-lg:order-6 lg:mt-16" style={{ ["--d" as string]: "700ms" }}>
            <div className="pr-3 pt-5"><dt className="label">Depuis</dt><dd className="num mt-1.5 text-[1.5rem] leading-none text-ink sm:text-[2.1rem]">2007</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Équipe</dt><dd className="num mt-1.5 text-[1.5rem] leading-none text-ink sm:text-[2.1rem]">10 à 19</dd></div>
            <div className="pr-3 pt-5"><dt className="label">Métiers</dt><dd className="num mt-1.5 text-[1.5rem] leading-none text-ink sm:text-[2.1rem]">2</dd></div>
          </dl>
        </div>

        <figure className="relative mt-12 max-lg:order-3 lg:col-span-5 lg:mt-0">
          <div data-mask className="h-full overflow-hidden rounded-[3px]">
            <Img id="plombier" alt={photoAlt("plombier")} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[36rem]" imgClassName="slow-zoom" position="50% 40%" />
          </div>
          <div data-hero-dial className="absolute -bottom-10 left-3 sm:-bottom-12 sm:left-6 lg:-left-16 lg:bottom-14">
            <Dial labels ariaHidden={false} className="h-36 w-36 drop-shadow-[0_14px_30px_rgba(19,23,28,.18)] sm:h-44 sm:w-44 lg:h-56 lg:w-56" />
          </div>
          <figcaption className="mt-3 flex justify-end gap-4 text-[0.78rem] text-ink-faint lg:justify-between">
            <span className="hidden lg:inline">Le thermostat monte avec la page : de 16° à 21°</span>
            <span className="num">48°52′ N · 2°24′ E</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <Section n="01" rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{home.brief}</p>
      <p className="mt-8 max-w-2xl text-[1.02rem]">
        Pour une fuite, un évier bouché, un radiateur froid ou une chaudière à entretenir, un seul numéro : le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
      </p>
    </Section>
  );
}

/** Du dépannage au confort : chaque ligne porte un degré, comme un thermostat qui monte de 16° à 21°. */
function Trades() {
  return (
    <Section n="02" rubrique="Du dépannage au confort" labelledBy="titre-metiers">
      <h2 id="titre-metiers" className="h2 max-w-3xl" data-reveal>Deux métiers, de 16° à 21°.</h2>
      <p className="mt-6 max-w-2xl" data-reveal>On commence par ce qui presse, une fuite ou un évier bouché, et on finit par ce qui rend un logement agréable : des radiateurs qui chauffent partout et une chaudière suivie.</p>
      <div className="mt-12">
        <ul className="border-t border-line">
          {trades.map((t, i) => (
            <li key={t.n} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="border-b border-line">
              <Link href={t.href} className="facture-row row-link grid grid-cols-[3.2rem_minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-2 py-7 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,0.9fr)_2rem] md:gap-6 md:py-8">
                <span className="num pt-1.5 text-[1.05rem] text-accent">{t.n}</span>
                <span className="row-title text-[1.55rem] leading-tight text-ink sm:text-[1.9rem]">{t.title}</span>
                <span className="col-start-2 text-[0.98rem] md:col-start-auto md:pt-1.5">{t.text}</span>
                <span className="col-start-2 text-[0.85rem] text-ink-faint md:col-start-auto md:pt-2">{t.who}</span>
                <ArrowIcon className="row-arrow col-start-3 row-start-1 mt-2 h-5 w-5 text-ink-faint md:col-start-auto md:row-start-auto" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between text-[0.8rem] text-ink-faint">
          <span>Devis gratuit sur demande</span>
          <span className="num">Paris 20e et voisins</span>
        </p>
      </div>
    </Section>
  );
}

/** L'entreprise : les faits du registre en lignes pointillées. */
function House() {
  const rows = [
    ["Fondée en", "2007"],
    ["Forme", "Société à responsabilité limitée"],
    ["Équipe", "10 à 19 salariés"],
    ["Atelier", "1, villa Gagliardini"],
    ["Registre", "RCS Paris 494 580 095"],
  ];
  return (
    <Section n="03" rubrique="L'entreprise" labelledBy="titre-maison" tone="paper">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-maison" className="h2" data-reveal>Une entreprise du 20e, depuis 2007.</h2>
          <p className="mt-6 max-w-xl" data-reveal>
            DBP Plomberie-Chauffage est installée villa Gagliardini, une petite voie privée proche de la porte des Lilas. L&apos;entreprise y rassemble une équipe de dix à dix-neuf personnes, selon le registre public, pour deux métiers qui vont ensemble : l&apos;eau et la chaleur.
          </p>
          <dl className="mt-10 max-w-xl">
            {rows.map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-3 py-2.5">
                <dt className="shrink-0 text-ink-faint">{k}</dt>
                <span className="mb-[0.3em] h-px flex-1 border-b border-dotted border-ink/25" aria-hidden="true" />
                <dd className="num shrink-0 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-ink-faint">
            Note de {business.rating.value}/5 sur <a href={business.googleUrl} target="_blank" rel="noopener" className="link-line text-sm">Google</a> ({business.rating.count} avis, relevé d&apos;{business.rating.date}).
          </p>
        </div>
        <figure className="xl:col-span-5 xl:col-start-8">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id="cle" alt={photoAlt("cle")} className="aspect-[4/5]" />
          </div>
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">Une clé, un raccord : le métier commence par les mains</figcaption>
        </figure>
      </div>
    </Section>
  );
}

/** Le confort, à 21° : le chauffage en grand format. */
function Comfort() {
  return (
    <Section n="04" rubrique="Le confort" labelledBy="titre-confort">
      <div className="grid gap-12 xl:grid-cols-12 xl:items-center">
        <figure className="xl:col-span-6">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id="thermostat" alt={photoAlt("thermostat")} className="aspect-[4/3]" />
          </div>
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">19° dans les pièces de vie, 16 à 17° dans les chambres</figcaption>
        </figure>
        <div className="xl:col-span-5 xl:col-start-8">
          <h2 id="titre-confort" className="h2" data-reveal>Puis le chauffage, pour que ça tienne.</h2>
          <p className="mt-6" data-reveal>Un radiateur purgé, un robinet thermostatique, une chaudière entretenue chaque année : le confort tient à ces détails. Chaque degré de moins sur la consigne économise environ 7 % d&apos;énergie, selon l&apos;ADEME.</p>
          <Link href={PATHS.heating} className="link-line mt-8 text-[0.95rem]">Le chauffage à Paris 20e <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
      </div>
    </Section>
  );
}

function Quarters() {
  const rows = [
    { zone: "20e", text: "Le quartier de l'atelier : Belleville, Gambetta, Saint-Fargeau, la porte des Lilas.", href: PATHS.plumbing, label: "Plombier Paris 20e" },
    ...localPages.map((p) => ({ zone: p.zone!.startsWith("Paris ") ? p.zone!.replace("Paris ", "") : "93", text: p.lead.split(":")[0].split(".")[0], href: p.path, label: p.crumb })),
  ];
  return (
    <Section n="05" rubrique="Quartiers" labelledBy="titre-quartiers" tone="paper">
      <div className="grid gap-12 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <h2 id="titre-quartiers" className="h2" data-reveal>Le 20e, et les voisins.</h2>
          <p className="mt-6 max-w-md" data-reveal>De la porte des Lilas, le 19e et le 11e sont à quelques stations, Les Lilas, Le Pré-Saint-Gervais et Bagnolet de l&apos;autre côté du périphérique.</p>
          <figure className="mt-12 hidden xl:block">
            <div data-mask className="overflow-hidden rounded-[3px]">
              <Img id="immeuble" alt={photoAlt("immeuble")} className="aspect-[5/4]" />
            </div>
            <figcaption className="mt-3 text-[0.78rem] text-ink-faint">Des immeubles parisiens à régler, étage par étage</figcaption>
          </figure>
        </div>
        <ul className="self-start border-t border-line xl:col-span-7">
          {rows.map((r, i) => (
            <li key={r.href} className="border-b border-line" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={r.href} className="row-link grid grid-cols-[4.2rem_minmax(0,1fr)_1.25rem] items-baseline gap-4 py-6 sm:grid-cols-[6rem_minmax(0,1fr)_1.25rem]">
                <span className="num text-[1.7rem] leading-none tracking-tight text-ink sm:text-[2.2rem]">{r.zone}</span>
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
    </Section>
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
      <FaqList items={home.faq} title="Les questions qu'on nous pose" n="06" />
      <LocalBlock n="07" />
      <CtaBand title={fr("Du dépannage au confort : parlons de votre logement.")} text="Une fuite, un radiateur, une chaudière : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
