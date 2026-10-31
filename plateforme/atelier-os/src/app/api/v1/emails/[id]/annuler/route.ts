import { repondre } from "@/lib/api";
import { annulerEmail } from "@/lib/service";

export const dynamic = "force-dynamic";

export function POST(_req: Request, { params }: { params: { id: string } }) {
  return repondre(async () => ({ email: await annulerEmail(params.id) }));
}
