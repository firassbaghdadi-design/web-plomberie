import Link from "next/link";
import { CallStrip, Eyebrow, Faq, Page, PageHead, PhoneNote, SeeAlso, Ticket } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, priceGroups, ranges, type Range } from "@/lib/site";
import { pageNodes } from "@/lib/seo";

const priceIndex: Record<string, number> = {
  [PATHS.condensing]: 1,
  [PATHS.waterHeater]: 2,
  [PATHS.lowTemp]: 0,
};

export function RangePage({ range }: { range: Range }) {
  const others = ranges.filter((r) => r.path !== range.path);
  const group = priceIndex[range.path] !== undefined ? priceGroups[priceIndex[range.path]] : null;
  return (
    <>
      <PageHead
        path={range.path}
        trail={[PATHS.installs]}
        aside={<Polaroid id={range.image} alt={`Illustration : ${range.title.toLowerCase()}`} caption={`${range.letter} · ${range.title}`} ratio="1500 / 630" sizes="(min-width:1200px) 1120px, 100vw" rotate={2} priority />}
      />

      <section className="wrap mt-16" aria-labelledby="modeles">
        <Eyebrow>Les modèles que Gaz Flash pose</Eyebrow>
        <h2 id="modeles" className="mt-1">{range.title} : les modèles cités</h2>
        <ul className="ruled mt-6">
          {range.products.map((product) => (
            <li key={product.model} className="grid gap-2 py-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-10">
              <div>
                <p className="label text-ink-soft">{product.brand}</p>
                <h3 className="mt-0.5 text-[1.45rem]">{product.model}</h3>
              </div>
              <p className="text-ink-soft">{product.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.9rem] text-ink-soft">Descriptifs des modèles de la gamme {range.letter} ({range.title.toLowerCase()}), issus de la documentation des constructeurs et cités par Gaz Flash. Le choix final se fait après un diagnostic de votre logement.</p>
      </section>

      <Page
        className="mt-16"
        aside={
          <>
            {group ? (
              <Ticket
                className=""
                title={`Entretien · ${group.title}`}
                rows={[
                  { label: "Forfait révision, Paris 18e", price: group.review.paris18 },
                  { label: "Contrat annuel, Paris 18e", price: group.contract.paris18 },
                ]}
                note={`Autres arrondissements et petite couronne : ${group.review.other} et ${group.contract.other}.`}
              />
            ) : null}
            <PhoneNote rotate={-1} />
          </>
        }
      >
        <h2 className="!mt-0">{range.chooseTitle}</h2>
        <ol>
          {range.choose.map((item) => (
            <li key={item.q}>
              <strong>{item.q}.</strong> {item.a}
            </li>
          ))}
        </ol>
        <p>
          Avant de vous proposer un modèle de la gamme {range.letter}, Gaz Flash réalise un diagnostic, puis établit un devis. Les installations sont garanties 2 ans pour les pièces. Le déroulé complet est sur la page <Link href={PATHS.install}>Installation</Link>.
        </p>
      </Page>

      <Faq keyName={range.faq} />

      <section className="wrap mt-20" aria-labelledby="autres-gammes">
        <h2 id="autres-gammes">Les autres gammes</h2>
        <ul className="ruled mt-6">
          {others.map((other) => (
            <li key={other.path}>
              <Link href={other.path} className="group flex items-baseline gap-3 py-3 no-underline">
                <span className="label text-red-dark">{other.letter}</span>
                <span className="font-display text-[1.2rem] font-light text-ink-2 underline decoration-red/50 underline-offset-4 group-hover:decoration-red">{other.title}</span>
                <ArrowIcon className="h-4 w-4 text-red-dark" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SeeAlso
        links={[
          { path: PATHS.brands, text: "Marques et modèles", why: "Toutes les marques citées, avec leurs modèles par gamme." },
          { path: PATHS.prices, text: "Nos tarifs d'entretien", why: "Le prix de la visite annuelle une fois l'appareil posé." },
          { path: PATHS.install, text: "Le service d'installation", why: "Du diagnostic à la mise en route, et la garantie des pièces." },
        ]}
      />
      <CallStrip type="installation" title={`Un projet de ${range.title.toLowerCase()} ?`} text="Décrivez votre logement : Gaz Flash réalise un diagnostic et vous conseille." />
      <JsonLd nodes={pageNodes(range.path, { trail: [PATHS.installs], faq: range.faq, service: { serviceType: `Installation : ${range.title}` } })} />
    </>
  );
}
