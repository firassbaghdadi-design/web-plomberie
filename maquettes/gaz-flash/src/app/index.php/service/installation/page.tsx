import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, ranges } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.install;
export const metadata = pageMeta(path);

export default function InstallPage() {
  return (
    <>
      <PageHead
        path={path}
        trail={[PATHS.services]}
        aside={<Polaroid id="installation" alt="Illustration : installation d'une chaudière" caption="Une solution clé en main" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={-2} priority />}
      />

      <Page
        aside={
          <>
            <PhoneNote rotate={1} />
            <Polaroid id="installation2" alt="Illustration : pose d'un équipement de chauffage" caption="Vous n'avez plus qu'à en profiter" ratio="3 / 2" sizes="320px" rotate={1.5} />
            <Polaroid id="installation1" alt="Illustration : installation de chauffage terminée" caption="Après la pose" ratio="3 / 2" sizes="320px" rotate={-1.5} />
          </>
        }
      >
        <h2 className="!mt-0">Une solution clé en main</h2>
        <p>
          Gaz Flash réalise un diagnostic et vous conseille pour trouver la solution la plus adaptée dans l'ensemble de sa gamme. L'entreprise installe chaudières, chauffe-eau, régulations et radiateurs : vous n'avez plus qu'à en profiter.
        </p>

        <h2>De l'appel à la mise en route</h2>
        <ol>
          <li><strong>Vous appelez</strong> et décrivez votre logement, votre appareil actuel et ce qui ne va plus.</li>
          <li><strong>Un diagnostic</strong> est réalisé : il établit ce que votre logement permet et ce qu'il demande.</li>
          <li><strong>Un conseil</strong> vous est donné, parmi la gamme de Gaz Flash, pour une solution économe en énergie et compatible avec votre budget.</li>
          <li><strong>Un devis</strong> précise ce qui est inclus, puis l'installation est réalisée.</li>
        </ol>

        <h2>Ce que Gaz Flash installe</h2>
        <ul>
          {ranges.map((range) => (
            <li key={range.path}>
              <Link href={range.path}>{range.title}</Link> : {range.products.map((p) => `${p.brand} ${p.model}`).slice(0, 2).join(", ")} et d'autres modèles.
            </li>
          ))}
        </ul>
        <p>
          Pour comparer, la page <Link href={PATHS.installs}>Installations</Link> rassemble les quatre gammes.
        </p>

        <h2>Ce que le diagnostic regarde</h2>
        <p>Chaque logement a ses contraintes. Le diagnostic porte en général sur :</p>
        <ul>
          <li>l'appareil actuel, son âge et son emplacement ;</li>
          <li>l'évacuation des fumées : cheminée ou ventouse, état du conduit ;</li>
          <li>les radiateurs ou le plancher chauffant, et le nombre de circuits ;</li>
          <li>vos besoins en eau chaude : nombre de personnes, de douches, de points d'eau ;</li>
          <li>l'espace disponible, parfois très réduit dans les appartements parisiens.</li>
        </ul>

        <h2>Garantie</h2>
        <p>
          Les installations de Gaz Flash sont garanties 2 ans pour les pièces. Les conditions précises figurent dans votre devis ; gardez-le avec la facture.
        </p>

        <h2>Pour gagner du temps au premier appel</h2>
        <ul>
          <li>Photographiez l'appareil actuel et sa plaque signalétique (marque, modèle).</li>
          <li>Notez la surface à chauffer, le nombre de pièces et le type de radiateurs.</li>
          <li>Précisez si l'évacuation se fait par une cheminée ou par une ventouse.</li>
          <li>Dites si vous voulez une régulation ou un thermostat connecté.</li>
        </ul>
      </Page>

      <Faq keyName="install" />
      <SeeAlso
        links={[
          { path: PATHS.condensing, text: "Chaudière à condensation", why: "Le principe, l'évacuation et les modèles Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc." },
          { path: PATHS.lowTemp, text: "Chaudière basse température", why: "Une solution simple en rénovation, face à une ancienne génération." },
          { path: PATHS.brands, text: "Les marques posées", why: "Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc, De Dietrich, Styx." },
        ]}
      />
      <CallStrip title="Un projet de chaudière ou de chauffe-eau ?" text="Décrivez votre logement : Gaz Flash réalise un diagnostic et vous conseille." />
      <JsonLd nodes={pageNodes(path, { trail: [PATHS.services], faq: "install", service: { serviceType: "Installation de chaudière, chauffe-eau et régulation gaz" } })} />
    </>
  );
}
