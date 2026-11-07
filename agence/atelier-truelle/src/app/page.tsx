import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Figure, Photo } from "@/components/Photo";
import { CtaBand, FaqList } from "@/components/Sections";
import { ServiceList } from "@/components/ServiceList";
import { Signature } from "@/components/Signature";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, commitments, homeFaqs, owned, services, shortAnswer, steps, trades } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";

const title = "Agence web pour artisans du bâtiment en Île-de-France";
const description = "Atelier Truelle refait le site des plombiers, électriciens, couvreurs et maçons d'Île-de-France. Maquette privée gratuite : vous regardez, puis vous décidez.";

export const metadata = pageMeta({ title, description, path: "/" });

const serviceRows: { photo: PhotoId }[] = [{ photo: "plans" }, { photo: "radiateur" }, { photo: "tableau" }, { photo: "toit" }, { photo: "rabot" }, { photo: "bois" }];
const panelPhotos: Record<string, PhotoId> = {
  "plombiers-chauffagistes": "plombier",
  electriciens: "electricien",
  couvreurs: "couvreur",
  "macons-renovation": "macon",
  "autres-corps-de-metier": "peintre",
};
const panelShort: Record<string, string> = {
  "plombiers-chauffagistes": "Plombiers",
  electriciens: "Électriciens",
  couvreurs: "Couvreurs",
  "macons-renovation": "Maçons",
  "autres-corps-de-metier": "Peintres et autres",
};
const manifesto =
  "Beaucoup d'artisans ont déjà reçu l'appel d'un vendeur qui promet la première place sur Google, avec un contrat de douze mois à signer tout de suite. Ils ont souvent eu raison de raccrocher. Nous faisons l'inverse : on commence par le travail, vous regardez, et vous décidez ensuite.";
const trade = ["Plombiers", "Chauffagistes", "Électriciens", "Couvreurs", "Maçons", "Peintres", "Menuisiers", "Plaquistes", "Carreleurs"];

