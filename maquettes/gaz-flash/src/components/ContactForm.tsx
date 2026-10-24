"use client";

import { useRef, useState } from "react";
import { business, requestTypes } from "@/lib/site";
import type { UploadedPhoto } from "@/lib/photo-upload";
import { PhotoPicker } from "./PhotoPicker";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "phone" | "email" | "message" | "consent", string>>;

const field = "mt-1.5 w-full border-2 border-ink/70 bg-white px-4 py-3 text-ink outline-none focus:border-red-btn focus:ring-4 focus:ring-red/20";
const label = "block text-[0.95rem] font-semibold text-ink-2";

export function ContactForm({ defaultType = "depannage" }: { defaultType?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");
  const started = useRef(Date.now());
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    const next: Errors = {};
    if ((data.name ?? "").trim().length < 2) next.name = "Indiquez votre nom.";
    if (!/^[+\d][\d\s.()-]{7,}$/.test((data.phone ?? "").trim())) next.phone = "Indiquez un numéro de téléphone valide.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = "Cette adresse e-mail semble incorrecte.";
    if ((data.message ?? "").trim().length < 10) next.message = "Décrivez votre demande en quelques mots (10 caractères minimum).";
    if (!form.get("consent")) next.consent = "Merci de cocher la case pour que nous puissions vous répondre.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, photos: photos.map(({ name, data: content }) => ({ name, data: content })), elapsed: Date.now() - started.current }),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (response.ok && result.ok) {
        setStatus("success");
        return;
      }
      setServerMessage(result.error ?? "L'envoi a échoué.");
      setStatus("error");
    } catch {
      setServerMessage("Connexion impossible pour le moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="affiche red text-center">
        <p className="hand text-[2.2rem] text-red-btn">Bien reçu, merci !</p>
        <h2 className="mt-1">Votre demande est arrivée.</h2>
        <p className="mt-3">Votre message est dans la boîte de l'entreprise. Pour une urgence, appelez le {business.phoneDisplay}.</p>
      </div>
    );
  }

  const err = (key: keyof Errors) => (errors[key] ? <p id={`${key}-error`} className="mt-1 text-sm font-semibold text-[#b42318]">{errors[key]}</p> : null);
  const aria = (key: keyof Errors) => ({ "aria-invalid": errors[key] ? true : undefined, "aria-describedby": errors[key] ? `${key}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate aria-labelledby="form-title" className="border-[3px] border-ink bg-paper-sheet p-6 shadow-[7px_8px_0_rgb(44_53_61/0.16)] sm:p-9">
      <h2 id="form-title">Écrire à l'entreprise</h2>
      <p className="mt-2 text-ink-soft">Votre message arrive directement dans la boîte e-mail de l'entreprise. Pour une panne, le téléphone reste le plus rapide.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="type" className={label}>Votre demande</label>
          <select id="type" name="type" defaultValue={defaultType} className={field}>
            {requestTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name" className={label}>Nom et prénom</label>
          <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Téléphone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="email" className={label}>E-mail <span className="font-normal text-ink-soft">(facultatif)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="city" className={label}>Code postal ou ville</label>
          <input id="city" name="city" autoComplete="postal-code" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Votre message</label>
          <textarea id="message" name="message" rows={5} className={field} placeholder="Type d'appareil, marque, problème rencontré…" {...aria("message")} />
          {err("message")}
        </div>
        <PhotoPicker photos={photos} onChange={setPhotos} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" name="consent" className="mt-1 h-5 w-5 accent-[#C9261D]" {...aria("consent")} />
            <span>J'accepte que mes informations soient utilisées pour répondre à ma demande, conformément à la politique de données personnelles.</span>
          </label>
          {err("consent")}
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 border-2 border-[#b42318]/50 bg-[#fef3f2] p-4 text-sm text-[#b42318]">
          {serverMessage} Vous pouvez aussi appeler le <a className="font-semibold underline" href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a> ou écrire à <a className="font-semibold underline" href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className="btn mt-8 w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
