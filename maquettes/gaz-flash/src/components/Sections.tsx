import Link from "next/link";
import { PATHS, business, faqs, priceGroups, sweepPrice, type FaqKey, type Service } from "@/lib/site";
import { ArrowIcon, CheckIcon, PhoneIcon, serviceIcons } from "./Icons";
import { Photo } from "./Photo";
import type { PhotoId } from "@/lib/photos";

export function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index < items.length - 1 ? (
              <Link href={item.path} className="underline-offset-4 hover:text-white hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ crumbs, eyebrow, title, lead, image }: { crumbs: { name: string; path: string }[]; eyebrow: string; title: string; lead: string; image: PhotoId }) {
  return (
    <section className="hero diagonal-bottom pb-24 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute inset-0 -z-10 opacity-[0.22]">
        <Photo id={image} alt="" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-coal-2 via-coal-2/85 to-coal-2/30" />
      </div>
      <div className="container-x">
        <Breadcrumb items={crumbs} />
        <p className="eyebrow mt-8 !text-ember">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,6.6vw,5rem)]">{title}</h1>
        <p className="reponse-bref mt-6 max-w-3xl text-lg text-white/85 sm:text-xl">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Une question, un devis, un dépannage ?", text = "Appelez-nous ou envoyez votre demande : une personne de l'équipe vous répond." }: { title?: string; text?: string }) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-[4px] bg-coal-2 px-7 py-12 text-white sm:px-14 sm:py-16" data-reveal="">
        <div className="slash !right-[-14%] !w-[48%] opacity-80" aria-hidden="true" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn btn-flame pulse">
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
            <Link href={PATHS.contact} className="btn btn-line text-white">
              Demander un devis
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ keyName, title = "Questions fréquentes" }: { keyName: FaqKey; title?: string }) {
  return (
    <section className="container-x" aria-labelledby={`faq-${keyName}`}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
        <div data-reveal="">
          <p className="eyebrow">FAQ</p>
          <h2 id={`faq-${keyName}`} className="h-section mt-3">
            {title}
          </h2>
        </div>
        <div className="space-y-3" data-reveal="">
          {faqs[keyName].map((item) => (
            <details key={item.q} className="faq card group open:border-flame/40 open:shadow-lift">
              <summary className="flex cursor-pointer items-center justify-between gap-5 px-6 py-5 font-semibold">
                <span>{item.q}</span>
                <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-flame-tint text-xl leading-none text-flame-dark transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-coal-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = serviceIcons[service.key];
  return (
    <Link href={service.path} className="lift zoom card group relative flex h-full flex-col overflow-hidden" data-reveal="" style={{ ["--d" as string]: index }}>
      <div className="relative aspect-[16/10] overflow-hidden bg-coal">
        <Photo id={service.image} alt="" sizes="(min-width:1024px) 280px, (min-width:640px) 45vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-2/70 to-transparent" />
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-[3px] bg-flame-btn text-white">
          <Icon className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-3xl uppercase">{service.title}</h3>
        <p className="mt-3 flex-1 text-[0.97rem] text-coal-soft">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-flame-dark">
          En savoir plus
          <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

export function PriceTables() {
  return (
    <div className="space-y-8">
      {priceGroups.map((group, i) => (
        <div key={group.title} className="card overflow-hidden" data-reveal="" style={{ ["--d" as string]: i }}>
          <div className="bg-coal-2 px-6 py-4 text-white">
            <h3 className="text-3xl uppercase">{group.title}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left">
              <caption className="sr-only">Tarifs TTC pour {group.title.toLowerCase()}</caption>
              <thead>
                <tr className="border-b border-line bg-cream-deep text-sm uppercase tracking-wider text-coal-soft">
                  <th scope="col" className="px-6 py-3 font-semibold">Formule</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Paris 18e</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Paris (autres arr.) et petite couronne</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line align-top">
                  <th scope="row" className="px-6 py-5 font-semibold">
                    Contrat d'entretien annuel
                    <span className="mt-1 block text-sm font-normal text-coal-soft">Entretien annuel + attestation. Tous dépannages inclus (main-d'œuvre et déplacement, hors pièces). Intervention prioritaire en cas de panne.</span>
                  </th>
                  <td className="px-4 py-5 font-display text-4xl font-bold text-flame-dark">{group.contract.paris18}<small className="ml-1 font-sans text-xs font-semibold text-coal-soft">TTC</small></td>
                  <td className="px-4 py-5 font-display text-4xl font-bold text-flame-dark">{group.contract.other}<small className="ml-1 font-sans text-xs font-semibold text-coal-soft">TTC</small></td>
                </tr>
                <tr className="align-top">
                  <th scope="row" className="px-6 py-5 font-semibold">
                    Forfait révision (sans engagement)
                    <span className="mt-1 block text-sm font-normal text-coal-soft">Entretien annuel + attestation.</span>
                  </th>
                  <td className="px-4 py-5 font-display text-4xl font-bold">{group.review.paris18}<small className="ml-1 font-sans text-xs font-semibold text-coal-soft">TTC</small></td>
                  <td className="px-4 py-5 font-display text-4xl font-bold">{group.review.other}<small className="ml-1 font-sans text-xs font-semibold text-coal-soft">TTC</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="card flex flex-wrap items-center justify-between gap-5 border-l-[6px] border-l-flame px-6 py-6" data-reveal="">
        <div>
          <h3 className="text-3xl uppercase">Ramonage du conduit de fumée gaz</h3>
          <p className="mt-1 text-coal-soft">Réalisé uniquement en même temps que l'entretien de la chaudière. Obligatoire une fois par an pour les chaudières à tirage naturel.</p>
        </div>
        <p className="font-display text-5xl font-bold text-flame-dark">
          {sweepPrice}
          <small className="ml-1 font-sans text-xs font-semibold text-coal-soft">TTC</small>
        </p>
      </div>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame-btn text-white">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
