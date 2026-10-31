import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros (ligne des toits), puis la descente niveau par niveau (En bref, questions, FAQ, adresse, voir aussi). */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 12e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const k = page.sections.length + 1;
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} />
      <FaqList items={page.faq} title={page.faqTitle} i={k} />
      <LocalBlock contactType={page.contactType} zone={page.zone} i={k + 1} />
      <SeeAlso paths={page.related} current={path} i={k + 2} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
