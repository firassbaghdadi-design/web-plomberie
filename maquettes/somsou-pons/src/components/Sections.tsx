import Link from "next/link";
import { PATHS, agencies, business, marquee, qualifications, reviews, timeline, type Faq } from "@/lib/site";
import type { DeepSection, PageContent } from "@/lib/content";
import type { PhotoId } from "@/lib/photos";
import { ArrowIcon, PhoneIcon, PinIcon } from "./Icons";
import { Photo } from "./Photo";

/** La photo prend la silhouette de la maison du logo, soulignée par les deux traits orange et vert. */
export function HouseFrame({ photo, priority = false, chip, sizes = "(min-width:1024px) 40vw, 90vw" }: { photo: PhotoId; priority?: boolean; chip?: React.ReactNode; sizes?: string }) {
  const pts = "0,19 50,0 100,19 100,100 0,100 0,19";
  return (
    <div className="house">
      <div className="shape">
        <div className="inner" data-speed="0.06">
          <Photo id={photo} sizes={sizes} priority={priority} />
        </div>
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polyline className="o" points={pts} pathLength={1} transform="translate(-4 3)" />
        <polyline className="g" points={pts} pathLength={1} transform="translate(4 -2)" />
      </svg>
      {chip ? <div className="chip fade-in" style={{ ["--i" as string]: 5 }}>{chip}</div> : null}
    </div>
  );
}

export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="fade-in text-sm" style={{ ["--i" as string]: 0 }}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="text-brand underline-offset-4 hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.name}
              </span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true" className="text-amber">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ c, crumbs, contactType }: { c: PageContent; crumbs: { name: string; href?: string }[]; contactType?: string }) {
  return (
    <section className="hero" aria-labelledby="titre-page">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Breadcrumb items={crumbs} />
          <p className="eyebrow fade-in mt-8" style={{ ["--i" as string]: 1 }}>
            {c.eyebrow}
          </p>
          <h1 id="titre-page" className="mask mt-5 text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.3rem]">
            <span>{c.h1}</span>
          </h1>
          <p className="lead fade-in mt-7 max-w-xl" style={{ ["--i" as string]: 2 }}>
            {c.lead}
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            <Link href={contactType ? `${PATHS.contact}?demande=${contactType}` : PATHS.contact} data-track="generate_lead" data-magnetic className="btn-amber pulse">
              Demander un devis ou une intervention
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost">
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="fade-in" style={{ ["--i" as string]: 2 }}>
          <HouseFrame photo={c.heroPhoto} priority />
        </div>
      </div>
    </section>
  );
}

/** Bloc « En bref » : 40 à 60 mots, la réponse que lisent Google et les assistants. */
export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref" className="pb-4">
      <div className="container-x">
        <div className="max-w-4xl border-l-4 border-amber pl-6" data-reveal>
          <p className="reponse-bref font-display text-2xl leading-snug text-ink sm:text-[1.9rem]">
            <strong className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-brand">En bref : </strong>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Sections « question + réponse directe » : un H2 en question, une réponse de 40 à 60 mots, puis le détail. */
