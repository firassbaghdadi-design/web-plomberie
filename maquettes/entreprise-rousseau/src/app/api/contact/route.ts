import { NextResponse } from "next/server";
import { business, requestTypes } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PHOTOS = 4;
const MAX_PHOTO_B64 = 1_400_000;
const MAX_TOTAL_B64 = 3_900_000;

/** Ne garde que de vrais JPEG (contrôle des premiers octets), en nombre et en poids limités. */
function readPhotos(raw: unknown): { filename: string; content: string }[] | "too-big" {
  if (!Array.isArray(raw)) return [];
  const out: { filename: string; content: string }[] = [];
  let total = 0;
  for (const item of raw.slice(0, MAX_PHOTOS)) {
    const data = typeof (item as { data?: unknown })?.data === "string" ? ((item as { data: string }).data) : "";
    if (!data) continue;
    if (data.length > MAX_PHOTO_B64) return "too-big";
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(data)) continue;
    const head = Buffer.from(data.slice(0, 16), "base64");
    if (head[0] !== 0xff || head[1] !== 0xd8 || head[2] !== 0xff) continue;
    total += data.length;
    if (total > MAX_TOTAL_B64) return "too-big";
    out.push({ filename: `photo-${out.length + 1}.jpg`, content: data });
  }
  return out;
}

const hits = new Map<string, number[]>();

const esc = (value: string) => value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
const clean = (value: unknown, max: number) => (typeof value === "string" ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "");

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnu";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "Trop de demandes envoyées, réessayez dans quelques minutes." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Demande illisible." }, { status: 400 });
  }

  if (clean(body.website, 50)) return NextResponse.json({ ok: true });
  if (typeof body.elapsed === "number" && body.elapsed < 2500) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 60);
  const lastName = clean(body.lastName, 60);
  const name = `${firstName} ${lastName}`.trim();
  const address = clean(body.address, 200);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const city = clean(body.city, 120);
  const message = clean(body.message, 4000);
  const type = clean(body.type, 40);
  const typeLabel = requestTypes.find((t) => t.value === type)?.label ?? "Autre demande";

  if (firstName.length < 2 || lastName.length < 2 || address.length < 5 || !/^[+\d][\d\s.()-]{7,}$/.test(phone) || message.length < 10 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ ok: false, error: "Certains champs sont incorrects." }, { status: 400 });
  }

  const photos = readPhotos(body.photos);
  if (photos === "too-big") {
    return NextResponse.json({ ok: false, error: "Les photos sont trop lourdes : retirez-en une ou choisissez-en de plus légères." }, { status: 413 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY ou CONTACT_TO_EMAIL manquant : demande non envoyée");
    return NextResponse.json({ ok: false, error: "L'envoi par formulaire n'est pas encore activé sur cette maquette." }, { status: 503 });
  }

  const from = process.env.CONTACT_FROM ?? `${business.name} — site web <onboarding@resend.dev>`;
  const rows: [string, string][] = [
    ["Demande", typeLabel],
    ["Nom", name],
    ["Téléphone", phone],
    ["E-mail", email || "non renseigné"],
    ["Adresse du lieu concerné", address],
    ["Code postal / ville", city || "non renseigné"],
    ["Photos jointes", photos.length ? String(photos.length) : "aucune"],
  ];
  const text = `${rows.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\nMessage :\n${message}\n`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#06283a"><h2 style="margin:0 0 12px">Nouvelle demande depuis le site</h2><table style="border-collapse:collapse;width:100%">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#4a5a63;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`)
    .join("")}</table><p style="margin:16px 0 4px;color:#4a5a63">Message</p><p style="margin:0;white-space:pre-wrap">${esc(message)}</p></div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: email || undefined,
      subject: `[Site web] ${typeLabel} — ${name}`,
      text,
      html,
      attachments: photos.length ? photos : undefined,
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend", response.status, await response.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "L'e-mail n'a pas pu être envoyé." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
