import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section as SectionType } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";
import { Section } from "./Section";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
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
        <span className="num text-[1.2rem] tracking-tight text-ink transition group-hover:text-accent-deep">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Héros des pages intérieures : fil d'Ariane, titre fin, accroche, bouton, photo. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  return (
    <section className="relative">
      <div className="wrap grid pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
        <div className="flex flex-col max-lg:contents lg:col-span-7">
          <div className="max-lg:order-1"><Breadcrumbs items={crumbs} /></div>
          <p className="fade-in mt-12 text-[0.82rem] text-accent max-lg:order-2 sm:mt-16" style={{ ["--d" as string]: "100ms" }}>
            <span className="label !text-accent">{page.kicker}</span>
          </p>
          <h1 className="mt-6 text-[2.5rem] max-lg:order-3 sm:text-[3.5rem] xl:text-[4.2rem]">
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
                  <dd className="mt-1.5 text-[1rem] leading-tight text-ink sm:text-[1.25rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <figure className="mt-10 max-lg:order-4 lg:col-span-5 lg:mt-0">
          <div data-mask className="overflow-hidden rounded-[3px]">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom" position={page.photoPos} />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.78rem] text-ink-faint">
            <span>{page.caption ?? photoAlt(page.photo)}</span>
            <span className="num hidden shrink-0 sm:inline">{page.zone ?? "Paris 20e"}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Section n={n} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-4xl">{text}</p>
    </Section>
  );
}

function SectionBody({ s }: { s: SectionType }) {
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

export function DeepContent({ sections, start = 2 }: { sections: SectionType[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <Section key={s.h2} n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Section>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Section n={n} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl" data-reveal>{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] leading-snug text-ink transition hover:text-accent-deep sm:text-[1.38rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Section>
  );
}

/** Bloc local : l'adresse, l'itinéraire, la note Google en une ligne. L'introduction est propre à chaque zone. */
const approach: Record<string, string> = {
  "Paris 20e": "L'atelier est dans le quartier, à environ 300 mètres de la porte des Lilas, entre la rue Haxo et la rue de Belleville.",
  "Paris 19e": "Le 19e commence de l'autre côté de la rue Haxo : les Buttes-Chaumont et la place des Fêtes sont à quelques minutes.",
  "Paris 11e": "Depuis la rue de Belleville et le boulevard de Ménilmontant, le 11e se rejoint en quelques stations ou à vélo.",
  "Les Lilas": "Les Lilas sont juste de l'autre côté de la porte des Lilas, que l'atelier voit depuis son quartier.",
  "Le Pré-Saint-Gervais": "La commune touche le 19e : on y va par la porte des Lilas ou par la porte du Pré-Saint-Gervais.",
  Bagnolet: "Bagnolet se rejoint depuis le 20e par la rue de Bagnolet et le boulevard Davout.",
};

export function LocalBlock({ contactType, zone = "Paris 20e", n }: { contactType?: string; zone?: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Section n={n} rubrique="Adresse" labelledBy="titre-local">
      <div className="grid gap-14 xl:grid-cols-12">
        <div className="xl:col-span-6">
          <h2 id="titre-local" className="h2" data-reveal>1, villa Gagliardini, Paris 20e</h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 20e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.35rem] text-ink transition hover:text-accent-deep">{business.phoneDisplay}</a></dd></div>
          <div className={cell}><dt className="label">Transports</dt><dd className="mt-3 text-ink">{business.metro}</dd></div>
          <div className={cell}><dt className="label">Secteur</dt><dd className="mt-3 text-ink">Paris 20e, 19e et 11e, Les Lilas, Le Pré-Saint-Gervais, Bagnolet</dd></div>
        </dl>
      </div>
      <p className="mt-12 text-sm text-ink-faint">
        Note de {business.rating.value}/5 sur <a href={business.googleUrl} target="_blank" rel="noopener" className="link-line text-sm">Google</a> ({business.rating.count} avis, relevé d&apos;{business.rating.date}).
      </p>
    </Section>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Section n={n} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[1.95rem] sm:text-[2.6rem]">Les autres métiers et quartiers</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.2rem] leading-snug text-ink sm:text-[1.5rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Dernier appel à l'action, au plus chaud de la page : 21°. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative bg-paper">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="label !text-accent">21° · Confort</p>
          <p className="mt-6 text-[2.3rem] leading-[1.05] tracking-[-0.045em] text-ink sm:text-[3.4rem] lg:text-[4rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg">{text}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-5">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="link-line num text-[1.05rem]" data-track="cta_tel">{business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
