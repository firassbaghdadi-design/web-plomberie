"use client";

import { useEffect, useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fmt = (min: number) => `${Math.floor(min / 60)} h${min % 60 ? ` ${String(min % 60).padStart(2, "0")}` : ""}`;

/** Message d'ouverture du standard, d'après les horaires habituels (jours fériés non pris en compte). */
export function statusAt(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Paris", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = DAYS.indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const open = day >= 1 && day <= 5;
  if (open && minutes >= 480 && minutes < 750) return `Le standard est ouvert jusqu'à ${fmt(750)}.`;
  if (open && minutes >= 810 && minutes < 1020) return `Le standard est ouvert jusqu'à ${fmt(1020)}.`;
  if (open && minutes >= 750 && minutes < 810) return `Pause déjeuner : le standard rouvre à ${fmt(810)}.`;
  if (open && minutes < 480) return `Le standard ouvre à ${fmt(480)}.`;
  const next = day >= 1 && day <= 4 ? "demain" : "lundi";
  return `Le standard est fermé. Il rouvre ${next} à ${fmt(480)}.`;
}

export function OpenStatus({ fallback, className = "" }: { fallback: string; className?: string }) {
  const [text, setText] = useState(fallback);
  useEffect(() => {
    const update = () => setText(statusAt(new Date()));
    update();
    const id = window.setInterval(update, 60000);
    return () => window.clearInterval(id);
  }, []);
  return <span className={className}>{text}</span>;
}
