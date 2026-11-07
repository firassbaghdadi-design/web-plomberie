import { notFound } from "next/navigation";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { allPages } from "@/lib/pages";

export const dynamicParams = false;
export const generateStaticParams = () => allPages.map((p) => ({ slug: p.path.slice(1) }));
export const generateMetadata = ({ params }: { params: { slug: string } }) => metaFor(`/${params.slug}`);

export default function Page({ params }: { params: { slug: string } }) {
  const page = allPages.find((p) => p.path === `/${params.slug}`);
  if (!page) notFound();
  return <ContentPage path={page.path} />;
}
