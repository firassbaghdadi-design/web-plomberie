import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, Gallery, LocalBlock, PageHero, SeeAlso } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : héros, « En bref », sections question-réponse, photos de l'entreprise, FAQ, bloc local, maillage, appel à l'action. */
export function ContentPage({ path, children }: { path: string; children?: React.ReactNode }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 10e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} />
      {children}
      {page.gallery ? <Gallery keys={page.gallery} /> : null}
      <FaqList items={page.faq} title={page.faqTitle} />
      <LocalBlock contactType={page.contactType} zone={page.zone} />
      <SeeAlso paths={page.related} current={path} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
