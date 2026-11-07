import Link from "next/link";
import { trades } from "@/lib/content";
import { localPages } from "@/lib/local";
import { labelFor } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { FermeMark } from "./Ferme";
import { ArrowIcon, PhoneIcon } from "./Icons";
import { Img } from "./Img";

/** Marques de charpentier : les pièces d'une ferme sont numérotées en chiffres romains, les chapitres aussi. */
export const roman = (n: number) => ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n - 1] ?? String(n);

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="cap flex flex-wrap items-center gap-x-3 gap-y-1">
      {items.map((it, i) => (
        <span key={it.name} className="flex items-center gap-3">
          {i > 0 ? <span aria-hidden="true" className="text-cuivre/60">/</span> : null}
          {it.href ? <Link href={it.href} className="hover:text-cuivre-pale">{it.name}</Link> : <span aria-current="page" className="text-creme-soft">{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}

/** Ouverture de chapitre : la petite ferme en cuivre, le numéro romain, un filet, le titre courant. */
export function SectionHead({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <FermeMark className="h-5 w-10 shrink-0" />
      <span className="cap shrink-0 text-cuivre-light">Chapitre <span className="num ml-1 text-[1.05rem] normal-case tracking-normal">{roman(n)}</span></span>
      <span aria-hidden="true" className="rule flex-1" />
      <span className="cap shrink-0">{label}</span>
    </div>
  );
}

/** Héros des pages intérieures : grande photo plein cadre étalonnée nuit, titre très grand posé dessus. */
export function PageHero({ page }: { page: Page }) {
  const contact = `${PATHS.contact}?demande=${page.contactType}`;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Img id={page.photo} alt={photoAlt(page.photo)} className="slow-zoom absolute inset-0" priority position={page.photoPos} grade="fort" />
        <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-t from-nuit via-nuit/55 to-nuit/30" />
        <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-r from-nuit/85 via-nuit/25 to-transparent" />
      </div>
      <div className="wrap relative z-[4] flex min-h-[38rem] flex-col justify-end pb-12 pt-[7rem] sm:min-h-[44rem] sm:pb-16 lg:min-h-[min(92svh,52rem)]">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: page.crumb }]} />
        <p className="fade-in cap mt-8 text-cuivre-light">{page.kicker}</p>
        <h1 className="mt-5 max-w-[16ch] text-[2.9rem] leading-[0.98] sm:text-[4.6rem] xl:text-[6.4rem]">
          <span className="line-up"><span>{page.h1}</span></span>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-creme/15 pt-8 lg:grid-cols-12 lg:items-center">
          <p className="fade-in max-w-[52ch] text-[1.08rem] leading-relaxed text-creme-soft lg:col-span-6" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
          <div className="fade-in flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-6 lg:justify-end" style={{ ["--d" as string]: "400ms" }}>
            <Link href={contact} className="btn-cuivre" data-track="cta_devis_hero">Demander un devis ou une intervention</Link>
            <a href={`tel:${business.phoneTel}`} className="inline-flex items-center gap-3 whitespace-nowrap font-serif text-[1.5rem] text-creme hover:text-cuivre-pale" data-track="cta_tel_hero"><PhoneIcon className="h-4 w-4 text-cuivre-light" /> {business.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Brief({ text, n = 1 }: { text: string; n?: number }) {
  return (
    <section aria-label="En bref" className="py-20 sm:py-32">
      <div className="wrap">
        <SectionHead n={n} label="En bref" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <span aria-hidden="true" className="hidden font-serif text-[9rem] italic leading-[0.8] text-cuivre/80 lg:col-span-2 lg:block">«</span>
          <p className="reponse-bref lg:col-span-10" data-reveal>{text}</p>
        </div>
      </div>
    </section>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <>
      {s.answer ? <><h2 className="h2 max-w-[20ch]">{s.h2}</h2><p className="answer max-w-[44ch]">{s.answer}</p></> : <h2 className="h2 max-w-[22ch]">{s.h2}</h2>}
      {s.paras?.length ? (
        <div className="prose-f mt-8 max-w-[62ch] text-[1.04rem]">
          {s.paras.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
        </div>
      ) : null}
      {s.list?.length ? (
        <div className="mt-10 max-w-[62ch]">
          {s.listTitle ? <p className="cap text-cuivre-light">{s.listTitle}</p> : null}
          <ul className="mt-4 border-t border-creme/15">
            {s.list.map((li, k) => <li key={li} className="flex gap-5 border-b border-creme/15 py-4 text-creme"><span aria-hidden="true" className="num w-6 shrink-0 text-[0.95rem]">{roman(k + 1)}</span>{li}</li>)}
          </ul>
        </div>
      ) : null}
      {s.original ? <span className="cap mt-8 block">Texte repris du site de l&apos;entreprise</span> : null}
    </>
  );
}

/** Les sections questions-réponses, en chapitres : la photo, grande, change de côté d'un chapitre à l'autre. */
export function DeepContent({ sections, start = 2 }: { sections: Section[]; start?: number }) {
  return (
    <>
      {sections.map((s, i) => (
        <section key={s.h2} className={`py-20 sm:py-32 ${i % 2 === 0 ? "bg-nuit-2/60" : ""}`}>
          <div className="wrap">
            <SectionHead n={start + i} label={s.answer ? "Question" : "Repère"} />
            {s.photo ? (
              <div className={`mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-6" data-reveal><SectionBody s={s} /></div>
                <div className="lg:col-span-6">
                  <figure className="lg:sticky lg:top-28">
                    <Img id={s.photo} alt={photoAlt(s.photo)} className="aspect-[4/5] w-full shadow-photo" />
                    <figcaption className="mt-4 flex gap-4 border-t border-creme/15 pt-3"><span className="num text-[0.95rem]">fig.</span><span className="cap">{photoAlt(s.photo)}</span></figcaption>
                  </figure>
                </div>
              </div>
            ) : (
              <div className="mt-14 grid lg:grid-cols-12"><div className="lg:col-span-9 lg:col-start-3" data-reveal><SectionBody s={s} /></div></div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export function FaqList({ items, n, title = "Questions fréquentes" }: { items: Faq[]; n: number; title?: string }) {
  return (
    <section className="py-20 sm:py-32">
      <div className="wrap">
        <SectionHead n={n} label="Questions" />
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <p className="font-serif text-[2.4rem] leading-[1] text-creme sm:text-[3.4rem] lg:col-span-4">{title}</p>
          <div className="border-t border-creme/15 lg:col-span-8">
            {items.map((f, k) => (
              <details key={f.q} className="faq group border-b border-creme/15">
                <summary className="flex cursor-pointer list-none items-start gap-5 py-7 text-[1.15rem] text-creme sm:text-[1.3rem]" style={{ fontWeight: 500 }}>
                  <span aria-hidden="true" className="num mt-[0.1rem] w-8 shrink-0 text-[1.05rem]">{roman(k + 1)}</span>
                  <span className="flex-1">{f.q}</span>
                  <span aria-hidden="true" className="faq-plus relative mt-1 h-8 w-8 shrink-0 rounded-full border border-cuivre/40 text-cuivre-light" />
                </summary>
                <p className="faq-a max-w-[62ch] pb-8 pl-[3.25rem] text-[1.02rem]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bloc local : adresse, téléphones, e-mail, horaires connus, itinéraire. */
export function LocalBlock({ n, zone, landmark, contactType = "autre" }: { n: number; zone?: string; landmark?: string; contactType?: string }) {
  return (
    <section className="border-y border-creme/10 bg-nuit-deep py-20 sm:py-32">
      <div className="wrap">
        <SectionHead n={n} label="L'atelier" />
        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-serif text-[2.4rem] leading-[1] text-creme sm:text-[3.4rem]">
              {zone && zone !== "La Garenne-Colombes" ? <>De La Garenne-Colombes <span className="disp-i">à {zone}</span></> : <>Boulevard <span className="disp-i">de la République</span></>}
            </div>
            {landmark ? <div className="mt-6 max-w-[44ch]">Toute la commune est desservie, {landmark}.</div> : <div className="mt-6 max-w-[44ch]">Au cœur de La Garenne-Colombes, et sur le marché de la ville.</div>}
            <div className="mt-10"><Link href={`${PATHS.contact}?demande=${contactType}`} className="btn-cuivre">Demander un devis ou une intervention</Link></div>
          </div>
          <dl className="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:col-span-7">
            <div className="border-t border-creme/15 pt-5"><dt className="cap text-cuivre-light">Adresse</dt><dd className="mt-3 text-creme">{business.address.street}<br />{business.address.postalCode} {business.address.city}<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-u mt-3 text-[0.92rem]">Itinéraire</a></dd></div>
            <div className="border-t border-creme/15 pt-5"><dt className="cap text-cuivre-light">Téléphone</dt><dd className="mt-3 font-serif text-[1.6rem] leading-[1.3] text-creme"><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap hover:text-cuivre-pale" data-track="cta_tel_local">{business.phoneDisplay}</a><br /><a href={`tel:${business.mobileTel}`} className="whitespace-nowrap hover:text-cuivre-pale">{business.mobileDisplay}</a> <span className="font-sans text-[0.9rem] text-creme-faint">(mobile)</span></dd></div>
            <div className="border-t border-creme/15 pt-5"><dt className="cap text-cuivre-light">E-mail</dt><dd className="mt-3 text-creme"><a href={`mailto:${business.email}`} className="hover:text-cuivre-pale">{business.email}</a></dd></div>
            <div className="border-t border-creme/15 pt-5"><dt className="cap text-cuivre-light">Horaires</dt><dd className="mt-3 text-creme">{business.hours}</dd></div>
            <div className="border-t border-creme/15 pt-5 sm:col-span-2"><dt className="cap text-cuivre-light">Garanties</dt><dd className="mt-3 text-creme">Artisan, {business.rm} · Garantie décennale {business.insurer} · Installateur conseil expert Velux · Devis et déplacements gratuits</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, n }: { paths: string[]; n: number }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHead n={n} label="Voir aussi" />
        <ul className="mt-10 grid border-t border-creme/15 sm:grid-cols-3">
          {paths.map((p) => (
            <li key={p} className="border-b border-creme/15 sm:border-r sm:last:border-r-0">
              <Link href={p} className="row-link flex items-center justify-between gap-4 py-7 font-serif text-[1.6rem] text-creme sm:px-7 sm:first:pl-0">
                <span className="row-zone transition-colors">{labelFor(p) || "Page"}</span>
                <ArrowIcon className="card-arrow h-5 w-5 shrink-0 text-cuivre-light" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Les six métiers en planches photo : trois colonnes, celle du milieu décalée, comme une double page de revue. */
export function TradesList({ zone }: { zone?: string }) {
  return (
    <ol className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 lg:pb-24">
      {trades.map((t, i) => (
        <li key={t.path} className={i % 3 === 1 ? "lg:translate-y-24" : ""} data-reveal style={{ ["--d" as string]: `${(i % 3) * 120}ms` }}>
          <Link href={t.path} className="card group block">
            <div className="card-img relative">
              <Img id={t.photo} alt={photoAlt(t.photo)} className="aspect-[4/5] w-full shadow-photo" zoom={false} />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-nuit/80 via-transparent to-transparent" />
              <span className="num absolute left-6 top-5 z-[4] text-[3.2rem] leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,.6)]">{t.mark}</span>
            </div>
            <div className="mt-6 flex items-start justify-between gap-6 border-t border-creme/15 pt-5">
              <div>
                <span className="block font-serif text-[1.9rem] leading-[1.05] text-creme sm:text-[2.2rem]">{t.title}{zone ? <span className="sr-only"> à {zone}</span> : null}</span>
                <span className="mt-3 block max-w-[40ch] text-[0.98rem] text-creme-soft">{t.text}</span>
              </div>
              <ArrowIcon className="card-arrow mt-3 h-6 w-6 shrink-0 text-cuivre-light" />
            </div>
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
        <li key={p.path}><Link href={p.path} className="link-u text-[1.1rem]">{p.zone}</Link></li>
      ))}
    </ul>
  );
}

/** Dernier chapitre : une grande photo de toit sous la lampe, le titre, l'appel. */
export function CtaBand({ title, contactType = "autre" }: { title: string; contactType?: string }) {
  return (
    <section className="relative overflow-hidden">
      <Img id="ferme-ciel" alt={photoAlt("ferme-ciel")} className="absolute inset-0" grade="fort" />
      <span aria-hidden="true" className="absolute inset-0 z-[3] bg-gradient-to-r from-nuit via-nuit/80 to-nuit/30" />
      <div className="wrap relative z-[4] grid gap-12 py-24 sm:py-36 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <FermeMark className="h-9 w-[4.5rem]" />
          <div className="mt-10 font-serif text-[2.8rem] leading-[0.98] text-creme sm:text-[4.4rem] lg:text-[5.4rem]">{title}</div>
          <div className="mt-6 max-w-[46ch] text-creme-soft">Visite et devis gratuits, sans engagement. Photos bienvenues.</div>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end">
          <a href={`tel:${business.phoneTel}`} className="whitespace-nowrap font-serif text-[2.4rem] leading-none text-creme hover:text-cuivre-pale sm:text-[3rem]" data-track="cta_tel_band">{business.phoneDisplay}</a>
          <Link href={`${PATHS.contact}?demande=${contactType}`} className="btn-cuivre" data-track="cta_devis_band">Demander un devis ou une intervention</Link>
        </div>
      </div>
    </section>
  );
}
