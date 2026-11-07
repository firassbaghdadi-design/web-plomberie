import { NextResponse, type NextRequest } from "next/server";
import { COOKIE, jetonValide, sessionValide } from "@/lib/auth";

/** Tout est protégé, sauf la connexion et les routes de suivi (pixel et lien) que le prospect doit pouvoir atteindre. */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/login" || pathname === "/api/login" || pathname.startsWith("/t/")) return NextResponse.next();

  const connecte = await sessionValide(req.cookies.get(COOKIE)?.value);
  if (connecte) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    if (pathname.startsWith("/api/v1/") && jetonValide(req.headers.get("authorization"))) return NextResponse.next();
    return NextResponse.json({ erreur: "Non autorisé. En-tête attendu : Authorization: Bearer <API_TOKEN>" }, { status: 401 });
  }

  const dest = req.nextUrl.clone();
  dest.pathname = "/login";
  dest.search = pathname === "/" ? "" : `?suite=${encodeURIComponent(pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(dest);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"],
};
