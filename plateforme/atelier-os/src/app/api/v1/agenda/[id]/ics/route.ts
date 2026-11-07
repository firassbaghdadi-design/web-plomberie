import { NextResponse } from "next/server";
import { ErreurMetier, lireAgenda, versIcs } from "@/lib/service";
import { slug } from "@/data/seed";

export const dynamic = "force-dynamic";

/** Fichier .ics à ouvrir dans Calendrier (iPhone, Mac), Google Agenda ou Outlook. */
export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    const { rendezVous, prospect } = await lireAgenda(params.id);
    const nom = slug(rendezVous.titre).slice(0, 60) || "rendez-vous";
    return new NextResponse(versIcs(rendezVous, prospect), {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": `attachment; filename="${nom}.ics"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    if (e instanceof ErreurMetier) return NextResponse.json({ erreur: e.message }, { status: e.statut });
    throw e;
  }
}
