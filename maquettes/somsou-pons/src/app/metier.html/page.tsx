import { ContentPage, metaFor } from "@/components/ContentPage";
import { MetiersOriginal, Realisations } from "@/components/Original";
import { TradesShowcase } from "@/components/TradesShowcase";
import { tradesPage as c } from "@/lib/content";
import { PATHS } from "@/lib/site";

const path = PATHS.trades;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage c={c} path={path} crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos métiers" }]} photos={["chauffagiste", "salle-de-bains", "menuisier", "cle-evier"]} after={<Realisations />}>
      <div className="h-16" />
      <MetiersOriginal />
      <section aria-label="Les métiers en détail" className="section pb-0">
        <div className="container-x">
          <TradesShowcase />
        </div>
      </section>
    </ContentPage>
  );
}
