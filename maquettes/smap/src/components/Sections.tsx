import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { PlanFigure } from "./PlanFigure";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!])/g, " $1");
export const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/**
 * Début de section, « en plan » : numéro, intitulé, puis une ligne cotée (traits d'extrémité) qui se trace jusqu'à l'échelle.
 * Chaque section de la page s'ouvre ainsi, avant que la photo ne se dévoile dans son cadre.
 */
export function Label({ n, children, className = "", reveal = true, scale = "1:50" }: { n?: string; children?: React.ReactNode; className?: string; reveal?: boolean; scale?: string }) {
  return (
    <p className={`label plan-rule ${className}`} data-reveal={reveal ? "" : undefined}>
      {n ? <span className="num text-accent">{n}</span> : null}
      {children ? <span>{children}</span> : null}
      {reveal ? <span className="plan-line" aria-hidden="true" /> : null}
      {reveal ? <span className="num text-accent/80" aria-hidden="true">{scale}</span> : null}
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-ink/20">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-accent">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action ; le téléphone à côté, en lien souligné. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Héros des pages de contenu : titre fin à gauche, cadre de plan à droite où la photo se dévoile, repères en chiffres légers. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const photo = page.photo ?? "bains";
  const facts = page.facts ?? [
    { label: "Depuis", value: business.founded },
    { label: "Atelier", value: "Paris 12e" },
    { label: "Zone", value: page.zone ?? "Paris 12e" },
  ];
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="label mt-12 text-accent max-lg:order-2 sm:mt-16">{page.kicker}</p>
          <h1 className="mt-6 text-[2.4rem] max-lg:order-3 sm:text-[3.5rem] xl:text-[4.1rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.2rem]" style={d(250)}>{fr(page.lead)}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-16" style={d(400)}>
            <CtaButtons contactType={page.contactType} />
          </div>
          <dl className="mt-14 grid grid-cols-3 border-t border-line max-lg:order-7 lg:mt-auto">
            {facts.map((f) => (
              <div key={f.label} className="pr-3 pt-5">
                <dt className="label">{f.label}</dt>
                <dd className="mt-1.5 text-[1.05rem] font-light leading-tight text-ink sm:text-[1.4rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <PlanFigure id={photo} mode="auto" priority ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" end={page.zone ?? "Paris 12e"} caption={`SMAP · ${page.zone ?? "Paris 12e"}`} />
        </div>
      </div>
    </section>
  );
}

export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref" className="border-t border-line">
      <div className="wrap grid gap-5 py-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-3"><Label reveal={false}>En bref</Label></div>
        <p className="reponse-bref max-w-4xl lg:col-span-9">{fr(text)}</p>
      </div>
    </section>
  );
}

function SectionBody({ s, n }: { s: Section; n: number }) {
  const num = String(n).padStart(2, "0");
  return (
    <article id={`s${n}`} className="scroll-mt-28 border-t border-line pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <Label n={num} scale={`1:${[20, 50, 100][n % 3]}`} />
      <h2 className="mt-5 text-[1.9rem] sm:text-[2.55rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{fr(s.answer)}</p> : null}
      {s.paras?.length ? <div className="prose-c mt-7">{s.paras.map((p) => <p key={p.slice(0, 40)}>{fr(p)}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-9">
          {s.listTitle ? <p className="text-[1.15rem] font-light text-ink">{s.listTitle}</p> : null}
          <ul className="mt-4 border-b border-line">
            {s.list.map((li, i) => (
              <li key={li} className="flex items-baseline gap-5 border-t border-line py-4 text-[1.1rem] text-ink">
                <span className="num w-6 shrink-0 text-[0.75rem] text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
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
              <span className="num text-[2rem] font-extralight leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[1.15rem] font-medium text-ink">{st.t}</p>
              <p className="mt-2">{fr(st.d)}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-c mt-7 text-ink">{s.after.map((p) => <p key={p.slice(0, 40)}>{fr(p)}</p>)}</div> : null}
    </article>
  );
}

/** Corps de page : sommaire collant à gauche, sections question-réponse à droite. */
export function DeepContent({ sections }: { sections: Section[] }) {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <nav aria-label="Sommaire" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 pr-6">
            <p className="label">Sur cette page</p>
            <ol className="mt-6 space-y-0.5">
              {sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`} className="group flex gap-4 py-2 text-[0.92rem] leading-snug text-ink-soft transition hover:text-accent">
                    <span className="num text-ink-faint transition group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.h2}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <div className="max-w-3xl space-y-16 lg:col-span-8">
          {sections.map((s, i) => <SectionBody key={s.h2} s={s} n={i + 1} />)}
        </div>
      </div>
    </section>
  );
}

/** Bandeau de fin de page : le chantier livré, dévoilé dans son cadre de plan. */
export function PlanBand({ photo, zone }: { photo: string; zone?: string }) {
  return (
    <section aria-label="Du plan au chantier" className="border-t border-line py-16 sm:py-24">
      <div className="wrap grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Label>Du plan au chantier</Label>
          <p className="mt-6 text-[1.5rem] font-light leading-snug text-ink sm:text-[2rem]" data-reveal>
            Chaque intervention commence par un relevé sur place et se termine, une fois les travaux faits, par une pièce qui fonctionne.
          </p>
        </div>
        <div className="lg:col-span-7">
          <PlanFigure id={photo} ratio="aspect-[16/10]" end={zone ?? "Chantier"} />
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Questions fréquentes" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="titre-faq" className="border-t border-line py-20 sm:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Label>Questions fréquentes</Label>
          <h2 id="titre-faq" className="h2 mt-5" data-reveal>{fr(title)}</h2>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.2rem] font-light leading-snug text-ink transition hover:text-accent sm:text-[1.45rem]">{fr(f.q)}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{fr(f.a)}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBlock({ contactType, zone }: { contactType?: string; zone?: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <section aria-labelledby="titre-local" className="border-t border-line py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>Paris 12e</Label>
          <h2 id="titre-local" className="h2 mt-5" data-reveal>SMAP, plomberie et rénovation à Paris 12e</h2>
          {zone && zone !== "Paris 12e" ? <p className="mt-6">Pour {zone}, l&apos;équipe part de son atelier du 12e arrondissement.</p> : <p className="mt-6">Dans le 12e arrondissement, de Bercy à la place de la Nation.</p>}
          <p className="mt-3">Organisez votre rendez-vous en nous contactant.</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris 12e (75012)<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Voir sur la carte</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.4rem] font-light text-ink transition hover:text-accent">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">E-mail</dt><dd className="mt-3"><a href={`mailto:${business.email}`} className="break-all text-ink transition hover:text-accent">{business.email}</a></dd></div>
          <div className={cell}><dt className="label">Métiers</dt><dd className="mt-3 text-ink">Plomberie, aménagement et rénovation, maintenance</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, current }: { paths?: string[]; current: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <section aria-labelledby="titre-voir" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <Label>Voir aussi</Label>
        <h2 id="titre-voir" className="mt-5 text-[1.9rem] sm:text-[2.5rem]">Les autres métiers et quartiers de l&apos;entreprise</h2>
        <ul className="mt-10 border-t border-line">
          {pages.map((p) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
                <span className="row-title block">
                  <span className="label block">{p.kicker}</span>
                  <span className="mt-2 block text-[1.25rem] font-light leading-snug text-ink sm:text-[1.6rem]">{p.h1}</span>
                </span>
                <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Dernier appel à l'action. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="border-t border-line">
      <div className="wrap grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-[2.35rem] font-extralight leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.6rem] lg:text-[4.4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{fr(text)}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
          <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
