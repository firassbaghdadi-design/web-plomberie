import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, business, priceGroups } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.maintenanceGuide;
export const metadata = pageMeta(path);

export default function MaintenanceGuidePage() {
  return (
    <>
      <PageHead
        path={path}
        aside={<Polaroid id="entretien" alt="Illustration : entretien d'une chaudière gaz" caption="Une fois par an" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <Page
        aside={
          <>
            <Ticket
              className="lg:rotate-[1deg]"
              title="Chaudière · Paris 18e"
              rows={[
                { label: "Forfait révision", price: priceGroups[0].review.paris18 },
                { label: "Contrat annuel", price: priceGroups[0].contract.paris18 },
              ]}
              note="Ailleurs à Paris et en petite couronne : 150 € et 170 €."
            />
            <PhoneNote rotate={-1} />
            <Polaroid id="entretien3" alt="Illustration : technicien lors d'une visite d'entretien" caption="L'attestation" ratio="3 / 2" sizes="320px" rotate={1.5} />
          </>
        }
      >
        <h2 className="!mt-0">Quelles chaudières doivent être entretenues chaque année ?</h2>
        <p>
          Les chaudières dont la puissance est comprise entre 4 et 400 kilowatts, quel que soit le combustible, gaz compris, doivent être entretenues chaque année : c'est l'objet du décret n° 2009-649 du 9 juin 2009. L'entretien doit être réalisé par un professionnel qualifié, qui remet une attestation d'entretien à l'occupant du logement. Une chaudière gaz de logement parisien entre presque toujours dans cette catégorie.
        </p>

        <h2>Locataire ou propriétaire : qui s'en occupe ?</h2>
        <p>
          En location, l'entretien courant de la chaudière individuelle est en principe à la charge du locataire, qui peut avoir à en justifier auprès du propriétaire. Le remplacement d'une pièce usée relève plutôt du propriétaire. Votre bail et votre contrat d'assurance précisent ces points : relisez-les, surtout si une clause particulière existe.
        </p>

        <h2>Que se passe-t-il pendant la visite ?</h2>
        <p>
          Le contenu exact dépend de l'appareil et des préconisations de son constructeur. En général, le technicien contrôle l'état de la chaudière, nettoie ce qui doit l'être, vérifie la combustion et les sécurités, puis règle l'appareil. Dans le contrat de Gaz Flash, cela se traduit par l'entretien de l'appareil à gaz et un nettoyage pour la prévention des risques liés au monoxyde de carbone. À la fin, vous recevez l'attestation d'entretien.
        </p>
        <ol>
          <li><strong>Rendez-vous :</strong> vous choisissez entre forfait révision et contrat annuel.</li>
          <li><strong>Visite :</strong> contrôle, nettoyage, réglage de la chaudière, avec le ramonage du conduit gaz en option.</li>
          <li><strong>Attestation :</strong> remise à l'issue de la visite ; conservez-la.</li>
          <li><strong>Suivi :</strong> avec un contrat, la visite de l'année suivante est programmée par l'équipe.</li>
        </ol>

        <h2>Forfait révision ou contrat annuel à Paris ?</h2>
        <p>
          Le forfait révision est une visite annuelle sans engagement : {priceGroups[0].review.paris18} TTC à Paris 18e pour une chaudière, {priceGroups[0].review.other} TTC ailleurs. Le contrat annuel coûte {priceGroups[0].contract.paris18} TTC à Paris 18e et {priceGroups[0].contract.other} TTC ailleurs, et ajoute tous les dépannages (main-d'œuvre et déplacement, hors pièces) ainsi qu'une intervention prioritaire. La comparaison complète est sur la page <Link href={PATHS.maintenance}>Entretien</Link>.
        </p>

        <h2>Et pour un chauffe-bain ou un chauffe-eau gaz ?</h2>
        <p>
          Le décret de 2009 vise les chaudières. Pour les chauffe-eau et chauffe-bains à gaz, un entretien régulier reste fortement conseillé, car une mauvaise combustion produit du monoxyde de carbone. Gaz Flash publie un tarif dédié, « Radiateur, chauffe-bain, Styx… » : {priceGroups[2].review.paris18} TTC en forfait révision et {priceGroups[2].contract.paris18} TTC en contrat annuel à Paris 18e.
        </p>

        <h2>Les erreurs à éviter</h2>
        <ul>
          <li>Attendre la panne : une visite annuelle sert justement à les prévenir.</li>
          <li>Confier l'entretien à quelqu'un qui n'est pas qualifié, ou perdre l'attestation.</li>
          <li>Oublier le ramonage du conduit, qui se fait au moins une fois par an : voir <Link href={PATHS.sweep}>Ramonage</Link>.</li>
        </ul>
        <p>
          Pour réserver une visite à Paris, appelez le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>.
        </p>
      </Page>

      <Faq keyName="maintenanceGuide" />
      <SeeAlso
        links={[
          { path: PATHS.maintenance, text: "Contrat d'entretien Gaz Flash", why: "Ce que couvre le contrat et la comparaison avec le forfait révision." },
          { path: PATHS.prices, text: "Les tarifs TTC", why: "Chaudières, condensation, chauffe-bain, ramonage : tout est affiché." },
          { path: PATHS.paris18, text: "Chauffagiste dans le 18e", why: "Le quartier de la maison et les tarifs de l'arrondissement." },
        ]}
      />
      <CallStrip type="entretien" title="Réserver votre entretien à Paris" />
      <JsonLd nodes={pageNodes(path, { faq: "maintenanceGuide", service: { serviceType: "Entretien annuel de chaudière gaz" } })} />
    </>
  );
}
