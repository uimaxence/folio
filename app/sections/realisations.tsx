import Link from "next/link";
import { projects, projectShot } from "@/lib/projects";

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
            DES SITES QUI RAMÈNENT DES CLIENTS, PAS DES COMPLIMENTS.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, idx) => (
            <article
              key={p.slug}
              className="group relative bg-canvas border border-rule flex flex-col overflow-hidden"
            >
              <Link
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Voir ${p.name} en ligne`}
                className="relative block aspect-[16/10] bg-canvas-soft overflow-hidden border-b border-rule"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectShot(p.url)}
                  alt={`Aperçu de ${p.name}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 text-[14px] tracking-[0.18em] text-ink/70 bg-canvas/80 backdrop-blur px-2 py-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </Link>

              <div className="flex flex-col flex-1 p-6 md:p-7 gap-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <span className="text-[14px] tracking-[0.14em] text-mute shrink-0">
                    {p.annee}
                  </span>
                </div>

                <p className="text-[15px] leading-relaxed text-ink/75">
                  {p.tagline}
                </p>

                <div className="text-[14px] text-mute">
                  <span className="text-ink/55">Cible :</span> {p.cible}
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {p.technos.map((t) => (
                    <li
                      key={t}
                      className="text-[14px] border border-rule px-2.5 py-1 text-ink/75"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-rule flex items-center justify-between gap-3">
                  <span className="text-[14px] tracking-[0.14em] text-mute">
                    LIVRÉ EN {p.duree.toUpperCase()}
                  </span>
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center text-[14px] tracking-[0.12em] hover:text-ink/60 transition-colors"
                  >
                    VOIR LE SITE ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-20 text-center">
          <p className="text-[15px] text-ink/70 mb-4">
            Un projet en tête ? Parlons-en.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-ink text-canvas px-5 py-3 text-[14px] tracking-[0.14em] hover:bg-ink/85 transition-colors"
          >
            RÉSERVER UN APPEL
          </Link>
        </div>
      </div>
    </section>
  );
}
