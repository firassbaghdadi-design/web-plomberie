import Link from "next/link";
import { CallStrip, Eyebrow, Faq, GoogleReviews, RevealLines, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Frame, Logo, Photo } from "@/components/Photo";
import { ZoneMap } from "@/components/Sketches";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { PATHS, brandLogos, business, pageInfo, priceGroups, ranges, services, sweepPrice } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

const info = pageInfo(PATHS.home);
export const metadata = pageMeta(PATHS.home);

/** Le H1 (« Chauffagiste à Paris 18e, rue Sainte-Isaure, depuis 1965 ») révélé ligne par ligne. */
const heroLines = info.h1.split(/(?<=,) /);

const facts = [
  { n: "1965", t: "l'année où la maison s'installe dans le chauffage au gaz" },
  { n: "4", t: "métiers : entretien, dépannage, installation, ramonage" },
  { n: "4", t: "départements desservis : Paris, 92, 93 et 94" },
  { n: "2 ans", t: "de garantie sur les pièces des installations" },
];

export default function HomePage() {
  const chaudiere = priceGroups[0];
  return (
    <>
      {/* Héros : photo plein cadre, zoom très lent, titre révélé ligne par ligne, un seul bouton. */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-2 text-white" data-pipe-start="">
        <div className="hero-photo absolute inset-0">
          <Photo id="toitsCheminees" alt="Cheminées et toits de zinc à Montmartre, dans le 18e arrondissement de Paris" sizes="100vw" priority className="object-[62%_50%]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(13_15_17/0.08)_0%,rgb(13_15_17/0.05)_35%,rgb(13_15_17/0.62)_100%)]" aria-hidden="true" />
        <div className="wrap relative pb-36 pt-40 sm:pb-24">
          <p className="label fade-in text-white/80" style={{ ["--delay" as string]: "0.05s" }}>
            7 rue Sainte-Isaure, Paris 18e
          </p>
          <h1 className="mt-6 text-[clamp(2.75rem,6.4vw,5.75rem)] font-extralight leading-[0.98] !text-white">
            <RevealLines lines={heroLines} />
          </h1>
          <div className="fade-in mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8" style={{ ["--delay" as string]: "0.75s" }}>
            <Link href={PATHS.contact} data-track="generate_lead" className="btn">
              Demander un devis ou une intervention
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="tel text-[1.05rem] !text-white">
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
        <p className="label fade-in absolute bottom-6 right-6 hidden text-white/60 md:block" style={{ ["--delay" as string]: "1.1s" }}>
          Cheminées à Montmartre, Paris 18e
        </p>
      </section>

      {/* En bref, puis les chiffres clés, légers, sans encadré. */}
      <section className="wrap pt-24 sm:pt-36" aria-label="En bref">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)]" data-reveal>
          <p className="label pt-3 text-ink-soft" aria-hidden="true">En bref</p>
          <div className="brief brief-lg max-w-[34em]">
            <span className="tag" aria-hidden="true">En bref</span>
            <p className="reponse-bref">
              <strong className="sr-only">En bref : </strong>
              {info.brief}
            </p>
          </div>
        </div>
        <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line pt-12 lg:grid-cols-4" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {facts.map((f) => (
            <div key={f.t}>
              <dt className="font-display text-[clamp(2.6rem,5vw,4rem)] font-extralight leading-none tracking-[-0.04em] text-ink">{f.n}</dt>
              <dd className="mt-4 max-w-[22ch] text-[0.92rem] leading-relaxed text-ink-soft">{f.t}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 01 — Les métiers */}
      <section className="wrap mt-32 sm:mt-48" aria-labelledby="carte">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-20" data-reveal>
          <div>
            <Eyebrow flame>La carte de la maison</Eyebrow>
            <h2 id="carte" className="mt-6 max-w-[14ch]">Ce qu'on fait pour votre chauffage</h2>
          </div>
          <p className="max-w-[44ch] text-ink-soft">Quatre métiers, un seul numéro de téléphone. Chacun a sa page, avec les détails et, quand ils sont affichés, les prix.</p>
        </div>
        <figure className="mt-14 sm:mt-20" data-reveal>
          <Frame id="entretien" alt="Illustration : entretien d'une chaudière gaz murale par un technicien" ratio="21 / 9" sizes="(min-width:1200px) 1120px, 100vw" className="max-md:!aspect-[4/3]" />
          <figcaption className="label mt-3 text-ink-soft">L'entretien annuel, la base du métier</figcaption>
        </figure>
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(services).map((service, index) => (
            <li key={service.key} className="border-t border-ink pt-6" data-reveal style={{ ["--d" as string]: `${index * 90}ms` }}>
              <Link href={service.path} className="group block no-underline">
                <h3 className="text-[1.65rem] font-light tracking-[-0.02em] transition-colors group-hover:text-red-dark">{service.title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink">{service.line}</p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink">
                  En savoir plus <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 — Les prix */}
      <section className="wrap mt-32 sm:mt-48" aria-labelledby="tarifs">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-24">
          <div className="prose-gf" data-reveal>
            <Eyebrow>Les prix, noir sur blanc</Eyebrow>
            <h2 id="tarifs" className="!mt-6 max-w-[14ch]">Un entretien dont le prix est affiché</h2>
            <p>
              Pour l'entretien de la chaudière, on ne vous fait pas deviner. Les tarifs sont publiés en TTC, avec un prix pour le 18e et un prix pour le reste de Paris et de la petite couronne.
            </p>
            <p>
              Le <strong>forfait révision</strong> n'engage à rien : une visite, une attestation. Le <strong>contrat annuel</strong> ajoute tous les dépannages (main-d'œuvre et déplacement, hors pièces) et une intervention prioritaire en cas de panne.
            </p>
            <p>
              <Link href={PATHS.prices}>Voir tous les tarifs d'entretien et de ramonage</Link>
            </p>
          </div>
          <div className="lg:pt-24" data-reveal style={{ ["--d" as string]: "150ms" }}>
            <Ticket
              title="Chaudière · Paris 18e"
              rows={[
                { label: "Forfait révision, sans engagement", price: chaudiere.review.paris18 },
                { label: "Contrat d'entretien annuel", price: chaudiere.contract.paris18 },
                { label: "Ramonage du conduit gaz, avec l'entretien", price: sweepPrice },
              ]}
              note="Autres arrondissements et petite couronne : 150 € et 170 €."
            />
          </div>
        </div>
      </section>

      {/* 03 — La maison */}
      <section className="wrap mt-32 sm:mt-48" aria-labelledby="maison">
        <div data-reveal>
          <Eyebrow>Depuis 1965</Eyebrow>
          <h2 id="maison" className="mt-6 max-w-[16ch]">Une maison du 18e, rue Sainte-Isaure</h2>
        </div>
        <figure className="mt-14 sm:mt-20" data-reveal>
          <Frame id="heroTeam" alt="La devanture de Gaz Flash, 7 rue Sainte-Isaure à Paris 18e" ratio="21 / 9" sizes="(min-width:1200px) 1120px, 100vw" className="max-md:!aspect-[4/3]" />
          <figcaption className="label mt-3 text-ink-soft">Gaz Flash, Paris 18e</figcaption>
        </figure>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-20" data-reveal>
          <p className="text-[1.0625rem] leading-[1.8]">
            Gaz Flash s'occupe de chauffage au gaz depuis 1965. L'entreprise est installée rue Sainte-Isaure, dans le 18e arrondissement, et dessert Paris et trois départements de la petite couronne. Elle se présente comme spécialisée dans le chauffage depuis plus de cinquante ans, et reconnue par les plus grandes marques.
          </p>
          <div>
            <p className="text-[1.0625rem] leading-[1.8] text-ink-soft">
              Ce qu'elle promet, elle l'écrit : une prestation de qualité dans le cadre des contrats de maintenance, des conseils adaptés à votre besoin, des installations garanties 2 ans pour les pièces, une intervention rapide et efficace selon votre contrat.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <Logo id="certPdg" alt="Logo Professionnel du Gaz" className="h-12 w-auto" width={104} height={48} />
              <Logo id="certQualibat" alt="Logo Qualibat RGE" className="h-12 w-auto" width={104} height={48} />
              <Link href={PATHS.company} className="link-arrow">
                Faire connaissance <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* Respiration : les toits du quartier, pleine largeur. */}
      <figure className="mt-32 sm:mt-48" data-reveal>
        <div className="relative h-[62vh] min-h-[360px] overflow-hidden">
          <Photo id="toitsMontmartre" alt="Les toits de Montmartre, le quartier de Gaz Flash" sizes="100vw" className="object-[50%_60%]" />
        </div>
        <figcaption className="wrap label mt-3 text-ink-soft">Les toits de Montmartre, le quartier de la maison</figcaption>
      </figure>

      {/* 04 — Remplacer un appareil */}
      <section className="wrap mt-32 sm:mt-48" aria-labelledby="remplacer">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-20" data-reveal>
          <div>
            <Eyebrow>Un chauffage à remplacer ?</Eyebrow>
            <h2 id="remplacer" className="mt-6 max-w-[15ch]">Quatre familles d'appareils, après un diagnostic</h2>
          </div>
          <p className="max-w-[46ch] text-ink-soft">Avant de choisir un modèle, Gaz Flash réalise un diagnostic et vous conseille la solution la plus adaptée dans sa gamme, économe en énergie et compatible avec votre budget.</p>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:mt-20 md:grid-cols-2">
          {ranges.map((range, index) => (
            <Link key={range.path} href={range.path} className="group block no-underline" data-reveal style={{ ["--d" as string]: `${(index % 2) * 120}ms` }}>
              <Frame id={range.image} alt={`Illustration : ${range.title.toLowerCase()}`} ratio="16 / 9" sizes="(min-width:768px) 560px, 100vw" className="group-hover:[&_img]:scale-[1.03]" />
              <p className="mt-5 flex items-baseline gap-4">
                <span className="label text-red-dark">{range.letter}</span>
                <span className="font-display text-[1.35rem] font-light tracking-[-0.015em] text-ink transition-colors group-hover:text-red-dark">{range.title}</span>
              </p>
            </Link>
          ))}
        </div>
        <ul className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-line pt-10" data-reveal>
          {brandLogos.map((brand) => (
            <li key={brand.id} className="flex h-10 w-28 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Logo id={brand.id} alt={brand.name} className="max-h-9 w-auto max-w-full object-contain" width={112} height={36} />
            </li>
          ))}
          <li className="ml-auto">
            <Link href={PATHS.brands} className="link-arrow text-[0.95rem]">
              Les marques et leurs modèles <ArrowIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </section>

      {/* 05 — La zone */}
      <section className="wrap mt-32 sm:mt-48" aria-labelledby="zone">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
          <div className="prose-gf" data-reveal>
            <Eyebrow>Là où on intervient</Eyebrow>
            <h2 id="zone" className="!mt-6 max-w-[14ch]">Paris, et les trois départements voisins</h2>
            <p>
              Gaz Flash intervient à Paris, en Seine-Saint-Denis (93), dans les Hauts-de-Seine (92) et dans le Val-de-Marne (94). Les tarifs d'entretien font la différence entre le 18e, où se trouve l'entreprise, et tout le reste.
            </p>
            <ul>
              <li><Link href={PATHS.paris18}>Chauffagiste dans le 18e arrondissement</Link>, le quartier de la maison</li>
              <li><Link href={PATHS.zones}>La zone d'intervention en détail</Link>, avec les tarifs par zone</li>
            </ul>
          </div>
          <div data-reveal style={{ ["--d" as string]: "150ms" }}>
            <ZoneMap />
          </div>
        </div>
      </section>

      <Faq keyName="home" title="Les questions qu'on nous pose le plus" />
      <CallStrip />
      <JsonLd nodes={[webPageNode(PATHS.home), faqNode("home")]} />
    </>
  );
}
