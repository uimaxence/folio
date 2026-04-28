import { CalEmbed } from "../components/cal-embed";

const guarantees = [
  "Appel de 30 min, gratuit, sans engagement",
  "Vous repartez avec une recommandation claire",
  "Si on ne matche pas, je vous oriente vers quelqu'un",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32 bg-canvas-soft/40"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            ON FAIT CONNAISSANCE&nbsp;?
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-ink/75 max-w-2xl mx-auto leading-relaxed">
            Réservez un créneau ci-dessous. On parle de votre projet, je vous
            donne un avis honnête et un ordre d&rsquo;idée du budget. Pas de
            blabla commercial.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-[14px] text-ink/70">
          {guarantees.map((g) => (
            <li key={g} className="inline-flex items-center gap-2">
              <span aria-hidden className="text-accent">
                ✓
              </span>
              {g}
            </li>
          ))}
        </ul>

        <div className="bg-canvas border border-rule p-2 md:p-4">
          <CalEmbed />
        </div>

        <div className="mt-10 text-center text-[14px] tracking-[0.12em] text-mute">
          OU PAR EMAIL ·{" "}
          <a
            href="mailto:maxencecailleau.pro@gmail.com"
            className="text-ink hover:underline"
          >
            MAXENCECAILLEAU.PRO@GMAIL.COM
          </a>
        </div>
      </div>
    </section>
  );
}
