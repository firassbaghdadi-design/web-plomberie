import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, ranges, type Range } from "@/lib/site";
import { breadcrumbNode, rootCrumb, serviceNode, webPageNode } from "@/lib/seo";

export function RangePage({ range }: { range: Range }) {
  const crumbs = [rootCrumb, { name: "Installations", path: PATHS.installs }, { name: range.title, path: range.path }];
  const others = ranges.filter((r) => r.path !== range.path);
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={`Installations · ${range.letter}`} title={range.title} lead={range.intro} image={range.image} />
      <section className="container-x pt-20">
        <h2 className="sr-only">Modèles présentés</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {range.products.map((product, index) => (
            <article key={product.model} className="card border-t-[6px] border-t-flame p-8" data-reveal="" style={{ ["--d" as string]: index % 2 }}>
              <p className="font-display text-xl font-semibold uppercase tracking-widest text-coal-soft">{product.brand}</p>
              <h3 className="mt-1 text-4xl uppercase">{product.model}</h3>
              <p className="mt-4 text-coal-soft">{product.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-coal-soft">Descriptifs issus de la documentation des constructeurs. Gaz Flash vous conseille le modèle adapté après un diagnostic de votre logement.</p>
      </section>

      <section className="container-x pt-24" aria-labelledby="autres-gammes">
        <h2 id="autres-gammes" className="h-section" data-reveal="">Les autres gammes</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {others.map((other) => (
            <Link key={other.path} href={other.path} className="btn btn-dark !text-lg">
              {other.letter} · {other.title} <ArrowIcon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </section>

      <div className="pt-28"><CtaBand title={`Un projet de ${range.title.toLowerCase()} ?`} text="Décrivez votre logement : Gaz Flash réalise un diagnostic et vous conseille." /></div>
      <JsonLd nodes={[webPageNode({ title: range.metaTitle, description: range.metaDescription, path: range.path }), breadcrumbNode(crumbs), serviceNode(range.title, range.path, range.metaDescription)]} />
    </>
  );
}
