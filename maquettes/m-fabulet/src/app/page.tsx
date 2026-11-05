import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FermeMark } from "@/components/Ferme";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Mascotte } from "@/components/Mascotte";
import { Brief, CtaBand, FaqList, LocalBlock, SectionHead, TradesList } from "@/components/Sections";
import { home, homeFaq } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

function Hero() {
  const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
  return (
    <section className="relative overflow-hidden" aria-label="M. Fabulet Couverture">
      {/* Le grand panneau photo : un toit sous la lumière du soir, étalonné chaud et sombre, fondu dans la nuit de l'atelier. */}
      <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
        <Img id="heros" alt={photoAlt("heros")} className="slow-zoom absolute inset-0" priority position="50% 35%" grade="fort" />
        <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-b from-nuit/70 via-nuit/5 to-nuit" />
        <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-r from-nuit via-nuit/40 to-transparent" />
      </div>

      <div className="wrap relative z-[4] flex flex-col pt-[5.2rem] lg:min-h-[max(100svh,46rem)] lg:pt-[6.4rem] xl:max-h-[62rem]">
        {/* Filet d'en-tête, comme la tête d'une revue */}
        <div className="fade-in cap hidden items-center justify-between gap-6 border-b border-creme/15 pb-4 lg:flex" style={d(50)}>
          <span>Maison artisanale <span className="text-cuivre">·</span> <span className="text-creme-soft">de génération en génération</span></span>
          <span>Couverture <span className="text-cuivre">·</span> Charpente <span className="text-cuivre">·</span> Zinguerie <span className="text-cuivre">·</span> Velux</span>
          <span>13, bd de la République <span className="text-cuivre">·</span> 92250</span>
        </div>
        <p className="fade-in cap mt-3 text-cuivre-light lg:hidden" style={d(50)}>Couvreur-charpentier · 92</p>

        <div className="relative grid flex-1 lg:grid-cols-12">
          <div className="relative z-[6] pt-4 lg:col-span-12 lg:flex lg:flex-col lg:justify-center lg:py-10">
            <p className="fade-in cap hidden text-cuivre-light lg:block" style={d(100)}>Artisan couvreur-charpentier, Hauts-de-Seine</p>
            <h1 className="mt-2 whitespace-nowrap text-[3.55rem] leading-[0.9] tracking-[-0.03em] sm:text-[6rem] lg:mt-7 lg:text-[6.4rem] xl:text-[7.4rem] 2xl:text-[8.4rem]" style={{ fontWeight: 400 }}>
              <span className="line-up"><span style={d(150)}>Couvreur à</span></span>{" "}
              <span className="line-up"><span className="pl-[0.9em] lg:pl-[1em]" style={d(300)}>La Garenne-</span></span>
              <span className="line-up"><span className="italic text-cuivre-light" style={{ ...d(450), fontWeight: 400 }}>Colombes</span></span>
            </h1>
          </div>

          {/* La mascotte, grande, au premier plan, devant la lampe de l'atelier ; ses pieds se posent sur le filet du sol. */}
          <div className="relative mx-auto mt-2 h-[112vw] max-h-[46rem] w-full sm:h-[100vw] lg:absolute lg:inset-y-0 lg:right-[-2%] lg:mt-0 lg:h-auto lg:max-h-none lg:w-[44%]">
            <div className="absolute inset-y-0 left-[calc(var(--gutter)*-1)] right-[calc(var(--gutter)*-1)] lg:hidden">
              <Img id="heros" alt="" className="absolute inset-0" priority position="50% 35%" grade="fort" />
              <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-b from-nuit via-nuit/10 to-nuit" />
            </div>
            <span aria-hidden="true" className="absolute left-1/2 top-[54%] aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 lg:top-[50%] lg:w-[125%]"><span className="halo absolute inset-0 rounded-full" /></span>
            <span aria-hidden="true" className="sol absolute bottom-[-4%] left-1/2 h-[10%] w-[95%] -translate-x-1/2 rounded-[50%]" />
            <div className="absolute bottom-0 left-1/2 z-[5] w-[min(80%,calc(112vw*0.7))] -translate-x-[50%] sm:w-[58%] lg:w-[min(84%,calc((min(100svh,62rem)-16rem)*0.73))]">
              <Mascotte />
            </div>
          </div>
        </div>

        {/* Le sol de l'atelier : un filet de cuivre, puis l'accroche, l'appel et le téléphone */}
        <div className="relative z-[6] border-t border-cuivre/40 pb-10 pt-7 lg:pb-9">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <p className="fade-in max-w-[44ch] text-[1.05rem] leading-[1.6] text-creme-soft lg:col-span-4" style={d(700)}>
              Entreprise artisanale et familiale : couverture, charpente, zinguerie, Velux, isolation et façade. <span className="text-creme">Devis et déplacement gratuits.</span>
            </p>
            <div className="fade-in flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 lg:col-span-5" style={d(850)}>
              <a href={`tel:${business.phoneTel}`} className="btn-cuivre" data-track="cta_tel_hero"><PhoneIcon className="h-4 w-4" /> Appeler le {business.phoneDisplay}</a>
              <Link href={PATHS.contact} className="link-u self-start text-[0.95rem] sm:self-auto" data-track="cta_devis_hero">Demander un devis <ArrowIcon /></Link>
            </div>
            <div className="fade-in lg:col-span-3 lg:text-right" style={d(1000)}>
              <span className="cap block whitespace-nowrap">Décennale Generali</span>
              <span className="cap mt-1.5 block whitespace-nowrap text-cuivre-light">Expert Velux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(homeFaq)];
  return (
    <>
      <Hero />
      <Brief text={home.brief} />

      <section className="bg-nuit-2/60 py-20 sm:py-32">
        <div className="wrap">
          <SectionHead n={2} label="Les métiers" />
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="h2 max-w-[14ch] lg:col-span-8">Du bois de la ferme <span className="disp-i">à la dernière tuile</span></h2>
            <div className="max-w-[40ch] lg:col-span-4">Six métiers, un seul artisan : la charpente porte la couverture, la zinguerie la protège, la façade suit.</div>
          </div>
          <div className="mt-16 sm:mt-20"><TradesList /></div>
        </div>
      </section>

      <section className="relative">
        <Img id="real-2" alt={photoAlt("real-2")} className="h-[120vw] max-h-[56rem] w-full sm:h-[62vw]" grade="fort" />
        <div className="absolute inset-0 z-[3] bg-gradient-to-t from-nuit via-nuit/40 to-nuit/60" />
        <div className="wrap absolute inset-x-0 bottom-0 z-[4] pb-12 sm:pb-20">
          <SectionHead n={3} label="Réalisation" />
          <p className="mt-10 max-w-[24ch] font-serif text-[2rem] leading-[1.08] text-creme sm:text-[3.4rem] lg:text-[4.2rem]" data-reveal>
            « Chaque projet que nous entreprenons est traité avec le plus grand soin, <span className="disp-i">avec des matériaux de qualité, pour des résultats durables.</span> »
          </p>
          <Link href={PATHS.works} className="link-u mt-10 text-[0.95rem]">Voir les réalisations <ArrowIcon /></Link>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="wrap">
          <SectionHead n={4} label="Avant, après" />
          <div className="mt-14 grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="h2">Toiture <span className="disp-i">et cheminée</span></h2>
              <div className="mt-6 max-w-[40ch]">Un chantier de l&apos;entreprise, présenté sur son site. Glissez le curseur.</div>
              <ul className="mt-10 border-t border-creme/15">
                {["Valeur ajoutée à la propriété", "Meilleure isolation", "Aspect esthétique amélioré"].map((t, k) => (
                  <li key={t} className="flex gap-5 border-b border-creme/15 py-5 text-creme"><span aria-hidden="true" className="num w-6 shrink-0">{["I", "II", "III"][k]}</span>{t}</li>
                ))}
              </ul>
              <span className="cap mt-5 block">Résultats après travaux, d&apos;après le site de l&apos;entreprise</span>
            </div>
            <div className="lg:col-span-8">
              <BeforeAfter caption="Travaux sur toiture et cheminée (photos de l'entreprise)" />
              <div className="mt-8 grid grid-cols-2 gap-6">
                <Img id="tuiles" alt={photoAlt("tuiles")} className="aspect-[4/5] w-full" />
                <Img id="real-3" alt={photoAlt("real-3")} className="mt-16 aspect-[4/5] w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-creme/10 bg-nuit-deep py-20 sm:py-32">
        <div className="wrap">
          <SectionHead n={5} label="L'entreprise" />
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
              <h2 className="h2">Une affaire de famille, <span className="disp-i">de génération en génération</span></h2>
              <p className="mt-8 max-w-[54ch] text-[1.06rem]">
                M. Fabulet Couverture est une entreprise artisanale et familiale, inscrite au répertoire des métiers et dirigée par Emile Eric Fabulet. Couverture, zinguerie, charpente et peinture : le métier s&apos;apprend sur les toits, auprès des anciens, et se transmet.
              </p>
              <dl className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {[["Assurance", "Garantie décennale Generali"], ["Velux", "Installateur conseil expert"], ["Visite", "Devis et déplacement gratuits"], ["Registre", business.rm]].map(([k, v]) => (
                  <div key={k} className="border-t border-creme/15 pt-4"><dt className="cap text-cuivre-light">{k}</dt><dd className="mt-2 font-serif text-[1.35rem] leading-[1.2] text-creme">{v}</dd></div>
                ))}
              </dl>
              <Link href={PATHS.company} className="link-u mt-12 text-[0.95rem]">Découvrir l&apos;entreprise <ArrowIcon /></Link>
            </div>
            <div className="lg:col-span-6 lg:row-start-1">
              <div className="relative">
                <Img id="charpente" alt={photoAlt("charpente")} className="aspect-[4/5] w-full shadow-photo" />
                <div className="absolute -bottom-10 -right-2 hidden w-[44%] sm:block lg:-right-14">
                  <Img id="couverture" alt={photoAlt("couverture")} className="aspect-square w-full border-[8px] border-nuit-deep" />
                </div>
                <FermeMark className="absolute -top-5 left-6 h-10 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="wrap">
          <SectionHead n={6} label="Au marché" />
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <h2 className="h2">On se croise au marché <span className="disp-i">de La Garenne-Colombes</span></h2>
              <p className="mt-8 max-w-[50ch] text-[1.06rem]">
                L&apos;entreprise tient un stand sur le marché de la ville, avec ses affiches de chantier. Venez avec une photo de votre toit ou de votre façade : on regarde ensemble, et on fixe une visite si besoin.
              </p>
              <div className="mt-4 text-creme-faint">Jours de présence confirmés par téléphone.</div>
            </div>
            <div className="lg:col-span-7">
              <Img id="tuiles-gros-plan" alt={photoAlt("tuiles-gros-plan")} className="aspect-[16/11] w-full shadow-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nuit-2/60 py-20 sm:py-32">
        <div className="wrap">
          <SectionHead n={7} label="Communes" />
          <h2 className="h2 mt-14 max-w-[16ch]">La Garenne-Colombes <span className="disp-i">et ses voisines</span></h2>
          <ul className="mt-14 border-t border-creme/15">
            {localPages.map((p, k) => (
              <li key={p.path} className="border-b border-creme/15">
                <Link href={p.path} className="row-link grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 sm:grid-cols-[5rem_1fr_auto] sm:py-8">
                  <span className="num text-[1.05rem]">{String(k + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[1.7rem] leading-[1.1] text-creme sm:text-[2.8rem]">Couvreur à <span className="row-zone italic text-cuivre-light transition-colors">{p.zone}</span></span>
                  <ArrowIcon className="card-arrow h-5 w-5 shrink-0 text-cuivre-light" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList items={homeFaq} n={8} />
      <LocalBlock n={9} />
      <CtaBand title="Votre toit mérite un artisan." />
      <JsonLd nodes={nodes} />
    </>
  );
}
