import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section as SectionType } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";
import { Section, heat } from "./Section";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="meta-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {it.href ? <Link href={it.href} className="transition-colors hover:text-heat-deep">{it.name}</Link> : <span aria-current="page" className="text-ink">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Un bouton rectangulaire noir, le téléphone à côté en grands chiffres. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention", light = false }: { contactType?: string; label?: string; light?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={contactHref(contactType)} className={light ? "btn bg-white text-ink hover:bg-heat hover:text-ink" : "btn-primary"} data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className={`num whitespace-nowrap text-[1.45rem] font-semibold tracking-[-0.04em] transition-colors ${light ? "text-white hover:text-heat" : "text-ink hover:text-heat-deep"}`} data-track="cta_tel">
        {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Code postal des communes voisines, pour le grand chiffre des pages locales. */
const POSTCODES: Record<string, string> = { "Les Lilas": "93260", "Le Pré-Saint-Gervais": "93310", Bagnolet: "93170" };

/** Le grand chiffre d'une page : la température pour un métier (16° ou 21°), l'arrondissement ou le code postal pour une zone. */
function pageFigure(page: Page) {
  const deg = page.kicker.match(/^(\d+)°/);
  if (deg) return { main: deg[1], suffix: "°", heat: true };
  const arr = page.zone?.match(/^Paris (\d+)e$/);
  if (arr) return { main: arr[1], suffix: "e", heat: false };
  return { main: POSTCODES[page.zone ?? ""] ?? "75020", suffix: "", heat: false };
}

/** Héros des pages intérieures : une affiche. Le grand chiffre, une petite photo serrée, puis le titre et l'accroche. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  const fig = pageFigure(page);
  const long = fig.main.length > 2;
  return (
    <section className="relative">
      <div className="wrap">
        <div className="cols items-center border-b border-ink py-3">
          <div className="col-span-4 md:col-span-4 lg:col-span-6"><Breadcrumbs items={crumbs} /></div>
          <p className="meta hidden md:col-span-2 md:block lg:col-span-3">{page.kicker}</p>
          <p className="meta hidden lg:col-span-3 lg:block lg:text-right">Depuis 2007 · 1, villa Gagliardini</p>
        </div>

        <div className="cols items-end pt-6 lg:pt-8">
          <p className={`col-span-3 md:col-span-4 lg:col-span-8 ${long ? "text-[19vw] md:text-[17vw] lg:text-[clamp(8rem,15vw,15rem)]" : "text-[38vw] md:text-[30vw] lg:text-[clamp(11rem,23vw,22rem)]"}`} aria-hidden="true">
            <span className="rise"><span className="giant block">{fig.main}<span className={fig.heat ? "deg" : "text-[0.45em] tracking-[-0.04em]"}>{fig.suffix}</span></span></span>
          </p>
          <figure className="col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-11">
            <Img id={page.photo} alt={photoAlt(page.photo)} priority className="aspect-square" position={page.photoPos} />
            <figcaption className="meta-faint mt-2 hidden md:block">Fig. 1 — {page.caption ?? photoAlt(page.photo)}</figcaption>
          </figure>
        </div>

        <div className="draw mt-6 h-1 bg-ink" aria-hidden="true" />

        <div className="cols pb-16 pt-6 lg:pb-24">
          <h1 className="col-span-4 text-[2.55rem] md:col-span-6 sm:text-[3.6rem] lg:col-span-9 lg:text-[clamp(3.6rem,5.4vw,5.8rem)]">{fr(page.h1)}</h1>
          <p className="fade-in col-span-4 mt-8 text-[1.15rem] leading-snug md:col-span-4 lg:col-span-5 lg:mt-10 lg:text-[1.3rem]" style={{ ["--d" as string]: "200ms" }}>{fr(page.lead)}</p>
          <div className="fade-in col-span-4 mt-8 md:col-span-6 lg:col-span-6 lg:col-start-7 lg:mt-10 lg:self-end" style={{ ["--d" as string]: "350ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
          {facts.length ? (
            <dl className="col-span-4 mt-14 grid grid-cols-3 border-t-2 border-ink md:col-span-6 lg:col-span-12">
              {facts.map((f) => (
                <div key={f.label} className="pr-3 pt-3">
                  <dt className="meta-faint">{f.label}</dt>
                  <dd className="mt-1 text-[1.05rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.6rem] lg:text-[2.2rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Brief({ text, t = "16,0" }: { text: string; t?: string }) {
  return (
    <Section t={t} rubrique="En bref" ariaLabel="En bref">
      <p className="reponse-bref max-w-[52rem]">{text}</p>
    </Section>
  );
}

function SectionBody({ s }: { s: SectionType }) {
  return (
    <article className="max-w-[54rem]">
      <h2 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7 max-w-[42rem] text-ink-soft">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-10">
          {s.listTitle ? <p className="meta mb-2">{s.listTitle}</p> : null}
          <ul className="border-t-2 border-ink">
            {s.list.map((li, i) => (
              <li key={li.slice(0, 48)} className="grid grid-cols-[3rem_minmax(0,1fr)] border-b border-ink/25 py-3.5 text-[1.05rem] font-medium tracking-[-0.01em]">
                <span className="num text-heat-deep">{pad(i + 1)}</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid border-t-2 border-ink sm:grid-cols-2 xl:grid-cols-4">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-b border-ink/25 py-5 sm:pr-6 xl:border-b-0">
              <span className="giant block text-[4.2rem] text-ink">{pad(i + 1)}</span>
              <p className="mt-4 text-[1.15rem] font-semibold tracking-[-0.02em]">{st.t}</p>
              <p className="mt-2 text-[0.98rem] text-ink-soft">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-mt mt-7 max-w-[42rem] text-ink-soft">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

/** Les sections de fond. Leur température est donnée par l'appelant : elle monte de section en section. */
export function DeepContent({ sections, temp }: { sections: SectionType[]; temp: (i: number) => string }) {
  return (
    <>
      {sections.map((s, i) => (
        <Section key={s.h2} t={temp(i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`}>
          <SectionBody s={s} />
        </Section>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", t }: { items: Faq[]; title?: string; t: string }) {
  return (
    <Section t={t} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-[48rem]" data-reveal>{fr(title)}</h2>
      <div className="mt-10 border-t-2 border-ink">
        {items.map((f) => (
          <details key={f.q} className="faq border-b border-ink/25 py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.2rem] font-semibold leading-snug tracking-[-0.02em] transition-colors hover:text-heat-deep sm:text-[1.6rem]">{f.q}<span aria-hidden="true" className="faq-sign num -mt-1 shrink-0 text-[2rem] font-normal leading-none">+</span></summary><p className="faq-a mt-4 max-w-[42rem] text-ink-soft">{f.a}</p></details>
        ))}
      </div>
    </Section>
  );
}

/** Bloc local : l'adresse en très grand, puis les coordonnées en cellules. L'introduction est propre à chaque zone. */
const approach: Record<string, string> = {
  "Paris 20e": "L'atelier est dans le quartier, à environ 300 mètres de la porte des Lilas, entre la rue Haxo et la rue de Belleville.",
  "Paris 19e": "Le 19e commence de l'autre côté de la rue Haxo : les Buttes-Chaumont et la place des Fêtes sont à quelques minutes.",
  "Paris 11e": "Depuis la rue de Belleville et le boulevard de Ménilmontant, le 11e se rejoint en quelques stations ou à vélo.",
  "Les Lilas": "Les Lilas sont juste de l'autre côté de la porte des Lilas, que l'atelier voit depuis son quartier.",
  "Le Pré-Saint-Gervais": "La commune touche le 19e : on y va par la porte des Lilas ou par la porte du Pré-Saint-Gervais.",
  Bagnolet: "Bagnolet se rejoint depuis le 20e par la rue de Bagnolet et le boulevard Davout.",
};

export function LocalBlock({ contactType, zone = "Paris 20e", intro, t }: { contactType?: string; zone?: string; intro?: string; t: string }) {
  const cell = "border-t-2 border-ink pt-3";
  return (
    <Section t={t} rubrique="Adresse" labelledBy="titre-local">
      <h2 id="titre-local" className="text-[2.6rem] sm:text-[4rem] lg:text-[clamp(4rem,6vw,6.4rem)]" data-reveal>1, villa Gagliardini, Paris 20e</h2>
      <p className="mt-6 max-w-[38rem] text-[1.1rem] text-ink-soft">{intro ?? approach[zone] ?? approach["Paris 20e"]}</p>
      <div className="mt-10"><CtaButtons contactType={contactType} /></div>
      <dl className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
        <div className={cell}><dt className="meta-faint">Adresse</dt><dd className="mt-2 font-medium">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
        <div className={cell}><dt className="meta-faint">Téléphone</dt><dd className="mt-2"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.5rem] font-semibold tracking-[-0.04em] transition-colors hover:text-heat-deep">{business.phoneDisplay}</a></dd></div>
        <div className={cell}><dt className="meta-faint">Transports</dt><dd className="mt-2 font-medium">{business.metro}</dd></div>
        <div className={cell}><dt className="meta-faint">Secteur</dt><dd className="mt-2 font-medium">Paris 20e, 19e et 11e, Les Lilas, Le Pré-Saint-Gervais, Bagnolet</dd></div>
      </dl>
      <p className="meta-faint mt-10">
        Note de {business.rating.value}/5 sur <a href={business.googleUrl} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-heat-deep">Google</a> ({business.rating.count} avis, relevé d&apos;{business.rating.date}).
      </p>
    </Section>
  );
}

export function SeeAlso({ paths, current, t }: { paths?: string[]; current: string; t: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Section t={t} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[2.2rem] sm:text-[3rem]">Les autres métiers et quartiers</h2>
      <ul className="mt-10 border-t-2 border-ink">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-ink/25">
            <Link href={p.path} className="row-invert flex items-center justify-between gap-6 px-1 py-5">
              <span className="block">
                <span className="meta-faint row-soft block">{p.kicker}</span>
                <span className="row-ink mt-1 block text-[1.25rem] font-semibold leading-snug tracking-[-0.025em] sm:text-[1.7rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-6 w-6 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Dernier appel à l'action, au plus chaud de la page : 21°, en très grand, sur noir. */
export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative bg-ink text-white">
      <div className="wrap">
        <div className="cols items-end pb-16 pt-10 lg:pb-20 lg:pt-12">
          <p className="col-span-4 text-[56vw] md:col-span-6 md:text-[44vw] lg:col-span-7 lg:text-[clamp(14rem,30vw,29rem)]" aria-hidden="true">
            <span className="giant block">21<span className="deg">°</span></span>
          </p>
          <div className="col-span-4 mt-10 md:col-span-6 lg:col-span-5 lg:mt-0 lg:pb-4">
            <p className="meta border-t border-white/30 pt-2 text-white/70">21,0° · Le confort, et l&apos;atelier au bout du fil</p>
            <p className="mt-6 text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[clamp(2.4rem,3.2vw,3.2rem)]">{fr(title)}</p>
            <p className="mt-5 max-w-[30rem] text-[1.05rem] text-white/75">{text}</p>
            <div className="mt-9"><CtaButtons contactType={contactType} label="Demander un devis gratuit" light /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { heat };
