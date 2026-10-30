import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { CtaBand, CtaButtons, FaqList, LocalBlock, Station, fr } from "@/components/Sections";
import { home, homeFaq, quotes, trades } from "@/lib/content";
import { photoAlt } from "@/lib/photos";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business } from "@/lib/site";
import { allPages } from "@/lib/pages";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const zones = allPages.filter((p) => !p.path.includes("paris-14") && p.path.startsWith("/plombier-"));

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode(homeFaq)];
  return (
    <>
      {/* Station 00 : la première goutte arrive ici ; son onde ouvre la photo. */}
      <section data-station className="station" style={{ ["--dot-y" as string]: "2.2rem" }}>
        <span className="station-pt" aria-hidden="true" />
        <div className="wrap tx grid gap-10 pb-14 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-14 lg:pb-24">
          <div className="flex flex-col lg:col-span-7">
            <p className="fade-in folio">Paris 14e · depuis 2007</p>
            <h1 className="mt-6 text-[3.2rem] leading-[0.98] sm:text-[5.4rem] xl:text-[7rem]">
              <span className="line-up"><span>Plombier</span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "140ms" }}>à Paris 14e</span></span>
            </h1>
            <p className="fade-in mt-8 max-w-lg text-lg leading-relaxed sm:text-[1.2rem]" style={{ ["--d" as string]: "420ms" }}>{home.lead}</p>
            <div className="fade-in mt-10" style={{ ["--d" as string]: "560ms" }}>
              <CtaButtons contactType="plomberie" />
            </div>
            <dl className="fade-in mt-14 grid grid-cols-3 border-t border-line lg:mt-auto" style={{ ["--d" as string]: "700ms" }}>
              {[
                { l: "Fondée en", v: "2007" },
                { l: "Sur Google", v: "4,6/5" },
                { l: "Équipe", v: "10 à 19" },
              ].map((f) => (
                <div key={f.l} className="pr-3 pt-5">
                  <dt className="label">{f.l}</dt>
                  <dd className="num mt-1.5 text-[1.3rem] font-light leading-tight text-ink sm:text-[1.9rem]">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="lg:col-span-5">
            <div className="hero-photo overflow-hidden rounded-[3px]">
              <Img id="robinet" alt={photoAlt("robinet")} priority className="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]" position="50% 40%" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
              <span>Une goutte, et tout commence</span>
              <span className="num hidden sm:inline">36, avenue Jean Moulin</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <Station n="01" rubrique="En bref" ariaLabel="En bref">
        <p className="reponse-bref max-w-4xl">{home.brief}</p>
      </Station>

      <Station n="02" rubrique="Métiers" labelledBy="titre-metiers">
        <h2 id="titre-metiers" className="h2 max-w-3xl">{fr("Trois métiers, une seule adresse")}</h2>
        <ul className="mt-12 max-w-4xl border-t border-line">
          {trades.map((t) => (
            <li key={t.path} className="border-b border-line">
              <Link href={t.path} className="row-link grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-4 py-8">
                <span className="num text-[0.82rem] text-eau">{t.n}</span>
                <span className="row-title block">
                  <span className="block text-[1.5rem] font-light leading-tight text-ink sm:text-[2rem]">{t.title}</span>
                  <span className="mt-2 block max-w-xl text-[0.98rem]">{t.text}</span>
                </span>
                <ArrowIcon className="row-arrow h-5 w-5 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </Station>

      <Station n="03" rubrique="Avis" labelledBy="titre-avis">
        <div className="grid gap-12 xl:grid-cols-12">
          <div className="xl:col-span-5">
            <h2 id="titre-avis" className="sr-only">Les avis des clients</h2>
            <p className="num text-[6rem] font-extralight leading-none tracking-[-0.05em] text-ink sm:text-[9rem]">4,6<span className="text-[0.32em] tracking-normal text-ink-faint"> /5</span></p>
            <p className="mt-5 max-w-xs text-[0.95rem]">{business.googleCount} avis sur la fiche Google de l&apos;entreprise, relevé d&apos;{business.ratingDate}.</p>
          </div>
          <div className="xl:col-span-7">
            <ul className="border-t border-line">
              {quotes.map((q) => (
                <li key={q.text} className="border-b border-line py-9">
                  <blockquote className="max-w-2xl text-[1.3rem] font-light leading-snug tracking-[-0.012em] text-ink sm:text-[1.6rem]">« {q.text} »</blockquote>
                  <p className="label mt-4">{q.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Station>

      <Station n="04" rubrique="L'entreprise" labelledBy="titre-maison">
        <div className="grid gap-12 xl:grid-cols-12">
          <div className="xl:col-span-6">
            <h2 id="titre-maison" className="h2">{fr("Une équipe de quartier, depuis 2007")}</h2>
            <div className="prose-mt mt-8 max-w-xl">
              <p>S. Petit est une société à responsabilité limitée inscrite au registre du commerce de Paris. Son siège est resté le même : le 36 avenue Jean Moulin, dans le 14e arrondissement. Dix à dix-neuf personnes y travaillent.</p>
              <p>L&apos;activité enregistrée est l&apos;installation d&apos;eau et de gaz. Sur la fiche Pages Jaunes, l&apos;entreprise est signalée Professionnel du Gaz, et l&apos;un de ses clients décrit un chantier de salle d&apos;eau adaptée à un fauteuil, électricité et peinture comprises, confié à des artisans partenaires.</p>
            </div>
          </div>
          <div className="xl:col-span-6">
            <Img id="facade" alt={photoAlt("facade")} className="aspect-[4/3] rounded-[3px]" position="50% 35%" />
            <p className="mt-3 text-[0.78rem] text-ink-faint">Un immeuble parisien : le terrain de jeu de l&apos;équipe</p>
          </div>
        </div>
      </Station>

      <Station n="05" rubrique="Quartiers" labelledBy="titre-quartiers">
        <h2 id="titre-quartiers" className="h2 max-w-3xl">{fr("Autour du 14e, jusqu'où l'équipe intervient")}</h2>
        <p className="mt-6 max-w-2xl">Le 14e est le cœur de l&apos;activité. Les arrondissements et communes voisins ont chacun leur page, avec leurs immeubles et leurs usages.</p>
        <ul className="mt-10 max-w-4xl border-t border-line">
          <li className="border-b border-line">
            <Link href={PATHS.plumbing} className="row-link flex items-center justify-between gap-6 py-6">
              <span className="row-title text-[1.25rem] font-light text-ink sm:text-[1.55rem]">Plombier Paris 14e</span>
              <ArrowIcon className="row-arrow h-5 w-5 text-ink-faint" />
            </Link>
          </li>
          {zones.map((p) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-6">
                <span className="row-title text-[1.25rem] font-light text-ink sm:text-[1.55rem]">{p.crumb}</span>
                <ArrowIcon className="row-arrow h-5 w-5 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </Station>

      <FaqList items={homeFaq} title="Questions fréquentes" n="06" />
      <LocalBlock contactType="plomberie" approach="Une adresse de quartier, à quelques minutes du métro Alésia : passez, appelez ou écrivez avec des photos." n="07" />
      <CtaBand title="Une fuite, un chauffe-eau, une salle de bains ?" text="Décrivez la situation en deux lignes, joignez une photo : l'équipe de l'avenue Jean Moulin vous répond." contactType="plomberie" n="08" />
      <JsonLd nodes={nodes} />
    </>
  );
}
