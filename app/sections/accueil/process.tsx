import { Acc, Conseil, Conteneur, Etiquette, Section } from "../../components/ui";

const etapes = [
  {
    titre: "Un appel de 30 minutes.",
    texte:
      "On parle de ton métier, de tes clients et de ce que tu attends du site. Tu repars avec une recommandation et un ordre de prix.",
  },
  {
    titre: "La maquette.",
    texte: "Tu vois le site avant la première ligne de code. On ajuste jusqu’à ce que ce soit bon.",
  },
  {
    titre: "Le développement.",
    texte: "Code à la main. Vitesse, structure et accessibilité pour Google dès le départ.",
  },
  {
    titre: "La mise en ligne, puis l’accompagnement.",
    texte:
      "Nom de domaine, e-mails, statistiques. Ensuite, chaque mois : hébergement, modifications, position sur Google.",
  },
];

export function Process() {
  return (
    <Section id="process" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="t-h2 lg:max-w-[12ch]">
            Ce qui se passe si on travaille <Acc>ensemble</Acc>.
          </h2>
          <p className="t-intro mt-5 max-w-[36ch]">
            On échange à chaque étape. Tu vois tout, tu valides tout.
          </p>
          <div className="mt-7">
            <Etiquette point={2} pench={-2}>
              Un seul interlocuteur, du premier appel au rapport mensuel
            </Etiquette>
          </div>
        </div>
        <ol className="lg:col-span-7 grid gap-10 sm:grid-cols-2 list-none p-0 m-0">
          {etapes.map((e, i) => (
            <li key={e.titre}>
              <Conseil n={i + 1} titre={e.titre}>
                <p>{e.texte}</p>
              </Conseil>
            </li>
          ))}
        </ol>
      </Conteneur>
    </Section>
  );
}
