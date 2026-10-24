import Link from "next/link";
import { business, copy, emergency, faqs, PATHS, reflexes, reviews, steps } from "@/lib/site";
import { ArrowIcon, PhoneIcon, PinIcon, Stars } from "./Icons";
import { Bubbles, Waves } from "./Ocean";
import { Kinetic } from "./Kinetic";
import { Photo } from "./Photo";
import type { PageDeep } from "@/lib/brands/types";
import type { PhotoId } from "@/lib/photos";

export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="fade-up text-sm text-white/75" style={{ ["--delay" as string]: "0.05s" }}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-white hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {item.name}
              </span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, lead, photo, photoAlt, crumbs, primary }: { eyebrow: string; title: string; lead: string; photo: PhotoId; photoAlt: string; crumbs: { name: string; href?: string }[]; primary?: { href: string; label: string } }) {
  return (
    <section data-stage className="ocean relative overflow-hidden pb-40 pt-36 text-white sm:pt-44" aria-labelledby="titre-page">
      <Bubbles />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Breadcrumb items={crumbs} />
          <p className="eyebrow-light fade-up mt-6" style={{ ["--delay" as string]: "0.15s" }}>
            {eyebrow}
          </p>
          <h1 id="titre-page" className="mt-4 text-[2.5rem] leading-[1.05] !text-white sm:text-5xl lg:text-[3.8rem]">
            <Kinetic text={title} />
          </h1>
          <p className="lead fade-up mt-6 max-w-xl !text-white/85" style={{ ["--delay" as string]: "0.3s" }}>
            {lead}
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ ["--delay" as string]: "0.45s" }}>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse">
              <PhoneIcon />
              Appeler le {business.phoneDisplay}
            </a>
            <Link href={primary?.href ?? PATHS.contact} className="btn-ghost-light arrow-link">
              Demander un devis ou une intervention
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="parallax relative mx-auto w-full max-w-lg" style={{ ["--depth" as string]: -14 }}>
          <div className="float-slow relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 shadow-glow">
            <Photo id={photo} alt={photoAlt} sizes="(min-width:1024px) 40vw, 90vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </div>
          <div className="glass float-slower absolute -bottom-6 -left-4 rounded-2xl border border-white/25 bg-white/15 px-5 py-4 backdrop-blur-md sm:-left-10">
            <div className="flex items-center gap-3">
              <Stars className="h-4 w-4" />
              <span className="font-display text-xl text-white">{reviews.ratingText}/5</span>
            </div>
            <p className="mt-1 text-xs text-white/80">{reviews.count} avis Google</p>
          </div>
        </div>
      </div>
      <Waves />
    </section>
  );
}

