import Link from "next/link";
import { Bief } from "@/components/Bief";
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

/**
 * Héros : une grande photo d'artisan, au grain argentique, qui occupe tout l'écran.
 * Le H1 métier + zone, en Fraunces très grand, est posé dessus en bas à gauche ;
 * en haut à droite, la plaque de rue émaillée du passage du Désir, l'adresse de la maison depuis 1880.
 * Sous la photo, une seule ligne : la phrase d'accroche, le bouton, le téléphone.
 */
function Hero() {
  return (
    <section className="relative">
      <div className="wrap pt-2 sm:pt-4">
        <div className="hero-photo grain warm relative overflow-hidden rounded-[2px] bg-night">
          <Img id="plombier" alt={photoAlt("plombier")} priority className="absolute inset-0 !bg-night [&_.label]:hidden" imgClassName="slow-zoom" position="60% 40%" />
          <div className="hero-shade absolute inset-0 z-[1]" aria-hidden="true" />

          <div className="absolute inset-x-0 top-0 z-[3] flex items-start justify-between gap-4 p-4 sm:p-7 lg:p-10">
            <p className="label fade-in pt-1 !text-[0.6rem] !text-cream/80 sm:!text-[0.7rem]">
              <span className="block">Maison fondée en 1880</span>
              <span className="mt-1.5 hidden !tracking-[0.2em] text-cream/55 sm:block">Canal Saint-Martin</span>
            </p>
            <p className="plaque fade-in" style={{ ["--d" as string]: "500ms" }} aria-label="34, passage du Désir, Paris 10e">
              <small>10<sup>e</sup> Arr<sup>t</sup></small>
              <strong>Passage du Désir</strong>
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-[3] grid items-end gap-6 p-4 pb-6 sm:p-7 sm:pb-9 lg:grid-cols-12 lg:p-10 lg:pb-12">
            <h1 className="hero-h1 text-cream lg:col-span-10">
              <span className="line-up"><span>Plombier <em className="text-brass-pale">et</em> </span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "120ms" }}>couvreur </span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "240ms" }}><em className="text-brass-pale">à</em> Paris 10<span className="sup">e</span></span></span>
            </h1>
            <p className="fade-in hidden text-right text-[0.78rem] leading-relaxed text-cream/70 lg:col-span-2 lg:block" style={{ ["--d" as string]: "700ms" }}>
              <span className="label block !text-brass-light">Planche I</span>
              <span className="mt-2 block">Canalisations, robinetterie, sanitaires</span>
              <span className="num block text-cream/50">48°52′ N · 2°21′ E</span>
            </p>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="grid gap-x-10 gap-y-6 py-7 lg:min-h-[7.25rem] lg:grid-cols-12 lg:items-center lg:py-5">
          <p className="fade-in max-w-[36rem] text-[1.02rem] leading-relaxed text-ink-soft lg:col-span-6" style={{ ["--d" as string]: "350ms" }}>
            Canalisations, robinetterie, sanitaires, chauffage et toiture : une maison du 10e transmise sur cinq générations, pour les particuliers, les professionnels et les immeubles.
          </p>
          <div className="fade-in lg:col-span-3" style={{ ["--d" as string]: "500ms" }}>
            <Link href={contactHref()} className="btn-primary w-full sm:w-auto" data-track="cta_devis">
              Devis ou intervention <ArrowIcon />
            </Link>
          </div>
          <a href={`tel:${business.phoneTel}`} className="fade-in group flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:items-end lg:gap-1" style={{ ["--d" as string]: "620ms" }} data-track="cta_tel">
            <span className="label">Standard</span>
            <span className="serif num whitespace-nowrap text-[1.7rem] font-light leading-none tracking-[-0.01em] text-ink transition group-hover:text-brass-deep lg:text-[2.05rem]">{business.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section aria-label="En bref">
      <Bief />
      <div className="wrap grid gap-8 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Ecluse n="01">Bonjour et bienvenue</Ecluse>
        </div>
        <div className="lg:col-span-9">
          <p className="reponse-bref max-w-4xl" data-reveal>{home.brief}</p>
          <blockquote className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-[3rem_1fr]">
            <span aria-hidden="true" className="serif text-[4rem] font-light leading-[0.7] text-brass">“</span>
            <p className="serif text-[1.18rem] font-light italic leading-relaxed text-ink sm:text-[1.32rem]">Martinet Thibault Entreprise vous propose ses compétences en matière de canalisations, robinetterie, sanitaire, chauffage et toiture.</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Trades() {
  return (
    <section aria-labelledby="titre-metiers" className="pb-20 sm:pb-28">
      <Bief />
      <div className="wrap grid gap-12 pt-20 sm:pt-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Ecluse n="02">Services</Ecluse>
            <h2 id="titre-metiers" className="h2 mt-6" data-reveal>De la cave au toit, tout le parcours de l'eau.</h2>
            <figure className="mt-10">
              <div data-mask className="overflow-hidden rounded-[2px]">
                <Img id="couvreur" alt={photoAlt("couvreur")} className="grain warm aspect-[4/3] lg:aspect-[4/5]" />
              </div>
              <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
                <span>Le service couverture : zinc, chéneaux, descentes d'eau</span>
                <span className="serif italic">fig. 2</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <ul className="self-start border-t border-ink/15 lg:col-span-7">
          {servicesOriginal.map((s, i) => (
            <li key={s.title} className="border-b border-ink/15" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Link href={s.href} className="row-link flex items-start justify-between gap-6 py-8 sm:py-10">
                <span className="row-title flex gap-5 sm:gap-8">
                  <span className="serif num pt-2 text-[0.95rem] italic text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="serif block text-[1.7rem] font-light leading-tight text-ink sm:text-[2.3rem]">{s.title}</span>
                    <span className="mt-3 block max-w-xl text-[0.98rem]">{s.text}</span>
                  </span>
                </span>
                <ArrowIcon className="row-arrow mt-3 h-5 w-5 shrink-0 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Maison() {
  return (
    <section aria-labelledby="titre-garanties" className="bg-stone py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Ecluse n="03">Sérieux et garanties</Ecluse>
            <h2 id="titre-garanties" className="h2 mt-6" data-reveal>Une entreprise séculaire, membre de sa chambre syndicale.</h2>
          </div>
          <p className="serif num text-[6.5rem] font-light leading-[0.8] tracking-[-0.05em] text-brass sm:text-[10rem] lg:col-span-5 lg:text-right lg:text-[12.5rem]" style={{ fontVariationSettings: '"opsz" 144' }} data-reveal aria-hidden="true">
            1880
          </p>
        </div>

        <Generations className="mt-16 border-t border-ink/15 pt-8 sm:mt-20" />

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:col-span-5">
            <div data-mask className="overflow-hidden rounded-[2px]">
              <Img id="salle-de-bains" alt={photoAlt("salle-de-bains")} className="grain warm aspect-[4/3] lg:aspect-[4/5]" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
              <span>Contrôle d'une salle de bains avant travaux</span>
              <span className="serif italic">fig. 3</span>
            </figcaption>
          </figure>
          <div className="lg:col-span-7">
            <ul className="grid border-t border-ink/15 sm:grid-cols-2">
              {guarantees.map((g, i) => (
                <li key={g.title} className="border-b border-ink/15 py-8 sm:pr-8 sm:odd:border-r sm:even:pl-8" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <p className="serif num text-[0.95rem] italic text-brass-deep">{String(i + 1).padStart(2, "0")}</p>
                  <p className="serif mt-4 text-[1.55rem] font-light leading-tight text-ink">{g.title}</p>
                  <p className="mt-3 text-[0.96rem]">{g.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <p className="label">Logos affichés par l'entreprise</p>
              {["logo-qualibat-rge", "logo-qualigaz", "logo-ffb"].map((k) => (
                <Img key={k} id={k} alt={photoAlt(k)} className="h-16 w-28 !bg-transparent mix-blend-multiply [&_img]:!object-contain" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section aria-labelledby="titre-realisations" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Ecluse n="04">Réalisations</Ecluse>
            <h2 id="titre-realisations" className="h2 mt-6" data-reveal>Exemples de <em className="italic text-brass-deep">réalisations</em></h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[1.02rem]">« Découvrez nos réalisations en images pour particuliers &amp; professionnels : cuisine, douche, salle de bains, plomberie générale, chauffage et climatisation, couverture et chéneaux. »</p>
            <Link href={PATHS.works} className="link-line mt-6 text-[0.92rem]">Les neuf réalisations <ArrowIcon className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
        <ul className="archive ba-grid ba-3 mt-14">
          {realisations.slice(0, 6).map((k, i) => (
            <li key={k} data-mask>
              <Realisation id={k} />
              <p className="mt-3 flex justify-between text-[0.78rem] text-ink-faint"><span>Avant / après, chantier de l'entreprise</span><span className="serif italic">n° {String(i + 1).padStart(2, "0")}</span></p>
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
    <section aria-labelledby="titre-quartiers" className="pb-20 sm:pb-28">
      <div className="wrap">
        <figure data-mask className="relative">
          <div className="overflow-hidden rounded-[2px]">
            <Img id="toiture" alt={photoAlt("toiture")} className="grain warm aspect-[4/3] sm:aspect-[21/9]" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>Réfection de toiture : la toiture est dégagée avant les travaux</span>
            <span className="serif italic">fig. 4</span>
          </figcaption>
        </figure>
      </div>
      <div className="wrap mt-16 grid gap-12 sm:mt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n="05">Quartiers</Ecluse>
          <h2 id="titre-quartiers" className="h2 mt-6" data-reveal>Le 10e, et les arrondissements voisins.</h2>
          <p className="mt-6">Du passage du Désir, le canal Saint-Martin mène au 11e et au 19e ; les gares ouvrent vers le 9e et le 18e ; le 3e est de l'autre côté de la République.</p>
        </div>
        <ul className="border-t border-ink/15 lg:col-span-8">
          {rows.map((r) => (
            <li key={r.zone} className="grid gap-3 border-b border-ink/15 py-6 sm:grid-cols-12 sm:gap-6">
              <p className="serif num text-[2.2rem] font-light leading-none tracking-tight text-ink sm:col-span-3">
                {r.zone.replace("Paris ", "").replace(/e$/, "")}<span className="sup text-brass">e</span>
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:col-span-9 sm:pt-1">
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
          <h2 id="titre-contacts" className="h2 mt-6" data-reveal>Un service, une ligne directe.</h2>
          <p className="mt-6">{business.hours}. Mathieu Thibault, dirigeant, est chargé d'affaires plomberie.</p>
        </div>
        <ul className="grid border-t border-ink/15 sm:grid-cols-2 lg:col-span-8">
          {contacts.map((c) => (
            <li key={c.service} className="border-b border-ink/15 py-8 sm:pr-8 sm:odd:border-r sm:even:pl-8">
              <p className="label">{c.service}</p>
              <p className="mt-2 text-ink">{c.name ?? "Martinet Thibault Entreprise"}</p>
              <a href={`tel:${c.phoneTel}`} className="serif num mt-3 inline-block whitespace-nowrap text-[2.1rem] font-light tracking-[-0.01em] text-ink transition hover:text-brass-deep" data-track="cta_tel">{c.phoneDisplay}</a>
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
      <Maison />
      <Works />
      <Quarters />
      <Contacts />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" n="07" />
      <CtaBand title="Pour profiter de notre savoir-faire, parlons de votre projet." text="Une fuite, une salle de bains, un chéneau : décrivez-nous le besoin." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
