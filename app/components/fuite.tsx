"use client";

import { useEffect, useState } from "react";

/** Le voile de transition de page : couleur de fond avec une fuite de lumière, qui s'efface en 400 ms.
    Il est retiré du DOM à la fin de l'animation, et au plus tard après 700 ms si l'animation ne joue pas. */
export function Fuite() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 700);
    return () => window.clearTimeout(t);
  }, []);
  if (!visible) return null;
  return <div aria-hidden className="fuite" onAnimationEnd={() => setVisible(false)} />;
}
