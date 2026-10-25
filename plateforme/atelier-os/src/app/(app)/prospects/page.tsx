import Link from "next/link";
import { listerProspects } from "@/lib/service";
import { STATUTS, STATUT_LABEL, type Statut } from "@/lib/types";
import { PastilleStatut, Vide } from "@/components/ui";
import { Icone } from "@/components/Icone";

export const dynamic = "force-dynamic";
export const metadata = { title: "Prospects" };

export default async function Prospects({ searchParams }: { searchParams: { q?: string; statut?: string; vague?: string } }) {
  const tous = await listerProspects();
  const q = (searchParams.q ?? "").trim().toLowerCase();
  const statut = (STATUTS as readonly string[]).includes(searchParams.statut ?? "") ? (searchParams.statut as Statut) : null;
  const vague = searchParams.vague ?? "";

  const compte = (s: Statut) => tous.filter((p) => p.statut === s).length;
  const liste = tous
    .filter((p) => (!statut || p.statut === statut) && (!vague || String(p.vague) === vague))
    .filter((p) => !q || `${p.entreprise} ${p.dirigeant} ${p.ville} ${p.arrondissement} ${p.emails.join(" ")}`.toLowerCase().includes(q))
    .sort((a, b) => (b.score ?? -1) - (a.score ?? -1) || a.entreprise.localeCompare(b.entreprise));

  const lien = (s: string | null, v = vague) => {
    const u = new URLSearchParams();
    if (s) u.set("statut", s);
    if (v) u.set("vague", v);
    if (q) u.set("q", q);
    const t = u.toString();
    return `/prospects${t ? `?${t}` : ""}`;
  };
  const puce = (actif: boolean) =>
    `shrink-0 rounded-full px-4 py-[7px] text-[14px] font-medium transition-colors duration-200 ${actif ? "bg-encre text-carte" : "bg-carte text-doux shadow-doux hover:text-encre"}`;

  return (
    <div className="fondu">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="sur-titre mb-1.5">{tous.length} entreprises</p>
          <h1 className="titre-page">Prospects</h1>
        </div>
        <Link href="/prospects/nouveau" className="btn btn-primaire btn-petit shrink-0">
          <Icone nom="plus" className="h-4 w-4" />
          Ajouter
        </Link>
      </div>

      <form className="relative mb-4" action="/prospects">
        {statut && <input type="hidden" name="statut" value={statut} />}
        {vague && <input type="hidden" name="vague" value={vague} />}
        <Icone nom="chercher" className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-pale" />
        <input name="q" defaultValue={searchParams.q ?? ""} placeholder="Rechercher une entreprise, un dirigeant, une ville" className="champ !bg-carte pl-11 shadow-doux" type="search" />
      </form>

      <div className="defile-x -mx-4 mb-2 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <Link href={lien(null)} className={puce(!statut)}>
          Tous
        </Link>
        {STATUTS.map((s) => (
          <Link key={s} href={lien(s)} className={puce(statut === s)}>
            {STATUT_LABEL[s]} <span className="opacity-60">{compte(s)}</span>
          </Link>
        ))}
      </div>
      <div className="defile-x -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        {["", "1", "2", "3"].map((v) => (
          <Link key={v} href={lien(statut, v)} className={puce(vague === v)}>
            {v ? `Vague ${v}` : "Toutes les vagues"}
          </Link>
        ))}
      </div>

      <div className="carte overflow-hidden">
        {liste.length === 0 ? (
          <Vide>Aucun prospect ne correspond.</Vide>
        ) : (
          liste.map((p) => (
            <Link key={p.id} href={`/prospects/${p.id}`} className="rang">
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{p.entreprise}</span>
                <span className="block truncate text-[13.5px] text-doux">
                  {[p.dirigeant, p.arrondissement ? `${p.ville} ${p.arrondissement}` : p.ville].filter(Boolean).join(" · ")}
                </span>
              </span>
              <span className="hidden shrink-0 text-[12.5px] text-pale sm:block">{p.maquetteUrl ? "Maquette prête" : ""}</span>
              <PastilleStatut statut={p.statut} />
              <span className="w-7 shrink-0 text-right text-[14px] tabular-nums text-doux">{p.score ?? ""}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
