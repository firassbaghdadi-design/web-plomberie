import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier à Paris 15e, devis gratuit | Pereira";
const description =
  "Contactez l'Entreprise Charles Pereira, 26 boulevard Garibaldi, Paris 15e : plomberie, fuite, débouchage et chauffe-eau. Devis gratuit, photos acceptées.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Décrivez votre besoin et joignez jusqu'à quatre photos : l'entreprise vous répond, ou appelez le 01 42 51 42 42.";

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
        <div className="wrap grid gap-x-14 gap-y-10 pb-16 pt-6 sm:pt-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <p className="fade-in mt-6 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-accent">Contact · devis gratuit</p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.05]">
              <span className="line-up"><span>Contact&nbsp;: plombier à Paris 15e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-4" style={{ ["--d" as string]: "200ms" }}>{brief}</p>
            <div className="fade-in mt-8 hidden border-t border-line pt-5 lg:block" style={{ ["--d" as string]: "300ms" }}>
              <p className="label">Téléphone</p>
              <a href={`tel:${business.phoneTel}`} className="num mt-3 block whitespace-nowrap text-[2.2rem] font-extralight tracking-tight text-ink transition hover:text-accent-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            </div>
          </div>
          <div id="formulaire" className="fade-in lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ["--d" as string]: "150ms" }}>
            <ContactForm defaultType={demande} />
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <a href={`tel:${business.phoneTel}`} className="num mb-6 block whitespace-nowrap text-[2rem] font-extralight tracking-tight text-ink lg:hidden" data-track="cta_tel">{business.phoneDisplay}</a>
            <dl className="space-y-6">
              <div className="border-t border-line pt-5"><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.name}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Métro</dt><dd className="mt-2 text-ink">{business.metro}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Horaires</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div className="border-t border-line pt-5"><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">{business.legalName}<br />{business.rcs}<br />Fondée en 2008</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" n="02" index={2} />
      <JsonLd nodes={nodes} />
    </>
  );
}