export default function Home() {
  return (
    <>
      {/* ---------- Héros ---------- */}
      <section className="hero" aria-labelledby="titre-principal">
        <div className="container-x">
          <div className="fade-in mb-10 flex flex-wrap items-center justify-between gap-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-ardoise" style={{ ["--i" as string]: 0 }}>
            <span>Agence web · Marketing digital · Bâtiment</span>
            <span className="hidden sm:inline">Île-de-France · 2026</span>
          </div>
          <h1 id="titre-principal" className="hero-title">
            <span className="mask"><span style={{ ["--i" as string]: 0 }}>Vous faites du</span></span>
            <span className="mask"><span style={{ ["--i" as string]: 1 }}><em>bon travail.</em></span></span>
            <span className="mask"><span style={{ ["--i" as string]: 2 }}>Faisons en sorte</span></span>
            <span className="mask"><span style={{ ["--i" as string]: 3 }}>que <em className="underline-draw">ça se voie.</em></span></span>
          </h1>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <p className="fade-in max-w-md text-lg" style={{ ["--i" as string]: 4 }}>
              Un plombier, un électricien ou un couvreur n'a pas le temps de s'occuper d'Internet. Nous, c'est notre métier : votre site, votre fiche Google, et un téléphone qui sonne.
            </p>
            <Link href={`${PATHS.contact}?sujet=maquette`} className="spin-badge fade-in justify-self-start lg:justify-self-center" style={{ ["--i" as string]: 5 }} data-magnetic="" data-cursor="Go" aria-label="Voir mon site refait, maquette gratuite">
              <span className="ring" aria-hidden="true">
                {Array.from("MAQUETTE GRATUITE · VOUS REGARDEZ D'ABORD · ").map((ch, i, a) => (
                  <i key={i} style={{ transform: `rotate(${(i * 360) / a.length}deg)` }}>{ch}</i>
                ))}
              </span>
              <ArrowIcon className="h-9 w-9 -rotate-45" />
            </Link>
            <p className="reponse-bref fade-in max-w-md border-l-2 border-terre-action pl-5 text-[0.95rem] lg:justify-self-end" style={{ ["--i" as string]: 6 }}>
              <strong className="font-semibold text-ardoise">En bref : </strong>
              {shortAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Collage photo ---------- */}
      <section aria-label="Ambiance de chantier" className="pb-24 sm:pb-36">
        <div className="container-x grid grid-cols-12 items-start gap-4 sm:gap-8">
          <div className="collage-img col-span-5 aspect-[3/4] sm:col-span-4" data-reveal="clip">
            <div className="inner" data-speed="0.07"><Photo id="truelle" sizes="(min-width:1024px) 30vw, 45vw" priority /></div>
          </div>
          <div className="collage-img col-span-7 mt-16 aspect-[4/5] sm:col-span-5 sm:mt-28" data-reveal="clip" style={{ ["--d" as string]: "150ms" }}>
            <div className="inner" data-speed="0.14"><Photo id="chantier2" sizes="(min-width:1024px) 38vw, 60vw" /></div>
          </div>
          <div className="collage-img col-span-5 col-start-2 mt-2 aspect-[3/4] sm:col-span-3 sm:col-start-auto sm:mt-10" data-reveal="clip" style={{ ["--d" as string]: "300ms" }}>
            <div className="inner" data-speed="0.1"><Photo id="casque" sizes="(min-width:1024px) 22vw, 45vw" /></div>
          </div>
        </div>
      </section>

      {/* ---------- Défilement de métiers ---------- */}
      <section aria-label="Métiers accompagnés" className="overflow-hidden border-y border-ardoise/20 py-6">
        <div className="marquee" aria-hidden="true">
          {[0, 1].map((k) => (
            <div key={k} className="marquee-track" style={{ paddingRight: 0 }}>
              {trade.map((t, i) => (
                <span key={`${k}-${t}`} className={`px-6 font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-[-0.03em] ${i % 2 ? "outline" : "text-noir"}`}>
                  {t}
                  <span className="mx-6 inline-block text-terre">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Manifeste ---------- */}
      <section aria-labelledby="titre-manifeste" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>Notre façon de faire</p>
          <h2 id="titre-manifeste" className="sr-only">On commence par le travail, pas par le contrat</h2>
          <p className="manifesto mt-10 max-w-[28ch] font-display text-[clamp(2rem,5.3vw,5.2rem)] leading-[1.06] tracking-[-0.03em] text-ardoise sm:max-w-[34ch]" data-manifesto="">
            {manifesto.split(" ").map((w, i) => (
              <span key={i} className="w">{w}{" "}</span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------- Un soir de chantier ---------- */}
      <section aria-labelledby="titre-soir" className="relative bg-noir py-24 text-platre sm:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow !text-terre before:!bg-terre">Un soir de chantier</p>
            <h2 id="titre-soir" className="mt-5 text-5xl !text-platre sm:text-7xl">
              Une scène que <em>vous connaissez.</em>
            </h2>
          </div>
          <div className="space-y-8 text-xl leading-9 text-platre/80 sm:text-2xl sm:leading-10" data-reveal>
            <p className="drop">
              Il est 18 h 40. Vous rangez l'outillage dans la camionnette, les mains encore sales. Dans la journée, quelqu'un a cherché un plombier près de chez lui. Il vous a trouvé sur Google, il a cliqué, puis il a hésité.
            </p>
            <p>
              Votre fiche n'a presque pas de photos. Votre site date d'une époque où l'on consultait Internet sur un ordinateur, il met du temps à s'ouvrir et le numéro est difficile à trouver sur téléphone. Il est donc retourné à la liste et il a appelé le suivant, celui dont le site s'ouvre tout de suite.
            </p>
            <p className="text-platre">Vous n'avez rien fait de mal. Vous avez passé la journée à travailler.</p>
            <p className="font-display text-4xl text-terre sm:text-6xl">
              <em>C'est là que l'atelier intervient.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Le chantier en trois temps (horizontal) ---------- */}
      <section aria-labelledby="titre-facon" className="hscroll bg-platre" data-hscroll="">
        <div className="hscroll-pin py-20">
          <div className="container-x">
            <p className="eyebrow" data-reveal>Le chantier en trois temps</p>
            <h2 id="titre-facon" className="mt-4 max-w-3xl text-4xl sm:text-6xl" data-reveal>
              Écouter, construire, <em>vous laisser choisir.</em>
            </h2>
          </div>
          <div className="hscroll-track mt-12">
            {steps.map((step, i) => (
              <article key={step.title} className="hcard" data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
                <div className="photo order-1 aspect-[4/3] lg:aspect-auto lg:min-h-full">
                  <Photo id={step.photo as PhotoId} sizes="(min-width:1024px) 34vw, 90vw" />
                </div>
                <div className="order-2 flex flex-col justify-between gap-6 p-1 lg:p-6">
                  <p className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-3xl sm:text-4xl">{step.title}</h3>
                    <p className="mt-4 text-lg">{step.text}</p>
                    <p className="hand mt-4">{step.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="container-x mt-10 hidden lg:block"><div className="hprogress" style={{ background: "rgba(20,25,28,.15)" }}><i /></div></div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section aria-labelledby="titre-faisons" className="bg-noir py-24 text-platre sm:py-36">
        <div className="container-x">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div data-reveal>
              <p className="eyebrow !text-terre before:!bg-terre">Ce que nous faisons</p>
              <h2 id="titre-faisons" className="mt-5 max-w-3xl text-5xl !text-platre sm:text-7xl">
                Six choses, une seule <em>personne</em> qui vous répond.
              </h2>
            </div>
            <Link href={PATHS.services} className="btn-light" data-cursor="Tout voir">
              Le détail de chaque service <ArrowIcon />
            </Link>
          </div>
          <ServiceList rows={services.map((s, i) => ({ href: `${PATHS.services}/${s.slug}`, name: s.name, short: s.short, photo: serviceRows[i].photo }))} />
        </div>
      </section>

      {/* ---------- Métiers ---------- */}
      <section aria-labelledby="titre-metiers" className="section">
        <div className="container-x">
          <p className="eyebrow" data-reveal>Les métiers que nous suivons</p>
          <h2 id="titre-metiers" className="mt-5 max-w-4xl text-5xl sm:text-7xl" data-reveal>
            Chaque métier a sa façon <em>d'être appelé.</em>
          </h2>
          <div className="panels mt-14" data-reveal>
            {trades.map((t) => (
              <Link key={t.id} href={`${PATHS.trades}#${t.id}`} className="panel" data-cursor="Voir">
                <div className="bg"><Photo id={panelPhotos[t.id]} sizes="(min-width:1024px) 45vw, 100vw" /></div>
                <div className="body">
                  <h3 className="title text-3xl !text-platre sm:text-5xl">{panelShort[t.id]}</h3>
                  <div className="more">
                    <p className="mt-3 max-w-md text-[0.97rem] text-platre/85">{t.searches.join(" · ")}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-terre">
                      Voir le métier <ArrowIcon />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Règles et chiffres ---------- */}
      <section aria-labelledby="titre-regles" className="bg-noir py-24 text-platre sm:py-36">
        <div className="container-x">
          <p className="eyebrow !text-terre before:!bg-terre" data-reveal>Nos règles</p>
          <h2 id="titre-regles" className="mt-5 max-w-4xl text-5xl !text-platre sm:text-7xl" data-reveal>
            Ce que nous <em>vous devons.</em>
          </h2>
          <div className="mt-16 grid gap-12 border-t border-platre/20 pt-12 md:grid-cols-3">
            {[
              { n: "0 €", t: "pour voir votre maquette. Elle est gratuite, et vous la regardez avant de payer quoi que ce soit.", s: true },
              { n: "1", t: "devis écrit avant le début de tout travail. Ce qui est dans le devis est ce que vous payez.", s: false },
              { n: "100 %", t: "à vous : votre site, votre nom de domaine, vos comptes, vos textes et vos photos.", s: true },
            ].map((x, i) => (
              <div key={x.n} data-reveal style={{ ["--d" as string]: `${i * 140}ms` }}>
                <p className={`bignum ${x.s ? "stroke" : ""}`}>{x.n}</p>
                <p className="mt-5 max-w-xs text-lg text-platre/75">{x.t}</p>
              </div>
            ))}
          </div>
          <ul className="mt-20 grid gap-x-16 border-t border-platre/20 md:grid-cols-2">
            {commitments.map((c) => (
              <li key={c} className="flex gap-4 border-b border-platre/20 py-5 text-platre/85" data-reveal>
                <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rotate-45 bg-terre" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-8 flex flex-wrap gap-2" aria-label="Ce qui reste à vous">
            {owned.map((o) => (
              <span key={o} className="rounded-full border border-platre/30 px-4 py-1.5 text-sm text-platre/80">{o}</span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------- Mot de l'atelier ---------- */}
      <section aria-labelledby="titre-mot" className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div data-reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <Figure id="mains" caption="faire, de ses mains" ratio="aspect-[4/5]" tilt="-1.8deg" sizes="(min-width:1024px) 34vw, 80vw" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Un mot de l'atelier</p>
            <h2 id="titre-mot" className="mt-5 text-5xl sm:text-7xl">
              Pourquoi <em>« Truelle »</em> ?
            </h2>
            <div className="mt-8 space-y-6 text-xl leading-9">
              <p>Nous aimons les métiers où l'on fait quelque chose de ses mains. La truelle sert à poser droit et à finir proprement. C'est ce que nous essayons de faire avec le site de votre entreprise, en moins poussiéreux.</p>
              <p>Nous ne sommes pas une grande agence et nous ne cherchons pas à le paraître. Quand vous nous écrivez, une personne lit votre message et vous répond.</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Signature />
              <span className="hand">l'atelier</span>
            </div>
            <Link href={PATHS.story} className="link-line mt-8 inline-flex items-center gap-2 font-semibold text-terre-dark">
              Lire toute notre histoire <ArrowIcon />
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
