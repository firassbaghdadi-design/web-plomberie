import Link from "next/link";
import { Checklist, CtaBand, Faq, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, business, priceGroups, services } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, serviceNode, webPageNode } from "@/lib/seo";

const s = services.maintenance;
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }, { name: s.title, path: s.path }];

export const metadata = pageMeta({ title: s.metaTitle, description: s.metaDescription, path: s.path });

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Entretien"
        title={s.h1}
        lead="Gaz Flash entretient votre chaudière à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et le Val-de-Marne : une visite annuelle de prévention, une attestation remise, et une équipe qui se déplace si l'appareil tombe en panne."
        image="entretien"
      />

      <section className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-gf" data-reveal="">
            <h2 className="!mt-0 text-[clamp(2.2rem,4.6vw,3.4rem)]">Le contrat d'entretien Gaz Flash</h2>
            <p>L'entretien annuel d'une chaudière gaz limite les pannes, préserve ses performances et réduit les risques liés au monoxyde de carbone. Voici ce que couvre le contrat :</p>
            <Checklist
              items={[
                "Entretien d'appareils à gaz",
                "Nettoyage pour la prévention des risques liés au monoxyde de carbone",
                "Ramonage du conduit gaz (option possible au contrat)",
                "Désembouage du réseau de chauffage (en option, sur demande)",
              ]}
            />
            <h3>Vous avez déjà un contrat d'entretien</h3>
            <p>Notre équipe vient régulièrement effectuer une visite annuelle de prévention afin d'éviter toute panne. Si, malgré cela, votre chaudière gaz tombe en panne, une équipe spécialisée de Gaz Flash se déplace pour vous dépanner.</p>
            <h3>Vous n'avez pas encore de contrat</h3>
            <p>
              Contactez notre service commercial au <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> : il vous proposera les meilleures conditions dans le cadre d'un contrat adapté à vos besoins.
            </p>
            <p>
              <a href="https://gazflash.fr/wp-content/uploads/2022/CONTRAT%20D%E2%80%99ABONNEMENT%20&%20ENTRETIEN%20GAZFLASH.pdf" rel="noopener noreferrer" target="_blank">
                Voir les conditions générales d'abonnement (PDF)
              </a>
            </p>
          </div>
          <aside className="space-y-6" data-reveal="">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="contrat" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
            <div className="card border-t-[6px] border-t-flame p-6">
              <p className="font-display text-xl font-semibold uppercase tracking-wider text-coal-soft">Chaudière · Paris 18e</p>
              <p className="mt-2 font-display text-5xl font-extrabold text-coal">
                {priceGroups[0].review.paris18} <small className="font-sans text-sm font-semibold text-coal-soft">TTC · forfait révision</small>
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-flame-dark">
                {priceGroups[0].contract.paris18} <small className="font-sans text-sm font-semibold text-coal-soft">TTC · contrat annuel</small>
              </p>
              <Link href={PATHS.prices} className="mt-5 inline-flex items-center gap-2 font-semibold text-flame-dark underline underline-offset-4">
                Tous les tarifs <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <div className="pt-28"><Faq keyName="maintenance" /></div>
      <div className="pt-28"><CtaBand title="Souscrire un contrat ou réserver une révision" /></div>
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path: s.path }), breadcrumbNode(crumbs), serviceNode(s.title, s.path, s.metaDescription), faqNode("maintenance")]} />
    </>
  );
}
