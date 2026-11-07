import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { CtaBand, CtaButtons, FaqList, HeroArch, LocalBlock, Station, fr } from "@/components/Sections";
import { home, homeFaq, trades } from "@/lib/content";
import { photoAlt } from "@/lib/photos";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business } from "@/lib/site";
import { allPages } from "@/lib/pages";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const zones = allPages.filter((p) => !p.path.includes("paris-14") && p.path.startsWith("/plombier-"));
const tradePhotos: Record<string, { id: string; pos?: string }> = {
  [PATHS.plumbing]: { id: "mains", pos: "50% 40%" },
  [PATHS.bathroom]: { id: "bain", pos: "50% 45%" },
  [PATHS.heating]: { id: "cuivre", pos: "50% 40%" },
};

/** Cinq étoiles fines en cuivre ; la dernière remplie à 60 % (4,6 sur 5). */
function Stars() {
  const star = "M12 2.6l2.75 6.05 6.6.68-4.95 4.43 1.4 6.5L12 16.95l-5.8 3.31 1.4-6.5-4.95-4.43 6.6-.68z";
  return (
    <span className="stars" aria-hidden="true">
      {[1, 1, 1, 1, 0.6].map((f, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9">
          <defs><linearGradient id={`st${i}`}><stop offset={f} stopColor="#c88b5a" /><stop offset={f} stopColor="#c88b5a" stopOpacity="0" /></linearGradient></defs>
          <path d={star} fill={`url(#st${i})`} stroke="#c88b5a" strokeWidth=".9" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode(homeFaq)];
  return (
    <>
      {/* Héros : H1 en Lora à gauche, l'artisan dans une arche de devanture à droite ; la goutte tombe de la clé. */}
      <section data-station className="station is-in grain bg-creme">
        <div className="wrap relative grid pb-14 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-x-12 lg:pb-0 lg:pt-14">
          <div className="flex flex-col max-lg:contents lg:col-span-7 lg:pb-16">
            <p className="fade-in folio max-lg:order-1">Un plombier de quartier, depuis 2007</p>
            <h1 className="mt-6 max-lg:order-2 text-[3.3rem] leading-[0.98] sm:text-[5.6rem] xl:text-[7.4rem]">
              <span className="line-up"><span>Plombier</span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "140ms" }}>à Paris 14e</span></span>
              <span className="line-up"><span className="serif-it text-[0.5em] text-sauge-mid" style={{ ["--d" as string]: "280ms" }}>tout près d&apos;Alésia</span></span>
            </h1>
            <p className="fade-in mt-8 max-w-lg text-lg leading-relaxed max-lg:order-4 sm:text-[1.2rem]" style={{ ["--d" as string]: "420ms" }}>{home.lead}</p>
            <div className="fade-in mt-10 max-lg:order-5" style={{ ["--d" as string]: "560ms" }}>
              <CtaButtons contactType="plomberie" />
            </div>
            <dl className="fade-in mt-14 grid max-lg:order-6 grid-cols-3 gap-x-4 lg:mt-auto lg:pt-16" style={{ ["--d" as string]: "700ms" }}>
              {[
                { l: "Fondée en", v: "2007" },
                { l: "Sur Google", v: "4,6/5" },
                { l: "Équipe", v: "10 à 19" },
              ].map((f) => (
                <div key={f.l} className="border-t border-cuivre/35 pt-5">
                  <dt className="label">{f.l}</dt>
                  <dd className="num mt-1.5 font-serif text-[1.35rem] leading-tight text-sauge-deep sm:text-[2rem]">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroArch photo="artisan" position="50% 35%" caption="Une goutte, et l'équipe arrive" side="36, avenue Jean Moulin" className="mx-auto w-full max-w-[36rem] max-lg:order-3 max-lg:mt-10 lg:col-span-5" />
        </div>
        <div className="wrap"><div className="h-px bg-cuivre/45" /></div>
      </section>

      <Station n="01" rubrique="En bref" ariaLabel="En bref">
        <p className="reponse-bref max-w-4xl">{home.brief}</p>
      </Station>

      <Station n="02" rubrique="Métiers" labelledBy="titre-metiers" tone="creme2">
        <h2 id="titre-metiers" className="h2 max-w-3xl">{fr("Trois métiers, une seule adresse")}</h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {trades.map((t) => {
            const ph = tradePhotos[t.path] ?? { id: "mains" };
            return (
              <li key={t.path}>
                <Link href={t.path} className="row-link card-photo group block">
                  <Img id={ph.id} alt={photoAlt(ph.id)} className="aspect-[4/5] rounded-t-[999px]" position={ph.pos} />
                  <span className="mt-6 flex items-baseline gap-3">
                    <span className="num font-serif italic text-cuivre">{t.n}</span>
                    <span className="row-title font-serif text-[1.6rem] leading-tight text-sauge-deep sm:text-[1.85rem]">{t.title}</span>
                  </span>
                  <span className="mt-3 block text-[0.98rem]">{t.text}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-cuivre-deep">Découvrir <ArrowIcon className="row-arrow h-4 w-4" /></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Station>

      {/* Les mains : deux gros plans, le texte de l'entreprise entre les deux. */}
      <Station n="03" rubrique="L'entreprise" labelledBy="titre-maison">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <figure className="lg:col-span-7">
            <Img id="ajuste" alt={photoAlt("ajuste")} className="aspect-[4/3] rounded-[2px] lg:aspect-[7/6]" />
            <figcaption className="photo-cap"><span className="font-serif italic">Le geste juste, à la main</span></figcaption>
          </figure>
          <div className="flex flex-col lg:col-span-5">
            <h2 id="titre-maison" className="h2">Une équipe de quartier, <span className="serif-it text-cuivre">depuis 2007</span></h2>
            <div className="prose-mt mt-8 max-w-xl">
              <p>S. Petit est une société à responsabilité limitée inscrite au registre du commerce de Paris. Son siège est resté le même : le 36 avenue Jean Moulin, dans le 14e arrondissement. Dix à dix-neuf personnes y travaillent.</p>
              <p>L&apos;activité enregistrée est l&apos;installation d&apos;eau et de gaz. Sur la fiche Pages Jaunes, l&apos;entreprise est signalée Professionnel du Gaz, et l&apos;un de ses clients décrit un chantier de salle d&apos;eau adaptée à un fauteuil, électricité et peinture comprises, confié à des artisans partenaires.</p>
            </div>
            <figure className="mt-10 lg:mt-auto">
              <Img id="outils" alt={photoAlt("outils")} className="aspect-[16/10] rounded-[2px]" />
            </figure>
          </div>
        </div>
      </Station>

      {/* La réputation : un chiffre géant, sans extrait d'avis. */}
      <Station n="04" rubrique="Avis Google" labelledBy="titre-avis" tone="sauge">
        <h2 id="titre-avis" className="sr-only">La note des clients sur Google</h2>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <p className="num font-serif leading-[0.8] tracking-[-0.04em] text-creme lg:col-span-7" aria-label={`Note de ${business.googleRating} sur 5`}>
            <span className="text-[9.5rem] sm:text-[15rem] lg:text-[19rem]">4<span className="text-cuivre-light">,</span>6</span>
            <span className="serif-it ml-3 align-top text-[2rem] text-cuivre-pale sm:text-[3rem]">/5</span>
          </p>
          <div className="lg:col-span-5 lg:pb-8">
            <Stars />
            <p className="mt-6 font-serif text-[1.6rem] leading-snug text-creme sm:text-[2rem]">{business.googleCount} avis de voisins, de syndics et de gardiens.</p>
            <p className="mt-4 max-w-sm text-[0.95rem] text-creme/65">Note moyenne de la fiche Google de l&apos;entreprise, relevée en {business.ratingDate}.</p>
          </div>
        </div>
      </Station>

      <Station n="05" rubrique="Quartiers" labelledBy="titre-quartiers">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="titre-quartiers" className="h2">{fr("Autour du 14e, jusqu'où l'équipe intervient")}</h2>
            <p className="mt-6 max-w-xl">Le 14e est le cœur de l&apos;activité. Les arrondissements et communes voisins ont chacun leur page, avec leurs immeubles et leurs usages.</p>
            <ul className="mt-10 border-t border-line">
              <li className="border-b border-line">
                <Link href={PATHS.plumbing} className="row-link flex items-center justify-between gap-6 py-5">
                  <span className="row-title font-serif text-[1.3rem] text-sauge-deep sm:text-[1.5rem]">Plombier Paris 14e</span>
                  <ArrowIcon className="row-arrow h-5 w-5 text-cuivre" />
                </Link>
              </li>
              {zones.map((p) => (
                <li key={p.path} className="border-b border-line">
                  <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-5">
                    <span className="row-title font-serif text-[1.3rem] text-sauge-deep sm:text-[1.5rem]">{p.crumb}</span>
                    <ArrowIcon className="row-arrow h-5 w-5 text-cuivre" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
            <figure className="col-span-2">
              <Img id="rue" alt={photoAlt("rue")} className="aspect-[16/10] rounded-[2px]" />
            </figure>
            <Img id="facade" alt={photoAlt("facade")} className="aspect-[4/5] rounded-t-[999px]" position="50% 35%" />
            <Img id="clef" alt={photoAlt("clef")} className="aspect-[4/5] rounded-[2px]" />
            <p className="photo-cap col-span-2 !mt-0"><span className="font-serif italic">Les rues, les immeubles, et les mains qui les entretiennent</span></p>
          </div>
        </div>
      </Station>

      <FaqList items={homeFaq} title="Questions fréquentes" n="06" />
      <LocalBlock contactType="plomberie" approach="Une adresse de quartier, à quelques minutes du métro Alésia : passez, appelez ou écrivez avec des photos." n="07" />
      <CtaBand title="Une fuite, un chauffe-eau, une salle de bains ?" text="Décrivez la situation en deux lignes, joignez une photo : l'équipe de l'avenue Jean Moulin vous répond." contactType="plomberie" n="08" />
      <JsonLd nodes={nodes} />
    </>
  );
}
