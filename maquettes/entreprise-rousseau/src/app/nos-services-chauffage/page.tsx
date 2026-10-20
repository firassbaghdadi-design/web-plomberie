import { CtaBand, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, business, services } from "@/lib/site";

const title = "Chauffagiste Paris 14e : chaudières | Entreprise Rousseau";
const description = "Chauffagiste à Paris 14e et en région parisienne : remplacement de chaudières à condensation, entretien annuel, radiateurs et robinets thermostatiques. Devis.";
const path = PATHS.heating;
const intro = `Entreprise Rousseau remplace, entretient et dépanne les chaudières à Paris et en région parisienne. L'entretien annuel d'une chaudière gaz est obligatoire ; remplacer une vieille chaudière par une chaudière à condensation permet de réaliser des économies d'énergie. Demandez votre devis au ${business.phoneDisplay}.`;

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nos services chauffage"
        title="Chauffagiste à Paris 14e : chaudières et chauffage"
        lead="Les chaudières ont énormément évolué : plus performantes, moins gourmandes, plus fiables. Profitez-en pour alléger vos factures."
        photo="heatReplace"
        photoAlt="Chauffage et chaudières"
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Chauffage" }]}
        primary={{ href: `${PATHS.contact}?demande=chauffage`, label: "Demander un devis chaudière" }}
      />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-4xl sm:text-5xl">
            Que fait un chauffagiste à Paris 14e ?
          </h2>
          <p data-reveal className="reponse-bref lead mt-6">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Nos prestations de chauffage" className="section">
        <div className="container-x">
          <FeatureRows items={services.heating.items} accent="chauffage à Paris 14e" contactType="chauffage" />
        </div>
      </section>
      <section aria-labelledby="titre-contrat" className="pb-20 sm:pb-28">
        <div className="container-x">
          <div data-reveal="zoom" className="ocean relative overflow-hidden rounded-[2rem] p-8 text-white shadow-glow sm:p-14">
            <p className="eyebrow-light">À savoir</p>
            <h2 id="titre-contrat" className="mt-3 max-w-3xl text-3xl !text-white sm:text-5xl">
              Contrat d'entretien de chaudière : obligatoire ou pas ?
            </h2>
            <ul className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                "Souscrire un contrat d'entretien de chaudière n'est pas obligatoire.",
                "Ce qui l'est : faire entretenir chaque année toute chaudière d'une puissance comprise entre 4 et 400 kilowatts.",
                "L'obligation concerne à la fois les propriétaires et les locataires d'un logement équipé d'une chaudière.",
              ].map((text) => (
                <li key={text} className="flex gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-amber" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FaqList keyName="heating" title="Vos questions sur le chauffage" />
      <CtaBand title="Une chaudière à entretenir ou à remplacer ?" text="Dites-nous de quel appareil il s'agit : nous vous proposons un devis." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Chauffage", path }]), serviceNode("Chauffage et chaudières", path, intro), faqNode("heating")]} />
    </>
  );
}
