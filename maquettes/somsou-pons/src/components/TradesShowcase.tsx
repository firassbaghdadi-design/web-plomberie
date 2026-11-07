"use client";

import Link from "next/link";
import { useState } from "react";
import { trades } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import { Photo } from "./Photo";
import { Tiles } from "./Mosaic";

/** Les métiers en liste : au survol, la photo de droite change (sur téléphone, chaque ligne a sa photo). */
export function TradesShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <ul className="lg:col-span-7">
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
                <span className="mt-2 inline-flex items-center gap-2 text-[0.95rem] text-amber-action">
                  {t.cta}
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
                <div className="mosaic relative mt-5 aspect-[16/10] lg:hidden" data-mosaic="">
                  <Photo id={t.photo} sizes="94vw" />
                  <Tiles cols={[8, 8]} ratio={[0.625, 0.625]} seed={i + 40} />
                </div>
              </div>
              <span className="sq hidden sm:block" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="trade-photo mosaic hidden lg:sticky lg:top-28 lg:col-span-5 lg:block" data-mosaic="" aria-hidden="true">
        {trades.map((t, i) => (
          <div key={t.key} className={`layer ${active === i ? "is-active" : ""}`}>
            <Photo id={t.photo} alt="" sizes="36vw" />
          </div>
        ))}
        <Tiles cols={[6, 6]} ratio={[1.25, 1.25]} seed={12} />
        <span className="absolute bottom-0 left-0 z-[3] bg-white px-4 py-2.5 text-[0.95rem] text-ink">
          <span className="mr-2 inline-block h-[6px] w-[6px] -translate-y-[2px] bg-amber" />
          {trades[active].title}
        </span>
      </div>
    </div>
  );
}
