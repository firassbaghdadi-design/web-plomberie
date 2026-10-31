import { repondre } from "@/lib/api";
import { tableauDeBord } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(tableauDeBord);
}
