import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact et devis : plombier et rénovation Paris 12e | SMAP";
const description =
  "Contactez SMAP, plomberie, rénovation et maintenance à Paris 12e : demande de devis ou d'intervention par formulaire, photos jointes, ou au 01 42 49 20 14.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour un devis ou une intervention de plombier à Paris 12e, remplissez ce formulaire : type de demande, coordonnées, adresse du lieu et, si vous le souhaitez, jusqu'à quatre photos. Votre demande arrive directement chez SMAP. Pour une fuite, appelez plutôt le 01 42 49 20 14.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et le code d'accès, ce qui ne va pas ou ce que vous souhaitez faire, et quelques photos : la fuite, l'appareil, la gouttière ou la pièce à rénover. Ces éléments permettent de préparer le rendez-vous.",
  },
  {
    q: "Comment se passe la suite ?",
    a: "L'entreprise reprend contact avec vous pour organiser le rendez-vous. Pour une urgence, comme une fuite active, le téléphone reste le moyen le plus direct : 01 42 49 20 14.",
  },
  {
    q: "Je suis syndic ou gestionnaire : puis-je utiliser ce formulaire ?",
    a: "Oui. Choisissez « Copropriété, syndic ou professionnel », indiquez l'adresse de l'immeuble, la partie commune ou le lot concerné, et la personne à contacter sur place pour l'accès.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "plomberie";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section>
        <div className="wrap grid gap-x-16 pb-14 pt-6 sm:pb-20 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="label mt-12 text-accent sm:mt-16">Organisez votre rendez-vous</p>
            <h1 className="mt-6 text-[2.5rem] sm:text-[3.8rem] xl:text-[4.4rem]">
              <span className="line-up"><span>Contacter votre plombier à Paris 12e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Par téléphone</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-accent" data-track="cta_tel">{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`} className="mt-1 inline-block text-sm text-ink-soft hover:text-accent">{business.email}</a>
          </div>
        </div>
      </section>
      <section className="border-t border-line py-14 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-10 lg:col-span-4 lg:pt-4">
            <dl className="space-y-6 border-t border-line pt-6">
              <div><dt className="label">Secteur</dt><dd className="mt-2 text-ink">Paris 12e (75012)<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Voir sur la carte</a></dd></div>
              <div><dt className="label">Métiers</dt><dd className="mt-2 text-ink">Plomberie, aménagement et rénovation, maintenance</dd></div>
              <div><dt className="label">Clientèle</dt><dd className="mt-2 text-ink">Particuliers, professionnels et copropriétés</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <div className="wrap pb-24"><p className="text-[1.6rem] font-extralight text-ink">Merci pour votre confiance.</p></div>
      <JsonLd nodes={nodes} />
    </>
  );
}
