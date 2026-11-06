import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, d, fr } from "@/components/Sections";
import { Skyline } from "@/components/Skyline";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { allPages } from "@/lib/pages";
import { photoAlt, sitePhotos } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const listOf = (path: string) => allPages.find((p) => p.path === path)?.sections.find((s) => s.originalList)?.list ?? [];

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Du robinet qui goutte à la salle de bains refaite.", items: listOf(PATHS.plumbing), photo: "plans" },
  { href: PATHS.roofing, n: "02", t: "Couverture", d: "Toitures, chéneaux et descentes : l'eau de pluie, du faîtage à l'égout.", items: listOf(PATHS.roofing), photo: "toits" },
  { href: PATHS.heating, n: "03", t: "Chauffage", d: "Chaudières, radiateurs et eau chaude : installation, réparation, entretien.", items: listOf(PATHS.heating), photo: "chantier" },
  { href: "/renovation-salle-de-bains-paris-15", n: "04", t: "Petite maçonnerie", d: "Saignées, scellements et reprises qui accompagnent les travaux, par la même équipe.", items: [], photo: "carrelage" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une maison de ville, une salle de bains à refaire ou une fuite à arrêter : l'équipe vient chez vous, sur rendez-vous." },
  { t: "Professionnels", d: "Commerces, bureaux et locaux d'activité du quartier : l'intervention s'organise selon vos horaires d'ouverture." },
  { t: "Syndics", d: "Colonnes, descentes, toitures et chauffage collectif : plombiers et couvreurs dans la même entreprise, pour les parties communes." },
];

const faq: Faq[] = [
  {
    q: "Où se trouve l'Entreprise Clairon ?",
    a: "Au 23 rue d'Ouessant, 75015 Paris, entre les stations Dupleix et La Motte-Picquet–Grenelle. L'entreprise se joint au 01 47 83 88 40 ou par e-mail à info@clairon.org.",
  },
  {
    q: "Depuis quand l'entreprise existe-t-elle ?",
    a: "L'Entreprise Clairon est une entreprise familiale créée en 1943, installée dans le 15e arrondissement de Paris. Elle réunit aujourd'hui une équipe de compagnons qualifiés.",
  },
  {
    q: "Quels sont les métiers de l'Entreprise Clairon ?",
    a: "La plomberie (sanitaire, robinetterie, tuyauterie, rénovation de salle de bains), la couverture, le chauffage et la petite maçonnerie. Une même équipe peut ainsi suivre l'eau du toit jusqu'à la cave.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Par téléphone au 01 47 83 88 40, ou par le formulaire de contact en décrivant votre demande et l'adresse du lieu, photos à l'appui si vous le souhaitez. L'entreprise vous recontacte pour fixer le rendez-vous.",
  },
];

