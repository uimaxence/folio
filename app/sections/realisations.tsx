import Link from "next/link";
import { projects, projectShot } from "@/lib/projects";
import { bgClass } from "@/lib/palette";
import { AnimatedCTA } from "../components/animated-cta";

export function Realisations() {
  return (
    <section
      id="realisations"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
            RÉALISATIONS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            DES SITES QUI RAMÈNENT <span className="text-terracotta">DES CLIENTS,</span> PAS DES COMPLIMENTS.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.slug}
              className={`group relative ${bgClass[p.color]} rounded-3xl p-5 md:p-6 flex flex-col transition-transform hover:-translate-y-1`}
            >
              {/* Category chip */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-paper rounded-full px-3 py-1 text-ink/75 uppercase">
                  {p.category}
                </span>
                <span className="text-[12px] tracking-[0.12em] text-ink/55">
                  {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Screenshot inset card */}
              <Link
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Voir ${p.name} en ligne`}
                className="relative block aspect-[16/10] bg-paper rounded-2xl overflow-hidden mb-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectShot(p.url)}
                  alt={`Aperçu de ${p.name}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="flex flex-col flex-1 gap-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <span className="text-[13px] tracking-[0.12em] text-ink/55 shrink-0">
                    {p.annee}
                  </span>
                </div>

                <p className="text-[14.5px] leading-relaxed text-ink/80">
                  {p.tagline}
                </p>

                <ul className="flex flex-wrap gap-1.5 mt-1">
                  {p.technos.map((t) => (
                    <li
                      key={t}
                      className="text-[12.5px] bg-paper/80 rounded-full px-2.5 py-0.5 text-ink/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  <span className="text-[12.5px] tracking-[0.12em] text-ink/55">
                    LIVRÉ EN {p.duree.toUpperCase()}
                  </span>
                  <AnimatedCTA
                    href={p.url}
                    variant="ghost"
                    icon="arrow-up-right"
                    external
                  >
                    VOIR LE SITE
                  </AnimatedCTA>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-20 text-center">
          <p className="text-[15px] text-ink/70 mb-4">
            Un projet en tête ? Parlons-en.
          </p>
          <AnimatedCTA href="#contact" variant="primary" icon="calendar">
            RÉSERVER UN APPEL
          </AnimatedCTA>
        </div>
      </div>
    </section>
  );
}
