import { ContentPage, ZoneLinks, metaFor } from "@/components/ContentPage";
import { plumbing as c } from "@/lib/content";
import { PATHS, faqs } from "@/lib/site";

const path = PATHS.plumbing;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage
      c={c}
      path={path}
      crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos métiers", href: PATHS.trades }, { name: "Plombier" }]}
      contactType="plomberie"
      photos={["carreleur", "douche", "radiateur-blanc", "immeuble"]}
      faq={faqs.plumbing}
      faqTitle="Vos questions de plomberie"
      service="Plomberie"
      after={<ZoneLinks trade="plumbing" title="Votre plombier par arrondissement" />}
    />
  );
}
