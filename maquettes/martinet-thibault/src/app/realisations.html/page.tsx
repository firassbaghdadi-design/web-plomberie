import { Bief } from "@/components/Bief";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { Img } from "@/components/Img";
import { Ecluse } from "@/components/Lock";
import { photoAlt, realisations } from "@/lib/photos";
import { PATHS } from "@/lib/site";

export const metadata = metaFor(PATHS.works);

/** Les neuf photos de chantiers publiées par l'entreprise, à leur taille d'origine (300 px). */
function Wall() {
  return (
    <section aria-labelledby="titre-galerie" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap">
        <Ecluse n="09">Photos de l'entreprise</Ecluse>
        <h2 id="titre-galerie" className="h2 mt-5" data-reveal>Neuf chantiers, tels que l'entreprise les a photographiés</h2>
        <ul className="archive mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:max-w-[60rem]">
          {realisations.map((k, i) => (
            <li key={k} data-mask className="max-w-[300px]">
              <div className="overflow-hidden rounded-[3px]"><Img id={k} alt={photoAlt(k)} className="aspect-square" /></div>
              <p className="label mt-3 !tracking-[0.18em]">Réalisation {String(i + 1).padStart(2, "0")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function WorksPage() {
  return (
    <ContentPage path={PATHS.works}>
      <Wall />
    </ContentPage>
  );
}
