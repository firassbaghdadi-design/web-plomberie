import { repondre } from "@/lib/api";
import { readDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(async () => ({ modeles: (await readDb()).modeles }));
}
