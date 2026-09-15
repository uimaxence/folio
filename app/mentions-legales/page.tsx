import type { Metadata } from "next";
import { Conteneur, Section } from "../components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Éditeur, hébergement et données personnelles du site ${site.url}.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <Section pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h1 className="t-h2">Mentions légales.</h1>
        <div className="mt-10 max-w-[62ch] grid gap-8 t-corps">
          <section>
            <h2 className="t-h3">Éditeur</h2>
            <p className="mt-2 text-ink-2">
              {site.name}, entrepreneur individuel, {site.accroche}, basé à {site.ville}.
              {site.siren ? ` SIREN ${site.siren}.` : ""}
              <br />
              Contact&nbsp;:{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
                {site.email}
              </a>
            </p>
          </section>
          <section>
            <h2 className="t-h3">Hébergement</h2>
            <p className="mt-2 text-ink-2">
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis ·{" "}
              <a
                href="https://vercel.com"
                className="text-ink underline underline-offset-4"
                target="_blank"
                rel="noreferrer noopener"
              >
                vercel.com
              </a>
            </p>
          </section>
          <section>
            <h2 className="t-h3">Données personnelles</h2>
            <p className="mt-2 text-ink-2">
              Ce site ne dépose aucun cookie de suivi et ne contient aucun formulaire. La prise de
              rendez-vous se fait sur Cal.com, un service externe qui a sa propre politique de
              confidentialité. Les e-mails reçus servent uniquement à te répondre. Tu peux en demander
              la suppression par simple mail.
            </p>
          </section>
          <section>
            <h2 className="t-h3">Propriété intellectuelle</h2>
            <p className="mt-2 text-ink-2">
              Les textes, le design et le code de ce site sont la propriété de {site.name}. Les
              captures d’écran des sites clients sont reproduites avec leur accord et restent la
              propriété de leurs auteurs respectifs.
            </p>
          </section>
        </div>
      </Conteneur>
    </Section>
  );
}
