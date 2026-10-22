import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/Sections";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, agency, requestTypes } from "@/lib/site";

const title = "Demander une maquette gratuite | Atelier Truelle";
const description = "Écrivez à Atelier Truelle : nous préparons une maquette privée de votre site avec votre logo et vos couleurs, gratuite et sans engagement. Réponse par e-mail.";
const path = PATHS.contact;

export const metadata = pageMeta({ title, description, path });

export default function Page({ searchParams }: { searchParams: { sujet?: string } }) {
  const type = requestTypes.some((t) => t.value === searchParams.sujet) ? (searchParams.sujet as string) : "maquette";
  return (
    <>
      <PageHeader eyebrow="Contact" title="Recevoir une maquette gratuite de votre site." lead="Indiquez votre entreprise et, si vous en avez un, l'adresse de votre site actuel. Nous préparons la maquette et revenons vers vous par e-mail." crumbs={[{ name: "Accueil", href: "/" }, { name: "Contact" }]} />
      <section className="section pt-12 sm:pt-16" aria-labelledby="titre-form">
        <h2 id="titre-form" className="sr-only">
          Formulaire de contact
        </h2>
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal>
            <ContactForm defaultType={type} email={agency.email} />
          </div>
          <aside className="space-y-5" data-reveal style={{ ["--d" as string]: "100ms" }}>
            <div className="card">
              <h3 className="text-2xl">Écrire directement</h3>
              <p className="mt-4 flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-terre-action" />
                <a href={`mailto:${agency.email}`} className="font-bold text-ardoise underline decoration-terre-action decoration-2 underline-offset-4">
                  {agency.email}
                </a>
              </p>
              {agency.phoneTel ? (
                <p className="mt-3 flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-terre-action" />
                  <a href={`tel:${agency.phoneTel}`} className="font-bold text-ardoise">
                    {agency.phoneDisplay}
                  </a>
                </p>
              ) : null}
            </div>
            <div className="card bg-terre-tint/60">
              <h3 className="text-2xl">Et ensuite ?</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>Nous regardons votre site et votre fiche Google.</li>
                <li>Nous préparons une maquette privée à votre charte.</li>
                <li>Nous vous envoyons le lien, sans engagement.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
      <JsonLd nodes={[{ ...webPageNode({ title, description, path }), "@type": "ContactPage" }, breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Contact", path }])]} />
    </>
  );
}
