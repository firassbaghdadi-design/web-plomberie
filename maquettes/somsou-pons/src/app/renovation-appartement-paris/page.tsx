import { ContentPage, ZoneLinks, metaFor } from "@/components/ContentPage";
import { renovation as c } from "@/lib/content";
import { PATHS, faqs } from "@/lib/site";

const path = PATHS.renovation;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage
      c={c}
      path={path}
      crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos métiers", href: PATHS.trades }, { name: "Rénovation" }]}
      contactType="renovation"
      photos={["plans", "peintre", "carrelage", "bois"]}
      faq={faqs.renovation}
      faqTitle="Vos questions de rénovation"
      service="Rénovation d'appartement"
      after={<ZoneLinks trade="renovation" title="La rénovation par arrondissement" />}
    />
  );
}
