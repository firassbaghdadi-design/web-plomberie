import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList, PageHeader } from "@/components/Sections";
import { breadcrumbNode, faqNode, pageMeta, serviceNode, webPageNode } from "@/lib/seo";
import { PATHS, services } from "@/lib/site";
import type { PhotoId } from "@/lib/photos";

const photoFor: Record<string, PhotoId> = {
  "creation-de-site-web": "tablette",
  "referencement-local": "telephone",
  "fiche-google-et-avis": "plombier",
  "publicite-en-ligne": "electricien",
  "reseaux-sociaux-et-contenu": "couvreur",
  "suivi-des-demandes": "chantier",
};

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
      <PageHeader eyebrow="Ce que nous faisons" title={s.h1} lead={s.short} photo={photoFor[s.slug]} crumbs={[{ name: "Accueil", href: "/" }, { name: "Services", href: PATHS.services }, { name: s.name }]} />
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
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <h2 className="text-3xl sm:text-4xl">Ce que nous faisons</h2>
            <ul className="rule-list mt-6">
              {s.does.map((d) => (
                <li key={d} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-terre-action" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2 className="text-3xl sm:text-4xl">Ce que vous obtenez</h2>
            <ul className="rule-list mt-6">
              {s.gets.map((g) => (
                <li key={g} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-ardoise" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FaqList items={s.faq} title="Vos questions sur ce service" />
      <section aria-labelledby="titre-autres" className="border-y border-line bg-platre-deep section">
        <div className="container-x">
          <h2 id="titre-autres" className="text-3xl sm:text-4xl" data-reveal>
            Les autres services
          </h2>
          <ul className="rule-list mt-8">
            {others.map((o) => (
              <li key={o.slug} data-reveal>
                <Link href={`${PATHS.services}/${o.slug}`} className="group flex items-center justify-between gap-6 font-display text-2xl font-semibold text-ardoise hover:text-terre-dark">
                  {o.name}
                  <ArrowIcon className="h-5 w-5 shrink-0 transition group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title={`Parlons de votre projet : ${s.name.toLowerCase()}.`} text="Dites-nous qui vous êtes. Nous revenons vers vous par e-mail, sans engagement." />
      <JsonLd nodes={[webPageNode({ title: s.metaTitle, description: s.metaDescription, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Services", path: PATHS.services }, { name: s.name, path }]), serviceNode(s.name, path, s.brief), faqNode(s.faq)]} />
    </>
  );
}
