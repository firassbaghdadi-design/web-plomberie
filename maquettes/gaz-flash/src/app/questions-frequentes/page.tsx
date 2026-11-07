import Link from "next/link";
import { CallStrip, Faq, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { PATHS, business } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.faq;
export const metadata = pageMeta(path);

export default function FaqPage() {
  return (
    <>
      <PageHead
        path={path}
        wide={false}
        aside={
          <div className="affiche red">
            <p className="label text-red-dark">Urgence ?</p>
            <ul className="mt-2 space-y-1.5">
              <li>Odeur de gaz ou monoxyde : pompiers <strong>18</strong> ou <strong>112</strong></li>
              <li>Urgence gaz GRDF : <strong>0 800 47 33 33</strong></li>
              <li>
                Panne ordinaire, en semaine : <a href={`tel:${business.phoneTel}`} className="font-medium text-red-dark">{business.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        }
      />

      <section className="wrap mt-12">
        <div className="prose-gf max-w-[70ch]">
          <p>
            Ces réponses sont volontairement courtes. Elles renvoient vers les pages détaillées de Gaz Flash : <Link href={PATHS.repairGuide}>panne de chaudière</Link>, <Link href={PATHS.maintenanceGuide}>entretien annuel</Link>, <Link href={PATHS.sweep}>ramonage</Link>, <Link href={PATHS.condensing}>chaudière à condensation</Link>. Pour votre cas, le standard répond du lundi au vendredi.
          </p>
        </div>
      </section>

      <Faq keyName="hub" title="Toutes les réponses, sans jargon" />
      <div className="wrap mt-10">
        <PhoneNote rotate={-1} />
      </div>
      <SeeAlso
        links={[
          { path: PATHS.services, text: "Les services de Gaz Flash", why: "Entretien, dépannage, installation, ramonage, avec leurs tarifs." },
          { path: PATHS.paris18, text: "Chauffagiste dans le 18e", why: "Le quartier de la maison et les tarifs d'arrondissement." },
          { path: PATHS.contact, text: "Contact", why: "Poser une question qui n'est pas ici." },
        ]}
      />
      <CallStrip title="Une question qui n'est pas ici ?" />
      <JsonLd nodes={pageNodes(path, { faq: "hub" })} />
    </>
  );
}
