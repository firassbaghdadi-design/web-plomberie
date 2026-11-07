import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, method } from "@/lib/site";

const title = "Notre méthode de travail pour le bâtiment | Atelier Truelle";
const description = "Audit, maquette privée, reprise des contenus, redirections et mesure : comment Atelier Truelle développe votre visibilité sans perdre votre référencement.";
const path = PATHS.method;
const intro = "Atelier Truelle travaille en sept étapes : audit de l'existant, maquette privée, reprise des contenus, construction pensée pour le téléphone, référencement, mise en ligne avec redirections, puis mesure et amélioration. Vous voyez la maquette avant tout devis et décidez à chaque étape.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Notre méthode" title="Comment nous travaillons, étape par étape." lead="Sept étapes, du premier regard sur votre site à son suivi dans le temps. Rien n'est caché, et vous décidez à chaque étape." crumbs={[{ name: "Accueil", href: "/" }, { name: "Méthode" }]} photo="tablette" note="d'abord la maquette" />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            Comment travaille Atelier Truelle ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Les sept étapes" className="section">
        <div className="container-x max-w-4xl">
          <ol className="rule-list">
            {method.map((m, i) => (
              <li key={m.title} className="grid gap-4 py-2 sm:grid-cols-[5rem_1fr] sm:gap-8" data-reveal>
                <span aria-hidden="true" className="font-display text-5xl font-semibold leading-none text-terre/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl">{m.title.replace(/^\d+\.\s*/, "")}</h2>
                  <p className="mt-3 text-lg">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Commençons par la maquette." text="Elle ne vous coûte rien et ne vous engage à rien." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Méthode", path }]), serviceNode("Marketing digital pour entreprises du bâtiment", path, intro)]} />
    </>
  );
}
