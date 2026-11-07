import { repondre } from "@/lib/api";
import { aFaire } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(async () => ({ actions: await aFaire() }));
}
