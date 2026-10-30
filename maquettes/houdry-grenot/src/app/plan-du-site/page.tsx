import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { allPages } from "@/lib/pages";
import { localPages } from "@/lib/local";
import { PATHS } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.sitemap;
const title = "Plan du site Houdry-Grenot : plombier à Paris 17e (pages)";
const description =
  "Plan du site de Houdry-Grenot, plombier à Paris 17e depuis 1996 : métiers, pages par arrondissement et par commune voisine, contact et demande de devis.";
export const metadata = pageMeta({ title, description, path });

export default function PlanPage() {
  const local = new Set(localPages.map((p) => p.path));
  const groups = [
    { t: "Métiers", items: allPages.filter((p) => !local.has(p.path)) },
    { t: "Près de chez vous", items: allPages.filter((p) => local.has(p.path)) },
  ];
  return (
    <>
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Plan du site" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl">Plan du site de Houdry-Grenot, plombier à Paris 17e</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Toutes les pages du site de Houdry-Grenot, plombier à Paris 17e depuis 1996 : les métiers de l&apos;entreprise, les pages consacrées au 17e, aux arrondissements et aux communes voisins, et la page de contact pour organiser un rendez-vous, demander un devis ou décrire une urgence.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.t}>
              <h2 className="text-[1.6rem]">{g.t}</h2>
              <ul className="mt-5 space-y-2.5">{g.items.map((p) => <li key={p.path}><Link href={p.path} className="transition hover:text-accent">{p.h1}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h2 className="text-[1.6rem]">Houdry-Grenot</h2>
            <ul className="mt-5 space-y-2.5">
              <li><Link href="/" className="transition hover:text-accent">Accueil</Link></li>
              <li><Link href={PATHS.contact} className="transition hover:text-accent">Contact et devis</Link></li>
              <li><Link href={PATHS.legal} className="transition hover:text-accent">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrap"><p className="mt-20 text-[1.4rem] font-extralight text-ink">Au service du 17e depuis 1996.</p></div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Plan du site", path }])]} />
    </>
  );
}
