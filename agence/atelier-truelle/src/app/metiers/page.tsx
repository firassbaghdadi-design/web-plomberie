import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, trades } from "@/lib/site";

const title = "Marketing digital pour plombiers et électriciens | Truelle";
const description = "Atelier Truelle accompagne les plombiers, chauffagistes, électriciens, couvreurs, maçons et autres corps de métier du bâtiment dans leur visibilité en ligne.";
const path = PATHS.trades;
const intro = "Atelier Truelle accompagne les plombiers, chauffagistes, électriciens, couvreurs, maçons et autres corps de métier du bâtiment. Chaque métier a ses urgences, ses recherches et ses preuves à montrer : nous adaptons le site, le référencement local, la fiche Google et le suivi des demandes à votre activité.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Nos métiers" title="Une méthode, adaptée à chaque métier du bâtiment." lead="Un plombier en urgence et un maçon pour une extension ne sont pas cherchés de la même façon. Nous construisons votre présence en ligne autour de ce que font vos clients." crumbs={[{ name: "Accueil", href: "/" }, { name: "Métiers" }]} />
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
        <div className="container-x space-y-6">
          {trades.map((t, i) => (
            <article key={t.id} id={t.id} className="card scroll-mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" data-reveal style={{ ["--d" as string]: `${(i % 2) * 80}ms` }}>
              <div>
                <h3 className="text-3xl">{t.name}</h3>
                <p className="mt-5 text-sm font-bold uppercase tracking-widest text-zinc-dark">Recherches de vos clients</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.searches.map((q) => (
                    <li key={q} className="rounded-full bg-platre-deep px-4 py-1.5 text-sm text-ardoise">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <p>{t.text}</p>
            </article>
          ))}
          <p data-reveal>
            <Link href={PATHS.services} className="inline-flex items-center gap-2 font-display font-bold text-terre-dark underline decoration-2 underline-offset-8 hover:text-ardoise">
              Voir tous nos services
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
