import Link from "next/link";
import { PATHS, type Faq } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";
import { ArrowIcon } from "./Icons";
import { Figure } from "./Photo";

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
    <section className="border-b border-line pb-16 pt-10 sm:pb-24 sm:pt-14" aria-labelledby="titre-page">
      <div className={`container-x ${photo ? "grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]" : ""}`}>
        <div>
          <Breadcrumb items={crumbs} />
          <p className="eyebrow mt-8">{eyebrow}</p>
          <h1 id="titre-page" className="pop mt-4 max-w-3xl text-4xl sm:text-6xl">
            {title}
          </h1>
          <p className="pop mt-6 max-w-2xl text-lg sm:text-xl" style={{ ["--d" as string]: "120ms" }}>
            {lead}
          </p>
        </div>
        {photo ? (
          <div className="pop mx-auto w-full max-w-sm lg:max-w-none" style={{ ["--d" as string]: "200ms" }}>
            <Figure id={photo} caption={note} ratio="aspect-[4/3]" tilt="1.4deg" sizes="(min-width:1024px) 380px, 80vw" priority />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Vos questions" }: { items: readonly Faq[]; title?: string }) {
  return (
    <section id="questions" aria-labelledby="titre-faq" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="mt-3 text-4xl sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line" data-reveal style={{ ["--d" as string]: "100ms" }}>
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-6 font-display text-xl font-semibold text-ardoise">
                {item.q}
                <span aria-hidden="true" className="shrink-0 text-3xl leading-none text-terre-action transition duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Venez voir votre site refait.", text = "Dites-nous qui vous êtes. Nous préparons une maquette avec votre logo et vos couleurs, gratuitement. Vous la regardez tranquillement, et vous nous dites." }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="titre-cta" className="bg-ardoise py-20 text-platre sm:py-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 id="titre-cta" data-reveal className="max-w-2xl text-4xl !text-platre sm:text-5xl">
            {title}
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg text-platre/80">
            {text}
          </p>
        </div>
        <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !px-8 !py-4 text-lg">
            Voir mon site refait
            <ArrowIcon />
          </Link>
          <Link href={PATHS.story} className="btn border border-platre/35 !px-8 !py-4 text-lg text-platre hover:bg-platre/10">
            Lire notre histoire
          </Link>
        </div>
      </div>
    </section>
  );
}
