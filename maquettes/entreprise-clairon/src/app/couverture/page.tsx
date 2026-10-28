import { ContentPage, metaFor } from "@/components/ContentPage";
import { PATHS } from "@/lib/site";

const path = PATHS.roofing;
export const metadata = metaFor(path);

export default function Page() {
  return <ContentPage path={path} />;
}
