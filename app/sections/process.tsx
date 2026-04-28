"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "CADRAGE DU PROJET",
    body: "30 minutes en visio pour identifier vos objectifs, votre cible et le périmètre. Vous repartez avec une recommandation claire et un ordre d'idée du budget.",
    cta: { label: "RÉSERVER UN APPEL", href: "#contact" },
  },
  {
    n: "02",
    title: "DESIGN & MAQUETTES",
    body: "Je conçois les maquettes sur Figma. Aller-retours rapides jusqu'à validation finale. Vous voyez exactement à quoi ressemblera le site avant que la première ligne de code soit écrite.",
    cta: { label: "VOIR LES RÉALISATIONS", href: "#realisations" },
  },
  {
    n: "03",
    title: "DÉVELOPPEMENT",
    body: "Intégration et développement à la main. Performance, SEO et accessibilité dès le premier commit. Pas de page builder, pas de template, du code propre que je maîtrise de bout en bout.",
    cta: { label: "VOIR LES RÉALISATIONS", href: "#realisations" },
  },
  {
    n: "04",
    title: "MISE EN LIGNE & SUIVI",
    body: "Déploiement, configuration des emails, analytics et suivi mensuel. Votre site reste vivant : ajouts de pages, optimisations, mises à jour. Je reste votre interlocuteur.",
    cta: { label: "RÉSERVER UN APPEL", href: "#contact" },
  },
];

export function Process() {
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

  const N = steps.length;
  const active = Math.min(N - 1, Math.floor(progress * N));
  const step = steps[active];

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${(N + 1) * 100}vh` }}
      aria-label="Le process en 4 étapes"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-32 lg:px-64 overflow-hidden">
        {/* Decorative arc */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="mt-[-30%] w-[140%] aspect-square rounded-full border border-rule/70" />
        </div>

        <div className="relative w-full max-w-3xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
              LE PROCESS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 ÉTAPES, RIEN DE PLUS.
            </h2>
          </div>

          {/* Progress rail */}
          <div className="relative max-w-2xl mx-auto mb-10 md:mb-14">
            <div className="relative h-px bg-rule">
              <div
                className="absolute left-0 top-0 h-px bg-orange will-change-[width]"
                style={{
                  width: `${Math.min(100, Math.max(0, progress * 100))}%`,
                }}
              />
            </div>
            <div className="absolute inset-x-0 -top-2 flex items-center justify-between">
              {steps.map((s, i) => {
                const isActive = i <= active;
                return (
                  <div
                    key={s.n}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      className={`block rounded-full transition-all duration-200 ${
                        i === active
                          ? "h-4 w-4 bg-orange ring-4 ring-canvas"
                          : isActive
                          ? "h-3 w-3 bg-orange"
                          : "h-3 w-3 bg-rule"
                      }`}
                    />
                    <span
                      className={`text-[14px] tracking-[0.14em] mt-1 transition-colors ${
                        i === active ? "text-ink" : "text-mute"
                      }`}
                    >
                      {s.n}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active step content (key = active to retrigger fade) */}
          <div
            key={active}
            className="relative max-w-xl mx-auto text-center bg-canvas-soft/70 border border-rule px-6 md:px-10 py-8 md:py-10 animate-[fadeUp_400ms_ease-out]"
          >
            <div className="text-[14px] tracking-[0.18em] text-orange mb-3">
              ÉTAPE {step.n}
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
              {step.title}
            </h3>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-ink/75 mb-6">
              {step.body}
            </p>
            <Link
              href={step.cta.href}
              className="inline-flex items-center bg-ink text-canvas px-5 py-3 text-[14px] tracking-[0.12em] hover:bg-ink/85 transition-colors"
            >
              {step.cta.label}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
