import { NextResponse } from "next/server";
import { ErreurMetier } from "./service";

export const dynamic = "force-dynamic";

export async function corps(req: Request): Promise<Record<string, unknown>> {
  try {
    const j = await req.json();
    return j && typeof j === "object" && !Array.isArray(j) ? j : {};
  } catch {
    throw new ErreurMetier("Corps JSON invalide");
  }
}

export function origine(req: Request): string {
  const fixe = process.env.APP_URL;
  if (fixe) return fixe.replace(/\/$/, "");
  const h = req.headers;
  const proto = h.get("x-forwarded-proto") ?? "https";
  const hote = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3100";
  return `${hote.startsWith("localhost") || hote.startsWith("127.") ? "http" : proto}://${hote}`;
}

export async function repondre<T>(fn: () => Promise<T>, statut = 200) {
  try {
    const data = await fn();
    return NextResponse.json(data, { status: statut, headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    if (e instanceof ErreurMetier) return NextResponse.json({ erreur: e.message }, { status: e.statut });
    console.error(e);
    return NextResponse.json({ erreur: "Erreur interne" }, { status: 500 });
  }
}
