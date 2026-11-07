import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { Dial } from "./Dial";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!])/g, " $1");
export const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Trois petits filets seventies, en tête de section. */
export function Ticks({ dark = false }: { dark?: boolean }) {
  return (
    <span aria-hidden="true" className="stripe-dot">
      <i className={dark ? "bg-mustard" : "bg-olive-soft"} /><i className={dark ? "bg-cream-deep" : "bg-mustard"} /><i className={dark ? "bg-tabac-light" : "bg-tabac"} />
    </span>
  );
}

/** Numéro et nom de section en petites capitales. */
export function Label({ n, children, className = "", reveal = true, dark = false }: { n?: string; children?: React.ReactNode; className?: string; reveal?: boolean; dark?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${dark ? "text-cream/60" : ""} ${className}`} data-reveal={reveal ? "" : undefined}>
      <Ticks dark={dark} />
      {n ? <span className={`num ${dark ? "text-mustard" : "text-tabac"}`}>{n}</span> : null}
      {children ? <span>{children}</span> : null}
    </p>
  );
}

export function Breadcrumbs({ items, dark = false }: { items: { name: string; href?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Fil d'Ariane" className={`text-[0.98rem] font-semibold ${dark ? "text-cream/55" : "text-ink-faint"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="opacity-40">/</span> : null}
            {it.href ? <Link href={it.href} className={`transition ${dark ? "hover:text-mustard-light" : "hover:text-tabac"}`}>{it.name}</Link> : <span aria-current="page" className={dark ? "text-cream/85" : "text-ink-soft"}>{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action ; le téléphone à côté, en lien souligné. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention", dark = false }: { contactType?: string; label?: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Link href={contactHref(contactType)} className={dark ? "btn-mustard" : "btn-primary"} data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className={`link-line num font-serif text-[1.15rem] font-normal ${dark ? "!text-cream hover:!text-mustard-light" : ""}`} data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Héros des pages de contenu : bandeau olive, titre en Young Serif, grande photo arrondie et cadran posé sur son coin. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const photo = page.photo ?? "raccords";
  const facts = page.facts ?? [
    { label: "Depuis", value: business.founded },
    { label: "Atelier", value: "Rue d'Alésia" },
    { label: "Zone", value: page.zone ?? "Paris 14e" },
  ];
  return (
    <section className="grain-bg relative bg-olive-deep text-cream">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-14 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-6">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} dark /></div>
          <p className="label mt-10 flex items-center gap-3 text-mustard max-lg:order-2 sm:mt-14"><Ticks dark />{page.kicker}</p>
          <h1 className="mt-5 text-[2.5rem] !text-cream max-lg:order-3 sm:text-[3.3rem] xl:text-[3.75rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-[1.3rem] leading-snug text-cream/80 max-lg:order-5 sm:text-[1.45rem]" style={d(250)}>{fr(page.lead)}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-14" style={d(400)}>
            <CtaButtons contactType={page.contactType} dark />
          </div>
          <dl className="mt-14 grid grid-cols-3 border-t border-cream/15 max-lg:order-7 lg:mt-auto">
            {facts.map((f) => (
              <div key={f.label} className="pr-3 pt-5">
                <dt className="label text-cream/50">{f.label}</dt>
                <dd className="mt-1.5 font-serif text-[1.05rem] leading-tight text-cream sm:text-[1.25rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="relative mt-10 max-lg:order-4 lg:col-span-6 lg:mt-0">
          <div data-mask className="photo">
            <Img id={photo} alt={photoAlt(photo)} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/6]" imgClassName="slow-zoom" />
          </div>
          <div className="dial-in absolute -bottom-10 right-3 w-[8.5rem] sm:w-[11rem] lg:-bottom-12 lg:-right-6 lg:w-[13rem]" style={d(500)}>
            <Dial />
          </div>
          <figcaption className="mt-4 max-w-[58%] text-[0.95rem] text-cream/50">{photoAlt(photo)}</figcaption>
        </figure>
      </div>
      <div className="stripes-dark" aria-hidden="true" />
    </section>
  );
}

export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref" className="bg-cream">
      <div className="wrap grid gap-5 py-16 sm:py-24 lg:grid-cols-12">
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
      <Label n={num} />
      <h2 className="mt-5 text-[2rem] sm:text-[2.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{fr(s.answer)}</p> : null}
      {s.paras?.length ? <div className="prose-c mt-7">{s.paras.map((p) => <p key={p.slice(0, 40)}>{fr(p)}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-9">
          {s.listTitle ? <p className="font-serif text-[1.25rem] text-ink">{s.listTitle}</p> : null}
          <ul className="mt-4 border-b border-line">
            {s.list.map((li, i) => (
              <li key={li} className="flex items-baseline gap-5 border-t border-line py-4 text-[1.2rem] font-semibold text-ink">
                <span className="num w-6 shrink-0 text-[0.85rem] font-bold text-tabac">{String(i + 1).padStart(2, "0")}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t-2 border-olive/80 py-6">
              <span className="num font-serif text-[2.2rem] leading-none text-mustard-deep">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[1.3rem] font-bold text-ink">{st.t}</p>
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
    <section className="border-t border-line bg-paper py-16 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <nav aria-label="Sommaire" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 rounded-[1.5rem] bg-cream p-7">
            <p className="label">Sur cette page</p>
            <ol className="mt-5 space-y-0.5">
              {sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`} className="group flex gap-4 py-2 text-[1.05rem] font-semibold leading-snug text-ink-soft transition hover:text-tabac">
                    <span className="num text-mustard-deep">{String(i + 1).padStart(2, "0")}</span>
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
    <section aria-labelledby="titre-faq" className="bg-cream py-20 sm:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Label>Questions fréquentes</Label>
          <h2 id="titre-faq" className="h2 mt-5" data-reveal>{fr(title)}</h2>
        </div>
        <div className="border-t-2 border-olive lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 font-serif text-[1.3rem] leading-snug text-ink transition hover:text-tabac sm:text-[1.55rem]">{fr(f.q)}<span aria-hidden="true" className="faq-plus relative mt-1 h-8 w-8 shrink-0 rounded-full bg-olive text-mustard-light" /></summary><p className="faq-a mt-5 max-w-2xl">{fr(f.a)}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBlock({ contactType, zone }: { contactType?: string; zone?: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <section aria-labelledby="titre-local" className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>Rue d&apos;Alésia, Paris 14e</Label>
          <h2 id="titre-local" className="h2 mt-5" data-reveal>EBL, 5 rue d&apos;Alésia</h2>
          {zone && zone !== "Paris 14e" ? <p className="mt-6">Pour {zone}, l&apos;équipe part de ses locaux du 14e arrondissement.</p> : <p className="mt-6">Au cœur du 14e arrondissement, dans le quartier d&apos;Alésia.</p>}
          <p className="mt-3">Organisez votre rendez-vous en nous contactant.</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 font-semibold text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-[1rem]">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap font-serif text-[1.55rem] text-ink transition hover:text-tabac">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-[1.08rem] font-semibold text-ink">{business.hours.map(([d, h]) => <span key={d} className="block">{d} : {h}</span>)}</dd></div>
          <div className={cell}><dt className="label">Métiers</dt><dd className="mt-3 font-semibold text-ink">Plomberie, gaz, chauffage</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, current }: { paths?: string[]; current: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <section aria-labelledby="titre-voir" className="bg-cream py-20 sm:py-24">
      <div className="wrap">
        <Label>Voir aussi</Label>
        <h2 id="titre-voir" className="mt-5 text-[2rem] sm:text-[2.6rem]">Les autres métiers et quartiers de l&apos;entreprise</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {pages.map((p) => (
            <li key={p.path}>
              <Link href={p.path} className="row-link flex h-full items-center justify-between gap-6 rounded-[1.5rem] border border-line bg-paper px-6 py-6 transition hover:border-tabac/40 sm:px-8">
                <span className="row-title block">
                  <span className="label block text-tabac">{p.kicker}</span>
                  <span className="mt-2 block font-serif text-[1.3rem] leading-snug text-ink sm:text-[1.55rem]">{p.h1}</span>
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

/** Dernier appel à l'action : bandeau brun tabac, filets seventies. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="grain-bg bg-tabac-deep text-cream">
      <div className="stripes-dark" aria-hidden="true" />
      <div className="wrap grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-cream sm:text-[3.6rem] lg:text-[4.4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-[1.3rem] text-cream/75">{fr(text)}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
          <Link href={contactHref(contactType)} className="btn-mustard" data-track="cta_devis">Demander un devis <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num font-serif text-[1.25rem] font-normal !text-cream" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
