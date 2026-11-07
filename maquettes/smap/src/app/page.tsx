import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Nuancier } from "@/components/Nuancier";
import { Plate } from "@/components/Plate";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, d, fr } from "@/components/Sections";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import original from "@/lib/original.generated.json";
import { sitePhotos } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

/** Paragraphes relevés au build sur le site actuel (accueil), s'il y en a : repris tels quels, à relire. */
const fromSite = ((original as Record<string, string[] | undefined>).home ?? []).slice(0, 4);

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Fuites, sanitaire, robinetterie et canalisations : l'eau qui arrive, circule et repart comme elle doit.", items: ["Fuites", "Sanitaire", "Robinetterie", "Canalisations"], photo: "douche" },
  { href: PATHS.renovation, n: "02", t: "Aménagement et rénovation", d: "Du relevé au plan, du plan au chantier : salles de bains, pièces d'eau et appartements.", items: ["Salle de bains", "Pièces d'eau", "Appartements", "Locaux"], photo: "cuisine" },
  { href: PATHS.maintenance, n: "03", t: "Maintenance", d: "Vérifier, entretenir et réparer les installations avant la panne, dans les immeubles et les locaux.", items: ["Immeubles", "Commerces", "Parties communes"], photo: "renovation" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une salle de bains à refaire ou une fuite à arrêter : l'équipe vient chez vous, sur rendez-vous." },
  { t: "Professionnels", d: "Commerces, bureaux et locaux d'activité du quartier : l'intervention s'organise selon vos horaires d'ouverture." },
  { t: "Copropriétés", d: "Colonnes, caves, locaux techniques et parties communes : une même entreprise pour la plomberie et l'entretien de l'immeuble." },
];

