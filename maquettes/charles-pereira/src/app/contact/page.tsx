import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Raccord } from "@/components/Raccord";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier à Paris 15e, devis gratuit | Pereira";
const description =
  "Contactez l'Entreprise Charles Pereira, 26 boulevard Garibaldi, Paris 15e : plomberie, fuite, débouchage et chauffe-eau. Devis gratuit, photos acceptées.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre l'Entreprise Charles Pereira, plombier à Paris 15e, appelez le 01 42 51 42 42 ou envoyez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Votre demande arrive au 26, boulevard Garibaldi et reçoit une réponse de l'entreprise.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : la fuite, la tache au plafond, le chauffe-eau, le dessous de l'évier.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Choisissez « Copropriété » dans le formulaire, indiquez l'adresse de l'immeuble, la partie commune concernée et la personne à contacter pour l'accès. L'entreprise vous répond avec un devis adapté.",
  },
  {
    q: "Pour une fuite active, que faire ?",
    a: "Coupez l'arrivée d'eau si vous le pouvez, puis téléphonez plutôt que d'écrire : le 01 42 51 42 42 reste le moyen le plus direct de joindre l'entreprise.",
  },
];

export default function ContactPage({ searchParams }: { searchParams: { demande?: string } }) {
  const demande = requestTypes.some((t) => t.value === searchParams.demande) ? searchParams.demande : "plomberie";
  const nodes = [webPageNode({ title, description, path }, "ContactPage"), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }]), faqNode(faq)];
  return (
    <>
      <section className="relative z-10">
        <div className="wrap grid gap-x-16 pb-6 pt-6 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in mt-10 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-accent sm:mt-14">Contact · devis gratuit</p>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.2rem)] leading-[1]">
              <span className="line-up"><span>Contact&nbsp;: plombier à Paris 15e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Téléphone</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">{business.address.street}, {business.address.postalCode} Paris</p>
          </div>
        </div>
        <div data-art aria-hidden="true" className="wrap-flat h-[96px] w-full sm:h-[130px]" />
      </section>
      <Raccord n="01" index={1} ariaLabel="Formulaire de demande">
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-8 xl:col-span-4 xl:pt-4">
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Métro</dt><dd className="mt-2 text-ink">{business.metro}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 2008</dd></div>
            </dl>
          </aside>
        </div>
      </Raccord>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" index={2} />
      <JsonLd nodes={nodes} />
    </>
  );
}
