import Link from "next/link";
import { AgencyPanels, Brief, CtaBand, FaqList, QualGrid, Timeline } from "@/components/Sections";
import { TradesShowcase } from "@/components/TradesShowcase";
import { Realisations } from "@/components/Original";
import { PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Mark, MosaicPhoto, Tiles } from "@/components/Mosaic";
import { home } from "@/lib/content";
import { PATHS, agencies, business, faqs } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

const { title, description } = home;
const path = PATHS.home;
export const metadata = pageMeta({ title, description, path });

const lines = ["Plomberie, chauffage", "et rénovation", "à Paris 16e et 17e"];
const TOTAL = 6;

export default function HomePage() {
  return (
    <>
      <section className="hero-home" aria-labelledby="titre-page">
        <div className="hero-panel mosaic is-in">
          <div className="zoom">
            <Photo id="facade" sizes="100vw" priority />
          </div>
          <Tiles cols={[7, 16]} ratio={[1.75, 0.65]} seed={1876} start={0.1} spread={1.25} />
          <div className="container-x relative z-[3] flex h-full flex-col justify-between pb-8 pt-6 sm:pb-12 sm:pt-8">
            <div className="fade-in flex items-start justify-between gap-6" style={{ ["--i" as string]: 0 }}>
              <p className="eyebrow !text-white">{home.eyebrow}</p>
              <p className="hidden text-right text-sm leading-snug text-white/90 md:block">
                <span className="block text-[2rem] font-extralight leading-none tracking-tight">1876</span>
                <span className="caption !text-white/80">Les premières mosaïques</span>
              </p>
            </div>
            <h1 id="titre-page" className="hero-title">
              {lines.map((l, i) => (
                <span key={l} className="mask">
                  <span style={{ ["--i" as string]: i }}>{l}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="container-x hero-band">
          <p className="lead fade-in max-w-2xl !text-[1.05rem] sm:!text-[1.25rem]" style={{ ["--i" as string]: 1 }}>
            {home.lead}
          </p>
          <div className="fade-in flex flex-wrap gap-3" style={{ ["--i" as string]: 2 }}>
            <Link href={PATHS.contact} data-track="generate_lead" className="btn-amber">
              Demander un devis ou une intervention
            </Link>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost">
              <PhoneIcon className="h-4 w-4 text-amber-action" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="container-x">
          <ul className="fade-in grid gap-y-3 border-t border-line pt-5 text-[0.92rem] sm:grid-cols-3" style={{ ["--i" as string]: 3 }}>
            {agencies.map((a) => (
              <li key={a.key} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="inline-block h-[6px] w-[6px] shrink-0 translate-y-[-2px] bg-brand" />
                <span>
                  <span className="text-ink">{a.short}</span> · {a.street}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-16 sm:mt-24">
        <Brief text={home.brief} />
      </div>

      <Timeline title={home.storyTitle} text={home.storyText} compact n={1} total={TOTAL} />

      <section aria-labelledby="titre-metiers" className="section pt-0">
        <div className="container-x">
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div data-reveal className="lg:col-span-7">
              <Mark n={2} total={TOTAL} label="Nos métiers" />
              <h2 id="titre-metiers" className="h-sec mt-6">
                {home.tradesTitle}
              </h2>
            </div>
            <p data-reveal className="text-[1.08rem] lg:col-span-5">
              Plomberie et chauffage au cœur, la rénovation autour, et un atelier de menuiserie à La Garenne-Colombes.{" "}
              <Link href={PATHS.trades} className="link-line text-brand">
                Tous nos métiers
              </Link>
            </p>
          </div>
          <TradesShowcase compact />
        </div>
      </section>

      <Realisations limit={2} n={3} total={TOTAL} />

      <section aria-labelledby="titre-agences" className="section">
        <div className="container-x">
          <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div data-reveal className="lg:col-span-7">
              <Mark n={4} total={TOTAL} label="Nos agences" />
              <h2 id="titre-agences" className="h-sec mt-6">
                {home.agenciesTitle}
              </h2>
            </div>
            <p data-reveal className="text-[1.08rem] lg:col-span-5">
              {home.agenciesText}{" "}
              <Link href={PATHS.agencies} className="link-line text-brand">
                Voir les agences
              </Link>
            </p>
          </div>
          <AgencyPanels compact />
        </div>
      </section>

      <section aria-labelledby="titre-qualif" className="section pt-0">
        <div className="container-x">
          <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div data-reveal className="lg:col-span-7">
              <Mark n={5} total={TOTAL} label="Nos qualifications" />
              <h2 id="titre-qualif" className="h-sec mt-6">
                {home.qualifTitle}
              </h2>
            </div>
            <p data-reveal className="text-[1.08rem] lg:col-span-5">
              {home.qualifText}{" "}
              <Link href={PATHS.qualifications} className="link-line text-brand">
                Le détail des qualifications
              </Link>
            </p>
          </div>
          <QualGrid />
        </div>
      </section>

      <section aria-labelledby="titre-choisir" className="section pt-0">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Mark n={6} total={TOTAL} label="Conseil" />
            <h2 id="titre-choisir" className="h-sub mt-7">{home.questionTitle}</h2>
            <p className="lead mt-5 border-l-4">{home.questionAnswer}</p>
            {home.questionBody.map((p) => (
              <p key={p} className="mt-5 max-w-[40rem] text-[1.06rem]">
                {p}
              </p>
            ))}
          </div>
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <MosaicPhoto photo="chauffagiste" className="aspect-[4/5]" ratio={[1.25, 1.25]} cols={[6, 6]} seed={66} sizes="(min-width:1024px) 36vw, 94vw" />
          </div>
        </div>
      </section>

      <FaqList items={faqs.home} title="Les questions qu'on nous pose" />
      <CtaBand title={home.ctaTitle} text={home.ctaText} />
      <JsonLd nodes={[webPageNode({ title, description, path }), faqNode("home")]} />
    </>
  );
}
