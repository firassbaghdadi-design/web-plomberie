import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact et devis : plombier couvreur Paris 15e | Clairon";
const description =
  "Contactez l'Entreprise Clairon, plombier, couvreur et chauffagiste à Paris 15e : demande de devis ou d'intervention, 23 rue d'Ouessant, 01 47 83 88 40.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin, joignez jusqu'à quatre photos : l'Entreprise Clairon vous répond, ou appelez le 01 47 83 88 40 pour une fuite.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et le code d'accès, ce qui ne va pas ou ce que vous souhaitez faire, et quelques photos : la fuite, l'appareil, la gouttière ou la pièce à rénover. Ces éléments permettent de préparer le rendez-vous.",
  },
  {
    q: "Comment se passe la suite ?",
    a: "L'entreprise reprend contact avec vous pour organiser le rendez-vous. Pour une urgence, comme une fuite active, le téléphone reste le moyen le plus direct : 01 47 83 88 40.",
  },
  {
    q: "Je suis syndic ou gestionnaire : puis-je utiliser ce formulaire ?",
    a: "Oui. Choisissez « Syndic, copropriété ou professionnel », indiquez l'adresse de l'immeuble, la partie commune ou le lot concerné, et la personne à contacter sur place pour l'accès.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "plomberie";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section>
        <div className="wrap grid gap-x-14 gap-y-10 pb-16 lg:grid-cols-12 lg:items-start pt-6 sm:pt-8">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="label mt-6 text-accent sm:mt-6" data-plumb-start>Organisez votre rendez-vous</p>
            <h1 className="mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>Contacter votre plombier, couvreur et chauffagiste à Paris 15e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "400ms" }}>
              <p className="label">Par téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-accent" data-track="cta_tel">{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`} className="mt-1 inline-block text-sm text-ink-soft hover:text-accent">{business.email}</a>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6 border-t border-line pt-6">
              <div><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div><dt className="label">Métiers</dt><dd className="mt-2 text-ink">Plomberie, couverture, chauffage, petite maçonnerie</dd></div>
              <div><dt className="label">Clientèle</dt><dd className="mt-2 text-ink">Particuliers, professionnels et syndics</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <div className="wrap pb-24"><p className="text-[1.6rem] font-extralight text-ink" data-plumb-end>Merci pour votre confiance.</p></div>
      <JsonLd nodes={nodes} />
    </>
  );
}
