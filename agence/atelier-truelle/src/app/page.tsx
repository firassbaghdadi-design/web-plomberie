import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ArrowIcon, CheckIcon, serviceIcons } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Orbit } from "@/components/Orbit";
import { CtaBand, FaqList } from "@/components/Sections";
import { Words } from "@/components/Words";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, change, commitments, homeFaqs, keep, pillars, services, shortAnswer, steps, trades } from "@/lib/site";

const title = "Agence web et marketing digital pour le bâtiment | Truelle";
const description = "Atelier Truelle accompagne plombiers, électriciens, couvreurs et maçons : site web, référencement local, fiche Google, publicité et suivi des demandes.";

export const metadata = pageMeta({ title, description, path: "/" });

export default function Home() {
  return (
    <>
      <section className="blueprint relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20" aria-labelledby="titre-principal">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow pop">Agence web et marketing digital · bâtiment</p>
            <h1 id="titre-principal" className="mt-5 text-[2.5rem] sm:text-5xl lg:text-[3.7rem]">
              <Words text="Le marketing digital des entreprises du" />
              <Words text="bâtiment." className="text-terre-action" startDelay={450} />
            </h1>
            <p className="reponse-bref pop mt-7 max-w-xl text-lg" style={{ ["--d" as string]: "600ms" }}>
              <strong className="font-bold text-ardoise">En bref : </strong>
              {shortAnswer}
            </p>
            <div className="pop mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "700ms" }}>
              <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !px-8 !py-4 text-lg">
                Recevoir une maquette gratuite
                <ArrowIcon />
              </Link>
              <Link href={PATHS.services} className="btn-ghost !px-8 !py-4 text-lg">
                Découvrir nos services
              </Link>
            </div>
          </div>
          <div className="pop" style={{ ["--d" as string]: "300ms" }}>
            <Orbit />
          </div>
        </div>
      </section>

      <Marquee items={["Plombiers", "Chauffagistes", "Électriciens", "Couvreurs", "Maçons", "Peintres", "Menuisiers", "Plaquistes", "Rénovation"]} />

      <section aria-labelledby="titre-services" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Un seul interlocuteur
          </p>
          <h2 id="titre-services" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Six leviers pour que vos clients vous trouvent, vous appellent et vous choisissent.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Link key={s.slug} href={`${PATHS.services}/${s.slug}`} className="service-card card group block" data-reveal style={{ ["--d" as string]: `${(i % 3) * 100}ms` }}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terre-action text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-6 text-2xl">{s.name}</h3>
                  <p className="mt-3">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display font-bold text-terre-dark">
                    En savoir plus
                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-pourquoi" className="bg-ardoise section text-platre/80">
        <div className="container-x">
          <p className="eyebrow !text-[#F0A28E]" data-reveal>
            Pourquoi nous
          </p>
          <h2 id="titre-pourquoi" className="mt-3 max-w-3xl text-4xl !text-platre sm:text-5xl" data-reveal>
            Une agence qui connaît le bâtiment.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="border-l-2 border-terre pl-6">
                <h3 className="text-2xl !text-platre">{p.title}</h3>
                <p className="mt-3">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-site" className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow" data-reveal>
              Votre site web, en mieux
            </p>
            <h2 id="titre-site" className="mt-3 text-4xl sm:text-5xl" data-reveal>
              C'est vous, en mieux.
            </h2>
            <p className="mt-5 text-lg" data-reveal>
              Nous reprenons ce qui fait votre identité et nous modernisons le reste. Vous voyez le résultat sur une maquette privée avant de décider quoi que ce soit.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2" data-reveal>
              <div>
                <h3 className="text-xl">Nous gardons</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {keep.map((k) => (
                    <li key={k} className="flex gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-terre-action" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl">Nous changeons</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {change.map((c) => (
                    <li key={c} className="flex gap-2">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-terre-action" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div data-reveal style={{ ["--d" as string]: "120ms" }}>
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-metiers" className="bg-platre-deep section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Nos métiers
          </p>
          <h2 id="titre-metiers" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Pour toutes les entreprises du bâtiment.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trades.map((t, i) => (
              <Link key={t.id} href={`${PATHS.trades}#${t.id}`} className="service-card card block !p-7" data-reveal style={{ ["--d" as string]: `${(i % 3) * 90}ms` }}>
                <h3 className="text-xl">{t.name}</h3>
                <p className="mt-2 text-sm">{t.searches.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-etapes" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Comment ça se passe
          </p>
          <h2 id="titre-etapes" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Vous voyez le résultat avant de vous engager.
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

      <section aria-labelledby="titre-engagements" className="bg-platre-deep section">
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

      <FaqList items={homeFaqs} title="Vos questions sur le marketing digital pour le bâtiment" />
      <CtaBand />
      <JsonLd nodes={[webPageNode({ title, description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode(homeFaqs)]} />
    </>
  );
}
