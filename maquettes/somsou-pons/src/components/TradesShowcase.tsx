"use client";

import Link from "next/link";
import { useState } from "react";
import { trades } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import { Photo } from "./Photo";

/** Les métiers en liste : au survol, la photo de droite change (sur téléphone, chaque ligne a sa photo). */
export function TradesShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <ul>
        {trades.map((t, i) => (
          <li key={t.key}>
            <Link
              href={t.path}
              className={`trade-row ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{t.title}</h3>
                {compact ? null : <p className="mt-2 max-w-lg text-[1.02rem]">{t.text}</p>}
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-action">
                  {t.cta}
                  <ArrowIcon className="h-4 w-4" />
                </span>
                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                  <Photo id={t.photo} sizes="92vw" />
                </div>
              </div>
              <ArrowIcon className="hidden h-7 w-7 self-center text-brand sm:block" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="trade-photo hidden lg:sticky lg:top-28 lg:block" aria-hidden="true">
        {trades.map((t, i) => (
          <div key={t.key} className={`layer ${active === i ? "is-active" : ""}`}>
            <Photo id={t.photo} alt="" sizes="34vw" />
          </div>
        ))}
        <span className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-2 text-sm font-semibold text-brand">{trades[active].title}</span>
      </div>
    </div>
  );
}
