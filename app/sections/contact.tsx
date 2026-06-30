import { CalEmbed } from "../components/cal-embed";
import { Sticker } from "../components/sticker";

const badges = ["30 MIN", "GRATUIT", "SANS ENGAGEMENT"];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-3 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="relative w-full max-w-6xl mx-auto bg-butter rounded-[28px] md:rounded-[36px] p-4 md:p-12 lg:p-16">
        <Sticker
          name="assistance"
          size={90}
          rotate={14}
          className="absolute z-10 -top-10 right-4 md:-top-12 md:-right-8"
        />

        <div className="text-center mb-12 md:mb-14">
          <p className="text-[14px] tracking-[0.18em] text-ink/55 mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            ON FAIT <span className="text-terracotta">CONNAISSANCE&nbsp;?</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Réservez un créneau ci-dessous. On parle de votre projet, je vous
            donne un avis honnête et un ordre d&rsquo;idée du budget. Pas de
            blabla commercial.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 mb-10">
          {badges.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-1.5 bg-paper rounded-full pl-2.5 pr-3.5 py-1.5 text-[12px] tracking-[0.14em] font-medium text-ink"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg
                  aria-hidden
                  viewBox="0 0 14 14"
                  className="w-2.5 h-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7l3 3 5-6" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="bg-paper rounded-2xl md:rounded-3xl p-1 md:p-4 overflow-hidden">
          <CalEmbed />
        </div>

        <div className="mt-10 text-center text-[13px] tracking-[0.1em] text-ink/65">
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
