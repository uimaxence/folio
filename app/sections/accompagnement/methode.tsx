import { Acc, Conseil, Conteneur, Section } from "../../components/ui";

export function Methode() {
  return (
    <Section id="methode" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2 max-w-[18ch]">
          Trois leviers, travaillés <Acc>ensemble</Acc>.
        </h2>
        <p className="t-intro mt-5 max-w-[52ch]">
          Ça commence par un audit&nbsp;: ce qui bloque, ce qui manque, par où commencer. Ensuite,
          chaque mois, on avance sur les trois.
        </p>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 list-none p-0 m-0">
          <li>
            <Conseil n={1} titre="Ton site.">
              <p>
                Audit et corrections techniques (vitesse, structure, balises, maillage), une page par
                prestation, des pages ville solides, des contenus ajoutés chaque mois qui répondent
                aux questions de tes clients, et un site lisible par les IA. Un bouton d’appel
                toujours visible.
              </p>
            </Conseil>
          </li>
          <li>
            <Conseil n={2} titre="Ta fiche Google.">
              <p>
                Bonnes catégories principale et secondaires, services détaillés, section produits,
                vraies photos de terrain, publications régulières, réponses aux avis. C’est la carte,
                et pour un métier de proximité elle compte beaucoup.
              </p>
            </Conseil>
          </li>
          <li>
            <Conseil n={3} titre="Tes signaux de confiance.">
              <p>
                Un flux d’avis récents, une présence cohérente sur les annuaires (Pages Jaunes,
                Solocal, Trustpilot…), des liens locaux pertinents. Ce sont aussi les sources dans
                lesquelles piochent ChatGPT, Perplexity ou Gemini.
              </p>
            </Conseil>
          </li>
        </ol>
      </Conteneur>
    </Section>
  );
}
