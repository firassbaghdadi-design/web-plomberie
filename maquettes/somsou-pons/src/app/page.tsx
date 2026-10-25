import Link from "next/link";
import { AgencyPanels, Brief, CtaBand, FaqList, HouseFrame, Marquee, QualGrid, Timeline } from "@/components/Sections";
import { TradesShowcase } from "@/components/TradesShowcase";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { home } from "@/lib/content";
import { PATHS, agencies, business, faqs } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

const { title, description } = home;
const path = PATHS.home;
export const metadata = pageMeta({ title, description, path });

const lines = ["Plomberie, chauffage", "et rénovation", "à Paris 16e et 17e"];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="titre-page">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div>
            <p className="eyebrow fade-in" style={{ ["--i" as string]: 0 }}>
              {home.eyebrow}
            </p>
            <h1 id="titre-page" className="hero-title mt-7">
              {lines.map((l, i) => (
                <span key={l} className="mask">
                  <span style={{ ["--i" as string]: i }}>{i === 2 ? <em>{l}</em> : l}</span>
                </span>
              ))}
            </h1>
            <p className="lead fade-in mt-8 max-w-xl" style={{ ["--i" as string]: 2 }}>
              {home.lead}
            </p>
            <div className="fade-in mt-10 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
              <Link href={PATHS.contact} data-track="generate_lead" data-magnetic className="btn-amber pulse">
                Demander un devis ou une intervention
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost">
                <PhoneIcon className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
            </div>
            <ul className="fade-in mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ ["--i" as string]: 4 }}>
              {agencies.map((a) => (
                <li key={a.key}>
                  <span className="font-semibold text-ink">{a.short}</span> · {a.street}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-in" style={{ ["--i" as string]: 1 }}>
            <HouseFrame
              photo="facade"
              priority
              chip={
                <>
                  <span className="block font-display text-3xl font-bold leading-none">1876</span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Les premières mosaïques</span>
                </>
              }
            />
          </div>
        </div>
      </section>

      <Brief text={home.brief} />

      <div className="mt-20">
        <Marquee />
      </div>

      <Timeline title={home.storyTitle} text={home.storyText} />

      <section aria-labelledby="titre-metiers" className="section">
        <div className="container-x">
          <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow">Nos métiers</p>
              <h2 id="titre-metiers" className="mt-4 text-4xl sm:text-6xl">
                {home.tradesTitle}
              </h2>
            </div>
            <p data-reveal className="text-lg">
              Plomberie et chauffage au cœur, la rénovation autour, et un atelier de menuiserie à La Garenne-Colombes.{" "}
              <Link href={PATHS.trades} className="link-line font-semibold text-brand">
                Tous nos métiers
              </Link>
            </p>
          </div>
          <TradesShowcase />
        </div>
      </section>

      <section aria-labelledby="titre-agences" className="section pt-0">
        <div className="container-x">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow">Nos agences</p>
              <h2 id="titre-agences" className="mt-4 text-4xl sm:text-6xl">
                {home.agenciesTitle}
              </h2>
            </div>
            <p data-reveal className="text-lg">
              {home.agenciesText}{" "}
              <Link href={PATHS.agencies} className="link-line font-semibold text-brand">
                Voir les agences
              </Link>
            </p>
          </div>
          <div data-reveal>
            <AgencyPanels />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-qualif" className="section" style={{ background: "var(--paper-2)" }}>
        <div className="container-x">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow">Nos qualifications</p>
              <h2 id="titre-qualif" className="mt-4 text-4xl sm:text-6xl">
                {home.qualifTitle}
              </h2>
            </div>
            <p data-reveal className="text-lg">
              {home.qualifText}{" "}
              <Link href={PATHS.qualifications} className="link-line font-semibold text-brand">
                Le détail des qualifications
              </Link>
            </p>
          </div>
          <QualGrid />
        </div>
      </section>

      <section aria-labelledby="titre-choisir" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <h2 id="titre-choisir" className="text-3xl sm:text-[2.6rem]">{home.questionTitle}</h2>
            <p className="lead mt-5 border-l-4 border-brand pl-5 text-ink">{home.questionAnswer}</p>
            {home.questionBody.map((p) => (
              <p key={p} className="mt-5 text-lg">
                {p}
              </p>
            ))}
          </div>
          <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-lift">
            <div className="absolute inset-[-6%_0]" data-speed="0.05">
              <Photo id="casque" sizes="(min-width:1024px) 40vw, 92vw" />
            </div>
          </div>
        </div>
      </section>

      <FaqList items={faqs.home} title="Les questions qu'on nous pose" />
      <CtaBand title={home.ctaTitle} text={home.ctaText} />
      <JsonLd nodes={[webPageNode({ title, description, path }), faqNode("home")]} />
    </>
  );
}
