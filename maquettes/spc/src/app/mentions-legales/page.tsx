import { JsonLd } from "@/components/JsonLd";
import { Etage } from "@/components/Etage";
import { Breadcrumbs } from "@/components/Sections";
import { companyPhotos, pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | SPC plombier Paris 12e";
const description =
  "Mentions légales du site de SPC, Société Plomberie Couverture, plombier couvreur à Paris 12e : éditeur, hébergement, données personnelles et crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section className="hero relative overflow-hidden" data-cote="+24,00" data-level="Faîtage">
        <div className="hero-sky pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="wrap relative pb-16 pt-[calc(var(--head-h)+1.5rem)] lg:pt-[calc(var(--head-h)+2.5rem)]">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-12 text-[2.6rem] sm:text-[3.8rem] xl:text-[4.6rem]">Mentions légales, Paris 12e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente SPC, Société Plomberie Couverture, entreprise de plomberie, de couverture et d&apos;assainissement installée au 66, avenue du Général-Michel-Bizot à Paris 12e. Vous trouverez ici l&apos;éditeur, l&apos;hébergeur, le traitement des données envoyées par le formulaire et les crédits des photographies.
          </p>
        </div>
      </section>
      <Etage cote="+12,00" level="Éditeur" depth={0.25} ariaLabel="Éditeur et hébergement">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.legalName}</strong>, SIREN {business.siren} (à confirmer). Siège : {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}. E-mail : {business.email}.</p>
          <p>Directeur de la publication : {business.manager}, dirigeant inscrit au registre (à confirmer).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Etage>
      <Etage cote="±0,00" level="Données" depth={0.55} ariaLabel="Données personnelles">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à {business.email}.</p>
        </div>
      </Etage>
      <Etage cote="−3,50" level="Crédits" depth={0.85} ariaLabel="Crédits photos">
        <ul className="max-w-3xl rule border-t">
          <li className="rule border-b py-4 text-[0.95rem]">Logo et photographies de chantiers : SPC, reprises du site spc-services.fr ({companyPhotos.length} photos).</li>
          {pexelsCredits.map((c) => (
            <li key={c.key} className="rule border-b py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels{c.used ? "" : " (photo de repli, non affichée)"}
            </li>
          ))}
        </ul>
      </Etage>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
