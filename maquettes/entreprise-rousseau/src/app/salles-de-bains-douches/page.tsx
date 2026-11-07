import { CtaBand, DeepContent, LocalBlock, SeeAlso, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, copy, services } from "@/lib/site";

const c = copy.bathrooms;
const { title, description } = c;
const path = PATHS.bathrooms;

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.heroTitle}
        lead={c.lead}
        photo={c.heroPhoto}
        photoAlt={c.heroAlt}
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Salles de bains / douches" }]}
        primary={{ href: `${PATHS.contact}?demande=salle-de-bains`, label: "Parler de mon projet" }}
      />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" className="text-4xl sm:text-5xl">
            {c.introTitle}
          </h2>
          <p className="reponse-bref lead mt-6">
            {c.intro}
          </p>
        </div>
      </section>
      <section aria-label="Nos prestations salles de bains" className="section">
        <div className="container-x">
          <FeatureRows items={services.bathrooms.items} accent={c.accent} contactType="salle-de-bains" />
        </div>
      </section>
      <DeepContent deep={c.deep} />
      <section aria-label="Réalisations" className="pb-20 sm:pb-28">
        <div className="container-x grid auto-rows-[220px] gap-4 sm:auto-rows-[300px] md:grid-cols-3">
          {c.gallery.map((id, i) => (
            <div key={id} data-reveal="zoom" style={{ ["--d" as string]: `${i * 110}ms` }} className="card-photo relative overflow-hidden rounded-3xl shadow-lift">
              <Photo id={id} alt={id.startsWith("bath") ? "Salle de bains" : "Douche"} sizes="(min-width:768px) 33vw, 92vw" />
            </div>
          ))}
        </div>
      </section>
      <LocalBlock deep={c.deep} contactType="salle-de-bains" />
      <FaqList keyName="bathrooms" title={c.faqTitle} />
      <SeeAlso current="bathrooms" />
      <CtaBand title={c.ctaTitle} text={c.ctaText} />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Salles de bains / douches", path }]), serviceNode("Aménagement de salles de bains et douches", path, c.intro), faqNode("bathrooms")]} />
    </>
  );
}
