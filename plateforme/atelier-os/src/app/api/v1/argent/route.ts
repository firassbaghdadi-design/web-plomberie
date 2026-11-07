import { repondre } from "@/lib/api";
import { argent } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(argent);
}
