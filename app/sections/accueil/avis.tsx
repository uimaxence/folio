import { AvisCards } from "../../components/avis-cards";
import { Acc, Conteneur, Repere, Section } from "../../components/ui";

export function Avis() {
  return (
    <Section id="avis" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <Repere n={9}>Avis</Repere>
        <h2 className="t-h2 mt-6 max-w-[16ch]">
          Ce qu’en disent les <Acc>clients</Acc>.
        </h2>
        <AvisCards className="mt-10" />
      </Conteneur>
    </Section>
  );
}
