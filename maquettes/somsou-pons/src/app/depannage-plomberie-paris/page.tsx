import { ContentPage, ZoneLinks, metaFor } from "@/components/ContentPage";
import { emergency as c } from "@/lib/content";
import { PATHS, faqs } from "@/lib/site";

const path = PATHS.emergency;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage
      c={c}
      path={path}
      crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos métiers", href: PATHS.trades }, { name: "Dépannage" }]}
      contactType="urgence"
      photos={["cle-evier", "plan-projet", "immeuble", "radiateur"]}
      faq={faqs.emergency}
      faqTitle="Vos questions de dépannage"
      service="Dépannage plomberie"
      after={<ZoneLinks trade="emergency" title="Le dépannage par arrondissement" />}
    />
  );
}
