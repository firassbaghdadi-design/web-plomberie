import { repondre } from "@/lib/api";
import { send } from "@/lib/sender";

export const dynamic = "force-dynamic";

/** Passe par send() et ses garde-fous. Tant que l'envoyeur est désactivé, répond envoye: false avec la raison. */
export function POST(_req: Request, { params }: { params: { id: string } }) {
  return repondre(() => send(params.id));
}
