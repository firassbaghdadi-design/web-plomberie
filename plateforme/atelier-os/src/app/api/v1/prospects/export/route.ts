import { NextResponse } from "next/server";
import { exporterCsv } from "@/lib/service";
import { jourParis } from "@/lib/dates";

export const dynamic = "force-dynamic";

export async function GET() {
  return new NextResponse(await exporterCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="atelier-os-prospects-${jourParis()}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
