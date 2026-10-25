import { ContentPage, metaFor } from "@/components/ContentPage";
import { Historique, Organigramme } from "@/components/Original";
import { presentation as c } from "@/lib/content";
import { PATHS } from "@/lib/site";

const path = PATHS.presentation;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage c={c} path={path} crumbs={[{ name: "Accueil", href: "/" }, { name: "Présentation" }]} photos={["enduit", "chantier-interieur", "plans", "peintres"]} after={<Organigramme />}>
      <div className="h-16" />
      <Historique />
    </ContentPage>
  );
}
