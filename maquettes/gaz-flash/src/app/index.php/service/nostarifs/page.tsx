import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { PATHS, business, priceGroups, sweepPrice } from "@/lib/site";
import { pageMeta, pageNodes, priceOffers } from "@/lib/seo";

const path = PATHS.prices;
export const metadata = pageMeta(path);

export default function PricesPage() {
  return (
    <>
      <PageHead
        path={path}
        trail={[PATHS.services]}
        aside={<Polaroid id="entretien3" alt="Illustration : entretien d'un appareil de chauffage" caption="Les prix, affichés" ratio="3 / 2" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <Page
        aside={
          <>
            <PhoneNote rotate={-1} />
            <Polaroid id="entretien2" alt="Illustration : technicien lors d'une visite d'entretien" caption="Forfait ou contrat" ratio="3 / 2" sizes="320px" rotate={1.5} />
          </>
        }
      >
        <h2 className="!mt-0">Les tarifs d'entretien, en TTC</h2>
        <p>
          Chaque prix existe en deux versions : un tarif pour <strong>Paris 18e</strong>, où se trouve Gaz Flash, et un tarif pour <strong>Paris (autres arrondissements) et la petite couronne</strong>.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">Tarifs TTC d'entretien par type d'appareil, formule et zone</caption>
            <thead>
              <tr className="border-b-2 border-ink/60 font-label text-[0.95rem] uppercase tracking-wider">
                <th scope="col" className="py-2 pr-3">Appareil et formule</th>
                <th scope="col" className="px-3 py-2">Paris 18e</th>
                <th scope="col" className="px-3 py-2">Autres arr. et petite couronne</th>
              </tr>
            </thead>
            {priceGroups.map((group) => (
              <tbody key={group.title} className="border-b border-ink/30">
                <tr>
                  <th scope="rowgroup" colSpan={3} className="pt-5 pb-1 text-left font-display text-[1.3rem] font-semibold text-ink-2">{group.title}</th>
                </tr>
                <tr className="border-b border-dashed border-ink/25 align-baseline">
                  <th scope="row" className="py-3 pr-3 font-semibold">Contrat d'entretien annuel</th>
                  <td className="price px-3 py-3 text-[1.9rem]">{group.contract.paris18}</td>
                  <td className="price px-3 py-3 text-[1.9rem]">{group.contract.other}</td>
                </tr>
                <tr className="align-baseline">
                  <th scope="row" className="py-3 pr-3 font-semibold">Forfait révision, sans engagement</th>
                  <td className="price px-3 py-3 text-[1.9rem]">{group.review.paris18}</td>
                  <td className="price px-3 py-3 text-[1.9rem]">{group.review.other}</td>
                </tr>
              </tbody>
            ))}
            <tbody>
              <tr>
                <th scope="row" className="py-4 pr-3 font-display text-[1.3rem] font-semibold text-ink-2">Ramonage du conduit de fumée gaz</th>
                <td colSpan={2} className="price px-3 py-4 text-[1.9rem]">{sweepPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[0.92rem] text-ink-soft">Tous les montants sont en euros TTC, repris des tarifs publiés par Gaz Flash.</p>

        <h2>Ce que comprend chaque formule</h2>
        <ul>
          <li><strong>Contrat d'entretien annuel :</strong> l'entretien annuel avec attestation, tous les dépannages en main-d'œuvre et déplacement (hors pièces), et une intervention prioritaire en cas de panne.</li>
          <li><strong>Forfait révision :</strong> l'entretien annuel avec attestation, sans engagement.</li>
          <li><strong>Ramonage ({sweepPrice} TTC) :</strong> réalisé uniquement en même temps que l'entretien de la chaudière ; obligatoire une fois par an pour les chaudières à tirage naturel.</li>
        </ul>

        <h2>Contrat ou forfait : ce que dit l'écart de prix</h2>
        <p>
          Sur les tarifs publiés, le contrat annuel coûte 20 € de plus que le forfait révision pour une chaudière, avec ou sans condensation, et 10 € de plus pour un radiateur, un chauffe-bain ou un appareil Styx. Pour cet écart, il inclut tous les dépannages (main-d'œuvre et déplacement, hors pièces). Le détail de la comparaison est sur la page <Link href={PATHS.maintenance}>Entretien</Link>.
        </p>

        <h2>Et le dépannage, l'installation ?</h2>
        <p>
          Ils ne figurent pas dans ce tableau, car le prix dépend de l'appareil et de la panne. Gaz Flash remet un devis détaillé, avec des tarifs prédéfinis, avant d'intervenir : voir le <Link href={PATHS.repair}>dépannage</Link> et l'<Link href={PATHS.install}>installation</Link>. Pour un chiffrage, appelez le <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>.
        </p>
      </Page>

      <Faq keyName="prices" />
      <SeeAlso
        links={[
          { path: PATHS.paris18, text: "Chauffagiste Paris 18e", why: "Pourquoi et comment le tarif du 18e s'applique." },
          { path: PATHS.zones, text: "Zone d'intervention", why: "Où s'applique le tarif « autres arrondissements et petite couronne »." },
          { path: PATHS.maintenanceGuide, text: "Entretien de chaudière à Paris", why: "Obligation annuelle et attestation." },
        ]}
      />
      <CallStrip type="entretien" title="Choisir votre formule d'entretien" />
      <JsonLd nodes={pageNodes(path, { trail: [PATHS.services], faq: "prices", service: { serviceType: "Entretien de chaudière gaz et ramonage", offers: priceOffers() } })} />
    </>
  );
}
