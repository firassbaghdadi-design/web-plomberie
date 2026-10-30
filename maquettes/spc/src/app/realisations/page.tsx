import { BeforeAfter } from "@/components/BeforeAfter";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Niveau } from "@/components/Niveau";
import { Breadcrumbs, CtaBand, CtaButtons } from "@/components/Sections";
import { beforeAfter, companyPhotos, galleryPhotos } from "@/lib/photos";
import { PATHS } from "@/lib/site";
import { breadcrumbNode, pageMeta, webPageNode } from "@/lib/seo";

const path = PATHS.gallery;
const title = "Réalisations : plomberie et couverture à Paris 12e | SPC";
const description =
  "Les chantiers de SPC à Paris 12e et alentour : plomberie d'immeuble, couverture, travaux sur corde, salles de bains. Photos reprises du site de l'entreprise.";
export const metadata = pageMeta({ title, description, path });

const brief =
  "Les réalisations de SPC, plombier couvreur à Paris 12e : des chantiers de plomberie, de couverture et de travaux sur corde menés par les équipes de l'entreprise. Plombiers, couvreurs et cordistes, régulièrement formés, réalisent des travaux dans les règles de l'art, pour les copropriétés comme pour les particuliers.";

export default function GalleryPage() {
  const photos = galleryPhotos(12);
  return (
    <>
      <section>
        <div className="wrap grid gap-x-16 pb-10 pt-6 sm:pt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Réalisations" }]} />
            <p className="fade-in mt-10 text-[0.82rem] text-accent sm:mt-14">Galerie photo</p>
            <h1 className="mt-6 text-[2.5rem] sm:text-[3.6rem] xl:text-[4.2rem]"><span className="line-up"><span>Réalisations à Paris 12e et alentour</span></span></h1>
            <p className="reponse-bref fade-in mt-8" style={{ ["--d" as string]: "250ms" }}>{brief}</p>
            <div className="fade-in mt-10" style={{ ["--d" as string]: "400ms" }}><CtaButtons /></div>
          </div>
        </div>
      </section>
      {beforeAfter.length ? (
        <Niveau n="06" level="Avant, après" ariaLabel="Avant et après">
          <h2 className="h2 max-w-3xl">Avant, après&nbsp;: faites glisser la poignée.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {beforeAfter.slice(0, 4).map((p) => (
              <BeforeAfter key={p.before.key} before={{ src: p.before.src, alt: p.before.alt || "chantier SPC", credit: "spc" }} after={{ src: p.after.src, alt: p.after.alt || "chantier SPC", credit: "spc" }} caption="Photos de l'entreprise SPC" />
            ))}
          </div>
        </Niveau>
      ) : null}
      <Niveau n="05" level="Chantiers" ariaLabel="Photos de chantiers" tone="zinc">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <li key={`${p.src}-${i}`} data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
              <Img photo={p} className={`rounded-[3px] ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`} />
              <p className="mt-2 text-[0.78rem] text-ink-faint">{p.credit === "spc" ? "Photo de l'entreprise SPC" : `${p.alt} (photo d'illustration)`}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.85rem] text-ink-faint">{companyPhotos.length ? "Photos reprises du site spc-services.fr." : "Les photos de chantiers de l'entreprise seront reprises de son site."}</p>
      </Niveau>
      <CtaBand title="Un chantier comme ceux-là ?" text="Plomberie, toiture, travaux sur corde : décrivez-nous votre projet." />
      <JsonLd nodes={[webPageNode({ title, description, path }), breadcrumbNode([{ name: "Accueil", path: "/" }, { name: "Réalisations", path }])]} />
    </>
  );
}
