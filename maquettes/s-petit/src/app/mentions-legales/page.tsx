import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, Station } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | S. Petit plombier Paris 14e";
const description =
  "Mentions légales du site de S. Petit, plombier à Paris 14e : éditeur, hébergement, données personnelles du formulaire de contact et crédits des photographies.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section data-station className="station" style={{ ["--dot-y" as string]: "2.55rem" }}>
        <span className="station-pt" aria-hidden="true" />
        <div className="wrap tx pb-12 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-12 text-[2.4rem] sm:text-[3.4rem]">Mentions légales, Paris 14e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente S. Petit, société à responsabilité limitée à associé unique créée en 2007 et installée au 36, avenue Jean Moulin à Paris 14e. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;hébergeur, le traitement des données transmises par le formulaire de contact et les crédits des photographies.
          </p>
        </div>
      </section>
      <Station n="01" rubrique="Éditeur" ariaLabel="Éditeur et hébergement">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.legalName}</strong>, {business.rcs}, SIREN {business.siren}. Siège : {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}.</p>
          <p>Activité : {business.naf}. Directeur de la publication : le représentant légal de la société (à confirmer).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Station>
      <Station n="02" rubrique="Données" ariaLabel="Données personnelles">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à l&apos;adresse postale de la société.</p>
        </div>
      </Station>
      <Station n="03" rubrique="Crédits" ariaLabel="Crédits photos">
        <ul className="max-w-3xl border-t border-line">
          {pexelsCredits.map((c) => (
            <li key={c.key} className="border-b border-line py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-[0.95rem]">Les extraits d&apos;avis cités sur l&apos;accueil proviennent d&apos;avis publics de la fiche Pages Jaunes de l&apos;entreprise, reproduits sans nom d&apos;auteur.</p>
      </Station>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
