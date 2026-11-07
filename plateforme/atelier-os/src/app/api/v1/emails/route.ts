import { corps, origine, repondre } from "@/lib/api";
import { readDb } from "@/lib/db";
import { creerEmail } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return repondre(async () => {
    const u = new URL(req.url);
    const prospect = u.searchParams.get("prospectId");
    const statut = u.searchParams.get("statut");
    let liste = (await readDb()).emails;
    if (prospect) liste = liste.filter((m) => m.prospectId === prospect);
    if (statut) liste = liste.filter((m) => m.statut === statut);
    return { emails: liste.sort((a, b) => b.creeLe.localeCompare(a.creeLe)) };
  });
}

export function POST(req: Request) {
  return repondre(async () => ({ email: await creerEmail(await corps(req), origine(req)) }), 201);
}
