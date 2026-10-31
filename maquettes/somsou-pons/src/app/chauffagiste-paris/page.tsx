import { ContentPage, ZoneLinks, metaFor } from "@/components/ContentPage";
import { heating as c } from "@/lib/content";
import { PATHS, faqs } from "@/lib/site";

const path = PATHS.heating;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage
      c={c}
      path={path}
      crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos métiers", href: PATHS.trades }, { name: "Chauffagiste" }]}
      contactType="chauffage"
      photos={["radiateur-blanc", "chauffagiste", "chauffagiste", "immeuble"]}
      faq={faqs.heating}
      faqTitle="Vos questions de chauffage"
      service="Chauffage"
      after={<ZoneLinks trade="heating" title="Votre chauffagiste par arrondissement" />}
    />
  );
}
