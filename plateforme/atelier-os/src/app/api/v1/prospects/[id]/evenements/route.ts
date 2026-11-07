import { corps, repondre } from "@/lib/api";
import { readDb } from "@/lib/db";
import { ajouterEvenement } from "@/lib/service";

export const dynamic = "force-dynamic";
type Ctx = { params: { id: string } };

export function GET(_req: Request, { params }: Ctx) {
  return repondre(async () => ({
    evenements: (await readDb()).evenements.filter((e) => e.prospectId === params.id).sort((a, b) => b.date.localeCompare(a.date)),
  }));
}

export function POST(req: Request, { params }: Ctx) {
  return repondre(async () => ({ evenement: await ajouterEvenement(params.id, await corps(req)) }), 201);
}
