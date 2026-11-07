import { Page, PageHead } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PATHS, business } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.legal;
export const metadata = pageMeta(path);

export default function LegalPage() {
  const { legal, address } = business;
  return (
    <>
      <PageHead path={path} />
      <Page>
        <h2 className="!mt-0">Éditeur du site</h2>
        <p>
          <strong>{business.legalName}</strong>, {legal.form.toLowerCase()} au capital de {legal.capital}.
          <br />
          Siège social : {address.street}, {address.postalCode} {address.city}.
          <br />
          Téléphone : {business.phoneDisplay}.
          <br />
          {legal.rcs} · SIRET {legal.siret} · NAF {legal.naf} · TVA intracommunautaire {legal.vat} · {legal.opqcb}
        </p>
        <p>Direction générale et direction de la publication : {legal.director}.</p>
        <h2>Hébergement</h2>
        <p>Hébergeur à compléter avant la mise en ligne (la maquette est hébergée par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis).</p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les éléments (textes, logos, images, éléments sonores, logiciels, icônes…) contenus dans le site sont protégés par le droit de propriété intellectuelle. Aucun des documents provenant du site ne peut être copié, reproduit, modifié, transmis ou diffusé de quelque manière que ce soit. Seul est autorisé le téléchargement d'une copie des documents pour une utilisation personnelle et à des fins non commerciales.
        </p>
        <p>Photos : © Fotolia, © Gazflash.</p>
        <h2>Garantie</h2>
        <p>
          Ce site a été réalisé avec le plus grand soin. Toutefois, {business.legalName} ne peut pas garantir que les informations qu'il contient soient exemptes d'erreurs et parfaitement précises, et exclut toute responsabilité des dommages découlant directement ou indirectement de son utilisation, sauf intention malveillante ou négligence grossière.
        </p>
        <h2>Avis Google</h2>
        <p>
          La note et les extraits d'avis affichés sur le site proviennent de la fiche Google Maps de l'entreprise ; ils sont signés du prénom et de l'initiale de leur auteur. Aucune donnée structurée de type note moyenne n'est publiée pour ces avis.
        </p>
      </Page>
      <JsonLd nodes={pageNodes(path)} />
    </>
  );
}
