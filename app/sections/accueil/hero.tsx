import { Acc, Badge, Btn, Carte, Conteneur, Etiquette, Section } from "../../components/ui";
import { site } from "@/lib/site";

/** Hero centré : badge, titre, intro, trois repères, boutons. Trois cartes flottantes en bas, aucune image de site. */
export function Hero() {
  return (
    <Section halo pad={false} className="pt-16 pb-12 md:pt-28 md:pb-20">
      <Conteneur className="flex flex-col items-center text-center">
        <Badge>Sites web & référencement local · partout en France</Badge>
        <h1 className="t-hook mt-7 max-w-[900px]">
          Des sites que tes clients <Acc>trouvent</Acc>, puis appellent.
        </h1>
        <p className="t-intro mt-6 max-w-[58ch]">
          Création ou refonte : je dessine, je code, je mets en ligne et je m’occupe de ta place sur
          Google, chaque mois. Tu gardes ton temps pour ton métier.
        </p>
        <ul className="mt-7 flex flex-wrap justify-center gap-3 list-none p-0 m-0">
          <li>
            <Etiquette point={3}>Un seul interlocuteur</Etiquette>
          </li>
          <li>
            <Etiquette point={1}>Un site sur mesure</Etiquette>
          </li>
          <li>
            <Etiquette point={2}>Suivi chaque mois</Etiquette>
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <Btn href={site.calUrl} external>
            Parler de mon projet
          </Btn>
          <Btn href="#offre" variant="secondaire">
            Découvrir l’offre
          </Btn>
        </div>
        <p className="t-meta mt-3">appel de 30 min · gratuit · sans engagement</p>

        <div className="mt-16 md:mt-24 w-full max-w-[960px] grid gap-5 sm:grid-cols-3 sm:items-start">
          <Carte surtitre="Site sur mesure" titre="Dessiné pour ton métier" pench={-4} className="sm:mt-6" />
          <Carte
            surtitre="Référencement local"
            titre="Trouvé dans ta ville"
            pilule="Google"
            pench={2}
            className="sm:-mt-2"
          />
          <Carte surtitre="Fiche Google" titre="Appelé direct" pench={-2} className="sm:mt-8" />
        </div>
      </Conteneur>
    </Section>
  );
}
