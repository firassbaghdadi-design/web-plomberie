import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso, pad } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, puis les stations de la goutte (En bref, questions, FAQ, adresse, voir aussi, devis). */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [
    webPageNode({ title: page.title, description: page.description, path }),
    breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }]),
    serviceNode(page.service, path, page.brief, page.zone),
    faqNode(page.faq),
  ];
  const k = page.sections.length + 2;
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} />
      <FaqList items={page.faq} title={page.faqTitle} n={pad(k)} />
      <LocalBlock contactType={page.contactType} approach={page.approach} n={pad(k + 1)} />
      <SeeAlso paths={page.related} current={path} n={pad(k + 2)} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} n={pad(k + 3)} />
      <JsonLd nodes={nodes} />
    </>
  );
}
