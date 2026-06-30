import { avis } from "@/lib/avis";
import { bgClass } from "@/lib/palette";
import { AnimatedCTA } from "../components/animated-cta";

function Stars({ note }: { note: number }) {
  const full = Math.max(0, Math.min(5, Math.round(note)));
  return (
    <span
      aria-label={`Note ${full} sur 5`}
      className="inline-flex gap-0.5 text-ink text-[15px] leading-none"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < full ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export function Avis() {
  return (
    <section
      id="avis"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
            AVIS CLIENTS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            ILS PARLENT <span className="text-terracotta">MIEUX QUE MOI.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {avis.map((a) => (
            <figure
              key={a.slug}
              className={`relative flex flex-col ${bgClass[a.color]} rounded-3xl p-7 md:p-8 gap-4 transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <Stars note={a.note} />
                <span aria-hidden className="text-[34px] leading-none text-ink/15 font-serif">
                  &ldquo;
                </span>
              </div>

              <blockquote className="text-[15px] leading-relaxed text-ink/85 flex-1">
                {a.texte}
              </blockquote>

              <figcaption className="mt-auto pt-4 border-t border-ink/10">
                <div className="text-[15px] font-bold tracking-tight">
                  {a.nom}
                </div>
                {a.projet && (
                  <div className="mt-1">
                    <AnimatedCTA
                      href={a.projet.href}
                      variant="ghost"
                      icon="arrow-up-right"
                    >
                      {a.projet.label.toUpperCase()}
                    </AnimatedCTA>
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 md:mt-12 text-center text-[13px] tracking-[0.14em] text-mute">
          AVIS PUBLIÉS SUR GOOGLE
        </p>
      </div>
    </section>
  );
}
