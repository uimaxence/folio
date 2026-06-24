import Link from "next/link";
import { avis } from "@/lib/avis";

function Stars({ note }: { note: number }) {
  const full = Math.max(0, Math.min(5, Math.round(note)));
  return (
    <span
      aria-label={`Note ${full} sur 5`}
      className="inline-flex gap-0.5 text-orange text-[15px] leading-none"
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
            ILS PARLENT MIEUX QUE MOI.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {avis.map((a) => (
            <figure
              key={a.slug}
              className="relative flex flex-col bg-canvas-soft/70 border border-rule p-6 md:p-7 gap-4"
            >
              <Stars note={a.note} />

              <blockquote className="text-[15px] leading-relaxed text-ink/80">
                <span className="text-mute">«&nbsp;</span>
                {a.texte}
                <span className="text-mute">&nbsp;»</span>
              </blockquote>

              <figcaption className="mt-auto pt-4 border-t border-rule">
                <div className="text-[15px] font-bold tracking-tight">
                  {a.nom}
                </div>
                {a.projet && (
                  <div className="text-[14px] tracking-[0.12em] text-mute mt-1">
                    <Link
                      href={a.projet.href}
                      className="hover:text-ink transition-colors"
                    >
                      {a.projet.label.toUpperCase()} ↗
                    </Link>
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 md:mt-12 text-center text-[14px] tracking-[0.14em] text-mute">
          AVIS PUBLIÉS SUR GOOGLE
        </p>
      </div>
    </section>
  );
}
