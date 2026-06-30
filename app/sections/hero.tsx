"use client";

import { useEffect, useRef, useState } from "react";
import { Sticker } from "../components/sticker";

const FILL_TEXT =
  "APPELLE MAXENCE ET JE M’OCCUPE DE LA CRÉATION, DU DÉVELOPPEMENT, DU RÉFÉRENCEMENT ET DE LA MISE EN LIGNE DE VOTRE SITE WEB.";
const WORDS = FILL_TEXT.split(" ");
const ACCENT_WORDS = new Set(["VOTRE", "SITE", "WEB."]);

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
      className="relative h-[200vh]"
      aria-label="Présentation"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-20 lg:px-32 pt-16 md:pt-8">
        <Sticker
          name="creativite"
          size={120}
          rotate={12}
          className="hidden md:block absolute top-20 right-8 lg:right-20"
        />
        <Sticker
          name="but"
          size={80}
          rotate={-10}
          className="hidden md:block absolute bottom-20 left-8 lg:left-20"
        />

        <h1 className="text-left text-[38px] sm:text-[46px] md:text-[62px] lg:text-[76px] leading-[1.02] font-bold tracking-tight max-w-[14ch] sm:max-w-[16ch] md:max-w-[16ch]">
          <span className="text-ink">BONJOUR, JE M&rsquo;</span>
          {WORDS.map((word, i) => {
            const N = WORDS.length;
            const slot = 1 / N;
            const wp = Math.min(1, Math.max(0, (progress - i * slot) / slot));
            const isAccent = ACCENT_WORDS.has(word);
            const target = isAccent
              ? "var(--color-terracotta)"
              : "var(--color-ink)";
            const color = `color-mix(in oklab, var(--color-ink-soft) ${
              (1 - wp) * 100
            }%, ${target})`;
            return (
              <span
                key={i}
                style={{ color, transition: "color 80ms linear" }}
              >
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
