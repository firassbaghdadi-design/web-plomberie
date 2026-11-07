import { repondre } from "@/lib/api";
import { readDb } from "@/lib/db";
import { ErreurMetier } from "@/lib/service";

export const dynamic = "force-dynamic";

export function GET(_req: Request, { params }: { params: { id: string } }) {
  return repondre(async () => {
    const db = await readDb();
    const email = db.emails.find((m) => m.id === params.id);
    if (!email) throw new ErreurMetier("E-mail introuvable", 404);
    return { email, evenements: db.evenements.filter((e) => e.emailId === email.id) };
  });
}
