import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { PATHS, business } from "@/lib/site";
import { breadcrumbNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "Contact et devis chauffagiste à Paris 18e | Gaz Flash";
const description =
  "Contactez Gaz Flash, 7 rue Sainte-Isaure à Paris 18e : téléphone, e-mail, formulaire de demande de devis ou de dépannage, horaires du lundi au vendredi.";
const crumbs = [rootCrumb, { name: "Contact", path: PATHS.contact }];

export const metadata = pageMeta({ title, description, path: PATHS.contact });

export default function ContactPage() {
  const { address } = business;
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Demandez un devis ou un dépannage"
        lead="Nous sommes à votre écoute pour toute étude, tout devis ou tout renseignement. Appelez le standard ou envoyez votre demande : elle arrive directement chez Gaz Flash."
        image="heroTeam"
      />
      <section className="container-x pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6" data-reveal="">
            <div className="card border-t-[6px] border-t-flame p-7">
              <h2 className="text-3xl">Nous joindre</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-flame-dark" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-coal-soft">Téléphone</p>
                    <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="font-display text-4xl font-bold text-coal hover:text-flame-dark">{business.phoneDisplay}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="mt-1 h-6 w-6 shrink-0 text-flame-dark" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-coal-soft">E-mail</p>
                    <a href={`mailto:${business.email}`} className="break-all font-semibold hover:text-flame-dark">{business.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <PinIcon className="mt-1 h-6 w-6 shrink-0 text-flame-dark" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-coal-soft">Adresse</p>
                    <address className="not-italic">{address.street}<br />{address.postalCode} {address.city}</address>
                    <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-flame-dark underline underline-offset-4">Voir sur Google Maps</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-flame-dark" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-coal-soft">Horaires d'ouverture</p>
                    <p>Du lundi au vendredi<br />de 8 h à 12 h 30 et de 13 h 30 à 17 h<br />Fermé le samedi et le dimanche</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div data-reveal="">
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.contact }), breadcrumbNode(crumbs)]} />
    </>
  );
}