/** Photo légendée façon magazine. */
function Photo({ id, className = "", caption }: { id: string; className?: string; caption?: string }) {
  return (
    <figure>
      <div data-mask className="img-zoom overflow-hidden rounded-[3px]">
        <Img id={id} alt={photoAlt(id)} className={className} />
      </div>
      <figcaption className="mt-3 text-[0.78rem] text-ink-faint">{caption ?? photoAlt(id)}</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  const years = new Date().getFullYear() - Number(business.founded);
  /** Photos de l'entreprise d'abord (site actuel, récupérées au build) ; Pexels sinon. */
  const own = sitePhotos;
  return (
    <>
      {/* Héros : un titre très grand et très fin, une photo en noir et blanc ; le fil à plomb descend à son côté. */}
      <section className="relative" data-plumb-start>
        <div className="wrap grid gap-x-16 pb-14 pt-4 sm:pt-12 lg:grid-cols-12 lg:pb-20 lg:pt-20">
          <div className="flex flex-col lg:col-span-7">
            <p className="label fade-in text-accent" style={d(80)}>Entreprise familiale · depuis {business.founded}</p>
            <h1 className="mt-8 text-[2.75rem] font-[250] leading-[1.0] sm:text-[4.3rem] lg:text-[4.3rem] xl:text-[5.05rem]">
              <span className="line-up"><span>Plombier, couvreur</span></span>
              <span className="line-up"><span style={d(120)}>et chauffagiste</span></span>
              <span className="line-up"><span style={d(240)} className="text-accent">à Paris 15e</span></span>
            </h1>
            <p className="fade-in mt-9 max-w-xl text-[1.12rem] leading-relaxed sm:text-[1.25rem]" style={d(450)}>
              Depuis {business.founded}, l&apos;Entreprise Clairon répare, installe et entretient la plomberie, les toitures et le chauffage du quartier, avec une équipe de compagnons qualifiés installée rue d&apos;Ouessant.
            </p>
            <div className="fade-in mt-10" style={d(600)}><CtaButtons /></div>
          </div>
          <figure className="fade-in mb-10 max-lg:order-first lg:col-span-5 lg:mb-0 lg:mt-2" style={d(250)}>
            <div className="overflow-hidden rounded-[3px]">
              {own[0] ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-mist sm:aspect-[16/10] lg:aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={own[0].src} alt={own[0].alt || "Photo publiée par l'Entreprise Clairon"} className="slow-zoom absolute inset-0 h-full w-full object-cover" />
                </div>
              ) : (
                <Img id="toits" alt={photoAlt("toits")} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom grayscale" />
              )}
            </div>
            <figcaption className="mt-3 hidden justify-between gap-4 text-[0.78rem] text-ink-faint sm:flex">
              <span>{fr("Couverture, plomberie, chauffage : un seul interlocuteur.")}</span>
              <span className="num shrink-0">48° 51′ N</span>
            </figcaption>
          </figure>
        </div>
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {[
              [business.founded, "Entreprise familiale"],
              [`${years} ans`, "Au service du 15e"],
              ["4 métiers", "Une seule équipe"],
              ["N° 23", "Rue d'Ouessant"],
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

      {/* 01 — Qui sommes-nous : textes du site actuel */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Label n="01">L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Qui sommes-nous ?")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.1rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t border-line" data-reveal>
              {[[business.founded, "Création de l'entreprise familiale"], ["15e", "23 rue d'Ouessant, depuis toujours dans le quartier"], ["3", "Clientèles : particuliers, professionnels, syndics"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num text-[1.7rem] font-extralight leading-none text-ink sm:text-[2.4rem]">{y}</p>
                  <p className="mt-3 text-[0.86rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <Photo id="chantier" className="aspect-[4/3] lg:aspect-[5/6]" caption="Une équipe de compagnons qualifiés, du chantier à la finition." />
          </div>
        </div>
      </section>

      {/* 02 — Les métiers */}
      <section aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Label n="02">Nos métiers</Label>
              <h2 id="titre-metiers" className="h2 mt-6" data-reveal>Plomberie, couverture, chauffage et petite maçonnerie</h2>
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
                  <span className="row-title block text-[2rem] font-light leading-none tracking-tight text-ink sm:text-[2.6rem] lg:col-span-4">{t.t}</span>
                  <span className="block lg:col-span-5 lg:pt-2">
                    <span className="block max-w-md text-[1.02rem]">{fr(t.d)}</span>
                    {t.items.length ? (
                      <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.9rem] text-ink">
                        {t.items.slice(0, 6).map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                      </span>
                    ) : null}
                  </span>
                  <span className="hidden items-center justify-end gap-6 lg:col-span-2 lg:flex">
                    <span className="h-14 w-20 overflow-hidden rounded-[2px] opacity-0 transition duration-500 group-hover:opacity-100 [.row-link:hover_&]:opacity-100">
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

      {/* 03 — D'aplomb : le quartier dessiné au trait, et le fil qui tombe de la tour Eiffel */}
      <section aria-labelledby="titre-aplomb" className="border-t border-line pt-20 sm:pt-32">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Label n="03">Le quartier</Label>
            <h2 id="titre-aplomb" className="h2 mt-6" data-reveal>D&apos;aplomb depuis {business.founded}, à l&apos;ombre de la tour Eiffel</h2>
          </div>
          <div className="prose-c max-w-xl self-end lg:col-span-5 lg:col-start-8" data-reveal>
            <p>Le mot « plombier » vient du plomb, <em>plumbum</em> en latin : le métal des premières conduites d&apos;eau, et celui du fil à plomb qui dit si un mur est droit. Être d&apos;aplomb, c&apos;est être juste et solide.</p>
            <p>Notre voisine la tour Eiffel l&apos;est depuis 1889. L&apos;Entreprise Clairon, depuis {business.founded}, au pied des immeubles de Grenelle et des tours du Front de Seine.</p>
          </div>
        </div>
        <div className="mt-14 sm:mt-20" data-reveal>
          <div className="mx-auto max-w-[96rem]"><Skyline /></div>
        </div>
        <div className="wrap border-t border-line py-14 sm:py-16">
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
          <Label n="04">Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, professionnels et syndics : une même exigence")}</h2>
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
              <Photo id="plans" className="aspect-[16/10]" caption="Chaque intervention commence par un constat sur place." />
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
            <Label n="05">En images</Label>
            <h2 id="titre-images" className="h2 mt-6" data-reveal>Les chantiers de l&apos;entreprise</h2>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sitePhotos.slice(0, 6).map((p, i) => (
                <li key={p.src} data-mask className="overflow-hidden rounded-[3px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt || `Photo publiée par l'Entreprise Clairon (${i + 1})`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Une fuite, un toit, un radiateur ?" text="Organisez votre rendez-vous avec l'équipe de la rue d'Ouessant." />
      <JsonLd nodes={nodes} />
    </>
  );
}
