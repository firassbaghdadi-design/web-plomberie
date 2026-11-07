import { MiniDrop } from "./GlassDrop";

/** La goutte de verre, seule forme de la marque. */
export function DropMark({ className = "h-6 w-[1.05rem]", uid = "mark" }: { className?: string; uid?: string }) {
  return <MiniDrop className={className} uid={uid} />;
}

/** Logo provisoire : l'entreprise n'a pas de logo public. À remplacer par le sien s'il existe. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <DropMark uid="logo" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.4rem] font-medium tracking-[-0.01em] text-sauge-deep">S. Petit</span>
        <span className="mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.24em] text-cuivre sm:block">Plombier · Alésia, Paris 14e</span>
      </span>
    </span>
  );
}