export function DeepContent({ sections, photos = [] }: { sections: (DeepSection & { id?: string })[]; photos?: PhotoId[] }) {
  return (
    <section aria-label="Questions et réponses" className="section">
      <div className="container-x space-y-24 sm:space-y-32">
        {sections.map((s, i) => {
          const photo = photos[i];
          return (
            <article key={s.h2} id={s.id} className={`grid items-start gap-10 ${photo ? "lg:grid-cols-[1.15fr_0.85fr] lg:gap-20" : ""}`}>
              <div className={photo && i % 2 ? "lg:order-2" : ""}>
                <span className="font-display text-6xl font-bold leading-none text-amber/90" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-3xl sm:text-[2.6rem]">{s.h2}</h2>
                <p className="lead mt-5 border-l-4 border-brand pl-5 text-ink">{s.answer}</p>
                {s.body.map((p) => (
                  <p key={p} className="mt-5 text-lg">
                    {p}
                  </p>
                ))}
              </div>
              {photo ? (
                <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-lift lg:sticky lg:top-28">
                  <div className="absolute inset-[-6%_0]" data-speed="0.05">
                    <Photo id={photo} sizes="(min-width:1024px) 34vw, 92vw" />
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Vos questions" }: { items: Faq[]; title?: string }) {
  return (
    <section id="questions" aria-labelledby="titre-faq" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="mt-4 text-4xl sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line" data-reveal style={{ ["--d" as string]: "100ms" }}>
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold text-ink sm:text-2xl">
                {item.q}
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/30 text-2xl text-brand transition duration-300 group-open:rotate-45 group-open:border-amber group-open:bg-amber group-open:text-white">
                  +
                </span>
              </summary>
              <p className="faq-a text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Bloc local : les trois adresses, et l'appel à l'action vers la page contact (le seul formulaire du site). */
export function LocalBlock({ c, contactType }: { c: PageContent; contactType?: string }) {
  return (
    <section id="nous-trouver" aria-labelledby="titre-local" className="section pt-0">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">Nous trouver</p>
          <h2 id="titre-local" className="mt-4 text-3xl sm:text-5xl">
            {c.localTitle}
          </h2>
          {c.localParagraphs.map((p) => (
            <p key={p} className="mt-5 text-lg">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={contactType ? `${PATHS.contact}?demande=${contactType}` : PATHS.contact} data-track="generate_lead" className="btn-amber">
              Demander un devis ou une intervention
            </Link>
          </div>
          <p className="mt-6 text-sm">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line font-semibold text-brand">
              Itinéraire et fiche Google<span className="sr-only"> (nouvel onglet)</span>
            </a>{" "}
            · Note de {reviews.ratingText}/5 sur Google ({reviews.count} avis, relevé du {reviews.observed}).
          </p>
        </div>
        <ul className="grid gap-3" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {agencies.map((a) => (
            <li key={a.key} className="rounded-[1.4rem] border border-line bg-white/70 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-action">{a.role}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">{a.short}</p>
              <p className="mt-3 flex gap-2 text-sm">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {a.street}, {a.postalCode} {a.city}
              </p>
              <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="mt-3 inline-flex items-center gap-2 whitespace-nowrap font-semibold text-brand hover:text-amber-action">
                <PhoneIcon className="h-4 w-4" />
                {a.phoneDisplay}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section aria-labelledby="titre-cta" className="relative overflow-hidden py-24 text-white sm:py-32" style={{ background: "var(--green)" }}>
      <svg className="pointer-events-none absolute -right-24 -top-10 h-[130%] w-auto opacity-25" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <polyline points="0,40 50,5 100,40 100,100" fill="none" stroke="#ff4100" strokeWidth="1.2" />
        <polyline points="8,46 54,13 104,46 104,104" fill="none" stroke="#fff" strokeWidth="0.6" />
      </svg>
      <div className="container-x relative">
        <p className="eyebrow !text-white/80" data-reveal>
          Prochaine étape
        </p>
        <h2 id="titre-cta" data-reveal className="mt-5 max-w-3xl text-4xl !text-white sm:text-6xl">
          {title}
        </h2>
        <p data-reveal className="lead mt-5 max-w-xl !text-white/85">
          {text}
        </p>
        <div data-reveal className="mt-12">
          <Link href={PATHS.contact} className="giant-link" data-magnetic data-track="generate_lead">
            Nous écrire
            <span className="arrow" aria-hidden="true">
              <ArrowIcon className="h-[0.42em] w-[0.42em] text-white" />
            </span>
          </Link>
        </div>
        <div data-reveal className="mt-12 flex flex-wrap gap-3">
          {agencies.map((a) => (
            <a key={a.key} href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="btn-ghost-light">
              <PhoneIcon className="h-4 w-4" />
              {a.short} · {a.phoneDisplay}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeeAlso({ current }: { current: string }) {
  const items = [
    { href: PATHS.plumbing, label: "Plombier à Paris 16e et 17e" },
    { href: PATHS.heating, label: "Chauffagiste à Paris 16e et 17e" },
    { href: PATHS.emergency, label: "Dépannage plomberie à Paris" },
    { href: PATHS.renovation, label: "Rénovation d'appartement à Paris" },
    { href: PATHS.trades, label: "Tous nos métiers" },
    { href: PATHS.agencies, label: "Nos trois agences" },
  ].filter((i) => i.href !== current);
  return (
    <section aria-labelledby="titre-voir-aussi" className="pb-20">
      <div className="container-x">
        <h2 id="titre-voir-aussi" className="text-2xl sm:text-3xl">
          Voir aussi
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="btn-ghost">
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

export function Marquee() {
  const words = [...marquee, ...marquee];
  return (
    <div className="marquee border-y border-line py-6" aria-hidden="true">
      {[0, 1].map((k) => (
        <div key={k} className="marquee-track">
          {words.map((w, i) => (
            <span key={`${k}-${i}`} className="flex items-center">
              <span className={`px-8 font-display text-5xl font-semibold sm:text-7xl ${i % 2 ? "outline" : "text-brand"}`}>{w}</span>
              <span className="h-3 w-3 rotate-45 bg-amber" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Frise des dates données par l'entreprise : défilement horizontal épinglé sur grand écran, liste sur téléphone. */
export function Timeline({ title, text }: { title: string; text: string }) {
  return (
    <section data-hscroll className="hscroll" aria-labelledby="titre-histoire">
      <div className="hscroll-pin py-20 lg:py-0">
        <div className="container-x mb-12 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Depuis 1876</p>
            <h2 id="titre-histoire" className="mt-4 text-4xl sm:text-6xl">
              {title}
            </h2>
          </div>
          <p className="text-lg">{text}</p>
        </div>
        <ol className="hscroll-track container-x lg:!max-w-none">
          {timeline.map((t) => (
            <li key={t.year} className="tcard">
              <span className="year">{t.year}</span>
              <h3 className="mt-5 text-2xl">{t.title}</h3>
              <p className="mt-2">{t.text}</p>
            </li>
          ))}
        </ol>
        <div className="hprogress mt-12" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
}

export function AgencyPanels() {
  const tones = ["var(--green)", "var(--action)", "var(--ink)"];
  const nums = ["16", "17", "92"];
  return (
    <div className="agencies">
      {agencies.map((a, i) => (
        <article key={a.key} className="agency flex flex-col justify-between p-7 sm:p-9" style={{ ["--tone" as string]: tones[i] }}>
          <div className="bg">
            <Photo id={a.photo} sizes="(min-width:1024px) 50vw, 92vw" />
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="num" aria-hidden="true">{nums[i]}</span>
            <span className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">{a.role}</span>
          </div>
          <div>
            <h3 className="text-3xl !text-white sm:text-4xl">{a.name}</h3>
            <p className="mt-2 text-white/85">
              {a.street}, {a.postalCode} {a.city}
            </p>
            <div className="more">
              <p className="mt-4 max-w-md text-sm text-white/85">{a.text}</p>
              <p className="mt-2 text-sm text-white/75">{a.trades}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="btn-ghost-light !min-h-[46px] !px-5">
                <PhoneIcon className="h-4 w-4" />
                {a.phoneDisplay}
              </a>
              <a href={`mailto:${a.email}`} className="btn-ghost-light !min-h-[46px] !px-5 max-sm:hidden">
                {a.email}
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function QualGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {qualifications.map((q, i) => (
        <li key={q.code} className="qual" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-action">Qualibat</p>
            <p className="code mt-2">{q.code}</p>
          </div>
          <div>
            <p className="font-semibold text-ink">{q.label}</p>
            <p className="mt-1 text-sm">
              {q.level}
              {q.gas ? " · mention gaz domestique" : ""}
            </p>
          </div>
        </li>
      ))}
      <li className="qual" data-reveal style={{ ["--d" as string]: "400ms", background: "var(--green)", borderColor: "var(--green)" }}>
        <p className="code !text-white">PG</p>
        <div>
          <p className="font-semibold text-white">Professionnel du Gaz</p>
          <p className="mt-1 text-sm text-white/80">Agréé par arrêté ministériel depuis 1992, selon l'entreprise</p>
        </div>
      </li>
      <li className="qual" data-reveal style={{ ["--d" as string]: "480ms", background: "var(--action)", borderColor: "var(--action)" }}>
        <p className="code !text-white">RGE</p>
        <div>
          <p className="font-semibold text-white">Reconnu Garant de l'Environnement</p>
          <p className="mt-1 text-sm text-white/85">Rénovation énergétique et énergies renouvelables</p>
        </div>
      </li>
    </ul>
  );
}
