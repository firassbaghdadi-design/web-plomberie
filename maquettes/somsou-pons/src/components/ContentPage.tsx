import Link from "next/link";
import type { PageContent } from "@/lib/content";
import type { PhotoId } from "@/lib/photos";
import type { Faq } from "@/lib/site";
import { localPages } from "@/lib/local";
import { breadcrumbNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { JsonLd } from "./JsonLd";
import { Photo } from "./Photo";
import { Brief, CtaBand, DeepContent, FaqList, LocalBlock, PageHero, SeeAlso } from "./Sections";

type Props = {
  c: PageContent;
  path: string;
  crumbs: { name: string; href?: string }[];
  contactType?: string;
  photos?: PhotoId[];
  faq?: Faq[];
  faqTitle?: string;
  service?: string;
  children?: React.ReactNode;
  after?: React.ReactNode;
};

export const metaFor = (c: PageContent, path: string) => pageMeta({ title: c.title, description: c.description, path });

/** Gabarit commun des pages de contenu : héros, « En bref », sections question-réponse, bloc local, FAQ, maillage. */
export function ContentPage({ c, path, crumbs, contactType, photos, faq, faqTitle, service, children, after }: Props) {
  const { title, description } = c;
  const nodes: object[] = [
    webPageNode({ title, description, path }),
    breadcrumbNode(crumbs.map((cr) => ({ name: cr.name, path: cr.href ?? path }))),
  ];
  if (service) nodes.push(serviceNode(service, path, c.brief));
  if (faq?.length) {
    nodes.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    });
  }
  return (
    <>
      <PageHero c={c} crumbs={crumbs} contactType={contactType} />
      <Brief text={c.brief} />
      {children}
      <DeepContent sections={c.sections} photos={photos} />
      {after}
      <LocalBlock c={c} contactType={contactType} />
      {faq?.length ? <FaqList items={faq} title={faqTitle} /> : null}
      <SeeAlso current={path} />
      <CtaBand title={c.ctaTitle} text={c.ctaText} />
      <JsonLd nodes={nodes} />
    </>
  );
}

/** Sur une page métier : les pages de ce métier par arrondissement. */
export function ZoneLinks({ trade, title }: { trade: string; title: string }) {
  const pages = localPages.filter((p) => p.trade === trade);
  return (
    <section aria-labelledby="titre-zones" className="section pb-0">
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          Près de chez vous
        </p>
        <h2 id="titre-zones" data-reveal className="mt-4 text-3xl sm:text-5xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {pages.map((p, i) => (
            <li key={p.slug} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
              <Link href={`/${p.slug}`} className="group relative block overflow-hidden rounded-[1.6rem] text-white" aria-label={p.h1}>
                <div className="relative aspect-[16/10]">
                  <Photo id={p.heroPhoto} alt="" sizes="(min-width:768px) 45vw, 92vw" className="transition duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063d1b]/90 via-[#063d1b]/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">{p.zone}</p>
                    <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                      {p.tradeLabel} · {p.zone}
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber transition group-hover:rotate-[-45deg]">
                    <ArrowIcon className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const canonical = (path: string) => `${SITE_URL}${path}`;
