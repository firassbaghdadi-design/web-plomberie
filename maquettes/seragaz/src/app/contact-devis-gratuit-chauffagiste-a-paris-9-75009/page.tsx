import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, reviews, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Devis gratuit chauffagiste Paris 9 : contact | SERAGAZ";
const description =
  "Contactez SERAGAZ, chauffagiste à Paris 9 : devis gratuit pour l'installation, l'entretien ou le dépannage de votre chaudière gaz, 69 rue de Dunkerque.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin, joignez jusqu'à quatre photos de l'appareil : SERAGAZ vous répond, ou appelez-nous en cas de panne.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande de devis ?",
    a: "L'adresse exacte et l'étage, la marque et le modèle de l'appareil, son âge approximatif et ce qui ne va pas. Une photo de la chaudière, de sa plaque signalétique et du conduit aide l'équipe à préparer un devis précis dès le premier échange.",
  },
  {
    q: "En combien de temps SERAGAZ répond-elle ?",
    a: "L'équipe traite les demandes aux heures d'ouverture, du lundi au vendredi. Pour une panne ou une urgence, le téléphone reste le moyen le plus direct : 01 42 80 03 01, de 8 h à 12 h et de 14 h à 17 h.",
  },
  {
    q: "Je suis syndic ou agence : puis-je utiliser ce formulaire ?",
    a: "Oui. Choisissez « Autre demande » ou le type d'intervention, indiquez l'adresse de l'immeuble, le lot concerné et les coordonnées de l'occupant à contacter pour l'accès.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "depannage";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section>
        <div className="wrap grid gap-x-14 gap-y-10 pb-16 lg:grid-cols-12 lg:items-start pt-6 sm:pt-8">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="label mt-6 text-blue sm:mt-6" data-heat-start>Prendre contact avec notre équipe</p>
            <h1 className="mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>Devis gratuit de chauffagiste à Paris 9 (75009)</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "400ms" }}>
              <p className="label">Urgence ou panne</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-navy transition hover:text-blue" data-track="cta_tel">{business.phoneDisplay}</a>
              <p className="mt-1 text-sm text-ink-faint">{business.phoneHours}</p>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6 border-t border-line pt-6">
              <div><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div><dt className="label">E-mail</dt><dd className="mt-2"><a href={`mailto:${business.email}`} className="text-ink transition hover:text-blue">{business.email}</a></dd></div>
            </dl>
            <p className="mt-6 border-t border-line pt-6 text-sm">
              <a href={reviews.url} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:text-blue">Note de {reviews.ratingText}/5 sur Google</a> ({reviews.count} avis, relevé du {reviews.observed}).
            </p>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <JsonLd nodes={nodes} />
    </>
  );
}
