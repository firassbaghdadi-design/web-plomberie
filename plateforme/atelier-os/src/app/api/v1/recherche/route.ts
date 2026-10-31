import { repondre } from "@/lib/api";
import { rechercher } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return repondre(() => rechercher(new URL(req.url).searchParams.get("q") ?? ""));
}
