import { Bief } from "@/components/Bief";
import Link from "next/link";
import { Generations } from "@/components/Generations";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { Realisation } from "@/components/Realisation";
import { JsonLd } from "@/components/JsonLd";
import { Ecluse } from "@/components/Lock";
import { CtaBand, FaqList, contactHref } from "@/components/Sections";
import { home, servicesOriginal } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt, realisations } from "@/lib/photos";
import { PATHS, business, contacts, guarantees } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

function Hero() {
  return (
    <section className="relative">
      <div className="wrap grid gap-y-10 pb-14 pt-10 sm:pt-14 lg:min-h-[calc(100svh-var(--head-h))] lg:grid-cols-12 lg:gap-x-14 lg:pb-12 lg:pt-12">
        <div className="flex flex-col lg:col-span-7">
          <p className="label fade-in text-blue-deep">Depuis 1880 · 34, passage du Désir</p>
          <h1 className="mt-7 text-[3.05rem] leading-[0.98] tracking-[-0.045em] sm:text-[4.6rem] lg:text-[clamp(3.5rem,5.3vw,5.2rem)]">
            <span className="line-up"><span>Plombier et couvreur</span></span>
            <span className="line-up"><span className="text-blue" style={{ ["--d" as string]: "140ms" }}>à Paris 10e</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-[34rem] text-[1.1rem] leading-relaxed text-ink-soft sm:text-[1.22rem]" style={{ ["--d" as string]: "350ms" }}>
            Canalisations, robinetterie, sanitaires, chauffage et toiture : une maison du 10e transmise sur cinq générations, pour les particuliers, les professionnels et les immeubles.
          </p>
          <div className="fade-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ ["--d" as string]: "500ms" }}>
            <Link href={contactHref()} className="btn-primary" data-track="cta_devis">
              Demander un devis ou une intervention <ArrowIcon />
            </Link>
            <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
              <span className="label">Standard</span>
              <span className="num whitespace-nowrap text-[1.35rem] font-light tracking-tight text-ink transition group-hover:text-blue-deep">{business.phoneDisplay}</span>
            </a>
          </div>
          <Generations className="mt-14 lg:mt-auto lg:pt-14" />
        </div>
        <figure className="relative lg:col-span-5">
          <div data-mask className="h-full overflow-hidden rounded-[4px]">
            <Img id="plombier" alt={photoAlt("plombier")} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[34rem]" imgClassName="slow-zoom" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>Canalisations, robinetterie, sanitaires</span>
            <span className="num">48°52′ N · 2°21′ E</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section aria-label="En bref" className="">
      <Bief />
      <div className="wrap grid gap-8 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Ecluse n="01">Bonjour et bienvenue</Ecluse>
        </div>
        <div className="lg:col-span-9">
          <p className="reponse-bref max-w-4xl">{home.brief}</p>
          <p className="mt-10 max-w-2xl border-l border-blue pl-5 text-[1.05rem] text-ink">« Martinet Thibault Entreprise vous propose ses compétences en matière de canalisations, robinetterie, sanitaire, chauffage et toiture. »</p>
        </div>
      </div>
    </section>
  );
}

