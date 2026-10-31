import { Bief } from "@/components/Bief";
import { ContactForm } from "@/components/ContactForm";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { photoAlt } from "@/lib/photos";
import { Ecluse } from "@/components/Lock";
import { Breadcrumbs, FaqList } from "@/components/Sections";
import { PATHS, business, contacts, requestTypes, type Faq } from "@/lib/site";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.contact;
const title = "Contact : plombier couvreur Paris 10e, devis gratuit | MTE";
const description =
  "Contactez Martinet Thibault Entreprise, 34 passage du Désir, Paris 10e : standard, service plomberie, service couverture. Devis gratuit avec photos jointes.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Pour joindre Martinet Thibault Entreprise, plombier et couvreur à Paris 10e, appelez le standard au 01 48 24 80 57 ou envoyez ce formulaire : type de demande, coordonnées, adresse du lieu concerné et jusqu'à quatre photos. Votre demande arrive au 34, passage du Désir et rejoint le service concerné.";

const faq: Faq[] = [
  {
    q: "Quelles informations joindre à ma demande ?",
    a: "L'adresse exacte, l'étage et les conditions d'accès, une description du problème ou du projet, et si possible des photos : fuite, appareil, pièce à rénover ou traces d'infiltration sous le toit.",
  },
  {
    q: "Quand l'entreprise répond-elle ?",
    a: "Aux heures d'ouverture, du lundi au vendredi, de 8 h à 12 h et de 13 h 30 à 17 h. Pour une urgence, le téléphone reste le moyen le plus direct : 01 48 24 80 57.",
  },
  {
    q: "Je suis syndic ou gestionnaire : comment procéder ?",
    a: "Indiquez l'adresse de l'immeuble, le lot ou la partie commune concernée et la personne à contacter pour l'accès. Le service plomberie ou couverture prendra le relais.",
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
            <p className="label mt-12 text-blue-deep sm:mt-16">Contacts · devis gratuit</p>
            <h1 className="mt-6 text-[2.5rem] sm:text-[3.7rem] xl:text-[4.3rem]">
              <span className="line-up"><span>Contact&nbsp;: plombier et couvreur à Paris 10e</span></span>
            </h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
          </div>
          <div className="fade-in mt-12 self-end border-t border-line pt-6 lg:col-span-4 lg:mt-0" style={{ ["--d" as string]: "400ms" }}>
            <p className="label">Standard</p>
            <a href={`tel:${business.phoneTel}`} className="num mt-4 block whitespace-nowrap text-[2.4rem] font-extralight tracking-tight text-ink transition hover:text-blue-deep" data-track="cta_tel">{business.phoneDisplay}</a>
            <p className="mt-1 text-sm text-ink-faint">{business.hours}</p>
          </div>
        </div>
      </section>
      <section className="py-14 sm:py-20">
      <Bief />
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ContactForm defaultType={demande} />
          </div>
          <aside className="space-y-10 lg:col-span-4 lg:pt-4">
            <div>
              <Ecluse n="01">Contacts</Ecluse>
              <ul className="mt-5 border-t border-line">
                {contacts.map((c) => (
                  <li key={c.service} className="border-b border-line py-4">
                    <p className="text-ink">{c.service}{c.name ? <span className="text-ink-faint"> · {c.name}</span> : null}</p>
                    <a href={`tel:${c.phoneTel}`} className="num mt-1 inline-block whitespace-nowrap text-[1.25rem] font-light text-ink transition hover:text-blue-deep">{c.phoneDisplay}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">Mathieu Thibault, dirigeant et chargé d'affaires plomberie.</p>
            </div>
            <dl className="space-y-6 border-t border-line pt-6">
              <div><dt className="label">Adresse</dt><dd className="mt-2 text-ink">{business.legalName}<br />{business.address.street}<br />{business.address.postalCode} Paris<br /><a href={business.mapsUrl} target="_blank" rel="noopener" className="link-line mt-2 text-sm">Itinéraire</a></dd></div>
              <div><dt className="label">Heures d'ouverture</dt><dd className="mt-2 text-ink">{business.hours}</dd></div>
              <div><dt className="label">Entreprise</dt><dd className="mt-2 text-sm">SIRET {business.siret} · APE {business.ape}<br />TVA {business.vat}</dd></div>
            </dl>
            <figure data-mask className="max-w-[300px]">
              <div className="overflow-hidden rounded-[3px]"><Img id="contact" alt={photoAlt("contact")} className="aspect-square" /></div>
            </figure>
          </aside>
        </div>
      </section>
      <FaqList items={faq} title="Avant d'envoyer votre demande" />
      <JsonLd nodes={nodes} />
    </>
  );
}
