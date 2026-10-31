"use client";

import { useState } from "react";
import { Icone } from "./Icone";

export function Copier({ valeur }: { valeur: string }) {
  const [copie, setCopie] = useState(false);
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-creux p-1.5 pl-4">
      <code className="min-w-0 flex-1 truncate font-mono text-[13px]" data-testid="valeur-copiable">
        {valeur}
      </code>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard?.writeText(valeur).catch(() => undefined);
          setCopie(true);
          setTimeout(() => setCopie(false), 2000);
        }}
        className="btn btn-petit shrink-0 !bg-carte"
      >
        <Icone nom={copie ? "coche" : "copier"} className="h-4 w-4" />
        {copie ? "Copié" : "Copier"}
      </button>
    </div>
  );
}
