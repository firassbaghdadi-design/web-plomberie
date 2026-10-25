import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_SESSION, lireSession } from "@/lib/session";

const PUBLIC = ["/connexion", "/docs", "/api/auth/connexion", "/api/v2/openapi.json", "/api/sante"];

/** Pages : redirection vers /connexion sans session valide. L'API gère elle-même son authentification (cookie ou jeton). */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/api/") || pathname.startsWith("/invitation/") || PUBLIC.includes(pathname)) return NextResponse.next();
  if (await lireSession(req.cookies.get(COOKIE_SESSION)?.value)) return NextResponse.next();
  const dest = req.nextUrl.clone();
  dest.pathname = "/connexion";
  dest.search = pathname === "/" ? "" : `?suite=${encodeURIComponent(pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(dest);
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"] };
