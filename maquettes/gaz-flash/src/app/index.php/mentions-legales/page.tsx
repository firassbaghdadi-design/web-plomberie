import { PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Mentions légales : éditeur, hébergement, RCS | Gaz Flash";
const description = "Mentions légales du site de Gaz Flash : éditeur, siège social à Paris 18e, immatriculation RCS et SIRET, direction de la publication, propriété intellectuelle.";
const crumbs = [rootCrumb, { name: "Mentions légales", path: PATHS.legal }];

export const metadata = pageMeta({ title, description, path: PATHS.legal });

export default function LegalPage() {
  const { legal, address } = business;
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Informations légales" title="Mentions légales" lead="Éditeur du site, hébergement et propriété intellectuelle." image="entretien2" />
      <section className="container-x pt-16">
        <div className="prose-gf max-w-3xl">
          <h2 className="!mt-0">Éditeur du site</h2>
          <p>
            <strong>{business.legalName}</strong>, {legal.form.toLowerCase()} au capital de {legal.capital}.<br />
            Siège social : {address.street}, {address.postalCode} {address.city}.<br />
            Téléphone : {business.phoneDisplay}.<br />
            {legal.rcs} · SIRET {legal.siret} · NAF {legal.naf} · {legal.opqcb}
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
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.legal }), breadcrumbNode(crumbs)]} />
    </>
  );
}
