import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, ranges } from "@/lib/site";
import { breadcrumbNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Installations de chaudière et chauffe-eau gaz | Gaz Flash";
const description =
  "Chaudières à condensation et basse température, chauffe-eau gaz, régulation et thermostats : les gammes posées par Gaz Flash à Paris et en petite couronne.";
const crumbs = [rootCrumb, { name: "Installations", path: PATHS.installs }];

export const metadata = pageMeta({ title, description, path: PATHS.installs });

export default function InstallationsPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Installations"
        title="Chaudières, chauffe-eau et régulations"
        lead="Gaz Flash s'ajuste à tous les besoins de chauffage et de production d'eau chaude sanitaire : chaudière à condensation ou basse température, chauffe-eau et chauffe-bains à gaz, régulation et thermostats d'ambiance."
        image="gammeCondensation"
      />
      <section className="container-x pt-20">
        <div className="grid gap-8">
          {ranges.map((range, index) => (
            <Link key={range.path} href={range.path} className="lift zoom group grid overflow-hidden rounded-[4px] border border-line bg-white md:grid-cols-[0.9fr_1.1fr]" data-reveal="" style={{ ["--d" as string]: index % 2 }}>
              <div className={`relative min-h-[240px] ${index % 2 ? "md:order-2" : ""}`}>
                <Photo id={range.image} alt="" sizes="(min-width:768px) 520px, 100vw" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="font-display text-2xl font-bold tracking-widest text-flame">{range.letter}</span>
                <h2 className="mt-1 text-[clamp(2rem,4vw,3rem)]">{range.title}</h2>
                <p className="mt-3 text-coal-soft">{range.intro}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-coal-soft">{range.products.map((p) => p.brand).join(" · ")}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-flame-dark">
                  Voir les modèles <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="pt-28"><CtaBand title="Quelle installation pour votre logement ?" text="Gaz Flash réalise un diagnostic et vous conseille la solution la plus adaptée." /></div>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.installs }), breadcrumbNode(crumbs)]} />
    </>
  );
}
