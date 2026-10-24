import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Figure, Photo } from "@/components/Photo";
import { CtaBand, FaqList } from "@/components/Sections";
import { Signature } from "@/components/Signature";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, commitments, homeFaqs, owned, services, shortAnswer, steps } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";

const title = "Agence web pour artisans du bâtiment en Île-de-France";
const description = "Atelier Truelle refait le site des plombiers, électriciens, couvreurs et maçons d'Île-de-France. Maquette privée gratuite : vous regardez, puis vous décidez.";

export const metadata = pageMeta({ title, description, path: "/" });

const tradeStrip: { photo: PhotoId; name: string; line: string }[] = [
  { photo: "plombier", name: "Plombiers et chauffagistes", line: "Quand l'eau coule là où elle ne devrait pas, on cherche un numéro, vite." },
  { photo: "electricien", name: "Électriciens", line: "Un tableau à refaire, une borne à poser : le client veut savoir qui vient, et quand." },
  { photo: "couvreur", name: "Couvreurs", line: "Une toiture se juge sur pièces. Vos chantiers terminés sont votre meilleure vitrine." },
  { photo: "macon", name: "Maçons et rénovation", line: "Un gros projet, un gros budget : le client compare longtemps avant d'appeler." },
];

export default function Home() {
  return (
    <>
      <section className="pb-20 pt-10 sm:pb-28 sm:pt-16" aria-labelledby="titre-principal">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="hand pop">Pour les artisans du bâtiment</p>
            <h1 id="titre-principal" className="pop mt-3 text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]" style={{ ["--d" as string]: "80ms" }}>
              Vous faites du bon travail. Faisons en sorte que <span className="underline-draw text-terre-action">ça se voie</span>.
            </h1>
            <p className="pop mt-7 max-w-xl text-lg sm:text-xl" style={{ ["--d" as string]: "220ms" }}>
              Un plombier, un électricien ou un couvreur n'a pas le temps de s'occuper d'Internet. Nous, c'est notre métier. Nous refaisons votre site, soignons votre fiche Google et faisons en sorte que vos clients vous trouvent et vous appellent.
            </p>
            <div className="pop mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ ["--d" as string]: "340ms" }}>
              <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !px-8 !py-4 text-lg">
                Voir mon site refait
                <ArrowIcon />
              </Link>
              <span className="hand">gratuit, vous regardez d'abord</span>
            </div>
          </div>
          <div className="pop mx-auto w-full max-w-md lg:max-w-none" style={{ ["--d" as string]: "200ms" }}>
            <Figure id="plombier" caption="le travail bien fait, ça se montre" ratio="aspect-[4/5]" tilt="1.6deg" sizes="(min-width:1024px) 440px, 90vw" priority />
          </div>
        </div>
        <div className="container-x mt-16">
          <p className="reponse-bref max-w-3xl border-l-2 border-terre-action pl-5 text-base">
            <strong className="font-semibold text-ardoise">En bref : </strong>
            {shortAnswer}
          </p>
        </div>
      </section>

      <section aria-labelledby="titre-soir" className="border-y border-line bg-platre-light section">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Un soir de chantier</p>
            <h2 id="titre-soir" className="mt-3 text-4xl sm:text-5xl">
              Une scène que vous connaissez.
            </h2>
            <div className="mt-8 hidden lg:block">
              <Figure id="telephone" caption="le téléphone sonne… ou pas" ratio="aspect-[4/3]" tilt="-1.4deg" sizes="320px" />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-8" data-reveal>
            <p className="drop">
              Il est 18 h 40. Vous rangez l'outillage dans la camionnette, les mains encore sales. Dans la journée, quelqu'un a cherché un plombier près de chez lui. Il vous a trouvé sur Google, il a cliqué, puis il a hésité.
            </p>
            <p>
              Votre fiche n'a presque pas de photos. Votre site date d'une époque où l'on consultait Internet sur un ordinateur, il met du temps à s'ouvrir et le numéro est difficile à trouver sur téléphone. Il est donc retourné à la liste et il a appelé le suivant, celui dont le site s'ouvre tout de suite.
            </p>
            <p>Vous n'avez rien fait de mal. Vous avez passé la journée à travailler.</p>
            <p className="font-display text-2xl font-semibold text-ardoise sm:text-3xl">C'est à ce moment-là que l'atelier intervient.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-facon" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Notre façon de faire
          </p>
          <h2 id="titre-facon" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            On commence par le travail, pas par le contrat.
          </h2>
          <p className="mt-6 max-w-2xl text-lg" data-reveal>
            Beaucoup d'artisans ont déjà reçu des appels de vendeurs qui promettent la première place sur Google, avec un contrat de douze mois à signer tout de suite. Ils ont souvent eu raison de raccrocher. Nous faisons l'inverse.
          </p>
          <ol className="mt-16 space-y-20">
            {steps.map((step, i) => (
              <li key={step.title} className={`grid items-center gap-8 lg:gap-16 ${i % 2 ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`} data-reveal>
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <Figure id={step.photo as PhotoId} caption={step.note} ratio="aspect-[3/2]" tilt={i % 2 ? "1.2deg" : "-1.2deg"} sizes="(min-width:1024px) 480px, 90vw" />
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <p className="font-display text-6xl font-semibold leading-none text-terre/50">{i + 1}</p>
                  <h3 className="mt-3 text-3xl sm:text-4xl">{step.title}</h3>
                  <p className="mt-4 text-lg">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="titre-faisons" className="bg-ardoise section text-platre/80">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow !text-[#F0A28E]">Ce que nous faisons</p>
            <h2 id="titre-faisons" className="mt-3 text-4xl !text-platre sm:text-5xl">
              Six choses, qui servent toutes à faire sonner le téléphone.
            </h2>
            <p className="mt-6 text-lg">Vous prenez ce dont vous avez besoin, ou l'ensemble. Dans les deux cas, vous parlez à la même personne.</p>
            <Link href={PATHS.services} className="mt-8 inline-flex items-center gap-2 font-semibold text-platre underline decoration-terre decoration-2 underline-offset-8">
              Le détail de chaque service
              <ArrowIcon />
            </Link>
          </div>
          <ul className="divide-y divide-platre/15 border-y border-platre/15" data-reveal>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${PATHS.services}/${s.slug}`} className="group flex items-start justify-between gap-6 py-5">
                  <span>
                    <span className="block font-display text-2xl font-semibold text-platre">{s.name}</span>
                    <span className="mt-1 block text-[0.95rem]">{s.short}</span>
                  </span>
                  <ArrowIcon className="mt-2 h-5 w-5 shrink-0 text-terre transition group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titre-metiers" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Les métiers que nous suivons
          </p>
          <h2 id="titre-metiers" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Chaque métier a sa façon d'être appelé.
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {tradeStrip.map((t, i) => (
              <Link key={t.name} href={PATHS.trades} className="group block" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div className="photo aspect-[4/5]">
                  <Photo id={t.photo} sizes="(min-width:1024px) 270px, 45vw" className="transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-2xl">{t.name}</h3>
                <p className="mt-2 text-[0.95rem]">{t.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-regles" className="border-y border-line bg-platre-deep section">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Nos règles</p>
            <h2 id="titre-regles" className="mt-3 text-4xl sm:text-5xl">
              Ce que nous vous devons.
            </h2>
            <p className="mt-6 text-lg">On l'écrit noir sur blanc, pour que vous puissiez nous le rappeler.</p>
            <div className="mt-10">
              <p className="font-display text-2xl font-semibold text-ardoise">Ce qui reste à vous</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {owned.map((o) => (
                  <li key={o} className="border border-ardoise/25 bg-platre-light px-3 py-1.5 text-sm text-ardoise">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="rule-list" data-reveal>
            {commitments.map((c) => (
              <li key={c} className="flex gap-4">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-terre-action" />
                <span className="text-lg text-ardoise">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titre-mot" className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <Figure id="mains" caption="faire, de ses mains" ratio="aspect-[4/5]" tilt="-1.5deg" sizes="(min-width:1024px) 400px, 80vw" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Un mot de l'atelier</p>
            <h2 id="titre-mot" className="mt-3 text-4xl sm:text-5xl">
              Pourquoi « Truelle » ?
            </h2>
            <div className="mt-6 space-y-5 text-lg">
              <p>Nous aimons les métiers où l'on fait quelque chose de ses mains. La truelle sert à poser droit et à finir proprement. C'est ce que nous essayons de faire avec le site de votre entreprise, en moins poussiéreux.</p>
              <p>Nous ne sommes pas une grande agence et nous ne cherchons pas à le paraître. Quand vous nous écrivez, une personne lit votre message et vous répond.</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Signature />
              <span className="hand">l'atelier</span>
            </div>
            <Link href={PATHS.story} className="mt-6 inline-flex items-center gap-2 font-semibold text-terre-dark underline decoration-2 underline-offset-8 hover:text-ardoise">
              Lire toute notre histoire
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <FaqList items={homeFaqs} title="Les questions qu'on nous pose, et celles qu'on n'ose pas toujours poser." />
      <CtaBand />
      <JsonLd nodes={[webPageNode({ title, description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode(homeFaqs)]} />
    </>
  );
}
