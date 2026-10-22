import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList } from "@/components/Sections";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, change, commitments, keep, offers, problems, shortAnswer, steps } from "@/lib/site";

const title = "Sites web pour plombiers et artisans | Atelier Truelle";
const description = "Atelier Truelle refait le site des plombiers et artisans du bâtiment à leur image. Maquette privée et gratuite avant tout devis, adresses de pages conservées.";

export const metadata = pageMeta({ title, description, path: "/" });

export default function Home() {
  return (
    <>
      <section className="blueprint relative overflow-hidden border-b border-line pb-20 pt-14 sm:pb-28 sm:pt-20" aria-labelledby="titre-principal">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow pop">Sites web pour artisans du bâtiment</p>
            <h1 id="titre-principal" className="pop mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.2rem]" style={{ ["--d" as string]: "80ms" }}>
              Votre site web, à la hauteur de <span className="text-terre-action">votre travail.</span>
            </h1>
            <p className="reponse-bref pop mt-7 max-w-xl text-lg" style={{ ["--d" as string]: "180ms" }}>
              <strong className="font-bold text-ardoise">En bref : </strong>
              {shortAnswer}
            </p>
            <div className="pop mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "280ms" }}>
              <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !px-8 !py-4 text-lg">
                Recevoir une maquette gratuite
                <ArrowIcon />
              </Link>
              <Link href={PATHS.method} className="btn-ghost !px-8 !py-4 text-lg">
                Voir comment ça marche
              </Link>
            </div>
          </div>
          <div className="pop" style={{ ["--d" as string]: "200ms" }}>
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-constats" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Ce que nous voyons souvent
          </p>
          <h2 id="titre-constats" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Un bon artisan, un site qui ne le montre pas.
          </h2>
          <p className="mt-5 max-w-2xl text-lg" data-reveal>
            En examinant les sites d'entreprises de plomberie, nous retrouvons régulièrement les mêmes freins. Ils se corrigent sans changer votre façon de travailler.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <article key={p.title} className="card" data-reveal style={{ ["--d" as string]: `${i * 110}ms` }}>
                <span className="font-display text-5xl font-extrabold text-terre/70">0{i + 1}</span>
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-3">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-garde" className="bg-platre-deep section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            C'est vous, en mieux
          </p>
          <h2 id="titre-garde" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Ce que nous gardons, ce que nous changeons.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card" data-reveal>
              <h3 className="text-2xl">Nous gardons</h3>
              <ul className="mt-5 space-y-3">
                {keep.map((k) => (
                  <li key={k} className="flex gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-terre-action" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-ardoise text-platre/85" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <h3 className="text-2xl !text-platre">Nous changeons</h3>
              <ul className="mt-5 space-y-3">
                {change.map((c) => (
                  <li key={c} className="flex gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#F0A28E]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-etapes" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Comment ça se passe
          </p>
          <h2 id="titre-etapes" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Vous voyez le résultat avant de payer quoi que ce soit.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={{ ["--d" as string]: `${i * 110}ms` }}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terre-action font-display text-2xl font-extrabold text-white">{i + 1}</span>
                <h3 className="mt-5 text-2xl">{s.title}</h3>
                <p className="mt-2">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12" data-reveal>
            <Link href={PATHS.method} className="inline-flex items-center gap-2 font-display font-bold text-terre-dark underline decoration-2 underline-offset-8 hover:text-ardoise">
              Lire la méthode en détail
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="titre-offres" className="bg-platre-deep section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Offres
          </p>
          <h2 id="titre-offres" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Trois niveaux, un prix annoncé avant le travail.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((o, i) => (
              <article key={o.key} className={`card ${"featured" in o ? "ring-2 ring-terre-action" : ""}`} data-reveal style={{ ["--d" as string]: `${i * 110}ms` }}>
                <h3 className="text-2xl">{o.name}</h3>
                <p className="mt-3 font-display text-3xl font-extrabold text-terre-dark">{o.price}</p>
                <p className="mt-1 text-sm text-zinc-dark">{o.note}</p>
                <p className="mt-4">{o.lead}</p>
              </article>
            ))}
          </div>
          <p className="mt-10" data-reveal>
            <Link href={PATHS.offers} className="btn-dark">
              Voir le détail des offres
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="titre-engagements" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Nos engagements</p>
            <h2 id="titre-engagements" className="mt-3 text-4xl sm:text-5xl">
              Pas de promesse en l'air.
            </h2>
            <p className="mt-5 text-lg">Les artisans sont souvent sollicités par des vendeurs de « premières places sur Google ». Nous préférons être clairs sur ce que nous faisons et ne faisons pas.</p>
          </div>
          <ul className="space-y-4" data-reveal style={{ ["--d" as string]: "100ms" }}>
            {commitments.map((c) => (
              <li key={c} className="card flex gap-4 !p-5">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-terre-action" />
                <span className="text-ardoise">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList title="Vos questions sur la refonte de site" />
      <CtaBand />
      <JsonLd nodes={[webPageNode({ title, description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode]} />
    </>
  );
}
