import Link from "next/link";
import { allPages } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import type { Page, Section } from "@/lib/types";
import { ArrowIcon } from "./Icons";
import { Img } from "./Img";

/** Espace insécable avant « : ? ! ; » (typographie française). */
export const fr = (t: string) => t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ");
export const pad = (n: number) => String(n).padStart(2, "0");
export const contactHref = (type?: string) => `${PATHS.contact}${type ? `?demande=${type}` : ""}`;

/** Les photos de la maison, dans l'ordre où elles servent d'intermèdes. */
export const PHOTO_KEYS = ["equipe-paris", "equipe-1", "equipe-2", "equipe-3", "equipe-4", "equipe-5", "equipe-fuite", "cordiste"];

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[0.78rem] text-ink/65">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-ink/30">/</span> : null}
            {it.href ? <Link href={it.href} className="transition hover:text-ink">{it.name}</Link> : <span aria-current="page" className="text-ink/90">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Un seul bouton d'action, le téléphone à côté en lien fin. */
export function CtaButtons({ contactType, label = "Demander un devis ou une intervention" }: { contactType?: string; label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">
        {label} <ArrowIcon />
      </Link>
      <a href={`tel:${business.phoneTel}`} className="group flex items-baseline gap-3 whitespace-nowrap" data-track="cta_tel">
        <span className="label !text-ink/60">Tél.</span>
        <span className="num text-[1.25rem] font-light tracking-tight text-ink transition group-hover:text-accent-light">{business.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** Une section sur fond de nuit : numéro et rubrique à gauche, contenu à droite. */
export function Sec({ n, rubrique, children, id, labelledBy, tone }: { n: string; rubrique: string; children: React.ReactNode; id?: string; labelledBy?: string; tone?: "paper" }) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={labelledBy ? undefined : rubrique} className={tone === "paper" ? "bg-night-2" : ""}>
      <div className="wrap grid gap-x-12 py-20 sm:py-28 lg:grid-cols-12">
        <p className="slate mb-10 lg:col-span-2 lg:mb-0 lg:pt-4" data-n={n}><span aria-hidden="true" />{rubrique}</p>
        <div className="lg:col-span-10">{children}</div>
      </div>
    </section>
  );
}

/**
 * Le plan photo : une photo de la maison bord à bord, voilée en bas, qui se pose au défilement.
 * Le contenu (`children`) est posé dessus, en bas de l'image.
 */
export function Frame({ photo, children, className = "min-h-[86svh] lg:min-h-[94svh]", veil = "", priority, position, caption, zoom }: { photo: string; children?: React.ReactNode; className?: string; veil?: string; priority?: boolean; position?: string; caption?: string; zoom?: boolean }) {
  return (
    <div data-frame className={`frame flex flex-col ${className}`}>
      <div className="frame-media"><Img id={photo} priority={priority} className="absolute inset-0" imgClassName={zoom ? "slow-zoom" : ""} position={position} /></div>
      <div aria-hidden="true" className={`frame-veil ${veil}`} />
      {children}
      {caption ? <p className="pointer-events-none absolute right-[var(--gutter)] top-[calc(var(--head-h)+1.25rem)] hidden max-w-[16rem] text-right text-[0.7rem] uppercase leading-relaxed tracking-[0.2em] text-ink/55 lg:block">{caption}</p> : null}
    </div>
  );
}

/** Ouverture de chapitre : grand plan photo, numéro de plan et titre en surimpression ; le contenu suit, sur fond de nuit. */
export function Chapter({ n, rubrique, photo, title, labelledBy, children, position, aside }: { n: string; rubrique: string; photo: string; title: React.ReactNode; labelledBy: string; children?: React.ReactNode; position?: string; aside?: React.ReactNode }) {
  return (
    <section aria-labelledby={labelledBy}>
      <Frame photo={photo} position={position} caption={photoAlt(photo)}>
        <div className="frame-text wrap mt-auto pb-12 pt-40 sm:pb-16 lg:pb-20">
          <p data-reveal className="slate" data-n={n}><span aria-hidden="true" />{rubrique}</p>
          <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id={labelledBy} data-reveal className="h2-frame hp lg:col-span-9" style={{ ["--d" as string]: "120ms" }}>{title}</h2>
            {aside ? <div data-reveal className="text-[1.02rem] text-ink/80 lg:col-span-3 lg:pb-3" style={{ ["--d" as string]: "240ms" }}>{aside}</div> : null}
          </div>
        </div>
      </Frame>
      {children ? <div className="wrap py-16 sm:py-24">{children}</div> : null}
    </section>
  );
}

/** Accent typographique d'un titre : ce qui suit la première virgule passe en Newsreader italique. */
export function Accent({ text }: { text: string }) {
  const i = text.indexOf(", ");
  if (i < 0) return <>{text}</>;
  return <>{text.slice(0, i + 1)} <span className="ital">{text.slice(i + 2)}</span></>;
}

/** Héros des pages intérieures : la photo plein écran, le H1 en surimpression fine. */
export function PageHero({ page, crumbs }: { page: Page; crumbs: { name: string; href?: string }[] }) {
  const facts = page.facts ?? [];
  return (
    <section className="relative">
      <Frame photo={page.photo} priority zoom position={page.photoPos} className="min-h-[100svh]" veil="frame-veil-side" caption={page.caption}>
        <div className="wrap pt-[calc(var(--head-h)+1.25rem)]"><Breadcrumbs items={crumbs} /></div>
        <div className="frame-text wrap mt-auto pb-24 pt-20 md:pb-14 lg:pb-16">
          <p className="fade-in slate" data-n="Plan 01"><span aria-hidden="true" />{page.kicker}</p>
          <h1 className="hp hp-load mt-7 max-w-[64rem] text-[2.6rem] leading-[0.98] tracking-[-0.045em] sm:text-[4.2rem] xl:text-[5.4rem]">
            <span className="line-up"><span><Accent text={fr(page.h1)} /></span></span>
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="fade-in max-w-xl text-[1.06rem] leading-relaxed text-ink/85 sm:text-[1.14rem]" style={{ ["--d" as string]: "250ms" }}>{page.lead}</p>
              <div className="fade-in mt-8" style={{ ["--d" as string]: "400ms" }}><CtaButtons contactType={page.contactType} /></div>
            </div>
            {facts.length ? (
              <dl className="fade-in grid grid-cols-3 border-t border-ink/25 lg:col-span-5" style={{ ["--d" as string]: "550ms" }}>
                {facts.map((f) => (
                  <div key={f.label} className="pr-3 pt-4">
                    <dt className="label !text-ink/60">{f.label}</dt>
                    <dd className="ital mt-1.5 text-[1.25rem] leading-tight text-ink sm:text-[1.6rem]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>
        </div>
      </Frame>
    </section>
  );
}

export function Brief({ text, n = "01" }: { text: string; n?: string }) {
  return (
    <Sec n={n} rubrique="En bref">
      <p className="reponse-bref max-w-5xl" data-reveal>{text}</p>
    </Sec>
  );
}

function SectionBody({ s }: { s: Section }) {
  return (
    <article className="max-w-3xl">
      <h2 className="hp text-[2rem] sm:text-[2.8rem]">{fr(s.h2)}</h2>
      {s.answer ? <p className="answer">{s.answer}</p> : null}
      {s.paras?.length ? <div className="prose-mt mt-7">{s.paras.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
      {s.list?.length ? (
        <ul className="mt-9 border-b border-line">
          {s.list.map((li, i) => (
            <li key={li.slice(0, 48)} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-t border-line py-4 text-ink">
              <span className="num pt-[0.18em] text-[0.8rem] text-accent-light">{pad(i + 1)}</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {s.steps?.length ? (
        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-t border-line py-6">
              <span className="ital num text-[2.4rem] leading-none text-accent-light">{pad(i + 1)}</span>
              <p className="mt-4 text-[1.1rem] font-normal text-ink">{st.t}</p>
              <p className="mt-2">{st.d}</p>
            </li>
          ))}
        </ol>
      ) : null}
      {s.after?.length ? <div className="prose-mt mt-7">{s.after.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}</div> : null}
    </article>
  );
}

/** Intermède : une photo de la maison bord à bord, légendée, entre deux sections de texte. */
export function Interlude({ photo, caption }: { photo: string; caption?: string }) {
  return (
    <Frame photo={photo} className="min-h-[70svh] lg:min-h-[86svh]">
      <div className="frame-text wrap mt-auto flex items-end justify-between gap-6 pb-8 sm:pb-10">
        <p aria-hidden="true" className="ital max-w-xl text-[1.35rem] leading-snug text-ink/90 sm:text-[1.9rem]">{caption ?? photoAlt(photo)}</p>
        <p className="label hidden shrink-0 !text-ink/55 sm:block">Monteil &amp; Cie · {business.founded}</p>
      </div>
    </Frame>
  );
}

export function DeepContent({ sections, start = 2, interlude }: { sections: Section[]; start?: number; interlude?: string }) {
  const at = Math.min(2, sections.length - 1);
  return (
    <>
      {sections.map((s, i) => (
        <div key={s.h2}>
          {interlude && i === at && i > 0 ? <Interlude photo={interlude} /> : null}
          <Sec n={pad(start + i)} rubrique={s.h2.endsWith("?") ? "Question" : "À savoir"} id={`s${i + 1}`} tone={i % 2 ? "paper" : undefined}>
            <SectionBody s={s} />
          </Sec>
        </div>
      ))}
    </>
  );
}

export function FaqList({ items, title = "Questions fréquentes", n }: { items: Faq[]; title?: string; n: string }) {
  return (
    <Sec n={n} rubrique="Questions" labelledBy="titre-faq" tone="paper">
      <h2 id="titre-faq" className="h2 hp max-w-3xl">{fr(title)}</h2>
      <div className="mt-12 max-w-4xl border-t border-line">
        {items.map((f) => (
          <details key={f.q} className="faq group border-b border-line py-7"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 text-[1.15rem] font-light leading-snug text-ink transition hover:text-white sm:text-[1.4rem]">{f.q}<span aria-hidden="true" className="faq-plus relative mt-1 h-7 w-7 shrink-0 rounded-full border border-line text-accent-light" /></summary><p className="faq-a mt-5 max-w-2xl">{f.a}</p></details>
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
          <h2 id="titre-local" className="h2 hp">35, rue Saint-Ambroise, <span className="ital">Paris 11e</span></h2>
          <p className="mt-6 max-w-lg">{approach[zone] ?? approach["Paris 11e"]}</p>
          <div className="mt-10"><CtaButtons contactType={contactType} /></div>
        </div>
        <dl className="grid gap-x-10 gap-y-9 self-start sm:grid-cols-2 xl:col-span-6">
          <div className={cell}><dt className="label">Adresse</dt><dd className="mt-3 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-3 text-sm">Itinéraire</a></dd></div>
          <div className={cell}><dt className="label">Téléphone</dt><dd className="mt-3"><a href={`tel:${business.phoneTel}`} className="num whitespace-nowrap text-[1.4rem] font-light text-ink transition hover:text-accent-light">{business.phoneDisplay}</a></dd></div>
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
      <h2 id="titre-voir" className="hp text-[2rem] sm:text-[2.8rem]">Les autres métiers et quartiers de la maison</h2>
      <ul className="mt-10 border-t border-line">
        {pages.map((p) => (
          <li key={p.path} className="border-b border-line">
            <Link href={p.path} className="row-link grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 sm:grid-cols-[7rem_minmax(0,1fr)_auto]">
              <span aria-hidden="true" className="relative hidden aspect-[4/3] overflow-hidden rounded-[2px] sm:block"><Img id={p.photo} alt="" className="absolute inset-0" /></span>
              <span className="row-title block">
                <span className="label block">{p.kicker}</span>
                <span className="mt-2 block text-[1.15rem] font-light leading-snug text-ink sm:text-[1.5rem]">{p.h1}</span>
              </span>
              <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
            </Link>
          </li>
        ))}
      </ul>
    </Sec>
  );
}

/** Dernier plan : une photo plein cadre, le dernier appel posé dessus. La note Google tient en une ligne légère. */
export function CtaBand({ title, text, contactType, photo = "equipe-5" }: { title: string; text: string; contactType?: string; photo?: string }) {
  const g = business.googleRating;
  return (
    <section aria-label="Demande de devis">
      <Frame photo={photo} className="min-h-[80svh]" veil="frame-veil-full">
        <div className="frame-text wrap my-auto grid gap-12 py-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="slate" data-n="Fin"><span aria-hidden="true" />Demande de devis</p>
            <p className="hp mt-7 text-[2.5rem] font-light leading-[1] tracking-[-0.045em] text-ink sm:text-[4rem] lg:text-[5.2rem]">{fr(title)}</p>
            <p className="mt-7 max-w-xl text-lg text-ink/85">{text}</p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <Link href={contactHref(contactType)} className="btn-primary" data-track="cta_devis">Demander un devis gratuit <ArrowIcon /></Link>
            <a href={`tel:${business.phoneTel}`} className="num text-[2rem] font-light tracking-tight text-ink transition hover:text-accent-light" data-track="cta_tel">{business.phoneDisplay}</a>
            <div className="text-[0.8rem] text-ink/60">Note de {g.value}/5 sur Google ({g.count} avis, relevé du {g.date}). <a href={g.url} target="_blank" rel="noopener" className="underline underline-offset-2">Voir la fiche</a></div>
          </div>
        </div>
      </Frame>
    </section>
  );
}
