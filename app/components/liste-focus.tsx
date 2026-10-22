"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Une liste qui met en focus un seul élément à la fois : celui qui passe au milieu de l'écran.
    Les enfants portent `data-item`. Sans script, tout reste visible. */
export function ListeFocus({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-item]"));
    if (items.length < 2) return;
    root.dataset.listeFocus = "on";

    let attente = false;
    const mesurer = () => {
      attente = false;
      const centre = window.innerHeight * 0.45;
      let meilleur = items[0];
      let distance = Infinity;
      for (const it of items) {
        const r = it.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - centre);
        if (d < distance) {
          distance = d;
          meilleur = it;
        }
      }
      for (const it of items) it.dataset.focus = it === meilleur ? "true" : "false";
    };
    const demander = () => {
      if (!attente) {
        attente = true;
        requestAnimationFrame(mesurer);
      }
    };
    window.addEventListener("scroll", demander, { passive: true });
    window.addEventListener("resize", demander);
    mesurer();
    return () => {
      window.removeEventListener("scroll", demander);
      window.removeEventListener("resize", demander);
      delete root.dataset.listeFocus;
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Composant = Tag as any;
  return (
    <Composant ref={ref} className={className}>
      {children}
    </Composant>
  );
}
