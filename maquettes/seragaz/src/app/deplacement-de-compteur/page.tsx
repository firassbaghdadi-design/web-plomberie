import { ContentPage, metaFor } from "@/components/ContentPage";

const path = "/deplacement-de-compteur";
export const metadata = metaFor(path);

export default function Page() {
  return <ContentPage path={path} />;
}
