import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact et devis : plombier à Paris 14e | EBL Alésia";
const description =
  "Contactez EBL, plombier à Paris 14e : demande de devis ou d'intervention en plomberie, gaz et chauffage, 5 rue d'Alésia, 01 43 31 26 77, du lundi au vendredi.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin et l'adresse du lieu, joignez jusqu'à quatre photos : EBL, plombier rue d'Alésia à Paris 14e, vous recontacte pour fixer le rendez-vous. En cas d'odeur de gaz, sortez d'abord, puis appelez le 01 43 31 26 77.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et le code d'accès, ce qui ne va pas ou ce que vous souhaitez faire, et quelques photos : la fuite, l'appareil, la gouttière ou la pièce à rénover. Ces éléments permettent de préparer le rendez-vous.",
  },
  {
    q: "Comment se passe la suite ?",
    a: "L'entreprise reprend contact avec vous pour organiser le rendez-vous. Pour une urgence, comme une fuite active, le téléphone reste le moyen le plus direct : 01 43 31 26 77, du lundi au vendredi.",
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
            <p className="label mt-6 text-tabac">Organisez votre rendez-vous</p>
            <h1 className="mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>Contacter votre plombier à Paris 14e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4 !font-sans !text-[1.3rem] !font-semibold !leading-snug sm:!text-[1.4rem]" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "400ms" }}>
              <p className="label">Par téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap font-serif text-[2.4rem] text-ink transition hover:text-tabac" data-track="cta_tel">{business.phoneDisplay}</a>
              <p className="mt-3 text-[1.02rem] font-semibold text-ink-soft">{business.hours.map(([d, h]) => <span key={d} className="block">{d} : {h}</span>)}</p>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6 border-t border-line pt-6">
              <div><dt className="label">Adresse</dt><dd className="mt-2 font-semibold text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-[1rem]">Itinéraire</a></dd></div>
              <div><dt className="label">Métiers</dt><dd className="mt-2 font-semibold text-ink">Plomberie, gaz, chauffage</dd></div>
              <div><dt className="label">Clientèle</dt><dd className="mt-2 font-semibold text-ink">Particuliers, commerces et syndics</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <div className="wrap pb-24"><p className="font-serif text-[1.7rem] text-ink">Merci pour votre confiance.</p></div>
      <JsonLd nodes={nodes} />
    </>
  );
}
