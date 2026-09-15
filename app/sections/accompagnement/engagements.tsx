import { Acc, Conteneur, Section } from "../../components/ui";
import { site } from "@/lib/site";

const engagements = [
  {
    titre: "Aucune technique risquée.",
    texte:
      "Pas de bourrage de mots-clés dans le nom de ta fiche : Google peut la suspendre. Je joue le long terme.",
  },
  {
    titre: "Un rapport que tu comprends.",
    texte: "Chaque mois : ta position, les avis gagnés, ce qui a été fait. Une page.",
  },
  {
    titre: "Une seule personne, du début à la fin.",
    texte: "Design, développement, référencement : c’est moi. Tu sais toujours à qui parler.",
  },
  {
    titre: "Un engagement qui a du sens.",
    texte: `${site.tarifs.engagementMois} mois, parce que c’est le temps qu’il faut pour construire une place dans le top 3. Tu peux faire évoluer l’accompagnement à tout moment pendant la période.`,
  },
];

export function Engagements() {
  return (
    <Section id="engagements" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2">
          Mes <Acc>engagements</Acc>.
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 list-none p-0 m-0">
          {engagements.map((e) => (
            <li key={e.titre} className="carte-droite flex flex-col gap-3">
              <p className="t-carte-titre">{e.titre}</p>
              <p className="text-[16px] md:text-[17px] leading-[1.4] text-[#6f6f6a]">
                {e.texte.replace(/ :/g, " :")}
              </p>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
