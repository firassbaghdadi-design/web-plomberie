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
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Une rubrique de la page : son numéro est lu sur deux petits rouleaux, repris par le cadran de l'en-tête. */
export function Folio({ n, rubrique, id, labelledBy, ariaLabel, tone, children }: { n: string; rubrique: string; id?: string; labelledBy?: string; ariaLabel?: string; tone?: "paper"; children: React.ReactNode }) {
  return (
    <section id={id} data-folio={n} data-rubrique={rubrique} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : ariaLabel ?? rubrique} className={`py-16 sm:py-24 ${tone === "paper" ? "bg-paper" : ""}`}>
      <div className="wrap">
        <div className="mb-10 flex items-center gap-4 sm:mb-14">
          <Drums value={n} size="1.05rem" />
          <span className="label">{rubrique}</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-[#c4c8cf]">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-accent">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action, le téléphone à côté en lien fin. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label">Urgence</span>
        <span className="num text-[1.2rem] tracking-tight text-ink transition group-hover:text-accent">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Héros des pages intérieures : titre, accroche, bouton, repères en chiffres, photo qui se dévoile. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  const photo = photoFor(page.photo);
  return (
    <section className="relative">
      <div className="wrap grid pb-14 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="fade-in mt-10 flex items-center gap-3 max-lg:order-2 sm:mt-14"><span className="h-px w-8 bg-accent" aria-hidden="true" /><span className="label !text-accent">{page.kicker}</span></p>
          <h1 className="mt-6 text-[2.45rem] max-lg:order-3 sm:text-[3.4rem] xl:text-[4.1rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.16rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-16" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
          {facts.length ? (
            <dl className="mt-14 grid grid-cols-3 border-t border-line max-lg:order-7 lg:mt-auto">
              {facts.map((f) => (
                <div key={f.label} className="pr-3 pt-5">
                  <dt className="label">{f.label}</dt>
                  <dd className="num mt-1.5 text-[1.15rem] leading-tight tracking-tight text-ink sm:text-[1.5rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div data-mask className="overflow-hidden rounded-[4px]">
            <Img photo={photo} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom" />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{page.caption ?? photo.alt}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 16e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Folio n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Folio>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="h2">{fr(s.h2)}</h2>
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
              <span className="num text-[1.9rem] leading-none text-accent">{pad(i + 1)}</span>
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
        <Folio key={s.h2} n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Folio>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Folio n={n} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl" data-reveal>{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] leading-snug text-ink transition hover:text-accent sm:text-[1.35rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Folio>
  );
}

/** Bloc local : l'adresse, le téléphone d'urgence et celui du bureau. La phrase d'introduction est propre à chaque zone. */
export function LocalBlock({ contactType, approach, n }: { contactType?: string; approach: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Folio n={n} rubrique="Adresse" labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2" data-reveal>3, rue Gros, Paris 16e</h2>
          <p className="mt-6 max-w-lg">{approach}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Urgence 24h/24</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] text-ink transition hover:text-accent">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Bureau</dt><dd className="mt-3"><a href={`tel:${business.phoneOfficeTel}`} className="num whitespace-nowrap text-[1.2rem] text-ink transition hover:text-accent">{business.phoneOfficeDisplay}</a><br /><a href={`mailto:${business.email}`} className="mt-1 inline-block text-sm text-ink-soft transition hover:text-accent">{business.email}</a></dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris 16e et arrondissements voisins : 8e, 17e, 7e, 15e, Levallois-Perret</dd></div>
        </dl>
      </div>
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
                <span className="mt-2 block text-[1.2rem] leading-snug text-ink sm:text-[1.5rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
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
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="titre-reputation" className="h2" data-reveal>Une réputation qui se lit sur le compteur.</h2>
          <p className="mt-6 max-w-xl" data-reveal>{compact ? "Des clients parisiens, particuliers et professionnels, ont noté l'entreprise sur Google." : "Chaque intervention laisse une trace : celle des clients qui prennent le temps de la noter. Voici le relevé de la fiche Google de l'entreprise, tel qu'il se présente aujourd'hui."}</p>
          <p className="mt-8 text-sm text-ink-faint">
            Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date}).{" "}
            <a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line">Voir la fiche Google</a>
          </p>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-end gap-x-8 gap-y-10 sm:gap-x-12 lg:col-span-6">
          <div>
            <p className="label mb-4">Avis Google</p>
            <Drums value={String(reputation.reviews)} size="clamp(3.2rem, 9vw, 5.2rem)" unit="avis" />
          </div>
          <div className="hidden sm:block" />
          <div>
            <p className="label mb-4">Note sur 5</p>
            <Drums value={reputation.rating} size="clamp(3.2rem, 9vw, 5.2rem)" decimals={1} unit="/ 5" />
          </div>
          <Gauge value={reputation.ratingNum} max={5} className="h-24 w-24 sm:h-32 sm:w-32" label={`Cadran de la note Google : ${reputation.rating} sur 5`} />
        </div>
      </div>
    </Folio>
  );
}

/** Dernier appel à l'action. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative bg-paper">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="label !text-accent">Demande de devis</p>
          <p className="mt-6 text-[2.2rem] leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.2rem] lg:text-[3.8rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-5">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">Urgence 24h/24 : {business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
