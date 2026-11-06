"use client";

import { useEffect, useState } from "react";

const short = (d: Date) => `Paris, le ${d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}`;
const long = (d: Date) => `Paris, le ${d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}`;

/** « Paris, le … » : la date du jour, comme la ligne de date d'un quotidien. */
export function LetterDate({ className = "", weekday = false }: { className?: string; weekday?: boolean }) {
  const [text, setText] = useState("Paris, 11e arrondissement");
  useEffect(() => setText((weekday ? long : short)(new Date())), [weekday]);
  return <span className={`num ${className}`} suppressHydrationWarning>{text}</span>;
}

/** Le numéro du jour : un numéro par jour depuis la fondation de la maison, le 1er janvier 1957, et l'année de parution. */
export function IssueNumber({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Depuis 1957");
  useEffect(() => {
    const now = new Date();
    const n = Math.floor((now.getTime() - new Date(1957, 0, 1).getTime()) / 86400000) + 1;
    setText(`N° ${n.toLocaleString("fr-FR")} · ${now.getFullYear() - 1957 + 1}e année`);
  }, []);
  return <span className={`num ${className}`} suppressHydrationWarning>{text}</span>;
}
