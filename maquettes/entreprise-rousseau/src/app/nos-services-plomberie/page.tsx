import { CtaBand, Emergency, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, business, services } from "@/lib/site";

const title = "Plombier Paris 14e : urgences et dépannage | Rousseau";
const description = "Plombier à Paris 14e et en région parisienne : urgences, remplacement de sanitaires et chauffe-eau, dépannages. Particuliers, professionnels et syndics. Devis.";
const path = PATHS.plumbing;
const intro = `Entreprise Rousseau assure des services de plomberie pour les particuliers, les professionnels et les syndics de copropriété, à Paris et en région parisienne : urgences, remplacement de sanitaires et dépannages. Pour une fuite d'eau ou un engorgement, appelez le ${business.phoneDisplay}.`;

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Nos services plomberie"
        title="Plombier à Paris 14e : urgences et dépannages"
        lead="Particuliers, professionnels et syndics de copropriété : une équipe qui intervient rapidement sur Paris et la région parisienne."
        photo="plumbUrgence"
        photoAlt="Intervention de plomberie"
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Plomberie" }]}
        primary={{ href: `${PATHS.contact}?demande=urgence`, label: "Signaler une urgence" }}
      />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-4xl sm:text-5xl">
            Que couvre notre service de plomberie ?
          </h2>
          <p data-reveal className="reponse-bref lead mt-6">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Nos prestations de plomberie" className="section">
        <div className="container-x">
          <FeatureRows items={services.plumbing.items} accent="plomberie à Paris 14e" contactType="plomberie" />
        </div>
      </section>
      <Emergency />
      <FaqList keyName="plumbing" title="Vos questions sur la plomberie" />
      <CtaBand title="Une fuite, un robinet qui coule ?" text="Appelez-nous ou envoyez votre demande : nous vous répondons directement." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Plomberie", path }]), serviceNode("Plomberie et dépannage", path, intro), faqNode("plumbing")]} />
    </>
  );
}
