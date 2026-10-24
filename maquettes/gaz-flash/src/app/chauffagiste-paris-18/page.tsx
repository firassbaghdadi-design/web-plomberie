import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, business, priceGroups, sweepPrice } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.paris18;
export const metadata = pageMeta(path);

export default function Paris18Page() {
  const { address } = business;
  return (
    <>
      <PageHead
        path={path}
        aside={<Polaroid id="entretien2" alt="Illustration : visite d'entretien d'une chaudière" caption="Chauffagiste du 18e" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <Page
        aside={
          <>
            <Ticket
              className="lg:rotate-[1deg]"
              title="Entretien · Paris 18e"
              rows={[
                { label: "Chaudière, forfait révision", price: priceGroups[0].review.paris18 },
                { label: "Chaudière, contrat annuel", price: priceGroups[0].contract.paris18 },
                { label: "Ramonage, avec l'entretien", price: sweepPrice },
              ]}
              note="Prix TTC publiés par Gaz Flash pour le 18e."
            />
            <PhoneNote rotate={-1} />
          </>
        }
      >
        <h2 className="!mt-0">Un chauffagiste installé dans le 18e</h2>
        <p>
          Gaz Flash est au {address.street}, {address.postalCode} {address.city}. Si vous habitez le 18e, vous faites appel à une entreprise du quartier, installée là depuis 1965 : un standard au <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>, ouvert du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h, et une adresse que vous pouvez situer sur une carte.
        </p>
        <p>
          L'entreprise entretient, dépanne et installe des chaudières, chauffe-eau et régulations au gaz, et ramone les conduits de fumée. Elle se déplace dans tout l'arrondissement, de Montmartre à la Chapelle, en passant par Clignancourt, les Grandes-Carrières et la Goutte-d'Or.
        </p>

        <h2>Les tarifs d'entretien du 18e</h2>
        <p>
          Gaz Flash publie un prix propre au 18e, plus bas que celui du reste de Paris et de la petite couronne. Pour une chaudière : <strong>{priceGroups[0].review.paris18} TTC</strong> le forfait révision sans engagement et <strong>{priceGroups[0].contract.paris18} TTC</strong> le contrat annuel, dépannages compris (main-d'œuvre et déplacement, hors pièces). Pour une chaudière à condensation : {priceGroups[1].review.paris18} et {priceGroups[1].contract.paris18} TTC. Pour un radiateur, un chauffe-bain ou un appareil Styx : {priceGroups[2].review.paris18} et {priceGroups[2].contract.paris18} TTC. Tous les tarifs sont sur la page <Link href={PATHS.prices}>Nos tarifs</Link>.
        </p>

        <h2>Chauffer un immeuble parisien ancien : ce qui change</h2>
        <p>Dans les immeubles anciens du 18e, comme ailleurs à Paris, quelques réalités reviennent souvent :</p>
        <ul>
          <li><strong>Une chaudière dans un espace réduit :</strong> cuisine, placard, couloir. Les modèles compacts existent, comme la Saunier Duval ThemaClassic 25 kW ou la Chaffoteaux Mira C Green, large de 40 cm.</li>
          <li><strong>Des conduits parfois partagés :</strong> l'évacuation des fumées d'un immeuble collectif se vérifie avant de choisir entre <Link href={PATHS.condensing}>condensation</Link> et <Link href={PATHS.lowTemp}>basse température</Link>.</li>
          <li><strong>Le syndic et la copropriété :</strong> un changement qui touche aux parties communes (conduit, façade) peut demander l'accord de la copropriété. Renseignez-vous avant de signer un devis.</li>
          <li><strong>Un ramonage régulier :</strong> le conduit se ramone au moins une fois par an, par un professionnel qualifié qui remet un certificat (<Link href={PATHS.sweep}>voir le ramonage</Link>).</li>
        </ul>

        <h2>Ce que Gaz Flash fait pour le 18e</h2>
        <ul>
          <li><Link href={PATHS.maintenance}>Entretien de chaudière</Link> : forfait révision ou contrat annuel.</li>
          <li><Link href={PATHS.repair}>Dépannage</Link> du chauffage et de l'eau chaude, avec un devis détaillé.</li>
          <li><Link href={PATHS.install}>Installation</Link> de chaudière, chauffe-eau, régulation et radiateurs, après diagnostic.</li>
          <li><Link href={PATHS.sweep}>Ramonage</Link> du conduit de fumée gaz, pour {sweepPrice} TTC avec l'entretien.</li>
        </ul>
        <p>
          Pour une panne en cours, lisez d'abord <Link href={PATHS.repairGuide}>Dépannage de chaudière gaz à Paris</Link>. Pour un autre arrondissement ou une commune voisine, voyez la <Link href={PATHS.zones}>zone d'intervention</Link>.
        </p>
      </Page>

      <Faq keyName="paris18" />
      <SeeAlso
        links={[
          { path: PATHS.contact, text: "Contact et accès", why: "Téléphone, horaires, formulaire et croquis du quartier." },
          { path: PATHS.company, text: "L'entreprise", why: "L'histoire factuelle de la maison, les engagements et les informations légales." },
          { path: PATHS.maintenanceGuide, text: "Entretien de chaudière à Paris", why: "L'obligation annuelle, l'attestation, locataire ou propriétaire." },
        ]}
      />
      <CallStrip title="Un chauffagiste dans votre quartier" />
      <JsonLd nodes={pageNodes(path, { faq: "paris18", service: { serviceType: "Chauffagiste : entretien, dépannage, installation et ramonage gaz" } })} />
    </>
  );
}
