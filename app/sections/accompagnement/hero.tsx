import { Acc, Btn, Conteneur, Etiquette, Repere, Section } from "../../components/ui";
import { euros, site } from "@/lib/site";

const metiers = ["Plombier", "Électricien", "Artisan", "Commerçant", "Indépendant", "Prestataire"] as const;
const points = [1, 2, 3, 4, 1, 2] as const;

/** Hero de l'accompagnement : les courbes de niveau en calque, même gabarit que l'accueil. */
export function HeroAccompagnement() {
  return (
    <Section decor="contours" pad={false} className="pt-10 pb-16 md:pt-20 md:pb-24">
      <Conteneur>
        <Repere>Accompagnement mensuel · à partir de {euros(site.tarifs.accompagnement)} / mois</Repere>
        <h1 className="t-hook mt-6 max-w-[18ch]">
          Être trouvé sur Google, puis être <Acc>appelé</Acc>.
        </h1>
        <p className="t-intro mt-6 max-w-[56ch]">
          Référencement de ton site, visibilité dans les IA, fiche Google et avis&nbsp;: gérés par
          une seule personne, chaque mois. Pensé pour les artisans et les commerçants, et tout
          aussi efficace pour les indépendants et les prestataires.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Btn href={site.calUrl} external>
            Réserver mon audit gratuit
          </Btn>
          <Btn href="#prix" variant="secondaire">
            Voir les prix
          </Btn>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3 list-none p-0 m-0">
          {metiers.map((m, i) => (
            <li key={m}>
              <Etiquette point={points[i]}>{m}</Etiquette>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
