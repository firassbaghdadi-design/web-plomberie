import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, offers } from "@/lib/site";

const title = "Tarifs refonte de site pour plombier | Atelier Truelle";
const description = "Refonte de site à partir de 1 200 €, avec fiche Google et avis à partir de 1 600 €, suivi de 79 à 149 € par mois. Maquette gratuite, prix annoncé avant travaux.";
const path = PATHS.offers;
const intro = "Atelier Truelle propose trois niveaux : la refonte du site à partir de 1 200 €, la refonte avec travail sur la fiche Google à partir de 1 600 €, et un suivi mensuel de 79 à 149 €. La maquette est gratuite et le devis précise le prix exact avant le début des travaux.";

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Offres et tarifs" title="Trois niveaux, un prix clair avant de commencer." lead="Commencez par la refonte, ajoutez la fiche Google, puis gardez un suivi si vous le souhaitez." crumbs={[{ name: "Accueil", href: "/" }, { name: "Offres" }]} />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            Combien coûte la refonte du site d'un artisan ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {intro}
          </p>
        </div>
      </section>
      <section aria-label="Les trois offres" className="section">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <article key={o.key} className={`card flex flex-col ${"featured" in o ? "ring-2 ring-terre-action" : ""}`} data-reveal style={{ ["--d" as string]: `${i * 110}ms` }}>
              {"featured" in o ? <p className="mb-3 inline-block self-start rounded-full bg-terre-action px-3 py-1 font-display text-xs font-bold uppercase tracking-widest text-white">Le plus choisi par les artisans</p> : null}
              <h3 className="text-2xl">{o.name}</h3>
              <p className="mt-3 font-display text-3xl font-extrabold text-terre-dark">{o.price}</p>
              <p className="mt-1 text-sm text-zinc-dark">{o.note}</p>
              <p className="mt-4">{o.lead}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-terre-action" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-dark mt-8">
                Recevoir une maquette
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
        <p className="container-x mt-10 max-w-3xl text-sm text-zinc-dark" data-reveal>
          Les prix sont des points de départ, donnés à titre indicatif. Le devis, gratuit, précise le montant exact et la TVA applicable selon notre statut. Le tarif dépend du nombre de pages et de la complexité de votre charte graphique.
        </p>
      </section>
      <CtaBand title="Voyez d'abord, décidez ensuite." text="La maquette est offerte. Le devis ne vient qu'après, si elle vous plaît." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Offres", path }]), serviceNode("Refonte de site web, fiche Google et suivi pour artisans", path, intro)]} />
    </>
  );
}
