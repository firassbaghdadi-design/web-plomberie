import { JsonLd } from "@/components/JsonLd";
import { Raccord } from "@/components/Raccord";
import { Breadcrumbs } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | Charles Pereira, Paris 15e";
const description =
  "Mentions légales du site de l'Entreprise Charles Pereira, plombier à Paris 15e : éditeur, hébergement, données personnelles et crédits photos de la maquette.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section className="relative z-10">
        <div className="wrap pb-6 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-12 text-[2.4rem] sm:text-[3.4rem]">Mentions légales, Paris 15e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente l&apos;Entreprise Charles Pereira, société à responsabilité limitée fondée en 2008 et installée au 26, boulevard Garibaldi à Paris 15e. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;hébergeur, le traitement des données transmises par le formulaire de contact et les crédits des photographies utilisées.
          </p>
        </div>
      </section>
      <Raccord n="01" index={1} ariaLabel="Éditeur et hébergement">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.name}</strong>, société à responsabilité limitée au capital de 10 000 €, {business.rcs}. Siège : {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}.</p>
          <p>Activité : {business.naf}. Directeur de la publication : le représentant légal de la société (à confirmer).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Raccord>
      <Raccord n="02" index={2} ariaLabel="Données personnelles">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à l&apos;adresse postale de la société.</p>
        </div>
      </Raccord>
      <Raccord n="03" index={3} ariaLabel="Crédits photos">
        <ul className="max-w-3xl border-t border-line">
          {pexelsCredits.map((c) => (
            <li key={c.key} className="border-b border-line py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels
            </li>
          ))}
        </ul>
      </Raccord>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
