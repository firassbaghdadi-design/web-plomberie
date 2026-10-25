import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { allPages } from "@/lib/pages";
import { localPages } from "@/lib/local";
import { PATHS } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.sitemap;
const title = "Plan du site SERAGAZ : chauffagiste et chaudière gaz Paris 9";
const description =
  "Plan du site de SERAGAZ, chauffagiste à Paris 9 : chaudière gaz, entretien, dépannage, ramonage, désembouage, compteur, zones d'intervention et contact.";
export const metadata = pageMeta({ title, description, path });

export default function PlanPage() {
  const local = new Set(localPages.map((p) => p.path));
  const groups = [
    { t: "Prestations", items: allPages.filter((p) => !local.has(p.path)) },
    { t: "Près de chez vous", items: allPages.filter((p) => local.has(p.path)) },
  ];
  return (
    <>
      <section className="bg-night text-white">
        <div className="wrap pb-14 pt-8 sm:pt-12">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Plan du site" }]} light />
          <h1 className="mt-10 text-4xl font-semibold sm:text-6xl">Plan du site de SERAGAZ, chauffagiste à Paris 9</h1>
          <p className="reponse-bref mt-6 max-w-3xl text-white/75">
            Toutes les pages du site de SERAGAZ, chauffagiste à Paris 9 depuis 1985 : les prestations autour de la chaudière et du chauffe-eau gaz, les pages par arrondissement et par commune de la zone d'intervention, la présentation de l'entreprise, les avis clients et la page de contact pour un devis gratuit.
          </p>
        </div>
      </section>
      <section className="bg-paper py-16">
        <div className="wrap grid gap-12 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.t}>
              <h2 className="text-2xl font-semibold text-night">{g.t}</h2>
              <ul className="mt-5 space-y-2.5">{g.items.map((p) => <li key={p.path}><Link href={p.path} className="text-ink-soft underline-offset-4 hover:text-blue hover:underline">{p.h1}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h2 className="text-2xl font-semibold text-night">SERAGAZ</h2>
            <ul className="mt-5 space-y-2.5">
              <li><Link href="/" className="text-ink-soft hover:text-blue">Accueil</Link></li>
              <li><Link href={PATHS.contact} className="text-ink-soft hover:text-blue">Contact et devis gratuit</Link></li>
              <li><Link href={PATHS.legal} className="text-ink-soft hover:text-blue">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Plan du site", path }])]} />
    </>
  );
}
