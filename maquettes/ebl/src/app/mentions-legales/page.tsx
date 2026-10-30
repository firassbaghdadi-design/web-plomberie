import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales d'EBL, plombier à Paris 14e, rue d'Alésia";
const description =
  "Mentions légales du site d'EBL, Entreprise Bernard Lemaître, plombier au 5 rue d'Alésia, Paris 14e : éditeur, identification au registre, hébergement et crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl">Mentions légales d&apos;EBL, plombier à Paris 14e</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Ce site présente EBL, l&apos;Entreprise Bernard Lemaître, entreprise de plomberie, de gaz et de chauffage inscrite au registre depuis 1978 et installée au 5 rue d&apos;Alésia, à Paris 14e. Les informations ci-dessous identifient l&apos;éditeur, l&apos;hébergeur et l&apos;origine des photographies utilisées sur cette maquette.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[1.6rem]">Éditeur du site</h2>
            <p className="mt-4">{business.legalName}<br />{business.address.street}, {business.address.postalCode} Paris<br />Téléphone : {business.phoneDisplay}<br />SIREN : {business.siren} (RCS Paris)<br />Forme juridique : {business.legalForm}</p>
            <h2 className="mt-10 text-[1.6rem]">Responsable de la publication</h2>
            <p className="mt-4">Le gérant de la société (nom à confirmer par l&apos;entreprise avant mise en ligne).</p>
            <h2 className="mt-10 text-[1.6rem]">Hébergement</h2>
            <p className="mt-4">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (hébergement de la maquette ; à mettre à jour lors de la mise en ligne).</p>
            <h2 className="mt-10 text-[1.6rem]">Données personnelles</h2>
            <p className="mt-4">Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins. Vous pouvez demander leur suppression en appelant le {business.phoneDisplay}.</p>
          </div>
          <div>
            <h2 className="text-[1.6rem]">Crédits photographiques</h2>
            <p className="mt-4">Photos de mains et d&apos;outils : Pexels, sous licence Pexels. Coupe d&apos;immeuble : dessin réalisé pour ce site.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {pexelsCredits.map((c) => (
                <li key={c.id}>
                  <a href={`https://www.pexels.com/photo/${c.pexels}/`} target="_blank" rel="noopener" className="underline underline-offset-2">{c.alt}</a> : {c.credit}, Pexels (licence Pexels)
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap" data-floor="5"><p className="mt-20 text-[1.4rem] font-extralight text-ink">De la cave aux toits, depuis {business.founded}.</p></div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
