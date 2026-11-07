const chemins: Record<string, string> = {
  accueil: "M3 11.5 12 4l9 7.5M5.5 10v9.5h13V10",
  prospects: "M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-3A3.5 3.5 0 0 0 6 17.5V19M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 8.5a2.5 2.5 0 0 1 0 5M20 19v-1a3 3 0 0 0-2-2.8",
  emails: "M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6",
  reglages: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12a7 7 0 0 0-.1-1.2l1.9-1.5-1.8-3.1-2.3.8a7 7 0 0 0-2-1.2L14.3 3h-3.6l-.4 2.8a7 7 0 0 0-2 1.2l-2.3-.8-1.8 3.1 1.9 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-1.9 1.5 1.8 3.1 2.3-.8c.6.5 1.3.9 2 1.2l.4 2.8h3.6l.4-2.8c.7-.3 1.4-.7 2-1.2l2.3.8 1.8-3.1-1.9-1.5c.1-.4.1-.8.1-1.2Z",
  telephone: "M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 4.5 6a2 2 0 0 1 2-2Z",
  lien: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  plus: "M12 5v14M5 12h14",
  retour: "M15 5l-7 7 7 7",
  coche: "M5 12.5 10 17.5 19 7",
  chercher: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4",
  pipeline: "M4.5 5h4v14h-4zM10 5h4v10h-4zM15.5 5h4v6.5h-4z",
  agenda: "M5 6.5h14v13H5zM5 10.5h14M9 4v4M15 4v4",
  poignee: "M9.5 7h.01M9.5 12h.01M9.5 17h.01M14.5 7h.01M14.5 12h.01M14.5 17h.01",
  points: "M6 12h.01M12 12h.01M18 12h.01",
  fleches: "M7 8h11l-3-3M17 16H6l3 3",
  telecharger: "M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14",
  fermer: "M6 6l12 12M18 6 6 18",
  clients: "M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-3A3.5 3.5 0 0 0 6 17.5V19M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 8.5a2.5 2.5 0 0 1 0 5M20 19v-1a3 3 0 0 0-2-2.8",
  chantiers: "M3.5 19.5h17M5.5 19.5V10l6.5-5 6.5 5v9.5M10 19.5v-5h4v5",
  taches: "M9 6.5h10M9 12h10M9 17.5h10M4.5 6.5l1 1 2-2M4.5 12l1 1 2-2M4.5 17.5l1 1 2-2",
  equipe: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19v-1a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v1M16 5.5a3 3 0 0 1 0 5.5M18.5 14.2A4 4 0 0 1 20.5 18v1",
  devis: "M7 3.5h7l4 4v13H7zM14 3.5v4h4M9.5 12h6M9.5 15.5h6",
  factures: "M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3zM9 8h6M9 11.5h6M9 15h3.5",
  marketing: "M4 10v4h3l6 4V6l-6 4zM16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11",
  statistiques: "M4.5 19.5h15M7 16v-4M11 16V8M15 16v-6M19 16V5",
  cle: "M14.5 9.5a4 4 0 1 1-1.2-2.9M14.5 9.5 21 16l-2 2-1.5-1.5L16 18l-1.5-1.5L16 15l-4.4-4.4",
  docs: "M5 4.5h9l5 5V19.5H5zM14 4.5v5h5M8 13h8M8 16.5h5",
  sortir: "M14 4.5h4.5v15H14M10 8l-4 4 4 4M6 12h10",
  echanger: "M7 7.5h12l-3-3M17 16.5H5l3 3",
  epingle: "M9 4.5h6l-1 5 3 3H7l3-3zM12 12.5v7",
  note: "M5 4.5h14v15H5zM8.5 9h7M8.5 12.5h7M8.5 16h4",
  activite: "M3.5 12h4l2.5-6 4 12 2.5-6h4",
  adresse: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  modifier: "M4.5 19.5h4l10-10-4-4-10 10zM13 7l4 4",
  corbeille: "M5 7h14M10 7V4.5h4V7M7 7l1 12.5h8L17 7",
  copier: "M8.5 8.5h11v11h-11zM5.5 15.5h-1v-11h11v1",
  menu: "M4.5 7h15M4.5 12h15M4.5 17h15",
  etincelle: "M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2-5.2-1.8 5.2-1.8zM18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",
};

export function Icone({ nom, className = "h-[22px] w-[22px]" }: { nom: keyof typeof chemins | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={chemins[nom] ?? ""} />
    </svg>
  );
}
