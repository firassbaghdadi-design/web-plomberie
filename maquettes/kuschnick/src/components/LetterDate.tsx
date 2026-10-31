"use client";

import { useEffect, useState } from "react";

const fmt = (d: Date) => `Paris, le ${d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}`;

/** « Paris, le … » : la date du jour, comme en tête d'une lettre de la maison. */
export function LetterDate({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Paris, 11e arrondissement");
  useEffect(() => setText(fmt(new Date())), []);
  return <span className={`num ${className}`} suppressHydrationWarning>{text}</span>;
}
