import { ContentPage, metaFor } from "@/components/ContentPage";
import { PATHS } from "@/lib/site";

const path = PATHS.bathroom;
export const metadata = metaFor(path);

export default function Page() {
  return <ContentPage path={path} />;
}
