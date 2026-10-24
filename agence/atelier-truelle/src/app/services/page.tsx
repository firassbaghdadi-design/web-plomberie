import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, services } from "@/lib/site";

const title = "Services de marketing digital pour le bâtiment | Truelle";
const description = "Site web, référencement local, fiche Google, publicité, contenus et suivi des appels : les six services d'Atelier Truelle pour les artisans du bâtiment.";
const path = PATHS.services;
const intro = "Atelier Truelle propose six services de marketing digital aux entreprises du bâtiment : création de site web, référencement local et visibilité dans les assistants d'IA, fiche Google et avis, publicité en ligne, contenus de chantier et suivi des appels et des demandes. Vous choisissez un service ou l'ensemble, avec un seul interlocuteur.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Nos services" title="Six services, une même personne qui vous répond." lead="Prenez ce dont vous avez besoin, ou confiez-nous l'ensemble. Chaque mission est expliquée simplement, avec ce que nous faisons et ce que nous ne promettons pas." crumbs={[{ name: "Accueil", href: "/" }, { name: "Services" }]} photo="radiateur" note="un savoir-faire à montrer" />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            Que propose une agence de marketing digital pour le bâtiment ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Les six services" className="section">
        <div className="container-x">
          <ul className="rule-list">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={{ ["--d" as string]: `${(i % 3) * 70}ms` }}>
                <Link href={`${PATHS.services}/${s.slug}`} className="group grid gap-4 py-4 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-8">
                  <span className="font-display text-3xl font-semibold text-terre/60">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-display text-3xl font-semibold text-ardoise group-hover:text-terre-dark">{s.name}</span>
                    <span className="mt-2 block max-w-2xl text-lg">{s.short}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold text-terre-dark">
                    Voir le détail
                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="container-x mt-10 max-w-3xl text-sm text-zinc-dark" data-reveal>
          Nous ne publions pas de tarif : un site, une fiche Google ou une campagne ne représentent pas le même travail. Après un premier échange et la maquette gratuite, vous recevez un devis écrit avant le début de tout travail.
        </p>
      </section>
      <CtaBand title="Dites-nous ce dont vous avez besoin." text="Un site, une fiche Google, une campagne, un suivi, ou l'ensemble : nous construisons la bonne combinaison avec vous." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Services", path }])]} />
    </>
  );
}
