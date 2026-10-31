import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoFor } from "@/lib/photos";
import { PATHS, business, reputation, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { Drums } from "./Drums";
import { Gauge } from "./Gauge";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

const ROMAN: [number, string][] = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
export function roman(n: number) {
  let out = "";
  for (const [v, s] of ROMAN) while (n >= v) { out += s; n -= v; }
  return out;
}

/**
 * Une rubrique de la revue : à gauche, une marge où le numéro de chapitre (chiffre romain, italique de laiton) et la
 * rubrique restent accrochés pendant la lecture ; à droite, le texte. `wide` libère toute la largeur pour les planches.
 */
export function Folio({ n, rubrique, id, labelledBy, ariaLabel, tone, wide, children }: { n: string; rubrique: string; id?: string; labelledBy?: string; ariaLabel?: string; tone?: "paper"; wide?: boolean; children: React.ReactNode }) {
  const marker = (
    <div className="flex items-baseline gap-4 lg:block">
      <span className="serif block text-[2.4rem] font-light italic leading-none text-brass lg:text-[3.4rem]">{roman(Number(n))}.</span>
      <span className="label lg:mt-4 lg:block">{rubrique}</span>
    </div>
  );
  return (
    <section id={id} data-folio={n} data-rubrique={rubrique} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : ariaLabel ?? rubrique} className={`border-t border-line py-20 sm:py-28 lg:py-32 ${tone === "paper" ? "bg-coal" : ""}`}>
      {wide ? (
        <div className="wrap">
          <div className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-6 sm:mb-16">{marker}</div>
          {children}
        </div>
      ) : (
        <div className="wrap lg:grid lg:grid-cols-12 lg:gap-x-10">
          <div className="mb-10 lg:col-span-3 lg:mb-0"><div className="lg:sticky lg:top-32">{marker}</div></div>
          <div className="min-w-0 lg:col-span-9">{children}</div>
        </div>
      )}
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.72rem] uppercase tracking-[0.18em] text-fg-faint">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-3">
            {i > 0 ? <span aria-hidden="true" className="text-brass">·</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-brass-light">{it.name}</Link> : <span aria-current="page" className="text-fg-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action en laiton, le numéro d'urgence à côté en grands chiffres fins. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
      <Link href={contactHref(contactType)} className="btn-primary max-sm:w-full max-sm:whitespace-normal max-sm:text-center" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Urgence 24h/24</span>
        <span className="serif num text-[1.6rem] font-light text-fg transition group-hover:text-brass-light">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/**
 * Héros des pages intérieures : une planche photo plein cadre, étalonnée sombre ; le titre posé en bas à gauche comme
 * une couverture de revue, l'accroche et le bouton dessous, les repères chiffrés en bandeau.
 */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  const photo = photoFor(page.photo);
  return (
    <section className="relative isolate -mt-[var(--head-h)] overflow-hidden">
      <Img photo={photo} priority tone="grade-deep" className="absolute inset-0 -z-10" imgClassName="slow-zoom" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(12,13,15,.7)_0%,rgba(12,13,15,.2)_35%,rgba(12,13,15,.85)_78%,#0c0d0f_100%)]" aria-hidden="true" />
      <div className="wrap flex min-h-[88svh] flex-col pb-12 pt-[calc(var(--head-h)+1.5rem)] lg:min-h-[92svh] lg:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className="mt-auto pt-24">
          <p className="fade-in flex items-center gap-4"><span className="h-px w-10 bg-brass" aria-hidden="true" /><span className="label !text-brass-light">{page.kicker}</span></p>
          <h1 className="mt-6 max-w-[16ch] text-[2.9rem] leading-[0.98] sm:text-[4.4rem] xl:text-[5.8rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <div className="mt-10 grid gap-10 border-t border-line-strong/60 pt-8 lg:grid-cols-12 lg:items-end">
            <p className="fade-in text-[1.08rem] leading-relaxed text-fg-soft lg:col-span-5" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
            <div className="fade-in lg:col-span-7 lg:flex lg:justify-end" style={{ ["--d" as string]: "400ms" }}>
              <CtaButtons contactType={page.contactType} />
            </div>
          </div>
        </div>
      </div>
      {facts.length ? (
        <div className="border-y border-line bg-bg/80 backdrop-blur">
          <dl className="wrap grid grid-cols-3 divide-x divide-line">
            {facts.map((f) => (
              <div key={f.label} className="px-3 py-6 first:pl-0 sm:px-8">
                <dt className="label">{f.label}</dt>
                <dd className="serif num mt-2 text-[1.3rem] font-light leading-tight text-fg sm:text-[2rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      <p className="sr-only">{page.caption ?? photo.alt}</p>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Folio n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref dropcap max-w-4xl">{text}</p>
    </Folio>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="h2">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-8">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-10">
          {s.listTitle ? <p className="serif text-[1.35rem] italic text-fg">{s.listTitle}</p> : null}
          <ul className="mt-3 border-b border-line">
            {s.list.map((li, i) => (
              <li key={li.slice(0, 48)} className="grid grid-cols-[3rem_minmax(0,1fr)] border-t border-line py-4 text-fg">
                <span className="serif pt-[0.05em] text-[1.05rem] italic text-brass">{roman(i + 1)}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="bg-bg p-7">
              <span className="serif num text-[3rem] font-light leading-none text-brass">{pad(i + 1)}</span>
              <p className="serif mt-5 text-[1.45rem] text-fg">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-mt mt-8">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <Folio key={s.h2} n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`} tone={i % 2 ? "paper" : undefined}>
          <SectionBody s={s} />
        </Folio>
      ))}
    </>
  );
}

/** Questions : le titre tient la colonne de gauche, les réponses se déplient à droite. */
export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Folio n={n} rubrique="Questions" labelledBy="titre-faq" wide>
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 id="titre-faq" className="h2 lg:col-span-5" data-reveal>{fr(title)}</h2>
        <div className="border-t border-line lg:col-span-7">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-line py-7"><summary className="serif flex cursor-pointer list-none items-start justify-between gap-8 text-[1.35rem] leading-snug text-fg transition hover:text-brass-light sm:text-[1.6rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-8 w-8 shrink-0 rounded-full border border-line-strong text-brass" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
          ))}
        </div>
      </div>
    </Folio>
  );
}

/** Bloc local : l'adresse, le téléphone d'urgence et celui du bureau. La phrase d'introduction est propre à chaque zone. */
export function LocalBlock({ contactType, approach, n }: { contactType?: string; approach: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Folio n={n} rubrique="Adresse" labelledBy="titre-local" tone="paper">
      <h2 id="titre-local" className="h2" data-reveal>3, rue Gros, <em>Paris 16e</em></h2>
      <p className="mt-6 max-w-xl">{approach}</p>
      <dl className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 xl:grid-cols-4">
        <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-fg">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 inline-block text-sm">Itinéraire</a></dd></div>
        <div className={cell}><dt className="label">Urgence 24h/24</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="serif num whitespace-nowrap text-[1.7rem] font-light text-fg transition hover:text-brass-light">{business.phoneDisplay}</a></dd></div>
        <div className={cell}><dt className="label">Bureau</dt><dd className="mt-3"><a href={`tel:${business.phoneOfficeTel}`} className="serif num whitespace-nowrap text-[1.5rem] font-light text-fg transition hover:text-brass-light">{business.phoneOfficeDisplay}</a><br /><a href={`mailto:${business.email}`} className="mt-1 inline-block text-sm text-fg-soft transition hover:text-brass-light">{business.email}</a></dd></div>
        <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-fg">Paris 16e et arrondissements voisins : 8e, 17e, 7e, 15e, Levallois-Perret</dd></div>
      </dl>
      <div className="mt-14"><CtaButtons contactType={contactType} /></div>
    </Folio>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Folio n={n} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="h2">Les autres métiers et quartiers</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block transition">
                <span className="label block">{p.kicker}</span>
                <span className="serif mt-2 block text-[1.5rem] leading-snug text-fg sm:text-[2rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-fg-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Folio>
  );
}

/** La réputation, lue sur le compteur : le nombre d'avis sur les rouleaux, la note sur un cadran. Aucun avis cité. */
export function Reputation({ n = "05", compact = false }: { n?: string; compact?: boolean }) {
  return (
    <Folio n={n} rubrique="Réputation" labelledBy="titre-reputation" tone="paper">
      <h2 id="titre-reputation" className="h2 max-w-3xl" data-reveal>Une réputation qui se lit <em>sur le compteur.</em></h2>
      <p className="mt-6 max-w-xl" data-reveal>{compact ? "Des clients parisiens, particuliers et professionnels, ont noté l'entreprise sur Google." : "Chaque intervention laisse une trace : celle des clients qui prennent le temps de la noter. Voici le relevé de la fiche Google de l'entreprise, tel qu'il se présente aujourd'hui."}</p>
      <div className="mt-14 grid items-end gap-10 border-t border-line pt-10 sm:grid-cols-[auto_auto_1fr] sm:gap-14">
        <div>
          <p className="label mb-5">Avis Google</p>
          <Drums value={String(reputation.reviews)} size="clamp(3rem, 8vw, 4.6rem)" unit="avis" />
        </div>
        <div>
          <p className="label mb-5">Note sur 5</p>
          <Drums value={reputation.rating} size="clamp(3rem, 8vw, 4.6rem)" decimals={1} unit="/ 5" />
        </div>
        <Gauge value={reputation.ratingNum} max={5} className="h-28 w-28 sm:ml-auto sm:h-36 sm:w-36" label={`Cadran de la note Google : ${reputation.rating} sur 5`} />
      </div>
      <p className="mt-10 text-sm text-fg-faint">
        Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date}).{" "}
        <a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line">Voir la fiche Google</a>
      </p>
    </Folio>
  );
}

/** Dernier appel : une phrase en très grand italique, le bouton de laiton, le compteur en filigrane. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="meter-glow pointer-events-none absolute -right-[20vw] top-1/2 h-[70vw] w-[70vw] -translate-y-1/2 opacity-60" aria-hidden="true" />
      <div className="wrap relative py-28 sm:py-40">
        <p className="label !text-brass-light">Demande de devis</p>
        <p className="serif mt-8 max-w-[18ch] text-[3rem] font-light italic leading-[0.98] text-fg sm:text-[5rem] lg:text-[7rem]">{fr(title)}</p>
        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:items-center">
          <p className="max-w-xl text-lg lg:col-span-6">{text}</p>
          <div className="flex flex-col items-start gap-5 lg:col-span-6 lg:items-end">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">Urgence 24h/24 : {business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
