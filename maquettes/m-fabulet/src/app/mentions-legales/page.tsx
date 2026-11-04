import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, SectionHead } from "@/components/Sections";
import { pexelsCredits } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.legal;
const title = "Mentions légales, M. Fabulet Couverture, La Garenne-Colombes";
const description =
  "Mentions légales du site de M. Fabulet Couverture, artisan couvreur à La Garenne-Colombes : éditeur, hébergement, données personnelles et crédits des photos.";
export const metadata = pageMeta({ title, description, path });

export default function LegalPage() {
  return (
    <>
      <section className="pt-[6.4rem] sm:pt-[7.5rem]">
        <div className="wrap pb-12">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
          <h1 className="mt-10 text-[2.4rem] sm:text-[3.6rem]">Mentions légales, La Garenne-Colombes</h1>
          <p className="reponse-bref mt-8 max-w-4xl">
            Ce site présente M. Fabulet Couverture, entreprise artisanale de couverture et de charpente installée au 13, boulevard de la République à La Garenne-Colombes. Vous trouverez ici les informations sur l&apos;éditeur, l&apos;hébergeur, le traitement des données envoyées par le formulaire et les crédits des photographies.
          </p>
        </div>
      </section>
      {[
        ["Éditeur", <>
          <p key="a"><strong>{business.name}</strong>, entreprise artisanale, {business.rm}. Dirigeant : {business.manager} (à confirmer). Adresse : {business.address.street}, {business.address.postalCode} {business.address.city}. Téléphone : {business.phoneDisplay}. E-mail : {business.email}.</p>
          <p key="b">Assurance de garantie décennale : {business.insurer}. Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Maquette réalisée par l&apos;agence Atelier Truelle, non référencée.</p>
        </>],
        ["Données", <>
          <p key="c">Les informations envoyées par le formulaire (nom, téléphone, adresse du lieu, message et photos) servent uniquement à répondre à votre demande. Elles ne sont ni revendues ni utilisées à d&apos;autres fins.</p>
          <p key="d">Vous pouvez demander leur consultation, leur rectification ou leur suppression en écrivant à {business.email} ou à l&apos;adresse de l&apos;entreprise.</p>
        </>],
        ["Crédits", <>
          <p key="e">Logo et mascotte : M. Fabulet Couverture. Photos de chantier : site de l&apos;entreprise (couverture-mfabulet.fr). Photos d&apos;illustration : Pexels, licence Pexels.</p>
          <ul key="f" className="mt-5 border-t border-line">
            {pexelsCredits.map((c) => <li key={c.key} className="border-b border-line py-3 text-[0.95rem]">« {c.title} », photo Pexels n° {c.id}</li>)}
          </ul>
        </>],
      ].map(([label, body], i) => (
        <section key={String(label)} className={`py-12 sm:py-16 ${i % 2 === 0 ? "bg-papier" : ""}`}>
          <div className="wrap grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3"><SectionHead n={i + 1} label={String(label)} /></div>
            <div className="prose-f max-w-3xl lg:col-span-9">{body}</div>
          </div>
        </section>
      ))}
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Mentions légales", path }])]} />
    </>
  );
}
