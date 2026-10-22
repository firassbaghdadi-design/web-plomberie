import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList, PageHeader } from "@/components/Sections";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, services } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((item) => item.slug === params.slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `${PATHS.services}/${s.slug}` });
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = services.find((item) => item.slug === params.slug);
  if (!s) notFound();
  const path = `${PATHS.services}/${s.slug}`;
  const others = services.filter((item) => item.slug !== s.slug).slice(0, 3);
  return (
    <>
      <PageHeader eyebrow="Service" title={s.h1} lead={s.short} crumbs={[{ name: "Accueil", href: "/" }, { name: "Services", href: PATHS.services }, { name: s.name }]} />
      <section aria-labelledby="titre-intro" className="section pb-0">
        <div className="container-x max-w-4xl">
          <h2 id="titre-intro" data-reveal className="text-3xl sm:text-4xl">
            En quoi consiste ce service ?
          </h2>
          <p data-reveal className="reponse-bref mt-6 text-lg">
            {s.brief}
          </p>
        </div>
      </section>
      <section aria-label="Contenu du service" className="section">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card" data-reveal>
            <h2 className="text-3xl">Ce que nous faisons</h2>
            <ul className="mt-6 space-y-3">
              {s.does.map((d) => (
                <li key={d} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-terre-action" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="card bg-ardoise text-platre/85" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2 className="text-3xl !text-platre">Ce que vous obtenez</h2>
            <ul className="mt-6 space-y-3">
              {s.gets.map((g) => (
                <li key={g} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#F0A28E]" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FaqList items={s.faq} title="Vos questions sur ce service" />
      <section aria-labelledby="titre-autres" className="bg-platre-deep section">
        <div className="container-x">
          <h2 id="titre-autres" className="text-3xl sm:text-4xl" data-reveal>
            Les autres services
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`${PATHS.services}/${o.slug}`} className="service-card card block !p-7" data-reveal>
                <h3 className="text-xl">{o.name}</h3>
                <span className="mt-4 inline-flex items-center gap-2 font-display font-bold text-terre-dark">
                  Voir
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Parlons de votre projet : ${s.name.toLowerCase()}.`} text="Dites-nous qui vous êtes : nous revenons vers vous avec une première analyse gratuite et sans engagement." />
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Services", path: PATHS.services }, { name: s.name, path }]), serviceNode(s.name, path, s.brief), faqNode(s.faq)]} />
    </>
  );
}
