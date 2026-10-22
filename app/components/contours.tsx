/* ------------------------------------------------------------------
   Les courbes de niveau : des anneaux emboîtés, légèrement déformés,
   tracés en SVG à partir d'une graine. Composant serveur : le dessin est
   dans le HTML, le CSS le révèle lentement. Posé en calque sous un hero.
------------------------------------------------------------------- */

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function tracerContours(seed: number, cx: number, cy: number, n: number, pas: number): string[] {
  const R = rng(seed);
  const ph = [R() * 6.283, R() * 6.283, R() * 6.283];
  const chemins: string[] = [];
  for (let k = 1; k <= n; k++) {
    const r0 = 60 + k * pas;
    let d = "";
    for (let j = 0; j <= 72; j++) {
      const th = (j / 72) * 6.283;
      const rr =
        r0 *
        (1 +
          0.17 * Math.sin(3 * th + ph[0] + k * 0.09) +
          0.09 * Math.sin(5 * th + ph[1] - k * 0.06) +
          0.035 * Math.sin(11 * th + ph[2] + k * 0.03));
      d += `${j ? "L" : "M"}${Math.round(cx + rr * Math.cos(th) * 1.4)} ${Math.round(cy + rr * Math.sin(th) * 0.8)}`;
    }
    chemins.push(d + "Z");
  }
  return chemins;
}

export function Contours({
  seed = 3,
  cx = 1250,
  cy = 380,
  n = 14,
  pas = 46,
  doux = false,
}: {
  seed?: number;
  cx?: number;
  cy?: number;
  n?: number;
  pas?: number;
  /** Version plus discrète, pour une page intérieure. */
  doux?: boolean;
}) {
  const chemins = tracerContours(seed, cx, cy, n, pas);
  return (
    <div aria-hidden className={`calque calque-contours ${doux ? "calque-contours-doux" : ""}`}>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMaxYMin slice">
        {chemins.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    </div>
  );
}
