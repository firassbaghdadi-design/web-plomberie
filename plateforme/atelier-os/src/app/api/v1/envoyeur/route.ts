import { repondre } from "@/lib/api";
import { etatEnvoyeur } from "@/lib/sender";
import { stockage } from "@/lib/db";

export const dynamic = "force-dynamic";

export function GET() {
  return repondre(async () => ({ ...(await etatEnvoyeur()), stockage: stockage() }));
}
