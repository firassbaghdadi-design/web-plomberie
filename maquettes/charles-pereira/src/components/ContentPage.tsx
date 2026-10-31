import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso, pad } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, puis une suite de raccords numérotés (En bref, questions, FAQ, adresse, voir aussi, devis). */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 15e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const k = page.sections.length + 2;
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} photo={page.photo} caption={page.caption} />
      <DeepContent sections={page.sections} />
      <FaqList items={page.faq} title={page.faqTitle} n={pad(k)} index={k - 1} />
      <LocalBlock contactType={page.contactType} approach={page.approach} zone={page.zone} n={pad(k + 1)} index={k} />
      <SeeAlso paths={page.related} current={path} n={pad(k + 2)} index={k + 1} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} n={pad(k + 3)} index={k + 2} />
      <JsonLd nodes={nodes} />
    </>
  );
}
