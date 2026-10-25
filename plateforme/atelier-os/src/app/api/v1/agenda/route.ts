import { corps, repondre } from "@/lib/api";
import { creerAgenda, listerAgenda } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET(req: Request) {
  return repondre(async () => {
    const u = new URL(req.url).searchParams;
    const fait = u.get("fait");
    const rendezVous = await listerAgenda({
      du: u.get("du") ?? undefined,
      au: u.get("au") ?? undefined,
      prospectId: u.get("prospectId") ?? undefined,
      fait: fait === "true" ? true : fait === "false" ? false : undefined,
    });
    return { total: rendezVous.length, rendezVous };
  });
}

export function POST(req: Request) {
  return repondre(async () => ({ rendezVous: await creerAgenda(await corps(req)) }), 201);
}
