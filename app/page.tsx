import type { Metadata } from "next";
import { JsonLd } from "./components/json-ld";
import { Acc } from "./components/ui";
import { Apres } from "./sections/accueil/apres";
import { Avis } from "./sections/accueil/avis";
import { Comparaison } from "./sections/accueil/comparaison";
import { Contact } from "./sections/accueil/contact";
import { Hero } from "./sections/accueil/hero";
import { PourToi } from "./sections/accueil/pour-toi";
import { Probleme } from "./sections/accueil/probleme";
import { Process } from "./sections/accueil/process";
import { Qui } from "./sections/accueil/qui";
import { Realisations } from "./sections/accueil/realisations";
import { Services } from "./sections/accueil/services";
import { Tarifs } from "./sections/accueil/tarifs";
import { FaqSection } from "./sections/faq-section";
import { faqAccueil } from "@/lib/faq";
import { faqPage, localBusiness } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Création de site et référencement local à ${site.ville} · ${site.name}` },
  description:
    "Création ou refonte : je dessine, je code et je mets en ligne des sites pour artisans, commerçants et indépendants, puis je m'occupe de ta place sur Google chaque mois. Une seule personne. Basé à Angers, à distance partout en France.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Des sites que tes clients trouvent, puis appellent.",
    description:
      "Site sur mesure, référencement local, fiche Google, maintenance. Une seule personne, du premier pixel au rapport mensuel. À partir de 900 €.",
    url: "/",
  },
};

/* Le déroulé de la page : le problème, l'approche, l'offre, pour qui, les étapes, qui je suis, les preuves, le prix, la FAQ, le contact. */
export default function Accueil() {
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={faqPage(faqAccueil)} />
      <Hero />
      <Apres />
      <Probleme />
      <Comparaison />
      <Services />
      <PourToi />
      <Process />
      <Qui />
      <Realisations />
      <Avis />
      <Tarifs />
      <FaqSection
        titre={
          <>
            Les questions qu’on me pose <Acc>avant</Acc> de commencer.
          </>
        }
        items={faqAccueil}
      />
      <Contact />
    </>
  );
}
