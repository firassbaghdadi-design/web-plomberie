import { Bief } from "@/components/Bief";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { Img } from "@/components/Img";
import { Ecluse } from "@/components/Lock";
import { partners } from "@/lib/content";
import { photoAlt } from "@/lib/photos";
import { PATHS } from "@/lib/site";

export const metadata = metaFor(PATHS.partners);

function Partners() {
  return (
    <section aria-labelledby="titre-partenaires" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap">
        <Ecluse n="04">Texte d'origine</Ecluse>
        <h2 id="titre-partenaires" className="h2 mt-5" data-reveal>Nos partenaires</h2>
        <ul className="mt-14 grid border-t border-line sm:grid-cols-2">
          {partners.map((p) => (
            <li key={p.name} className="flex flex-col items-start gap-5 border-b border-line py-8 sm:flex-row sm:items-center sm:gap-6 sm:pr-10 sm:odd:border-r sm:even:pl-10">
              <Img id={p.key} alt={photoAlt(p.key)} className="h-[86px] w-[140px] shrink-0 !bg-white [&_img]:!object-contain" />
              <span>
                <span className="block text-[1.3rem] font-light text-ink">{p.name}</span>
                <span className="mt-1 block">{p.text}</span>
                <a href={p.url} target="_blank" rel="noopener" className="link-line mt-3 text-sm">{p.url.replace("https://", "")}</a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PartnersPage() {
  return (
    <ContentPage path={PATHS.partners}>
      <Partners />
    </ContentPage>
  );
}
