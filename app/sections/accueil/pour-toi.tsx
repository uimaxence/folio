import { Acc, Checklist, Conteneur, Section } from "../../components/ui";
import { site } from "@/lib/site";

const oui = [
  "Tu vis de demandes locales : artisan, commerçant, indépendant, petite équipe.",
  "Tu veux un seul interlocuteur, du premier appel au rapport mensuel.",
  `Tu es prêt à travailler ta visibilité sur ${site.tarifs.engagementMois} mois, le temps que ça prend.`,
  "Tu réponds vite : une maquette à valider, un texte à relire, une photo à envoyer.",
];

const non = [
  "Tu cherches le prix le plus bas.",
  "Tu veux une carte de visite en ligne et rien de plus.",
  `Tu n’es pas prêt à t’engager ${site.tarifs.engagementMois} mois sur ton référencement.`,
  "Tu préfères gérer chaque détail toi-même.",
  "Tu veux un site généré en trois clics, sans personne derrière.",
];

/** Pour qui c'est fait, pour qui ça ne l'est pas. Dit franchement. */
export function PourToi() {
  return (
    <Section id="pour-toi" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2 max-w-[18ch]">
          Est-ce que c’est fait pour <Acc>toi</Acc>&nbsp;?
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="carte-droite">
            <p className="t-h4">C’est fait pour toi si</p>
            <Checklist items={oui} className="mt-5 t-puce" />
          </div>
          <div className="carte-droite">
            <p className="t-h4">Ce n’est pas fait pour toi si</p>
            <Checklist croix items={non} className="mt-5 t-puce" />
          </div>
        </div>
      </Conteneur>
    </Section>
  );
}
