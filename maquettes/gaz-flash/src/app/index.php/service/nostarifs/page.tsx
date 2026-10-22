import { CtaBand, Faq, PageHero, PriceTables } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { PATHS } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Tarifs entretien chaudière et ramonage à Paris | Gaz Flash";
const description =
  "Tarifs TTC de Gaz Flash à Paris 18e et en petite couronne : contrat d'entretien annuel, forfait révision sans engagement et ramonage du conduit de fumée gaz.";
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }, { name: "Nos tarifs", path: PATHS.prices }];

export const metadata = pageMeta({ title, description, path: PATHS.prices });

export default function PricesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Nos tarifs"
        title="Tarifs d'entretien de chaudière et de ramonage"
        lead="Gaz Flash publie ses tarifs TTC d'entretien : contrat annuel avec dépannages inclus, forfait révision sans engagement et ramonage, avec un prix pour Paris 18e et un prix pour les autres arrondissements et la petite couronne."
        image="entretien3"
      />
      <section className="container-x pt-20">
        <PriceTables />
      </section>
      <div className="pt-28"><Faq keyName="prices" /></div>
      <div className="pt-28"><CtaBand title="Choisir votre formule d'entretien" /></div>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.prices }), breadcrumbNode(crumbs), faqNode("prices")]} />
    </>
  );
}
