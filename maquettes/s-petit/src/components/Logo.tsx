/** La goutte, seule forme de la marque. */
export function DropMark({ className = "h-5 w-[0.9rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 15 21" className={className} aria-hidden="true">
      <path d="M7.5 1C7.5 1 1.2 9 1.2 13.6a6.3 6.3 0 0 0 12.6 0C13.8 9 7.5 1 7.5 1Z" fill="#1769a3" />
    </svg>
  );
}

/** Logo provisoire : l'entreprise n'a pas de logo public. À remplacer par le sien s'il existe. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <DropMark />
      <span className="flex flex-col leading-none">
        <span className="text-[1.3rem] font-normal tracking-[-0.01em] text-ink">S. Petit</span>
        <span className="mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.26em] text-ink-faint sm:block">Plombier · Paris 14e</span>
      </span>
    </span>
  );
}
