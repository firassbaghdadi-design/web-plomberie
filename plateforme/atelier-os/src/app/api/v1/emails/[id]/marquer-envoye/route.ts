import { repondre } from "@/lib/api";
import { marquerEnvoye } from "@/lib/service";

export const dynamic = "force-dynamic";

/** Pour un e-mail parti par un autre moyen (Gmail à la main) : journalise l'envoi et planifie les relances. */
export function POST(_req: Request, { params }: { params: { id: string } }) {
  return repondre(async () => ({ email: await marquerEnvoye(params.id) }));
}
