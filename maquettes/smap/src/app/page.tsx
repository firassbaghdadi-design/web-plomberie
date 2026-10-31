import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { PlanFigure } from "@/components/PlanFigure";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, d, fr } from "@/components/Sections";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import original from "@/lib/original.generated.json";
import { photoAlt, sitePhotos } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

/** Paragraphes relevés au build sur le site actuel (accueil), s'il y en a : repris tels quels, à relire. */
const fromSite = ((original as Record<string, string[] | undefined>).home ?? []).slice(0, 4);

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Fuites, sanitaire, robinetterie et canalisations : l'eau qui arrive, circule et repart comme elle doit.", items: ["Fuites", "Sanitaire", "Robinetterie", "Canalisations"], photo: "cuivre" },
  { href: PATHS.renovation, n: "02", t: "Aménagement et rénovation", d: "Du relevé au plan, du plan au chantier : salles de bains, pièces d'eau et appartements.", items: ["Salle de bains", "Pièces d'eau", "Appartements", "Locaux"], photo: "bains" },
  { href: PATHS.maintenance, n: "03", t: "Maintenance", d: "Vérifier, entretenir et réparer les installations avant la panne, dans les immeubles et les locaux.", items: ["Immeubles", "Commerces", "Parties communes"], photo: "renovation" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une salle de bains à refaire ou une fuite à arrêter : l'équipe vient chez vous, sur rendez-vous." },
  { t: "Professionnels", d: "Commerces, bureaux et locaux d'activité du quartier : l'intervention s'organise selon vos horaires d'ouverture." },
  { t: "Copropriétés", d: "Colonnes, caves, locaux techniques et parties communes : une même entreprise pour la plomberie et l'entretien de l'immeuble." },
];

const steps = [
  { n: "01", t: "Le relevé", d: "Une visite pour mesurer, repérer les arrivées d'eau et comprendre l'existant. Tout part du plan.", photo: "plan", start: "Relevé", end: "Plan" },
  { n: "02", t: "Le chantier", d: "La plomberie d'abord, avant que les murs ne se referment, puis les finitions pièce par pièce.", photo: "chantier", start: "Plan", end: "Chantier" },
  { n: "03", t: "La livraison", d: "Une dernière vérification de l'installation avant de vous remettre la pièce terminée.", photo: "bains2", start: "Chantier", end: "Livré" },
];

