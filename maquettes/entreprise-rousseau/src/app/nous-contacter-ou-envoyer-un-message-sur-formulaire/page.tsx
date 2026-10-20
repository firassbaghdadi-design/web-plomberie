import { ContactForm } from "@/components/ContactForm";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Bubbles, Waves } from "@/components/Ocean";
import { Kinetic } from "@/components/Kinetic";
import { Breadcrumb } from "@/components/Sections";
import { Logo, Photo } from "@/components/Photo";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business, requestTypes, sister } from "@/lib/site";

const title = "Contact et devis plombier Paris 14e | Entreprise Rousseau";
const description = "Contactez Entreprise Rousseau, plombier chauffagiste à Paris 14e : téléphone, e-mail, horaires et formulaire de devis pour plomberie, chauffage ou salle de bains.";
const path = PATHS.contact;

export const metadata = pageMeta({ title, description, path });

export default function Page({ searchParams }: { searchParams: { demande?: string } }) {
  const type = requestTypes.some((t) => t.value === searchParams.demande) ? (searchParams.demande as string) : "plomberie";
  const cards = [
    { logo: "logoRousseau" as const, photo: "storefrontRousseau" as const, name: business.name, street: business.address.street, zip: `${business.address.postalCode} ${business.address.city}`, tel: business.phoneDisplay, telHref: business.phoneTel, mail: business.email, hours: `Bureau ouvert au public : ${business.hoursText.toLowerCase()}.` },
    { logo: "logoSandrin" as const, photo: "storefrontSandrin" as const, name: sister.name, street: sister.street, zip: `${sister.postalCode} ${sister.city}`, tel: sister.phoneDisplay, telHref: sister.phoneTel, mail: sister.email, hours: `Bureau ouvert au public : ${sister.hoursText.toLowerCase()}.` },
  ];
  return (
    <>
      <section data-stage className="ocean relative overflow-hidden pb-36 pt-36 text-white sm:pt-44" aria-labelledby="titre-page">
        <Bubbles />
        <div className="container-x relative">
          <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
          <h1 id="titre-page" className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] !text-white sm:text-6xl">
            <Kinetic text="Nous contacter ou envoyer un message" />
          </h1>
          <p className="lead fade-up mt-6 max-w-2xl !text-white/85" style={{ ["--delay" as string]: "0.3s" }}>
            Appelez-nous, écrivez-nous ou remplissez le formulaire : votre demande arrive directement dans la boîte e-mail de l'entreprise.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ ["--delay" as string]: "0.45s" }}>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse">
              <PhoneIcon />
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} data-track="generate_lead" className="btn-ghost-light">
              <MailIcon />
              {business.email}
            </a>
          </div>
        </div>
        <Waves />
      </section>

      <section className="section pt-12 sm:pt-16" aria-labelledby="titre-form">
        <h2 id="titre-form" className="sr-only">
          Formulaire de demande et coordonnées
        </h2>
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal="left">
            <ContactForm defaultType={type} />
          </div>
          <div className="space-y-6" data-reveal="right">
            {cards.map((c) => (
              <article key={c.name} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift">
                <div className="card-photo relative aspect-[16/7] bg-brand-tint">
                  <Photo id={c.photo} alt={`Devanture ${c.name}`} sizes="(min-width:1024px) 40vw, 92vw" />
                </div>
                <div className="p-7">
                  <Logo id={c.logo} alt={c.name} className="h-11 w-auto" width={200} height={44} />
                  <p className="mt-4 flex gap-3">
                    <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-dark" />
                    <span>
                      {c.street}, {c.zip}
                    </span>
                  </p>
                  <p className="mt-2 flex gap-3 text-sm">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
                    <span>
                      {c.hours} Permanence téléphonique en cas d'absence : laissez votre message.
                    </span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a href={`tel:${c.telHref}`} className="btn-dark !min-h-[46px] !px-5">
                      <PhoneIcon /> {c.tel}
                    </a>
                    <a href={`mailto:${c.mail}`} className="btn-ghost !min-h-[46px] !px-5">
                      {c.mail}
                    </a>
                  </div>
                </div>
              </article>
            ))}
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
              Itinéraire vers Paris 14e<span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
        </div>
      </section>
      <JsonLd nodes={[{ ...webPageNode({ title, description, path }), "@type": "ContactPage" }, breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }])]} />
    </>
  );
}
