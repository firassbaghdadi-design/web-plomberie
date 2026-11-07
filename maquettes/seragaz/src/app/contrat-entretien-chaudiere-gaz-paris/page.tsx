import { ContentPage, metaFor } from "@/components/ContentPage";

const path = "/contrat-entretien-chaudiere-gaz-paris";
export const metadata = metaFor(path);

export default function Page() {
  return <ContentPage path={path} />;
}
