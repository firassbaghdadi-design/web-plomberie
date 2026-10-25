import { corps, repondre } from "@/lib/api";
import { creerProspect, listerProspects } from "@/lib/service";
import { STATUTS } from "@/lib/types";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return repondre(async () => {
    const u = new URL(req.url);
    const q = (u.searchParams.get("q") ?? "").toLowerCase();
    const statut = u.searchParams.get("statut");
    const vague = u.searchParams.get("vague");
    let liste = await listerProspects();
    if (statut && (STATUTS as readonly string[]).includes(statut)) liste = liste.filter((p) => p.statut === statut);
    if (vague) liste = liste.filter((p) => String(p.vague) === vague);
    if (q) liste = liste.filter((p) => `${p.entreprise} ${p.dirigeant} ${p.ville} ${p.arrondissement} ${p.emails.join(" ")}`.toLowerCase().includes(q));
    return { total: liste.length, prospects: liste };
  });
}

export function POST(req: Request) {
  return repondre(async () => ({ prospect: await creerProspect(await corps(req)) }), 201);
}
