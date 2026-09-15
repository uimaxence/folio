import { Conteneur, Section } from "../../components/ui";

const cartes = [
  { titre: "Un seul interlocuteur", texte: "Tu parles à celui qui dessine, code et met en ligne." },
  {
    titre: "On échange constamment",
    texte: "Maquette, contenus, mise en ligne : tu vois tout, tu valides tout.",
  },
  { titre: "Le site t’appartient", texte: "Payé une fois. Le code et le nom de domaine sont à toi." },
  {
    titre: "Pensé pour Google dès le départ",
    texte: "Structure, vitesse et pages métier dès la première ligne de code.",
  },
];

export function Reassurance() {
  return (
    <Section pad={false} className="py-12 md:py-20">
      <Conteneur>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
          {cartes.map((c) => (
            <li key={c.titre} className="carte-droite flex flex-col gap-3">
              <p className="t-carte-titre">{c.titre}</p>
              <p className="t-corps text-[15px] text-[#6f6f6a]">{c.texte}</p>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
