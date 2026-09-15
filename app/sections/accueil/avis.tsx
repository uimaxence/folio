import { AvisCards } from "../../components/avis-cards";
import { Acc, Conteneur, Section } from "../../components/ui";

export function Avis() {
  return (
    <Section id="avis" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2 max-w-[16ch]">
          Ce qu’en disent les <Acc>clients</Acc>.
        </h2>
        <AvisCards className="mt-10" />
      </Conteneur>
    </Section>
  );
}
