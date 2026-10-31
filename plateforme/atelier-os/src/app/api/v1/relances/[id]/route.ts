import { repondre } from "@/lib/api";
import { annulerRelance } from "@/lib/service";

export const dynamic = "force-dynamic";

/** Annule la relance (elle reste visible dans l'historique avec le statut « annulee »). */
export function DELETE(_req: Request, { params }: { params: { id: string } }) {
  return repondre(async () => ({ relance: await annulerRelance(params.id) }));
}
