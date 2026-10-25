import { ContentPage, metaFor } from "@/components/ContentPage";
import { QualifOriginal } from "@/components/Original";
import { QualGrid } from "@/components/Sections";
import { qualifPage as c } from "@/lib/content";
import { PATHS } from "@/lib/site";

const path = PATHS.qualifications;
export const metadata = metaFor(c, path);

export default function Page() {
  return (
    <ContentPage c={c} path={path} crumbs={[{ name: "Accueil", href: "/" }, { name: "Nos qualifications" }]} photos={["peintres", "radiateur", "electricien", "radiateur-blanc"]}>
      <div className="h-16" />
      <QualifOriginal />
      <section aria-label="Les qualifications affichées" className="section pb-0 pt-0">
        <div className="container-x">
          <QualGrid />
          <p className="mt-6 text-sm">Qualifications reprises de la page « Nos qualifications » du site actuel : les attestations à jour sont à demander à l'entreprise.</p>
        </div>
      </section>
    </ContentPage>
  );
}
