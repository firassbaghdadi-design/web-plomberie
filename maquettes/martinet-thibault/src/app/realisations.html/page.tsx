import { Bief } from "@/components/Bief";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { Ecluse } from "@/components/Lock";
import { Realisation } from "@/components/Realisation";
import { realisations } from "@/lib/photos";
import { PATHS } from "@/lib/site";

export const metadata = metaFor(PATHS.works);

/** Les neuf montages avant / après publiés par l'entreprise, en comparateurs (jamais plus de deux fois leur taille). */
function Wall() {
  return (
    <section aria-labelledby="titre-galerie" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap">
        <Ecluse n="09">Photos de l'entreprise</Ecluse>
        <h2 id="titre-galerie" className="h2 mt-5" data-reveal>Neuf chantiers, tels que l'entreprise les a photographiés</h2>
        <p className="mt-6 max-w-xl">Chaque photo montre le chantier avant et après travaux : faites glisser l'écluse pour passer de l'un à l'autre.</p>
        <ul className="archive ba-grid ba-3 mt-14 lg:max-w-[60rem]">
          {realisations.map((k, i) => (
            <li key={k} data-mask>
              <Realisation id={k} />
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
