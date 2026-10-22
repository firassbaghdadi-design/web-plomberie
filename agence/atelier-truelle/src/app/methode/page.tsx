import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, method } from "@/lib/site";

const title = "Méthode de refonte de site pour artisans | Atelier Truelle";
const description = "Audit, maquette privée, reprise des contenus, redirections : comment Atelier Truelle refait le site d'un artisan sans perdre son référencement ni ses pages.";
const path = PATHS.method;
const intro = "Atelier Truelle refait le site d'une entreprise du bâtiment en sept étapes : audit de l'existant, maquette privée, reprise des contenus, construction pensée pour le téléphone, référencement, mise en ligne avec redirections et suivi. Vous voyez la maquette avant tout devis.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Notre méthode" title="Comment nous refaisons le site d'une entreprise du bâtiment." lead="Sept étapes, du premier regard sur votre site à son suivi dans le temps. Rien n'est caché, et vous décidez à chaque étape." crumbs={[{ name: "Accueil", href: "/" }, { name: "Méthode" }]} />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            Que comprend concrètement une refonte ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Les sept étapes" className="section">
        <div className="container-x max-w-4xl">
          <ol className="space-y-6">
            {method.map((m, i) => (
              <li key={m.title} className="card flex gap-6" data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                <span aria-hidden="true" className="font-display text-5xl font-extrabold leading-none text-terre/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl">{m.title.replace(/^\d+\.\s*/, "")}</h3>
                  <p className="mt-3">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Commençons par la maquette." text="Elle ne vous coûte rien et ne vous engage à rien." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Méthode", path }]), serviceNode("Refonte de site web pour artisans du bâtiment", path, intro)]} />
    </>
  );
}
