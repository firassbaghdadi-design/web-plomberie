import { corps, repondre } from "@/lib/api";
import { lireAgenda, modifierAgenda, supprimerAgenda } from "@/lib/service";

export const dynamic = "force-dynamic";
type Ctx = { params: { id: string } };

export function GET(_req: Request, { params }: Ctx) {
  return repondre(() => lireAgenda(params.id));
}

export function PATCH(req: Request, { params }: Ctx) {
  return repondre(async () => ({ rendezVous: await modifierAgenda(params.id, await corps(req)) }));
}

export function DELETE(_req: Request, { params }: Ctx) {
  return repondre(async () => {
    await supprimerAgenda(params.id);
    return { ok: true };
  });
}
