import Link from "next/link";
import { Checklist, CtaBand, Faq, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, services, sweepPrice } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, serviceNode, webPageNode } from "@/lib/seo";

const s = services.sweep;
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }, { name: s.title, path: s.path }];

export const metadata = pageMeta({ title: s.metaTitle, description: s.metaDescription, path: s.path });

export default function SweepPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Ramonage"
        title={s.h1}
        lead="Le ramonage est une obligation légale et, avant tout, une question de sécurité : il vous protège et préserve vos biens. Il améliore aussi le fonctionnement de vos équipements."
        image="ramonage"
      />

      <section className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-gf" data-reveal="">
            <h2 className="!mt-0 text-[clamp(2.2rem,4.6vw,3.4rem)]">Ce que le ramonage permet</h2>
            <p>Le ramonage répond à plusieurs objectifs liés à la réduction des risques :</p>
            <Checklist
              items={[
                "Diminuer l'encrassement des conduits d'évacuation de fumée",
                "Réduire les risques d'intoxication au monoxyde de carbone",
                "Limiter les émissions de gaz à effet de serre",
                "Améliorer le fonctionnement d'une cheminée ou la durée de vie d'une chaudière",
                "Remplir les conditions imposées par les assurances et la loi",
                "Réduire la consommation de combustible",
              ]}
            />
            <h3>Retenez que</h3>
            <ul>
              <li>Le ramonage doit être réalisé au moins une fois par an.</li>
              <li>Votre commune ou votre assureur peuvent exiger un second ramonage annuel.</li>
              <li>Seul un ramonage effectué par un professionnel qualifié est considéré comme valable.</li>
              <li>La remise d'un certificat de ramonage en bonne et due forme est obligatoire.</li>
            </ul>
            <p>
              Vous conformer à ces règles vous permet de chauffer votre logement en toute sécurité. Si un accident arrive à votre domicile, avoir confié le ramonage à un professionnel vous permet de faire valoir votre assurance. Dans le cas contraire, votre compagnie d'assurance est en droit de vous refuser toute indemnisation, et votre responsabilité peut être engagée en cas de dommages causés à un tiers.
            </p>
          </div>
          <aside className="space-y-6" data-reveal="">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="ramonage2" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
            <div className="card border-t-[6px] border-t-flame p-6">
              <p className="font-display text-xl font-semibold uppercase tracking-wider text-coal-soft">Ramonage du conduit gaz</p>
              <p className="mt-2 font-display text-6xl font-extrabold text-flame-dark">
                {sweepPrice} <small className="font-sans text-sm font-semibold text-coal-soft">TTC</small>
              </p>
              <p className="mt-2 text-sm text-coal-soft">Réalisé uniquement en même temps que l'entretien de la chaudière.</p>
              <Link href={PATHS.prices} className="mt-5 inline-flex items-center gap-2 font-semibold text-flame-dark underline underline-offset-4">
                Tous les tarifs <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <div className="pt-28"><Faq keyName="sweep" /></div>
      <div className="pt-28"><CtaBand title="Planifier votre ramonage avec l'entretien" /></div>
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path: s.path }), breadcrumbNode(crumbs), serviceNode(s.title, s.path, s.metaDescription), faqNode("sweep")]} />
    </>
  );
}
