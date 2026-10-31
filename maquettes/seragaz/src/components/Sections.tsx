import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, reviews, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française) : jamais de ponctuation orpheline en début de ligne. */
export const fr = (t: string) => t.replace(/ ([:;?!])/g, " $1");

/** Numéro et titre de section en petites capitales : chaque libellé est une station de la ligne de chaleur. */
export function Station({ n, children, ideal, className = "", reveal = true }: { n?: string; children?: React.ReactNode; ideal?: boolean; className?: string; reveal?: boolean }) {
  return (
    <p className={`label flex items-center gap-3 ${ideal ? "text-green-deep" : ""} ${className}`} data-station={ideal ? "ideal" : ""} data-reveal={reveal ? "" : undefined}>
      {n ? <span className="num text-blue">{n}</span> : null}
      {n && children ? <span className="h-px w-6 bg-line" aria-hidden="true" /> : null}
      {children ? <span>{children}</span> : null}
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-blue">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CtaButtons({ contactType }: { contactType?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={`${PATHS.contact}${contactType ? `?demande=${contactType}` : ""}`} className="btn-primary" data-track="cta_devis">
        Demander un devis ou une intervention <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Étoiles fines remplies au prorata de la note (4,7 sur 5). */
function Stars() {
  const rating = Number(reviews.ratingText.replace(",", "."));
  const star = "M12 2.8l2.75 5.95 6.5.72-4.84 4.4 1.33 6.4L12 17.05l-5.74 3.22 1.33-6.4-4.84-4.4 6.5-.72z";
  const row = (fill: string, stroke: string) => (
    <span className="flex gap-[3px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[13px] w-[13px] shrink-0" aria-hidden="true"><path d={star} fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round" /></svg>
      ))}
    </span>
  );
  return (
    <span className="relative inline-flex" aria-hidden="true">
      {row("none", "#c3cfdc")}
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(rating / 5) * 100}%` }}>{row("#00519e", "#00519e")}</span>
    </span>
  );
}

/** La note Google, en une seule ligne typographique : aucun avis cité, aucune donnée structurée de note. */
export function Rating({ className = "" }: { className?: string }) {
  return (
    <a href={reviews.url} target="_blank" rel="noopener" className={`group inline-flex items-center gap-4 ${className}`}>
      <span className="num text-[3.4rem] font-extralight leading-none tracking-[-0.04em] text-navy transition group-hover:text-blue">{reviews.ratingText}</span>
      <span className="flex flex-col gap-1.5">
        <Stars />
        <span className="text-[0.82rem] leading-snug text-ink-soft">
          sur 5 · <span className="num">{reviews.count}</span> avis Google
          <span className="block text-ink-faint">relevé du {reviews.observed}</span>
        </span>
      </span>
    </a>
  );
}

/** Héros des pages de contenu : blanc, titre fin, grande photo verticale légendée, repères en chiffres légers. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const photo = page.photo ?? "toits";
  const facts = page.facts ?? [
    { label: "Depuis", value: "1985" },
    { label: "Atelier", value: "Paris 9e" },
    { label: "Partenaire", value: "GRDF" },
  ];
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="label mt-12 text-blue max-lg:order-2 sm:mt-16" data-heat-start>{page.kicker}</p>
          <h1 className="mt-6 max-lg:order-3 text-[2.45rem] sm:text-[3.5rem] xl:text-[4.15rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl max-lg:order-5 text-lg leading-relaxed sm:text-[1.2rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-16" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
          <dl className="mt-14 grid grid-cols-3 border-t border-line max-lg:order-7 lg:mt-auto">
            {facts.map((f) => (
              <div key={f.label} className="pr-3 pt-5">
                <dt className="label">{f.label}</dt>
                <dd className="mt-1.5 text-[1.15rem] font-light leading-tight text-navy sm:text-[1.45rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div data-mask className="overflow-hidden rounded-[4px]">
            <Img id={photo} alt={photoAlt(photo)} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom" />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{photoAlt(photo)}</span>
            <span className="num hidden shrink-0 sm:inline">SERAGAZ · Paris 9e</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref" className="border-t border-line">
      <div className="wrap grid gap-5 py-14 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-3"><Station reveal={false}>En bref</Station></div>
        <p className="reponse-bref max-w-4xl lg:col-span-9">{text}</p>
      </div>
    </section>
  );
}

function SectionBody({ s, n }: { s: Section; n: number }) {
  const id = `s${n}`;
  return (
    <article id={id} className="scroll-mt-28 border-t border-line pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <Station n={String(n).padStart(2, "0")} />
      <h2 className="mt-5 text-[1.95rem] sm:text-[2.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-sg mt-7">{s.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-8">
          {s.listTitle ? <p className="font-medium text-navy">{s.listTitle}</p> : null}
          <ul className="mt-3 border-b border-line">
            {s.list.map((li) => (
              <li key={li.slice(0, 40)} className="flex gap-4 border-t border-line py-4 text-ink">
                <span className="mt-[0.8em] h-px w-4 shrink-0 bg-green" aria-hidden="true" />
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
              <span className="num text-[2rem] font-extralight leading-none text-blue">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[1.15rem] font-medium text-navy">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-sg mt-7">{s.after.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div> : null}
      {s.aside ? (
        <aside className="mt-9 flex items-center gap-5 border-y border-line py-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue/30 text-[0.95rem] font-light tracking-wide text-blue">JF</span>
          <span><span className="block font-medium text-navy">{s.aside.title}</span><span>{s.aside.text}</span></span>
        </aside>
      ) : null}
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
                  <a href={`#s${i + 1}`} className="group flex gap-4 py-2 text-[0.92rem] leading-snug text-ink-soft transition hover:text-blue">
                    <span className="num text-ink-faint transition group-hover:text-blue">{String(i + 1).padStart(2, "0")}</span>
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
          <Station>Questions fréquentes</Station>
          <h2 id="titre-faq" className="h2 mt-5" data-reveal>{fr(title)}</h2>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.2rem] font-light leading-snug text-navy transition hover:text-blue sm:text-[1.45rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-blue" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
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
          <Station>Rue de Dunkerque, Paris 9e</Station>
          <h2 id="titre-local" className="h2 mt-5" data-reveal>SERAGAZ, 69 rue de Dunkerque</h2>
          {zone ? <p className="mt-6">Pour {zone}, l'équipe part de ses locaux du 9e arrondissement.</p> : null}
          <p className="mt-3">Tout Paris et la petite couronne, {business.radius}.</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-navy transition hover:text-blue">{business.phoneDisplay}</a><p className="mt-1 text-sm text-ink-faint">{business.phoneHours}</p></dd></div>
          <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-ink">{business.hours}</dd></div>
          <div className={cell}><dt className="label">E-mail</dt><dd className="mt-3"><a href={`mailto:${business.email}`} className="text-ink transition hover:text-blue">{business.email}</a><p className="mt-1 text-sm text-ink-faint"><a href={reviews.url} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:text-blue">Note de {reviews.ratingText}/5 sur Google</a> ({reviews.count} avis, relevé du {reviews.observed})</p></dd></div>
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
        <Station>Voir aussi</Station>
        <h2 id="titre-voir" className="mt-5 text-[1.9rem] sm:text-[2.5rem]">Autres prestations de SERAGAZ</h2>
        <ul className="mt-10 border-t border-line">
          {pages.map((p) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
                <span className="row-title block">
                  <span className="label block">{p.kicker}</span>
                  <span className="mt-2 block text-[1.25rem] font-light leading-snug text-navy sm:text-[1.6rem]">{p.h1}</span>
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

/** Dernier appel à l'action : la ligne de chaleur s'y termine. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="border-t border-line">
      <div className="wrap grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-[2.4rem] font-extralight leading-[1.05] tracking-[-0.035em] text-navy sm:text-[3.6rem] lg:text-[4.4rem]" data-heat-end>{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end">
          <Link href={`${PATHS.contact}${contactType ? `?demande=${contactType}` : ""}`} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
