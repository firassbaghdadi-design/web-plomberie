import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Niveau } from "@/components/Niveau";
import { Roofline } from "@/components/Roofline";
import { CtaBand, FaqList, contactHref, fr } from "@/components/Sections";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { beforeAfter, galleryPhotos, photoFor } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

function Hero() {
  const photo = photoFor("couverture", 0, "Les toits de zinc du 12e arrondissement");
  return (
    <section className="relative">
      <div className="wrap pt-8 sm:pt-12 lg:pt-10">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-14">
          <div className="lg:col-span-8">
            <p className="fade-in flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.78rem] uppercase tracking-[0.2em] text-ink-faint">
              <span className="text-accent">SPC</span>
              <span>Société Plomberie Couverture</span>
              <span className="hidden sm:inline">· depuis {business.founded}</span>
            </p>
            <h1 className="mt-6 text-[3rem] font-light leading-[0.95] tracking-[-0.05em] sm:mt-8 sm:text-[5rem] lg:text-[clamp(4.6rem,7vw,7.4rem)]">
              <span className="line-up"><span>Plombier couvreur</span></span>
              <span className="line-up"><span className="text-accent" style={{ ["--d" as string]: "150ms" }}>à Paris 12e</span></span>
            </h1>
          </div>
          <div className="fade-in lg:col-span-4 lg:pb-3" style={{ ["--d" as string]: "380ms" }}>
            <p className="max-w-md text-[1.08rem] leading-relaxed sm:text-[1.16rem]">
              Du faîtage à la cave&nbsp;: la plomberie d&apos;immeuble, la couverture et l&apos;assainissement, par une entreprise du 12e depuis {business.founded}.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href={contactHref()} className="btn-primary" data-track="cta_devis">Demander un devis ou une intervention <ArrowIcon /></Link>
              <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
                <span className="label">Tél.</span>
                <span className="num whitespace-nowrap text-[1.35rem] font-light tracking-tight text-ink transition group-hover:text-accent-deep">{business.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* La ligne des toits, puis la descente qui part le long de la page */}
      <div className="wrap mt-10 sm:mt-14">
        <div className="relative ml-[var(--rail-x)] h-[23rem] sm:h-[30rem] lg:h-[clamp(30rem,38vw,38rem)]">
          <Roofline photo={photo} />
        </div>
        <p className="ml-[calc(var(--rail-x)+1.6rem)] mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[0.78rem] text-ink-faint lg:ml-[calc(var(--rail-x)+3.4rem)]">
          <span>{photo.credit === "spc" ? "Photo de l'entreprise SPC" : "Les toits de l'est parisien"}</span>
          <span>Note de {business.rating.value}/5 sur Google ({business.rating.count} avis, relevé {business.rating.date})</span>
        </p>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <Niveau n="08" level="Faîtage" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{home.brief}</p>
      <p className="mt-8 max-w-2xl text-[1.02rem]">
        Une fuite, une gouttière, une évacuation qui refoule&nbsp;: un seul numéro, le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
      </p>
    </Niveau>
  );
}

/** Les métiers, du haut de l'immeuble vers le bas, chacun à son niveau. */
function Trades() {
  return (
    <Niveau n="07" level="Toiture" labelledBy="titre-metiers">
      <h2 id="titre-metiers" className="h2 max-w-3xl" data-reveal>Du toit à la cave, un seul interlocuteur.</h2>
      <p className="mt-6 max-w-2xl" data-reveal>Plombiers, couvreurs et cordistes&nbsp;: les métiers de SPC suivent le chemin de l&apos;eau dans l&apos;immeuble, de la gouttière jusqu&apos;au collecteur.</p>
      <ul className="mt-12 border-t border-line">
        {trades.map((t, i) => (
          <li key={t.href} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="border-b border-line">
            <Link href={t.href} className="row-link grid grid-cols-[minmax(0,1fr)_1.5rem] items-start gap-x-4 gap-y-2 py-7 md:grid-cols-[9rem_minmax(0,1.1fr)_minmax(0,1.3fr)_2rem] md:gap-8 md:py-9">
              <span className="label pt-2 !text-accent max-md:col-span-2">{t.level}</span>
              <span className="row-title text-[1.55rem] font-light leading-tight text-ink sm:text-[1.9rem]">{t.title}</span>
              <span className="text-[0.98rem] max-md:col-start-1 md:pt-1.5">{t.text}<span className="mt-2 block text-[0.85rem] text-ink-faint">{t.who}</span></span>
              <ArrowIcon className="row-arrow col-start-2 row-start-2 mt-2 h-5 w-5 text-ink-faint md:col-start-auto md:row-start-auto" />
            </Link>
          </li>
        ))}
      </ul>
    </Niveau>
  );
}

