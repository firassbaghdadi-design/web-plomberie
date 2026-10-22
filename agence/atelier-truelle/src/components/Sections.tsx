import Link from "next/link";
import { PATHS, type Faq } from "@/lib/site";
import { ArrowIcon } from "./Icons";

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

export function PageHeader({ eyebrow, title, lead, crumbs }: { eyebrow: string; title: string; lead: string; crumbs: { name: string; href?: string }[] }) {
  return (
    <section className="blueprint border-b border-line pb-16 pt-12 sm:pb-24 sm:pt-16" aria-labelledby="titre-page">
      <div className="container-x">
        <Breadcrumb items={crumbs} />
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 id="titre-page" className="pop mt-4 max-w-4xl text-4xl sm:text-6xl">
          {title}
        </h1>
        <p className="pop mt-6 max-w-2xl text-lg sm:text-xl" style={{ ["--d" as string]: "120ms" }}>
          {lead}
        </p>
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
            <details key={item.q} className="group py-6">
              <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-6 font-display text-xl font-bold text-ardoise">
                {item.q}
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ardoise/20 text-2xl text-terre-action transition duration-300 group-open:rotate-45 group-open:bg-ardoise group-open:text-platre">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Voyez le résultat, avant de décider.", text = "Dites-nous quelle est votre entreprise : nous préparons une maquette gratuite avec votre logo et vos couleurs, sans engagement." }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="titre-cta" className="bg-ardoise py-20 text-platre sm:py-28">
      <div className="container-x text-center">
        <h2 id="titre-cta" data-reveal className="mx-auto max-w-3xl text-4xl !text-platre sm:text-6xl">
          {title}
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-lg text-platre/80">
          {text}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !px-9 !py-4 text-lg">
            Recevoir une maquette gratuite
            <ArrowIcon />
          </Link>
          <Link href={PATHS.services} className="btn !border-2 border-platre/30 !px-9 !py-4 text-lg text-platre hover:bg-platre/10">
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
