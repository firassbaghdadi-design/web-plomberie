import Link from "next/link";
import { CtaBand, Faq, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, ranges, services } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, rootCrumb, serviceNode, webPageNode } from "@/lib/seo";

const s = services.install;
const crumbs = [rootCrumb, { name: "Services", path: PATHS.services }, { name: s.title, path: s.path }];

export const metadata = pageMeta({ title: s.metaTitle, description: s.metaDescription, path: s.path });

export default function InstallPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Installation"
        title={s.h1}
        lead="Gaz Flash réalise un diagnostic, vous conseille la solution la plus adaptée dans toute sa gamme, économe en énergie et compatible avec votre budget, puis pose votre chaudière, votre chauffe-eau ou votre régulation."
        image="installation"
      />

      <section className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-gf" data-reveal="">
            <h2 className="!mt-0 text-[clamp(2.2rem,4.6vw,3.4rem)]">Une solution clé en main</h2>
            <p>Nous réalisons l'installation de vos chaudières, chauffe-eau, régulations et radiateurs. Vous n'avez plus qu'à en profiter.</p>
            <p>Nos installations sont garanties 2 ans pour les pièces. Spécialisée dans le chauffage depuis plus de 50 ans, l'entreprise est reconnue par les plus grandes marques.</p>
            <h3>Les gammes que nous posons</h3>
            <ul>
              {ranges.map((range) => (
                <li key={range.path}>
                  <Link href={range.path}>{range.title}</Link> : {range.products.map((p) => p.brand).join(", ")}
                </li>
              ))}
            </ul>
            <Link href={PATHS.installs} className="btn btn-dark mt-8 !text-white no-underline">
              Voir les installations <ArrowIcon />
            </Link>
          </div>
          <aside className="space-y-6" data-reveal="">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="installation2" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Photo id="plans" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
          </aside>
        </div>
      </section>

      <div className="pt-28"><Faq keyName="install" /></div>
      <div className="pt-28"><CtaBand title="Parlons de votre projet de chauffage" text="Décrivez votre logement et votre besoin : nous réalisons un diagnostic et vous conseillons." /></div>
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path: s.path }), breadcrumbNode(crumbs), serviceNode(s.title, s.path, s.metaDescription), faqNode("install")]} />
    </>
  );
}
