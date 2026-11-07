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
    <nav aria-label="Fil d'Ariane" className="text-[0.78rem] text-ink-faint">
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

/** Un seul bouton d'action, le téléphone à côté, composé comme un numéro de petite annonce. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Tél.</span>
        <span className="num font-serif text-[1.35rem] text-ink transition group-hover:text-copper-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Ligne de date des pages intérieures : rubrique à gauche, métiers de la maison au centre, date du jour à droite. */
export function Letterhead({ kicker }: { kicker: string }) {
  return (
    <div className="fade-in">
      <div className="rule-double" />
      <p className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink py-2.5 text-[0.72rem] text-ink-faint">
        <span className="kicker">{kicker}</span>
        <span className="hidden uppercase tracking-[0.2em] md:inline">Couverture · Plomberie · Fumisterie · Chauffage central</span>
        <LetterDate weekday className="text-ink-soft" />
      </p>
    </div>
  );
}

/** Une grande photo de journal, avec sa légende. Noir et blanc au tirage, la couleur revient à la lecture. */
export function Photo({ id, caption, credit = true, className = "aspect-[4/3]", position, ink = true, bw = false }: { id: string; caption?: React.ReactNode; credit?: boolean; className?: string; position?: string; ink?: boolean; bw?: boolean }) {
  return (
    <figure>
      <div data-ink={ink ? "" : undefined} className={bw ? "bw" : undefined}>
        <Img id={id} alt={photoAlt(id)} className={className} position={position} />
      </div>
      {caption ? (
        <figcaption className="caption mt-2.5 flex items-baseline justify-between gap-6 border-b border-line pb-2.5">
          <span>{caption}</span>
          {credit ? <span className="shrink-0 text-[0.66rem] uppercase tracking-[0.16em]">Photo Pexels</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Héros des pages intérieures : une « une » de journal. Ligne de date, titre en manchette, chapeau, puis la grande photo. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  return (
    <section className="relative">
      <div className="wrap pb-6 pt-5 sm:pt-7">
        <Breadcrumbs items={crumbs} />
        <div className="mt-5"><Letterhead kicker={page.kicker} /></div>
        <h1 className="mt-7 max-w-[24ch] text-[2.5rem] leading-[1.02] tracking-[-0.02em] sm:mt-9 sm:text-[3.6rem] lg:text-[clamp(3.6rem,5.2vw,5.2rem)]">
          <span className="line-up"><span>{fr(page.h1)}</span></span>
        </h1>
        <div className="mt-6 grid gap-8 border-t border-line pt-6 lg:grid-cols-12 lg:gap-0">
          <p className="chapeau fade-in max-w-2xl lg:col-span-7 lg:pr-12" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in flex flex-col gap-7 lg:col-span-5 lg:border-l lg:border-line lg:pl-12" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
            {facts.length ? (
              <dl className="grid grid-cols-3 border-t border-line">
                {facts.map((f) => (
                  <div key={f.label} className="pr-3 pt-4">
                    <dt className="label">{f.label}</dt>
                    <dd className="mt-1.5 font-serif text-[1.25rem] leading-tight text-ink sm:text-[1.5rem]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
        <figure className="mt-8 sm:mt-10">
          <div className="overflow-hidden">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="aspect-[4/3] sm:aspect-[16/8] lg:aspect-[21/9]" imgClassName="archive-to-color" position={page.photoPos} />
          </div>
          <figcaption className="caption mt-2.5 flex items-baseline justify-between gap-6 border-b border-line pb-2.5">
            <span><b>{page.zone ?? "Paris 11e"}.</b> {page.caption ?? photoAlt(page.photo)}</span>
            <span className="shrink-0 text-[0.66rem] uppercase tracking-[0.16em]">Photo Pexels</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Feuillet n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref chapeau dropcap max-w-4xl">{text}</p>
    </Feuillet>
  );
}

/** Un article : titre et réponse directe dans la colonne de gauche, le développement en colonne de droite. */
function SectionBody({ s }: { s: Section }) {
  const hasBody = !!(s.paras?.length || s.list?.length || s.steps?.length || s.after?.length);
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-0">
      <header className={hasBody ? "lg:col-span-5 lg:pr-12" : "max-w-3xl lg:col-span-12"}>
        <h2 className="text-[2rem] sm:text-[2.7rem]">{fr(s.h2)}</h2>
        {s.answer ? <p className="answer">{s.answer}</p> : null}
      </header>
      {hasBody ? (
        <div className="max-w-2xl lg:col-span-7 lg:border-l lg:border-line lg:pl-12">
          {s.paras?.length ? <div className="prose-mt">{s.paras.map((p, i) => <p key={p.slice(0, 48)} className={i === 0 ? "dropcap" : undefined}>{p}</p>)}</div> : null}
          {s.list?.length ? (
            <div className="mt-8 first:mt-0">
              {s.listTitle ? <p className="font-serif text-[1.2rem] text-ink">{s.listTitle}</p> : null}
              <ul className="mt-3 border-b border-line">
                {s.list.map((li, i) => (
                  <li key={li.slice(0, 48)} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-line py-3.5 text-ink">
                    <span className="num pt-[0.2em] font-serif text-[0.95rem] italic text-copper">{pad(i + 1)}</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {s.steps?.length ? (
            <ol className="mt-8 grid gap-x-10 first:mt-0 sm:grid-cols-2">
              {s.steps.map((st, i) => (
                <li key={st.t} className="border-t border-ink py-5">
                  <span className="num font-serif text-[2rem] italic leading-none text-copper">{pad(i + 1)}</span>
                  <p className="mt-3 font-serif text-[1.25rem] text-ink">{st.t}</p>
                  <p className="mt-1.5">{st.d}</p>
                </li>
              ))}
            </ol>
          ) : null}
          {s.after?.length ? <div className="prose-mt mt-7">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
        </div>
      ) : null}
    </article>
  );
}

const insetPool = ["panorama", "atelier", "cheminees", "couvreur", "toits", "outils", "tuyaux", "radiateur", "cle", "toiture", "une"];
const insetCaptions: Record<string, string> = {
  panorama: "Zinc, ardoise et souches : les toits que la maison entretient depuis 1957.",
  atelier: "Le travail d'atelier, le geste juste.",
  cheminees: "Les souches de cheminée d'un immeuble de rapport.",
  couvreur: "Sur le toit : la souche de cheminée, reprise à la main.",
  toits: "Souches et conduits, au crépuscule.",
  outils: "Les outils du plombier, avant les tuyaux.",
  tuyaux: "Les canalisations d'un immeuble ancien, avant reprise.",
  radiateur: "Un radiateur en fonte, sur le réseau d'un immeuble.",
  cle: "L'outil du métier, sur l'établi.",
  toiture: "Une souche de cheminée et ses fenêtres de toit.",
  une: "Les toits de Paris, sous un ciel d'orage.",
};

/** Le reportage photo inséré au fil de la page : une seconde grande photo, différente de celle de la une. */
export function Reportage({ exclude, seed = 0 }: { exclude: string; seed?: number }) {
  const pool = insetPool.filter((k) => k !== exclude);
  const id = pool[seed % pool.length];
  return (
    <div className="wrap pb-4">
      <Photo id={id} className="aspect-[4/3] sm:aspect-[16/7]" caption={<><b>Reportage.</b> {insetCaptions[id]}</>} />
    </div>
  );
}

/** Chaque section question-réponse est un article du journal, numéroté à la suite de « En bref ». */
export function DeepContent({ sections, start = 2, inset }: { sections: Section[]; start?: number; inset?: React.ReactNode }) {
  return (
    <>
      {sections.map((s, i) => (
        <div key={s.h2}>
          <Feuillet n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
            <SectionBody s={s} />
          </Feuillet>
          {i === 0 && inset ? inset : null}
        </div>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Feuillet n={n} rubrique="Courrier des lecteurs" labelledBy="titre-faq">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-4 lg:pr-12">
          <h2 id="titre-faq" className="h2" data-reveal>{fr(title)}</h2>
          <p className="mt-5 max-w-sm text-[0.95rem]" data-reveal>Vos questions, nos réponses. Une autre question : le <a href={`tel:${business.phoneTel}`} className="link-line num">{business.phoneDisplay}</a>.</p>
        </div>
        <div className="border-t border-ink lg:col-span-8 lg:border-l lg:border-t-0 lg:border-line lg:pl-12">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-6 first:lg:pt-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 font-serif text-[1.25rem] leading-snug text-ink transition hover:text-copper-deep sm:text-[1.5rem]">
                {f.q}
                <span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-ink/30 text-copper" />
              </summary>
              <p className="faq-a mt-4 max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Feuillet>
  );
}

/** Bloc local : l'adresse, comme l'encadré « où nous trouver » d'un journal. La phrase d'introduction est propre à chaque arrondissement. */
const approach: Record<string, string> = {
  "Paris 11e": "L'atelier est au cœur du quartier, entre le faubourg Saint-Antoine et la rue de Charonne.",
  "Paris 3e": "Le Haut Marais est de l'autre côté du boulevard Beaumarchais, tout proche.",
  "Paris 4e": "Saint-Paul et les îles se rejoignent par la rue du Faubourg-Saint-Antoine et la Bastille.",
  "Paris 10e": "Le canal Saint-Martin se rejoint par le boulevard Richard-Lenoir.",
  "Paris 12e": "Aligre est juste de l'autre côté du faubourg Saint-Antoine.",
  "Paris 20e": "La rue de Charonne mène directement au 20e.",
};

export function LocalBlock({ contactType, zone = "Paris 11e", n }: { contactType?: string; zone?: string; n: string }) {
  const cell = "border-t border-ink pt-4";
  return (
    <Feuillet n={n} rubrique="Où nous trouver" labelledBy="titre-local">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-6 lg:pr-12">
          <h2 id="titre-local" className="h2" data-reveal>54, rue Trousseau, Paris 11e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 11e"]}</p>
          <div className="mt-9"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-8 self-start sm:grid-cols-2 lg:col-span-6 lg:border-l lg:border-line lg:pl-12">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-2.5 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-2.5"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap font-serif text-[1.5rem] text-ink transition hover:text-copper-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Métro</dt><dd className="mt-2.5 text-ink">{business.metro}</dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-2.5 text-ink">Paris 11e et arrondissements voisins : 3e, 4e, 10e, 12e, 20e</dd></div>
        </dl>
      </div>
    </Feuillet>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Feuillet n={n} rubrique="Lire aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[2rem] sm:text-[2.7rem]">Les autres métiers et quartiers de la maison</h2>
      <ul className="mt-10 grid border-t border-ink sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex h-full gap-5 py-6 sm:pr-8">
              <span className="row-title block flex-1">
                <span className="kicker block">{p.kicker}</span>
                <span className="mt-2 block font-serif text-[1.3rem] leading-snug text-ink sm:text-[1.45rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow mt-1 h-5 w-5 shrink-0 text-ink-faint" />
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
    <section className="relative mt-10 bg-ink text-paper">
      <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="smallcaps text-copper-light">Bon pour devis</p>
          <p className="mt-6 font-serif text-[2.4rem] leading-[1.04] tracking-[-0.015em] text-paper sm:text-[3.5rem] lg:text-[4.3rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg text-paper/75">{text}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="border-b border-paper/50 pb-2">
            <Signature />
          </div>
          <p className="mt-2 flex justify-between text-[0.7rem] uppercase tracking-[0.2em] text-paper/55"><span>Le client</span><span>Paris, 11e</span></p>
          <div className="mt-10 flex flex-col items-start gap-5">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="num font-serif text-[1.5rem] text-paper underline decoration-paper/30 underline-offset-[6px] transition hover:text-copper-light" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
