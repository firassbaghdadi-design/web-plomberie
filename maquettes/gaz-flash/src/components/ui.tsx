import Link from "next/link";
import type { ReactNode } from "react";
import { PATHS, business, faqs, google, pageInfo, type FaqKey, type PagePath } from "@/lib/site";
import { pageCrumbs } from "@/lib/seo";
import { ArrowIcon, PhoneIcon } from "./Icons";
import { OpenStatus } from "./OpenStatus";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.82rem] text-ink-soft">
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2.5">
            {index > 0 ? <span aria-hidden="true" className="text-ink/25">/</span> : null}
            {index < items.length - 1 ? (
              <Link href={item.path} className="text-ink-soft no-underline transition-colors hover:text-ink">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Découpe un titre en lignes pour la révélation au chargement (le texte reste identique pour les moteurs). */
export function splitTitle(text: string): string[] {
  const colon = text.indexOf(" : ");
  if (colon > 0) return [text.slice(0, colon + 2), text.slice(colon + 3)];
  const comma = text.indexOf(", ");
  if (comma > 12 && text.length > 44) return [text.slice(0, comma + 1), text.slice(comma + 2)];
  return [text];
}

export function RevealLines({ lines }: { lines: string[] }) {
  return (
    <span className="reveal-lines">
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 ? " " : null}
          <span className="ln">
            <span style={{ ["--i" as string]: i }}>{line}</span>
          </span>
        </span>
      ))}
    </span>
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

/**
 * En-tête de page intérieure : fil d'Ariane, H1 unique révélé ligne par ligne, « En bref », un seul bouton
 * et le téléphone ; puis une grande photo en bandeau (ou, si `wide` est faux, un bloc à droite).
 */
export function PageHead({ path, trail = [], aside, wide = true, type }: { path: PagePath; trail?: PagePath[]; aside?: ReactNode; wide?: boolean; type?: string }) {
  const info = pageInfo(path);
  const side = aside && !wide;
  return (
    <section className="wrap pt-28 sm:pt-40" data-pipe-start={aside && wide ? undefined : ""}>
      <div className="fade-in" style={{ ["--delay" as string]: "0.05s" }}>
        <Breadcrumb items={pageCrumbs(path, trail)} />
      </div>
      <div className={`mt-10 grid gap-12 ${side ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end" : ""}`}>
        <div>
          <h1 className="max-w-[30ch] text-[clamp(2.3rem,4.6vw,4rem)]">
            <RevealLines lines={splitTitle(info.h1)} />
          </h1>
          <div className="fade-in mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16" style={{ ["--delay" as string]: "0.5s" }}>
            <div className="max-w-[60ch]">
              <Brief text={info.brief} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Link href={type ? `${PATHS.contact}?demande=${type}` : PATHS.contact} data-track="generate_lead" className="btn">
                Demander un devis ou une intervention
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="tel pl-1 text-[0.98rem]">
                <PhoneIcon className="h-4 w-4 text-red" />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        {side ? <div className="fade-in w-full max-w-[380px]" style={{ ["--delay" as string]: "0.7s" }}>{aside}</div> : null}
      </div>
      {aside && wide ? (
        <div className="head-media fade-in mt-16 sm:mt-20" style={{ ["--delay" as string]: "0.7s" }} data-pipe-start="">
          {aside}
        </div>
      ) : null}
    </section>
  );
}

/** Colonne de texte + marge (prix, téléphone, photo) à droite. */
export function Page({ children, aside, className = "" }: { children: ReactNode; aside?: ReactNode; className?: string }) {
  return (
    <section className={`wrap mt-24 sm:mt-32 ${className}`}>
      <div className={aside ? "grid gap-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-24" : ""}>
        <div className="prose-gf" data-reveal>{children}</div>
        {aside ? <aside className="side space-y-14 lg:sticky lg:top-28 lg:self-start">{aside}</aside> : null}
      </div>
    </section>
  );
}

/** Petite légende de section, portée par un coude du tuyau. */
export function Eyebrow({ children, flame = false }: { children: ReactNode; flame?: boolean }) {
  return (
    <p className="eyebrow" data-pipe="" data-pipe-flame={flame ? "" : undefined}>
      {children}
    </p>
  );
}

