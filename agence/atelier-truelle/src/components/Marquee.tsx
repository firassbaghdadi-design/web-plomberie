export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="overflow-hidden border-y border-line bg-platre-light py-5" aria-hidden="true">
      <div className="marquee-track font-display text-xl font-bold text-ardoise/80 sm:text-2xl">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap pr-10">
            {item}
            <span className="h-2.5 w-2.5 rotate-45 bg-terre-action" />
          </span>
        ))}
      </div>
    </div>
  );
}
