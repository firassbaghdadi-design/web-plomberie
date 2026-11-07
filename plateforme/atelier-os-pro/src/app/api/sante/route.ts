import { sql } from "drizzle-orm";
import { base, estModeDemo, modeBase } from "@/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await base();
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, base: modeBase(), demo: estModeDemo() });
  } catch {
    return Response.json({ ok: false }, { status: 503 });
  }
}
