import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { AgencyVisual, Breadcrumb } from "@/components/Sections";
import { contact as c } from "@/lib/content";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, agencies, business, requestTypes } from "@/lib/site";

const { title, description } = c;
const path = PATHS.contact;
export const metadata = pageMeta({ title, description, path });

export default function Page({ searchParams }: { searchParams: { demande?: string } }) {
  const type = requestTypes.some((t) => t.value === searchParams.demande) ? (searchParams.demande as string) : "plomberie";
  return (
    <>
      <section className="hero pb-16" aria-labelledby="titre-page">
        <div className="container-x grid items-start gap-x-14 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
            <h1 id="titre-page" className="page-title mask mt-6 max-w-4xl !text-[clamp(2rem,4vw,3rem)]">
              <span>{c.h1}</span>
            </h1>
            <p className="lead fade-in mt-4 max-w-2xl" style={{ ["--i" as string]: 2 }}>
              Décrivez votre besoin et joignez vos photos : l'agence concernée vous répond.
            </p>
            <div className="fade-in mt-6 hidden flex-wrap gap-3 lg:flex" style={{ ["--i" as string]: 3 }}>
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-dark">
                <PhoneIcon className="h-4 w-4" />
                {business.phoneDisplay}
              </a>
              <a href={`mailto:${business.email}`} data-track="generate_lead" className="btn-ghost max-sm:!px-4">
                <MailIcon className="h-4 w-4" />
                {business.email}
              </a>
            </div>
          </div>
          <div id="formulaire" className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <h2 id="titre-form" className="sr-only">Formulaire de demande</h2>
            <ContactForm defaultType={type} />
          </div>
          <div className="border-b border-line lg:col-span-5 lg:col-start-1 lg:row-start-2">
            {agencies.map((a) => (
              <article key={a.key} className="border-t border-line">
                <div className="flex items-start gap-5 py-7">
                <AgencyVisual agency={a} className="h-16 w-16" />
                <div className="min-w-0">
                <p className="caption">{a.role}</p>
                <h3 className="mt-1 text-[1.5rem]">{a.name}</h3>
                <p className="mt-3 flex gap-2 text-sm">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {a.street}, {a.postalCode} {a.city}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="btn-ghost !min-h-[44px] !px-5">
                    <PhoneIcon className="h-4 w-4" />
                    {a.phoneDisplay}
                  </a>
                  <a href={`mailto:${a.email}`} className="link-line self-center text-sm text-brand">
                    {a.email}
                  </a>
                </div>
                </div>
                </div>
              </article>
            ))}
            <p className="border-t border-line py-5 text-sm">Les horaires d'ouverture ne figurent pas sur le site actuel : appelez l'agence avant de vous déplacer.</p>
          </div>
        </div>
      </section>
      <JsonLd nodes={[{ ...webPageNode({ title, description, path }), "@type": "ContactPage" }, breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }])]} />
    </>
  );
}
