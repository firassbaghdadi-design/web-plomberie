import Link from "next/link";
import { CallStrip, Faq, GoogleReviews, PageHead, Page, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Logo, Polaroid } from "@/components/Photo";
import { PATHS, brandLogos, business, reasons } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.company;
export const metadata = pageMeta(path);

export default function CompanyPage() {
  const { legal, address } = business;
  return (
    <>
      <PageHead
        path={path}
        aside={
          <Polaroid id="heroTeam" alt="La devanture de Gaz Flash, 7 rue Sainte-Isaure à Paris 18e" caption="Depuis 1965, rue Sainte-Isaure" ratio="21 / 9" sizes="(min-width:1200px) 1120px, 100vw" priority />
        }
      />

      <Page
        aside={
          <>
            <PhoneNote />
            <Polaroid id="plans" alt="Illustration : règle graduée posée sur des plans, le diagnostic avant l'installation" caption="Le diagnostic d'abord" ratio="495 / 400" sizes="320px" rotate={-1.5} />
          </>
        }
      >
        <h2 className="!mt-0">Une maison de quartier, depuis 1965</h2>
        <p>
          GAZFLASH SAS est une {legal.form.toLowerCase()} au capital de {legal.capital}, immatriculée au registre du commerce et des sociétés de Paris sous le numéro 65 B 3524 (SIRET {legal.siret}, code NAF {legal.naf}, travaux d'installation d'eau et de gaz en tous locaux). Son siège est au {address.street}, {address.postalCode} {address.city}.
        </p>
        <p>
          Depuis 1965, l'entreprise assure la maintenance d'appareils de chauffage et se dit reconnue par les plus grandes marques. Sa devise, sur son site : « Un service d'entretien et de dépannage depuis 1965, nous ne réalisons pas simplement des installations. » Chauffagiste du 18e arrondissement, Gaz Flash entretient, dépanne et installe des appareils au gaz à Paris, en Seine-Saint-Denis, dans les Hauts-de-Seine et dans le Val-de-Marne.
        </p>

        <h2>Les six engagements de Gaz Flash</h2>
        <p>Ce sont ceux que l'entreprise affiche elle-même, noir sur blanc :</p>
        <ol>
          {reasons.map((reason) => (
            <li key={reason.title}>
              <strong>{reason.title}.</strong> {reason.text}
            </li>
          ))}
        </ol>

        <h2>Comment ça se passe quand vous appelez</h2>
        <ol>
          <li>Vous appelez le standard, au {business.phoneDisplay}, ou vous écrivez par le <Link href={PATHS.contact}>formulaire de contact</Link>.</li>
          <li>Pour une installation, un diagnostic précède le conseil : l'équipe vous propose la solution la plus adaptée dans sa gamme.</li>
          <li>Pour un dépannage, vous recevez un devis détaillé, des tarifs prédéfinis et une explication claire de l'origine de la panne.</li>
          <li>Avec un contrat d'entretien, l'équipe vient chaque année effectuer une visite de prévention afin d'éviter les pannes.</li>
        </ol>

        <h2>Certifications et reconnaissance</h2>
        <p>
          Gaz Flash se déclare certifiée <strong>Professionnel du Gaz</strong> et <strong>Qualibat RGE</strong>. RGE signifie « Reconnu Garant de l'Environnement » : c'est la mention qui conditionne l'accès à plusieurs aides à la rénovation énergétique, pour les travaux concernés.
        </p>
        <div className="not-prose flex flex-wrap items-center gap-6">
          <Logo id="certPdg" alt="Logo Professionnel du Gaz" className="h-16 w-auto" width={130} height={60} />
          <Logo id="certQualibat" alt="Logo Qualibat RGE" className="h-16 w-auto" width={130} height={60} />
        </div>
        <p>
          L'entreprise présente aussi un titre de « station technique agréée », accompagné des logos de cinq marques : Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc et De Dietrich.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {brandLogos.map((brand) => (
            <span key={brand.id} className="flex h-14 w-28 items-center justify-center px-2 opacity-70 grayscale">
              <Logo id={brand.id} alt={brand.name} className="max-h-9 w-auto max-w-full object-contain" width={100} height={36} />
            </span>
          ))}
        </div>
        <p>
          Les modèles posés pour chaque marque sont détaillés sur la page <Link href={PATHS.brands}>Marques de chaudières et de chauffe-eau</Link>.
        </p>

        <h2>Où nous trouver, comment nous joindre</h2>
        <p>
          Gaz Flash est au {address.street}, {address.postalCode} {address.city}. Le standard répond au <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>. {business.hoursLabel} Pour préparer votre visite ou votre demande, voyez la page <Link href={PATHS.contact}>Contact</Link> ; pour le quartier, la page <Link href={PATHS.paris18}>Chauffagiste Paris 18e</Link>.
        </p>

        <h2>Informations légales</h2>
        <ul>
          <li>Dénomination : {business.legalName} ({business.name})</li>
          <li>Forme et capital : {legal.form}, {legal.capital}</li>
          <li>Immatriculation : {legal.rcs}</li>
          <li>SIRET {legal.siret} · NAF {legal.naf}</li>
          <li>TVA intracommunautaire : {legal.vat}</li>
        </ul>
        <p>
          Le détail figure dans les <Link href={PATHS.legal}>mentions légales</Link>.
        </p>
      </Page>

      <GoogleReviews showQuotes={0} />
      <Faq keyName="company" title="Faire connaissance : vos questions" />
      <SeeAlso
        links={[
          { path: PATHS.services, text: "Nos quatre services", why: "Entretien, dépannage, installation et ramonage, avec leurs détails." },
          { path: PATHS.prices, text: "Nos tarifs d'entretien", why: "Les prix TTC affichés, pour le 18e et pour le reste de la zone." },
          { path: PATHS.zones, text: "La zone d'intervention", why: "Paris et les trois départements voisins, avec un croquis." },
        ]}
      />
      <CallStrip title="Faire connaissance par téléphone" />
      <JsonLd nodes={pageNodes(path, { faq: "company" })} />
    </>
  );
}
