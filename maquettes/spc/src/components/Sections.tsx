import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoFor } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Niveau } from "./Niveau";
import { Roofline } from "./Roofline";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");

/** Les niveaux de l'immeuble, du haut vers le bas : la page se lit comme une descente du toit à la cave. */
const LEVELS = ["Faîtage", "Toiture", "Combles", "Étages", "Paliers", "Rez-de-chaussée", "Cour", "Cave", "Réseau"];
export const levelAt = (i: number) => ({ n: pad(Math.max(0, LEVELS.length - 1 - i)), level: LEVELS[Math.min(i, LEVELS.length - 1)] });

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-zinc">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-accent-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
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
        <span className="num text-[1.2rem] font-light tracking-tight text-ink transition group-hover:text-accent-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Héros des pages : titre fin à gauche ; à droite, la ligne des toits qui se trace et la photo qui se dévoile dessous. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  const photo = photoFor(page.photo, page.photoIndex ?? 0, page.caption);
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-20">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="fade-in mt-10 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[0.82rem] text-ink-faint max-lg:order-2 sm:mt-14">
            <span className="text-accent">{page.kicker}</span>
            <span>SPC · Paris 12e depuis {business.founded}</span>
          </p>
          <h1 className="mt-6 text-[2.4rem] max-lg:order-3 sm:text-[3.4rem] xl:text-[4.1rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.16rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-14" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
          {facts.length ? (
            <dl className="mt-14 grid grid-cols-3 border-t border-line max-lg:order-7 lg:mt-auto">
              {facts.map((f) => (
                <div key={f.label} className="pr-3 pt-5">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-[1.02rem] font-light leading-tight text-ink sm:text-[1.3rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div className="relative aspect-[5/4] sm:aspect-[16/11] lg:aspect-[4/5]">
            <Roofline photo={photo} />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{photo.credit === "spc" ? "Photo de l'entreprise SPC" : photo.alt}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 12e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, i = 0 }: { text: string; i?: number }) {
  const l = levelAt(i);
  return (
    <Niveau n={l.n} level={l.level} ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Niveau>
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
                <span className="num pt-[0.18em] text-[0.8rem] text-accent">{pad(i + 1)}</span>
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
              <span className="num text-[1.9rem] font-extralight leading-none text-accent">{pad(i + 1)}</span>
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

/** Chaque section question-réponse est un niveau de l'immeuble, à la suite de « En bref ». */
export function DeepContent({ sections, start = 1 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => {
        const l = levelAt(start + i);
        return (
          <Niveau key={s.h2} n={l.n} level={l.level} id={`s${i + 1}`} tone={i % 2 ? "zinc" : "white"}>
            <SectionBody s={s} />
          </Niveau>
        );
      })}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", i }: { items: Faq[]; title?: string; i: number }) {
  const l = levelAt(i);
  return (
    <Niveau n={l.n} level={l.level} labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl" data-reveal>{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-accent-deep sm:text-[1.38rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Niveau>
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
  const cell = "border-t border-line pt-5";
  return (
    <Niveau n={l.n} level={l.level} labelledBy="titre-local" tone="zinc">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2" data-reveal>66, avenue du Général-Michel-Bizot, Paris 12e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 12e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-ink transition hover:text-accent-deep">{business.phoneDisplay}</a><br /><a href={`tel:${business.mobileTel}`} className="num whitespace-nowrap text-[0.95rem] text-ink-soft transition hover:text-accent-deep">{business.mobileDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-ink">{business.hours}<br /><span className="text-[0.92rem] text-ink-soft">{business.emergency}</span></dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris 12e, 11e et 20e, Vincennes, Saint-Mandé</dd></div>
        </dl>
      </div>
    </Niveau>
  );
}

export function SeeAlso({ paths, current, i }: { paths?: string[]; current: string; i: number }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  const l = levelAt(i);
  return (
    <Niveau n={l.n} level={l.level} labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[1.95rem] sm:text-[2.6rem]">Voir aussi</h2>
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
    </Niveau>
  );
}

/** Dernier appel à l'action, sobre : une phrase, un bouton, le téléphone. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative border-t border-line bg-white">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label text-accent">Devis gratuit</p>
          <p className="mt-6 text-[2.3rem] font-extralight leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
          <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
