import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { FallingDrop } from "./GlassDrop";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ").replace(/Paris (\d)/g, "Paris $1");
export const pad = (n: number) => String(n).padStart(2, "0");

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.8rem] text-ink-faint">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-cuivre-light">·</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-cuivre-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Un seul bouton d'action, le téléphone à côté en lien fin. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention", dark = false }: { contactType?: string; label?: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
      <Link href={contactHref(contactType)} className={`${dark ? "btn bg-creme text-sauge-deep hover:bg-white" : "btn-primary"} max-sm:!gap-2 max-sm:!px-[1.1rem] max-sm:!text-[0.86rem]`} data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className={`label ${dark ? "!text-cuivre-pale" : ""}`}>Tél.</span>
        <span className={`num font-serif text-[1.3rem] transition ${dark ? "text-creme group-hover:text-cuivre-pale" : "text-sauge-deep group-hover:text-cuivre-deep"}`}>{business.phoneDisplay}</span>
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
  tone?: "creme" | "creme2" | "sauge";
};

const tones = { creme: "bg-creme", creme2: "bg-creme-2", sauge: "bg-sauge-deep text-creme/80" };

/** Une section : un numéro de rubrique en italique cuivre sur un filet, puis le contenu, qui apparaît en fondu. */
export function Station({ n, rubrique, children, id, labelledBy, ariaLabel, className = "", tone = "creme" }: StationProps) {
  const dark = tone === "sauge";
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={ariaLabel} data-station className={`station ${tones[tone]} ${className}`}>
      <div className="wrap py-16 sm:py-24 lg:py-28">
        <p className={`rv flex items-center gap-4 font-serif text-[0.95rem] italic ${dark ? "text-cuivre-pale" : "text-cuivre"}`}>
          <span className="num">N° {n}</span>
          <span aria-hidden="true" className={`h-px w-10 ${dark ? "bg-cuivre-pale/50" : "bg-cuivre/40"}`} />
          <span className={dark ? "text-creme/70" : "text-ink-faint"}>{rubrique}</span>
        </p>
        <div className="rv mt-8 min-w-0 sm:mt-10" style={{ ["--d" as string]: "120ms" }}>{children}</div>
      </div>
    </section>
  );
}

/** La photo en arche, avec la goutte qui tombe de sa clé jusqu'à la ligne d'eau. */
export function HeroArch({ photo, position, caption, side, className = "" }: { photo: string; position?: string; caption: string; side?: string; className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative">
        <span className="arch-frame" aria-hidden="true" />
        <div className="arch relative">
          <Img id={photo} alt={photoAlt(photo)} priority className="aspect-[5/6] sm:aspect-[5/5] lg:aspect-[4/5]" position={position} />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sauge-deep/35 to-transparent" />
        </div>
        <FallingDrop photo={photo} />
      </div>
      <figcaption className="photo-cap">
        <span className="font-serif italic">{caption}</span>
        {side ? <span className="num hidden shrink-0 sm:inline">{side}</span> : null}
      </figcaption>
    </figure>
  );
}

/** Héros des pages intérieures : titre en Lora, photo en arche à droite, la goutte y tombe aussi. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  return (
    <section data-station className="station grain is-in bg-creme">
      <div className="wrap relative grid gap-y-10 pb-16 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-x-16 lg:pb-24">
        <div className="flex flex-col lg:col-span-6 lg:pt-6">
          <Breadcrumbs items={crumbs} />
          <p className="fade-in folio mt-10 sm:mt-14" style={{ ["--d" as string]: "100ms" }}>{page.kicker}</p>
          <h1 className="mt-5 text-[2.55rem] sm:text-[3.7rem] xl:text-[4.6rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="fade-in mt-7 max-w-xl text-lg leading-relaxed sm:text-[1.15rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in mt-9" style={{ ["--d" as string]: "400ms" }}>
            <CtaButtons contactType={page.contactType} />
          </div>
        </div>
        <HeroArch photo={page.photo} position={page.photoPos} caption={page.caption ?? photoAlt(page.photo)} side={page.zone} className="mx-auto w-full max-w-[34rem] lg:col-span-5 lg:col-start-8 lg:mt-2" />
      </div>
      <div className="wrap"><div className="h-px bg-cuivre/35" /></div>
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
      <h2 className="text-[2rem] sm:text-[2.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <ul className="mt-9 border-b border-line">
          {s.list.map((li, i) => (
            <li key={li.slice(0, 48)} className="grid grid-cols-[2.6rem_minmax(0,1fr)] border-t border-line py-4 text-ink">
              <span className="num pt-[0.1em] font-serif italic text-cuivre">{pad(i + 1)}</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/** Photos de mains glissées entre les questions : une toutes les deux sections. */
