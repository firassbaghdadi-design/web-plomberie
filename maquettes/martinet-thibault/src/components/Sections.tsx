import { Bief } from "@/components/Bief";
import Link from "next/link";
import { allPages } from "@/lib/pages";
import { imgSrc, photoAlt } from "@/lib/photos";
import { PATHS, business, contacts, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";
import { Realisation } from "./Realisation";
import { Ecluse } from "./Lock";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");

export function Breadcrumbs({ items, light = false }: { items: { name: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Fil d'Ariane" className={`text-[0.8rem] ${light ? "text-cream/60" : "text-ink-faint"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className={light ? "text-cream/30" : "text-stone-deep"}>/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-brass-deep">{it.name}</Link> : <span aria-current="page" className={light ? "text-cream/85" : "text-ink-soft"}>{it.name}</span>}
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
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="serif num text-[1.45rem] font-light text-ink transition hover:text-brass-deep" data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

const defaultFacts = [
  { label: "Depuis", value: "1880" },
  { label: "Atelier", value: "Paris 10e" },
  { label: "Astreinte", value: "CP24" },
];

/**
 * Héros des pages : le titre en grande Fraunces sur le crème, la phrase et le bouton à droite,
 * puis la photo en bandeau large, au grain, que coiffent trois repères vérifiables.
 */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? defaultFacts;
  return (
    <section className="relative">
      <div className="wrap pt-6 sm:pt-10">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-x-14 gap-y-8 sm:mt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label text-brass-deep">{page.kicker}</p>
            <h1 className="mt-5 text-[2.7rem] leading-[0.98] tracking-[-0.03em] sm:text-[4rem] xl:text-[5rem]" style={{ fontVariationSettings: '"opsz" 144' }}>
              <span className="line-up"><span>{fr(page.h1)}</span></span>
            </h1>
          </div>
          <div className="fade-in lg:col-span-4 lg:pb-2" style={{ ["--d" as string]: "250ms" }}>
            <p className="text-[1.05rem] leading-relaxed sm:text-[1.12rem]">{page.lead}</p>
            <div className="mt-8"><CtaButtons contactType={page.contactType} label="Devis ou intervention" /></div>
          </div>
        </div>
      </div>
      <div className="wrap mt-12 sm:mt-16">
        <figure className="relative">
          <div data-mask className="overflow-hidden rounded-[2px]">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="grain warm aspect-[4/3] sm:aspect-[16/8] lg:aspect-[21/8]" imgClassName="slow-zoom" position={page.photoPos} />
          </div>
          <dl className="relative z-[3] grid grid-cols-3 border-b border-ink/15 bg-cream sm:absolute sm:bottom-0 sm:right-0 sm:w-[30rem] sm:border-b-0 sm:px-6 sm:pt-1">
            {facts.map((f) => (
              <div key={f.label} className="pb-5 pr-3 pt-5">
                <dt className="label">{f.label}</dt>
                <dd className="serif mt-1.5 text-[1.2rem] font-light leading-tight text-ink sm:text-[1.5rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">
            <span>{page.caption ?? photoAlt(page.photo)}</span>
            <span className="serif ml-3 italic">{page.zone ?? "Paris 10e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref">
      <div className="wrap grid gap-5 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-3"><p className="label">En bref</p></div>
        <p className="reponse-bref max-w-4xl lg:col-span-9">{text}</p>
      </div>
    </section>
  );
}

function SectionBody({ s, n }: { s: Section; n: number }) {
  return (
    <article id={`s${n}`} className="scroll-mt-28 border-t border-ink/15 pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <Ecluse n={String(n).padStart(2, "0")}>{s.original ? "Texte de l'entreprise" : "À savoir"}</Ecluse>
      <h2 className="mt-6 text-[2rem] sm:text-[2.7rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className={`prose-mt mt-7 ${s.original ? "text-[1.12rem] text-ink" : ""}`}>{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-8">
          {s.listTitle ? <p className="font-semibold text-ink">{s.listTitle}</p> : null}
          <ul className="mt-3 border-b border-ink/15">
            {s.list.map((li) => (
              <li key={li.slice(0, 48)} className="flex gap-4 border-t border-ink/15 py-4 text-ink">
                <span className="mt-[0.85em] h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t border-ink/15 py-6">
              <span className="serif num text-[2.4rem] font-light italic leading-none text-brass">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[1.12rem] font-semibold text-ink">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-mt mt-7">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

/** Corps de page : sommaire collant à gauche, sections question-réponse à droite. */
export function DeepContent({ sections }: { sections: Section[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Bief />
      <div className="wrap grid gap-12 pt-4 lg:grid-cols-12">
        <nav aria-label="Sommaire" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28 pr-6">
            <p className="label">Sur cette page</p>
            <ol className="mt-6 space-y-0.5">
              {sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`} className="group flex gap-4 py-2 text-[0.92rem] leading-snug text-ink-soft transition hover:text-brass-deep">
                    <span className="serif num italic text-brass transition group-hover:text-brass-deep">{String(i + 1).padStart(2, "0")}</span>
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

/** Trois montages avant / après publiés par l'entreprise, en comparateurs nets (jamais plus de deux fois leur taille). */
export function Gallery({ keys, title = "Des chantiers de l'entreprise" }: { keys: string[]; title?: string }) {
  const shown = keys.filter((k) => imgSrc(k));
  if (!shown.length) return null;
  return (
    <section aria-label={title} className="bg-stone py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <p className="label">Photos de l'entreprise</p>
          <p className="serif mt-4 text-[1.9rem] font-light leading-tight tracking-[-0.02em] text-ink">{title}</p>
          <Link href={PATHS.works} className="link-line mt-6 text-[0.9rem]">Toutes les réalisations <ArrowIcon className="h-3.5 w-3.5" /></Link>
        </div>
        <ul className="archive ba-grid ba-3 lg:col-span-8">
          {shown.map((k) => (
            <li key={k} data-mask>
              <Realisation id={k} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n = "FAQ" }: { items: Faq[]; title?: string; n?: string }) {
  return (
    <section aria-labelledby="titre-faq" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-10 pt-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n={n}>Questions fréquentes</Ecluse>
          <h2 id="titre-faq" className="h2 mt-6" data-reveal>{fr(title)}</h2>
        </div>
        <div className="border-t border-ink/15 lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-ink/15 py-7"><summary className="serif flex cursor-pointer list-none items-start justify-between gap-8 text-[1.3rem] font-light leading-snug text-ink transition hover:text-brass-deep sm:text-[1.6rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-8 w-8 shrink-0 rounded-full border border-brass/40 text-brass" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBlock({ contactType, zone }: { contactType?: string; zone?: string }) {
  const cell = "border-t border-ink/15 pt-5";
  return (
    <section aria-labelledby="titre-local" className="bg-stone py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Ecluse n="Adresse">Passage du Désir</Ecluse>
          <h2 id="titre-local" className="h2 mt-6" data-reveal>34, passage du Désir, Paris 10e</h2>
          <p className="mt-6">{zone && zone !== "Paris 10e" ? `Pour ${zone}, les équipes partent du passage du Désir.` : "Entre la gare de l'Est et le boulevard de Strasbourg."}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Standard</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="serif num whitespace-nowrap text-[1.6rem] font-light text-ink transition hover:text-brass-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-ink">{business.hours}</dd></div>
          <div className={cell}><dt className="label">Lignes directes</dt><dd className="mt-3 space-y-1 text-[0.95rem]">{contacts.slice(1, 3).map((c) => <span key={c.service} className="block">{c.service.replace("Service ", "")} : <a href={`tel:${c.phoneTel}`} className="num whitespace-nowrap text-ink transition hover:text-brass-deep">{c.phoneDisplay}</a></span>)}</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, current }: { paths?: string[]; current: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <section aria-labelledby="titre-voir" className="py-20 sm:py-24">
      <div className="wrap">
        <Ecluse n="Voir aussi">Pages voisines</Ecluse>
        <h2 id="titre-voir" className="mt-6 text-[2.1rem] sm:text-[2.8rem]">Les autres métiers de la maison</h2>
        <ul className="mt-10 border-t border-ink/15">
          {pages.map((p) => (
            <li key={p.path} className="border-b border-ink/15">
              <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
                <span className="row-title block">
                  <span className="label block">{p.kicker}</span>
                  <span className="serif mt-2 block text-[1.4rem] font-light leading-snug text-ink sm:text-[1.85rem]">{p.h1}</span>
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

/** Dernier appel à l'action, en bas de chaque page : encre brune, photo au grain, laiton. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="bg-night text-cream/75">
      <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="label !text-brass-light">Devis gratuit · passage du Désir</p>
          <p className="serif mt-6 text-[2.4rem] font-light leading-[1.04] tracking-[-0.03em] text-cream sm:text-[3.6rem] lg:text-[4.3rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="serif num text-[1.7rem] font-light text-cream transition hover:text-brass-light" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div data-mask className="overflow-hidden rounded-[2px]">
            <Img id="chaudiere" alt={photoAlt("chaudiere")} className="grain warm aspect-[4/3] !bg-night-2 lg:aspect-[4/5]" />
          </div>
        </figure>
      </div>
    </section>
  );
}