function Expertise() {
  const steps = [
    { t: "Expertise", d: "Chaque intervention commence par une visite et un état des lieux professionnel." },
    { t: "Devis détaillé", d: "Les travaux classés selon leur nécessité, avec un échelonnement possible dans le temps." },
    { t: "Travaux", d: "Des équipes régulièrement formées, des chantiers menés dans les règles de l'art." },
    { t: "Dépannage", d: "De 6 h à minuit, tous les jours, week-ends et jours fériés compris." },
  ];
  return (
    <Niveau n="05" level="Étages" labelledBy="titre-expertise" tone="zinc">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <h2 id="titre-expertise" className="h2" data-reveal>D&apos;abord comprendre, ensuite réparer.</h2>
          <p className="mt-6 max-w-md" data-reveal>Spécialiste depuis {business.founded} de la plomberie d&apos;immeuble, SPC précède chacune de ses interventions d&apos;une expertise et d&apos;un devis qui hiérarchise les travaux.</p>
          <p className="mt-10 flex items-baseline gap-4" data-reveal>
            <span className="num text-[3.6rem] font-extralight leading-none tracking-[-0.04em] text-ink sm:text-[4.6rem]">6&nbsp;h – 0&nbsp;h</span>
          </p>
          <p className="mt-2 text-[0.9rem] text-ink-faint">Dépannage annoncé tous les jours, week-ends et jours fériés compris</p>
        </div>
        <ol className="grid gap-x-10 self-start sm:grid-cols-2 xl:col-span-7">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-line py-6" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="num text-[0.8rem] text-accent">0{i + 1}</span>
              <p className="mt-3 text-[1.25rem] font-light text-ink">{s.t}</p>
              <p className="mt-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Niveau>
  );
}

