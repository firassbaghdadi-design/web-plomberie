import { repondre } from "@/lib/api";
import { pipeline } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(async () => ({ colonnes: await pipeline() }));
}
