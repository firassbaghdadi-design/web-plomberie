import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ").replace(/Paris (\d)/g, "Paris\u00a0$1");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-eau-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
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
      <Link href={contactHref(contactType)} className="btn-primary max-sm:!gap-2 max-sm:!px-[1.1rem] max-sm:!text-[0.86rem]" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Tél.</span>
        <span className="num text-[1.2rem] font-light tracking-tight text-ink transition group-hover:text-eau-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

type StationProps = {
  n: string;
  rubrique: string;
  children: React.ReactNode;
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
  className?: string;
};

/**
 * Une station du rail. Le point sur le rail est le lieu d'arrivée de la goutte ; `.wave` (la section entière) se découvre
 * dans le sillage de l'onde. Sans JavaScript, tout reste visible.
 */
export function Station({ n, rubrique, children, id, labelledBy, ariaLabel, className = "" }: StationProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} data-station className={`station ${className}`}>
      <span className="station-pt" aria-hidden="true" />
      <div className="wave">
        <div className="wrap tx grid lg:grid-cols-[9.5rem_minmax(0,1fr)] lg:gap-x-10 xl:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="folio pt-[2.55rem] lg:pt-[6rem]">
            <span className="num">{n}</span>
            <span className="ml-3 text-ink-faint">{rubrique}</span>
          </p>
          <div className="min-w-0 pb-16 pt-5 sm:pb-24 lg:pt-[5.2rem]">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** Héros des pages intérieures : titre fin, photo ouverte par l'onde de la première goutte. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  return (
    <section data-station className="station" style={{ ["--dot-y" as string]: "2.55rem" }}>
      <span className="station-pt" aria-hidden="true" />
      <div className="wrap tx grid pb-14 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="fade-in folio mt-10 max-lg:order-2 sm:mt-14" style={{ ["--d" as string]: "100ms" }}>{page.kicker}</p>
          <h1 className="mt-5 text-[2.5rem] max-lg:order-3 sm:text-[3.6rem] xl:text-[4.4rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-7 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.14rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-9 max-lg:order-6" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div className="hero-photo overflow-hidden rounded-[3px]">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" position={page.photoPos} />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{page.caption ?? photoAlt(page.photo)}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Station n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Station>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="text-[1.95rem] sm:text-[2.5rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <ul className="mt-9 border-b border-line">
          {s.list.map((li, i) => (
            <li key={li.slice(0, 48)} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-line py-4 text-ink">
              <span className="num pt-[0.18em] text-[0.8rem] text-eau">{pad(i + 1)}</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/** Chaque section question-réponse est une station : la goutte y tombe, l'onde la découvre. */
export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <Station key={s.h2} n={pad(start + i)} rubrique="Question" id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Station>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Station n={n} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl">{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-eau-deep sm:text-[1.36rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-eau" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Station>
  );
}

/** Bloc local : l'adresse. La phrase d'introduction est propre à chaque page. */
export function LocalBlock({ contactType, approach, n }: { contactType?: string; approach: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Station n={n} rubrique="Adresse" labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2">36, avenue Jean Moulin, Paris 14e</h2>
          <p className="mt-6 max-w-lg">{approach}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-ink transition hover:text-eau-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Métro</dt><dd className="mt-3 text-ink">{business.metro}</dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-ink">{business.hours}</dd></div>
        </dl>
      </div>
    </Station>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Station n={n} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[1.95rem] sm:text-[2.5rem]">Les autres métiers et quartiers</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.2rem] font-light leading-snug text-ink sm:text-[1.45rem]">{fr(p.h1)}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Station>
  );
}

/** Dernière station : la goutte tombe une dernière fois, puis l'appel à l'action. */
export function CtaBand({ title, text, contactType, n }: { title: string; text: string; contactType?: string; n: string }) {
  return (
    <Station n={n} rubrique="Devis" ariaLabel="Demander un devis">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-[2.3rem] font-extralight leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4">
          <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </Station>
  );
}
