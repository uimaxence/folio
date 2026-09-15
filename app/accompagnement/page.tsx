import type { Metadata } from "next";
import { JsonLd } from "../components/json-ld";
import { Acc } from "../components/ui";
import { Audit } from "../sections/accompagnement/audit";
import { Compris } from "../sections/accompagnement/compris";
import { Engagements } from "../sections/accompagnement/engagements";
import { HeroAccompagnement } from "../sections/accompagnement/hero";
import { Ia } from "../sections/accompagnement/ia";
import { Levier } from "../sections/accompagnement/levier";
import { Methode } from "../sections/accompagnement/methode";
import { Mois } from "../sections/accompagnement/mois";
import { Prix } from "../sections/accompagnement/prix";
import { FaqSection } from "../sections/faq-section";
import { faqAccompagnement } from "@/lib/faq";
import { faqPage } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Accompagnement référencement local, à partir de ${site.tarifs.accompagnement} € par mois`,
  description:
    "Référencement de ton site (SEO), visibilité dans les IA (GEO), fiche Google et avis, gérés par une seule personne chaque mois. Audit, contenus, technique, hébergement compris. Engagement de 9 mois, un rapport d'une page.",
  alternates: { canonical: "/accompagnement" },
  openGraph: {
    title: "Être trouvé sur Google, puis être appelé.",
    description:
      "Accompagnement mensuel de référencement local pour artisans, commerçants et indépendants. À partir de 90 € par mois.",
    url: "/accompagnement",
  },
};

export default function Accompagnement() {
  return (
    <>
      <JsonLd data={faqPage(faqAccompagnement)} />
      <HeroAccompagnement />
      <Levier />
      <Methode />
      <Compris />
      <Prix />
      <Mois />
      <Engagements />
      <Ia />
      <FaqSection
        titre={
          <>
            Les questions qu’on me pose sur l’<Acc>accompagnement</Acc>.
          </>
        }
        items={faqAccompagnement}
      />
      <Audit />
    </>
  );
}
