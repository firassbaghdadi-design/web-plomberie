import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales de SMAP, plombier à Paris 12e et rénovation";
const description =
  "Mentions légales du site de SMAP, plomberie, aménagement et maintenance à Paris 12e : éditeur, hébergement, crédits photos et données personnelles RGPD.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl">Mentions légales de SMAP, plombier à Paris 12e</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Ce site présente SMAP (Maintenance, Aménagement, Plomberie), entreprise installée à Paris 12e et créée en 2007. Les informations ci-dessous identifient l&apos;éditeur, l&apos;hébergeur et l&apos;origine des photographies de cette maquette. Elles sont à compléter avec l&apos;adresse, le numéro d&apos;immatriculation et le directeur de la publication, que l&apos;entreprise doit confirmer.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[1.6rem]">Éditeur du site</h2>
            <p className="mt-4">{business.legalName}<br />Paris 12e (75012), adresse complète à confirmer<br />Téléphone : {business.phoneDisplay}<br />E-mail : <a href={`mailto:${business.email}`} className="underline">{business.email}</a></p>
            <h2 className="mt-10 text-[1.6rem]">Responsable de la publication</h2>
            <p className="mt-4">Le dirigeant de l&apos;entreprise (nom à confirmer).</p>
            <h2 className="mt-10 text-[1.6rem]">Hébergement</h2>
            <p className="mt-4">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (hébergement de la maquette ; à mettre à jour lors de la mise en ligne).</p>
            <h2 className="mt-10 text-[1.6rem]">Données personnelles</h2>
            <p className="mt-4">Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins. Vous pouvez demander leur suppression à {business.email}.</p>
          </div>
          <div>
            <h2 className="text-[1.6rem]">Crédits photographiques</h2>
            <p className="mt-4">Photos publiées par l&apos;entreprise sur son site : SMAP. Photos d&apos;artisans au travail : Pexels, sous licence Pexels. Plans et cotes dessinés pour ce site.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {pexelsCredits.map((c) => (
                <li key={c.id}>
                  <a href={`https://www.pexels.com/photo/${c.pexels}/`} target="_blank" rel="noopener" className="underline underline-offset-2">{c.alt}</a> : {c.credit}, Pexels (licence Pexels)
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap"><p className="mt-20 text-[1.4rem] font-extralight text-ink">Du plan au chantier, depuis {business.founded}.</p></div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
