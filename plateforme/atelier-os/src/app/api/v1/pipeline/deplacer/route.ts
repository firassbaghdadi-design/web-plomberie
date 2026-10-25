import { corps, repondre } from "@/lib/api";
import { deplacerProspect } from "@/lib/service";

export const dynamic = "force-dynamic";

export function POST(req: Request) {
  return repondre(async () => {
    const c = await corps(req);
    return { prospect: await deplacerProspect(c.prospectId, c.statut) };
  });
}
