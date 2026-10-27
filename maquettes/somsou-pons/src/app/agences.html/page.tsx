import { ContentPage, metaFor } from "@/components/ContentPage";
import { AgencyPanels } from "@/components/Sections";
import { agenciesPage as c } from "@/lib/content";
import { PATHS } from "@/lib/site";

const path = PATHS.agencies;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage c={c} path={path} crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos agences" }]} photos={["facade", "rue", "menuisier", "cle-evier"]}>
      <section aria-label="Les trois agences" className="section pb-0">
        <div className="container-x">
          <AgencyPanels />
        </div>
      </section>
    </ContentPage>
  );
}
