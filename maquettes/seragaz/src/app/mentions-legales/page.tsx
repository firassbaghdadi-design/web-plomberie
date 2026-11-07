import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Sections";
import { credits, pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales du site SERAGAZ, chauffagiste à Paris 9";
const description =
  "Mentions légales de SERAGAZ, SAS au capital de 13 500 €, 69 rue de Dunkerque 75009 Paris : éditeur, responsable de la publication, hébergement, crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-16 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-14 max-w-5xl text-[2.4rem] sm:text-6xl" data-heat-start>Mentions légales de SERAGAZ, chauffagiste à Paris 9</h1>
          <p className="reponse-bref mt-8 max-w-3xl">
            Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site seragaz.fr les informations suivantes, reprises du site actuel de l'entreprise.
          </p>
        </div>
      </section>
      <section className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-[1.6rem] text-navy">Éditeur du site</h2>
            <p className="mt-4">Raison sociale : SERAGAZ (Jérémy Franche)<br />Siège social : {business.address.street}, {business.address.postalCode} Paris<br />Téléphone : {business.phoneDisplay}<br />Forme juridique : {business.legalForm}<br />N° d'inscription au répertoire des métiers : {business.registry}</p>
            <h2 className="mt-10 text-[1.6rem] text-navy">Responsable de la publication</h2>
            <p className="mt-4">{business.manager}, représentant légal de l'entreprise · <a href={`mailto:${business.email}`} className="underline">{business.email}</a><br />Tribunal compétent en cas de litige : Paris.</p>
            <h2 className="mt-10 text-[1.6rem] text-navy">Hébergement</h2>
            <p className="mt-4">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (hébergement de la maquette ; à mettre à jour lors de la mise en ligne).</p>
            <h2 className="mt-10 text-[1.6rem] text-navy">Données personnelles</h2>
            <p className="mt-4">Les informations envoyées par le formulaire de contact servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à {business.email}.</p>
          </div>
          <div>
            <h2 className="text-[1.6rem] text-navy">Crédits photographiques</h2>
            <p className="mt-4">Logo, photos d'intervention et logos de marques : SERAGAZ (site seragaz.fr). Photos de Paris et des communes voisines : Wikimedia Commons, sous licence libre. Photos d'artisans au travail : Pexels, sous licence Pexels.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {credits.map((c) => (
                <li key={c.id}>
                  <a href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(c.file)}`} target="_blank" rel="noopener" className="underline underline-offset-2">{c.alt}</a> : {c.credit}, {c.license}
                </li>
              ))}
              {pexelsCredits.map((c) => (
                <li key={c.id}>
                  <a href={`https://www.pexels.com/photo/${c.pexels}/`} target="_blank" rel="noopener" className="underline underline-offset-2">{c.alt}</a> : {c.credit}, Pexels (licence Pexels)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
