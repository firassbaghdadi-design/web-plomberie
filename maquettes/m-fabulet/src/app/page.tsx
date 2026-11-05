import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FermeGable } from "@/components/Ferme";
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
  const call = (track: string, extra = "") => (
    <a href={`tel:${business.phoneTel}`} className={`btn-bois ${extra}`} data-track={track}><PhoneIcon className="h-5 w-5" /> Appeler le {business.phoneDisplay}</a>
  );
  return (
    <section className="relative overflow-hidden pt-[5.6rem] lg:pt-[5rem]" aria-label="M. Fabulet Couverture">
      <div className="wrap grid lg:min-h-[min(calc(100svh-5rem),56rem)] lg:grid-cols-[minmax(0,1fr)_45%] lg:items-center lg:gap-10">
        <div className="relative z-[6] lg:py-12">
          <p className="fade-in cap text-tuile-deep" style={{ ["--d" as string]: "100ms" }}>Artisan couvreur-charpentier<span className="hidden sm:inline"> · Hauts-de-Seine</span></p>
          <h1 className="mt-4 text-[2.75rem] leading-[0.98] sm:text-[4.4rem] lg:text-[3.9rem] xl:text-[4.4rem] 2xl:text-[5.4rem]" style={{ fontWeight: 300 }}>
            <span className="line-up"><span style={{ ["--d" as string]: "150ms" }}>Couvreur à</span></span>
            <span className="line-up"><span className="italic text-tuile-deep" style={{ ["--d" as string]: "300ms", fontWeight: 280 }}>La Garenne-Colombes</span></span>
          </h1>
          <div className="hidden lg:block">
            <p className="fade-in mt-7 max-w-[38ch] text-[1.15rem] leading-[1.55] text-ink" style={{ ["--d" as string]: "600ms", fontWeight: 340 }}>
              Entreprise artisanale et familiale : couverture, charpente, zinguerie, Velux. <span className="text-ink-faint">Devis et déplacement gratuits.</span>
            </p>
            <div className="fade-in mt-8 flex flex-wrap items-center gap-x-4 gap-y-3" style={{ ["--d" as string]: "750ms" }}>
              {call("cta_tel_hero")}
              <Link href={PATHS.contact} className="btn-line" data-track="cta_devis_hero">Demander un devis</Link>
            </div>
            <p className="fade-in cap mt-8 leading-[2]" style={{ ["--d" as string]: "900ms" }}>Artisan <span className="text-tuile">·</span> Installateur conseil expert Velux <span className="text-tuile">·</span> Garantie décennale Generali</p>
          </div>
        </div>

        {/* La scène : une grande photo de toit en forme de pignon, la mascotte debout devant, au premier plan. */}
        <div className="relative mx-[calc(var(--gutter)*-1)] mt-6 h-[112vw] max-h-[44rem] sm:mx-0 sm:h-[86vw] lg:mt-0 lg:h-[min(calc(100svh-7rem),52rem)] lg:max-h-none lg:min-h-[34rem]">
          <div className="absolute inset-x-0 bottom-[7%] top-[16%] lg:bottom-[5%] lg:top-[9%]">
            <div className="pignon pignon-photo absolute inset-0 shadow-photo">
              <Img id="heros" alt={photoAlt("heros")} className="absolute inset-0" priority position="50% 40%" />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[3] h-1/3 bg-gradient-to-t from-bois-night/45 to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-0"><FermeGable /></div>
          </div>
          <div className="absolute bottom-[3%] left-1/2 z-[5] w-[min(76%,calc(112vw*0.72))] -translate-x-[54%] sm:w-[62%] lg:bottom-[2.5%] lg:w-[min(96%,calc((min(100svh-7rem,52rem))*0.72))]">
            <Mascotte />
          </div>
        </div>
      </div>

      <div className="wrap pb-4 pt-8 lg:hidden">
        <p className="fade-in text-[1.15rem] leading-[1.5] text-ink" style={{ ["--d" as string]: "900ms", fontWeight: 340 }}>
          Couverture, charpente, zinguerie, Velux, isolation et façade. <span className="text-ink-faint">Devis et déplacement gratuits.</span>
        </p>
        <div className="fade-in mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ ["--d" as string]: "1000ms" }}>
          {call("cta_tel_hero_m")}
          <Link href={PATHS.contact} className="btn-line" data-track="cta_devis_hero_m">Demander un devis ou une intervention</Link>
        </div>
        <p className="cap mt-7 leading-[2]">Artisan <span className="text-tuile">·</span> Installateur conseil expert Velux <span className="text-tuile">·</span> Garantie décennale Generali</p>
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

      <section className="bg-papier py-16 sm:py-24">
        <div className="wrap">
          <SectionHead n={2} label="Les métiers" />
          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="h2 max-w-[16ch] lg:col-span-7">Du bois de la ferme à la dernière tuile</h2>
            <div className="text-ink-soft lg:col-span-5">Six métiers, un seul artisan : la charpente porte la couverture, la zinguerie la protège, la façade suit.</div>
          </div>
          <div className="mt-12"><TradesList /></div>
        </div>
      </section>

      <section className="relative">
        <Img id="real-2" alt={photoAlt("real-2")} className="h-[88vw] max-h-[52rem] w-full sm:h-[56vw]" />
        <div className="absolute inset-0 z-[3] bg-gradient-to-t from-bois-night/80 via-bois-night/20 to-transparent" />
        <div className="wrap absolute inset-x-0 bottom-0 z-[4] pb-10 sm:pb-16">
          <SectionHead n={3} label="Réalisation" tone="creme" />
          <p className="mt-6 max-w-[30ch] text-[1.6rem] leading-[1.25] text-creme sm:text-[2.6rem]" style={{ fontWeight: 300 }} data-reveal>
            « Chaque projet que nous entreprenons est traité avec le plus grand soin, avec des matériaux de qualité, pour des résultats durables. »
          </p>
          <Link href={PATHS.works} className="mt-7 inline-flex items-center gap-3 whitespace-nowrap text-creme hover:text-orange-light">Voir les réalisations <ArrowIcon /></Link>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead n={4} label="Avant, après" />
            <h2 className="h2 mt-6">Toiture et cheminée</h2>
            <div className="mt-6 text-ink-soft">Un chantier de l&apos;entreprise, présenté sur son site. Glissez le curseur.</div>
            <ul className="mt-8 border-t border-bois/25">
              {["Valeur ajoutée à la propriété", "Meilleure isolation", "Aspect esthétique amélioré"].map((t) => (
                <li key={t} className="flex gap-4 border-b border-bois/25 py-4 text-ink"><span aria-hidden="true" className="mt-[0.75rem] h-px w-4 shrink-0 bg-tuile" />{t}</li>
              ))}
            </ul>
            <span className="cap mt-4 block">Résultats après travaux, d&apos;après le site de l&apos;entreprise</span>
          </div>
          <div className="lg:col-span-8">
            <BeforeAfter caption="Travaux sur toiture et cheminée (photos de l'entreprise)" />
            <div className="mt-8 grid grid-cols-2 gap-5">
              <Img id="tuiles" alt={photoAlt("tuiles")} className="aspect-[4/3] w-full rounded-[2px]" />
              <Img id="real-3" alt={photoAlt("real-3")} className="aspect-[4/3] w-full rounded-[2px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bois-night py-20 text-creme/80 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHead n={5} label="L'entreprise" tone="creme" />
            <h2 className="mt-6 text-[2.3rem] text-creme sm:text-[3.4rem]">Une affaire de famille, de génération en génération</h2>
            <p className="mt-7 max-w-[54ch] text-[1.08rem]">
              M. Fabulet Couverture est une entreprise artisanale et familiale, inscrite au répertoire des métiers et dirigée par Emile Eric Fabulet. Couverture, zinguerie, charpente et peinture : le métier s&apos;apprend sur les toits, auprès des anciens, et se transmet.
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[["Assurance", "Garantie décennale Generali"], ["Velux", "Installateur conseil expert"], ["Visite", "Devis et déplacement gratuits"], ["Registre", business.rm]].map(([k, v]) => (
                <div key={k} className="border-t border-creme/20 pt-4"><dt className="cap text-orange-light">{k}</dt><dd className="mt-2 text-creme">{v}</dd></div>
              ))}
            </dl>
            <Link href={PATHS.company} className="mt-10 inline-flex items-center gap-3 whitespace-nowrap text-creme hover:text-orange-light">Découvrir l&apos;entreprise <ArrowIcon /></Link>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <Img id="charpente" alt={photoAlt("charpente")} className="aspect-[4/5] w-full rounded-[2px] shadow-photo sm:aspect-[5/6]" />
              <div className="absolute -bottom-8 -left-4 hidden w-[42%] sm:block lg:-left-12">
                <Img id="couverture" alt={photoAlt("couverture")} className="aspect-square w-full rounded-[2px] border-[6px] border-bois-night" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <Img id="tuiles-gros-plan" alt={photoAlt("tuiles-gros-plan")} className="aspect-[5/4] w-full rounded-[2px] shadow-photo" />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <SectionHead n={6} label="Au marché" />
            <h2 className="h2 mt-6">On se croise au marché de La Garenne-Colombes</h2>
            <p className="mt-7 max-w-[54ch] text-[1.08rem]">
              L&apos;entreprise tient un stand sur le marché de la ville, avec ses affiches de chantier. Venez avec une photo de votre toit ou de votre façade : on regarde ensemble, et on fixe une visite si besoin.
            </p>
            <div className="mt-4 text-ink-faint">Jours de présence confirmés par téléphone.</div>
          </div>
        </div>
      </section>

      <section className="bg-creme-2 py-16 sm:py-24">
        <div className="wrap">
          <SectionHead n={7} label="Communes" />
          <h2 className="h2 mt-6 max-w-[18ch]">La Garenne-Colombes et ses voisines</h2>
          <ul className="mt-10 grid border-t border-bois/25 sm:grid-cols-2 lg:grid-cols-3">
            {localPages.map((p) => (
              <li key={p.path} className="border-b border-bois/25">
                <Link href={p.path} className="trade flex items-center justify-between gap-4 py-6 pr-4 text-[1.5rem] text-ink sm:text-[1.9rem]" style={{ fontWeight: 330 }}>
                  <span>Couvreur à <span className="italic text-tuile-deep">{p.zone}</span></span>
                  <ArrowIcon className="trade-arrow h-5 w-5 shrink-0 text-tuile" />
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
