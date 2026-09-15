import { Acc, Badge, Btn, Conteneur, Etiquette, Etincelle, Section } from "../../components/ui";
import { euros, site } from "@/lib/site";

const metiers = ["Plombier", "Électricien", "Artisan", "Commerçant", "Indépendant", "Prestataire"] as const;
const points = [1, 2, 3, 4, 1, 2] as const;

/** Hero centré, même gabarit que l'accueil. */
export function HeroAccompagnement() {
  return (
    <Section halo pad={false} className="pt-16 pb-16 md:pt-28 md:pb-24">
      <Conteneur className="flex flex-col items-center text-center">
        <Badge>Accompagnement mensuel · à partir de {euros(site.tarifs.accompagnement)} / mois</Badge>
        <div className="relative mt-7 max-w-[820px]">
          <h1 className="t-hook">
            Être trouvé sur Google, puis être <Acc>appelé</Acc>.
          </h1>
          <Etincelle taille={36} couleur="g2" className="hidden md:block absolute -right-10 -top-6" />
        </div>
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