const handShots = ["ajuste", "outils", "clef", "mains"];

export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => {
        const shot = i % 2 === 1 ? handShots[((i - 1) / 2) % handShots.length] : null;
        return (
          <Station key={s.h2} n={pad(start + i)} rubrique="Question" id={`s${i + 1}`} tone={i % 2 ? "creme2" : "creme"}>
            {shot ? (
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-7"><SectionBody s={s} /></div>
                <figure className="lg:col-span-5">
                  <Img id={shot} alt={photoAlt(shot)} className="aspect-[4/5] rounded-[2px]" />
                  <figcaption className="photo-cap"><span className="font-serif italic">{photoAlt(shot)}</span></figcaption>
                </figure>
              </div>
            ) : (
              <SectionBody s={s} />
            )}
          </Station>
        );
      })}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Station n={n} rubrique="Questions" labelledBy="titre-faq">
      <h2 id="titre-faq" className="h2 max-w-3xl">{fr(title)}</h2>
      <div className="mt-10 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 font-serif text-[1.18rem] leading-snug text-sauge-deep transition hover:text-cuivre-deep sm:text-[1.4rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-cuivre/40 text-cuivre" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
        ))}
      </div>
    </Station>
  );
}

/** Bloc local : l'adresse, avec une scène de quartier. La phrase d'introduction est propre à chaque page. */
export function LocalBlock({ contactType, approach, n }: { contactType?: string; approach: string; n: string }) {
  const cell = "border-t border-line pt-5";
  return (
    <Station n={n} rubrique="Adresse" labelledBy="titre-local" tone="creme2">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="titre-local" className="h2">36, avenue Jean Moulin, <span className="serif-it text-cuivre">Paris 14e</span></h2>
          <p className="mt-6 max-w-lg">{approach}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
            <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap font-serif text-[1.45rem] text-sauge-deep transition hover:text-cuivre-deep">{business.phoneDisplay}</a></dd></div>
            <div className={cell}><dt className="label">Métro</dt><dd className="mt-3 text-ink">{business.metro}</dd></div>
            <div className={cell}><dt className="label">Horaires</dt><dd className="mt-3 text-ink">{business.hours}</dd></div>
          </dl>
        </div>
        <figure className="lg:col-span-6">
          <Img id="cafe" alt={photoAlt("cafe")} className="aspect-[4/3] rounded-[2px] lg:aspect-[5/6]" />
          <figcaption className="photo-cap"><span className="font-serif italic">Le quartier, ses cafés et ses immeubles</span></figcaption>
        </figure>
      </div>
    </Station>
  );
}

export function SeeAlso({ paths, current, n }: { paths?: string[]; current: string; n: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <Station n={n} rubrique="Voir aussi" labelledBy="titre-voir">
      <h2 id="titre-voir" className="text-[2rem] sm:text-[2.6rem]">Les autres métiers et quartiers</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-7">
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block font-serif text-[1.25rem] leading-snug text-sauge-deep sm:text-[1.55rem]">{fr(p.h1)}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-cuivre" />
            </Link>
          </li>
        ))}
      </ul>
    </Station>
  );
}

/** Dernière section : un aplat sauge, l'appel à l'action. */
export function CtaBand({ title, text, contactType, n }: { title: string; text: string; contactType?: string; n: string }) {
  return (
    <Station n={n} rubrique="Devis" ariaLabel="Demander un devis" tone="sauge">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-serif text-[2.4rem] leading-[1.06] tracking-[-0.02em] text-creme sm:text-[3.5rem] lg:text-[4.2rem]">{fr(title)}</p>
          <p className="mt-6 max-w-xl text-lg text-creme/75">{text}</p>
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4">
          <Link href={contactHref(contactType)} className="btn bg-creme text-sauge-deep hover:bg-white" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="num font-serif text-[1.35rem] text-cuivre-pale transition hover:text-creme" data-track="cta_tel">{business.phoneDisplay}</a>
        </div>
      </div>
    </Station>
  );
}
