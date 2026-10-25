import { ContentPage, metaFor } from "@/components/ContentPage";
import { Timeline } from "@/components/Sections";
import { presentation as c } from "@/lib/content";
import { PATHS } from "@/lib/site";

const path = PATHS.presentation;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage
      c={c}
      path={path}
      crumbs={[{ name: "Accueil", href: "/" }, { name: "Présentation" }]}
      photos={["enduit", "chantier-interieur", "plans", "peintres"]}
      after={<Timeline title="Les dates de la maison" text="Mosaïque, maçonnerie, plomberie, couverture, menuiserie : chaque date marque un métier ajouté ou une équipe reprise, d'après la page de présentation de l'entreprise." />}
    />
  );
}
