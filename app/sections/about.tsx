"use client";

import { useEffect, useState } from "react";
import { Sticker } from "../components/sticker";
import { AnimatedCTA } from "../components/animated-cta";

const philosophie = [
  {
    n: "01",
    title: "Un seul interlocuteur",
    body: "Vous parlez directement à la personne qui dessine, code et met en ligne. Pas de chef de projet, pas d'aller-retours qui durent 3 semaines.",
    color: "bg-butter",
  },
  {
    n: "02",
    title: "Livré en 2 semaines",
    body: "Un site d'artisan ou d'indépendant, c'est 2 semaines maximum. Pas 6 mois. Le rythme de travail est posé dès le premier appel.",
    color: "bg-sage",
  },
  {
    n: "03",
    title: "Design ET code",
    body: "Je dessine sur Figma puis je code à la main. Pas de template, pas de page builder. Le résultat : un site qui charge en moins d'une seconde.",
    color: "bg-blush",
  },
  {
    n: "04",
    title: "SEO inclus, pas en option",
    body: "Référencement classique + GEO (Perplexity, ChatGPT, Google AI). Vos clients vous trouvent, peu importe l'outil qu'ils utilisent.",
    color: "bg-sky",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Sanity CMS",
  "Vercel",
  "SEO technique",
  "GEO / IA search",
  "Analytics RGPD",
];

const STEP_DURATION_MS = 4500;

export function About() {
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    setElapsed(0);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = (now - start) / STEP_DURATION_MS;
      if (t >= 1) {
        setActive((a) => (a + 1) % philosophie.length);
      } else {
        setElapsed(t);
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section
      id="about"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
            QUI SUIS-JE ?
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            DESIGNER CODER, EN SOLO,
            <br />
            <span className="text-terracotta">DEPUIS ANGERS.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Profile card — colored frame */}
          <div className="md:col-span-5">
            <div className="relative bg-butter rounded-3xl p-6 md:p-7 group">
              <Sticker
                name="dactylographie"
                size={100}
                rotate={14}
                className="absolute z-20 -top-8 -right-6 md:-right-8 transition-transform duration-300 group-hover:rotate-0"
              />
              <div className="relative aspect-[4/5] bg-paper rounded-2xl mb-5 flex items-center justify-center overflow-hidden">
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center text-[80px] md:text-[120px] font-bold tracking-tight text-ink/15 select-none"
                >
                  MC
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/maxence.webp"
                  alt="Portrait de Maxence Cailleau"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                  className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                  Maxence Cailleau
                </h3>
                <span className="text-[13px] tracking-[0.12em] text-ink/60">
                  25 ANS
                </span>
              </div>
              <p className="text-[15px] text-ink/75 mb-5">
                Designer coder indépendant. Création de sites web sur-mesure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-[13px] bg-paper rounded-full px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Angers, FR
                </span>
                <span className="inline-flex items-center text-[13px] bg-paper rounded-full px-3 py-1">
                  Remote partout
                </span>
                <span className="inline-flex items-center text-[13px] bg-paper rounded-full px-3 py-1">
                  FR / EN
                </span>
              </div>
            </div>
          </div>

          {/* Bio + philosophy */}
          <div className="md:col-span-7 flex flex-col">
            <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-ink/80 mb-8">
              <p className="text-[18px] md:text-[20px] text-ink leading-snug font-medium">
                «&nbsp;Un site, ce n&rsquo;est pas une plaquette en ligne.
                C&rsquo;est un commercial qui bosse 24h/24, autant qu&rsquo;il
                soit bien fait.&nbsp;»
              </p>
              <p>
                Je conçois des sites pour des artisans, des indépendants et des
                petites équipes qui en ont marre des agences à 15 000&nbsp;€ qui
                prennent 6 mois pour livrer un Wordpress lent.
              </p>
              <p>
                L&rsquo;approche est simple&nbsp;: je m&rsquo;occupe de tout, du
                premier pixel au suivi mensuel, et vous gardez votre temps pour
                votre vrai métier.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatedCTA href="#contact" variant="primary" icon="calendar">
                RÉSERVER UN APPEL
              </AnimatedCTA>
              <AnimatedCTA
                href="https://www.linkedin.com/in/maxence-cailleau-814871197/"
                variant="secondary"
                icon="arrow-up-right"
                external
              >
                VOIR LE LINKEDIN
              </AnimatedCTA>
            </div>
          </div>
        </div>

        {/* Interactive philosophy */}
        <div className="pt-16 md:pt-24 pb-12 md:pb-20">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-8">
            MA PHILOSOPHIE
          </p>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            <ul className="md:col-span-5 flex flex-col gap-2">
              {philosophie.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.n}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className="relative w-full text-left rounded-2xl bg-paper overflow-hidden transition-colors hover:bg-canvas-soft"
                    >
                      {isActive && (
                        <span
                          aria-hidden
                          className={`absolute inset-y-0 left-0 ${p.color}`}
                          style={{ width: `${elapsed * 100}%` }}
                        />
                      )}
                      <span
                        className={`relative flex items-baseline gap-4 px-5 py-4 md:py-5 ${
                          isActive ? "text-ink" : "text-ink/65"
                        }`}
                      >
                        <span
                          className={`text-[13px] tracking-[0.14em] ${
                            isActive ? "text-ink/70" : "text-mute"
                          }`}
                        >
                          {p.n}
                        </span>
                        <span className="text-lg md:text-xl font-medium">
                          {p.title}
                        </span>
                        <span
                          aria-hidden
                          className={`ml-auto transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          →
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="md:col-span-7 md:pl-2 flex">
              <div
                className={`flex-1 ${philosophie[active].color} rounded-3xl p-7 md:p-10 flex flex-col`}
              >
                <div className="text-[13px] tracking-[0.16em] text-ink/55 mb-3">
                  POINT {philosophie[active].n}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {philosophie[active].title}
                </h4>
                <p className="text-[16px] leading-relaxed text-ink/80">
                  {philosophie[active].body}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-12 md:mt-16 -mx-6 md:-mx-32 lg:-mx-64 bg-paper border-y border-rule overflow-hidden">
          <div className="flex gap-8 py-4 animate-marquee whitespace-nowrap text-[15px] tracking-[0.1em]">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-8 text-ink/70"
              >
                {s}
                <span aria-hidden className="text-terracotta">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
