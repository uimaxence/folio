import { Acc, Conteneur, Etiquette, Section } from "../../components/ui";

const etapes = [
  {
    quand: "Le jour de la mise en ligne",
    point: 1 as const,
    titre: "Ton site est prêt pour Google.",
    texte:
      "Structure, vitesse, une page par prestation, un bouton d’appel visible. Nom de domaine, e-mails et statistiques sont en place.",
  },
  {
    quand: "Les premiers mois",
    point: 2 as const,
    titre: "Ta fiche Google se met à vivre.",
    texte:
      "Catégories, photos, publications, réponses aux avis. Je suis ta position chaque mois et je te l’envoie sur une page.",
  },
  {
    quand: "Mois après mois",
    point: 3 as const,
    titre: "On renforce ce qui marche.",
    texte:
      "Pages ville, avis récents, annuaires cohérents. L’avance prise est ensuite difficile à rattraper pour tes concurrents.",
  },
];

/** Ce qui se passe dans le temps, en trois cartes. */
export function Apres() {
  return (
    <Section pad={false} className="py-12 md:py-20">
      <Conteneur>
        <h2 className="t-h2 max-w-[20ch]">
          Tu sais ce qui est fait, quand, et <Acc>pourquoi</Acc>.
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3 list-none p-0 m-0">
          {etapes.map((e) => (
            <li key={e.titre} className="carte-droite flex flex-col gap-4">
              <div>
                <Etiquette point={e.point}>{e.quand}</Etiquette>
              </div>
              <p className="t-carte-titre">{e.titre}</p>
              <p className="t-corps text-[15px] text-[#6f6f6a]">{e.texte}</p>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
