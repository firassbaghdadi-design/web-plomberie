import type { Metadata } from "next";
import { PATHS } from "@/lib/site";
import { pageByPath } from "@/lib/pages";
import { photoAlt } from "@/lib/photos";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { BeforeAfter } from "./BeforeAfter";
import { Img } from "./Img";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SectionHead, SeeAlso, TradesList, ZonesList } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

const WORKS = [
  { id: "real-1", title: "Peinture sur toit avec traitement d'étanchéité" },
  { id: "real-2", title: "Rénovation complète d'une toiture" },
  { id: "real-3", title: "Rénovation des parties en zinc d'une toiture" },
];

export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "La Garenne-Colombes"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const isWorks = path === PATHS.works;
  let n = page.sections.length + (isWorks ? 3 : 2);
  return (
    <>
      <PageHero page={page} />
      <Brief text={page.brief} />
      {isWorks ? (
        <section className="pb-10">
          <div className="wrap">
            <SectionHead n={2} label="Le carnet de chantier" />
            <div className="mt-12" />
            <BeforeAfter caption="Travaux sur toiture et cheminée, avant et après (photos de l'entreprise)" />
            <ul className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {WORKS.map((w, i) => (
                <li key={w.id} className={i === 1 ? "md:mt-24" : ""} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
                  <Img id={w.id} alt={photoAlt(w.id)} className="aspect-[4/5] w-full shadow-photo" />
                  <div className="mt-5 flex items-baseline gap-4 border-t border-creme/15 pt-4"><span className="num text-[1.4rem]">{["I", "II", "III"][i]}</span><span className="font-serif text-[1.45rem] leading-[1.15] text-creme">{w.title}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <DeepContent sections={page.sections} start={isWorks ? 3 : 2} />
      {page.kind === "zone" ? (
        <section className="bg-nuit-2/60 py-20 sm:py-32">
          <div className="wrap">
            <SectionHead n={n++} label="Les métiers" />
            <h2 className="h2 mt-14 max-w-[16ch]">Nos six métiers <span className="disp-i">à {page.zone}</span></h2>
            <div className="mt-16"><TradesList zone={page.zone} /></div>
            <div className="mt-12"><span className="cap">Autres communes desservies</span><div className="mt-4"><ZonesList current={path} /></div></div>
          </div>
        </section>
      ) : null}
      <FaqList items={page.faq} n={n++} />
      <LocalBlock n={n++} zone={page.zone} landmark={page.landmark} contactType={page.contactType} />
      <SeeAlso paths={page.related} n={n++} />
      <CtaBand title={page.ctaTitle} contactType={page.contactType} />
      <JsonLd nodes={nodes} />
    </>
  );
}
