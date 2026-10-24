import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Frame, Polaroid } from "@/components/Photo";
import { PATHS, business } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.repair;
export const metadata = pageMeta(path);

const engagements = [
  "Respect des délais d'intervention convenus",
  "Interventions rapides",
  "Permanence téléphonique",
  "Tarifs prédéfinis",
  "Conseils pratiques",
  "Personnel qualifié",
  "Personnel formé par les constructeurs",
  "Devis détaillé",
  "Explications claires sur l'origine de la panne",
];

export default function RepairPage() {
  return (
    <>
      <PageHead
        path={path}
        trail={[PATHS.services]}
        aside={<Polaroid id="depannage" alt="Illustration : dépannage d'un appareil de chauffage" caption="Quand ça ne chauffe plus" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <Page
        aside={
          <>
            <PhoneNote rotate={-1.2} />
            <Polaroid id="depannage2" alt="Illustration : technicien au travail sur une installation de chauffage" caption="Un devis détaillé" ratio="4 / 3" sizes="320px" rotate={1.5} />
            <Polaroid id="depannage3" alt="Illustration : intervention sur un appareil à gaz" caption="Des explications claires" ratio="4 / 3" sizes="320px" rotate={-1.5} />
            <div className="mx-auto w-48">
              <Frame id="gabarit" alt="" ratio="495 / 400" sizes="192px" />
            </div>
          </>
        }
      >
        <h2 className="!mt-0">Dépannage et remise en route</h2>
        <p>Gaz Flash dépanne et remet en route, à Paris et en petite couronne :</p>
        <ul>
          <li>le chauffage à gaz ;</li>
          <li>le chauffe-eau à gaz ;</li>
          <li>le radiateur à gaz ;</li>
          <li>le ballon électrique.</li>
        </ul>
        <p>
          Les interventions sont rapides et effectuées par des techniciens spécialisés, qualifiés et formés par les constructeurs. Appelez le standard au <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>, du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h.
        </p>

        <div className="affiche red">
          <p className="hand text-[1.8rem] text-red-btn">Ça sent le gaz ?</p>
          <p className="mt-1">
            Ne cherchez pas d'abord un dépanneur : fermez le robinet de gaz si vous le pouvez, ouvrez les fenêtres, n'actionnez aucun interrupteur, sortez et appelez les secours (18 ou 112) depuis l'extérieur. Détails sur la page <Link href={PATHS.repairGuide}>Dépannage de chaudière gaz à Paris</Link>.
          </p>
        </div>

        <h2>Nos engagements pour le dépannage de chauffage au gaz</h2>
        <ul>
          {engagements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Comment se passe un dépannage ?</h2>
        <ol>
          <li><strong>Vous appelez</strong> et décrivez la panne : appareil, marque, ce qui s'affiche ou ce que vous constatez.</li>
          <li><strong>Vous recevez un devis détaillé</strong>, sur la base de tarifs prédéfinis, avant que l'intervention ne commence.</li>
          <li><strong>Le technicien intervient</strong> dans les délais convenus et vous explique l'origine de la panne en termes clairs.</li>
          <li><strong>Vous repartez avec des conseils pratiques</strong> pour éviter que cela ne recommence.</li>
        </ol>

        <h2>Avec ou sans contrat d'entretien</h2>
        <p>
          Avec un <Link href={PATHS.maintenance}>contrat d'entretien annuel</Link>, tous les dépannages sont inclus en main-d'œuvre et en déplacement (les pièces restent à part), et l'intervention est prioritaire en cas de panne. Sans contrat, le dépannage est chiffré sur devis détaillé. Dans les deux cas, les tarifs d'entretien sont publiés sur la page <Link href={PATHS.prices}>Nos tarifs</Link>.
        </p>

        <h2>Avant d'appeler : ce qu'il est utile d'avoir sous la main</h2>
        <ul>
          <li>l'adresse et l'étage, avec le code d'accès si besoin ;</li>
          <li>la marque et le modèle de l'appareil (inscrits sur la plaque ou l'étiquette) ;</li>
          <li>le message ou le code affiché, et ce qui s'est passé juste avant ;</li>
          <li>votre numéro de contrat, si vous en avez un.</li>
        </ul>
      </Page>

      <Faq keyName="repair" />
      <SeeAlso
        links={[
          { path: PATHS.repairGuide, text: "Chaudière en panne à Paris : que faire", why: "Les vérifications simples et les réflexes de sécurité avant d'appeler." },
          { path: PATHS.maintenance, text: "Le contrat d'entretien", why: "Dépannages inclus, intervention prioritaire." },
          { path: PATHS.contact, text: "Contacter Gaz Flash", why: "Téléphone, horaires, formulaire et adresse." },
        ]}
      />
      <CallStrip title="Une panne de chauffage ou d'eau chaude ?" text="Appelez le standard : on vous dit comment on peut intervenir." />
      <JsonLd nodes={pageNodes(path, { trail: [PATHS.services], faq: "repair", service: { serviceType: "Dépannage de chauffage et chauffe-eau gaz" } })} />
    </>
  );
}
