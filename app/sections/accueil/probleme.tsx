import { Acc, Conteneur, Etiquette, Section } from "../../components/ui";

const cas = [
  {
    pilule: "Le modèle",
    titre: "Le site fait en une soirée.",
    texte:
      "Un modèle rempli vite, ou une page générée par une IA. Il ressemble à des centaines d’autres, ne dit rien de ton métier et n’a jamais été pensé pour Google.",
  },
  {
    pilule: "L’ancienne version",
    titre: "Le site d’il y a cinq ans.",
    texte:
      "Il existe, mais il ne te ressemble plus. Sa structure n’est plus adaptée, tes positions stagnent, et le bouton d’appel est introuvable sur mobile.",
  },
  {
    pilule: "La coquille vide",
    titre: "Le site abandonné.",
    texte:
      "On te l’a livré, puis plus rien. Aucun suivi, une fiche Google jamais mise à jour, aucune maintenance. Il existe, personne ne le trouve.",
  },
];

/** Les trois situations qu'on retrouve derrière un site qui ne rapporte rien. */
export function Probleme() {
  return (
    <Section id="probleme" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="max-w-[720px]">
          <Etiquette point={4}>Ton site ne te ramène pas ce qu’il devrait</Etiquette>
          <h2 className="t-h2 mt-6">
            Pourquoi ton site reste <Acc>invisible</Acc>&nbsp;?
          </h2>
          <p className="t-intro mt-6">
            Aujourd’hui, n’importe qui peut faire un site. Un site que tes clients trouvent sur
            Google, qui te ressemble et qui fait sonner le téléphone, c’est un autre travail.
          </p>
          <p className="t-corps mt-4">
            Si le tien stagne ou ne rapporte rien, tu te reconnaîtras sûrement dans l’un de ces trois
            cas.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3 list-none p-0 m-0">
          {cas.map((c) => (
            <li key={c.titre} className="carte-droite flex flex-col gap-4">
              <span className="pilule justify-self-start self-start">{c.pilule}</span>
              <p className="t-h4">{c.titre}</p>
              <p className="t-corps text-[15px] text-[#6f6f6a]">{c.texte}</p>
            </li>
          ))}
        </ul>
        <p className="t-intro mt-10 max-w-[52ch]">
          On croit trop souvent qu’un site est terminé une fois en ligne. C’est là que tout commence.
        </p>
      </Conteneur>
    </Section>
  );
}
