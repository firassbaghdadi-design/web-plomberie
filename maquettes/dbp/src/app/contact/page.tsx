import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier chauffagiste à Paris 20e, devis gratuit";
const description =
  "Contactez DBP Plomberie-Chauffage, 1 villa Gagliardini, Paris 20e : fuite, débouchage, radiateurs, chaudière. Devis gratuit, formulaire avec photos, téléphone.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin, joignez jusqu'à quatre photos : DBP vous répond, ou appelez le 01 42 45 91 35.";

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
        <div className="wrap grid gap-x-14 gap-y-10 pb-16 pt-6 sm:pt-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <div className="border-b border-ink py-3"><Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} /></div>
            <p className="meta mt-6 text-heat-deep">Contact · devis gratuit</p>
            <h1 className="mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">Contact&nbsp;: plombier chauffagiste à Paris 20e</h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "200ms" }}>{brief}</p>
            <div className="mt-8 hidden lg:block">
              <p className="meta-faint border-t-2 border-ink pt-2">Téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-2 block whitespace-nowrap text-[2.4rem] font-semibold tracking-[-0.05em] transition-colors hover:text-heat-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6">
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Adresse</dt><dd className="mt-2 font-medium">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Transports</dt><dd className="mt-2 font-medium">{business.metro}</dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Horaires</dt><dd className="mt-2 font-medium">{business.hours}</dd></div>
              <div className="border-t-2 border-ink pt-3"><dt className="meta-faint">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 2007</dd></div>
            </dl>

          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" t="21,0" />
      <JsonLd nodes={nodes} />
    </>
  );
}