export function Faq({ keyName, title = "Les questions qu'on nous pose" }: { keyName: FaqKey; title?: string }) {
  return (
    <section className="wrap mt-32 sm:mt-40" aria-labelledby={`faq-${keyName}`}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div data-reveal>
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 id={`faq-${keyName}`} className="mt-6 max-w-[14ch]">{title}</h2>
        </div>
        <div className="border-t border-line" data-reveal style={{ ["--d" as string]: "120ms" }}>
          {faqs[keyName].map((item) => (
            <details key={item.q} className="faq-item"><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallStrip({ title = "Une question, un devis, une panne ?", text = "Appelez le standard : on vous répond et on vous dit comment on peut vous aider.", form = true, type = "depannage" }: { title?: string; text?: string; form?: boolean; type?: string }) {
  return (
    <section className="wrap mt-32 sm:mt-44" aria-label="Nous appeler">
      <div className="border-t border-ink pt-10 sm:pt-14" data-reveal>
        <Eyebrow>Nous appeler</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)]">{title}</h2>
            <p className="mt-6 max-w-[48ch] text-ink-soft">{text}</p>
          </div>
          <div>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="block whitespace-nowrap font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-extralight leading-none tracking-[-0.03em] text-ink no-underline transition-colors hover:text-red-dark">
              {business.phoneDisplay}
            </a>
            <p className="mt-4 text-[0.92rem] text-ink-soft">
              Lun.–ven., 8 h–12 h 30 et 13 h 30–17 h. <OpenStatus fallback="" className="text-ink" />
            </p>
            {form ? (
              <Link href={`${PATHS.contact}?demande=${type}`} data-track="generate_lead" className="btn mt-7">
                Demander un devis ou une intervention
                <ArrowIcon className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SeeAlso({ title = "Pour aller plus loin", links }: { title?: string; links: { path: PagePath; text: string; why: string }[] }) {
  return (
    <section className="wrap mt-32 sm:mt-40" aria-labelledby="voir-aussi">
      <div data-reveal>
        <Eyebrow>Voir aussi</Eyebrow>
        <h2 id="voir-aussi" className="mt-6">{title}</h2>
      </div>
      <ul className="ruled mt-12" data-reveal style={{ ["--d" as string]: "120ms" }}>
        {links.map((l) => (
          <li key={l.path}>
            <Link href={l.path} className="group grid items-baseline gap-1 py-6 no-underline sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_24px] sm:gap-10">
              <span className="font-display text-[1.45rem] font-light tracking-[-0.015em] text-ink transition-colors group-hover:text-red-dark">{l.text}</span>
              <span className="text-[0.98rem] text-ink-soft">{l.why}</span>
              <span aria-hidden="true" className="hidden text-ink transition-transform duration-500 group-hover:translate-x-1 sm:block">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Liste de tarifs : montants repris de la page « Nos tarifs » du site d'origine. */
export function Ticket({ title, rows, note, className = "" }: { title: string; rows: { label: string; price: string }[]; note?: string; className?: string }) {
  return (
    <div className={`ticket ${className.replace(/\S*rotate\S*/g, "")}`}>
      <p className="label text-ink-soft">{title}</p>
      <dl className="mt-5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:pt-0">
            <dt className="text-[0.95rem] leading-snug text-ink">{row.label}</dt>
            <dd className="price shrink-0 text-[2.1rem]">
              {row.price}
              <small className="ml-1.5 font-sans text-[0.62rem] font-medium tracking-[0.12em] text-ink-soft">TTC</small>
            </dd>
          </div>
        ))}
      </dl>
      {note ? <p className="mt-4 text-[0.85rem] text-ink-soft">{note}</p> : null}
    </div>
  );
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`label text-ink-soft ${className}`}>{children}</span>;
}

/** Les horaires du standard, avec l'état calculé dans le navigateur. */
export function HoursSlate({ className = "" }: { className?: string }) {
  return (
    <div className={`slate ${className}`}>
      <p className="label text-ink-soft">On vous répond</p>
      <p className="chalk mt-4 text-[1.6rem]">Du lundi au vendredi</p>
      <p className="chalk text-[1.6rem]">8 h – 12 h 30</p>
      <p className="chalk text-[1.6rem]">13 h 30 – 17 h</p>
      <p className="mt-2 text-[0.92rem] text-ink-soft">Samedi et dimanche : fermé.</p>
      <p className="mt-5 border-t border-line pt-4 text-[0.92rem] text-ink">
        <OpenStatus fallback="Horaires habituels, hors jours fériés." />
      </p>
    </div>
  );
}

/** Le standard, toujours à portée, en marge du texte. */
export function PhoneNote(_props: { rotate?: number } = {}) {
  return (
    <div className="affiche">
      <p className="label text-ink-soft">Le standard</p>
      <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="mt-3 block whitespace-nowrap font-display text-[1.9rem] font-light leading-none tracking-[-0.02em] text-ink no-underline hover:text-red-dark">
        {business.phoneDisplay}
      </a>
      <p className="mt-4 text-[0.9rem] text-ink-soft">Lun.–ven., 8 h–12 h 30 et 13 h 30–17 h.</p>
      <p className="mt-1 text-[0.9rem] text-ink-soft">
        {business.address.street}, {business.address.postalCode} {business.address.city}
      </p>
    </div>
  );
}

/** Une seule ligne : note, nombre d'avis, lien vers la fiche Google. Pas d'extraits d'avis sur le site. */
export function GoogleReviews(_props: { showQuotes?: number } = {}) {
  return (
    <section className="wrap mt-20" aria-label="Note Google">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-5 text-[0.92rem] text-ink-soft">
        <span>
          Note de <span className="text-ink">{google.ratingLabel}/5</span> sur Google, d'après {google.count} avis (relevé du {google.observed}).
        </span>
        <a className="link-arrow text-[0.92rem]" href={google.url} target="_blank" rel="noopener noreferrer">
          Lire les avis sur Google Maps<span className="sr-only"> (nouvel onglet)</span> <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </p>
    </section>
  );
}
