import { CtaBand, DeepContent, LocalForm, PickedReviews, SeeAlso, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { CheckIcon } from "@/components/Icons";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, copy, services } from "@/lib/site";

const c = copy.heating;
const { title, description } = c;
const path = PATHS.heating;

export const metadata = pageMeta({ title, description, path });

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.heroTitle}
        lead={c.lead}
        photo={c.heroPhoto}
        photoAlt={c.heroAlt}
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Chauffage" }]}
        primary={{ href: `${PATHS.contact}?demande=chauffage`, label: "Demander un devis chaudière" }}
      />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" className="text-4xl sm:text-5xl">
            {c.introTitle}
          </h2>
          <p className="reponse-bref lead mt-6">
            {c.intro}
          </p>
        </div>
      </section>
      <section aria-label="Nos prestations de chauffage" className="section">
        <div className="container-x">
          <FeatureRows items={services.heating.items} accent={c.accent} contactType="chauffage" />
        </div>
      </section>
      <DeepContent deep={c.deep} />
      <section aria-labelledby="titre-contrat" className="pb-20 sm:pb-28">
        <div className="container-x">
          <div data-reveal="zoom" className="ocean relative overflow-hidden rounded-[2rem] p-8 text-white shadow-glow sm:p-14">
            <p className="eyebrow-light">À savoir</p>
            <h2 id="titre-contrat" className="mt-3 max-w-3xl text-3xl !text-white sm:text-5xl">
              {c.noteTitle}
            </h2>
            <ul className="mt-8 grid gap-4 lg:grid-cols-3">
              {c.notePoints.map((text) => (
                <li key={text} className="flex gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-amber" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <PickedReviews pick={c.deep.reviewPick} title={c.deep.reviewTitle} />
      <LocalForm deep={c.deep} defaultType="chauffage" />
      <FaqList keyName="heating" title={c.faqTitle} />
      <SeeAlso current="heating" />
      <CtaBand title={c.ctaTitle} text={c.ctaText} />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Chauffage", path }]), serviceNode("Chauffage et chaudières", path, c.intro), faqNode("heating")]} />
    </>
  );
}
