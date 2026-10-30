"use client";

import { useRef, useState } from "react";
import { business, requestTypes } from "@/lib/site";
import type { UploadedPhoto } from "@/lib/photo-upload";
import { PhotoPicker } from "./PhotoPicker";
import { CheckIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"firstName" | "lastName" | "phone" | "email" | "address" | "message" | "consent", string>>;

const field = "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-4 text-ink outline-none transition focus:border-copper focus:bg-white focus:ring-4 focus:ring-copper/15";
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
    if ((data.firstName ?? "").trim().length < 2) next.firstName = "Indiquez votre prénom.";
    if ((data.lastName ?? "").trim().length < 2) next.lastName = "Indiquez votre nom.";
    if ((data.address ?? "").trim().length < 5) next.address = "Indiquez l'adresse du lieu concerné (numéro et rue).";
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
      <div role="status" className="rounded-[6px] border border-copper/30 bg-copper-wash p-10 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-copper text-copper">
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
    <form onSubmit={onSubmit} noValidate className="rounded-[6px] border border-line bg-white p-6 shadow-soft sm:p-12">
      <h2 className="text-3xl sm:text-[2.6rem]">Envoyer une demande</h2>
      <p className="mt-2 text-ink-soft">Votre demande arrive directement aux Anciens Établissements Kuschnick, rue Trousseau.</p>

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
          <label htmlFor="firstName" className={label}>Prénom</label>
          <input id="firstName" name="firstName" autoComplete="given-name" className={field} {...aria("firstName")} />
          {err("firstName")}
        </div>
        <div>
          <label htmlFor="lastName" className={label}>Nom</label>
          <input id="lastName" name="lastName" autoComplete="family-name" className={field} {...aria("lastName")} />
          {err("lastName")}
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
        <div className="sm:col-span-2">
          <label htmlFor="address" className={label}>Adresse du lieu concerné</label>
          <input id="address" name="address" autoComplete="street-address" placeholder="Numéro et rue" className={field} {...aria("address")} />
          {err("address")}
        </div>
        <div>
          <label htmlFor="city" className={label}>Code postal et ville</label>
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
            <input type="checkbox" name="consent" className="mt-1 h-5 w-5 rounded border-line accent-[#9c4a22]" {...aria("consent")} />
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
            .
          </p>
        ) : null}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary mt-8 w-full sm:w-auto disabled:opacity-70">
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
