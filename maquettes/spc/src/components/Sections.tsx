import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoFor } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { Decoupe } from "./Decoupe";
import { COTES, Etage, coteAt } from "./Etage";
import { ArrowIcon } from "./Icons";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");

/** Le i-ème niveau d'une page : sa cote et sa profondeur (la couleur s'assombrit en descendant). */
export const levelAt = (i: number) => ({ ...coteAt(i + 1), depth: 0.1 + (0.86 * Math.min(i, COTES.length - 2)) / (COTES.length - 2) });

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-white/60">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-white/35">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-white">{it.name}</Link> : <span aria-current="page" className="text-white/85">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Un seul bouton d'action, plein et blanc ; le téléphone à côté, en grand. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
      <Link href={contactHref(contactType)} className="btn-solid" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Tél.</span>
        <span className="num text-[1.3rem] font-semibold tracking-tight text-white transition [font-stretch:108%] group-hover:text-brand-light">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Héros des pages : le faîtage. Titre en grotesque large, photo découpée dans une lucarne, faits clés en pied. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  const photo = photoFor(page.photo, page.photoIndex ?? 0, page.caption);
  return (
    <section className="hero relative overflow-hidden" data-cote="+24,00" data-level="Faîtage">
      <div className="hero-sky pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="seams pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid gap-y-12 pb-16 pt-[calc(var(--head-h)+1.5rem)] sm:pb-20 lg:grid-cols-12 lg:gap-x-12 lg:pt-[calc(var(--head-h)+2.5rem)]">
        <div className="flex flex-col lg:col-span-7">
          <Breadcrumbs items={crumbs} />
          <p className="cote fade-in mt-10 sm:mt-14" aria-hidden="true">
            <span className="cote-mark" />
            <span className="cote-val">+24,00</span>
            <span>{page.kicker}</span>
          </p>
          <h1 className="mt-6 text-[2.6rem] sm:text-[3.8rem] xl:text-[4.9rem]" style={{ lineHeight: 0.95 }}>
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-[1.08rem] leading-relaxed text-white/80 sm:text-[1.2rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="rise"><Decoupe photo={photo} shape="lucarne" priority className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]" /></div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-white/55">
            <span>{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 12e"}</span>
          </figcaption>
        </figure>
        {facts.length ? (
          <dl className="grid grid-cols-3 border-t-2 border-white lg:col-span-12">
            {facts.map((f, i) => (
              <div key={f.label} className={`pr-3 pt-5 ${i ? "border-l border-white/15 pl-4 sm:pl-6" : ""}`}>
                <dt className="label">{f.label}</dt>
                <dd className="mt-2 text-[1.05rem] font-semibold leading-tight text-white [font-stretch:110%] sm:text-[1.6rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

export function Brief({ text, i = 0 }: { text: string; i?: number }) {
  const l = levelAt(i);
  return (
    <Etage cote={l.cote} level={l.level} depth={l.depth} ariaLabel="En bref">
      <p className="reponse-bref max-w-5xl">{text}</p>
    </Etage>
  );
}

function SectionBody({ s }: { s: Section }) {
  const right = "xl:col-span-7 xl:col-start-6";
  return (
    <article className="grid gap-y-0 xl:grid-cols-12 xl:gap-x-12">
      <h2 className="h2-sm xl:col-span-5 xl:row-span-6 xl:self-start">{fr(s.h2)}</h2>
      {s.answer ? <p className={`answer xl:mt-1 ${right}`}>{s.answer}</p> : null}
      {s.paras?.length ? <div className={`prose-mt mt-7 ${right}`}>{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className={`mt-9 ${right}`}>
          {s.listTitle ? <p className="mb-3 font-semibold text-white">{s.listTitle}</p> : null}
          <ul className="rule border-b">
            {s.list.map((li, i) => (
              <li key={li.slice(0, 48)} className="rule grid grid-cols-[2.6rem_minmax(0,1fr)] border-t py-4 text-white">
                <span className="num pt-[0.2em] text-[0.8rem] font-semibold text-brand-light">{pad(i + 1)}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className={`mt-10 grid gap-x-10 sm:grid-cols-2 ${right}`}>
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t-2 border-white py-6">
              <span className="num text-[2.4rem] font-bold leading-none text-white/25 [font-stretch:118%]">{pad(i + 1)}</span>
              <p className="mt-4 text-[1.15rem] font-semibold text-white">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className={`prose-mt mt-7 ${right}`}>{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

/** Chaque section question-réponse est un niveau de l'immeuble, de plus en plus profond. */
export function DeepContent({ sections, start = 1 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => {
        const l = levelAt(start + i);
        return (
          <Etage key={s.h2} cote={l.cote} level={l.level} depth={l.depth} id={`s${i + 1}`}>
            <SectionBody s={s} />
          </Etage>
        );
      })}
    </>
  );
}

/** Questions fréquentes : un niveau clair, couleur de zinc, pour rompre la descente. */
export function FaqList({ items, title = "Questions fréquentes", i }: { items: Faq[]; title?: string; i: number }) {
  const l = levelAt(i);
  return (
    <Etage cote={l.cote} level={l.level} tone="zinc" labelledBy="titre-faq">
      <div className="grid gap-12 xl:grid-cols-12">
        <h2 id="titre-faq" className="h2-sm xl:col-span-4" data-reveal>{fr(title)}</h2>
        <div className="rule border-t-2 !border-brand-deep xl:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group rule border-b py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-semibold leading-snug text-brand-deep transition [font-stretch:104%] hover:text-brand sm:text-[1.4rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-2.5 h-4 w-4 shrink-0 text-brand" /></summary><p className="faq-a mt-5 max-w-2xl text-[#2e3a44]">{f.a}</p></details>
          ))}
        </div>
      </div>
    </Etage>
  );
}

/** Bloc local : l'adresse du bureau. La phrase d'approche est propre à chaque secteur (courte, jamais dupliquée). */
const approach: Record<string, string> = {
  "Paris 12e": "Le bureau est dans le 12e, tout près de la station Michel Bizot.",
  "Paris 11e": "Le 11e commence de l'autre côté du boulevard de Charonne et de la place de la Nation.",
  "Paris 20e": "Le 20e est à quelques minutes, par le cours de Vincennes ou la rue des Pyrénées.",
  Vincennes: "Vincennes est juste derrière le boulevard périphérique et la porte de Vincennes.",
  "Saint-Mandé": "Saint-Mandé est à deux pas, de l'autre côté de la porte de Saint-Mandé.",
};

export function LocalBlock({ contactType, zone = "Paris 12e", i }: { contactType?: string; zone?: string; i: number }) {
  const l = levelAt(i);
  const cell = "border-t-2 border-white pt-5";
  return (
    <Etage cote={l.cote} level={l.level} depth={l.depth} labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2-sm" data-reveal>66, avenue du Général-Michel-Bizot, Paris 12e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 12e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-white">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.45rem] font-semibold text-white transition hover:text-brand-light">{business.phoneDisplay}</a><br /><a href={`tel:${business.mobileTel}`} className="num whitespace-nowrap text-[0.95rem] text-white/70 transition hover:text-white">{business.mobileDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-white">{business.hours}<br /><span className="text-[0.92rem] text-white/65">{business.emergency}</span></dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-white">Paris 12e, 11e et 20e, Vincennes, Saint-Mandé</dd></div>
        </dl>
      </div>
    </Etage>
  );
}

export function SeeAlso({ paths, current, i }: { paths?: string[]; current: string; i: number }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  const l = levelAt(i);
  return (
    <Etage cote={l.cote} level={l.level} depth={l.depth} labelledBy="titre-voir">
      <h2 id="titre-voir" className="h2-sm">Voir aussi</h2>
      <ul className="mt-10 border-t-2 border-white">
        {pages.map((p) => (
          <li key={p.path} className="rule border-b">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="block">
                <span className="label block">{p.kicker}</span>
                <span className="row-title mt-2 block text-[1.25rem] font-semibold leading-snug text-white [font-stretch:108%] sm:text-[1.7rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-6 w-6 shrink-0 text-white" />
            </Link>
          </li>
        ))}
      </ul>
    </Etage>
  );
}

/** Le collecteur, sous la cave : dernier appel, sur le bleu le plus profond. Une phrase géante, un bouton, le téléphone. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-abyss" data-cote="−5,20" data-level="Collecteur">
      <div className="wrap relative pb-24 pt-12 sm:pb-32">
        <p className="cote" aria-hidden="true"><span className="cote-mark" /><span className="cote-val">−5,20</span><span>Collecteur · devis gratuit</span></p>
        <p className="display mt-14 max-w-6xl text-[2.7rem] sm:text-[4.6rem] lg:text-[6.2rem]">{fr(title)}</p>
        <div className="mt-12 grid gap-10 border-t-2 border-white pt-8 lg:grid-cols-12 lg:items-start">
          <p className="max-w-xl text-[1.12rem] lg:col-span-6">{text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 lg:col-span-6 lg:justify-end">
            <Link href={contactHref(contactType)} className="btn-solid" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.5rem] font-semibold text-white [font-stretch:108%] hover:text-brand-light" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
