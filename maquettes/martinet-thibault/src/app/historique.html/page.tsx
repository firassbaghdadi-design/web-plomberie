import { Bief } from "@/components/Bief";
import { ContentPage, metaFor } from "@/components/ContentPage";
import { Ecluse } from "@/components/Lock";
import { PATHS, generations } from "@/lib/site";

export const metadata = metaFor(PATHS.history);

/** La frise des cinq générations, chaque dirigeant dans son sas d'écluse. */
function Timeline() {
  return (
    <section aria-labelledby="titre-frise" className="bg-stone py-20 sm:py-28">
      <Bief />
      <div className="wrap">
        <Ecluse n="1880–2010">Cinq générations</Ecluse>
        <h2 id="titre-frise" className="h2 mt-5 max-w-3xl" data-reveal>De Lucien Tournaire à Mathieu Thibault</h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-ink/10 bg-ink/10 sm:grid-cols-5">
          {generations.map((g, i) => (
            <li key={g.year} className="relative bg-cream-2 p-6 pt-8" data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-[rgba(0,113,229,.05)]" style={{ height: `${18 + i * 9}%` }} />
              <span aria-hidden="true" className="absolute inset-x-0 border-t border-[rgba(0,113,229,.45)]" style={{ bottom: `${18 + i * 9}%` }} />
              <p className="serif num relative text-[2.8rem] font-light leading-none tracking-[-0.03em] text-brass">{g.year}</p>
              <p className="serif relative mt-5 text-[1.25rem] text-ink">{g.who}</p>
              <p className="relative mt-2 text-[0.95rem]">{g.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function HistoryPage() {
  return (
    <ContentPage path={PATHS.history}>
      <Timeline />
    </ContentPage>
  );
}
