import Link from "next/link";
import Image from "next/image";
import { PATHS, agencies, business, qualifications, reviews, timeline, type Faq } from "@/lib/site";
import type { DeepSection, PageContent } from "@/lib/content";
import type { PhotoId } from "@/lib/photos";
import type { Agency } from "@/lib/site";
import { siteSrc } from "@/lib/photos";
import { agencyActivities, agencyTeams } from "@/lib/original";
import { ArrowIcon, PhoneIcon } from "./Icons";
import { Mark, MosaicPhoto } from "./Mosaic";

export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="fade-in text-sm" style={{ ["--i" as string]: 0 }}>
      <ol className="flex flex-wrap items-center gap-2.5">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2.5">
            {item.href ? (
              <Link href={item.href} className="text-ink-soft transition hover:text-brand">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.name}
              </span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true" className="inline-block h-[5px] w-[5px] bg-amber" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function HeroActions({ contactType }: { contactType?: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={contactType ? `${PATHS.contact}?demande=${contactType}` : PATHS.contact} data-track="generate_lead" className="btn-amber">
        Demander un devis ou une intervention
      </Link>
      <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost">
        <PhoneIcon className="h-4 w-4 text-amber-action" />
        {business.phoneDisplay}
      </a>
    </div>
  );
}

export function PageHero({ c, crumbs, contactType }: { c: PageContent; crumbs: { name: string; href?: string }[]; contactType?: string }) {
  return (
    <section className="hero" aria-labelledby="titre-page">
      <div className="container-x grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 lg:pb-4">
          <Breadcrumb items={crumbs} />
          <p className="eyebrow fade-in mt-10" style={{ ["--i" as string]: 1 }}>
            {c.eyebrow}
          </p>
          <h1 id="titre-page" className="page-title mask mt-6">
            <span>{c.h1}</span>
          </h1>
          <p className="lead fade-in mt-7 max-w-xl" style={{ ["--i" as string]: 2 }}>
            {c.lead}
          </p>
          <div className="fade-in mt-9" style={{ ["--i" as string]: 3 }}>
            <HeroActions contactType={contactType} />
          </div>
        </div>
        <div className="lg:col-span-5">
          <MosaicPhoto photo={c.heroPhoto} priority onLoad className="hero-photo" ratio={[0.85, 1.25]} cols={[7, 7]} seed={c.h1.length} sizes="(min-width:1024px) 38vw, 94vw" />
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
        <div className="border-t border-line pt-10 sm:pt-14" data-reveal>
          <p className="reponse-bref max-w-5xl text-[1.4rem] font-light leading-[1.45] text-ink sm:text-[1.95rem]">
            <strong className="caption mb-5 flex items-center gap-3 !text-brand">
              <span aria-hidden="true" className="inline-block h-[7px] w-[7px] bg-amber" />
              En bref :{" "}
            </strong>
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
      <div className="container-x space-y-24 sm:space-y-36">
        {sections.map((s, i) => {
          const photo = i % 2 === 0 ? photos[i] : undefined;
          const flip = (i / 2) % 2 === 1;
          if (photo) {
            return (
              <article key={s.h2} id={s.id} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <Mark n={i + 1} total={sections.length} />
                  <h2 className="h-sub mt-7">{s.h2}</h2>
                  <p className="lead mt-5 border-l-4">{s.answer}</p>
                  {s.body.map((p) => (
                    <p key={p} className="mt-5 max-w-[40rem] text-[1.06rem]">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="lg:sticky lg:top-28 lg:col-span-5">
                  <MosaicPhoto photo={photo} className="aspect-[4/5]" ratio={[1.25, 1.25]} cols={[6, 6]} seed={i + 7} sizes="(min-width:1024px) 36vw, 94vw" />
                </div>
              </article>
            );
          }
          return (
            <article key={s.h2} id={s.id} className="grid items-start gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
              <div className="lg:col-span-6">
                <Mark n={i + 1} total={sections.length} />
                <h2 className="h-sub mt-7">{s.h2}</h2>
                <p className="lead mt-5 border-l-4">{s.answer}</p>
              </div>
              <div className="lg:col-span-6 lg:pt-[4.6rem]">
                {s.body.map((p, k) => (
                  <p key={p} className={`${k ? "mt-5" : ""} text-[1.06rem]`}>
                    {p}
                  </p>
                ))}
              </div>
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
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-4">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="h-sub mt-5">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8" data-reveal style={{ ["--d" as string]: "100ms" }}>
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-6 text-[1.2rem] font-normal leading-snug text-ink transition hover:text-brand sm:text-[1.35rem]">
                {item.q}
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-2xl font-extralight text-brand transition duration-500 group-open:rotate-45 group-open:border-amber group-open:text-amber-action">
                  +
                </span>
              </summary>
              <p className="faq-a text-[1.06rem]">{item.a}</p>
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
      <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-6">
          <p className="eyebrow">Nous trouver</p>
          <h2 id="titre-local" className="h-sub mt-5">
            {c.localTitle}
          </h2>
          {c.localParagraphs.map((p) => (
            <p key={p} className="mt-5 text-[1.06rem]">
              {p}
            </p>
          ))}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={contactType ? `${PATHS.contact}?demande=${contactType}` : PATHS.contact} data-track="generate_lead" className="btn-amber">
              Demander un devis ou une intervention
            </Link>
          </div>
          <div className="mt-6 text-sm">
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line text-brand">
              Itinéraire et fiche Google<span className="sr-only"> (nouvel onglet)</span>
            </a>{" "}
            · Note de {reviews.ratingText}/5 sur Google ({reviews.count} avis, relevé du {reviews.observed}).
          </div>
        </div>
        <ul className="border-b border-line lg:col-span-6" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {agencies.map((a, i) => (
            <li key={a.key} className="grid grid-cols-[3.2rem_1fr] gap-4 border-t border-line py-6">
              <span className="text-[1.6rem] font-extralight leading-none text-amber-action">{["16", "17", "92"][i]}</span>
              <div>
                <p className="caption">{a.role}</p>
                <p className="mt-1 text-[1.4rem] font-light text-ink">{a.short}</p>
                <p className="mt-1 text-[0.98rem]">
                  {a.street}, {a.postalCode} {a.city}
                </p>
                <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="mt-2 inline-flex items-center gap-2 whitespace-nowrap text-brand hover:text-amber-action">
                  <PhoneIcon className="h-4 w-4" />
                  {a.phoneDisplay}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section aria-labelledby="titre-cta" className="section border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow" data-reveal>
            Prochaine étape
          </p>
          <h2 id="titre-cta" data-reveal className="h-sec mt-6 max-w-3xl">
            {title}
          </h2>
          <p data-reveal className="lead mt-6 max-w-xl">
            {text}
          </p>
          <div data-reveal className="mt-12">
            <Link href={PATHS.contact} className="giant-link" data-track="generate_lead">
              Nous écrire
              <span className="arrow" aria-hidden="true">
                <ArrowIcon className="h-[0.36em] w-[0.36em]" />
              </span>
            </Link>
          </div>
        </div>
        <ul data-reveal className="border-b border-line lg:col-span-5">
          {agencies.map((a) => (
            <li key={a.key} className="border-t border-line">
              <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="flex items-center justify-between gap-4 py-5 transition hover:text-brand">
                <span className="caption">{a.short}</span>
                <span className="whitespace-nowrap text-[1.3rem] font-light text-ink">{a.phoneDisplay}</span>
              </a>
            </li>
          ))}
        </ul>
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
    <section aria-labelledby="titre-voir-aussi" className="pb-24">
      <div className="container-x">
        <h2 id="titre-voir-aussi" className="caption !text-brand">
          Voir aussi
        </h2>
        <ul className="mt-6 grid border-b border-line sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {items.map((item) => (
            <li key={item.href} className="border-t border-line">
              <Link href={item.href} className="group flex items-center justify-between gap-4 py-5 text-[1.15rem] font-light text-ink transition hover:text-brand">
                {item.label}
                <ArrowIcon className="h-4 w-4 shrink-0 text-amber-action transition duration-500 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * La frise de la maison, de 1876 à aujourd'hui : une tesselle par année, rangée par décennie.
 * Les étapes sont en orange ; sur grand écran, la mosaïque se remplit au fil de la lecture.
 */
export function Timeline({ title, text, compact = false, n, total }: { title: string; text?: string; compact?: boolean; n?: number; total?: number }) {
  const first = 1876;
  const last = 2026;
  const steps = new Set<number>(timeline.map((t) => Number(t.year)));
  const decades = Array.from({ length: 16 }, (_, k) => 1870 + k * 10);
  return (
    <section className="section" aria-labelledby="titre-histoire" data-years={last}>
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div data-reveal className="lg:col-span-7">
            {n && total ? <Mark n={n} total={total} label="Depuis 1876" /> : <p className="eyebrow">Depuis 1876</p>}
            <h2 id="titre-histoire" className="h-sec mt-6">
              {title}
            </h2>
          </div>
          {text ? (
            <p data-reveal className="text-[1.08rem] lg:col-span-5">
              {text}
            </p>
          ) : null}
        </div>

        <div className="mt-14 grid items-start gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <figure className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="years" aria-hidden="true">
              {decades.map((d) => (
                <div key={d} className="contents">
                  <span className="dec">{d}</span>
                  {Array.from({ length: 10 }, (_, j) => {
                    const y = d + j;
                    if (y < first || y > last) return <span key={y} className="y void" />;
                    const cls = ["y", steps.has(y) ? "m" : "", y === last ? "now" : ""].filter(Boolean).join(" ");
                    return <span key={y} className={cls} data-y={y} title={String(y)} />;
                  })}
                </div>
              ))}
            </div>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.82rem] text-ink-soft">
              <span className="inline-flex items-center gap-2"><i className="inline-block h-2.5 w-2.5" style={{ background: "var(--green)" }} />Une tesselle par année</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block h-2.5 w-2.5" style={{ background: "var(--orange)" }} />Une étape de la maison</span>
              <span className="inline-flex items-center gap-2"><i className="inline-block h-2.5 w-2.5" style={{ background: "var(--ink)" }} />Aujourd'hui</span>
            </figcaption>
          </figure>
          <div className="lg:col-span-7">
            <ol className="timeline-list border-b border-line">
              {timeline.map((t) => (
                <li key={t.year} className="ms" data-step={t.year}>
                  <span className="yr">{t.year}</span>
                  <div>
                    <h3>{t.title}</h3>
                    {compact ? null : <p className="mt-2 text-[1rem]">{t.text}</p>}
                  </div>
                </li>
              ))}
            </ol>
            <div data-years-end className="h-px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgencyPanels({ compact = false }: { compact?: boolean }) {
  const nums = ["16", "17", "92"];
  return (
    <ul className="grid gap-x-10 gap-y-16 md:grid-cols-3">
      {agencies.map((a, i) => (
        <li key={a.key} data-reveal style={{ ["--d" as string]: `${i * 110}ms` }}>
          <MosaicPhoto photo={a.photo} className="aspect-[4/5]" ratio={[1.25, 1.25]} cols={[6, 5]} seed={i + 21} sizes="(min-width:768px) 30vw, 94vw" />
          <div className="mt-7 flex items-end justify-between gap-4">
            <span className="big-num" aria-hidden="true">{nums[i]}</span>
            <AgencyVisual agency={a} className="h-14 w-14" />
          </div>
          <p className="caption mt-6">{a.role}</p>
          <h3 className="mt-2 text-[1.6rem]">{a.name}</h3>
          <p className="mt-2 text-[1rem]">
            {a.street}, {a.postalCode} {a.city}
          </p>
          {compact ? null : (
            <>
              <p className="mt-4 text-[0.98rem]">{a.text}</p>
              <p className="mt-3 text-sm">{a.key === "transvaal" ? a.trades : agencyActivities}</p>
              {agencyTeams[a.key] ? <p className="mt-2 text-sm text-ink">{agencyTeams[a.key].map((t) => `${t.name}, ${t.role.toLowerCase()}`).join(" · ")}</p> : null}
            </>
          )}
          <div className="mt-5 flex flex-col gap-1.5 border-t border-line pt-4 text-[0.98rem]">
            <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="inline-flex items-center gap-2 whitespace-nowrap text-ink hover:text-brand">
              <PhoneIcon className="h-4 w-4 text-amber-action" />
              {a.phoneDisplay}
            </a>
            <a href={`mailto:${a.email}`} className="break-all text-ink-soft hover:text-brand">
              {a.email}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function QualGrid() {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
      {qualifications.map((q, i) => (
        <li key={q.code} className="border-t border-line py-7" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
          <p className="caption">Qualibat</p>
          <p className="qual-code mt-3">{q.code}</p>
          <p className="mt-4 text-ink">{q.label}</p>
          <p className="mt-0.5 text-sm">
            {q.level}
            {q.gas ? " · mention gaz domestique" : ""}
          </p>
        </li>
      ))}
      <li className="border-t border-line py-7" data-reveal style={{ ["--d" as string]: "350ms" }}>
        <p className="caption">Gaz</p>
        <p className="qual-code mt-3 !text-amber-action">PG</p>
        <p className="mt-4 text-ink">Professionnel du Gaz</p>
        <p className="mt-0.5 text-sm">Agréé par arrêté ministériel depuis 1992, selon l'entreprise</p>
      </li>
      <li className="border-t border-line py-7" data-reveal style={{ ["--d" as string]: "420ms" }}>
        <p className="caption">Environnement</p>
        <p className="qual-code mt-3 !text-amber-action">RGE</p>
        <p className="mt-4 text-ink">Reconnu Garant de l'Environnement</p>
        <p className="mt-0.5 text-sm">Rénovation énergétique et énergies renouvelables</p>
      </li>
    </ul>
  );
}

/** Visuel de l'agence publié sur le site actuel de l'entreprise (petit format : affiché en vignette). */
export function AgencyVisual({ agency, className = "h-24 w-24" }: { agency: Agency; className?: string }) {
  const src = siteSrc(`agence-${agency.key}`);
  if (!src) return null;
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-[3px] border border-line ${className}`}>
      <Image src={src} alt={`Agence ${agency.short}, visuel du site actuel`} fill sizes="120px" className="object-cover" />
    </span>
  );
}
