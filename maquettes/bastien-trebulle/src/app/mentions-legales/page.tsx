import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, Folio } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | Bastien & Trebulle Paris";
const description =
  "Mentions légales du site de Bastien & Trebulle, plombier couvreur à Paris 16e : éditeur, assurance, hébergement, données personnelles et crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-12 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-12 text-[2.4rem] sm:text-[3.4rem]">Mentions légales, Paris 16e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente Bastien &amp; Trebulle, nom commercial de la société ETS André Bastien &amp; Cie, installée au 3, rue Gros à Paris 16e. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;assurance, l&apos;hébergeur, le traitement des données transmises par le formulaire de contact et les crédits des photographies.
          </p>
        </div>
      </section>
      <Folio n="01" rubrique="Éditeur" ariaLabel="Éditeur et assurance">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.legalShort}</strong>, société par actions simplifiée au capital de 77 600 €, exerçant sous le nom commercial Bastien &amp; Trebulle. Siège : {business.address.street}, {business.address.postalCode} Paris. {business.rcs}. TVA intracommunautaire {business.vat}. Téléphone : {business.phoneOfficeDisplay}, urgence : {business.phoneDisplay}. E-mail : {business.email}.</p>
          <p>Directeur de la publication : Édouard Bastien. Activités : plomberie, chauffage, couverture, zinguerie, toiture, rénovation et aménagement de salles de bains, dépannage d&apos;urgence.</p>
          <p>Assurance : responsabilité civile professionnelle et, lorsque cela est applicable, garantie décennale auprès de la SMABTP, 8 rue Louis Armand, 75015 Paris (zone couverte : France). Numéro de contrat à reprendre des mentions du site actuel.</p>
        </div>
      </Folio>
      <Folio n="02" rubrique="Hébergement" ariaLabel="Hébergement">
        <div className="prose-mt max-w-3xl">
          <p>Hébergement de cette maquette : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Le site actuel de l&apos;entreprise est hébergé par OVH SAS, Roubaix.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Folio>
      <Folio n="03" rubrique="Données" ariaLabel="Données personnelles">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande, à préparer un devis et à assurer son suivi. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et, dans certains cas, de portabilité : écrivez à {business.email}. Vous pouvez aussi saisir la CNIL.</p>
        </div>
      </Folio>
      <Folio n="04" rubrique="Crédits" ariaLabel="Crédits photos">
        <div className="prose-mt max-w-3xl">
          <p>Les photographies de chantiers sont celles publiées par l&apos;entreprise sur son site actuel. Les photographies complémentaires sont libres de droits :</p>
        </div>
        <ul className="mt-6 max-w-3xl border-t border-line">
          {pexelsCredits.map((c) => (
            <li key={c.key} className="border-b border-line py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels
            </li>
          ))}
        </ul>
      </Folio>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
