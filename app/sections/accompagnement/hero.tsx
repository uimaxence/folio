import { Acc, Badge, Btn, Conteneur, Etiquette, Section } from "../../components/ui";
import { euros, site } from "@/lib/site";

const metiers = ["Plombier", "Électricien", "Artisan", "Commerçant", "Indépendant", "Prestataire"] as const;
const points = [1, 2, 3, 4, 1, 2] as const;

/** Hero centré sur fond travaillé, même gabarit que l'accueil. Pas d'étincelle sur ce fond. */
export function HeroAccompagnement() {
  return (
    <Section fond pad={false} className="pt-16 pb-16 md:pt-28 md:pb-24">
      <Conteneur className="flex flex-col items-center text-center">
        <Badge>Accompagnement mensuel · à partir de {euros(site.tarifs.accompagnement)} / mois</Badge>
        <h1 className="t-hook mt-7 max-w-[820px]">
          Être trouvé sur Google, puis être <Acc>appelé</Acc>.
        </h1>
        <p className="t-intro mt-6 max-w-[58ch]">
          Référencement de ton site, visibilité dans les IA, fiche Google et avis&nbsp;: gérés par
          une seule personne, chaque mois. Pensé pour les artisans et les commerçants, et tout
          aussi efficace pour les indépendants et les prestataires.
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <Btn href={site.calUrl} external>
            Réserver mon audit gratuit
          </Btn>
          <Btn href="#prix" variant="secondaire">
            Voir les prix
          </Btn>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-3 list-none p-0 m-0">
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
