import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, business, priceGroups, sweepPrice } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.maintenance;
export const metadata = pageMeta(path);

const rows = [
  { what: "Visite annuelle d'entretien de la chaudière", contract: "Oui", review: "Oui" },
  { what: "Attestation d'entretien", contract: "Oui", review: "Oui" },
  { what: "Dépannages (main-d'œuvre et déplacement, hors pièces)", contract: "Tous inclus", review: "Non" },
  { what: "Intervention prioritaire en cas de panne", contract: "Oui", review: "Non" },
  { what: "Engagement", contract: "Voir les conditions d'abonnement", review: "Sans engagement" },
];

export default function MaintenancePage() {
  const chaudiere = priceGroups[0];
  return (
    <>
      <PageHead
        path={path}
        trail={[PATHS.services]}
        aside={<Polaroid id="entretien" alt="Illustration : entretien d'une chaudière gaz" caption="La visite annuelle" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={-2} priority />}
      />

      <Page
        aside={
          <>
            <Ticket
              className="lg:rotate-[1deg]"
              title="Chaudière · Paris 18e"
              rows={[
                { label: "Forfait révision", price: chaudiere.review.paris18 },
                { label: "Contrat annuel", price: chaudiere.contract.paris18 },
              ]}
              note="Ailleurs à Paris et en petite couronne : 150 € et 170 €."
            />
            <PhoneNote rotate={-1} />
            <Polaroid id="contrat" alt="Illustration : le contrat d'entretien Gaz Flash" caption="Le contrat" ratio="3 / 2" sizes="320px" rotate={1.5} />
          </>
        }
      >
        <h2 className="!mt-0">Le contrat d'entretien Gaz Flash</h2>
        <p>
          Une chaudière gaz se fait entretenir une fois par an : c'est une obligation, et la visite sert aussi à prévenir les pannes. Gaz Flash propose deux façons de s'en occuper. Le contrat prévoit :
        </p>
        <ul>
          <li>l'entretien des appareils à gaz ;</li>
          <li>un nettoyage pour la prévention des risques liés au monoxyde de carbone ;</li>
          <li>le ramonage du conduit gaz, en option possible au contrat ;</li>
          <li>le désembouage du réseau de chauffage, en option, sur demande.</li>
        </ul>
        <p>
          Pour les règles de l'entretien annuel (appareils concernés, attestation, locataire ou propriétaire), lisez le guide <Link href={PATHS.maintenanceGuide}>Entretien de chaudière gaz à Paris</Link>.
        </p>

        <h2>Contrat annuel ou forfait révision : quelle différence ?</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-[0.97rem]">
            <caption className="sr-only">Comparaison du contrat annuel et du forfait révision</caption>
            <thead>
              <tr className="border-b-2 border-ink/60 font-label uppercase tracking-wider">
                <th scope="col" className="py-2 pr-3"></th>
                <th scope="col" className="px-3 py-2">Contrat annuel</th>
                <th scope="col" className="px-3 py-2">Forfait révision</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.what} className="border-b border-dashed border-ink/25 align-top">
                  <th scope="row" className="py-3 pr-3 font-semibold text-ink-2">{row.what}</th>
                  <td className="px-3 py-3">{row.contract}</td>
                  <td className="px-3 py-3">{row.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Vous avez déjà un contrat avec Gaz Flash</h2>
        <p>
          L'équipe vient régulièrement effectuer la visite annuelle de prévention afin d'éviter toute panne. Si, malgré cela, votre chaudière gaz tombe en panne, une équipe spécialisée de Gaz Flash se déplace pour vous dépanner. Voir <Link href={PATHS.repair}>le dépannage</Link>.
        </p>

        <h2>Vous n'avez pas encore de contrat</h2>
        <p>
          Contactez le service commercial au <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> : il se met en contact avec vous pour proposer les meilleures conditions dans le cadre d'un contrat adapté à vos besoins. Les conditions générales d'abonnement sont consultables en ligne :{" "}
          <a href="https://gazflash.fr/wp-content/uploads/2022/CONTRAT%20D%E2%80%99ABONNEMENT%20&%20ENTRETIEN%20GAZFLASH.pdf" rel="noopener noreferrer" target="_blank">
            contrat d'abonnement et d'entretien (PDF)
          </a>
          .
        </p>

        <h2>Combien coûte l'entretien ?</h2>
        <p>
          À Paris 18e : {priceGroups[0].review.paris18} TTC le forfait révision et {priceGroups[0].contract.paris18} TTC le contrat annuel pour une chaudière ; {priceGroups[1].review.paris18} et {priceGroups[1].contract.paris18} TTC pour une chaudière à condensation ; {priceGroups[2].review.paris18} et {priceGroups[2].contract.paris18} TTC pour un radiateur, un chauffe-bain ou un appareil Styx. Le ramonage du conduit gaz s'ajoute pour {sweepPrice} TTC, uniquement avec l'entretien. Les prix des autres arrondissements et de la petite couronne sont sur la page <Link href={PATHS.prices}>Nos tarifs</Link>.
        </p>

        <h2>Avant la visite : trois minutes de préparation</h2>
        <ul>
          <li>Dégagez l'accès à la chaudière et au conduit, pour que le technicien travaille sans déplacer de meubles.</li>
          <li>Retrouvez l'attestation de l'an dernier et la marque de l'appareil, elles aident à reprendre le suivi.</li>
          <li>Notez ce que vous avez remarqué : bruit inhabituel, pression qui baisse, eau chaude capricieuse.</li>
          <li>Dites si vous voulez le ramonage, qui se fait uniquement en même temps que l'entretien.</li>
        </ul>
      </Page>

      <Faq keyName="maintenance" />
      <SeeAlso
        links={[
          { path: PATHS.prices, text: "Les tarifs d'entretien", why: "Tous les prix TTC, par type d'appareil et par zone." },
          { path: PATHS.sweep, text: "Le ramonage", why: "L'obligation annuelle et le certificat remis." },
          { path: PATHS.maintenanceGuide, text: "Entretien de chaudière à Paris", why: "Obligation, attestation, locataire ou propriétaire." },
        ]}
      />
      <CallStrip title="Souscrire un contrat ou réserver une révision" />
      <JsonLd nodes={pageNodes(path, { trail: [PATHS.services], faq: "maintenance", service: { serviceType: "Entretien de chaudière gaz" } })} />
    </>
  );
}
