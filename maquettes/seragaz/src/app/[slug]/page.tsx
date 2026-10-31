import { notFound } from "next/navigation";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { localPages } from "@/lib/local";

export const dynamicParams = false;
export const generateStaticParams = () => localPages.map((p) => ({ slug: p.slug }));
export const generateMetadata = ({ params }: { params: { slug: string } }) => metaFor(`/${params.slug}`);

export default function LocalPage({ params }: { params: { slug: string } }) {
  const page = localPages.find((p) => p.slug === params.slug);
  if (!page) notFound();
  return <ContentPage path={page.path} zone={page.zone} />;
}
