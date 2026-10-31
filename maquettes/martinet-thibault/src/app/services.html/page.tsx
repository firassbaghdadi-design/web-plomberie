import { Bief } from "@/components/Bief";
import Link from "next/link";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { Ecluse } from "@/components/Lock";
import { servicesOriginal } from "@/lib/content";
import { photoAlt } from "@/lib/photos";
import { PATHS } from "@/lib/site";

export const metadata = metaFor(PATHS.services);

/** Texte d'origine de la page Services : un métier par ligne, comme un registre. */
function Trades() {
  return (
    <section aria-labelledby="titre-competences" className="py-20 sm:py-28">
      <Bief />
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Ecluse n="Texte d'origine">Nos compétences</Ecluse>
          <h2 id="titre-competences" className="h2 mt-5" data-reveal>Nous vous proposons nos compétences en matière de&nbsp;:</h2>
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {servicesOriginal.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <Link href={s.href} className="row-link grid gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                <span className="num text-sm text-ink-faint sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="row-title text-[1.5rem] font-light leading-tight text-ink sm:col-span-4">{s.title}</span>
                <span className="flex items-start justify-between gap-6 sm:col-span-7"><span>{s.text}</span><ArrowIcon className="row-arrow mt-1 h-5 w-5 shrink-0 text-ink-faint" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap mt-20 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-12">
        <p className="label lg:col-span-4">Qualité et certification</p>
        <ul className="flex flex-wrap items-center gap-6 sm:gap-10 lg:col-span-8">
          {["logo-qualibat-rge", "logo-qualigaz", "logo-ffb"].map((k) => (
            <li key={k}><Img id={k} alt={photoAlt(k)} className="h-16 w-28 !bg-white sm:h-20 sm:w-36 [&_img]:!object-contain" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <ContentPage path={PATHS.services}>
      <Trades />
    </ContentPage>
  );
}
