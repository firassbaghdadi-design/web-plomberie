import { CtaBand, Faq, PageHero, ServiceCard } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { PATHS, services } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Services de chauffage au gaz à Paris et petite couronne";
const description =
  "Entretien, dépannage, installation et ramonage de chaudière gaz à Paris, en Seine-Saint-Denis, Hauts-de-Seine et Val-de-Marne : les services de Gaz Flash.";
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }];

export const metadata = pageMeta({ title, description, path: PATHS.services });

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Nos services"
        title="Entretien, dépannage, installation, ramonage"
        lead="Gaz Flash prend en charge votre chauffage au gaz à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne : un service d'entretien et de dépannage depuis 1965, et plus seulement des installations."
        image="heroInstall"
      />
      <section className="container-x pt-20" aria-label="Les services">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(services).map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </div>
      </section>
      <div className="pt-28">
        <Faq keyName="home" />
      </div>
      <div className="pt-28">
        <CtaBand />
      </div>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.services }), breadcrumbNode(crumbs), faqNode("home")]} />
    </>
  );
}
