import { ContactForm } from "@/components/ContactForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
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
      <section className="relative overflow-hidden bg-night text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative pb-40 pt-8 sm:pt-12">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} light />
          <p className="label mt-10 flex items-center gap-3 text-flame"><span className="h-px w-8 bg-flame" aria-hidden="true" /> Prendre contact avec notre équipe</p>
          <h1 className="mt-5 max-w-4xl text-[2.35rem] font-semibold sm:text-6xl xl:text-7xl">
            <span className="line-up"><span>Devis gratuit de chauffagiste à Paris 9 (75009)</span></span>
          </h1>
          <p className="reponse-bref mt-7 max-w-3xl text-white/75">{brief}</p>
        </div>
      </section>
      <section className="bg-paper pb-20">
        <div className="wrap relative -mt-28 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-4 lg:col-span-4">
            <div className="rounded-[2rem] bg-blue p-7 text-white shadow-soft">
              <p className="label text-white/70">Urgence ou panne</p>
              <a href={`tel:${business.phoneTel}`} className="mt-3 flex items-center gap-3 whitespace-nowrap font-display text-3xl font-semibold"><PhoneIcon className="h-6 w-6 text-flame" />{business.phoneDisplay}</a>
              <p className="mt-2 text-sm text-white/75">{business.phoneHours}</p>
            </div>
            <ul className="divide-y divide-line rounded-[2rem] border border-line bg-white p-7">
              <li className="flex gap-3 pb-4"><PinIcon className="mt-1 h-5 w-5 shrink-0 text-blue" /><span>{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="text-sm font-semibold text-blue underline underline-offset-4">Itinéraire</a></span></li>
              <li className="flex gap-3 py-4"><ClockIcon className="mt-1 h-5 w-5 shrink-0 text-blue" /><span>{business.hours}</span></li>
              <li className="flex gap-3 pt-4"><MailIcon className="mt-1 h-5 w-5 shrink-0 text-blue" /><a href={`mailto:${business.email}`} className="hover:text-blue">{business.email}</a></li>
            </ul>
            <p className="px-2 text-sm text-ink-soft">
              <a href={reviews.url} target="_blank" rel="noopener" className="underline underline-offset-4">Note de {reviews.ratingText}/5 sur Google</a> ({reviews.count} avis, relevé du {reviews.observed}).
            </p>
          </aside>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <JsonLd nodes={nodes} />
    </>
  );
}
