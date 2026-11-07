"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { EtatAction } from "@/lib/etat-action";

type Action = (etat: EtatAction, fd: FormData) => Promise<EtatAction>;

/** Formulaire branché sur une server action : erreurs par champ, remise à zéro après succès. */
export function Formulaire({
  action,
  children,
  className = "",
  remettreAZero = false,
  resultat,
  id,
}: {
  action: Action;
  children: React.ReactNode;
  className?: string;
  remettreAZero?: boolean;
  resultat?: (etat: EtatAction) => React.ReactNode;
  id?: string;
}) {
  const [etat, envoyer] = useFormState(action, {} as EtatAction);
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (etat.ok && remettreAZero) ref.current?.reset();
  }, [etat, remettreAZero]);
  return (
    <form ref={ref} action={envoyer} className={className} id={id} noValidate>
      {children}
      {etat.erreur && (
        <p role="alert" className="mt-3 text-[14px] text-terre">
          {etat.erreur}
          {etat.details && etat.details.length > 1 && (
            <span className="mt-1 block text-[13px] text-doux">{etat.details.map((d) => d.message).join(" · ")}</span>
          )}
        </p>
      )}
      {etat.ok && etat.message && (
        <p role="status" className="mt-3 text-[14px] text-doux">
          {etat.message}
        </p>
      )}
      {resultat?.(etat)}
    </form>
  );
}

export function BoutonEnvoi({ children, className = "btn btn-primaire", ...p }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} aria-busy={pending} className={className} {...p}>
      {children}
    </button>
  );
}
