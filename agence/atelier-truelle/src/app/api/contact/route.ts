import { NextResponse } from "next/server";
import { agency, requestTypes } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const siteUrl = clean(body.siteUrl, 200);
  const message = clean(body.message, 4000);
  const type = clean(body.type, 40);
  const typeLabel = requestTypes.find((t) => t.value === type)?.label ?? "Autre demande";

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Certains champs sont incorrects." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contact] RESEND_API_KEY ou CONTACT_TO_EMAIL manquant : demande non envoyée");
    return NextResponse.json({ ok: false, error: "L'envoi par formulaire n'est pas encore activé." }, { status: 503 });
  }

  const from = process.env.CONTACT_FROM ?? `${agency.name} — site web <onboarding@resend.dev>`;
  const rows: [string, string][] = [
    ["Demande", typeLabel],
    ["Nom", name],
    ["Entreprise", company || "non renseignée"],
    ["E-mail", email],
    ["Téléphone", phone || "non renseigné"],
    ["Site actuel", siteUrl || "non renseigné"],
  ];
  const text = `${rows.map(([k, v]) => `${k} : ${v}`).join("\n")}\n\nMessage :\n${message}\n`;
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#1f2a30"><h2 style="margin:0 0 12px">Nouvelle demande depuis ateliertruelle.fr</h2><table style="border-collapse:collapse;width:100%">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5c6b73;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`)
    .join("")}</table><p style="margin:16px 0 4px;color:#5c6b73">Message</p><p style="margin:0;white-space:pre-wrap">${esc(message)}</p></div>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: to.split(",").map((s) => s.trim()), reply_to: email, subject: `[Atelier Truelle] ${typeLabel} — ${name}`, text, html }),
  });

  if (!response.ok) {
    console.error("[contact] Resend", response.status, await response.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "L'e-mail n'a pas pu être envoyé." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
