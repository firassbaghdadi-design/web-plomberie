import { corps, repondre } from "@/lib/api";
import { readDb } from "@/lib/db";
import { ErreurMetier, modifierProspect, supprimerProspect } from "@/lib/service";

export const dynamic = "force-dynamic";
type Ctx = { params: { id: string } };

export function GET(_req: Request, { params }: Ctx) {
  return repondre(async () => {
    const db = await readDb();
    const prospect = db.prospects.find((p) => p.id === params.id);
    if (!prospect) throw new ErreurMetier("Prospect introuvable", 404);
    return {
      prospect,
      evenements: db.evenements.filter((e) => e.prospectId === params.id).sort((a, b) => b.date.localeCompare(a.date)),
      emails: db.emails.filter((e) => e.prospectId === params.id),
      relances: db.relances.filter((r) => r.prospectId === params.id),
    };
  });
}

export function PATCH(req: Request, { params }: Ctx) {
  return repondre(async () => ({ prospect: await modifierProspect(params.id, await corps(req)) }));
}

export function DELETE(_req: Request, { params }: Ctx) {
  return repondre(async () => {
    await supprimerProspect(params.id);
    return { ok: true };
  });
}
