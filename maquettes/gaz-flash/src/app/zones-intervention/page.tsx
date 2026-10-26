import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ZoneMap } from "@/components/Sketches";
import { PATHS, business, priceGroups } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.zones;
export const metadata = pageMeta(path);

export default function ZonesPage() {
  const g = priceGroups[0];
  return (
    <>
      <PageHead path={path} aside={<ZoneMap />} />

      <Page
        aside={
          <>
            <PhoneNote rotate={1} />
          </>
        }
      >
        <h2 className="!mt-0">Où intervient Gaz Flash ?</h2>
        <p>Gaz Flash annonce intervenir à Paris et dans trois départements de la petite couronne :</p>
        <ul>
          <li><strong>Paris (75)</strong>, tous arrondissements, avec un tarif d'entretien propre au 18e ;</li>
          <li><strong>la Seine-Saint-Denis (93)</strong> ;</li>
          <li><strong>les Hauts-de-Seine (92)</strong> ;</li>
          <li><strong>le Val-de-Marne (94)</strong>.</li>
        </ul>
        <p>
          La liste des communes n'est pas publiée par l'entreprise : pour une adresse précise, le plus sûr est d'appeler le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>, du lundi au vendredi, de 8 h à 12 h 30 et de 13 h 30 à 17 h.
        </p>

        <h2>Les tarifs d'entretien selon la zone</h2>
        <p>Les tarifs publiés distinguent deux zones seulement. Exemple pour une chaudière :</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left">
            <caption className="sr-only">Tarifs TTC d'entretien d'une chaudière selon la zone</caption>
            <thead>
              <tr className="border-b border-ink label text-ink-soft">
                <th scope="col" className="py-2 pr-3">Zone</th>
                <th scope="col" className="px-3 py-2">Forfait révision</th>
                <th scope="col" className="px-3 py-2">Contrat annuel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <th scope="row" className="py-3 pr-3 font-medium">Paris 18e</th>
                <td className="price px-3 py-3 text-[1.7rem]">{g.review.paris18}</td>
                <td className="price px-3 py-3 text-[1.7rem]">{g.contract.paris18}</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="py-3 pr-3 font-medium">Paris (autres arrondissements) et petite couronne</th>
                <td className="price px-3 py-3 text-[1.7rem]">{g.review.other}</td>
                <td className="price px-3 py-3 text-[1.7rem]">{g.contract.other}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Les autres appareils (chaudière à condensation, chauffe-bain, Styx) et le ramonage sont détaillés sur <Link href={PATHS.prices}>Nos tarifs</Link>.
        </p>

        <h2>Autour du 18e : les voisins</h2>
        <p>
          Le 18e arrondissement est limitrophe des 9e, 10e, 17e et 19e arrondissements, et touche la Seine-Saint-Denis par Saint-Ouen-sur-Seine, Saint-Denis et Aubervilliers. Un habitant de ces quartiers n'est donc jamais loin de la rue Sainte-Isaure. Pour chaque arrondissement autre que le 18e et chaque commune de la petite couronne, c'est le tarif « autres arrondissements et petite couronne » qui s'applique.
        </p>

        <h2>Ce que Gaz Flash fait dans toute la zone</h2>
        <ul>
          <li><Link href={PATHS.maintenance}>L'entretien de chaudière</Link> par forfait révision ou contrat annuel ;</li>
          <li><Link href={PATHS.repair}>le dépannage</Link> du chauffage et de l'eau chaude, sur devis détaillé ;</li>
          <li><Link href={PATHS.install}>l'installation</Link> de chaudière, chauffe-eau et régulation, après diagnostic ;</li>
          <li><Link href={PATHS.sweep}>le ramonage</Link> du conduit de fumée gaz.</li>
        </ul>
      </Page>

      <Faq keyName="zones" />
      <SeeAlso
        links={[
          { path: PATHS.paris18, text: "Chauffagiste dans le 18e", why: "Le quartier de la maison, ses tarifs et ses spécificités d'immeubles." },
          { path: PATHS.contact, text: "Contact", why: "Appeler avec votre adresse pour confirmer la zone." },
          { path: PATHS.company, text: "L'entreprise", why: "Qui est derrière le standard, depuis 1965." },
        ]}
      />
      <CallStrip title="Vérifier votre adresse" text="Donnez votre adresse au standard : on vous dit si on se déplace et à quel tarif." />
      <JsonLd nodes={pageNodes(path, { faq: "zones", service: { serviceType: "Chauffage gaz : entretien, dépannage, installation, ramonage" } })} />
    </>
  );
}
