"use client";

import { useState } from "react";

function Before() {
  return (
    <div className="absolute inset-0 bg-[#d8d4c8] p-3 text-[#222]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }} aria-hidden="true">
      <div className="bg-[#3b5a8c] px-2 py-1.5 text-center text-[11px] font-bold uppercase tracking-wide text-white">Entreprise Exemple - Plomberie - Chauffage</div>
      <p className="mt-2 text-center text-[10px] font-bold text-[#a00]">BIENVENUE SUR NOTRE SITE !!!</p>
      <div className="mt-2 grid grid-cols-[1fr_2fr] gap-2">
        <ul className="space-y-1 text-[9px] text-[#1a0dab] underline">
          <li>Accueil</li>
          <li>Qui sommes-nous</li>
          <li>Prestations</li>
          <li>Liens</li>
          <li>Contact</li>
        </ul>
        <div>
          <p className="text-[8px] leading-[1.25]">Notre entreprise vous propose depuis de nombreuses années tous travaux de plomberie, chauffage, sanitaire, dépannage, installation, entretien, rénovation, couverture, et bien d&apos;autres services pour les particuliers et les professionnels, dans la région…</p>
          <div className="mt-2 flex gap-1">
            <div className="h-10 w-1/3 bg-[#aaa]" />
            <div className="h-10 w-1/3 bg-[#bbb]" />
            <div className="h-10 w-1/3 bg-[#999]" />
          </div>
          <p className="mt-1 text-[7px] text-[#555]">Tél : 01 00 00 00 00 (en bas de page)</p>
        </div>
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="absolute inset-0 bg-platre-light p-4" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-extrabold text-ardoise">Entreprise Exemple</span>
        <span className="rounded-full bg-terre-action px-3 py-1 font-display text-[10px] font-bold text-white">Appeler</span>
      </div>
      <p className="mt-4 font-display text-xl font-extrabold leading-tight text-ardoise sm:text-2xl">Plomberie et chauffage, au bon moment.</p>
      <p className="mt-2 text-[10px] leading-snug text-ardoise-soft">Dépannage, chaudières, salles de bains. Un devis avant les travaux.</p>
      <div className="mt-3 flex gap-2">
        <span className="rounded-full bg-ardoise px-3 py-1.5 font-display text-[10px] font-bold text-platre">Demander un devis</span>
        <span className="rounded-full border-2 border-ardoise/20 px-3 py-1.5 font-display text-[10px] font-bold text-ardoise">Nos services</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Plomberie", "Chauffage", "Salles de bains"].map((t) => (
          <div key={t} className="rounded-xl bg-platre-deep p-2">
            <div className="h-7 rounded-lg bg-terre/40" />
            <p className="mt-1 font-display text-[9px] font-bold text-ardoise">{t}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-terre-dark">★★★★★ <span className="text-ardoise-soft">avis de vos clients, avec leur source</span></p>
    </div>
  );
}

export function BeforeAfter() {
  const [value, setValue] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-line bg-platre-light shadow-lift">
        <Before />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
          <After />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-terre-action" style={{ left: `${value}%` }} aria-hidden="true" />
        <span className="absolute left-3 top-3 rounded-full bg-ardoise/85 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-platre">Avant</span>
        <span className="absolute right-3 top-3 rounded-full bg-terre-action px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-white">Après</span>
      </div>
      <input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="compare mt-3" aria-label="Comparer l'avant et l'après" />
      <figcaption className="text-center text-xs text-zinc-dark">Illustration avec une entreprise fictive. Faites glisser le curseur.</figcaption>
    </figure>
  );
}
