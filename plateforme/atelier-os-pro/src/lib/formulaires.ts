/** Conversion FormData → objet pour les services (chaînes vides = null, cases à cocher, euros → centimes). */
export function lireFormulaire(fd: FormData, champs: string[], opts: { booleens?: string[]; euros?: string[]; videEnNull?: boolean } = {}) {
  const r: Record<string, unknown> = {};
  for (const c of champs) {
    if (opts.booleens?.includes(c)) {
      r[c] = fd.get(c) === "on" || fd.get(c) === "true";
      continue;
    }
    if (!fd.has(c)) continue;
    const v = String(fd.get(c) ?? "").trim();
    if (opts.euros?.includes(c)) {
      if (!v) r[c] = null;
      else {
        const n = Number(v.replace(/\s/g, "").replace(",", "."));
        r[c] = Number.isFinite(n) ? Math.round(n * 100) : v;
      }
      continue;
    }
    r[c] = v === "" ? (opts.videEnNull === false ? undefined : null) : v;
  }
  return r;
}
