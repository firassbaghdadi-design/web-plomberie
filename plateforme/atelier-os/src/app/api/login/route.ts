import { NextResponse } from "next/server";
import { COOKIE, creerSession, motDePasseValide } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const mdp = String(form?.get("motdepasse") ?? "");
  const suiteBrute = String(form?.get("suite") ?? "/");
  const suite = suiteBrute.startsWith("/") && !suiteBrute.startsWith("//") ? suiteBrute : "/";
  const base = new URL(req.url);
  const hote = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? base.host;
  const proto = req.headers.get("x-forwarded-proto") ?? base.protocol.replace(":", "");
  const racine = `${proto}://${hote}`;

  if (!motDePasseValide(mdp)) {
    await new Promise((r) => setTimeout(r, 700));
    return NextResponse.redirect(new URL(`/login?erreur=1&suite=${encodeURIComponent(suite)}`, racine), 303);
  }
  const { valeur, duree } = await creerSession();
  const res = NextResponse.redirect(new URL(suite, racine), 303);
  res.cookies.set(COOKIE, valeur, { httpOnly: true, secure: proto === "https", sameSite: "lax", path: "/", maxAge: duree });
  return res;
}
