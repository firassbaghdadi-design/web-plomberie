import { Checklist, CtaBand, Faq, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { PATHS, business, services } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, serviceNode, webPageNode } from "@/lib/seo";

const s = services.repair;
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }, { name: s.title, path: s.path }];

export const metadata = pageMeta({ title: s.metaTitle, description: s.metaDescription, path: s.path });

export default function RepairPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Dépannage"
        title={s.h1}
        lead="Gaz Flash garantit une intervention rapide, effectuée par des techniciens spécialisés et formés par les constructeurs, sur votre chauffage à gaz, votre chauffe-eau, votre radiateur à gaz ou votre ballon électrique."
        image="depannage"
      />

      <section className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-gf" data-reveal="">
            <h2 className="!mt-0 text-[clamp(2.2rem,4.6vw,3.4rem)]">Dépannage et remise en route</h2>
            <Checklist items={["Chauffage à gaz", "Chauffe-eau à gaz", "Radiateur à gaz", "Ballon électrique"]} />
            <h3>Nos engagements pour le dépannage de chauffage au gaz</h3>
            <Checklist
              items={[
                "Respect des délais d'intervention convenus",
                "Interventions rapides",
                "Permanence téléphonique",
                "Tarifs prédéfinis",
                "Conseils pratiques",
                "Personnel qualifié",
                "Personnel formé par les constructeurs",
                "Devis détaillé",
                "Explications claires sur l'origine de la panne",
              ]}
            />
            <p>
              Pour une panne, appelez le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h. Avec un contrat d'entretien, les dépannages sont inclus (main-d'œuvre et déplacement, hors pièces) et l'intervention est prioritaire.
            </p>
          </div>
          <aside className="space-y-6" data-reveal="">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="depannage2" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="depannage3" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
          </aside>
        </div>
      </section>

      <div className="pt-28"><Faq keyName="repair" /></div>
      <div className="pt-28"><CtaBand title="Une panne de chauffage ou d'eau chaude ?" text="Appelez le standard : un technicien spécialisé prend en charge votre demande." /></div>
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path: s.path }), breadcrumbNode(crumbs), serviceNode(s.title, s.path, s.metaDescription), faqNode("repair")]} />
    </>
  );
}
