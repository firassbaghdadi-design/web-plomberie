/**
 * Le 15e en un trait : immeubles en pierre et leurs toits brisés, la tour Eiffel voisine, les tours du Front de Seine.
 * Un fil à plomb tombe du sommet de la tour : la page d'accueil en tire son idée (« d'aplomb depuis 1943 »).
 * Schéma sans échelle, décoratif ; la légende textuelle est donnée à côté.
 */
export function Skyline() {
  const ground = 392;
  // Immeubles en pierre à toit brisé (x, largeur, hauteur de façade)
  const blocks: [number, number, number][] = [
    [0, 70, 118], [70, 92, 132], [162, 64, 124], [226, 88, 140], [314, 76, 128], [390, 96, 136], [486, 34, 120],
    [688, 58, 116], [746, 84, 128],
  ];
  const mansard = (x: number, w: number, h: number) => {
    const top = ground - h;
    return `M${x} ${ground} V${top} L${x + 7} ${top - 22} H${x + w - 7} L${x + w} ${top} V${ground}`;
  };
  // Tours du Front de Seine (x, largeur, hauteur)
  const towers: [number, number, number][] = [[872, 34, 168], [916, 28, 196], [956, 40, 176], [1008, 30, 206], [1050, 36, 184], [1098, 30, 160], [1140, 44, 142]];
  const cx = 600;
  return (
    <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" className="block h-[300px] w-full sm:h-auto" role="img" aria-label="Dessin au trait du quartier : immeubles parisiens, la tour Eiffel et les tours du Front de Seine ; un fil à plomb tombe du sommet de la tour">
      <g fill="none" stroke="#15171a" strokeOpacity=".32" strokeWidth="1" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
        {blocks.map(([x, w, h]) => (
          <g key={x}>
            <path d={mansard(x, w, h)} />
            <path d={`M${x + 10} ${ground - h - 22} v-10 h8 v10 M${x + w - 22} ${ground - h - 22} v-8 h7 v8`} />
            {Array.from({ length: Math.floor((h - 24) / 26) }).map((_, i) => (
              <path key={i} d={`M${x + 4} ${ground - 26 - i * 26} H${x + w - 4}`} strokeOpacity=".35" />
            ))}
          </g>
        ))}
        {towers.map(([x, w, h]) => (
          <g key={x}>
            <path d={`M${x} ${ground} V${ground - h} H${x + w} V${ground}`} />
            <path d={`M${x + w / 2} ${ground - h + 6} V${ground - 6}`} strokeOpacity=".3" />
          </g>
        ))}
        {/* La tour Eiffel */}
        <g>
          <path d={`M${cx - 78} ${ground} C${cx - 50} ${ground - 120} ${cx - 18} ${ground - 230} ${cx - 7} ${ground - 300} L${cx - 3} ${ground - 352}`} />
          <path d={`M${cx + 78} ${ground} C${cx + 50} ${ground - 120} ${cx + 18} ${ground - 230} ${cx + 7} ${ground - 300} L${cx + 3} ${ground - 352}`} />
          <path d={`M${cx - 52} ${ground} Q${cx} ${ground - 92} ${cx + 52} ${ground}`} />
          <path d={`M${cx - 50} ${ground - 96} H${cx + 50} M${cx - 47} ${ground - 104} H${cx + 47}`} />
          <path d={`M${cx - 26} ${ground - 200} H${cx + 26} M${cx - 24} ${ground - 207} H${cx + 24}`} />
          <path d={`M${cx - 9} ${ground - 300} H${cx + 9}`} />
          <path d={`M${cx - 3} ${ground - 352} L${cx} ${ground - 366} L${cx + 3} ${ground - 352} Z M${cx} ${ground - 366} V${ground - 380}`} />
          <path d={`M${cx - 44} ${ground - 104} L${cx - 16} ${ground - 200} M${cx + 44} ${ground - 104} L${cx + 16} ${ground - 200} M${cx - 34} ${ground - 104} L${cx + 20} ${ground - 200} M${cx + 34} ${ground - 104} L${cx - 20} ${ground - 200}`} strokeOpacity=".4" />
        </g>
        <path d={`M0 ${ground} H1200`} strokeOpacity=".6" />
      </g>
      {/* Le fil à plomb, du sommet de la tour jusqu'au sol */}
      <g className="sky-drop">
        <path d={`M${cx} ${ground - 380} V${ground - 26}`} stroke="rgb(var(--accent))" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d={`M${cx - 5} ${ground - 26} H${cx + 5} V${ground - 23} Q${cx + 5} ${ground - 20} ${cx + 4} ${ground - 18} L${cx} ${ground - 4} L${cx - 4} ${ground - 18} Q${cx - 5} ${ground - 20} ${cx - 5} ${ground - 23} Z`} fill="rgb(var(--accent))" />
      </g>
    </svg>
  );
}
