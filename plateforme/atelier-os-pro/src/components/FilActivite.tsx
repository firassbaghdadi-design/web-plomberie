import Link from "next/link";
import type { Activite } from "@/lib/services/crm";
import { depuis } from "@/lib/format";
import { Avatar, Vide } from "./ui";

const lien = (a: Activite) =>
  a.action === "suppression" ? null : a.chantierId ? `/chantiers/${a.chantierId}` : a.clientId ? `/clients/${a.clientId}` : null;

export function FilActivite({ activites, noms, avecLiens = false }: { activites: Activite[]; noms: Record<string, string>; avecLiens?: boolean }) {
  if (activites.length === 0) return <Vide>Aucune activité pour l&apos;instant.</Vide>;
  return (
    <ol className="divide-y divide-trait/70">
      {activites.map((a) => {
        const qui = a.acteurId ? noms[a.acteurId] ?? "Ancien membre" : "Système";
        const href = avecLiens ? lien(a) : null;
        const contenu = (
          <>
            <Avatar nom={qui} taille={30} />
            <div className="min-w-0 flex-1">
              <p className="text-[14px] leading-snug">{a.resume}</p>
              <p className="mt-0.5 text-[12.5px] text-doux">
                {qui} · {depuis(a.creeLe)}
                {a.origine === "api" && <span className="pastille ml-2 !py-0 text-[11px]">API</span>}
              </p>
            </div>
          </>
        );
        return (
          <li key={a.id} className="contents">
            {href ? (
              <Link href={href} className="rang !items-start !py-3">
                {contenu}
              </Link>
            ) : (
              <div className="rang !items-start !py-3">{contenu}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
