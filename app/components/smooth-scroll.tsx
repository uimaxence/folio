"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Défilement lissé, léger : la page glisse, elle ne s'accroche pas section par section.
    Les ancres passent par Lenis (décalées de la hauteur de l'en-tête), PageDown et End restent natifs.
    Avec « réduire les animations », Lenis suit le doigt sans lissage et saute aux ancres. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.11,
      autoRaf: true,
      anchors: { offset: -88 },
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
