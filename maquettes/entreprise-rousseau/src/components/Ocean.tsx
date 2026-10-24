const wave = "M0 60 C 150 0 300 120 450 60 S 750 0 900 60 S 1200 120 1350 60 S 1650 0 1800 60 S 2100 120 2250 60 S 2550 0 2700 60 V120 H0Z";

const bubbles = Array.from({ length: 14 }, (_, i) => ({
  x: `${(i * 7.3 + 4) % 96}%`,
  s: `${10 + ((i * 11) % 26)}px`,
  d: `${11 + ((i * 3) % 9)}s`,
  delay: `${-((i * 1.7) % 12)}s`,
  drift: `${((i % 2 ? 1 : -1) * (20 + ((i * 13) % 50)))}px`,
}));

export function Bubbles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <span key={i} className="bubble" style={{ ["--x" as string]: b.x, ["--s" as string]: b.s, ["--d" as string]: b.d, ["--delay" as string]: b.delay, ["--drift" as string]: b.drift }} />
      ))}
    </div>
  );
}

export function Waves({ fill = "#ffffff" }: { fill?: string }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] overflow-hidden" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <svg key={i} className="wave-layer" viewBox="0 0 2700 120" preserveAspectRatio="none">
          <path d={wave} fill={fill} />
        </svg>
      ))}
    </div>
  );
}