const steps = [
  { n: "01", t: "Le relevé", d: "Une visite pour mesurer, repérer les arrivées d'eau et comprendre l'existant. Tout part du plan.", photo: "plan" },
  { n: "02", t: "Le chantier", d: "La plomberie d'abord, avant que les murs ne se referment, puis les finitions pièce par pièce.", photo: "chantier" },
  { n: "03", t: "La livraison", d: "Une dernière vérification de l'installation avant de vous remettre la pièce terminée.", photo: "bains2" },
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

/** Disposition « galerie » des métiers : trois planches de tailles et de hauteurs différentes. */
const tradeLayout = [
  { box: "lg:col-span-7", ratio: "aspect-[4/5]" },
  { box: "lg:col-span-5 lg:mt-56", ratio: "aspect-[3/4]" },
  { box: "lg:col-span-8 lg:col-start-3 lg:mt-10", ratio: "aspect-[16/10]" },
];

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  const years = new Date().getFullYear() - Number(business.founded);
  return (
    <>
      {/* Héros : planche d'ouverture du book. Titre serif à gauche, grande photo de salle de bains qui déborde à droite,
          et le nuancier d'échantillons qui s'ouvre en éventail sur la photo. */}
      <section className="relative">
        <div className="wrap">
          <div className="label fade-in flex justify-between gap-6 border-b border-ink/30 pb-3 pt-3 sm:pt-5" style={d(40)}>
            <span>Book · Planche 01</span>
            <span className="hidden sm:inline">Maintenance · Aménagement · Plomberie</span>
            <span>Paris 12e · {business.founded}</span>
          </div>
        </div>
        <div className="wrap grid gap-x-10 pb-14 pt-7 sm:pt-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pb-16 lg:pt-12">
          <div className="relative z-10 lg:col-span-6 lg:pr-20">
            <p className="label fade-in text-accent" style={d(80)}>Rénovation d&apos;appartements depuis {business.founded}</p>
            <h1 className="mt-5 text-[3.2rem] leading-[0.93] sm:text-[5.2rem] xl:text-[6.4rem]">
              <span className="line-up"><span>Plomberie</span></span>
              <span className="line-up"><span style={d(110)}>et rénovation</span></span>
              <span className="line-up"><span style={d(220)}>d’appartements</span></span>
              <span className="line-up"><span style={d(330)} className="italic text-accent">à Paris 12e</span></span>
            </h1>
          </div>
          <div className="relative mt-8 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:-mr-[var(--gutter)] lg:mt-0">
            <Plate id="bains" n="01" hero priority ratio="aspect-[5/6] sm:aspect-[5/4] lg:aspect-[15/16]" specs={[["Matières", "Verre, faïence, robinetterie"], ["Échantillons", "Zellige, terrazzo, laiton, chêne"]]} />
            <div className="pointer-events-none absolute bottom-[6.5rem] right-1 z-10 sm:bottom-[5.5rem] sm:right-6 lg:-left-28 lg:bottom-[10rem] lg:right-auto">
              <Nuancier uid="hero" />
            </div>
          </div>
          <div className="relative z-10 mt-10 lg:col-span-6 lg:mt-8 lg:pr-28">
            <p className="fade-in max-w-md text-[1.08rem] leading-relaxed sm:text-[1.18rem]" style={d(480)}>
              Depuis {business.founded}, SMAP dessine, répare et installe : du relevé des cotes jusqu&apos;au dernier raccord, une seule équipe, installée dans le 12e arrondissement.
            </p>
            <div className="fade-in mt-9" style={d(620)}><CtaButtons /></div>
          </div>
        </div>
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-ink/40 sm:grid-cols-4">
            {[
              [business.founded, "Création de l'entreprise"],
              [`${years} ans`, "Au service du 12e"],
              ["3 métiers", "Une seule équipe"],
              ["75012", "Paris 12e"],
            ].map(([k, v], i) => (
              <div key={v} className="py-6 pr-4" data-reveal style={d(i * 80)}>
                <dt className="num font-serif text-[2.3rem] leading-none text-ink sm:text-[3.2rem]">{k}</dt>
                <dd className="label mt-3">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Brief text={home.brief} />

      {/* 02 — Qui sommes-nous : grande planche à gauche, bord à bord */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:order-2 lg:col-span-5">
            <Label n="02">L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Qui sommes-nous ?")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.08rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
              {fromSite.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t border-ink/40" data-reveal>
              {[[business.founded, "Création de l'entreprise"], ["12e", "Installée dans l'arrondissement"], ["3", "Activités : plomberie, aménagement, maintenance"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num font-serif text-[2.1rem] leading-none text-ink sm:text-[2.9rem]">{y}</p>
                  <p className="mt-3 text-[0.84rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:order-1 lg:col-span-7 lg:-ml-[var(--gutter)]">
            <Plate id="chantier" n="02" ratio="aspect-[4/3] lg:aspect-[6/5]" />
          </div>
        </div>
      </section>

      {/* 03 — Les métiers : trois planches en galerie */}
      <section aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Label n="03">Nos métiers</Label>
              <h2 id="titre-metiers" className="h2 mt-6" data-reveal>Plomberie, aménagement et maintenance</h2>
            </div>
            <p className="max-w-lg self-end text-[1.08rem] lg:col-span-5 lg:col-start-8" data-reveal>{about.description}</p>
          </div>
          <ul className="mt-16 grid gap-x-10 gap-y-20 lg:grid-cols-12">
            {trades.map((t, i) => (
              <li key={t.t} className={tradeLayout[i].box}>
                <Link href={t.href} className="row-link group block">
                  <Plate id={t.photo} n={`03.${i + 1}`} ratio={tradeLayout[i].ratio} />
                  <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]" data-reveal>
                    <div>
                      <p className="row-title font-serif text-[2.3rem] leading-none text-ink sm:text-[2.9rem]">{t.t}</p>
                      <p className="mt-4 max-w-md">{fr(t.d)}</p>
                      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.88rem] text-ink">
                        {t.items.map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                      </p>
                    </div>
                    <ArrowIcon className="row-arrow mt-3 hidden h-5 w-5 text-ink-faint sm:block" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Interlude : une cuisine, bord à bord */}
      <section aria-label="Planche cuisine" className="border-t border-line pt-16 sm:pt-24">
        <div className="wrap">
          <Plate id="cuisine2" n="04" ratio="aspect-[4/5] sm:aspect-[21/9]" row />
        </div>
      </section>

      {/* 05 — Du plan au chantier : trois planches, trois étapes */}
      <section aria-labelledby="titre-plan" className="py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Label n="05">La méthode</Label>
              <h2 id="titre-plan" className="h2 mt-6" data-reveal>Du plan au chantier</h2>
            </div>
            <p className="max-w-xl self-end lg:col-span-5 lg:col-start-8" data-reveal>
              Un projet de plomberie ou de rénovation se prépare avant de se construire. Voici l&apos;ordre général des étapes ; le déroulé exact de l&apos;entreprise est à confirmer avec elle.
            </p>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.n} className={i === 1 ? "md:mt-24" : ""}>
                <Plate id={s.photo} n={`05.${i + 1}`} ratio="aspect-[3/4]" />
                <div className="mt-6" data-reveal>
                  <p className="num font-serif text-[2.4rem] italic leading-none text-accent">{s.n}</p>
                  <p className="mt-3 font-serif text-[2rem] leading-none text-ink">{s.t}</p>
                  <p className="mt-3">{fr(s.d)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap mt-20 border-t border-ink/30 pt-14 sm:pt-16">
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

      {/* 06 — Pour qui */}
      <section aria-labelledby="titre-clients" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <Label n="06">Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-4xl" data-reveal>{fr("Particuliers, professionnels et copropriétés : une même exigence")}</h2>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="border-t border-ink/60 pt-7" data-reveal style={d(i * 90)}>
                <p className="font-serif text-[2rem] leading-none text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:-ml-[var(--gutter)]">
              <Plate id="bains3" n="06" ratio="aspect-[4/3] lg:aspect-[16/11]" />
            </div>
            <div className="lg:col-span-5">
              <p className="font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.5rem]" data-reveal>Organisez votre rendez-vous en nous contactant.</p>
              <div className="mt-8"><CtaButtons label="Demander un devis" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos publiées par l'entreprise sur son site actuel (récupérées au build), s'il y en a */}
      {sitePhotos.length >= 2 ? (
        <section aria-labelledby="titre-images" className="border-t border-line py-20 sm:py-28">
          <div className="wrap">
            <Label n="07">En images</Label>
            <h2 id="titre-images" className="h2 mt-6" data-reveal>Les réalisations de l&apos;entreprise</h2>
            <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {sitePhotos.slice(0, 6).map((p, i) => (
                <li key={p.src} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                  <Plate id="" src={p.src} altText={p.alt || `Photo publiée par SMAP (${i + 1})`} n={`07.${i + 1}`} ratio="aspect-[4/5]" />
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
