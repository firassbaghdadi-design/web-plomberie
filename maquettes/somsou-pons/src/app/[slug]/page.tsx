import { notFound } from "next/navigation";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { localPages } from "@/lib/local";
import { PATHS } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => localPages.map((p) => ({ slug: p.slug }));

const hub: Record<string, { name: string; href: string }> = {
  plumbing: { name: "Plombier", href: PATHS.plumbing },
  heating: { name: "Chauffagiste", href: PATHS.heating },
  emergency: { name: "Dépannage", href: PATHS.emergency },
  renovation: { name: "Rénovation", href: PATHS.renovation },
  joinery: { name: "Nos métiers", href: PATHS.trades },
};

const find = (slug: string) => localPages.find((p) => p.slug === slug);

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = find(params.slug);
  return p ? metaFor(p, `/${p.slug}`) : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = find(params.slug);
  if (!p) notFound();
  const parent = hub[p.trade];
  const crumbs = p.trade === "joinery" ? [{ name: "Accueil", href: "/" }, parent, { name: "Menuiserie" }] : [{ name: "Accueil", href: "/" }, parent, { name: p.zone }];
  return <ContentPage c={p} path={`/${p.slug}`} crumbs={crumbs} contactType={p.contactType} photos={p.photos} faq={p.faq} faqTitle={`Vos questions · ${p.tradeLabel}, ${p.zone}`} service={`${p.tradeLabel} à ${p.zone}`} />;
}
