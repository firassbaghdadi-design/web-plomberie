import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CallStrip, Eyebrow, Faq, HoursSlate, PageHead, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { AccessSketch } from "@/components/Sketches";
import { PATHS, business, google } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.contact;
export const metadata = pageMeta(path);

export default function ContactPage() {
  const { address } = business;
  return (
    <>
      <PageHead path={path} aside={<HoursSlate className="mx-auto max-w-[340px]" />} />

      <section className="wrap mt-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <Eyebrow>Le plus simple</Eyebrow>
            <h2 className="mt-1">Nous joindre</h2>
            <dl className="mt-5 space-y-6">
              <div>
                <dt className="label text-ink-soft">Téléphone</dt>
                <dd>
                  <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="font-display text-[2.4rem] font-semibold leading-none text-ink-2 no-underline hover:text-red-dark">
                    {business.phoneDisplay}
                  </a>
                  <p className="mt-1 text-[0.95rem] text-ink-soft">Standard et service commercial, du lundi au vendredi.</p>
                </dd>
              </div>
              <div>
                <dt className="label text-ink-soft">E-mail</dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="break-all font-semibold text-red-dark underline">{business.email}</a>
                </dd>
              </div>
              <div>
                <dt className="label text-ink-soft">Adresse</dt>
                <dd>
                  <address className="not-italic">
                    {business.legalName} (Gaz Flash)
                    <br />
                    {address.street}
                    <br />
                    {address.postalCode} {address.city}
                  </address>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow mt-1 text-[0.95rem]">
                    Voir la fiche Google Maps ({google.ratingLabel}/5, {google.count} avis)
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-ink-soft">Horaires d'ouverture</dt>
                <dd>
                  Du lundi au vendredi,
                  <br />
                  de 8 h à 12 h 30 et de 13 h 30 à 17 h.
                  <br />
                  Fermé le samedi et le dimanche.
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="wrap mt-20" aria-labelledby="venir">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="prose-gf">
            <h2 id="venir" className="!mt-0">Comment venir</h2>
            <p>
              Gaz Flash est au {address.street}, à Paris 18e. La place Jules-Joffrin, où se trouve la station de métro Jules Joffrin (ligne 12), est à moins de 200 mètres à vol d'oiseau, d'après les coordonnées de la fiche Google.
            </p>
            <p>
              Avant de vous déplacer, appelez le standard : l'équipe intervient chez les clients, et le standard vous dira si quelqu'un peut vous recevoir. Pour une panne, le téléphone est de toute façon le plus rapide.
            </p>
            <p>
              Vous cherchez un chauffagiste dans le quartier ? Voyez la page <Link href={PATHS.paris18}>Chauffagiste Paris 18e</Link>, ou la <Link href={PATHS.zones}>zone d'intervention</Link> si vous habitez ailleurs à Paris ou en petite couronne.
            </p>
          </div>
          <AccessSketch />
        </div>
      </section>

      <Faq keyName="contact" />
      <SeeAlso
        links={[
          { path: PATHS.repair, text: "Dépannage", why: "Ce qu'il faut préciser pour une panne de chauffage ou d'eau chaude." },
          { path: PATHS.prices, text: "Nos tarifs", why: "Les prix d'entretien affichés avant de prendre contact." },
          { path: PATHS.faq, text: "Questions fréquentes", why: "Odeur de gaz, monoxyde de carbone, entretien du locataire." },
        ]}
      />
      <CallStrip title="Le plus rapide : le téléphone" form={false} />
      <JsonLd nodes={pageNodes(path, { faq: "contact" })} />
    </>
  );
}
