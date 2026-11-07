"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const STORAGE_KEY = "site_utm";

type Gtag = (...args: unknown[]) => void;

export function Analytics() {
  const params = useSearchParams();
  const path = usePathname();

  useEffect(() => {
    try {
      const captured: Record<string, string> = {};
      UTM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) captured[key] = value;
      });
      if (Object.keys(captured).length > 0) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
        return;
      }
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const next = new URLSearchParams(params.toString());
      let changed = false;
      Object.entries(JSON.parse(stored) as Record<string, string>).forEach(([key, value]) => {
        if (!next.has(key)) {
          next.set(key, value);
          changed = true;
        }
      });
      if (changed) window.history.replaceState(null, "", `${path}?${next.toString()}`);
    } catch {
      /* stockage indisponible */
    }
  }, [path, params]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (target && gtag) gtag("event", target.dataset.track, { link_text: target.textContent?.trim() });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
