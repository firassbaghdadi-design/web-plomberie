import { JsonLd } from "@/components/JsonLd";
import { Niveau } from "@/components/Niveau";
import { Breadcrumbs } from "@/components/Sections";
import { companyPhotos, pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | SPC plombier couvreur Paris 12e";
const description =
  "Mentions légales du site de SPC, Société Plomberie Couverture, plombier couvreur à Paris 12e : éditeur, hébergement, données personnelles et crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-12 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-12 text-[2.4rem] sm:text-[3.4rem]">Mentions légales, Paris 12e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente SPC, Société Plomberie Couverture, entreprise de plomberie, de couverture et d&apos;assainissement installée au 66, avenue du Général-Michel-Bizot à Paris 12e. Vous trouverez ici l&apos;éditeur, l&apos;hébergeur, le traitement des données envoyées par le formulaire et les crédits des photographies.
          </p>
        </div>
      </section>
      <Niveau n="03" level="Éditeur" ariaLabel="Éditeur et hébergement">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.legalName}</strong>, SIREN {business.siren} (à confirmer). Siège : {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}. E-mail : {business.email}.</p>
          <p>Directeur de la publication : {business.manager}, dirigeant inscrit au registre (à confirmer).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Niveau>
      <Niveau n="02" level="Données" ariaLabel="Données personnelles" tone="zinc">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à {business.email}.</p>
        </div>
      </Niveau>
      <Niveau n="01" level="Crédits" ariaLabel="Crédits photos">
        <ul className="max-w-3xl border-t border-line">
          <li className="border-b border-line py-4 text-[0.95rem]">Logo et photographies de chantiers : SPC, reprises du site spc-services.fr ({companyPhotos.length} photos).</li>
          {pexelsCredits.map((c) => (
            <li key={c.key} className="border-b border-line py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels{c.used ? "" : " (photo de repli, non affichée)"}
            </li>
          ))}
        </ul>
      </Niveau>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
