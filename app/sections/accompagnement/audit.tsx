import { Btn, Conteneur, Entoure, Section } from "../../components/ui";
import { mailtoHref, site } from "@/lib/site";

/** La section sombre de la page, la seule. Le footer la prolonge. */
export function Audit() {
  return (
    <Section id="contact" sombre pad={false} className="pt-20 pb-16 md:pt-28 md:pb-24">
      <Conteneur className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h2 className="t-h2">
            Un audit <Entoure>gratuit</Entoure>&nbsp;?
          </h2>
          <p className="t-intro mt-6 max-w-[46ch]">
            Je regarde ta fiche Google et ton site, et je te montre noir sur blanc ce qui te fait
            perdre des appels&nbsp;: dernière publication qui date, avis sans réponse, prestations
            invisibles sur Google, concurrents passés devant toi. Sans engagement, sans discours
            commercial.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col items-start gap-5 lg:pl-8">
          <Btn href={site.calUrl} external>
            Réserver mon audit gratuit
          </Btn>
          <p className="t-meta">
            ou par e-mail ·{" "}
            <a href={mailtoHref} className="text-ink underline underline-offset-4 decoration-1">
              {site.email}
            </a>
          </p>
        </div>
      </Conteneur>
    </Section>
  );
}
