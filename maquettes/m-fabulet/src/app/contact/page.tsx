import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact couvreur La Garenne-Colombes : devis gratuit";
const description =
  "Contactez M. Fabulet, couvreur charpentier au 13 bd de la République à La Garenne-Colombes : toiture, charpente, gouttières, Velux. Devis et visite gratuits.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez vos travaux, joignez jusqu'à quatre photos : l'artisan vous rappelle pour fixer une visite et un devis gratuits.";

const faq: Faq[] = [
  {
    q: "Quelles photos joindre à ma demande ?",
    a: "Une vue du toit depuis la rue ou le jardin, la tache au plafond s'il y en a une, et si possible une photo des combles. Quatre photos suffisent pour préparer la visite.",
  },
  {
    q: "Je suis syndic de copropriété : comment procéder ?",
    a: "Indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à contacter pour l'accès. L'attestation de garantie décennale peut être jointe au devis.",
  },
  {
    q: "Pour une fuite en cours, faut-il écrire ou appeler ?",
    a: "Appelez plutôt : le 06 70 74 73 64 est le plus direct. En attendant, protégez ce qui se trouve sous la fuite et coupez l'électricité de la pièce si l'eau s'approche d'un plafonnier.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "couverture";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section className="pt-[6.4rem] sm:pt-[7.5rem]">
        <div className="wrap grid gap-x-14 gap-y-10 pb-16 lg:grid-cols-12 lg:items-start pt-6 sm:pt-8">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in cap mt-6 text-tuile-deep">Contact · devis gratuit</p>
            <h1 className="mt-4 text-[2.1rem] sm:text-[2.7rem] xl:text-[3rem]">
              <span className="line-up"><span>Contact, couvreur à La Garenne-Colombes</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-bois/25 pt-5 lg:block" style={{ ["--d" as string]: "400ms" }}>
              <span className="cap">Téléphone</span>
              <a href={`tel:${business.phoneTel}`} className="mt-3 block whitespace-nowrap text-[2.4rem] text-bois-deep hover:text-tuile-deep" style={{ fontWeight: 300 }} data-track="cta_tel">{business.phoneDisplay}</a>
              <a href={`tel:${business.mobileTel}`} className="block whitespace-nowrap text-[1.4rem] text-bois-deep hover:text-tuile-deep" style={{ fontWeight: 330 }}>{business.mobileDisplay}</a>
              <div className="mt-3 text-[0.95rem] text-ink-faint">{business.address.street}, {business.address.postalCode} {business.address.city}</div>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <dl className="space-y-6">
              <div className="border-t border-bois/25 pt-4"><dt className="cap">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} {business.address.city}<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-u mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-bois/25 pt-4"><dt className="cap">E-mail</dt><dd className="mt-2 text-ink"><a href={`mailto:${business.email}`} className="hover:text-tuile-deep">{business.email}</a></dd></div>
              <div className="border-t border-bois/25 pt-4"><dt className="cap">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-bois/25 pt-4"><dt className="cap">Entreprise</dt><dd className="mt-2 text-sm">Artisan, {business.rm}<br />Garantie décennale {business.insurer}<br />Installateur conseil expert Velux</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} n={2} title="Avant d'envoyer votre demande" />
      <JsonLd nodes={nodes} />
    </>
  );
}
