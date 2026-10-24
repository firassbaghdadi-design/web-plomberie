import Link from "next/link";
import { PATHS, type Faq } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";
import { ArrowIcon } from "./Icons";
import { Photo } from "./Photo";

export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-zinc-dark">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-ardoise hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ardoise">
                {item.name}
              </span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ eyebrow, title, lead, crumbs, photo, note }: { eyebrow: string; title: string; lead: string; crumbs: { name: string; href?: string }[]; photo?: PhotoId; note?: string }) {
  return (
    <section className="relative border-b border-line pb-16 pt-32 sm:pb-24 sm:pt-44" aria-labelledby="titre-page">
      <div className={`container-x ${photo ? "grid items-end gap-12 lg:grid-cols-[1.5fr_0.7fr]" : ""}`}>
        <div>
          <Breadcrumb items={crumbs} />
          <p className="eyebrow mt-10">{eyebrow}</p>
          <h1 id="titre-page" className="pop mt-5 max-w-[16ch] text-[clamp(2.8rem,8.4vw,8rem)] leading-[0.92] tracking-[-0.04em] sm:max-w-[18ch]">
            {title}
          </h1>
          <p className="pop mt-8 max-w-2xl text-lg sm:text-xl" style={{ ["--d" as string]: "150ms" }}>
            {lead}
          </p>
        </div>
        {photo ? (
          <div className="pop mx-auto w-full max-w-sm lg:max-w-none" style={{ ["--d" as string]: "250ms" }}>
            <div className="collage-img aspect-[4/5]">
              <div className="inner" data-speed="0.1">
                <Photo id={photo} sizes="(min-width:1024px) 28vw, 80vw" priority />
              </div>
            </div>
            {note ? <p className="hand mt-3">{note}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Vos questions" }: { items: readonly Faq[]; title?: string }) {
  return (
    <section id="questions" aria-labelledby="titre-faq" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="mt-4 text-4xl sm:text-6xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line" data-reveal style={{ ["--d" as string]: "100ms" }}>
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-6 font-display text-xl text-ardoise sm:text-3xl">
                {item.q}
                <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ardoise/25 text-2xl leading-none text-terre-action transition duration-500 group-open:rotate-45 group-open:border-terre-action group-open:bg-terre-action group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Venez voir votre site refait.", text = "Dites-nous qui vous êtes. Nous préparons une maquette avec votre logo et vos couleurs, gratuitement. Vous la regardez tranquillement, et vous nous dites." }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="titre-cta" className="relative overflow-hidden bg-terre-action py-24 text-platre sm:py-36">
      <div className="container-x">
        <p className="eyebrow !text-platre/80 before:!bg-platre/60" data-reveal>Prochaine étape</p>
        <h2 id="titre-cta" className="mt-5 max-w-4xl text-3xl !text-platre sm:text-5xl" data-reveal>
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-platre/85" data-reveal>
          {text}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-10">
          <Link href={`${PATHS.contact}?sujet=maquette`} className="giant-link" data-cursor="Écrire" data-reveal="clip" style={{ ["--cover" as string]: "#b24630" }}>
            Parlons<em>-</em>en<span aria-hidden="true">.</span>
          </Link>
          <Link href={`${PATHS.contact}?sujet=maquette`} data-magnetic="" data-cursor="Go" className="grid h-36 w-36 place-items-center rounded-full bg-noir text-platre transition-colors duration-500 hover:bg-platre hover:text-noir sm:h-44 sm:w-44">
            <span className="flex flex-col items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
              Écrire
              <ArrowIcon className="h-6 w-6 -rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
