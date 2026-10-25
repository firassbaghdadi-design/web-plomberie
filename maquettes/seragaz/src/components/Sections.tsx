import Link from "next/link";
import { allPages } from "@/lib/pages";
import { commonsAlt, type CommonsId } from "@/lib/photos";
import { PATHS, business, reviews, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon, CheckIcon, ClockIcon, FlameMark, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française) : jamais de ponctuation orpheline en début de ligne. */
export const fr = (t: string) => t.replace(/ ([:;?!])/g, "\u00a0$1");

const photoAlt = (id: string) =>
  id === "accueil" ? "Intervention SERAGAZ sur une chaudière gaz (photo publiée par l'entreprise)" : id === "atelier" ? "Technicien SERAGAZ au travail (photo publiée par l'entreprise)" : commonsAlt(id as CommonsId);

export function Breadcrumbs({ items, light }: { items: { name: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Fil d'Ariane" className={`text-sm ${light ? "text-white/60" : "text-ink-soft"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {it.href ? <Link href={it.href} className="hover:underline">{it.name}</Link> : <span aria-current="page" className={light ? "text-white" : "text-ink"}>{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CtaButtons({ contactType, light }: { contactType?: string; light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={`${PATHS.contact}${contactType ? `?demande=${contactType}` : ""}`} className="btn-primary" data-track="cta_devis">
        Demander un devis ou une intervention <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className={light ? "btn-light" : "btn-line"} data-track="cta_tel">
        <PhoneIcon /> {business.phoneDisplay}
      </a>
    </div>
  );
}

/** Héros des pages de contenu : fond nuit à lignes de plan, photo en fenêtre, plaque d'informations. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const photo = page.photo ?? "toits";
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid gap-10 pb-14 pt-8 sm:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="lg:col-span-7">
          <Breadcrumbs items={crumbs} light />
          <p className="label mt-10 flex items-center gap-3 text-flame">
            <span className="h-px w-8 bg-flame" aria-hidden="true" />
            {page.kicker}
          </p>
          <h1 className="mt-5 text-[2.35rem] font-semibold sm:text-6xl xl:text-[4.6rem]">
            <span className="line-up"><span>{fr(page.h1)}</span></span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-white/75 sm:text-xl">{page.lead}</p>
          <div className="mt-9">
            <CtaButtons contactType={page.contactType} light />
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div data-mask className="relative h-72 overflow-hidden rounded-[1.75rem] sm:h-96 lg:h-full lg:min-h-[30rem]">
            <Img id={photo} alt={photoAlt(photo)} priority className="absolute inset-0" imgClassName="ken" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" aria-hidden="true" />
          </div>
          <dl className="relative -mt-16 mx-4 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/15 text-center shadow-plate backdrop-blur sm:mx-8">
            {(page.facts ?? [
              { label: "Depuis", value: "1985" },
              { label: "Atelier", value: "Paris 9e" },
              { label: "Partenaire", value: "GRDF" },
            ]).map((f) => (
              <div key={f.label} className="bg-night/85 px-2 py-4">
                <dt className="label text-[0.62rem] text-white/50">{f.label}</dt>
                <dd className="mt-1 font-display text-base font-semibold leading-tight sm:text-lg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Brief({ text }: { text: string }) {
  return (
    <section aria-label="En bref" className="border-b border-line bg-white">
      <div className="wrap grid gap-4 py-10 sm:py-14 lg:grid-cols-12">
        <p className="label flex items-center gap-2 text-blue lg:col-span-3"><FlameMark className="h-5 w-4" /> En bref</p>
        <p className="reponse-bref max-w-4xl lg:col-span-9">{text}</p>
      </div>
    </section>
  );
}

function SectionBody({ s, n }: { s: Section; n: number }) {
  const id = `s${n}`;
  return (
    <article id={id} className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0 sm:pt-14">
      <p className="label text-ink-faint" data-reveal>{String(n).padStart(2, "0")}</p>
      <h2 className="mt-3 text-[1.9rem] font-semibold text-night sm:text-[2.6rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-sg mt-6 text-ink-soft">{s.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <div className="mt-7">
          {s.listTitle ? <p className="font-semibold text-night">{s.listTitle}</p> : null}
          <ul className="mt-4 grid gap-3">
            {s.list.map((li) => (
              <li key={li.slice(0, 40)} className="flex gap-3 rounded-2xl bg-blue-mist px-4 py-3.5 text-ink">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-night"><CheckIcon className="h-3 w-3" /></span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="bg-white p-6">
              <span className="font-display text-4xl font-semibold text-blue/25">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-display text-xl font-semibold text-night">{st.t}</p>
              <p className="mt-2 text-ink-soft">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-sg mt-6 text-ink-soft">{s.after.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div> : null}
      {s.aside ? (
        <aside className="mt-7 flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-night font-display text-lg text-flame">JF</span>
          <span><strong className="block text-night">{s.aside.title}</strong><span className="text-ink-soft">{s.aside.text}</span></span>
        </aside>
      ) : null}
    </article>
  );
}

/** Corps de page : sommaire collant à gauche, sections question-réponse à droite. */
export function DeepContent({ sections }: { sections: Section[] }) {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <nav aria-label="Sommaire" className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-32">
            <p className="label text-ink-faint">Sur cette page</p>
            <ol className="mt-5 space-y-1 border-l border-line">
              {sections.map((s, i) => (
                <li key={s.h2}>
                  <a href={`#s${i + 1}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[0.95rem] text-ink-soft transition hover:border-blue hover:text-blue">
                    {s.h2}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <div className="space-y-14 lg:col-span-8">
          {sections.map((s, i) => <SectionBody key={s.h2} s={s} n={i + 1} />)}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Questions fréquentes" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="titre-faq" className="bg-white py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label text-blue">FAQ</p>
          <h2 id="titre-faq" className="mt-3 text-4xl font-semibold text-night sm:text-5xl">{fr(title)}</h2>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="faq group py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-semibold text-night sm:text-2xl">{f.q}<span aria-hidden="true" className="faq-plus mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg transition">+</span></summary><p className="faq-a mt-4 max-w-3xl text-ink-soft">{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalBlock({ contactType, zone }: { contactType?: string; zone?: string }) {
  return (
    <section aria-labelledby="titre-local" className="bg-blue-mist py-16 sm:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label text-blue">Rue de Dunkerque, Paris 9e</p>
          <h2 id="titre-local" className="mt-3 text-4xl font-semibold text-night sm:text-5xl">SERAGAZ, 69 rue de Dunkerque</h2>
          {zone ? <p className="mt-5 text-ink-soft">Pour {zone}, l'équipe part de ses locaux du 9e arrondissement.</p> : null}
          <p className="mt-3 text-ink-soft">Tout Paris et la petite couronne, {business.radius}.</p>
          <div className="mt-8"><CtaButtons contactType={contactType} /></div>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
          <li className="bg-white p-6"><PinIcon className="h-5 w-5 text-blue" /><p className="mt-3 font-semibold text-night">Adresse</p><p className="text-ink-soft">{business.address.street}<br />{business.address.postalCode} Paris</p><a href={business.mapsUrl} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-semibold text-blue underline underline-offset-4">Itinéraire</a></li>
          <li className="bg-white p-6"><PhoneIcon className="h-5 w-5 text-blue" /><p className="mt-3 font-semibold text-night">Téléphone</p><a href={`tel:${business.phoneTel}`} className="whitespace-nowrap text-ink-soft hover:text-blue">{business.phoneDisplay}</a><p className="mt-1 text-sm text-ink-faint">{business.phoneHours}</p></li>
          <li className="bg-white p-6"><ClockIcon className="h-5 w-5 text-blue" /><p className="mt-3 font-semibold text-night">Horaires</p><p className="text-ink-soft">{business.hours}</p></li>
          <li className="bg-white p-6"><MailIcon className="h-5 w-5 text-blue" /><p className="mt-3 font-semibold text-night">E-mail</p><a href={`mailto:${business.email}`} className="text-ink-soft hover:text-blue">{business.email}</a><p className="mt-1 text-sm text-ink-faint"><a href={reviews.url} target="_blank" rel="noopener" className="underline underline-offset-4">Note de {reviews.ratingText}/5 sur Google</a> ({reviews.count} avis, relevé du {reviews.observed})</p></li>
        </ul>
      </div>
    </section>
  );
}

export function SeeAlso({ paths, current }: { paths?: string[]; current: string }) {
  const pages = (paths ?? []).filter((p) => p !== current).map((p) => allPages.find((x) => x.path === p)).filter(Boolean) as Page[];
  if (!pages.length) return null;
  return (
    <section aria-labelledby="titre-voir" className="bg-paper py-16 sm:py-20">
      <div className="wrap">
        <p className="label text-blue">Voir aussi</p>
        <h2 id="titre-voir" className="mt-3 text-3xl font-semibold text-night sm:text-4xl">Autres prestations de SERAGAZ</h2>
        <ul className="mt-8 border-t border-line">
          {pages.map((p) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link group relative flex items-center justify-between gap-6 overflow-hidden py-6">
                <span className="row-fill absolute inset-0 -z-0 bg-white" aria-hidden="true" />
                <span className="relative">
                  <span className="label block text-ink-faint">{p.kicker}</span>
                  <span className="mt-1 block font-display text-xl font-semibold text-night sm:text-2xl">{p.h1}</span>
                </span>
                <span className="row-arrow relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-night text-flame"><ArrowIcon /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, contactType }: { title: string; text: string; contactType?: string }) {
  return (
    <section className="relative overflow-hidden bg-blue text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <FlameMark className="pointer-events-none absolute -right-8 top-1/2 h-96 w-72 -translate-y-1/2 opacity-[0.1]" />
      <div className="wrap relative flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{fr(title)}</p>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={`${PATHS.contact}${contactType ? `?demande=${contactType}` : ""}`} className="btn-flame">Demander un devis gratuit <ArrowIcon /></Link>
          <a href={`tel:${business.phoneTel}`} className="btn-light"><PhoneIcon /> {business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
