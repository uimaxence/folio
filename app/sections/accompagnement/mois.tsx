import { Acc, Conteneur, Frise, Section } from "../../components/ui";

const etapes = [
  {
    quand: "Semaines 1 à 3",
    titre: "Mise en route.",
    texte: "Audit, corrections techniques sur le site, fiche Google réglée, annuaires à jour.",
  },
  {
    quand: "Mois 1 à 3",
    titre: "Premiers mouvements.",
    texte: "Les premiers contenus sont en ligne, la fiche gagne en visibilité, les premiers avis récents arrivent.",
  },
  {
    quand: "Mois 4 à 6",
    titre: "Montée dans la carte.",
    texte: "Tu apparais sur plus de recherches, dans plus de communes.",
  },
  {
    quand: "Mois 6 à 9",
    titre: "Top 3 visé.",
    texte: "Figurer parmi les 3 fiches en haut de la carte sur tes requêtes clés.",
  },
];

export function Mois() {
  return (
    <Section id="mois" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="t-h2 lg:max-w-[12ch]">
            Ce qui se passe mois après <Acc>mois</Acc>.
          </h2>
          <p className="t-intro mt-6 max-w-[36ch]">
            Le référencement local se construit. Voilà à quoi ressemblent les neuf premiers mois.
          </p>
        </div>
        <div className="lg:col-span-7 lg:pl-6">
          <Frise etapes={etapes} />
        </div>
      </Conteneur>
    </Section>
  );
}
