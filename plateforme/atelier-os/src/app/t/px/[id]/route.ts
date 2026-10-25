import { enregistrerSuivi } from "@/lib/service";

export const dynamic = "force-dynamic";

const GIF = Uint8Array.from(atob("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), (c) => c.charCodeAt(0));

/** Pixel d'ouverture. Répond toujours par un GIF transparent, même pour un robot ou un identifiant inconnu. */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await enregistrerSuivi(params.id, "ouverture", req.headers.get("user-agent"));
  } catch (e) {
    console.error("suivi ouverture", e);
  }
  return new Response(GIF, {
    headers: { "Content-Type": "image/gif", "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0", "Content-Length": String(GIF.length) },
  });
}
