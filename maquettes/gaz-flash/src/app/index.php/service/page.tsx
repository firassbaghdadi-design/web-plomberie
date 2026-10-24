import Link from "next/link";
import { CallStrip, Eyebrow, Faq, PageHead, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, services } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.services;
export const metadata = pageMeta(path);

const descriptions: Record<string, string> = {
  maintenance: "Une visite par an pour la chaudière, avec attestation : en forfait révision sans engagement, ou en contrat annuel qui comprend aussi les dépannages (hors pièces).",
  repair: "Chauffage, chauffe-eau, radiateur à gaz ou ballon électrique en panne : un appel au standard, un devis détaillé, une explication de l'origine de la panne.",
  install: "Remplacer ou créer : chaudière, chauffe-eau, régulation, radiateurs. Le diagnostic vient d'abord, la pose ensuite, avec 2 ans de garantie sur les pièces.",
  sweep: "Le conduit de fumée gaz se ramone au moins une fois par an, par un professionnel qualifié, certificat à la clé : 50 € TTC avec l'entretien.",
};

const situations = [
  { when: "Ça sent le gaz", what: "Ne cherchez pas un dépanneur d'abord : fermez le robinet, aérez, sortez et appelez les secours.", to: PATHS.faq, label: "Que faire en cas d'odeur de gaz" },
  { when: "La chaudière ou l'eau chaude est en panne", what: "Quelques vérifications simples, puis un appel au standard.", to: PATHS.repair, label: "Dépannage" },
  { when: "Tout marche, la visite annuelle approche", what: "Forfait révision sans engagement, ou contrat annuel avec dépannages compris.", to: PATHS.maintenance, label: "Entretien" },
  { when: "La vieille chaudière donne des signes de fatigue", what: "Un diagnostic, un conseil, puis la pose si vous décidez de la remplacer.", to: PATHS.install, label: "Installation" },
  { when: "Il faut faire ramoner le conduit", what: "Au moins une fois par an, avec certificat, en même temps que l'entretien.", to: PATHS.sweep, label: "Ramonage" },
];

export default function ServicesPage() {
  const list = Object.values(services);
  return (
    <>
      <PageHead
        path={path}
        aside={<Polaroid id="depannage2" alt="Illustration : intervention de dépannage sur un appareil de chauffage" caption="Entretien, dépannage, pose" ratio="4 / 3" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <section className="wrap mt-16" aria-labelledby="cas">
        <Eyebrow>Par où commencer ?</Eyebrow>
        <h2 id="cas" className="mt-1">Dans quel cas êtes-vous ?</h2>
        <ul className="ruled mt-6">
          {situations.map((s) => (
            <li key={s.when} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-8">
              <p className="font-display text-[1.2rem] font-semibold text-ink-2">{s.when}</p>
              <p className="text-ink-soft">
                {s.what}{" "}
                <Link href={s.to} className="link-arrow">
                  {s.label} <ArrowIcon className="h-4 w-4" />
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap mt-20" aria-labelledby="quatre">
        <h2 id="quatre">Les quatre services, en deux mots</h2>
        <div className="mt-10 space-y-14">
          {list.map((service, index) => (
            <article key={service.key} className={`grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Polaroid id={service.image} alt={`Illustration : ${service.title.toLowerCase()} de chaudière gaz`} caption={service.title} ratio="3 / 2" sizes="(min-width:768px) 360px, 90vw" rotate={index % 2 ? 1.5 : -1.5} className="mx-auto w-full max-w-[380px]" />
              <div className="prose-gf">
                <h3 className="!mt-0 text-[1.7rem]">{service.title}</h3>
                <p className="hand text-[1.45rem] text-red-btn">{service.line}</p>
                <p>{descriptions[service.key]}</p>
                <p>
                  <Link href={service.path} className="link-arrow">
                    Tout savoir sur {service.title === "Ramonage" ? "le ramonage" : service.title === "Entretien" ? "l'entretien" : service.title === "Dépannage" ? "le dépannage" : "l'installation"} <ArrowIcon className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-[64ch] text-ink-soft">
          Pour l'entretien et le ramonage, les prix sont publiés : voir <Link href={PATHS.prices} className="font-semibold text-red-dark underline">les tarifs TTC</Link>. Pour le dépannage et l'installation, Gaz Flash remet un devis détaillé avant d'intervenir.
        </p>
      </section>

      <Faq keyName="services" />
      <SeeAlso
        links={[
          { path: PATHS.paris18, text: "Chauffagiste dans le 18e", why: "Le quartier de la maison, avec les tarifs de l'arrondissement." },
          { path: PATHS.installs, text: "Les gammes d'installation", why: "Régulation, chauffe-eau, condensation, basse température." },
          { path: PATHS.faq, text: "Questions fréquentes", why: "Gaz, monoxyde de carbone, ramonage, pression : les réponses courtes." },
        ]}
      />
      <CallStrip />
      <JsonLd nodes={pageNodes(path, { faq: "services" })} />
    </>
  );
}
