/** Badge discret : la maquette est privée et non référencée. */
export function MockupBadge() {
  return (
    <p className="pointer-events-none fixed bottom-4 right-3 z-[60] hidden border border-line bg-bg/80 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-fg-faint backdrop-blur md:block">
      Maquette Atelier Truelle
    </p>
  );
}
