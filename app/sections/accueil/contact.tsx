import { Btn, Conteneur, Entoure, Etiquette, Section } from "../../components/ui";
import { mailtoHref, site } from "@/lib/site";

/** La section sombre de la page, la seule. Le footer la prolonge. */
export function Contact() {
  return (
    <Section id="contact" sombre pad={false} className="pt-20 pb-16 md:pt-28 md:pb-24">
      <Conteneur className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h2 className="t-h2">
            On fait <Entoure>connaissance</Entoure>&nbsp;?
          </h2>
          <p className="t-intro mt-6 max-w-[40ch]">
            Réserve un créneau. On parle de ton projet, je te donne un avis honnête et un ordre de
            prix.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-col items-start gap-6 lg:pl-8">
          <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
            <li>
              <Etiquette point={1}>30 min</Etiquette>
            </li>
            <li>
              <Etiquette point={2}>Gratuit</Etiquette>
            </li>
            <li>
              <Etiquette point={3}>Sans engagement</Etiquette>
            </li>
          </ul>
          <Btn href={site.calUrl} external>
            Réserver un appel
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
