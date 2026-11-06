import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!])/g, "\u00a0$1");
export const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Numéro et nom de section, en mono comme un repère de plan ; `n` devient un repère sur le fil à plomb. */
export function Label({ n, children, className = "", reveal = true }: { n?: string; children?: React.ReactNode; className?: string; reveal?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`} data-n={n} data-reveal={reveal ? "" : undefined}>
      {n ? <span className="text-accent">{n}</span> : null}
      {n && children ? <span className="h-px w-8 bg-accent/50" aria-hidden="true" /> : null}
      {children ? <span>{children}</span> : null}
    </p>
  );
}

/** Ligne de cote : trait fin, abouts obliques, valeur au milieu. */
export function Cote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`cote ${className}`} aria-hidden="true">
      <i />
      <span>{children}</span>
      <i />
    </div>
  );
}

/** Photo dans un cadre de planche : cote au-dessus, repères d'angle, légende numérotée. */
export function Frame({ id, fig, cote, caption, className = "", imgClassName = "", priority, mask = true, src, alt }: { id: string; fig: string; cote?: string; caption?: string; className?: string; imgClassName?: string; priority?: boolean; mask?: boolean; src?: string; alt?: string }) {
  const text = alt ?? photoAlt(id);
  return (
    <figure>
      {cote ? <Cote className="mb-4">{cote}</Cote> : null}
      <div className="frame-box" data-mask={mask ? "" : undefined}>
        <div className="img-zoom frame-img">
          <Img id={id} src={src} alt={text} priority={priority} className={className} imgClassName={imgClassName} />
        </div>
      </div>
      <figcaption className="mt-4 flex gap-4 text-[0.8rem] leading-snug text-ink-faint">
        <span className="font-mono shrink-0 text-[0.66rem] uppercase leading-[1.7] tracking-[0.18em] text-accent">Fig. {fig}</span>
        <span>{caption ?? text}</span>
      </figcaption>
    </figure>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-white/25">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-accent">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action ; le téléphone à côté, en mono. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="link-line font-mono text-[1rem] font-normal tracking-[0.04em]" data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Héros des pages de contenu : planche à deux colonnes, titre et cartouche à gauche, grande photo cotée à droite. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const photo = page.photo ?? "toits";
  const facts = page.facts ?? [
    { label: "Depuis", value: business.founded },
    { label: "Atelier", value: "Paris 15e" },
    { label: "Zone", value: page.zone ?? "Paris 15e" },
  ];
  return (
    <section className="relative">
      <div className="wrap grid gap-y-10 pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-x-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-6">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="label mt-10 text-accent max-lg:order-2 sm:mt-14">{page.kicker}</p>
          <h1 className="mt-5 text-[2.3rem] max-lg:order-3 sm:text-[3.4rem] xl:text-[4rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-7 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.18rem]" style={d(250)}>{fr(page.lead)}</p>
          <div className="fade-in mt-9 max-lg:order-6 lg:mb-14" style={d(400)}>
            <CtaButtons contactType={page.contactType} />
          </div>
          <dl className="cartouche mt-12 grid-cols-3 max-lg:order-7 lg:mt-auto">
            {facts.map((f) => (
              <div key={f.label} className="!border-t-0 border-l border-white/15 first:border-l-0">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="fade-in max-lg:order-4 lg:col-span-6" style={d(150)}>
          <Frame id={photo} fig="01" cote={`Planche · ${page.zone ?? "Paris 15e"}`} priority mask={false} className="aspect-[4/3] lg:aspect-[5/6]" imgClassName="slow-zoom" />
        </div>
      </div>
    </section>
  );
}

export function Brief({ text, start }: { text: string; start?: boolean }) {
  return (
    <section aria-label="En bref" className="border-t border-line">
      <div className="wrap grid gap-5 py-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-3"><p className="label" data-plumb-start={start ? "" : undefined}>En bref</p></div>
        <p className="reponse-bref max-w-4xl lg:col-span-9">{fr(text)}</p>
      </div>
    </section>
  );
}

function SectionBody({ s, n }: { s: Section; n: number }) {
  const num = String(n).padStart(2, "0");
  return (
    <article id={`s${n}`} className="scroll-mt-28 border-t border-line pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <Label n={num}>{s.original ? "Texte du site actuel" : undefined}</Label>
      <h2 className="mt-5 text-[1.9rem] sm:text-[2.5rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{fr(s.answer)}</p> : null}
      {s.paras?.length ? <div className="prose-c mt-7">{s.paras.map((p) => <p key={p.slice(0, 40)}>{fr(p)}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-9">
          {s.listTitle ? <p className="text-[1.15rem] font-light text-ink">{s.listTitle}</p> : null}
          <ul className="mt-4 border-b border-line">
            {s.list.map((li, i) => (
              <li key={li} className="flex items-baseline gap-5 border-t border-line py-4 text-[1.08rem] text-ink">
                <span className="w-7 shrink-0 font-mono text-[0.7rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t border-white/20 py-6">
              <span className="font-mono text-[0.72rem] tracking-[0.18em] text-accent">ÉTAPE {String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-[1.15rem] font-medium text-ink">{st.t}</p>
              <p className="mt-2">{fr(st.d)}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-c mt-7 text-ink">{s.after.map((p) => <p key={p.slice(0, 40)}>{fr(p)}</p>)}</div> : null}
    </article>
  );
}

/** Corps de page : nomenclature collante à gauche, sections question-réponse à droite. */
export function DeepContent({ sections }: { sections: Section[] }) {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <nav aria-label="Sommaire" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 pr-6">
            <p className="label">Nomenclature</p>
            <ol className="mt-6 border-t border-line">
              {sections.map((s, i) => (
                <li key={s.h2} className="border-b border-line">
                  <a href={`#s${i + 1}`} className="group flex gap-4 py-2.5 text-[0.9rem] leading-snug text-ink-soft transition hover:text-accent">
                    <span className="font-mono text-[0.7rem] leading-[1.6] text-ink-faint transition group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>
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

export function FaqList({ items, title = "Questions fréquentes" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="titre-faq" className="border-t border-line py-20 sm:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Label>Questions fréquentes</Label>
          <h2 id="titre-faq" className="h2 mt-5" data-reveal>{fr(title)}</h2>
        </div>
        <div className="faq-list border-t border-line lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start gap-6 text-[1.18rem] font-light leading-snug text-ink transition hover:text-accent sm:text-[1.42rem]"><span className="flex-1">{fr(f.q)}</span><span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 border border-white/20 text-accent" /></summary><p className="faq-a mt-5 max-w-2xl pl-12">{fr(f.a)}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBlock({ contactType, zone }: { contactType?: string; zone?: string }) {
  const cell = "border-t border-white/20 pt-5";
  return (
    <section aria-labelledby="titre-local" className="border-t border-line py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>Rue d&apos;Ouessant, Paris 15e</Label>
          <h2 id="titre-local" className="h2 mt-5" data-reveal>Entreprise Clairon, 23 rue d&apos;Ouessant</h2>
          {zone && zone !== "Paris 15e" ? <p className="mt-6">Pour {zone}, l&apos;équipe part de ses locaux du 15e arrondissement.</p> : <p className="mt-6">Entre Dupleix et La Motte-Picquet, au cœur du 15e arrondissement.</p>}
          <p className="mt-3">Organisez votre rendez-vous en nous contactant.</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap font-mono text-[1.3rem] text-ink transition hover:text-accent">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">E-mail</dt><dd className="mt-3"><a href={`mailto:${business.email}`} className="text-ink transition hover:text-accent">{business.email}</a></dd></div>
          <div className={cell}><dt className="label">Métiers</dt><dd className="mt-3 text-ink">Plomberie, couverture, chauffage, petite maçonnerie</dd></div>
          <div className={`${cell} sm:col-span-2`}><dt className="label">Accès</dt><dd className="mt-3 font-mono text-[0.85rem] tracking-[0.06em] text-ink-soft">Métro Dupleix · La Motte-Picquet–Grenelle · 48° 51′ N, 2° 18′ E</dd></div>
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
          {pages.map((p, i) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7">
                <span className="font-mono text-[0.7rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="row-title block">
                  <span className="label block">{p.kicker}</span>
                  <span className="mt-2 block text-[1.22rem] font-light leading-snug text-ink sm:text-[1.55rem]">{p.h1}</span>
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

/** Dernier appel à l'action : le fil à plomb s'y pose, « d'aplomb ». */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="border-t border-line">
      <div className="wrap py-24 sm:py-32">
        <Cote className="mb-14 max-w-md">Fin de planche · d&apos;aplomb</Cote>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[2.3rem] font-extralight leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.6rem] lg:text-[4.3rem]" data-plumb-end>{fr(title)}</p>
            <p className="mt-6 max-w-xl text-lg">{fr(text)}</p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="link-line font-mono text-[1rem] font-normal tracking-[0.04em]" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