function History() {
  const photo = photoFor("couverture", 1, "L'équipe SPC au travail");
  const rows = [
    ["1965", "Entreprise de plomberie de quartier dans le 12e, spécialiste des immeubles et des syndics."],
    ["2010", "Ouverture à la couverture et à l'assainissement ; une équipe formée aux travaux sur corde."],
    ["Aujourd'hui", "Plombiers, couvreurs et cordistes pour les copropriétés, les professionnels et les particuliers."],
  ];
  return (
    <Niveau n="03" level="Rez-de-chaussée" labelledBy="titre-histoire">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-histoire" className="h2" data-reveal>Une entreprise «&nbsp;de quartier&nbsp;», à taille humaine.</h2>
          <ol className="mt-10 border-t border-line">
            {rows.map(([y, t], i) => (
              <li key={y} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-line py-6 sm:grid-cols-[9rem_minmax(0,1fr)]" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="num text-[1.6rem] font-extralight leading-none text-ink sm:text-[2.2rem]">{y}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[0.9rem] text-ink-faint">Qualibat RGE, garantie décennale, affiliation CAPEB, Chambre syndicale de la plomberie (GCCP) : mentions reprises du site de l&apos;entreprise.</p>
          <Link href={PATHS.history} className="link-line mt-8 text-[0.95rem]">Notre histoire <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
        <figure className="xl:col-span-5 xl:col-start-8">
          <Img photo={photo} className="aspect-[4/5] rounded-[3px]" />
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</figcaption>
        </figure>
      </div>
    </Niveau>
  );
}

function Works() {
  const photos = galleryPhotos(6);
  return (
    <Niveau n="02" level="Cour" labelledBy="titre-realisations" tone="zinc">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titre-realisations" className="h2 max-w-2xl" data-reveal>Des chantiers, plutôt que des promesses.</h2>
        <Link href={PATHS.gallery} className="link-line text-[0.95rem]">Toutes les réalisations <ArrowIcon className="h-3.5 w-3.5" /></Link>
      </div>
      {beforeAfter.length ? (
        <div className="mt-10 max-w-3xl">
          <BeforeAfter before={{ src: beforeAfter[0].before.src, alt: beforeAfter[0].before.alt || "chantier SPC", credit: "spc" }} after={{ src: beforeAfter[0].after.src, alt: beforeAfter[0].after.alt || "chantier SPC", credit: "spc" }} caption="Avant, après : photos de l'entreprise SPC" />
        </div>
      ) : null}
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {photos.slice(0, 6).map((p, i) => (
          <li key={`${p.src}-${i}`} className={i === 0 ? "col-span-2 row-span-2 lg:col-span-2" : ""} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
            <Img photo={p} className={`rounded-[3px] ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-square"}`} />
          </li>
        ))}
      </ul>
    </Niveau>
  );
}

function Quarters() {
  const zones = [
    { zone: "12e", label: "Le quartier de l'entreprise", links: [{ href: PATHS.plumbing, t: "Plombier" }, { href: PATHS.roofing, t: "Couvreur" }, { href: PATHS.drainage, t: "Assainissement" }] },
    ...["Paris 11e", "Paris 20e", "Vincennes", "Saint-Mandé"].map((z) => ({
      zone: z.replace("Paris ", ""),
      label: z.startsWith("Paris") ? `Arrondissement voisin` : "Commune voisine",
      links: localPages.filter((p) => p.zone === z).map((p) => ({ href: p.path, t: p.crumb.split(" ")[0] })),
    })),
  ];
  return (
    <Niveau n="00" level="Réseau" labelledBy="titre-quartiers">
      <div className="grid gap-12 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <h2 id="titre-quartiers" className="h2" data-reveal>Le 12e, et les quartiers raccordés.</h2>
          <p className="mt-6 max-w-md" data-reveal>Depuis l&apos;avenue du Général-Michel-Bizot, SPC intervient dans le 12e, à Saint-Mandé et aux alentours&nbsp;: le 11e et le 20e, Vincennes.</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-t border-line pt-4"><dt className="label">Bureau</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
            <div className="border-t border-line pt-4"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}<br /><span className="text-[0.9rem] text-ink-soft">Métro {business.metro}</span></dd></div>
          </dl>
        </div>
        <ul className="self-start border-t border-line xl:col-span-7">
          {zones.map((r, i) => (
            <li key={r.zone} className="grid grid-cols-[5.2rem_minmax(0,1fr)] items-baseline gap-4 border-b border-line py-6 sm:grid-cols-[9rem_minmax(0,1fr)]" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <span className="num text-[1.7rem] font-extralight leading-none tracking-tight text-ink sm:text-[2.4rem]">{r.zone}</span>
              <span>
                <span className="block text-[0.9rem] text-ink-faint">{r.label}</span>
                <span className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                  {r.links.map((l) => <Link key={l.href} href={l.href} className="link-line text-[0.98rem]">{l.t}</Link>)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Niveau>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Trades />
      <Expertise />
      <History />
      <Works />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" i={7} />
      <Quarters />
      <CtaBand title={fr("Votre immeuble, du faîtage à la cave.")} text="Une fuite, une toiture, une évacuation : décrivez-nous le besoin, SPC vous recontacte." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