const faq: Faq[] = [
  {
    q: "Où se trouve SMAP ?",
    a: "SMAP est installée à Paris 12e (75012). Pour obtenir l'adresse de l'atelier ou fixer un rendez-vous, appelez le 01 42 49 20 14 ou écrivez à smap.gros@orange.fr.",
  },
  {
    q: "Depuis quand l'entreprise existe-t-elle ?",
    a: "SMAP a été créée en 2007 et est installée dans le 12e arrondissement de Paris. Son nom résume ses trois activités : maintenance, aménagement et plomberie.",
  },
  {
    q: "Quels sont les métiers de SMAP ?",
    a: "La plomberie (fuites, sanitaire, canalisations), l'aménagement et la rénovation (salles de bains, pièces d'eau, appartements) et la maintenance des installations. La liste précise des prestations est à confirmer avec l'entreprise.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Par téléphone au 01 42 49 20 14, ou par le formulaire de contact en décrivant votre demande et l'adresse du lieu, photos à l'appui. L'entreprise vous recontacte pour fixer le rendez-vous.",
  },
];

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  const years = new Date().getFullYear() - Number(business.founded);
  return (
    <>
      {/* Héros : le cadre d'un plan se trace, puis la salle de bains finie se dévoile à l'intérieur. */}
      <section className="relative">
        <div className="wrap grid gap-x-16 pb-14 pt-4 sm:pt-12 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="flex flex-col lg:col-span-6">
            <p className="label fade-in text-accent" style={d(80)}>Maintenance · Aménagement · Plomberie</p>
            <h1 className="mt-8 text-[2.75rem] font-[250] leading-[1.0] sm:text-[4.3rem] xl:text-[5rem]">
              <span className="line-up"><span>Plomberie</span></span>
              <span className="line-up"><span style={d(120)}>et rénovation</span></span>
              <span className="line-up"><span style={d(240)} className="text-accent">à Paris 12e</span></span>
            </h1>
            <p className="fade-in mt-9 max-w-xl text-[1.12rem] leading-relaxed sm:text-[1.25rem]" style={d(450)}>
              Depuis {business.founded}, SMAP dessine, répare et installe : du relevé des cotes jusqu&apos;au dernier raccord, une seule équipe, installée dans le 12e arrondissement.
            </p>
            <div className="fade-in mt-10" style={d(600)}><CtaButtons /></div>
          </div>
          <div className="fade-in mb-10 max-lg:order-first lg:col-span-6 lg:mb-0" style={d(250)}>
            <PlanFigure id="bains" mode="auto" priority ratio="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4]" start="Plan" end="Livré" caption="Du plan au chantier : la pièce terminée se dévoile dans son cadre." />
          </div>
        </div>
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {[
              [business.founded, "Création de l'entreprise"],
              [`${years} ans`, "Au service du 12e"],
              ["3 métiers", "Une seule équipe"],
              ["75012", "Paris 12e"],
            ].map(([k, v], i) => (
              <div key={v} className="py-6 pr-4" data-reveal style={d(i * 80)}>
                <dt className="num text-[1.9rem] font-extralight leading-none tracking-tight text-ink sm:text-[2.6rem]">{k}</dt>
                <dd className="label mt-3">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Brief text={home.brief} />

      {/* 01 — Qui sommes-nous */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Label n="01">L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Qui sommes-nous ?")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.1rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
              {fromSite.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t border-line" data-reveal>
              {[[business.founded, "Création de l'entreprise"], ["12e", "Installée dans l'arrondissement"], ["3", "Activités : plomberie, aménagement, maintenance"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num text-[1.7rem] font-extralight leading-none text-ink sm:text-[2.4rem]">{y}</p>
                  <p className="mt-3 text-[0.86rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <PlanFigure id="chantier" ratio="aspect-[4/3] lg:aspect-[5/6]" start="Plan" end="Chantier" caption="Une équipe sur le chantier, du relevé aux finitions." />
          </div>
        </div>
      </section>

      {/* 02 — Les métiers */}
      <section aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Label n="02" scale="1:20">Nos métiers</Label>
              <h2 id="titre-metiers" className="h2 mt-6" data-reveal>Plomberie, aménagement et maintenance</h2>
            </div>
            <p className="max-w-lg self-end text-[1.08rem] lg:col-span-6 lg:col-start-7" data-reveal>
              {about.description}
            </p>
          </div>
          <ul className="mt-16 border-t border-line">
            {trades.map((t, i) => (
              <li key={t.t} className="border-b border-line" data-reveal style={d(i * 70)}>
                <Link href={t.href} className="row-link grid items-start gap-x-10 gap-y-4 py-8 sm:py-10 lg:grid-cols-12">
                  <span className="num text-[0.8rem] text-ink-faint lg:col-span-1 lg:pt-3">{t.n}</span>
                  <span className="row-title block text-[2rem] font-light leading-none tracking-tight text-ink sm:text-[2.4rem] lg:col-span-4">{t.t}</span>
                  <span className="block lg:col-span-5 lg:pt-2">
                    <span className="block max-w-md text-[1.02rem]">{fr(t.d)}</span>
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.9rem] text-ink">
                      {t.items.map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                    </span>
                  </span>
                  <span className="hidden items-center justify-end gap-6 lg:col-span-2 lg:flex">
                    <span className="h-14 w-20 overflow-hidden rounded-[2px] opacity-0 transition duration-500 [.row-link:hover_&]:opacity-100">
                      <Img id={t.photo} alt="" className="h-full w-full" />
                    </span>
                    <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — Du plan au chantier : trois cadres, trois étapes */}
      <section aria-labelledby="titre-plan" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Label n="03" scale="1:100">La méthode</Label>
              <h2 id="titre-plan" className="h2 mt-6" data-reveal>Du plan au chantier</h2>
            </div>
            <p className="max-w-xl self-end lg:col-span-5 lg:col-start-8" data-reveal>
              Un projet de plomberie ou de rénovation se prépare avant de se construire. Voici l&apos;ordre général des étapes ; le déroulé exact de l&apos;entreprise est à confirmer avec elle.
            </p>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n}>
                <PlanFigure id={s.photo} ratio="aspect-[4/5]" start={s.start} end={s.end} scale={`1:${s.n === "01" ? 20 : s.n === "02" ? 50 : 100}`} caption={photoAlt(s.photo)} />
                <div className="mt-6 border-t border-line pt-5" data-reveal>
                  <p className="num text-[0.8rem] text-accent">{s.n}</p>
                  <p className="mt-2 text-[1.6rem] font-light text-ink">{s.t}</p>
                  <p className="mt-3">{fr(s.d)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap mt-20 border-t border-line pt-14 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <p className="label lg:col-span-3">Près de chez vous</p>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
              {localPages.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link href={p.path} className="row-link flex items-center justify-between gap-3 py-4 text-[1rem] text-ink">
                    <span className="row-title">{p.crumb}</span> <ArrowIcon className="row-arrow h-4 w-4 shrink-0 text-ink-faint" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — Pour qui */}
      <section aria-labelledby="titre-clients" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <Label n="04" scale="1:50">Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, professionnels et copropriétés : une même exigence")}</h2>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="border-t border-ink/80 pt-7" data-reveal style={d(i * 90)}>
                <p className="text-[1.6rem] font-light text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <PlanFigure id="renovation" ratio="aspect-[16/10]" start="Constat" end="Chantier" caption="Chaque intervention commence par un constat sur place." />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[1.35rem] font-light leading-snug text-ink sm:text-[1.6rem]" data-reveal>Organisez votre rendez-vous en nous contactant.</p>
              <div className="mt-8"><CtaButtons label="Demander un devis" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos publiées par l'entreprise sur son site actuel (récupérées au build), s'il y en a */}
      {sitePhotos.length >= 2 ? (
        <section aria-labelledby="titre-images" className="border-t border-line py-20 sm:py-28">
          <div className="wrap">
            <Label n="05" scale="1:20">En images</Label>
            <h2 id="titre-images" className="h2 mt-6" data-reveal>Les réalisations de l&apos;entreprise</h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sitePhotos.slice(0, 6).map((p, i) => (
                <li key={p.src}>
                  <PlanFigure id="" src={p.src} altText={p.alt || `Photo publiée par SMAP (${i + 1})`} ratio="aspect-[4/3]" start="Plan" end="Réalisé" caption={p.alt || undefined} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Une fuite, un projet, une salle de bains ?" text="Organisez votre rendez-vous avec l'équipe de SMAP." />
      <JsonLd nodes={nodes} />
    </>
  );
}
