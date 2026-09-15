import { Acc, Conteneur, Section } from "../../components/ui";
import { avecSource, chiffres } from "@/lib/site";

/** Les trois endroits où tes clients te cherchent : les résultats Google, la carte, les réponses des IA. */
export function Levier() {
  const cartes = [chiffres.fiche, chiffres.appels, chiffres.top3].filter(avecSource);
  const troisFiches = avecSource(chiffres.troisFiches);
  return (
    <Section pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="t-h2 lg:col-span-5">
            Google, la carte, les IA&nbsp;: les trois <Acc>endroits</Acc> où on te cherche.
          </h2>
          <div className="lg:col-span-7 lg:pl-6">
            <p className="t-intro max-w-[46ch]">
              Tes clients te cherchent dans les résultats Google, dans la carte avec ses trois
              fiches, et de plus en plus dans les réponses de ChatGPT, Perplexity ou Gemini.
              {troisFiches && (
                <>
                  {" "}
                  Pour un métier d’intervention, {chiffres.troisFiches.valeur} passent par la carte.
                </>
              )}
            </p>
            <p className="t-corps mt-4 max-w-[56ch]">
              Le référencement, c’est travailler les trois en même temps&nbsp;: ton site (audit,
              technique, contenus), ta fiche Google, et tout ce qui fait confiance autour (avis,
              annuaires, liens locaux). C’est là que je concentre le travail, chaque mois.
            </p>
            {troisFiches && <p className="t-meta mt-3">{chiffres.troisFiches.source}</p>}
          </div>
        </div>

        {cartes.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-5 list-none p-0 m-0">
            {cartes.map((c) => (
              <li key={c.valeur} className="carte-droite flex flex-col gap-4 basis-[280px] grow max-w-[380px]">
                <span className="t-chiffre-carte">{c.valeur}</span>
                <p className="text-[16px] leading-[1.35]">{c.texte}</p>
                <p className="mt-auto t-meta text-[#6f6f6a]">{c.source}</p>
              </li>
            ))}
          </ul>
        )}
      </Conteneur>
    </Section>
  );
}
