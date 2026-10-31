import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList, Station } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact plombier à Paris 14e : devis et intervention";
const description =
  "Contactez S. Petit, plombier au 36 avenue Jean Moulin à Paris 14e : fuite, salle de bains, chauffage et gaz. Appelez le 01 45 42 42 84 ou envoyez vos photos.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre S. Petit, plombier à Paris 14e, appelez le 01 45 42 42 84 du lundi au jeudi de 7 h 30 à 17 h 20 et le vendredi jusqu'à 16 h 20, ou envoyez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Votre demande arrive au 36 avenue Jean Moulin.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : la fuite, le compteur, l'étiquette de l'appareil. Plus la demande est précise, plus le devis est exact.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Copropriété » dans le formulaire, indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à contacter pour l'accès. L'équipe vous répond avec un devis adapté à la validation en assemblée.",
  },
  {
    q: "Pour une fuite active, que faire ?",
    a: "Coupez l'arrivée d'eau si vous le pouvez, puis téléphonez plutôt que d'écrire : le 01 45 42 42 84 reste le moyen le plus direct de joindre l'équipe aux heures d'ouverture. Pour une odeur de gaz, quittez les lieux et appelez le 0 800 47 33 33.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "plomberie";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section data-station className="station" style={{ ["--dot-y" as string]: "2.55rem" }}>
        <span className="station-pt" aria-hidden="true" />
        <div className="wrap tx grid gap-x-16 pb-14 pt-6 sm:pb-20 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in folio mt-10 sm:mt-14">Contact · devis gratuit</p>
            <h1 className="mt-5 text-[2.5rem] sm:text-[3.6rem] xl:text-[4.4rem]">
              <span className="line-up"><span>Contact&nbsp;: plombier à Paris 14e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Téléphone</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-eau-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">{business.address.street}, {business.address.postalCode} Paris</p>
          </div>
        </div>
      </section>
      <Station n="01" rubrique="Votre demande" ariaLabel="Formulaire de demande">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-8 xl:col-span-4 xl:pt-4">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Métro</dt><dd className="mt-2 text-ink">{business.metro}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 2007</dd></div>
            </dl>
          </aside>
        </div>
      </Station>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" />
      <JsonLd nodes={nodes} />
    </>
  );
}
