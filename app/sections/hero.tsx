"use client";

import { useEffect, useRef, useState } from "react";

const FILL_TEXT =
  "APPELLE MAXENCE ET JE M’OCCUPE DE LA CRÉATION, DU DÉVELOPPEMENT, DU RÉFÉRENCEMENT ET DE LA MISE EN LIGNE DE VOTRE SITE WEB.";
const WORDS = FILL_TEXT.split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = Math.max(1, rect.height - window.innerHeight);
      const scrolled = Math.min(Math.max(-rect.top, 0), range);
      setProgress(scrolled / range);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[220vh]"
      aria-label="Présentation"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-32 lg:px-64 pt-24 md:pt-0">
        <h1 className="text-left text-[30px] sm:text-[36px] md:text-5xl lg:text-[58px] leading-[1.05] font-bold tracking-tight max-w-[18ch]">
          <span className="text-ink">BONJOUR, JE M&rsquo;</span>
          {WORDS.map((word, i) => {
            const N = WORDS.length;
            const slot = 1 / N;
            const wp = Math.min(
              1,
              Math.max(0, (progress - i * slot) / slot)
            );
            const color = `color-mix(in oklab, var(--color-ink-soft) ${
              (1 - wp) * 100
            }%, var(--color-ink))`;
            return (
              <span key={i} style={{ color, transition: "color 120ms linear" }}>
                {word}
                {i < N - 1 ? " " : ""}
              </span>
            );
          })}
        </h1>
      </div>
    </section>
  );
}
