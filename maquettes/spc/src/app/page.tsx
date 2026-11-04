import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Plaque } from "@/components/Plaque";
import { Etage, depthColor } from "@/components/Etage";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList, contactHref, fr } from "@/components/Sections";
import { home, trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { beforeAfter, galleryPhotos, pexelsPhoto, photoFor } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

/**
 * Le héros : une vraie photo de toit ou de chantier, en grand et en couleurs naturelles.
 * Un aplat bleu de la marque s'y pose en bas à gauche et porte le titre ; la plaque de zinc gravée de SPC
 * est vissée sur la photo. La cote « +24,00 » n'est qu'un détail.
 */
function Hero() {
  const photo = photoFor("couverture", 0, "Couvreurs de SPC sur un toit du 12e arrondissement");
  const metrics = [
    { v: business.founded, l: "dans le 12e depuis" },
    { v: "6 h – 0 h", l: "dépannage annoncé 7 j/7" },
    { v: `${business.rating.value}/5`, l: `${business.rating.count} avis Google · ${business.rating.date}` },
  ];
  return (
    <section className="hero relative overflow-hidden" data-cote="+24,00" data-level="Faîtage">
      {/* la photo, bord à bord */}
      <div className="relative h-[46svh] min-h-[19rem] lg:absolute lg:inset-0 lg:h-auto">
        <Img photo={photo} priority className="hero-photo shade-b absolute inset-0" position="50% 35%" />
      </div>
      <Plaque className="absolute right-4 top-[calc(var(--head-h)+0.75rem)] z-10 origin-top-right scale-[.6] sm:scale-75 lg:right-[var(--gutter)] lg:top-[calc(var(--head-h)+2.5rem)] lg:scale-100" />

      {/* l'aplat de la marque, qui porte le titre */}
      <div className="relative lg:flex lg:min-h-[100svh] lg:items-end">
        <div className="relative -mt-14 bg-brand-deep px-[var(--gutter)] pb-10 pt-8 sm:mx-[var(--gutter)] sm:-mt-24 sm:px-10 lg:mx-0 lg:mt-0 lg:w-[min(54rem,57vw)] lg:pb-10 lg:pl-[max(var(--gutter),calc((100vw-92rem)/2+var(--gutter)))] lg:pr-12 lg:pt-10">
          <p className="cote fade-in !text-[0.68rem] sm:!text-[0.74rem]">
            <span className="cote-mark" />
            <span className="cote-val">+24,00</span>
            <span>Société Plomberie Couverture</span>
          </p>
          <h1 className="display mt-5 text-[clamp(2.9rem,13vw,4.4rem)] sm:text-[5.2rem] lg:text-[clamp(3.8rem,5.1vw,6.2rem)]">
            <span className="line-up"><span>Plombier couvreur</span></span>
            <span className="line-up"><span className="text-brand-light" style={{ ["--d" as string]: "140ms" }}>à Paris 12e</span></span>
          </h1>
          <div className="fade-in mt-6" style={{ ["--d" as string]: "420ms" }}>
            <p className="max-w-[34rem] text-[1.06rem] leading-relaxed text-white/85 sm:text-[1.16rem]">
              Du faîtage à la cave&nbsp;: couvreurs zingueurs, cordistes et plombiers d&apos;immeuble, réunis dans une entreprise du 12e depuis {business.founded}.
            </p>
          </div>
          <div className="fade-in mt-7 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ ["--d" as string]: "520ms" }}>
            <Link href={contactHref()} className="btn-solid" data-track="cta_devis">Demander un devis ou une intervention <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3" data-track="cta_tel">
              <span className="label">Tél.</span>
              <span className="num whitespace-nowrap text-[1.45rem] font-semibold tracking-tight text-white [font-stretch:108%] group-hover:text-brand-light">{business.phoneDisplay}</span>
            </a>
          </div>
          <dl className="fade-in mt-8 grid grid-cols-3 border-t border-white/25" style={{ ["--d" as string]: "650ms" }}>
            {metrics.map((m, i) => (
              <div key={m.l} className={`pt-4 ${i ? "border-l border-white/20 pl-3 sm:pl-6" : "pr-3"}`}>
                <dt className="sr-only">{m.l}</dt>
                <dd>
                  <span className="num block whitespace-nowrap text-[1.15rem] font-bold leading-none text-white [font-stretch:116%] sm:text-[1.9rem]">{m.v}</span>
                  <span className="mt-2 block text-[0.7rem] leading-snug text-white/60 sm:text-[0.8rem]">{m.l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="absolute bottom-4 right-[var(--gutter)] hidden text-[0.74rem] text-white/80 lg:block">{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</p>
      </div>
    </section>
  );
}

/** Bande plein cadre : les toits de Paris, en très grand, entre deux aplats. */
function Toits() {
  const photo = pexelsPhoto("toits", "Les toits de Paris, leurs brisis de zinc et leurs souches de cheminée");
  return (
    <figure className="relative">
      <Img photo={photo} className="h-[62vh] min-h-[22rem] w-full lg:h-[86vh]" position="50% 45%" />
      <figcaption className="absolute bottom-0 left-[var(--gutter)] bg-brand-deep px-5 py-4 text-[0.82rem] text-white/85 sm:px-7">
        <span className="cote !text-[0.68rem]"><span className="cote-mark" /><span className="cote-val">+21,40</span><span>Les toits de l&apos;est parisien</span></span>
      </figcaption>
    </figure>
  );
}

function Welcome() {
  return (
    <Etage cote="+21,40" level="Toiture" depth={0.04} ariaLabel="En bref">
      <p className="reponse-bref max-w-5xl">{home.brief}</p>
      <p className="mt-10 max-w-2xl text-[1.05rem] text-white/80">
        Une fuite, une gouttière, une évacuation qui refoule&nbsp;: un seul numéro, le{" "}
        <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.
      </p>
    </Etage>
  );
}

/** Les métiers en coupe : un plancher par métier, du toit à la cave, et le bleu qui fonce à chaque étage. */
function Trades() {
  const cotes = ["+21,40", "+12,00", "+6,20", "−3,50"];
  return (
    <section aria-labelledby="titre-metiers" data-cote="+18,60" data-level="Combles" style={{ background: depthColor(0.2) }}>
      <div className="wrap pb-14 pt-10 sm:pt-12">
        <p className="cote mb-12 sm:mb-16" aria-hidden="true"><span className="cote-mark" /><span className="cote-val">+18,60</span><span>La coupe</span></p>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="titre-metiers" className="h2 lg:col-span-8" data-reveal>Du toit à la cave, un seul interlocuteur.</h2>
          <p className="max-w-md lg:col-span-4" data-reveal>Plombiers, couvreurs et cordistes&nbsp;: les métiers de SPC suivent le chemin de l&apos;eau dans l&apos;immeuble, de la gouttière jusqu&apos;au collecteur.</p>
        </div>
      </div>
      <ul>
        {trades.map((t, i) => (
          <li key={t.href} style={{ background: depthColor(0.3 + i * 0.17) }}>
            <Link href={t.href} className="floor group block border-t-2 border-white">
              <div className="wrap grid grid-cols-[minmax(0,1fr)_2rem] gap-x-4 gap-y-3 py-9 sm:py-11 md:grid-cols-[12rem_minmax(0,1.25fr)_minmax(0,1fr)_2.5rem] md:gap-x-10">
                <span className="cote max-md:col-span-2"><span className="cote-mark" /><span className="cote-val">{cotes[i]}</span><span>{t.level}</span></span>
                <span className="text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white [font-stretch:114%] sm:text-[2.6rem] lg:text-[3.1rem]">{t.title}</span>
                <span className="text-[0.98rem] max-md:col-start-1 md:pt-2">{t.text}<span className="mt-3 block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-light [font-stretch:108%]">{t.who}</span></span>
                <ArrowIcon className="floor-arrow col-start-2 row-start-2 mt-1 h-7 w-7 text-white md:col-start-auto md:row-start-auto md:mt-3" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Expertise() {
  const photo = photoFor("plomberie", 0, "Un couvreur de SPC fixe un élément de toiture");
  const steps = [
    { t: "Expertise", d: "Chaque intervention commence par une visite et un état des lieux professionnel." },
    { t: "Devis détaillé", d: "Les travaux classés selon leur nécessité, avec un échelonnement possible dans le temps." },
    { t: "Travaux", d: "Des équipes régulièrement formées, des chantiers menés dans les règles de l'art." },
    { t: "Dépannage", d: "De 6 h à minuit, tous les jours, week-ends et jours fériés compris." },
  ];
  return (
    <Etage cote="+12,00" level="Étages" depth={0.5} labelledBy="titre-expertise">
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 id="titre-expertise" className="h2 lg:col-span-7" data-reveal>D&apos;abord comprendre, ensuite réparer.</h2>
        <p className="max-w-md self-end lg:col-span-5" data-reveal>Spécialiste depuis {business.founded} de la plomberie d&apos;immeuble, SPC précède chacune de ses interventions d&apos;une expertise et d&apos;un devis qui hiérarchise les travaux.</p>
      </div>
      <p className="display num mt-16 whitespace-nowrap text-[clamp(4.4rem,20vw,17rem)] text-brand-light" data-reveal>6 h – 0 h</p>
      <p className="mt-4 text-[0.95rem] text-white/65">Dépannage annoncé tous les jours, week-ends et jours fériés compris</p>
      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
        <figure className="lg:col-span-6">
          <Img photo={photo} className="aspect-[4/3] lg:aspect-[5/4]" />
          <figcaption className="mt-3 text-[0.78rem] text-white/55">{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</figcaption>
        </figure>
        <ol className="grid gap-x-8 self-start sm:grid-cols-2 lg:col-span-6">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t-2 border-white py-6" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="num text-[0.8rem] font-semibold text-brand-light">0{i + 1}</span>
              <p className="mt-3 text-[1.35rem] font-semibold text-white [font-stretch:110%]">{s.t}</p>
              <p className="mt-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </Etage>
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
    <Etage cote="±0,00" level="Rez-de-chaussée" depth={0.64} labelledBy="titre-histoire">
      <div className="grid gap-14 lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <Img photo={photo} className="aspect-[4/5] lg:aspect-[3/4]" />
          <figcaption className="mt-3 text-[0.78rem] text-white/55">{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</figcaption>
        </figure>
        <div className="lg:col-span-7">
          <h2 id="titre-histoire" className="h2" data-reveal>Une entreprise «&nbsp;de quartier&nbsp;», à taille humaine.</h2>
          <ol className="mt-12">
            {rows.map(([y, t], i) => (
              <li key={y} className="grid gap-3 border-t-2 border-white py-7 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className={`num font-bold leading-none text-white [font-stretch:118%] ${y.length > 4 ? "text-[1.7rem] sm:text-[1.9rem]" : "text-[2.8rem] sm:text-[3.4rem]"}`}>{y}</span>
                <span className="sm:pt-1">{t}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[0.9rem] text-white/60">Qualibat RGE, garantie décennale, affiliation CAPEB, Chambre syndicale de la plomberie (GCCP) : mentions reprises du site de l&apos;entreprise.</p>
          <Link href={PATHS.history} className="link-line mt-8 text-[1rem]">Notre histoire <ArrowIcon className="h-4 w-4" /></Link>
        </div>
      </div>
    </Etage>
  );
}

function Works() {
  const photos = galleryPhotos(5);
  return (
    <Etage cote="−0,40" level="Cour" depth={0.76} labelledBy="titre-realisations">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="titre-realisations" className="h2 max-w-4xl" data-reveal>Des chantiers, plutôt que des promesses.</h2>
        <Link href={PATHS.gallery} className="link-line text-[1rem]">Toutes les réalisations <ArrowIcon className="h-4 w-4" /></Link>
      </div>
      {beforeAfter.length ? (
        <div className="mt-12 max-w-4xl">
          <BeforeAfter before={{ src: beforeAfter[0].before.src, alt: beforeAfter[0].before.alt || "chantier SPC", credit: "spc" }} after={{ src: beforeAfter[0].after.src, alt: beforeAfter[0].after.alt || "chantier SPC", credit: "spc" }} caption="Avant, après : photos de l'entreprise SPC" />
        </div>
      ) : null}
      <ul className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-12">
        {photos.slice(0, 5).map((p, i) => {
          const span = ["col-span-2 lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-5", "lg:col-span-6", "lg:col-span-6"][i];
          const ratio = i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : i < 3 ? "aspect-square lg:aspect-[16/10]" : "aspect-square lg:aspect-[16/9]";
          return (
            <li key={`${p.src}-${i}`} className={`${span} ${i > 2 ? "max-lg:col-span-1" : ""}`} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
              <Img photo={p} className={ratio} />
            </li>
          );
        })}
      </ul>
    </Etage>
  );
}

function Quarters() {
  const zones = [
    { zone: "12e", label: "Le quartier de l'entreprise", links: [{ href: PATHS.plumbing, t: "Plombier" }, { href: PATHS.roofing, t: "Couvreur" }, { href: PATHS.drainage, t: "Assainissement" }] },
    ...["Paris 11e", "Paris 20e", "Vincennes", "Saint-Mandé"].map((z) => ({
      zone: z.replace("Paris ", ""),
      label: z.startsWith("Paris") ? "Arrondissement voisin" : "Commune voisine",
      links: localPages.filter((p) => p.zone === z).map((p) => ({ href: p.path, t: p.crumb.split(" ")[0] })),
    })),
  ];
  return (
    <Etage cote="−4,80" level="Réseau" depth={0.92} labelledBy="titre-quartiers">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="titre-quartiers" className="h2-sm" data-reveal>Le 12e, et les quartiers raccordés.</h2>
          <p className="mt-6 max-w-md" data-reveal>Depuis l&apos;avenue du Général-Michel-Bizot, SPC intervient dans le 12e, à Saint-Mandé et aux alentours&nbsp;: le 11e et le 20e, Vincennes.</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-t-2 border-white pt-4"><dt className="label">Bureau</dt><dd className="mt-2 text-white">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
            <div className="border-t-2 border-white pt-4"><dt className="label">Horaires</dt><dd className="mt-2 text-white">{business.hours}<br /><span className="text-[0.9rem] text-white/65">Métro {business.metro}</span></dd></div>
          </dl>
        </div>
        <ul className="self-start lg:col-span-7">
          {zones.map((r, i) => (
            <li key={r.zone} className="rule grid grid-cols-1 items-baseline gap-3 border-t py-6 first:border-t-2 first:!border-white sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-6" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <span className="display text-[2.6rem] sm:text-[3.4rem]">{r.zone}</span>
              <span>
                <span className="block text-[0.85rem] text-white/55">{r.label}</span>
                <span className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                  {r.links.map((l) => <Link key={l.href} href={l.href} className="link-line text-[0.98rem]">{l.t}</Link>)}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Etage>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Toits />
      <Trades />
      <Expertise />
      <History />
      <Works />
      <FaqList items={home.faq} title="Les questions qu'on nous pose" i={6} />
      <Quarters />
      <CtaBand title={fr("Votre immeuble, du faîtage à la cave.")} text="Une fuite, une toiture, une évacuation : décrivez-nous le besoin, SPC vous recontacte." />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(home.faq)]} />
    </>
  );
}
