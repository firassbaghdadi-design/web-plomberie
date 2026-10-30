import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList, Folio } from "@/components/Sections";
import { PATHS, business, requestTypes, reputation, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier couvreur à Paris 16e, devis gratuit";
const description =
  "Contactez Bastien & Trebulle, 3 rue Gros, Paris 16e : plomberie, couverture, chauffage, salle de bains et dépannage 24h/24. Devis gratuit, réponse en 24 à 48 h.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre Bastien & Trebulle, plombier et couvreur à Paris 16e, écrivez via ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Le site actuel annonce une réponse sous 24 à 48 heures ouvrées. Pour une urgence, appelez directement le 01 45 24 77 89.";

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
        <div className="wrap grid gap-x-16 pb-14 pt-6 sm:pb-20 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in mt-10 flex items-center gap-3 sm:mt-14"><span className="h-px w-8 bg-accent" aria-hidden="true" /><span className="label !text-accent">Contact · devis gratuit</span></p>
            <h1 className="mt-6 text-[2.5rem] sm:text-[3.6rem] xl:text-[4.2rem]">
              <span className="line-up"><span>Contact&nbsp;: plombier couvreur à Paris 16e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Urgence 24h/24</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.3rem] tracking-tight text-ink transition hover:text-accent" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">Bureau : {business.phoneOfficeDisplay}</p>
          </div>
        </div>
      </section>
      <Folio n="01" rubrique="Votre demande" ariaLabel="Formulaire de demande">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-8 xl:col-span-4 xl:pt-4">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Courriel</dt><dd className="mt-2"><a href={`mailto:${business.email}`} className="text-ink transition hover:text-accent">{business.email}</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 1880<br />Note de {reputation.rating}/5 sur Google ({reputation.reviews} avis, relevé du {reputation.date})</dd></div>
            </dl>
          </aside>
        </div>
      </Folio>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" />
      <JsonLd nodes={nodes} />
    </>
  );
}
