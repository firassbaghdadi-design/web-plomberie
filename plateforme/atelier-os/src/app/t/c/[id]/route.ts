import { NextResponse } from "next/server";
import { readDb } from "@/lib/db";
import { enregistrerSuivi } from "@/lib/service";

export const dynamic = "force-dynamic";

/** Enregistre le clic puis redirige vers la maquette. La destination vient uniquement du journal, jamais de l'adresse appelée. */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  let cible = "";
  try {
    const mail = (await readDb()).emails.find((m) => m.id === params.id);
    cible = mail?.cible ?? "";
    if (mail) await enregistrerSuivi(params.id, "clic", req.headers.get("user-agent"));
  } catch (e) {
    console.error("suivi clic", e);
  }
  if (!cible) return new NextResponse("Lien introuvable", { status: 404 });
  return NextResponse.redirect(cible, 302);
}
