"use client";

import { useEffect, useRef } from "react";

const GLYPHES = "0123456789#%&/+=<>_-[]{}|*:;~^";

/** Le texte passe par des glyphes mono pendant un demi-seconde avant de se décoder, de gauche à droite.
    Le vrai texte est dans le HTML dès le départ. Déclenché au survol de l'élément (ou de son hôte
    `data-scr-host`) et, si `onView`, une fois à l'arrivée dans l'écran. Rien avec « réduire les animations ». */
export function Scramble({
  children,
  onView = false,
  duree = 520,
  className = "",
}: {
  children: string;
  onView?: boolean;
  duree?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const texte = children;
    let raf = 0;

    const jouer = () => {
      if (raf) cancelAnimationFrame(raf);
      const largeur = el.getBoundingClientRect().width;
      el.style.display = "inline-block";
      el.style.minWidth = `${largeur}px`;
      const t0 = performance.now();
      const n = texte.length;
      const pas = (now: number) => {
        const p = Math.min(1, (now - t0) / duree);
        let out = "";
        for (let i = 0; i < n; i++) {
          const c = texte[i];
          if (c === " " || c === " " || c === " ") {
            out += c;
            continue;
          }
          out += p >= 0.15 + 0.85 * (i / n) ? c : GLYPHES[(Math.random() * GLYPHES.length) | 0];
        }
        el.textContent = out;
        if (p < 1) {
          raf = requestAnimationFrame(pas);
        } else {
          el.textContent = texte;
          el.style.minWidth = "";
          el.style.display = "";
          raf = 0;
        }
      };
      raf = requestAnimationFrame(pas);
    };

    const hote = el.closest<HTMLElement>("[data-scr-host]") ?? el;
    hote.addEventListener("mouseenter", jouer);

    let io: IntersectionObserver | undefined;
    if (onView && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entrees) => {
          if (entrees.some((e) => e.isIntersecting)) {
            jouer();
            io?.disconnect();
          }
        },
        { threshold: 0.6 },
      );
      io.observe(el);
    }

    return () => {
      hote.removeEventListener("mouseenter", jouer);
      io?.disconnect();
      if (raf) cancelAnimationFrame(raf);
      el.textContent = texte;
    };
  }, [children, onView, duree]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
