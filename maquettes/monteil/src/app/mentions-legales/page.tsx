import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, Sec } from "@/components/Sections";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits | Monteil & Cie Paris 11e";
const description =
  "Mentions légales du site de Monteil & Cie, plombier chauffagiste à Paris 11e : éditeur, hébergement, données personnelles transmises par le formulaire, crédits.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section>
        <div className="wrap pb-12 pt-6 sm:pt-10">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="hp hp-load mt-12 text-[2.3rem] sm:text-[3.3rem]">Mentions légales, Paris 11e</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente Monteil &amp; Cie, entreprise de plomberie, de chauffage et de couverture installée au 35, rue Saint-Ambroise à Paris 11e. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;hébergeur, le traitement des données transmises par le formulaire de contact et les crédits.
          </p>
        </div>
      </section>
      <Sec n="01" rubrique="Éditeur">
        <div className="prose-mt max-w-3xl">
          <p><strong>{business.name}</strong>, {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}. E-mail : {business.email}.</p>
          <p>Forme juridique, capital, numéro d&apos;immatriculation et directeur de la publication : à compléter avec les informations de l&apos;entreprise.</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>Maquette réalisée par l&apos;agence Atelier Truelle, non référencée et non publiée.</p>
        </div>
      </Sec>
      <Sec n="02" rubrique="Données">
        <div className="prose-mt max-w-3xl">
          <p>Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p>Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à l&apos;adresse e-mail de la société.</p>
        </div>
      </Sec>
      <Sec n="03" rubrique="Crédits">
        <div className="prose-mt max-w-3xl">
          <p>Les photographies des chantiers et de l&apos;équipe sont celles de Monteil &amp; Cie, reprises de son site actuel. La police de caractères Figtree est diffusée sous licence SIL Open Font.</p>
        </div>
      </Sec>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
