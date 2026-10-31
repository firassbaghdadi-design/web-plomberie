import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { pairs } from "@/lib/photos";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { BeforeAfter } from "./BeforeAfter";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso, Sec, pad } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, En bref, sections numérotées, FAQ, adresse, voir aussi, appel final. */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 11e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const showcase = page.showcase && pairs.length > 0;
  const k = page.sections.length + 2 + (showcase ? 1 : 0);
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} />
      {showcase ? (
        <Sec n={pad(page.sections.length + 2)} rubrique="Avant, après" labelledBy="titre-avant-apres">
          <h2 id="titre-avant-apres" className="hp text-[1.85rem] sm:text-[2.5rem]">Les chantiers, avant et après</h2>
          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {pairs.map((p) => (
              <div key={p.key}>
                <BeforeAfter pair={p} />
                <p className="mt-4 text-[1.05rem] font-medium text-ink">{p.title}</p>
                <p className="mt-1 text-[0.95rem]">{p.text}</p>
              </div>
            ))}
          </div>
        </Sec>
      ) : null}
      <FaqList items={page.faq} title={page.faqTitle} n={pad(k)} />
      <LocalBlock contactType={page.contactType} zone={page.zone} n={pad(k + 1)} />
      <SeeAlso paths={page.related} current={path} n={pad(k + 2)} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
