import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { Extra } from "./Extras";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso, pad } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, « En bref », bloc propre à la page, rubriques numérotées, FAQ, adresse, voir aussi. */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 16e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const extra = page.extra ? 1 : 0;
  const k = page.sections.length + 2 + extra;
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      {page.extra ? <Extra kind={page.extra} n="02" /> : null}
      <DeepContent sections={page.sections} start={2 + extra} />
      <FaqList items={page.faq} title={page.faqTitle} n={pad(k)} />
      <LocalBlock contactType={page.contactType} approach={page.approach} n={pad(k + 1)} />
      <SeeAlso paths={page.related} current={path} n={pad(k + 2)} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
