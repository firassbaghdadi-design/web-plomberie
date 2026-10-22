import Link from "next/link";
import { ArrowIcon, serviceIcons } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, services } from "@/lib/site";

const title = "Services de marketing digital pour le bâtiment | Truelle";
const description = "Site web, référencement local, fiche Google et avis, publicité, contenus et suivi des demandes : les six services d'Atelier Truelle pour le bâtiment.";
const path = PATHS.services;
const intro = "Atelier Truelle propose six services de marketing digital aux entreprises du bâtiment : création de site web, référencement local et visibilité dans les assistants d'IA, fiche Google et avis, publicité en ligne, contenus de chantier et suivi des appels et des demandes. Vous choisissez un service ou l'ensemble, avec un seul interlocuteur.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Nos services" title="Six services, un seul interlocuteur." lead="Choisissez ce dont vous avez besoin, ou confiez-nous l'ensemble. Chaque mission est expliquée simplement, avec ce que nous faisons et ce que nous ne promettons pas." crumbs={[{ name: "Accueil", href: "/" }, { name: "Services" }]} />
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
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Link key={s.slug} href={`${PATHS.services}/${s.slug}`} className="service-card card group block" data-reveal style={{ ["--d" as string]: `${(i % 2) * 100}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terre-action text-white">
                  <Icon />
                </span>
                <h3 className="mt-6 text-2xl">{s.name}</h3>
                <p className="mt-3">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-terre-dark">
                  Voir le détail
                  <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
        <p className="container-x mt-10 max-w-3xl text-sm text-zinc-dark" data-reveal>
          Nous ne publions pas de tarif : chaque entreprise a des besoins différents. Après un premier échange et la maquette gratuite, vous recevez un devis personnalisé avant le début de tout travail.
        </p>
      </section>
      <CtaBand title="Dites-nous ce dont vous avez besoin." text="Un site, une fiche Google, une campagne, un suivi, ou l'ensemble : nous construisons la bonne combinaison avec vous." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Services", path }])]} />
    </>
  );
}
