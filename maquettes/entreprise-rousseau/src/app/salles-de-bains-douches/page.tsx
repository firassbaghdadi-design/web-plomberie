import { CtaBand, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, services } from "@/lib/site";

const title = "Salle de bains et douche à Paris 14e | Entreprise Rousseau";
const description = "Installation et rénovation de salles de bains et de douches à Paris et en région parisienne : sur mesure, rénovation complète, conseils d'experts. Devis.";
const path = PATHS.bathrooms;
const intro = "Entreprise Rousseau installe et rénove des salles de bains et des douches à Paris et en région parisienne : installation sur mesure, du choix des matériaux à la mise en œuvre, rénovation complète et conseils d'experts adaptés à votre budget. Un devis vous est proposé avant les travaux.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Salles de bains / douches"
        title="Salles de bains et douches à Paris 14e"
        lead="Une approche unique pour une expertise de confiance et des conseils personnalisés, afin d'optimiser votre confort."
        photo="bathInstall"
        photoAlt="Salle de douche"
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Salles de bains / douches" }]}
        primary={{ href: `${PATHS.contact}?demande=salle-de-bains`, label: "Parler de mon projet" }}
      />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-4xl sm:text-5xl">
            Qui installe ou rénove une salle de bains à Paris ?
          </h2>
          <p data-reveal className="reponse-bref lead mt-6">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Nos prestations salles de bains" className="section">
        <div className="container-x">
          <FeatureRows items={services.bathrooms.items} accent="salle de bains à Paris" contactType="salle-de-bains" />
        </div>
      </section>
      <section aria-label="Réalisations" className="pb-20 sm:pb-28">
        <div className="container-x grid auto-rows-[220px] gap-4 sm:auto-rows-[300px] md:grid-cols-3">
          {(["showerWide", "bathWide", "showerWide2"] as const).map((id, i) => (
            <div key={id} data-reveal="zoom" style={{ ["--d" as string]: `${i * 110}ms` }} className="card-photo relative overflow-hidden rounded-3xl shadow-lift">
              <Photo id={id} alt={id === "bathWide" ? "Salle de bains" : "Douche"} sizes="(min-width:768px) 33vw, 92vw" />
            </div>
          ))}
        </div>
      </section>
      <FaqList keyName="bathrooms" title="Vos questions sur les salles de bains" />
      <CtaBand title="Votre salle de bains, enfin comme vous la rêvez." text="Parlez-nous de votre projet : nous vous conseillons et vous proposons un devis." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Salles de bains / douches", path }]), serviceNode("Aménagement de salles de bains et douches", path, intro), faqNode("bathrooms")]} />
    </>
  );
}
