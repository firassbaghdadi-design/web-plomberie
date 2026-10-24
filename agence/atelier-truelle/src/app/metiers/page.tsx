import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { Figure } from "@/components/Photo";
import { PATHS, trades } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";

const photoFor: Record<string, PhotoId> = {
  "plombiers-chauffagistes": "radiateur",
  electriciens: "tableau",
  couvreurs: "toit",
  "macons-renovation": "macon",
  "autres-corps-de-metier": "chantier",
};

const title = "Marketing digital pour plombiers et électriciens | Truelle";
const description = "Atelier Truelle accompagne les plombiers, chauffagistes, électriciens, couvreurs, maçons et autres corps de métier du bâtiment dans leur visibilité en ligne.";
const path = PATHS.trades;
const intro = "Atelier Truelle accompagne les plombiers, chauffagistes, électriciens, couvreurs, maçons et autres corps de métier du bâtiment. Chaque métier a ses urgences, ses recherches et ses preuves à montrer : nous adaptons le site, le référencement local, la fiche Google et le suivi des demandes à votre activité.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Nos métiers" title="Chaque métier a sa façon d'être appelé." lead="Un plombier en urgence et un maçon pour une extension ne sont pas cherchés de la même façon. Nous construisons votre présence en ligne autour de ce que font vos clients." crumbs={[{ name: "Accueil", href: "/" }, { name: "Métiers" }]} />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            Pour quels métiers travaillez-vous ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Les métiers" className="section">
        <div className="container-x space-y-20">
          {trades.map((t, i) => (
            <article key={t.id} id={t.id} className={`scroll-mt-28 grid items-center gap-8 lg:gap-16 ${i % 2 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`} data-reveal>
              <div className={i % 2 ? "lg:order-2" : ""}>
                <Figure id={photoFor[t.id]} caption={t.name.split(" ")[0].toLowerCase() + ", à votre service"} ratio="aspect-[3/2]" tilt={i % 2 ? "1.2deg" : "-1.2deg"} sizes="(min-width:1024px) 480px, 90vw" />
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <h2 className="text-3xl sm:text-4xl">{t.name}</h2>
                <p className="mt-4 text-lg">{t.text}</p>
                <p className="hand mt-6">ce que vos clients tapent sur Google</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {t.searches.map((q) => (
                    <li key={q} className="border border-ardoise/25 bg-platre-light px-3 py-1.5 text-sm text-ardoise">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <p data-reveal>
            <Link href={PATHS.services} className="inline-flex items-center gap-2 font-semibold text-terre-dark underline decoration-2 underline-offset-8 hover:text-ardoise">
              Voir ce que nous faisons
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>
      <CtaBand title="Votre métier n'est pas dans la liste ?" text="Écrivez-nous : nous adaptons la méthode à votre activité." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Métiers", path }])]} />
    </>
  );
}
