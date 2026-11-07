import { corps, repondre } from "@/lib/api";
import { importerCsv } from "@/lib/service";

export const dynamic = "force-dynamic";

/**
 * JSON { csv, apercu } ou texte CSV brut (Content-Type text/csv) avec ?apercu=1.
 * Aperçu : rien n'est écrit.
 */
export function POST(req: Request) {
  return repondre(async () => {
    const u = new URL(req.url);
    if ((req.headers.get("content-type") ?? "").startsWith("text/")) {
      return importerCsv(await req.text(), u.searchParams.get("apercu") === "1" || u.searchParams.get("apercu") === "true");
    }
    const c = await corps(req);
    return importerCsv(typeof c.csv === "string" ? c.csv : "", c.apercu === true || c.apercu === "true");
  });
}
