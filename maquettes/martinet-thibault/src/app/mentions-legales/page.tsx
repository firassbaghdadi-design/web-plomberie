import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaButtons } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales et crédits photo | Martinet Thibault Paris";
const description =
  "Mentions légales du site de Martinet Thibault Entreprise, plombier et couvreur au 34 passage du Désir à Paris 10e : éditeur, hébergement et crédits photo.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Ce site présente Martinet Thibault Entreprise, plombier, chauffagiste et couvreur à Paris 10e. Il s'agit d'une maquette privée, non référencée, préparée par l'agence Atelier Truelle à partir du site actuel de l'entreprise et de photos libres de droits dont les auteurs sont crédités ci-dessous.";

export default function LegalPage() {
  return (
    <>
      <section className="wrap max-w-4xl pb-24 pt-6 sm:pt-10">
        <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
        <h1 className="mt-12 text-[2.4rem] sm:text-[3.4rem]">Mentions légales, Martinet Thibault à Paris</h1>
        <p className="reponse-bref mt-8">{brief}</p>
        <div className="prose-mt mt-14 space-y-10">
          <div>
            <h2 className="text-[1.6rem]">Éditeur</h2>
            <p className="mt-3">{business.legalName}, {business.address.street}, {business.address.postalCode} Paris. Téléphone : {business.phoneDisplay}. SIRET {business.siret}, APE {business.ape}, TVA {business.vat}.</p>
          </div>
          <div>
            <h2 className="text-[1.6rem]">Photos</h2>
            <p className="mt-3">Les photos de réalisations, de la page Historique, de la page Services et de la page Contact, ainsi que les logos, sont celles du site actuel de l'entreprise. Photos libres de droits (licence Pexels) :</p>
            <ul className="mt-4 border-t border-line">
              {pexelsCredits.map((c) => (
                <li key={c.key} className="border-b border-line py-3 text-[0.95rem]">« {c.title} », {c.author}, Pexels n° {c.id}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[1.6rem]">Données personnelles</h2>
            <p className="mt-3">Les informations envoyées par le formulaire de contact servent uniquement à répondre à la demande. Elles ne sont ni revendues ni utilisées à d'autres fins.</p>
          </div>
        </div>
        <div className="mt-14"><CtaButtons /></div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
