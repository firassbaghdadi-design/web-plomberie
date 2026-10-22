import { PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Protection des données personnelles : vos droits | Gaz Flash";
const description = "Politique de protection des données de Gaz Flash : finalités, durée de conservation, vos droits et contact du délégué à la protection des données personnelles.";
const crumbs = [rootCrumb, { name: "Données personnelles", path: PATHS.privacy }];

export const metadata = pageMeta({ title, description, path: PATHS.privacy });

const purposes = [
  "Gérer l'identité du client ou de l'utilisateur et l'authentifier",
  "Gérer la commande",
  "Gérer le matériel",
  "Facturer et encaisser les paiements",
  "Assurer le service avant-vente et vendre",
  "Gérer les données personnelles, caractéristiques et droits d'un contrat",
  "Traiter les résiliations et les réclamations",
  "Gérer les courriers entrants",
  "Recouvrer les impayés",
  "Gérer les demandes relatives aux droits des personnes concernées",
  "Stocker des données du client ou d'un utilisateur",
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Vie privée" title="Protection des données personnelles" lead="Gaz Flash s'engage à assurer la protection, la confidentialité et la sécurité des données personnelles des utilisateurs de ses services." image="entretien2" />
      <section className="container-x pt-16">
        <div className="prose-gf max-w-3xl">
          <h2 className="!mt-0">Pourquoi Gaz Flash traite vos données</h2>
          <p>Gaz Flash ne traite les données personnelles que pour des finalités déterminées, explicites et légitimes, dans le cadre de l'exécution d'un contrat. Les finalités poursuivies sont les suivantes :</p>
          <ul>
            {purposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ul>
          <p>Les données sont conservées pour la durée nécessaire à l'accomplissement de ces finalités. Pour l'exécution du contrat, elles peuvent être conservées au maximum cinq ans à compter de la fin de la relation.</p>
          <h2>Formulaire de contact</h2>
          <p>Les informations saisies dans le formulaire de contact (nom, téléphone, e-mail, ville, message) sont transmises par e-mail à l'entreprise pour répondre à votre demande.</p>
          <h2>Vos droits</h2>
          <p>Vous disposez d'un droit d'accès, de rectification et de suppression des données qui vous concernent, ainsi que du droit de vous opposer aux traitements ou d'en demander la limitation. Vous pouvez aussi émettre des directives sur la conservation, la suppression ou la communication de vos données après votre décès.</p>
          <h2>Exercer vos droits</h2>
          <p>
            Vous pouvez exercer vos droits à tout moment, ou contacter le délégué à la protection des données en écrivant à {business.legalName} ({business.legal.dpo}), {business.address.street}, {business.address.postalCode} {business.address.city}. Toute demande doit être accompagnée d'un justificatif d'identité. Une réponse vous sera adressée dans un délai d'un mois à compter de la réception de la demande.
          </p>
          <p>Si les échanges n'ont pas été satisfaisants, vous pouvez introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés (CNIL).</p>
          <h2>Sécurité des données</h2>
          <p>Gaz Flash met en place les mesures techniques et organisationnelles appropriées pour éviter la perte, la mauvaise utilisation, l'altération et la suppression des données personnelles, adaptées au niveau de sensibilité des données et au niveau de risque du traitement.</p>
          <h2>Évolution de la politique</h2>
          <p>La présente politique peut être amenée à évoluer.</p>
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.privacy }), breadcrumbNode(crumbs)]} />
    </>
  );
}
