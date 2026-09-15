import type { Metadata } from "next";
import { JsonLd } from "./components/json-ld";
import { Acc } from "./components/ui";
import { Avis } from "./sections/accueil/avis";
import { Contact } from "./sections/accueil/contact";
import { Hero } from "./sections/accueil/hero";
import { Process } from "./sections/accueil/process";
import { Realisations } from "./sections/accueil/realisations";
import { Reassurance } from "./sections/accueil/reassurance";
import { Services } from "./sections/accueil/services";
import { FaqSection } from "./sections/faq-section";
import { faqAccueil } from "@/lib/faq";
import { faqPage, localBusiness } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Création de site et référencement local à ${site.ville} · ${site.name}` },
  description:
    "Je dessine, je code et je mets en ligne des sites pour artisans, commerçants et indépendants. Ensuite je m'occupe de ta place sur Google, chaque mois. Basé à Angers, à distance partout en France.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Des sites que tes clients trouvent, puis appellent.",
    description:
      "Site sur mesure, refonte, référencement local, fiche Google. Une seule personne, du premier pixel à la mise en ligne. À partir de 900 €.",
    url: "/",
  },
};

export default function Accueil() {
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={faqPage(faqAccueil)} />
      <Hero />
      <Reassurance />
      <Services />
      <Realisations />
      <Avis />
      <Process />
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
