import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier chauffagiste à Paris 20e, devis gratuit";
const description =
  "Contactez DBP Plomberie-Chauffage, 1 villa Gagliardini, Paris 20e : fuite, débouchage, radiateurs, chaudière. Devis gratuit, formulaire avec photos, téléphone.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre DBP Plomberie-Chauffage, plombier chauffagiste à Paris 20e, appelez le 01 42 45 91 35 ou envoyez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Votre demande arrive à l'atelier de la villa Gagliardini, près de la porte des Lilas.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème, et si possible des photos : la fuite, le siphon, le radiateur froid, l'étiquette de la chaudière.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Copropriété » dans le formulaire, indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à contacter pour l'accès. L'entreprise vous répond avec un devis adapté.",
  },
  {
    q: "Pour une fuite active, que faire ?",
    a: "Coupez l'arrivée d'eau si vous le pouvez, puis téléphonez plutôt que d'écrire : le 01 42 45 91 35 reste le moyen le plus direct de joindre l'atelier.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "plomberie";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section>
        <div className="wrap">
          <div className="border-b border-ink py-3"><Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} /></div>
          <div className="cols items-end pt-6 lg:pt-8">
            <div className="col-span-4 md:col-span-6 lg:col-span-8">
              <p className="meta text-heat-deep">Contact · devis gratuit</p>
              <h1 className="mt-5 text-[2.7rem] sm:text-[4rem] lg:text-[clamp(4rem,6.4vw,6.8rem)]">Contact&nbsp;: plombier chauffagiste à Paris 20e</h1>
            </div>
            <div className="col-span-4 mt-10 md:col-span-6 lg:col-span-4 lg:mt-0">
              <p className="meta-faint border-t-2 border-ink pt-2">Téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-2 block whitespace-nowrap text-[2.6rem] font-semibold tracking-[-0.05em] transition-colors hover:text-heat-deep lg:text-[clamp(2.4rem,3.4vw,3.6rem)]" data-track="cta_tel">{business.phoneDisplay}</a>
              <p className="meta-faint mt-1">{business.address.street}, {business.address.postalCode} Paris</p>
            </div>
          </div>
          <div className="draw mt-8 h-1 bg-ink" aria-hidden="true" />
          <p className="reponse-bref fade-in max-w-[60rem] pb-16 pt-6 lg:pb-24" style={{ ["--d" as string]: "200ms" }}>{brief}</p>
        </div>
      </section>
      <Section t="18,5" rubrique="Votre demande" ariaLabel="Formulaire de demande">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-8 xl:col-span-4 xl:pt-4">
            <dl className="space-y-6">
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Adresse</dt><dd className="mt-2 font-medium">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Transports</dt><dd className="mt-2 font-medium">{business.metro}</dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Horaires</dt><dd className="mt-2 font-medium">{business.hours}</dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 2007</dd></div>
            </dl>
          </aside>
        </div>
      </Section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" t="21,0" />
      <JsonLd nodes={nodes} />
    </>
  );
}
