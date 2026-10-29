import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { Feuillet } from "./Feuillet";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";
import { LetterDate } from "./LetterDate";
import { Signature } from "./Signature";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-perf">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-copper-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Un seul bouton d'action, le téléphone à côté en lien fin. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Tél.</span>
        <span className="num text-[1.2rem] font-light tracking-tight text-ink transition group-hover:text-copper-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** En-tête de lettre des pages intérieures : les quatre métiers de la maison au-dessus d'un double filet (le nom est déjà dans la barre). */
export function Letterhead() {
  return (
    <div className="fade-in">
      <p className="text-[0.62rem] uppercase leading-[1.8] tracking-[0.22em] text-ink-faint sm:text-[0.68rem]">
        Couverture · Plomberie · Fumisterie · Chauffage central <span className="max-sm:hidden">· Paris XIe, depuis 1957</span>
      </p>
      <div className="rule-double mt-3" />
    </div>
  );
}

/** Héros des pages : en-tête de lettre, date du jour, titre fin, photo qui passe du noir et blanc à la couleur. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <div className="mt-10 max-lg:order-2 sm:mt-14"><Letterhead /></div>
          <p className="fade-in mt-5 flex justify-between gap-4 text-[0.82rem] text-ink-faint max-lg:order-2" style={{ ["--d" as string]: "120ms" }}>
            <span className="text-copper">{page.kicker}</span>
            <LetterDate />
          </p>
          <h1 className="mt-8 text-[2.45rem] max-lg:order-3 sm:text-[3.4rem] xl:text-[4.1rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.16rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-16" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
          {facts.length ? (
            <dl className="mt-14 grid grid-cols-3 border-t border-line max-lg:order-7 lg:mt-auto">
              {facts.map((f) => (
                <div key={f.label} className="pr-3 pt-5">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-[1.05rem] font-light leading-tight text-ink sm:text-[1.35rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="archive-to-color" position={page.photoPos} />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{page.caption ?? photoAlt(page.photo)}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 11e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Feuillet n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Feuillet>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="text-[1.95rem] sm:text-[2.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-9">
          {s.listTitle ? <p className="font-medium text-ink">{s.listTitle}</p> : null}
          <ul className="border-b border-line">
            {s.list.map((li, i) => (
              <li key={li.slice(0, 48)} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-line py-4 text-ink">
                <span className="num pt-[0.18em] text-[0.8rem] text-copper">{pad(i + 1)}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t border-line py-6">
              <span className="num text-[1.9rem] font-extralight leading-none text-copper">{pad(i + 1)}</span>
              <p className="mt-4 text-[1.1rem] font-medium text-ink">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-mt mt-7">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

/** Chaque section question-réponse est un feuillet du carnet, numéroté à la suite de « En bref ». */
export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <Feuillet key={s.h2} n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Feuillet>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Feuillet n={n} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl" data-reveal>{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-copper-deep sm:text-[1.38rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-copper" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Feuillet>
  );
}

/** Bloc local : l'adresse comme au bas d'une lettre. La phrase d'introduction est propre à chaque arrondissement. */
const approach: Record<string, string> = {
  "Paris 11e": "L'atelier est au cœur du quartier, entre le faubourg Saint-Antoine et la rue de Charonne.",
  "Paris 3e": "Le Haut Marais est de l'autre côté du boulevard Beaumarchais, tout proche.",
  "Paris 4e": "Saint-Paul et les îles se rejoignent par la rue du Faubourg-Saint-Antoine et la Bastille.",
  "Paris 10e": "Le canal Saint-Martin se rejoint par le boulevard Richard-Lenoir.",
  "Paris 12e": "Aligre est juste de l'autre côté du faubourg Saint-Antoine.",
  "Paris 20e": "La rue de Charonne mène directement au 20e.",
};

export function LocalBlock({ contactType, zone = "Paris 11e", n }: { contactType?: string; zone?: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Feuillet n={n} rubrique="Adresse" labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2" data-reveal>54, rue Trousseau, Paris 11e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 11e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-ink transition hover:text-copper-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Métro</dt><dd className="mt-3 text-ink">{business.metro}</dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris 11e et arrondissements voisins : 3e, 4e, 10e, 12e, 20e</dd></div>
        </dl>
      </div>
    </Feuillet>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Feuillet n={n} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[1.95rem] sm:text-[2.6rem]">Les autres métiers et quartiers de la maison</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.2rem] font-light leading-snug text-ink sm:text-[1.5rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Feuillet>
  );
}

/** Dernier appel à l'action : le bas d'un bon de travaux, « Bon pour devis », avec la ligne de signature qui se trace. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative bg-paper">
      <div className="perf-x absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="smallcaps text-copper">Bon pour devis</p>
          <p className="mt-6 text-[2.3rem] font-extralight leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="border-b border-ink/70 pb-2">
            <Signature />
          </div>
          <p className="mt-2 flex justify-between text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint"><span>Le client</span><span>Paris, 11e</span></p>
          <div className="mt-10 flex flex-col items-start gap-5">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
