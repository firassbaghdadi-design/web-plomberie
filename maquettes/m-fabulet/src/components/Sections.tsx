import Link from "next/link";
import { trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { labelFor } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { FermeGable, FermeMark } from "./Ferme";
import { ArrowIcon, PhoneIcon } from "./Icons";
import { Img } from "./Img";

/** Marques de charpentier : les pièces d'une ferme sont numérotées en chiffres romains, on fait de même pour les sections. */
export const roman = (n: number) => ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][n - 1] ?? String(n);

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="cap flex flex-wrap items-center gap-x-3 gap-y-1">
      {items.map((it, i) => (
        <span key={it.name} className="flex items-center gap-3">
          {i > 0 ? <span aria-hidden="true" className="text-line">/</span> : null}
          {it.href ? <Link href={it.href} className="hover:text-tuile-deep">{it.name}</Link> : <span aria-current="page" className="text-ink-soft">{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}

export function SectionHead({ n, label, tone = "bois" }: { n: number; label: string; tone?: "bois" | "creme" }) {
  return (
    <div className={`flex items-center gap-4 ${tone === "bois" ? "text-tuile-deep" : "text-orange-light"}`}>
      <FermeMark className="h-6 w-12" tone={tone} />
      <span className="mark text-[1.15rem]">{roman(n)}</span>
      <span className={`cap ${tone === "bois" ? "" : "text-creme/70"}`}>{label}</span>
    </div>
  );
}

/** Héros des pages intérieures : titre en grand, puis la photo découpée en pignon, avec sa ferme qui s'assemble. */
export function PageHero({ page }: { page: Page }) {
  const contact = `${PATHS.contact}?demande=${page.contactType}`;
  return (
    <section className="relative pt-[6.4rem] sm:pt-[7.5rem]">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: page.crumb }]} />
        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="fade-in cap text-tuile-deep">{page.kicker}</p>
            <h1 className="mt-5 text-[2.6rem] sm:text-[4rem] xl:text-[5rem]">
              <span className="line-up"><span>{page.h1}</span></span>
            </h1>
          </div>
          <div className="fade-in lg:col-span-4" style={{ ["--d" as string]: "250ms" }}>
            <p className="text-[1.08rem] leading-relaxed text-ink-soft">{page.lead}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href={contact} className="btn-bois" data-track="cta_devis_hero">Demander un devis ou une intervention</Link>
              <a href={`tel:${business.phoneTel}`} className="link-u" data-track="cta_tel_hero"><PhoneIcon /> {business.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 sm:mt-14">
        <div className="pignon pignon-photo relative mx-auto h-[56vw] max-h-[40rem] min-h-[17rem] w-full max-w-[110rem]">
          <Img id={page.photo} alt={photoAlt(page.photo)} className="absolute inset-0" priority position={page.photoPos} />
        </div>
        <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-[110rem]"><FermeGable /></div>
      </div>
    </section>
  );
}

export function Brief({ text, n = 1 }: { text: string; n?: number }) {
  return (
    <section aria-label="En bref" className="py-16 sm:py-24">
      <div className="wrap grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-3"><SectionHead n={n} label="En bref" /></div>
        <p className="reponse-bref lg:col-span-9" data-reveal>{text}</p>
      </div>
    </section>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <>
      {s.answer ? <><h2 className="h2 max-w-[22ch]">{s.h2}</h2><p className="answer max-w-[40ch]">{s.answer}</p></> : <h2 className="h2">{s.h2}</h2>}
      {s.paras?.length ? (
        <div className="prose-f mt-8 max-w-[62ch] text-[1.04rem]">
          {s.paras.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      ) : null}
      {s.list?.length ? (
        <div className="mt-9 max-w-[62ch]">
          {s.listTitle ? <p className="cap text-tuile-deep">{s.listTitle}</p> : null}
          <ul className="mt-3 border-t border-line">
            {s.list.map((li) => <li key={li} className="flex gap-4 border-b border-line py-3.5 text-ink"><span aria-hidden="true" className="mt-[0.72rem] h-px w-4 shrink-0 bg-tuile" />{li}</li>)}
          </ul>
        </div>
      ) : null}
      {s.original ? <span className="cap mt-7 block text-ink-faint">Texte repris du site de l&apos;entreprise</span> : null}
    </>
  );
}

/** Les sections questions-réponses : la photo, quand il y en a une, change de côté d'une section à l'autre. */
export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={s.h2} className={`py-16 sm:py-24 ${i % 2 === 0 ? "bg-papier" : ""}`}>
          <div className="wrap">
            <SectionHead n={start + i} label={s.answer ? "Question" : "Repère"} />
            {s.photo ? (
              <div className={`mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7" data-reveal><SectionBody s={s} /></div>
                <div className="lg:col-span-5">
                  <figure className="lg:sticky lg:top-28">
                    <Img id={s.photo} alt={photoAlt(s.photo)} className="aspect-[4/5] w-full rounded-[2px] shadow-photo" />
                    <figcaption className="cap mt-3">{photoAlt(s.photo)}</figcaption>
                  </figure>
                </div>
              </div>
            ) : (
              <div className="mt-10 grid lg:grid-cols-12"><div className="lg:col-span-9 lg:col-start-4" data-reveal><SectionBody s={s} /></div></div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export function FaqList({ items, n, title = "Questions fréquentes" }: { items: Faq[]; n: number; title?: string }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead n={n} label="Questions" />
          <p className="mt-6 text-[2rem] leading-[1.1] text-ink sm:text-[2.6rem]" style={{ fontWeight: 340 }}>{title}</p>
        </div>
        <div className="border-t border-bois/25 lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group border-b border-bois/25"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.2rem] text-ink sm:text-[1.35rem]" style={{ fontWeight: 400 }}>{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-bois/30 text-bois" /></summary><p className="faq-a max-w-[60ch] pb-7 text-[1.04rem]">{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Bloc local : adresse, téléphones, e-mail, horaires connus, itinéraire. */
export function LocalBlock({ n, zone, landmark, contactType = "autre" }: { n: number; zone?: string; landmark?: string; contactType?: string }) {
  return (
    <section className="bg-creme-2 py-16 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead n={n} label="L'atelier" />
          <div className="mt-6 text-[2rem] leading-[1.1] text-ink sm:text-[2.6rem]" style={{ fontWeight: 340 }}>
            {zone && zone !== "La Garenne-Colombes" ? <>De La Garenne-Colombes à {zone}</> : <>Boulevard de la République</>}
          </div>
          {landmark ? <div className="mt-5 text-ink-soft">Toute la commune est desservie, {landmark}.</div> : <div className="mt-5 text-ink-soft">Au cœur de La Garenne-Colombes, et sur le marché de la ville.</div>}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`${PATHS.contact}?demande=${contactType}`} className="btn-bois">Demander un devis ou une intervention</Link>
          </div>
        </div>
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:col-span-7">
          <div className="border-t border-bois/25 pt-4"><dt className="cap">Adresse</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} {business.address.city}<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-u mt-2 text-[0.95rem]">Itinéraire</a></dd></div>
          <div className="border-t border-bois/25 pt-4"><dt className="cap">Téléphone</dt><dd className="mt-2 text-ink"><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap hover:text-tuile-deep" data-track="cta_tel_local">{business.phoneDisplay}</a><br /><a href={`tel:${business.mobileTel}`} className="whitespace-nowrap hover:text-tuile-deep">{business.mobileDisplay}</a> <span className="text-ink-faint">(mobile)</span></dd></div>
          <div className="border-t border-bois/25 pt-4"><dt className="cap">E-mail</dt><dd className="mt-2 text-ink"><a href={`mailto:${business.email}`} className="hover:text-tuile-deep">{business.email}</a></dd></div>
          <div className="border-t border-bois/25 pt-4"><dt className="cap">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
          <div className="border-t border-bois/25 pt-4 sm:col-span-2"><dt className="cap">Garanties</dt><dd className="mt-2 text-ink">Artisan, {business.rm} · Garantie décennale {business.insurer} · Installateur conseil expert Velux · Devis et déplacements gratuits</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, n }: { paths: string[]; n: number }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="wrap">
        <SectionHead n={n} label="Voir aussi" />
        <ul className="mt-8 grid border-t border-bois/25 sm:grid-cols-3">
          {paths.map((p) => (
            <li key={p} className="border-b border-bois/25 sm:border-r sm:last:border-r-0">
              <Link href={p} className="trade flex items-center justify-between gap-4 py-6 text-[1.3rem] text-ink sm:px-6 sm:first:pl-0" style={{ fontWeight: 360 }}>
                {labelFor(p) || "Page"}
                <ArrowIcon className="trade-arrow h-5 w-5 text-tuile" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Les six métiers en lignes éditoriales : au survol, la photo du métier glisse sous la ligne. */
export function TradesList({ zone }: { zone?: string }) {
  return (
    <ol className="border-t border-bois/25">
      {trades.map((t) => (
        <li key={t.path} className="border-b border-bois/25">
          <Link href={t.path} className="trade group relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 overflow-hidden py-7 sm:grid-cols-[5rem_1fr_1.2fr_auto] sm:py-9">
            <span className="trade-photo absolute inset-0 -z-0 hidden sm:block">
              <Img id={t.photo} alt="" className="absolute inset-0" zoom={false} />
              <span className="absolute inset-0 bg-bois-night/55" />
            </span>
            <span className="mark relative text-[1.4rem] text-tuile sm:text-[1.8rem] sm:group-hover:text-orange-light">{t.mark}</span>
            <span className="relative text-[1.6rem] leading-tight text-ink transition-colors sm:text-[2.4rem] sm:group-hover:text-creme" style={{ fontWeight: 340 }}>{t.title}{zone ? <span className="sr-only"> à {zone}</span> : null}</span>
            <span className="relative col-span-3 col-start-2 row-start-2 max-w-[44ch] text-[0.98rem] text-ink-soft transition-colors sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:group-hover:text-creme/85">{t.text}</span>
            <ArrowIcon className="trade-arrow relative h-6 w-6 text-tuile sm:group-hover:text-orange-light" />
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function ZonesList({ current }: { current?: string }) {
  return (
    <ul className="flex flex-wrap gap-x-8 gap-y-3">
      {localPages.filter((p) => p.path !== current).map((p) => (
        <li key={p.path}><Link href={p.path} className="link-u text-[1.15rem]">{p.zone}</Link></li>
      ))}
    </ul>
  );
}

export function CtaBand({ title, contactType = "autre" }: { title: string; contactType?: string }) {
  return (
    <section className="relative overflow-hidden bg-bois-night py-20 text-creme sm:py-28">
      <div className="wrap relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <FermeMark className="h-10 w-20" tone="creme" />
          <div className="mt-8 text-[2.4rem] leading-[1.05] text-creme sm:text-[3.6rem]" style={{ fontWeight: 320 }}>{title}</div>
          <div className="mt-5 max-w-[46ch] text-creme/75">Visite et devis gratuits, sans engagement. Photos bienvenues.</div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
          <Link href={`${PATHS.contact}?demande=${contactType}`} className="btn-creme" data-track="cta_devis_band">Demander un devis ou une intervention</Link>
          <a href={`tel:${business.phoneTel}`} className="btn border border-creme/30 text-creme hover:border-creme" data-track="cta_tel_band"><PhoneIcon /> {business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
