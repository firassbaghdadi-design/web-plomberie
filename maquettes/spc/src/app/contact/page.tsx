import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Niveau } from "@/components/Niveau";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier couvreur à Paris 12e, devis gratuit | SPC";
const description =
  "Contactez SPC, 66 avenue du Général-Michel-Bizot, Paris 12e : plomberie, couverture, travaux sur corde et assainissement. Devis gratuit, photos bienvenues.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre SPC, plombier couvreur à Paris 12e, appelez le 01 43 43 35 46 ou envoyez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Votre demande arrive au bureau de l'avenue du Général-Michel-Bizot, qui vous recontacte pour organiser l'expertise ou le dépannage.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : la fuite, l'auréole au plafond, la gouttière, l'évacuation qui refoule.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Copropriété » dans le formulaire, indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à joindre pour l'accès. SPC organise l'expertise et vous adresse un devis détaillé.",
  },
  {
    q: "Pour une urgence, faut-il remplir le formulaire ?",
    a: "Non : téléphonez. Le formulaire convient aux demandes de devis ; pour une fuite active ou une évacuation bouchée, le 01 43 43 35 46 reste le moyen le plus direct.",
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
            <p className="fade-in mt-10 text-[0.82rem] text-accent sm:mt-14">Contact · devis gratuit</p>
            <h1 className="mt-6 text-[2.5rem] sm:text-[3.6rem] xl:text-[4.2rem]">
              <span className="line-up"><span>Contact&nbsp;: plombier couvreur à Paris 12e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Téléphone</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">{business.address.street}, {business.address.postalCode} Paris</p>
          </div>
        </div>
      </section>
      <Niveau n="07" level="Votre demande" ariaLabel="Formulaire de demande">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-8 xl:col-span-4 xl:pt-4">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Téléphones</dt><dd className="mt-2 text-ink"><a href={`tel:${business.phoneTel}`} className="num">{business.phoneDisplay}</a><br /><a href={`tel:${business.mobileTel}`} className="num">{business.mobileDisplay}</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">E-mail</dt><dd className="mt-2 text-ink"><a href={`mailto:${business.email}`} className="link-line">{business.email}</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}<br /><span className="text-sm text-ink-soft">{business.emergency}</span></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Métro</dt><dd className="mt-2 text-ink">{business.metro}</dd></div>
            </dl>
          </aside>
        </div>
      </Niveau>
      <FaqList items={faq} title="Avant d'envoyer votre demande" i={7} />
      <JsonLd nodes={nodes} />
    </>
  );
}
