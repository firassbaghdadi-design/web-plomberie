import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales de l'Entreprise Clairon, plombier Paris 15e";
const description =
  "Mentions légales du site de l'Entreprise Clairon, plombier, couvreur et chauffagiste au 23 rue d'Ouessant, Paris 15e : éditeur, hébergement, crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl">Mentions légales de l&apos;Entreprise Clairon, plombier à Paris 15e</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Ce site présente l&apos;Entreprise Clairon, entreprise familiale de plomberie, couverture, chauffage et petite maçonnerie créée en 1943 et installée au 23 rue d&apos;Ouessant, à Paris 15e. Les informations ci-dessous identifient l&apos;éditeur, l&apos;hébergeur et l&apos;origine des photographies utilisées sur cette maquette.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[1.6rem]">Éditeur du site</h2>
            <p className="mt-4">{business.legalName}<br />{business.address.street}, {business.address.postalCode} Paris<br />Téléphone : {business.phoneDisplay}<br />E-mail : <a href={`mailto:${business.email}`} className="underline">{business.email}</a></p>
            <h2 className="mt-10 text-[1.6rem]">Responsable de la publication</h2>
            <p className="mt-4">{business.manager}, dirigeant de l&apos;entreprise.</p>
            <h2 className="mt-10 text-[1.6rem]">Hébergement</h2>
            <p className="mt-4">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (hébergement de la maquette ; à mettre à jour lors de la mise en ligne).</p>
            <h2 className="mt-10 text-[1.6rem]">Données personnelles</h2>
            <p className="mt-4">Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins. Vous pouvez demander leur suppression à {business.email}.</p>
          </div>
          <div>
            <h2 className="text-[1.6rem]">Crédits photographiques</h2>
            <p className="mt-4">Photos publiées par l&apos;entreprise sur son site : Entreprise Clairon. Photos d&apos;artisans au travail : Pexels, sous licence Pexels. Dessin du quartier : réalisé pour ce site.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {pexelsCredits.map((c) => (
                <li key={c.id}>
                  <a href={`https://www.pexels.com/photo/${c.pexels}/`} target="_blank" rel="noopener" className="underline underline-offset-2">{c.alt}</a> : {c.credit}, Pexels (licence Pexels)
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap"><p className="mt-20 text-[1.4rem] font-extralight text-ink">D&apos;aplomb depuis {business.founded}.</p></div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
