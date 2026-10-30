"use client";

import { useRef, useState } from "react";
import { MAX_PHOTOS, MAX_TOTAL_B64, compressPhoto, type UploadedPhoto } from "@/lib/photo-upload";

type Props = { photos: UploadedPhoto[]; onChange: (photos: UploadedPhoto[]) => void };

export function PhotoPicker({ photos, onChange }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function onFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setMessage("");
    setBusy(true);
    const next = [...photos];
    let refused = 0;
    for (const file of files) {
      if (next.length >= MAX_PHOTOS) {
        setMessage(`Vous pouvez joindre ${MAX_PHOTOS} photos au maximum.`);
        break;
      }
      try {
        const photo = await compressPhoto(file);
        const total = next.reduce((sum, p) => sum + p.data.length, 0) + photo.data.length;
        if (total > MAX_TOTAL_B64) {
          setMessage("Ces photos sont trop lourdes ensemble : retirez-en une ou choisissez-en de plus légères.");
          break;
        }
        next.push(photo);
      } catch {
        refused += 1;
      }
    }
    if (refused) setMessage(`${refused} fichier${refused > 1 ? "s n'ont" : " n'a"} pas pu être lu${refused > 1 ? "s" : ""} : envoyez une photo au format JPEG ou PNG.`);
    onChange(next);
    setBusy(false);
  }

  return (
    <fieldset className="sm:col-span-2 min-w-0">
      <legend className="block text-sm font-medium text-ink">
        Photos <span className="font-normal text-ink-soft">(facultatif, {MAX_PHOTOS} maximum)</span>
      </legend>
      <p id="photos-hint" className="mt-1 text-sm text-ink-soft">
        Une photo vaut mieux qu'un long message : la fuite, la tache au plafond, le radiateur, la souche de cheminée. Nous les recevons avec votre demande.
      </p>

      <div className="mt-4 flex flex-wrap items-start gap-3">
        {photos.map((photo, index) => (
          <figure key={photo.id} className="relative h-24 w-24 overflow-hidden rounded-xl border border-line bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.preview} alt={`Photo jointe ${index + 1}`} className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => onChange(photos.filter((p) => p.id !== photo.id))}
              className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-lg leading-none text-white hover:bg-eau-deep"
              aria-label={`Retirer la photo ${index + 1}`}
            >
              ×
            </button>
          </figure>
        ))}
        {photos.length < MAX_PHOTOS ? (
          <button type="button" onClick={() => input.current?.click()} disabled={busy} aria-describedby="photos-hint" className="flex h-24 min-w-[7.5rem] flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-eau/40 bg-white px-3 text-ink hover:border-eau hover:bg-eau-wash disabled:opacity-60">
            <span aria-hidden="true" className="text-3xl leading-none">+</span>
            <span className="text-sm font-medium">{busy ? "Préparation…" : photos.length ? "Ajouter" : "Ajouter une photo"}</span>
          </button>
        ) : null}
      </div>
      <input ref={input} type="file" accept="image/*" multiple className="sr-only" tabIndex={-1} onChange={onFiles} aria-label="Choisir des photos à joindre" />
      <p role="status" aria-live="polite" className="mt-2 text-sm font-medium text-[#b42318]">
        {message}
      </p>
    </fieldset>
  );
}
