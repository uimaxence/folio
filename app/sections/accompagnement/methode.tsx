import { Acc, Conseil, Conteneur, Section } from "../../components/ui";

export function Methode() {
  return (
    <Section id="methode" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2 max-w-[16ch]">
          Trois leviers, dans cet <Acc>ordre</Acc>.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 list-none p-0 m-0">
          <li>
            <Conseil n={1} titre="Ta fiche Google.">
              <p>
                Bonnes catégories principale et secondaires, services détaillés, section produits,
                vraies photos de terrain, publications régulières, réponses aux avis. C’est là que se
                jouent la plupart de tes demandes.
              </p>
            </Conseil>
          </li>
          <li>
            <Conseil n={2} titre="Ton site.">
              <p>
                Une page par prestation, des titres pensés pour ton métier, des pages ville solides,
                un bouton d’appel toujours visible. Un site qui transforme les visites en appels.
              </p>
            </Conseil>
          </li>
          <li>
            <Conseil n={3} titre="Tes signaux de confiance.">
              <p>
                Un flux d’avis récents, une présence cohérente sur les annuaires (Pages Jaunes,
                Solocal, Trustpilot…), des liens locaux pertinents. La régularité bat le volume figé
                de tes concurrents.
              </p>
            </Conseil>
          </li>
        </ol>
      </Conteneur>
    </Section>
  );
}
