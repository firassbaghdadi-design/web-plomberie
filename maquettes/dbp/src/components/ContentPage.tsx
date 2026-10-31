import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso, heat } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Gabarit commun : l'affiche, puis les sections, chacune à sa température (En bref, questions, FAQ, adresse, voir aussi). */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 20e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  // Une température par section, de 16,0° (En bref) à 21,0° (le bandeau final, toujours à 21°).
  const n = page.sections.length + 5;
  const k = page.sections.length + 1;
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} t={heat(0, n)} />
      <DeepContent sections={page.sections} temp={(i) => heat(i + 1, n)} />
      <FaqList items={page.faq} title={page.faqTitle} t={heat(k, n)} />
      <LocalBlock contactType={page.contactType} zone={page.zone} intro={page.localIntro} t={heat(k + 1, n)} />
      <SeeAlso paths={page.related} current={path} t={heat(k + 2, n)} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
