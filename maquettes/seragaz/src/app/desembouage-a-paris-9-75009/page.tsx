import { ContentPage, metaFor } from "@/components/ContentPage";

const path = "/desembouage-a-paris-9-75009";
export const metadata = metaFor(path);

export default function Page() {
  return <ContentPage path={path} />;
}
