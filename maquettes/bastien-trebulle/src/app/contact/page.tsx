import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, reputation, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier couvreur à Paris 16e, devis gratuit";
const description =
  "Contactez Bastien & Trebulle, 3 rue Gros, Paris 16e : plomberie, couverture, chauffage, salle de bains et dépannage 24h/24. Devis gratuit, réponse en 24 à 48 h.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin, joignez jusqu'à quatre photos : réponse sous 24 à 48 heures ouvrées. Pour une urgence, appelez directement le 01 45 24 77 89.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : la fuite, le radiateur, la chaudière, la toiture vue d'une fenêtre.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Syndic, copropriété, hôtel » dans le formulaire, indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à contacter pour l'accès. L'entreprise revient vers vous avec une proposition.",
  },
  {
    q: "Pour une fuite active, que faire ?",
    a: "Coupez l'arrivée d'eau si vous le pouvez, puis téléphonez plutôt que d'écrire : le 01 45 24 77 89 est le numéro d'urgence, joignable 24h/24 et 7j/7.",
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
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in mt-8 flex items-center gap-3"><span className="h-px w-8 bg-accent" aria-hidden="true" /><span className="label !text-accent">Contact · devis gratuit</span></p>
            <h1 className="mt-5 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>Contact&nbsp;: plombier couvreur à Paris 16e</span></span>
            </h1>
            <p className="fade-in mt-5 text-fg-soft" style={{ ["--d" as string]: "200ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "300ms" }}>
              <p className="label">Urgence 24h/24</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-3 block whitespace-nowrap text-[2rem] tracking-tight text-fg transition hover:text-accent" data-track="cta_tel">{business.phoneDisplay}</a>
              <p className="mt-1 text-sm text-fg-faint">Bureau : {business.phoneOfficeDisplay}</p>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-fg">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Courriel</dt><dd className="mt-2"><a href={`mailto:${business.email}`} className="text-fg transition hover:text-accent">{business.email}</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-fg">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 1880<br />Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date})</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" />
      <JsonLd nodes={nodes} />
    </>
  );
}
