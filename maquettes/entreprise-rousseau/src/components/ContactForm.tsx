"use client";

import { useRef, useState } from "react";
import { business, requestTypes } from "@/lib/site";
import type { UploadedPhoto } from "@/lib/photo-upload";
import { PhotoPicker } from "./PhotoPicker";
import { CheckIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "phone" | "email" | "message" | "consent", string>>;

const field = "mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition focus:border-brand-dark focus:ring-4 focus:ring-brand/25";
const label = "block text-sm font-medium text-ink";

export function ContactForm({ defaultType = "plomberie" }: { defaultType?: string }) {
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
      const response = await fetch("/api/contact", {
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
      <div role="status" className="rounded-[2rem] border border-brand/40 bg-brand-tint/60 p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-3xl">Demande bien reçue.</h2>
        <p className="mt-3">Merci, votre message est arrivé dans la boîte de l'entreprise. Pour une urgence, appelez le {business.phoneDisplay}.</p>
      </div>
    );
  }

  const err = (key: keyof Errors) => (errors[key] ? <p id={`${key}-error`} className="mt-1.5 text-sm text-[#b42318]">{errors[key]}</p> : null);
  const aria = (key: keyof Errors) => ({ "aria-invalid": errors[key] ? true : undefined, "aria-describedby": errors[key] ? `${key}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-10">
      <h2 className="text-3xl sm:text-4xl">Envoyer une demande</h2>
      <p className="mt-2">Votre message arrive directement dans la boîte e-mail de l'entreprise.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="type" className={label}>
            Votre demande
          </label>
          <select id="type" name="type" defaultValue={defaultType} className={field}>
            {requestTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name" className={label}>
            Nom et prénom
          </label>
          <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="email" className={label}>
            E-mail <span className="font-normal text-ink-soft">(facultatif)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="city" className={label}>
            Code postal ou ville
          </label>
          <input id="city" name="city" autoComplete="postal-code" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Votre message
          </label>
          <textarea id="message" name="message" rows={5} className={field} {...aria("message")} />
          {err("message")}
        </div>
        <PhotoPicker photos={photos} onChange={setPhotos} />
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <input type="checkbox" name="consent" className="mt-1 h-5 w-5 rounded border-line accent-[#26718c]" {...aria("consent")} />
            <span>J'accepte que ces informations soient utilisées pour répondre à ma demande. Elles ne sont ni revendues ni utilisées à d'autres fins.</span>
          </label>
          {err("consent")}
        </div>
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="mt-6 rounded-2xl border border-[#b42318]/30 bg-[#fef3f2] p-4 text-sm text-[#7a271a]">
            {serverMessage} Vous pouvez nous joindre au{" "}
            <a href={`tel:${business.phoneTel}`} className="font-medium underline">
              {business.phoneDisplay}
            </a>{" "}
            ou à{" "}
            <a href={`mailto:${business.email}`} className="font-medium underline">
              {business.email}
            </a>
            .
          </p>
        ) : null}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-amber pulse mt-8 w-full sm:w-auto disabled:opacity-70">
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
