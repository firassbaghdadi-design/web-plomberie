import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Breadcrumb } from "@/components/Sections";
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
          <h1 id="titre-page" className="mask mt-8 max-w-4xl text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.3rem]">
            <span>{c.h1}</span>
          </h1>
          <p className="lead fade-in mt-7 max-w-2xl" style={{ ["--i" as string]: 2 }}>
            {c.lead}
          </p>
          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber">
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} data-track="generate_lead" className="btn-ghost">
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
          <div className="border-l-4 border-amber pl-6">
            <p className="reponse-bref font-display text-2xl leading-snug text-ink">
              <strong className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-brand">En bref : </strong>
              Pour joindre Somsou-Pons, appelez l'agence du 16e au 01 42 15 25 15 ou celle du 17e au 01 46 27 14 86, écrivez à {business.email}, ou envoyez ce formulaire avec vos photos. Pour la menuiserie, l'atelier de La Garenne-Colombes répond au 01 42 42 23 72.
            </p>
          </div>
        </div>
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm defaultType={type} />
          <div className="space-y-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
              <Photo id="telephone" sizes="(min-width:1024px) 36vw, 92vw" />
            </div>
            {agencies.map((a) => (
              <article key={a.key} className="rounded-[1.6rem] border border-line bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-action">{a.role}</p>
                <h3 className="mt-1 text-2xl">{a.name}</h3>
                <p className="mt-3 flex gap-2 text-sm">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {a.street}, {a.postalCode} {a.city}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`tel:${a.phoneTel}`} data-track="phone_call_click" className="btn-dark !min-h-[44px] !px-5">
                    <PhoneIcon className="h-4 w-4" />
                    {a.phoneDisplay}
                  </a>
                  <a href={`mailto:${a.email}`} className="btn-ghost !min-h-[44px] !px-5">
                    {a.email}
                  </a>
                </div>
              </article>
            ))}
            <p className="rounded-2xl bg-paper-deep p-5 text-sm">Les horaires d'ouverture ne figurent pas sur le site actuel : appelez l'agence avant de vous déplacer.</p>
          </div>
        </div>
      </section>
      <JsonLd nodes={[{ ...webPageNode({ title, description, path }), "@type": "ContactPage" }, breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }])]} />
    </>
  );
}
