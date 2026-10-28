"use client";

import { useEffect, useMemo, useRef } from "react";

/* ------------------------------------------------------------------
   Le massif du hero : trois couches de facettes dessinées en SVG,
   soleil rasant à droite, brume vers le fond, un sentier balisé devant.
   Le tracé est tiré d'une graine : le serveur et le navigateur dessinent
   la même chose. Au scroll, les trois couches avancent à trois vitesses
   (transform seulement). Les couleurs viennent des jetons : le même
   massif passe en nuit avec le reste de la page.
------------------------------------------------------------------- */

const W = 1600;
const H = 900;

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

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

type Couche = {
  k: number;
  /** Chaque facette : ses trois points, et son niveau d'ombre de -4 (ombre) à 4 (soleil), peint par une classe CSS. */
  facettes: { points: string; s: number }[];
  sentier?: { points: string; balises: [number, number][] };
};

type Dessin = { etoiles: { cx: number; cy: number; r: number; o: number }[]; couches: Couche[] };

function dessiner(seed: number): Dessin {
  const R = rng(seed);
  const etoiles = Array.from({ length: 36 }, () => ({
    cx: Math.round(R() * W),
    cy: Math.round(R() * H * 0.5),
    r: +(0.8 + R() * 1.6).toFixed(1),
    o: +(0.3 + R() * 0.7).toFixed(1),
  }));

  const def = [
    { base: 0.5, amp: 0.15, n: 9, rows: 3, k: 0.035 },
    { base: 0.6, amp: 0.17, n: 11, rows: 3, k: 0.08 },
    { base: 0.73, amp: 0.15, n: 13, rows: 3, k: 0.15, sentier: true },
  ];

  const couches: Couche[] = def.map((L) => {
    const seg = W / L.n;
    const p1 = R() * 6.283;
    const p2 = R() * 6.283;
    const p3 = R() * 6.283;
    const crete: [number, number][] = [];
    for (let i = 0; i <= L.n; i++) {
      const t = i / L.n;
      const x = i === 0 ? -80 : i === L.n ? W + 80 : i * seg + (R() - 0.5) * seg * 0.45;
      const prof =
        0.5 +
        0.5 * (Math.sin(t * 6.283 * 1.2 + p1) * 0.55 + Math.sin(t * 6.283 * 2.6 + p2) * 0.3 + Math.sin(t * 6.283 * 5.1 + p3) * 0.15) +
        (R() - 0.5) * 0.35;
      crete.push([x, H * (L.base - L.amp * prof)]);
    }
    const rangs: [number, number][][] = [crete];
    for (let r = 1; r <= L.rows; r++) {
      const f = r / L.rows;
      rangs.push(
        crete.map(([x, y], i) => {
          const bord = i === 0 || i === L.n;
          const yy = y + (H + 160 - y) * f + (r < L.rows ? ((R() - 0.5) * (H - y) * 0.35) / L.rows : 0);
          return [bord ? x : x + (R() - 0.5) * seg * 0.3, yy];
        }),
      );
    }
    const facettes: Couche["facettes"] = [];
    for (let r = 0; r < L.rows; r++) {
      for (let i = 0; i < L.n; i++) {
        const a = rangs[r][i];
        const b = rangs[r][i + 1];
        const c = rangs[r + 1][i];
        const d = rangs[r + 1][i + 1];
        const tris = R() < 0.5 ? [[a, b, c], [b, d, c]] : [[a, b, d], [a, d, c]];
        for (const tri of tris) {
          /* la facette est éclairée si son arête haute descend vers la droite, là où est le soleil */
          const srt = [...tri].sort((u, w) => u[1] - w[1]);
          const dx = srt[1][0] - srt[0][0];
          const dy = srt[1][1] - srt[0][1];
          const lit = (dx >= 0 ? 1 : -1) * clamp((Math.abs(dy) / Math.max(Math.abs(dx), 30)) * 1.5, 0, 1);
          const v = clamp(lit * 0.62 + (R() - 0.5) * 0.42 - r * 0.12, -1, 1);
          facettes.push({ points: tri.map((p) => `${Math.round(p[0])},${Math.round(p[1])}`).join(" "), s: Math.round(v * 4) });
        }
      }
    }
    let sentier: Couche["sentier"];
    if (L.sentier) {
      const pts = crete.slice(1, L.n).map(([x, y]) => [Math.round(x), Math.round(y + 26)] as [number, number]);
      sentier = {
        points: pts.map((p) => `${p[0]},${p[1]}`).join(" "),
        balises: pts.filter((_, i) => i % 3 === 1),
      };
    }
    return { k: L.k, facettes, sentier };
  });

  return { etoiles, couches };
}

export function Massif({ seed = 7, className = "" }: { seed?: number; className?: string }) {
  const dessin = useMemo(() => dessiner(seed), [seed]);
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = `massif-${seed}`;

  /* parallaxe : chaque couche monte à sa vitesse pendant que le hero défile */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const couches = Array.from(svg.querySelectorAll<SVGGElement>("g.couche"));
    let attente = false;
    let dernier = -1;
    const tick = () => {
      attente = false;
      const limite = svg.getBoundingClientRect().bottom + window.scrollY;
      const y = clamp(window.scrollY, 0, limite);
      if (y === dernier) return;
      dernier = y;
      for (const g of couches) {
        const k = parseFloat(g.dataset.k ?? "0");
        g.style.transform = `translate3d(0, ${(-y * k).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!attente) {
        attente = true;
        requestAnimationFrame(tick);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`massif ${className}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${uid}-ciel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--sky-1)", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "var(--sky-1)", stopOpacity: 0.85 }} />
          <stop offset="1" style={{ stopColor: "var(--sky-2)" }} />
        </linearGradient>
        <radialGradient id={`${uid}-soleil`}>
          <stop offset="0" style={{ stopColor: "var(--sun)", stopOpacity: 0.9 }} />
          <stop offset="0.45" style={{ stopColor: "var(--sun)", stopOpacity: 0.32 }} />
          <stop offset="1" style={{ stopColor: "var(--sun)", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#${uid}-ciel)`} />
      <g style={{ opacity: "var(--stars)" }}>
        {dessin.etoiles.map((e, i) => (
          <circle key={i} cx={e.cx} cy={e.cy} r={e.r} opacity={e.o} style={{ fill: "var(--fg)" }} />
        ))}
      </g>
      <circle cx="1190" cy="430" r="300" fill={`url(#${uid}-soleil)`} />
      {dessin.couches.map((c, ci) => (
        <g key={ci} className={`couche c${ci}`} data-k={c.k}>
          {c.facettes.map((f, i) => (
            <polygon key={i} points={f.points} className={`s${f.s < 0 ? "m" + -f.s : f.s}`} />
          ))}
          {c.sentier && (
            <>
              <polyline
                points={c.sentier.points}
                fill="none"
                strokeWidth={3}
                strokeDasharray="8 11"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.85}
                style={{ stroke: "var(--trail)" }}
              />
              {c.sentier.balises.map(([x, y], i) => (
                <rect
                  key={i}
                  x={x - 7}
                  y={y - 7}
                  width={14}
                  height={14}
                  transform={`rotate(45 ${x} ${y})`}
                  style={{ fill: "var(--marker)" }}
                />
              ))}
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
