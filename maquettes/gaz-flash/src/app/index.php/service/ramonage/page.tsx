import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Frame, Polaroid } from "@/components/Photo";
import { PATHS, business, sweepPrice } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.sweep;
export const metadata = pageMeta(path);

export default function SweepPage() {
  return (
    <>
      <PageHead
        path={path}
        trail={[PATHS.services]}
        aside={<Polaroid id="ramonage" alt="Illustration : ramonage d'un conduit de fumée" caption="Une question de sécurité" ratio="3 / 2" sizes="(min-width:1200px) 1120px, 100vw" rotate={2} priority />}
      />

      <Page
        aside={
          <>
            <PhoneNote rotate={-1} />
            <Polaroid id="ramonage2" alt="Illustration : conduit de fumée et toiture" caption="Le conduit, chaque année" ratio="3 / 2" sizes="320px" rotate={1.5} />
            <div className="mx-auto w-40">
              <Frame id="ramonageTall" alt="Illustration : conduit de cheminée vu d'en bas" ratio="433 / 1030" sizes="160px" />
            </div>
          </>
        }
      >
        <h2 className="!mt-0">Pourquoi faire ramoner un conduit de fumée gaz ?</h2>
        <p>Le ramonage répond à plusieurs objectifs liés à la réduction des risques :</p>
        <ul>
          <li>diminuer l'encrassement des conduits d'évacuation de fumée ;</li>
          <li>réduire les risques d'intoxication au monoxyde de carbone ;</li>
          <li>limiter les émissions de gaz à effet de serre ;</li>
          <li>améliorer le fonctionnement d'une cheminée ou la durée de vie d'une chaudière ;</li>
          <li>remplir les conditions imposées par les assurances et la loi ;</li>
          <li>réduire la consommation de combustible.</li>
        </ul>

        <h2>Ce qu'il faut retenir</h2>
        <ul>
          <li>Le ramonage doit être réalisé au moins une fois par an.</li>
          <li>Votre commune ou votre assureur peuvent exiger un second ramonage annuel.</li>
          <li>Seul un ramonage effectué par un <strong>professionnel qualifié</strong> est considéré comme valable.</li>
          <li>La remise d'un certificat de ramonage en bonne et due forme est obligatoire.</li>
        </ul>

        <h2>Ramonage et assurance</h2>
        <p>
          Vous conformer à ces règles vous permet de chauffer votre logement en toute sécurité. Si un accident arrive à votre domicile, avoir confié le ramonage à un professionnel vous permettra de faire valoir votre assurance. Dans le cas contraire, votre compagnie d'assurance est en droit de vous refuser toute indemnisation. Par ailleurs, votre responsabilité peut être engagée en cas de dommages causés à un tiers.
        </p>

        <h2>Le ramonage chez Gaz Flash : {sweepPrice} TTC</h2>
        <p>
          Gaz Flash ramone le conduit de fumée gaz pour <strong>{sweepPrice} TTC</strong>. Le ramonage est réalisé uniquement en même temps que l'entretien de la chaudière : il se demande donc au moment de réserver la visite. Il est proposé en option possible au <Link href={PATHS.maintenance}>contrat d'entretien</Link>, et il est obligatoire une fois par an pour les chaudières à tirage naturel.
        </p>

        <h2>Tirage naturel ou ventouse : quel est votre cas ?</h2>
        <p>
          Une chaudière à tirage naturel évacue ses fumées par un conduit, grâce au tirage de ce conduit. Une chaudière à ventouse prend son air et rejette ses fumées par un conduit étanche, souvent à travers un mur ou en toiture. Si vous ne savez pas à quelle famille appartient votre appareil, demandez-le au technicien lors de la visite : il vous dira si le ramonage est obligatoire chez vous.
        </p>

        <h2>Le certificat de ramonage</h2>
        <p>
          Le certificat est la preuve du ramonage. Conservez-le avec l'attestation d'entretien de la chaudière : votre assureur, votre syndic ou votre propriétaire peuvent vous le demander. Pour réserver un ramonage avec l'entretien, appelez le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>.
        </p>
      </Page>

      <Faq keyName="sweep" />
      <SeeAlso
        links={[
          { path: PATHS.maintenance, text: "L'entretien de la chaudière", why: "Le ramonage se fait en même temps que la visite annuelle." },
          { path: PATHS.prices, text: "Les tarifs TTC", why: "Ramonage, forfait révision, contrat annuel." },
          { path: PATHS.faq, text: "Questions fréquentes", why: "Monoxyde de carbone, qui peut ramoner, durée de vie." },
        ]}
      />
      <CallStrip type="ramonage" title="Réserver un ramonage avec votre entretien" />
      <JsonLd nodes={pageNodes(path, { trail: [PATHS.services], faq: "sweep", service: { serviceType: "Ramonage de conduit de fumée gaz" } })} />
    </>
  );
}
