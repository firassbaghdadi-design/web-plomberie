import Link from "next/link";
import { allPages } from "@/lib/pages";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-accent-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
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
        <span className="label">Tél.</span>
        <span className="num text-[1.2rem] font-light tracking-tight text-ink transition group-hover:text-accent-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Une section de la page : numéro et rubrique à gauche, contenu à droite. */
export function Sec({ n, rubrique, children, id, labelledBy, tone }: { n: string; rubrique: string; children: React.ReactNode; id?: string; labelledBy?: string; tone?: "paper" }) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : rubrique} className={tone === "paper" ? "bg-paper" : ""}>
      <div className="wrap grid gap-x-12 py-16 sm:py-24 lg:grid-cols-12">
        <p className="label mb-8 lg:col-span-2 lg:mb-0 lg:pt-3"><span className="num mr-2 text-accent">{n}</span>{rubrique}</p>
        <div className="lg:col-span-10">{children}</div>
      </div>
    </section>
  );
}

/** Héros des pages intérieures : titre fin, filet qui se trace, photo qui se dévoile. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  return (
    <section className="relative">
      <div className="wrap grid pb-14 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="fade-in mt-10 text-[0.82rem] font-medium uppercase tracking-[0.2em] text-accent max-lg:order-2 sm:mt-14">{page.kicker}</p>
          <h1 className="hp hp-load mt-5 text-[2.35rem] max-lg:order-3 sm:text-[3.3rem] xl:text-[3.9rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed max-lg:order-5 sm:text-[1.14rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-10 max-lg:order-6 lg:mb-16" style={{ ["--d" as string]: "400ms" }}>
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
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id={page.photo} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom" position={page.photoPos} />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{page.caption}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 11e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Sec n={n} rubrique="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Sec>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="hp text-[1.85rem] sm:text-[2.5rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <ul className="mt-9 border-b border-line">
          {s.list.map((li, i) => (
            <li key={li.slice(0, 48)} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-line py-4 text-ink">
              <span className="num pt-[0.18em] text-[0.8rem] text-accent">{pad(i + 1)}</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t border-line py-6">
              <span className="num text-[1.8rem] font-extralight leading-none text-accent">{pad(i + 1)}</span>
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
        <Sec key={s.h2} n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Sec>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Sec n={n} rubrique="Questions" labelledBy="titre-faq" tone="paper">
      <h2 id="titre-faq" className="h2 hp max-w-3xl">{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-accent-deep sm:text-[1.36rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Sec>
  );
}

/** La phrase d'approche est propre à chaque arrondissement. */
const approach: Record<string, string> = {
  "Paris 11e": "La maison est au cœur du quartier, rue Saint-Ambroise, entre l'Oberkampf et la rue de la Roquette.",
  "Paris 3e": "Le Marais et le Temple se rejoignent depuis la rue Saint-Ambroise par la ligne 3 en quelques stations.",
  "Paris 4e": "La Bastille est à quelques minutes : le 4e commence juste après la place.",
  "Paris 10e": "Le canal Saint-Martin se rejoint à pied ou en métro par la République.",
  "Paris 12e": "Le faubourg Saint-Antoine mène droit du 11e à Aligre, à Bercy et à la Nation.",
  "Paris 20e": "La ligne 3 relie la rue Saint-Maur à Gambetta et à Ménilmontant.",
  Paris: "Atelier au 35, rue Saint-Ambroise : les compagnons rayonnent sur tous les arrondissements.",
};

export function LocalBlock({ contactType, zone = "Paris 11e", n }: { contactType?: string; zone?: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Sec n={n} rubrique="Adresse" labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2 hp">35, rue Saint-Ambroise, Paris 11e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 11e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] font-light text-ink transition hover:text-accent-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Service client</dt><dd className="mt-3 text-ink">De 8 h à 19 h ; astreinte 24 h/24 pour les syndics sous contrat</dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris, tous arrondissements, et proche Île-de-France</dd></div>
        </dl>
      </div>
    </Sec>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Sec n={n} rubrique="Voir aussi" labelledBy="titre-voir" tone="paper">
      <h2 id="titre-voir" className="hp text-[1.85rem] sm:text-[2.5rem]">Les autres métiers et quartiers de la maison</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.15rem] font-light leading-snug text-ink sm:text-[1.45rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Sec>
  );
}

/** Dernier appel à l'action, avec la ligne d'aplomb. La note Google tient en une ligne légère. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  const g = business.googleRating;
  return (
    <section className="relative">
      <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="label text-accent">Demande de devis</p>
          <p className="hp mt-6 text-[2.2rem] font-extralight leading-[1.05] tracking-[-0.035em] text-ink sm:text-[3.3rem] lg:text-[3.8rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
          <div className="text-[0.8rem] text-ink-faint">Note de {g.value}/5 sur Google ({g.count} avis, relevé du {g.date}). <a href={g.url} target="_blank" rel="noopener" className="underline underline-offset-2">Voir la fiche</a></div>
        </div>
      </div>
    </section>
  );
}
