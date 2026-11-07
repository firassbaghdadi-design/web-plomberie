import type { Metadata } from "next";
import { pageByPath } from "@/lib/pages";
import { pairs } from "@/lib/photos";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { BeforeAfter } from "./BeforeAfter";
import { JsonLd } from "./JsonLd";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PHOTO_KEYS, PageHero, SeeAlso, pad } from "./Sections";

export const metaFor = (path: string): Metadata => {
  const p = pageByPath(path);
  return pageMeta({ title: p.title, description: p.description, path });
};

/** Une autre photo que celle du héros, choisie de façon stable d'après l'adresse de la page. */
const otherPhoto = (path: string, not: string[]) => {
  const pool = PHOTO_KEYS.filter((k) => !not.includes(k));
  const h = [...path].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  return pool[h % pool.length];
};

/** Gabarit commun : plan d'ouverture, En bref, sections numérotées avec un intermède photo, FAQ, adresse, voir aussi, dernier plan. */
export function ContentPage({ path }: { path: string }) {
  const page = pageByPath(path);
  const crumbs = [{ name: "Accueil", href: "/" }, { name: page.crumb }];
  const nodes: object[] = [webPageNode({ title: page.title, description: page.description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: page.crumb, path }])];
  if (page.service) nodes.push(serviceNode(page.service, path, page.brief, page.zone ?? "Paris 11e"));
  if (page.faq.length) nodes.push(faqNode(page.faq));
  const showcase = page.showcase && pairs.length > 0;
  const k = page.sections.length + 2 + (showcase ? 1 : 0);
  const interlude = otherPhoto(path, [page.photo]);
  const closing = otherPhoto(path + "/fin", [page.photo, interlude]);
  return (
    <>
      <PageHero page={page} crumbs={crumbs} />
      <Brief text={page.brief} />
      <DeepContent sections={page.sections} interlude={interlude} />
      {showcase ? (
        <section aria-labelledby="titre-avant-apres">
          <div className="wrap grid gap-x-12 pb-14 pt-24 sm:pt-32 lg:grid-cols-12">
            <p className="slate mb-8 lg:col-span-2 lg:mb-0 lg:pt-4" data-n={pad(page.sections.length + 2)}><span aria-hidden="true" />Avant, après</p>
            <div className="lg:col-span-10">
              <h2 id="titre-avant-apres" className="h2 hp">Les chantiers, <span className="ital">avant et après</span></h2>
              <p className="mt-6 max-w-xl">Glissez le curseur sur chaque photo pour passer de l&apos;état d&apos;origine au travail livré.</p>
            </div>
          </div>
          <div className="space-y-2">
            {pairs.map((p, i) => <BeforeAfter key={p.key} pair={p} stage index={i + 1} total={pairs.length} />)}
          </div>
        </section>
      ) : null}
      <FaqList items={page.faq} title={page.faqTitle} n={pad(k)} />
      <LocalBlock contactType={page.contactType} zone={page.zone} n={pad(k + 1)} />
      <SeeAlso paths={page.related} current={path} n={pad(k + 2)} />
      <CtaBand title={page.ctaTitle} text={page.ctaText} contactType={page.contactType} photo={closing} />
      <JsonLd nodes={nodes} />
    </>
  );
}
