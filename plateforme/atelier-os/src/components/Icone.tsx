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
};

export function Icone({ nom, className = "h-[22px] w-[22px]" }: { nom: keyof typeof chemins | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={chemins[nom] ?? ""} />
    </svg>
  );
}
