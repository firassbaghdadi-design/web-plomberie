/** CSV minimal et robuste : guillemets, retours à la ligne dans un champ, BOM, séparateur ; , ou tabulation. */

export function detecterSeparateur(texte: string): string {
  const premiere = texte.replace(/^﻿/, "").split(/\r?\n/, 1)[0] ?? "";
  const compte = (c: string) => premiere.split(c).length - 1;
  return [";", ",", "\t"].sort((a, b) => compte(b) - compte(a))[0];
}

export function lireCsv(texte: string, sep = detecterSeparateur(texte)): string[][] {
  const t = texte.replace(/^﻿/, "");
  const lignes: string[][] = [];
  let ligne: string[] = [];
  let champ = "";
  let guillemets = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (guillemets) {
      if (c === '"') {
        if (t[i + 1] === '"') {
          champ += '"';
          i++;
        } else guillemets = false;
      } else champ += c;
    } else if (c === '"' && champ === "") guillemets = true;
    else if (c === sep) {
      ligne.push(champ);
      champ = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && t[i + 1] === "\n") i++;
      ligne.push(champ);
      lignes.push(ligne);
      ligne = [];
      champ = "";
    } else champ += c;
  }
  if (champ !== "" || ligne.length) {
    ligne.push(champ);
    lignes.push(ligne);
  }
  return lignes.filter((l) => l.some((c) => c.trim() !== ""));
}

const cellule = (v: unknown, sep: string) => {
  const s = v === null || v === undefined ? "" : String(v);
  return /["\r\n]/.test(s) || s.includes(sep) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** Point-virgule par défaut et BOM : Excel en français l'ouvre directement. */
export function ecrireCsv(lignes: unknown[][], sep = ";"): string {
  return "﻿" + lignes.map((l) => l.map((v) => cellule(v, sep)).join(sep)).join("\r\n") + "\r\n";
}
