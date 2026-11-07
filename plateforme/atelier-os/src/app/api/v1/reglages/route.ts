import { corps, repondre } from "@/lib/api";
import { lireReglages, modifierReglages } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(async () => ({ reglages: await lireReglages() }));
}

export function PATCH(req: Request) {
  return repondre(async () => ({ reglages: await modifierReglages(await corps(req)) }));
}
