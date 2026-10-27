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
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Plan du site" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl" data-heat-start>Plan du site de SERAGAZ, chauffagiste à Paris 9</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Toutes les pages du site de SERAGAZ, chauffagiste à Paris 9 depuis 1985 : les prestations autour de la chaudière et du chauffe-eau gaz, les pages par arrondissement et par commune de la zone d'intervention, la présentation de l'entreprise, les avis clients et la page de contact pour un devis gratuit.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.t}>
              <h2 className="text-[1.6rem] text-navy">{g.t}</h2>
              <ul className="mt-5 space-y-2.5">{g.items.map((p) => <li key={p.path}><Link href={p.path} className="transition hover:text-blue">{p.h1}</Link></li>)}</ul>
            </div>
          ))}
          <div>
            <h2 className="text-[1.6rem] text-navy">SERAGAZ</h2>
            <ul className="mt-5 space-y-2.5">
              <li><Link href="/" className="transition hover:text-blue">Accueil</Link></li>
              <li><Link href={PATHS.contact} className="transition hover:text-blue">Contact et devis gratuit</Link></li>
              <li><Link href={PATHS.legal} className="transition hover:text-blue">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Plan du site", path }])]} />
    </>
  );
}
