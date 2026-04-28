"use client";

import Link from "next/link";
import { useState } from "react";

const philosophie = [
  {
    n: "01",
    title: "Un seul interlocuteur",
    body: "Vous parlez directement à la personne qui dessine, code et met en ligne. Pas de chef de projet, pas d'aller-retours qui durent 3 semaines.",
  },
  {
    n: "02",
    title: "Livré en 2 semaines",
    body: "Un site d'artisan ou d'indépendant, c'est 2 semaines maximum. Pas 6 mois. Le rythme de travail est posé dès le premier appel.",
  },
  {
    n: "03",
    title: "Design ET code",
    body: "Je dessine sur Figma puis je code à la main. Pas de template, pas de page builder. Le résultat : un site qui charge en moins d'une seconde.",
  },
  {
    n: "04",
    title: "SEO inclus, pas en option",
    body: "Référencement classique + GEO (Perplexity, ChatGPT, Google AI). Vos clients vous trouvent, peu importe l'outil qu'ils utilisent.",
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

export function About() {
  const [active, setActive] = useState(0);

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
            <span className="text-mute">DEPUIS ANGERS.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Profile card */}
          <div className="md:col-span-5">
            <div className="relative bg-canvas-soft border border-rule p-6 md:p-8 group">
              <div className="relative aspect-[4/5] bg-canvas border border-rule mb-5 flex items-center justify-center overflow-hidden">
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
                <span className="text-[14px] tracking-[0.14em] text-mute">
                  25 ANS
                </span>
              </div>
              <p className="text-[15px] text-ink/70 mb-5">
                Designer coder indépendant. Création de sites web sur-mesure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-[14px] tracking-[0.05em] border border-rule bg-canvas px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Angers, FR
                </span>
                <span className="inline-flex items-center text-[14px] tracking-[0.05em] border border-rule bg-canvas px-2.5 py-1">
                  Remote partout
                </span>
                <span className="inline-flex items-center text-[14px] tracking-[0.05em] border border-rule bg-canvas px-2.5 py-1">
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
              <Link
                href="#contact"
                className="inline-flex items-center bg-ink text-canvas px-5 py-3 text-[14px] tracking-[0.12em] hover:bg-ink/85 transition-colors"
              >
                RÉSERVER UN APPEL
              </Link>
              <a
                href="https://www.linkedin.com/in/maxence-cailleau-814871197/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center border border-ink px-5 py-3 text-[14px] tracking-[0.12em] hover:bg-ink hover:text-canvas transition-colors"
              >
                VOIR LE LINKEDIN ↗
              </a>
            </div>
          </div>
        </div>

        {/* Interactive philosophy */}
        <div className="border-t border-rule pt-24 md:pt-32 pb-12 md:pb-20">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-8">
            MA PHILOSOPHIE
          </p>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            <ul className="md:col-span-5 divide-y divide-rule border-y border-rule flex flex-col">
              {philosophie.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.n} className="flex-1">
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className="w-full h-full text-left py-5 md:py-6 flex items-baseline gap-4 transition-colors group"
                    >
                      <span
                        className={`text-[14px] tracking-[0.16em] transition-colors ${
                          isActive ? "text-orange" : "text-mute"
                        }`}
                      >
                        {p.n}
                      </span>
                      <span
                        className={`text-lg md:text-xl font-medium transition-all ${
                          isActive
                            ? "text-ink translate-x-1"
                            : "text-ink/55 group-hover:text-ink"
                        }`}
                      >
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
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="md:col-span-7 md:pl-6 flex">
              <div className="flex-1 bg-canvas-soft border border-rule p-6 md:p-10 flex flex-col">
                <div className="text-[14px] tracking-[0.18em] text-mute mb-3">
                  POINT {philosophie[active].n}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {philosophie[active].title}
                </h4>
                <p className="text-[16px] leading-relaxed text-ink/75">
                  {philosophie[active].body}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-16 md:mt-24 -mx-6 md:-mx-32 lg:-mx-64 border-y border-rule overflow-hidden">
          <div className="flex gap-8 py-4 animate-marquee whitespace-nowrap text-[15px] tracking-[0.14em]">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-8 text-ink/70"
              >
                {s}
                <span aria-hidden className="text-mute">
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
