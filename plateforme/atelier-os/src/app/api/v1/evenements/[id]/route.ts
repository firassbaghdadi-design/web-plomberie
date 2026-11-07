import { repondre } from "@/lib/api";
import { supprimerEvenement } from "@/lib/service";

export const dynamic = "force-dynamic";

export function DELETE(_req: Request, { params }: { params: { id: string } }) {
  return repondre(async () => {
    await supprimerEvenement(params.id);
    return { ok: true };
  });
}
