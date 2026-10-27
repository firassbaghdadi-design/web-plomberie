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
      <section className="hero pb-10" aria-labelledby="titre-page">
        <div className="container-x">
          <Breadcrumb items={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
          <h1 id="titre-page" className="page-title mask mt-10 max-w-4xl">
            <span>{c.h1}</span>
          </h1>
          <p className="lead fade-in mt-7 max-w-2xl" style={{ ["--i" as string]: 2 }}>
            {c.lead}
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
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
      </section>

      <section className="section pt-4" aria-labelledby="titre-form">
        <h2 id="titre-form" className="sr-only">
          Formulaire de demande et coordonnées des agences
        </h2>
        <div className="container-x mb-12 max-w-4xl">
          <div className="border-t border-line pt-10">
            <p className="reponse-bref text-[1.35rem] font-light leading-[1.5] text-ink sm:text-[1.6rem]">
              <strong className="caption mb-4 flex items-center gap-3 !text-brand">
                <span aria-hidden="true" className="inline-block h-[7px] w-[7px] bg-amber" />
                En bref :{" "}
              </strong>
              Pour joindre Somsou-Pons, appelez l'agence du 16e au 01 42 15 25 15 ou celle du 17e au 01 46 27 14 86, écrivez à {business.email}, ou envoyez ce formulaire avec vos photos. Pour la menuiserie, l'atelier de La Garenne-Colombes répond au 01 42 42 23 72.
            </p>
          </div>
        </div>
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm defaultType={type} />
          <div className="border-b border-line">
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
