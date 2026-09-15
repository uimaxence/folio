import { Acc, Conteneur, Section } from "../../components/ui";

export function Ia() {
  return (
    <Section id="ia" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h2 className="t-h2">
            Tes clients demandent aussi à <Acc>ChatGPT</Acc>, Perplexity ou Gemini.
          </h2>
        </div>
        <div className="lg:col-span-6">
          <div className="callout max-w-[54ch] lg:ml-auto">
            <p className="text-[17px] md:text-[18px] leading-[1.45]">
              «&nbsp;Quel plombier fiable près de chez moi&nbsp;?&nbsp;» De plus en plus de gens posent
              la question à une IA. Ses réponses puisent dans les mêmes annuaires, avis et pages que le
              référencement local. Les premiers installés seront difficiles à déloger. Je peux
              l’intégrer à ton accompagnement.
            </p>
          </div>
        </div>
      </Conteneur>
    </Section>
  );
}
