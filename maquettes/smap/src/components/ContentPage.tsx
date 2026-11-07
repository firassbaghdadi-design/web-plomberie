import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, PlanBand, SeeAlso } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, « En bref », sections question-réponse, FAQ, bloc local, maillage, appel à l'action. */
export function ContentPage({ path, children }: { path: string; children?: React.ReactNode }) {
  const page = pageByPath(path);
  const zone = page.zone;
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, zone ?? "Paris 12e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} />
      <PlanBand photo={page.photo2 ?? "chantier"} zone={zone} subject={page.crumb} />
      {children}
      <FaqList items={page.faq} title={page.faqTitle} />
      <LocalBlock contactType={page.contactType} zone={zone} />
      <SeeAlso paths={page.related} current={path} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
