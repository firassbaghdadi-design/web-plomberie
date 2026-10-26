import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, business } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.repairGuide;
export const metadata = pageMeta(path);

const checks = [
  { sign: "Plus de chauffage ni d'eau chaude, écran éteint", look: "L'alimentation électrique (prise, disjoncteur) et le robinet de gaz de l'appareil, qui doit être ouvert.", call: "Si tout est en ordre, appelez." },
  { sign: "Écran allumé avec un message ou un code", look: "Notez le code et la marque. Ne forcez pas des relances en boucle.", call: "Appelez en donnant le code." },
  { sign: "Pression de chauffage trop basse", look: "Le manomètre de la chaudière. La notice du constructeur indique la plage normale, souvent entre 1 et 2 bars à froid.", call: "Si elle redescend, une fuite est possible : appelez." },
  { sign: "Radiateurs froids en haut, chauds en bas", look: "De l'air peut être piégé dans le circuit : une purge des radiateurs suffit parfois.", call: "Si le défaut revient, faites diagnostiquer." },
  { sign: "Chauffage correct mais pas d'eau chaude", look: "Le réglage de la température d'eau chaude et le mode de l'appareil.", call: "Sinon, la production d'eau chaude est à diagnostiquer." },
  { sign: "Bruits, claquements, vibrations", look: "La pression et la circulation de l'eau.", call: "À faire diagnostiquer, sans attendre l'hiver." },
];

export default function RepairGuidePage() {
  return (
    <>
      <PageHead
        path={path}
        aside={<Polaroid id="depannage" alt="Illustration : dépannage d'un appareil de chauffage" caption="Respirez, on vérifie" ratio="3 / 2" sizes="(min-width:1200px) 1120px, 100vw" rotate={-2} priority />}
      />

      <Page
        aside={
          <>
            <div className="affiche red">
              <p className="label text-red-dark">Les numéros utiles</p>
              <ul className="mt-2 space-y-1 text-[0.97rem]">
                <li>Pompiers : <strong>18</strong> ou <strong>112</strong></li>
                <li>Urgence gaz GRDF : <strong>0 800 47 33 33</strong></li>
                <li>Gaz Flash : <a href={`tel:${business.phoneTel}`} className="font-medium">{business.phoneDisplay}</a></li>
              </ul>
            </div>
            <PhoneNote rotate={-1} />
          </>
        }
      >
        <h2 className="!mt-0">D'abord : y a-t-il une odeur de gaz ?</h2>
        <p>Si vous sentez le gaz, ce n'est pas une panne ordinaire : la sécurité passe avant tout.</p>
        <ol>
          <li>Ne touchez à aucun interrupteur ni appareil électrique, et n'allumez aucune flamme.</li>
          <li>Fermez le robinet de gaz si vous pouvez l'atteindre sans risque.</li>
          <li>Ouvrez grand les fenêtres pour aérer.</li>
          <li>Quittez le logement et prévenez vos voisins.</li>
          <li>Depuis l'extérieur, appelez les pompiers (18 ou 112) ou le numéro d'urgence gaz de GRDF, le 0 800 47 33 33.</li>
        </ol>
        <p>Ne rappelez un dépanneur qu'ensuite, une fois le danger écarté.</p>

        <h2>Chaudière en panne : les premières vérifications</h2>
        <p>Sans odeur de gaz, quelques gestes simples font gagner du temps. Ils ne remplacent pas un technicien : ils aident à décrire la panne.</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[0.97rem]">
            <caption className="sr-only">Symptômes courants d'une chaudière gaz, vérifications et moment d'appeler</caption>
            <thead>
              <tr className="border-b border-ink label text-ink-soft">
                <th scope="col" className="py-2 pr-3">Ce que vous constatez</th>
                <th scope="col" className="px-3 py-2">Ce que vous pouvez vérifier</th>
                <th scope="col" className="px-3 py-2">Quand appeler</th>
              </tr>
            </thead>
            <tbody>
              {checks.map((c) => (
                <tr key={c.sign} className="border-b border-line align-top">
                  <th scope="row" className="py-3 pr-3 font-medium text-ink-2">{c.sign}</th>
                  <td className="px-3 py-3">{c.look}</td>
                  <td className="px-3 py-3">{c.call}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Ce qu'il ne faut pas faire</h2>
        <ul>
          <li>Démonter le capot ou toucher aux organes de combustion : l'appareil fonctionne au gaz.</li>
          <li>Neutraliser une sécurité ou relancer l'appareil en boucle pour « forcer ».</li>
          <li>Remplir le circuit de chauffage au hasard : si la pression retombe, c'est qu'il faut chercher pourquoi.</li>
          <li>Confier une intervention gaz à quelqu'un qui n'est pas qualifié.</li>
        </ul>

        <h2>Un mot sur le monoxyde de carbone</h2>
        <p>
          Le monoxyde de carbone n'a ni odeur ni couleur. Maux de tête, nausées, vertiges ressentis par plusieurs personnes en même temps doivent alerter. Aérez, arrêtez les appareils à combustion, sortez et appelez le 18 ou le 112. L'entretien annuel et le ramonage, qui servent aussi à prévenir ce risque, sont décrits sur les pages <Link href={PATHS.maintenanceGuide}>Entretien de chaudière</Link> et <Link href={PATHS.sweep}>Ramonage</Link>.
        </p>

        <h2>Appeler Gaz Flash pour un dépannage à Paris</h2>
        <p>
          Gaz Flash dépanne et remet en route le chauffage à gaz, le chauffe-eau à gaz, le radiateur à gaz et le ballon électrique. Appelez le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h, avec votre adresse, la marque de l'appareil et le message affiché. Vous recevez un devis détaillé, des tarifs prédéfinis et une explication claire de l'origine de la panne. Avec un <Link href={PATHS.maintenance}>contrat d'entretien</Link>, les dépannages sont inclus (main-d'œuvre et déplacement, hors pièces) et l'intervention est prioritaire. Tous les détails sont sur la page <Link href={PATHS.repair}>Dépannage</Link>.
        </p>
      </Page>

      <Faq keyName="panne" />
      <SeeAlso
        links={[
          { path: PATHS.repair, text: "Le service de dépannage", why: "Les appareils dépannés, les engagements et le déroulé." },
          { path: PATHS.faq, text: "Questions fréquentes", why: "Gaz, monoxyde de carbone, durée de vie, ramonage." },
          { path: PATHS.contact, text: "Contact", why: "Le standard, les horaires et le formulaire." },
        ]}
      />
      <CallStrip title="Une chaudière en panne à Paris ?" text="Appelez le standard, avec votre adresse et la marque de l'appareil." />
      <JsonLd nodes={pageNodes(path, { faq: "panne", service: { serviceType: "Dépannage de chaudière gaz" } })} />
    </>
  );
}
