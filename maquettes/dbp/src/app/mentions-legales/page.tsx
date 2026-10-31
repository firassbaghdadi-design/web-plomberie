import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | DBP Plomberie Paris 20e";
const description =
  "Mentions légales du site de DBP Plomberie-Chauffage, plombier chauffagiste à Paris 20e : éditeur, hébergement, données personnelles et crédits photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-16">
          <div className="border-b border-ink py-3"><Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} /></div>
          <h1 className="mt-8 text-[2.7rem] sm:text-[4rem] lg:text-[5.6rem]">Mentions légales, Paris 20e</h1>
          <p className="reponse-bref mt-8 max-w-[60rem]">
            Ce site présente DBP Plomberie-Chauffage, société à responsabilité limitée installée au 1, villa Gagliardini à Paris 20e. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;hébergeur, le traitement des données transmises par le formulaire de contact et les crédits des photographies utilisées.
          </p>
        </div>
      </section>
      <Section t="16,0" rubrique="Éditeur" ariaLabel="Éditeur et hébergement">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.legalName}</strong> (nom commercial : {business.name}), {business.rcs}. Siège : {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}.</p>
          <p>Activité : {business.naf}. Directeur de la publication : le représentant légal de la société (à confirmer).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Section>
      <Section t="18,5" rubrique="Données" ariaLabel="Données personnelles">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à l&apos;adresse postale de la société.</p>
        </div>
      </Section>
      <Section t="21,0" rubrique="Crédits" ariaLabel="Crédits photos">
        <ul className="max-w-3xl border-t-2 border-ink">
          {pexelsCredits.map((c) => (
            <li key={c.key} className="border-b border-ink/25 py-4 text-[0.95rem]">
              « {c.title} », photo Pexels n° {c.id}, licence Pexels
            </li>
          ))}
        </ul>
      </Section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
