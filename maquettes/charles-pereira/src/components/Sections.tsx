import Link from "next/link";
import { allPages } from "@/lib/pages";
import { imgSrc, photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";
import { Raccord } from "./Raccord";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-ink/25">/</span> : null}
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

/**
 * Héros : fil d'Ariane, titre léger (métier + zone), accroche, bouton, chiffres. En bas, le bandeau `data-art` est
 * l'emplacement où le réseau isométrique se dessine au chargement avant de descendre dans la gouttière.
 */
export function PageHero({ page, crumbs, home = false }: { page: Page; crumbs: { name: string; href?: string }[]; home?: boolean }) {
  const facts = page.facts ?? [];
  return (
    <section className={`relative z-10 flex flex-col ${home ? "min-h-[calc(100svh-var(--head-h))]" : ""}`}>
      <div className="wrap flex flex-1 flex-col pb-10 pt-6 sm:pt-10">
        {!home ? <Breadcrumbs items={crumbs} /> : null}
        <p className={`fade-in text-[0.72rem] font-medium uppercase tracking-[0.26em] text-accent ${home ? "mt-8 sm:mt-14" : "mt-10 sm:mt-14"}`}>{page.kicker}</p>
        <h1 className={`mt-6 max-w-[16ch] ${home ? "text-[clamp(3rem,10.6vw,8.2rem)] leading-[0.98]" : "text-[clamp(2.5rem,7.4vw,5.6rem)] leading-[1]"}`} style={{ textWrap: "balance" }}>
          <span className="line-up"><span>{fr(page.h1)}</span></span>
        </h1>
        <p className="fade-in mt-7 max-w-xl text-lg leading-relaxed sm:text-[1.2rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
        <div className="fade-in mt-9" style={{ ["--d" as string]: "400ms" }}>
          <CtaButtons contactType={page.contactType} />
        </div>
        {facts.length ? (
          <dl className="fade-in mt-12 hidden max-w-3xl grid-cols-3 sm:grid gap-x-4 border-t border-line pt-5 lg:mt-auto" style={{ ["--d" as string]: "550ms" }}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="label">{f.label}</dt>
                <dd className="mt-1.5 text-[1.05rem] font-light leading-tight text-ink sm:text-[1.55rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
      <div data-art aria-hidden="true" className={`wrap-flat w-full ${home ? "h-[130px] sm:h-[200px]" : "h-[120px] sm:h-[180px]"}`} />
    </section>
  );
}

export function Brief({ text, n = "01", photo, caption }: { text: string; n?: string; photo?: string; caption?: string }) {
  return (
    <Raccord n={n} index={0} ariaLabel="En bref">
      <p className="label mb-4">En bref</p>
      <p className="reponse-bref max-w-4xl">{text}</p>
      {photo && imgSrc(photo) ? (
        <figure className="mt-12 max-w-5xl">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id={photo} alt={photoAlt(photo)} className="aspect-[16/9] sm:aspect-[21/9]" />
          </div>
          <figcaption className="mt-3 text-[0.78rem] text-ink-faint">{caption ?? photoAlt(photo)}</figcaption>
        </figure>
      ) : null}
    </Raccord>
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

export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <Raccord key={s.h2} n={pad(start + i)} index={start + i - 1} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Raccord>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n, index }: { items: Faq[]; title?: string; n: string; index: number }) {
  return (
    <Raccord n={n} index={index} labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl" data-reveal>{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-accent-deep sm:text-[1.38rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Raccord>
  );
}

export function LocalBlock({ contactType, approach, zone = "Paris 15e", n, index }: { contactType?: string; approach: string; zone?: string; n: string; index: number }) {
  const cell = "border-t border-line pt-5";
  return (
    <Raccord n={n} index={index} labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2" data-reveal>26, boulevard Garibaldi, Paris 15e</h2>
          <p className="mt-6 max-w-lg">{approach}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-ink transition hover:text-accent-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Métro</dt><dd className="mt-3 text-ink">{business.metro}</dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">{zone === "Paris 15e" ? "Paris 15e et communes voisines" : `${zone} et Paris 15e`}</dd></div>
        </dl>
      </div>
    </Raccord>
  );
}

export function SeeAlso({ paths, current, n, index }: { paths?: string[]; current: string; n: string; index: number }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Raccord n={n} index={index} labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[1.95rem] sm:text-[2.6rem]">Voir aussi, sur le même réseau</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.2rem] font-light leading-snug text-ink sm:text-[1.5rem]">{fr(p.h1)}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Raccord>
  );
}

/** Dernier raccord : le point de puisage, où la demande arrive. */
export function CtaBand({ title, text, contactType, n, index }: { title: string; text: string; contactType?: string; n: string; index: number }) {
  return (
    <Raccord n={n} index={index} name="Point de puisage" className="!pb-28 sm:!pb-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-[2.2rem] font-extralight leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4">
          <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </Raccord>
  );
}
