import Link from "next/link";
import { PATHS, generations } from "@/lib/site";
import { ArrowIcon } from "./Icons";

/**
 * Les cinq générations de la maison, de 1880 à 2010, dessinées comme une volée d'écluses :
 * l'eau remplit chaque sas l'un après l'autre, les portes s'ouvrent, le métier passe de main en main.
 */
export function Generations({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-6">
        <p className="label">Cinq générations, d'écluse en écluse</p>
        <Link href={PATHS.history} className="link-line hidden text-[0.85rem] sm:inline-flex">
          L'historique <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
      <ol className="gen mt-7" aria-label="Les dirigeants successifs de l'entreprise depuis 1880">
        {generations.map((g, i) => (
          <li key={g.year} className="flex flex-col" style={{ ["--i" as string]: i }}>
            <div className="gen-sas" aria-hidden="true">
              <span className="gen-water" />
              <span className="gen-gate" />
            </div>
            <div className="gen-year pr-2 pt-4">
              <p className="num text-[1.25rem] font-light leading-none tracking-[-0.02em] text-ink sm:text-[1.9rem]">{g.year}</p>
              <p className="mt-2 text-[0.7rem] leading-snug text-ink-faint sm:text-[0.82rem]">
                <span className="sm:hidden">{g.short}</span>
                <span className="hidden sm:inline">{g.who}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
