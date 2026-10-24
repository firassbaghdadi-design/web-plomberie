import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Figure } from "@/components/Photo";
import { CtaBand, FaqList, PageHeader } from "@/components/Sections";
import { Signature } from "@/components/Signature";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, commitments, type Faq } from "@/lib/site";

const title = "Notre histoire : une agence web pour artisans | Truelle";
const description = "Pourquoi Atelier Truelle existe : une agence web qui montre d'abord le travail aux artisans du bâtiment, sans contrat à signer avant d'avoir vu le résultat.";
const path = PATHS.story;
const intro = "Atelier Truelle est une petite agence web pour les artisans du bâtiment d'Île-de-France. Elle est née d'un constat : beaucoup d'entreprises de métier ont un vrai savoir-faire et un site qui ne les montre pas. Sa règle est de montrer d'abord le travail, sur une maquette privée gratuite, et de ne parler contrat qu'ensuite.";

const faq: Faq[] = [
  { q: "Pourquoi avoir choisi le bâtiment ?", a: "Parce que ce sont des métiers où l'on est jugé sur pièces, et où un client décide vite : une fuite, une panne, un devis à comparer. Un site clair et une fiche Google soignée y changent directement le nombre d'appels." },
  { q: "Faites-vous autre chose que des sites web ?", a: "Oui : référencement local, fiche Google et avis, publicité en ligne, contenus de chantier et suivi des appels. Mais tout part du site, et rien ne commence avant que vous ayez vu la maquette." },
  { q: "Comment vous contacter ?", a: "Par le formulaire de la page contact. Une personne lit votre message et vous répond par e-mail." },
];

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Notre histoire" title="Une idée simple : montrer d'abord." lead="Voici pourquoi l'atelier existe, comment il travaille, et ce qu'il s'interdit." crumbs={[{ name: "Accueil", href: "/" }, { name: "Notre histoire" }]} photo="mains" note="faire, de ses mains" />

      <section aria-label="Résumé" className="section pb-0">
        <div className="container-x max-w-3xl">
          <p className="reponse-bref border-l-2 border-terre-action pl-5 text-lg" data-reveal>
            <strong className="font-semibold text-ardoise">En bref : </strong>
            {intro}
          </p>
        </div>
      </section>

      <article className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
          <div className="space-y-16 text-lg leading-8">
            <section data-reveal aria-labelledby="h-nom">
              <h2 id="h-nom" className="text-3xl sm:text-4xl">Le nom</h2>
              <p className="drop mt-5">Une truelle, c'est l'outil du maçon et du plâtrier. Elle sert à poser droit et à finir proprement. Nous avons voulu un nom qui sente le chantier plutôt que le bureau, parce que nos clients travaillent avec leurs mains et qu'ils se méfient, à raison, des mots creux.</p>
            </section>

            <section data-reveal aria-labelledby="h-constat">
              <h2 id="h-constat" className="text-3xl sm:text-4xl">Ce que nous avons remarqué</h2>
              <p className="mt-5">En regardant les entreprises du bâtiment d'Île-de-France, on retrouve souvent la même histoire. Une maison installée depuis longtemps, des clients fidèles, un travail propre. Et un site qui n'a pas bougé depuis des années, ou pas de site du tout. Sur Google, la fiche est à moitié remplie. Le téléphone sonne par bouche-à-oreille, jamais par Internet.</p>
              <p className="mt-5">À côté de cela, ces mêmes artisans reçoivent des appels de vendeurs qui promettent la première place sur Google, avec un contrat à signer tout de suite. Ils se méfient. Nous les comprenons.</p>
            </section>

            <section data-reveal aria-labelledby="h-choix">
              <h2 id="h-choix" className="text-3xl sm:text-4xl">Ce que nous avons décidé</h2>
              <p className="mt-5">Faire l'inverse. Plutôt que de vous demander de nous croire, nous refaisons votre page d'accueil avec votre logo, vos couleurs et vos photos, et nous vous l'envoyons par un lien privé. Vous la regardez à votre rythme. Si elle ne vous plaît pas tout à fait, nous la modifions selon vos goûts, sans rien payer, jusqu'à ce que nous soyons d'accord sur la version que vous voulez. Le devis ne se signe qu'ensuite.</p>
              <p className="mt-5">Cela nous coûte du temps. C'est voulu : nous pensons qu'une entreprise sérieuse peut se permettre de montrer son travail avant de demander quoi que ce soit.</p>
            </section>

            <section data-reveal aria-labelledby="h-limites">
              <h2 id="h-limites" className="text-3xl sm:text-4xl">Ce que nous ne savons pas faire</h2>
              <p className="mt-5">Nous ne posons pas de chaudière et nous ne réparons pas de toiture : votre métier, c'est le chantier, et nous le respectons. Nous ne remplaçons pas non plus le bouche-à-oreille. Votre meilleure publicité reste un client content qui parle de vous. Nous faisons en sorte qu'il puisse vous retrouver, et que le suivant vous trouve aussi.</p>
            </section>

            <section data-reveal aria-labelledby="h-regles">
              <h2 id="h-regles" className="text-3xl sm:text-4xl">Ce que nous nous interdisons</h2>
              <ul className="rule-list mt-6">
                {commitments.map((c) => (
                  <li key={c} className="flex gap-4">
                    <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rotate-45 bg-terre-action" />
                    <span className="text-ardoise">{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div data-reveal className="flex items-center gap-4">
              <Signature />
              <span className="hand">l'atelier</span>
            </div>
          </div>

          <aside className="hidden space-y-12 lg:block" aria-hidden="true">
            <Figure id="tablette" caption="le site, d'abord sur écran" ratio="aspect-[4/5]" tilt="1.4deg" sizes="260px" />
            <Figure id="toit" caption="le chantier, c'est vous" ratio="aspect-[4/5]" tilt="-1.4deg" sizes="260px" />
          </aside>
        </div>
      </article>

      <FaqList items={faq} title="Quelques précisions" />
      <section className="container-x pb-20 text-center">
        <Link href={PATHS.method} className="inline-flex items-center gap-2 font-semibold text-terre-dark underline decoration-2 underline-offset-8 hover:text-ardoise">
          Voir notre méthode, étape par étape
          <ArrowIcon />
        </Link>
      </section>
      <CtaBand />
      <JsonLd nodes={[{ ...webPageNode({ title, description, path }), "@type": "AboutPage" }, breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Notre histoire", path }]), faqNode(faq)]} />
    </>
  );
}
