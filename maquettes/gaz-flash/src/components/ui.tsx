import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import type { ReactNode } from "react";
import { PATHS, business, faqs, google, pageInfo, reviews, type FaqKey, type PagePath } from "@/lib/site";
import { pageCrumbs } from "@/lib/seo";
import { ArrowIcon, PhoneIcon } from "./Icons";
import { OpenStatus } from "./OpenStatus";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.9rem] text-ink-soft">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">›</span> : null}
            {index < items.length - 1 ? (
              <Link href={item.path} className="text-ink-soft underline decoration-ink/30 hover:text-ink">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-ink">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Le bloc « En bref » : 40 à 60 mots qui répondent à la question de la page (repris par `speakable`). */
export function Brief({ text }: { text: string }) {
  return (
    <div className="brief">
      <span className="tag" aria-hidden="true">En bref</span>
      <p className="reponse-bref">
        <strong className="sr-only">En bref : </strong>
        {text}
      </p>
    </div>
  );
}

/** En-tête de page intérieure : fil d'Ariane, H1 unique, « En bref », et un élément à droite (photo, affichette). */
export function PageHead({ path, trail = [], aside }: { path: PagePath; trail?: PagePath[]; aside?: ReactNode }) {
  const info = pageInfo(path);
  return (
    <section className="wrap pt-8 sm:pt-10">
      <Breadcrumb items={pageCrumbs(path, trail)} />
      <div className={`mt-6 grid gap-10 ${aside ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start" : ""}`}>
        <div>
          <h1 className="max-w-[22ch] sm:max-w-none">{info.h1}</h1>
          <div className="mt-6 max-w-[62ch]">
            <Brief text={info.brief} />
          </div>
        </div>
        {aside ? <div className="mx-auto w-full max-w-[420px] pt-4 lg:max-w-none">{aside}</div> : null}
      </div>
    </section>
  );
}

/** Colonne de texte + marge (photos, affichettes) à droite. */
export function Page({ children, aside, className = "" }: { children: ReactNode; aside?: ReactNode; className?: string }) {
  return (
    <section className={`wrap mt-14 ${className}`}>
      <div className={aside ? "grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]" : ""}>
        <div className={`prose-gf ${aside ? "" : "max-w-[70ch]"}`}>{children}</div>
        {aside ? <aside className="space-y-9 lg:pt-2">{aside}</aside> : null}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="hand text-[1.6rem] text-red-btn">{children}</p>;
}

export function Faq({ keyName, title = "Les questions qu'on nous pose" }: { keyName: FaqKey; title?: string }) {
  return (
    <section className="wrap mt-20" aria-labelledby={`faq-${keyName}`}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2 id={`faq-${keyName}`} className="mt-1">{title}</h2>
        </div>
        <div className="border-t-[1.5px] border-dashed border-ink/25">
          {faqs[keyName].map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallStrip({ title = "Une question, un devis, une panne ?", text = "Appelez le standard : on vous répond et on vous dit comment on peut vous aider.", form = true, type = "depannage" }: { title?: string; text?: string; form?: boolean; type?: string }) {
  return (
    <section className="wrap mt-24">
      <div className="relative border-[3px] border-ink bg-paper-sheet px-6 py-9 shadow-[7px_8px_0_rgb(44_53_61/0.16)] sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:items-center">
          <div>
            <p className="hand text-[1.7rem] text-red-btn">Parlons-en au téléphone</p>
            <h2 className="mt-1">{title}</h2>
            <p className="mt-3 max-w-[52ch] text-ink-soft">{text}</p>
            <p className="mt-3 text-[0.95rem] text-ink-soft">
              Lun.–ven., 8 h–12 h 30 et 13 h 30–17 h. <OpenStatus fallback="" className="font-semibold text-ink" />
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn">
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
            {form ? (
              <a href="#formulaire" className="btn btn-ghost">
                Écrire à l'entreprise
                <ArrowIcon />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {form ? (
        <div id="formulaire" className="mt-10 scroll-mt-28">
          <ContactForm defaultType={type} />
        </div>
      ) : null}
    </section>
  );
}

export function SeeAlso({ title = "Pour aller plus loin", links }: { title?: string; links: { path: PagePath; text: string; why: string }[] }) {
  return (
    <section className="wrap mt-20" aria-labelledby="voir-aussi">
      <Eyebrow>Dans le même esprit</Eyebrow>
      <h2 id="voir-aussi" className="mt-1">{title}</h2>
      <ul className="ruled mt-6">
        {links.map((l) => (
          <li key={l.path}>
            <Link href={l.path} className="group grid gap-1 py-4 no-underline sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8">
              <span className="font-display text-[1.25rem] font-semibold text-ink-2 underline decoration-red/50 underline-offset-4 group-hover:decoration-red">{l.text}</span>
              <span className="text-ink-soft">{l.why}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Étiquette de tarif accrochée à l'appareil : montants repris de la page « Nos tarifs » du site d'origine. */
export function Ticket({ title, rows, note, className = "" }: { title: string; rows: { label: string; price: string }[]; note?: string; className?: string }) {
  return (
    <div className={`ticket ${className}`}>
      <p className="label pt-1 text-ink-soft">{title}</p>
      <dl className="mt-3 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 pb-2 last:border-0">
            <dt className="text-[0.95rem] leading-snug">{row.label}</dt>
            <dd className="price shrink-0 text-[2.1rem]">
              {row.price}
              <small className="ml-1 font-sans text-[0.7rem] font-semibold text-ink-soft">TTC</small>
            </dd>
          </div>
        ))}
      </dl>
      {note ? <p className="mt-2 text-[0.85rem] text-ink-soft">{note}</p> : null}
    </div>
  );
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`stamp ${className}`}>{children}</span>;
}

/** L'ardoise des horaires, avec l'état du standard calculé dans le navigateur. */
export function HoursSlate({ className = "" }: { className?: string }) {
  return (
    <div className={`slate ${className}`}>
      <p className="chalk text-[1.9rem]">On vous répond</p>
      <p className="chalk mt-1 text-[1.45rem]">lundi → vendredi</p>
      <p className="chalk text-[1.45rem]">8 h – 12 h 30</p>
      <p className="chalk text-[1.45rem]">13 h 30 – 17 h</p>
      <p className="chalk mt-1 text-[1.2rem] text-[#e9b0a9]">samedi, dimanche : fermé</p>
      <p className="mt-3 border-t border-white/25 pt-2 text-[0.9rem] text-white/80">
        <OpenStatus fallback="Horaires habituels, hors jours fériés." />
      </p>
    </div>
  );
}

/** Pense-bête collé en marge : le standard, toujours à portée. */
export function PhoneNote({ rotate = 1.2 }: { rotate?: number }) {
  return (
    <div className="affiche" style={{ ["--r" as string]: `${rotate}deg` }}>
      <p className="hand text-[1.6rem] text-red-btn">Le standard</p>
      <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="mt-1 block font-display text-[2rem] font-semibold leading-none text-ink-2 no-underline">
        {business.phoneDisplay}
      </a>
      <p className="mt-3 text-[0.92rem] text-ink-soft">Lun.–ven., 8 h–12 h 30 et 13 h 30–17 h.</p>
      <p className="mt-2 text-[0.92rem]">
        {business.address.street}, {business.address.postalCode} {business.address.city}
      </p>
    </div>
  );
}

/** Avis Google : la note réelle, sa source et trois extraits signés. Jamais d'aggregateRating dans le JSON-LD. */
export function GoogleReviews({ showQuotes = 3 }: { showQuotes?: number }) {
  return (
    <section className="wrap mt-24" aria-labelledby="avis">
      <div className={`grid gap-10 ${showQuotes > 0 ? "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" : ""}`}>
        <div>
          <Eyebrow>Ce qu'on dit de nous</Eyebrow>
          <h2 id="avis" className="mt-1">Des clients de longue date</h2>
          <div className="affiche mt-6 max-w-sm" style={{ ["--r" as string]: "-1deg" }}>
            <p className="label text-ink-soft">Fiche Google de Gaz Flash</p>
            <p className="mt-1 font-display text-[3.2rem] font-semibold leading-none">
              {google.ratingLabel}
              <span className="text-[1.6rem] text-ink-soft"> / 5</span>
            </p>
            <p className="mt-2">
              d'après {google.count} avis Google, relevés le {google.observed}.
            </p>
            <a className="link-arrow mt-3 text-[0.95rem]" href={google.url} target="_blank" rel="noopener noreferrer">
              Lire tous les avis sur Google Maps <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        {showQuotes > 0 ? (
        <div>
          <ul className="space-y-6">
            {reviews.slice(0, showQuotes).map((review, index) => (
              <li key={review.author} style={{ marginLeft: index % 2 ? "clamp(0px, 4vw, 3rem)" : 0 }}>
                <blockquote className="border-l-[3px] border-red pl-5">
                  <p className="font-display text-[1.2rem] italic leading-snug text-ink-2">« {review.text} »</p>
                  <footer className="mt-2 text-[0.92rem] text-ink-soft">
                    {review.author}, avis Google 5 étoiles, {review.when}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.88rem] text-ink-soft">Extraits copiés de la fiche Google Maps de l'entreprise, signés du prénom et de l'initiale.</p>
        </div>
        ) : null}
      </div>
    </section>
  );
}