export function FeatureRows({ items, accent, contactType }: { items: readonly { name: string; text: string; photo: string }[]; accent?: string; contactType?: string }) {
  return (
    <div className="space-y-24 sm:space-y-32">
      {items.map((item, index) => (
        <article key={item.name} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
          <div data-reveal={index % 2 ? "right" : "left"} className="card-photo relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
            <Photo id={item.photo as PhotoId} alt={`${item.name}${accent ? " — " + accent : ""}`} sizes="(min-width:1024px) 45vw, 92vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <span className="outline-num absolute bottom-3 right-6 font-display text-8xl leading-none !text-white/90" style={{ WebkitTextStroke: "0" }} aria-hidden="true">
              0{index + 1}
            </span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl">{item.name}</h2>
            <p className="lead mt-5">{item.text}</p>
            <Link href={contactType ? `${PATHS.contact}?demande=${contactType}` : PATHS.contact} className="arrow-link mt-7 inline-flex items-center gap-2 font-medium text-brand-dark hover:text-ink">
              Demander un devis
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Stats() {
  const stats = [
    { n: copy.stats.yearsNumber, suffix: "+", label: copy.stats.years, decimals: 0 },
    { n: reviews.rating, suffix: "/5", label: "note moyenne sur Google", decimals: 1 },
    { n: reviews.count, suffix: "", label: "avis clients Google", decimals: 0 },
    { n: 3, suffix: "", label: copy.stats.trades, decimals: 0 },
  ];
  return (
    <section aria-label="Chiffres clés" className="relative overflow-hidden bg-ink py-16 text-white">
      <div className="ocean absolute inset-0 opacity-70" aria-hidden="true" />
      <ul className="container-x relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="border-l border-white/25 pl-5">
            <p className="font-display text-5xl leading-none text-white sm:text-6xl">
              <span data-count={s.n} data-decimals={s.decimals} data-suffix={s.suffix}>
                {String(s.n).replace(".", ",")}
                {s.suffix}
              </span>
            </p>
            <p className="mt-3 text-sm text-white/75">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


export function Process() {
  return (
    <section aria-labelledby="titre-methode" className="section">
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          Notre méthode
        </p>
        <h2 id="titre-methode" data-reveal className="mt-3 max-w-3xl text-4xl sm:text-6xl">
          {copy.common.processTitle}
        </h2>
        <p data-reveal className="lead mt-5 max-w-2xl">
          {copy.common.processLead}
        </p>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand via-brand-light to-transparent lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.title} data-reveal style={{ ["--d" as string]: `${index * 120}ms` }} className="relative">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-2xl text-white shadow-lift">{index + 1}</span>
              <h3 className="mt-6 text-2xl">{step.title}</h3>
              <p className="mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Emergency() {
  return (
    <section id="fuite" aria-labelledby="titre-fuite" className="ocean relative overflow-hidden py-20 text-white sm:py-28">
      <Bubbles />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal="left">
          <p className="eyebrow-light">Urgence</p>
          <h2 id="titre-fuite" className="mt-3 text-4xl !text-white sm:text-5xl">
            {emergency.title}
          </h2>
          <p className="lead mt-5 !text-white/85">{emergency.lead}</p>
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse mt-8">
            <PhoneIcon />
            Appeler le {business.phoneDisplay}
          </a>
        </div>
        <ol className="space-y-3">
          {reflexes.map((step, index) => (
            <li key={step} data-reveal="right" style={{ ["--d" as string]: `${index * 90}ms` }} className="flex gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber font-display text-lg text-ink">{index + 1}</span>
              <span className="pt-1.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqList({ keyName, title = "Vos questions" }: { keyName: keyof typeof faqs; title?: string }) {
  return (
    <section id="questions" aria-labelledby="titre-faq" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="mt-3 text-4xl sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line" data-reveal style={{ ["--d" as string]: "100ms" }}>
          {faqs[keyName].map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-6 font-display text-xl text-ink sm:text-2xl">
                {item.q}
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 text-2xl text-brand-dark transition duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-white">
                  +
                </span>
              </summary>
              <p className="faq-a mt-4 max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = copy.home.ctaTitle, text = copy.home.ctaText }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="titre-cta" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="ocean absolute inset-0" aria-hidden="true" />
      <Bubbles />
      <div className="container-x relative text-center">
        <h2 id="titre-cta" data-reveal className="mx-auto max-w-3xl text-4xl !text-white sm:text-6xl">
          {title}
        </h2>
        <p data-reveal className="lead mx-auto mt-5 max-w-xl !text-white/85">
          {text}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse !px-9 !py-4 text-lg">
            <PhoneIcon />
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-ghost-light arrow-link !px-9 !py-4 text-lg">
            Écrire un message
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Sections « question + réponse directe » : un H2 en question, une réponse de 40 à 60 mots, puis le détail. */
export function DeepContent({ deep }: { deep: PageDeep }) {
  return (
    <section aria-label="Questions et réponses" className="section pt-0">
      <div className="container-x max-w-4xl space-y-16">
        {deep.sections.map((section) => (
          <article key={section.h2}>
            <h2 className="text-3xl sm:text-4xl">{section.h2}</h2>
            <p className="lead mt-5 border-l-4 border-brand pl-5 text-ink">{section.answer}</p>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}


/** Bloc local : adresse, téléphone, horaires, itinéraire et appel à l'action vers la page contact (le seul formulaire du site). */
export function LocalBlock({ deep, contactType }: { deep: PageDeep; contactType: string }) {
  return (
    <section id="nous-trouver" aria-labelledby="titre-local" className="section">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">Nous trouver</p>
          <h2 id="titre-local" className="mt-3 text-3xl sm:text-4xl">
            {deep.localTitle}
          </h2>
          {deep.localParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="rounded-[2rem] border border-line bg-white p-7 shadow-lift sm:p-9">
          <ul className="space-y-3">
            {deep.localPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-dark" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`${PATHS.contact}?demande=${contactType}`} data-track="generate_lead" className="btn-amber pulse whitespace-nowrap">
              Demander un devis ou une intervention
            </Link>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost whitespace-nowrap">
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-dark underline underline-offset-4 hover:text-ink">
              Itinéraire et fiche Google<span className="sr-only"> (nouvel onglet)</span>
            </a>
            {" "}· Note de {reviews.ratingText}/5 sur Google ({reviews.count} avis).
          </p>
        </div>
      </div>
    </section>
  );
}

/** Maillage interne vers les autres pages de service. */
export function SeeAlso({ current }: { current: "plumbing" | "heating" | "bathrooms" }) {
  const items = [
    { key: "plumbing", href: PATHS.plumbing, label: `Plombier ${copy.plumbing.accent.replace("plomberie à ", "")} : urgences et dépannage` },
    { key: "heating", href: PATHS.heating, label: `Chauffagiste ${copy.heating.accent.replace("chauffage à ", "")} : chaudière et entretien` },
    { key: "bathrooms", href: PATHS.bathrooms, label: `Rénovation de salle de bains ${copy.bathrooms.accent.replace("salle de bains à ", "")}` },
  ].filter((i) => i.key !== current);
  return (
    <section aria-labelledby="titre-voir-aussi" className="pb-4">
      <div className="container-x">
        <h2 id="titre-voir-aussi" className="text-2xl sm:text-3xl">
          Voir aussi
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="btn-ghost arrow-link">
                {item.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

