import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList, fr } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier chauffagiste à Paris 11e, devis | Monteil";
const description =
  "Contactez Monteil & Cie, 35 rue Saint-Ambroise, Paris 11e : plomberie, chauffage, salle de bains et couverture. Devis gratuit en ligne, avec photos si besoin.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin, joignez jusqu'à quatre photos : l'équipe vous répond, ou appelez le 01 47 00 58 33.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : la fuite, la tache au plafond, la chaudière, la toiture vue d'une fenêtre.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Copropriété » dans le formulaire, indiquez l'adresse de l'immeuble et la personne à contacter pour l'accès. La maison vous répond avec une proposition de contrat de maintenance ou d'astreinte.",
  },
  {
    q: "Pour une fuite active, que faire ?",
    a: "Coupez l'arrivée d'eau si vous le pouvez, puis téléphonez plutôt que d'écrire : le 01 47 00 58 33 est le moyen le plus direct de joindre le service client, de 8 h à 19 h.",
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
            <p className="fade-in mt-6 text-[0.82rem] font-medium uppercase tracking-[0.2em] text-accent sm:mt-6">Contact · devis gratuit</p>
            <h1 className="hp hp-load mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>{fr("Contact : plombier chauffagiste à Paris 11e")}</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "400ms" }}>
              <p className="label">Téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.3rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
              <p className="mt-1 text-sm text-ink-faint">{business.address.street}, {business.address.postalCode} Paris</p>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">E-mail</dt><dd className="mt-2 text-ink">{business.email}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Déplacement</dt><dd className="mt-2 text-sm">Forfait de 70 € TTC pour les particuliers, déduit du devis en cas d&apos;acceptation, selon le site actuel de la maison.</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" />
      <JsonLd nodes={nodes} />
    </>
  );
}
