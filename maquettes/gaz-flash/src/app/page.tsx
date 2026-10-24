import Link from "next/link";
import { Brief, CallStrip, Eyebrow, Faq, GoogleReviews, HoursSlate, Stamp, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Frame, Logo, Polaroid } from "@/components/Photo";
import { ZoneMap } from "@/components/Sketches";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { PATHS, brandLogos, business, pageInfo, priceGroups, ranges, services, sweepPrice } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

const info = pageInfo(PATHS.home);
export const metadata = pageMeta(PATHS.home);

export default function HomePage() {
  const chaudiere = priceGroups[0];
  return (
    <>
      <section className="wrap pt-10 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <Eyebrow>7 rue Sainte-Isaure, Paris 18e</Eyebrow>
            <h1 className="mt-1 max-w-[18ch] sm:max-w-[20ch]">{info.h1}</h1>
            <div className="mt-6 max-w-[60ch]">
              <Brief text={info.brief} />
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={PATHS.contact} data-track="generate_lead" className="btn">
                Demander un devis ou une intervention
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn btn-ghost">
                <PhoneIcon />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] pb-4 lg:pb-24">
            <Polaroid id="heroTeam" alt="Illustration : une solution de chauffage clé en main" caption="Gaz Flash, Paris 18e" ratio="4 / 3" sizes="(min-width:1024px) 470px, 90vw" rotate={2} priority />
            <Stamp className="absolute -left-1 top-6 sm:-left-5">Depuis 1965</Stamp>
            <div className="relative z-10 mt-8 max-w-[300px] lg:absolute lg:-bottom-6 lg:-left-12 lg:mt-0 lg:w-[270px]" style={{ transform: "rotate(-1.5deg)" }}>
              <HoursSlate />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap mt-24" aria-labelledby="carte">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]">
          <div>
            <Eyebrow>La carte de la maison</Eyebrow>
            <h2 id="carte" className="mt-1">Ce qu'on fait pour votre chauffage</h2>
            <p className="mt-4 text-ink-soft">Quatre métiers, un seul numéro de téléphone. Chacun a sa page, avec les détails et, quand ils sont affichés, les prix.</p>
          </div>
          <ul className="ruled">
            {Object.values(services).map((service) => (
              <li key={service.key}>
                <Link href={service.path} className="group grid grid-cols-[96px_minmax(0,1fr)] items-center gap-4 py-4 no-underline sm:grid-cols-[150px_minmax(0,1fr)_auto] sm:gap-6">
                  <Frame id={service.image} alt={`Illustration : ${service.title.toLowerCase()}`} ratio="3 / 2" sizes="150px" />
                  <div>
                    <h3 className="text-ink-2 underline decoration-red/50 underline-offset-4 group-hover:decoration-red">{service.title}</h3>
                    <p className="hand text-[1.3rem] text-red-btn">{service.line}</p>
                    <p className="mt-1 hidden text-[0.95rem] text-ink-soft sm:block">{service.short}</p>
                  </div>
                  <ArrowIcon className="hidden h-6 w-6 text-red-btn transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap mt-24" aria-labelledby="tarifs">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="prose-gf">
            <Eyebrow>Les prix, noir sur blanc</Eyebrow>
            <h2 id="tarifs" className="!mt-1">Un entretien dont le prix est affiché</h2>
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
          <Ticket
            className="mx-auto w-full max-w-[420px] lg:rotate-[1.2deg]"
            title="Chaudière · Paris 18e"
            rows={[
              { label: "Forfait révision, sans engagement", price: chaudiere.review.paris18 },
              { label: "Contrat d'entretien annuel", price: chaudiere.contract.paris18 },
              { label: "Ramonage du conduit gaz, avec l'entretien", price: sweepPrice },
            ]}
            note="Autres arrondissements et petite couronne : 150 € et 170 €."
          />
        </div>
      </section>

      <section className="wrap mt-24" aria-labelledby="maison">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <Polaroid id="heroTrust" alt="Illustration : une équipe fiable, la maintenance des appareils depuis 1965" caption="Une équipe fiable" ratio="4 / 3" sizes="(min-width:1024px) 440px, 90vw" rotate={-2} className="mx-auto w-full max-w-[440px]" />
          <div className="prose-gf">
            <Eyebrow>Depuis 1965</Eyebrow>
            <h2 id="maison" className="!mt-1">Une maison du 18e, rue Sainte-Isaure</h2>
            <p>
              Gaz Flash s'occupe de chauffage au gaz depuis 1965. L'entreprise est installée rue Sainte-Isaure, dans le 18e arrondissement, et dessert Paris et trois départements de la petite couronne. Elle se présente comme spécialisée dans le chauffage depuis plus de cinquante ans, et reconnue par les plus grandes marques.
            </p>
            <p>
              Ce qu'elle promet, elle l'écrit : une prestation de qualité dans le cadre des contrats de maintenance, des conseils adaptés à votre besoin, des installations garanties 2 ans pour les pièces, une intervention rapide et efficace selon votre contrat.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <Logo id="certPdg" alt="Logo Professionnel du Gaz" className="h-14 w-auto" width={120} height={56} />
              <Logo id="certQualibat" alt="Logo Qualibat RGE" className="h-14 w-auto" width={120} height={56} />
              <Link href={PATHS.company} className="link-arrow">
                Faire connaissance <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="wrap mt-24" aria-labelledby="remplacer">
        <div className="max-w-[60ch]">
          <Eyebrow>Un chauffage à remplacer ?</Eyebrow>
          <h2 id="remplacer" className="mt-1">Quatre familles d'appareils, après un diagnostic</h2>
          <p className="mt-3 text-ink-soft">Avant de choisir un modèle, Gaz Flash réalise un diagnostic et vous conseille la solution la plus adaptée dans sa gamme, économe en énergie et compatible avec votre budget.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-6">
          {ranges.map((range, index) => (
            <Link
              key={range.path}
              href={range.path}
              className={`group block no-underline ${index === 2 ? "col-span-2 md:col-span-3" : index === 0 ? "md:col-span-2" : index === 1 ? "md:col-span-1 md:mt-8" : "md:col-span-2"}`}
            >
              <Frame id={range.image} alt={`Illustration : ${range.title.toLowerCase()}`} ratio={index === 2 ? "16 / 9" : "4 / 3"} sizes="(min-width:768px) 40vw, 90vw" />
              <p className="mt-2 flex items-baseline gap-2">
                <span className="hand text-[1.7rem] text-red-btn">{range.letter}</span>
                <span className="font-display text-[1.15rem] font-semibold text-ink-2 underline decoration-red/50 underline-offset-4 group-hover:decoration-red">{range.title}</span>
              </p>
            </Link>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap items-center gap-4">
          {brandLogos.map((brand) => (
            <li key={brand.id} className="flex h-16 w-32 items-center justify-center border border-ink/20 bg-white px-3">
              <Logo id={brand.id} alt={brand.name} className="max-h-10 w-auto max-w-full object-contain" width={120} height={40} />
            </li>
          ))}
          <li>
            <Link href={PATHS.brands} className="link-arrow">
              Les marques et leurs modèles <ArrowIcon className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </section>

      <section className="wrap mt-24" aria-labelledby="zone">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="prose-gf">
            <Eyebrow>Là où on intervient</Eyebrow>
            <h2 id="zone" className="!mt-1">Paris, et les trois départements voisins</h2>
            <p>
              Gaz Flash intervient à Paris, en Seine-Saint-Denis (93), dans les Hauts-de-Seine (92) et dans le Val-de-Marne (94). Les tarifs d'entretien font la différence entre le 18e, où se trouve l'entreprise, et tout le reste.
            </p>
            <ul>
              <li><Link href={PATHS.paris18}>Chauffagiste dans le 18e arrondissement</Link>, le quartier de la maison</li>
              <li><Link href={PATHS.zones}>La zone d'intervention en détail</Link>, avec les tarifs par zone</li>
            </ul>
          </div>
          <ZoneMap />
        </div>
      </section>

      <Faq keyName="home" title="Les questions qu'on nous pose le plus" />
      <CallStrip />
      <JsonLd nodes={[webPageNode(PATHS.home), faqNode("home")]} />
    </>
  );
}
