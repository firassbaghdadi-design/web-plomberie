import { CtaBand, DeepContent, LocalBlock, SeeAlso, Emergency, FaqList, FeatureRows, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, copy, services } from "@/lib/site";

const c = copy.plumbing;
const { title, description } = c;
const path = PATHS.plumbing;

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
        crumbs={[{ name: "Accueil", href: "/" }, { name: "Plomberie" }]}
        primary={{ href: `${PATHS.contact}?demande=urgence`, label: "Signaler une urgence" }}
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
      <section aria-label="Nos prestations de plomberie" className="section">
        <div className="container-x">
          <FeatureRows items={services.plumbing.items} accent={c.accent} contactType="plomberie" />
        </div>
      </section>
      <DeepContent deep={c.deep} />
      <Emergency />
      <LocalBlock deep={c.deep} contactType="plomberie" />
      <FaqList keyName="plumbing" title={c.faqTitle} />
      <SeeAlso current="plumbing" />
      <CtaBand title={c.ctaTitle} text={c.ctaText} />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Plomberie", path }]), serviceNode("Plomberie et dépannage", path, c.intro), faqNode("plumbing")]} />
    </>
  );
}
