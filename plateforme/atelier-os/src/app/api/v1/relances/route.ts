import { corps, repondre } from "@/lib/api";
import { readDb } from "@/lib/db";
import { creerRelance } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return repondre(async () => {
    const u = new URL(req.url);
    const statut = u.searchParams.get("statut");
    const prospect = u.searchParams.get("prospectId");
    let liste = (await readDb()).relances;
    if (statut) liste = liste.filter((r) => r.statut === statut);
    if (prospect) liste = liste.filter((r) => r.prospectId === prospect);
    return { relances: liste.sort((a, b) => a.echeance.localeCompare(b.echeance)) };
  });
}

export function POST(req: Request) {
  return repondre(async () => ({ relance: await creerRelance(await corps(req)) }), 201);
}