function Trades() {
  return (
    <section aria-labelledby="titre-metiers" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Ecluse n="02">Services</Ecluse>
          <h2 id="titre-metiers" className="h2 mt-5" data-reveal>De la cave au toit, tout le parcours de l'eau.</h2>
          <figure className="mt-10 hidden lg:block">
            <div data-mask className="overflow-hidden rounded-[4px]">
              <Img id="couvreur" alt={photoAlt("couvreur")} className="aspect-[4/5]" />
            </div>
            <figcaption className="mt-3 text-[0.78rem] text-ink-faint">Le service couverture : zinc, chéneaux, descentes d'eau</figcaption>
          </figure>
        </div>
        <ul className="self-start border-t border-line lg:col-span-7">
          {servicesOriginal.map((s, i) => (
            <li key={s.title} className="border-b border-line" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={s.href} className="row-link flex items-start justify-between gap-6 py-7">
                <span className="row-title flex gap-5">
                  <span className="num pt-1.5 text-sm text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[1.45rem] font-light leading-tight text-ink sm:text-[1.75rem]">{s.title}</span>
                    <span className="mt-2 block max-w-xl text-[0.98rem]">{s.text}</span>
                  </span>
                </span>
                <ArrowIcon className="row-arrow mt-2 h-5 w-5 shrink-0 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Guarantees() {
  return (
    <section aria-labelledby="titre-garanties" className="bg-mist py-20 sm:py-28">
      <Bief />
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Ecluse n="03">Sérieux et garanties</Ecluse>
            <h2 id="titre-garanties" className="h2 mt-5" data-reveal>Une entreprise séculaire, membre de sa chambre syndicale.</h2>
          </div>
          <p className="num text-[5.5rem] font-extralight leading-none tracking-[-0.06em] text-blue sm:text-[8rem] lg:col-span-5 lg:text-right" data-reveal>1880</p>
        </div>
        <ul className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <li key={g.title} className="bg-white p-7" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <p className="num text-sm text-blue">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-[1.3rem] font-light text-ink">{g.title}</p>
              <p className="mt-3 text-[0.95rem]">{g.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
          <p className="label">Logos affichés par l'entreprise</p>
          {["logo-qualibat-rge", "logo-qualigaz", "logo-ffb"].map((k) => (
            <Img key={k} id={k} alt={photoAlt(k)} className="h-16 w-28 !bg-transparent mix-blend-multiply [&_img]:!object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section aria-labelledby="titre-realisations" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n="04">Réalisations</Ecluse>
          <h2 id="titre-realisations" className="h2 mt-5" data-reveal>Exemples de réalisations</h2>
          <p className="mt-6 text-[1.02rem]">« Découvrez nos réalisations en images pour particuliers &amp; professionnels : cuisine, douche, salle de bains, plomberie générale, chauffage et climatisation, couverture et chéneaux. »</p>
          <Link href={PATHS.works} className="link-line mt-8 text-[0.92rem]">Les neuf réalisations <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
        <ul className="archive ba-grid ba-3 self-start lg:col-span-8">
          {realisations.slice(0, 6).map((k) => (
            <li key={k} data-mask>
              <Realisation id={k} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Quarters() {
  const rows = [
    { zone: "Paris 10e", pages: localPages.filter((p) => p.zone === "Paris 10e") },
    ...["Paris 9e", "Paris 11e", "Paris 18e", "Paris 19e", "Paris 3e"].map((zone) => ({ zone, pages: localPages.filter((p) => p.zone === zone) })),
  ];
  return (
    <section aria-labelledby="titre-quartiers" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n="05">Quartiers</Ecluse>
          <h2 id="titre-quartiers" className="h2 mt-5" data-reveal>Le 10e, et les arrondissements voisins.</h2>
          <p className="mt-6">Du passage du Désir, le canal Saint-Martin mène au 11e et au 19e ; les gares ouvrent vers le 9e et le 18e ; le 3e est de l'autre côté de la République.</p>
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {rows.map((r) => (
            <li key={r.zone} className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6">
              <p className="num text-[1.6rem] font-extralight leading-none tracking-tight text-ink sm:col-span-3">{r.zone.replace("Paris ", "")}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:col-span-9">
                {r.pages.map((p) => (
                  <li key={p.path}><Link href={p.path} className="link-line text-[0.95rem] !font-normal">{p.crumb.replace(` ${r.zone}`, "")}</Link></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section aria-labelledby="titre-contacts" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n="06">Contacts</Ecluse>
          <h2 id="titre-contacts" className="h2 mt-5" data-reveal>Un service, une ligne directe.</h2>
          <p className="mt-6">{business.hours}. Mathieu Thibault, dirigeant, est chargé d'affaires plomberie.</p>
        </div>
        <ul className="grid border-t border-line sm:grid-cols-2 lg:col-span-8">
          {contacts.map((c) => (
            <li key={c.service} className="border-b border-line py-7 sm:pr-8 sm:odd:border-r sm:even:pl-8">
              <p className="label">{c.service}</p>
              {c.name ? <p className="mt-2 text-ink">{c.name}</p> : <p className="mt-2 text-ink">Martinet Thibault Entreprise</p>}
              <a href={`tel:${c.phoneTel}`} className="num mt-3 inline-block whitespace-nowrap text-[1.9rem] font-extralight tracking-tight text-ink transition hover:text-blue-deep" data-track="cta_tel">{c.phoneDisplay}</a>
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
      <Guarantees />
      <Works />
      <Quarters />
      <Contacts />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" n="07" />
      <CtaBand title="Pour profiter de notre savoir-faire, parlons de votre projet." text="Une fuite, une salle de bains, un chéneau : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
