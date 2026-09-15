import { Acc, Checklist, Conteneur, Frise, Section } from "../../components/ui";
import { site } from "@/lib/site";

const etapes = [
  {
    quand: "Étape 1",
    titre: "Un appel de 30 minutes.",
    texte:
      "On parle de ton métier, de tes clients et de ce que tu attends du site. Tu repars avec une recommandation et un ordre de prix.",
  },
  {
    quand: "Étape 2",
    titre: "Mots-clés et structure.",
    texte:
      "On regarde ce que tes clients tapent sur Google, et on décide des pages : une par prestation, une par ville qui compte.",
  },
  {
    quand: "Étape 3",
    titre: "La maquette.",
    texte: "Tu vois le site avant la première ligne de code. On ajuste jusqu’à ce que ce soit bon.",
  },
  {
    quand: "Étape 4",
    titre: "Les contenus.",
    texte:
      "Textes, photos, avis : je t’aide à les réunir et je les écris avec toi, dans tes mots, pour tes clients et pour Google.",
  },
  {
    quand: "Étape 5",
    titre: "Le développement.",
    texte: "Code à la main. Vitesse, structure et accessibilité pour Google dès le départ.",
  },
  {
    quand: "Étape 6",
    titre: "La mise en ligne.",
    texte:
      "Nom de domaine, e-mails, statistiques, fiche Google réglée champ par champ. Tu valides, on publie.",
  },
  {
    quand: "Étape 7",
    titre: "L’accompagnement, mois après mois.",
    texte:
      "Hébergement, modifications, fiche Google vivante, position suivie. Un rapport d’une page chaque mois : ce qui a été fait, ce qui progresse.",
  },
];

export function Process() {
  return (
    <Section id="etapes" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="t-h2 lg:max-w-[12ch]">
            Les 7 étapes de ton <Acc>projet</Acc>.
          </h2>
          <p className="t-intro mt-5 max-w-[36ch]">
            On échange à chaque étape. Tu vois tout, tu valides tout.
          </p>
          <div className="carte-droite mt-10 max-w-[460px]">
            <p className="t-h4">Tu n’es jamais seul devant ton site</p>
            <Checklist
              className="mt-4 text-[15px]"
              items={[
                "Un point chaque mois : ta position, les avis, ce qui a été fait.",
                "Un seul interlocuteur, joignable par e-mail et par téléphone.",
                `Après les ${site.tarifs.engagementMois} mois, le site et les accès sont à toi. Tu continues l’accompagnement, ou tu reprends la main.`,
              ]}
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-6">
          <Frise etapes={etapes} />
        </div>
      </Conteneur>
    </Section>
  );
}
