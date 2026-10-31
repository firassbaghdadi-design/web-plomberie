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
  "Pour un devis gratuit de chauffagiste à Paris 9, remplissez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et, si vous le souhaitez, jusqu'à quatre photos de l'appareil. Votre demande arrive directement chez SERAGAZ, 69 rue de Dunkerque. Pour une panne, appelez plutôt le 01 42 80 03 01.";

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
        <div className="wrap grid gap-x-16 pb-14 pt-6 sm:pb-20 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="label mt-12 text-blue sm:mt-16" data-heat-start>Prendre contact avec notre équipe</p>
            <h1 className="mt-6 text-[2.55rem] sm:text-[3.8rem] xl:text-[4.4rem]">
              <span className="line-up"><span>Devis gratuit de chauffagiste à Paris 9 (75009)</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Urgence ou panne</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-navy transition hover:text-blue" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">{business.phoneHours}</p>
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
              <div><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div><dt className="label">E-mail</dt><dd className="mt-2"><a href={`mailto:${business.email}`} className="text-ink transition hover:text-blue">{business.email}</a></dd></div>
            </dl>
            <p className="border-t border-line pt-6 text-sm">
              <a href={reviews.url} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:text-blue">Note de {reviews.ratingText}/5 sur Google</a> ({reviews.count} avis, relevé du {reviews.observed}).
            </p>
          </aside>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <JsonLd nodes={nodes} />
    </>
  );
}
