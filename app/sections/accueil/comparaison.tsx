import { Acc, Btn, Checklist, Conteneur, Section } from "../../components/ui";
import { site } from "@/lib/site";

const sansMoi = [
  "Plusieurs prestataires à coordonner",
  "Des allers-retours qui traînent des mois",
  "Un modèle qui ne te ressemble pas",
  "Invisible sur Google et dans les IA",
  "La technique sur tes épaules",
];

const avecMoi = [
  "Un seul interlocuteur, du premier appel au rapport mensuel",
  "On échange à chaque étape, tu valides tout",
  "Un site dessiné pour ton métier",
  "Pensé pour Google dès la première ligne de code",
  "Hébergement, maintenance et modifications compris",
  "Ta position sur Google suivie chaque mois",
];

/** Tableau deux colonnes : la colonne « moi » teintée bande à 45 %. */
export function Comparaison() {
  return (
    <Section id="comparaison" pad={false} className="py-12 md:py-20">
      <Conteneur>
        <h2 className="t-h2 max-w-[18ch]">
          La solution&nbsp;: changer d’<Acc>approche</Acc>.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="carte-droite">
            <p className="t-surtitre">Ton site sans moi</p>
            <Checklist croix items={sansMoi} className="mt-5 t-puce" />
          </div>
          <div
            className="carte-droite"
            style={{ background: "color-mix(in srgb, var(--band) 45%, #ffffff)" }}
          >
            <p className="t-surtitre" style={{ color: "#141414" }}>
              Ton site avec moi
            </p>
            <Checklist items={avecMoi} className="mt-5 t-puce" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start gap-5 max-w-[60ch]">
          <p className="t-intro">
            Un site doit te rapporter des clients. Tu veux un site qui te ressemble et qui remonte sur
            Google et dans les IA&nbsp;? C’est ce que je fais, pour une seule personne à la fois.
          </p>
          <Btn href={site.calUrl} external>
            Parler de mon projet
          </Btn>
          <p className="t-meta -mt-2">appel de 30 min, sans engagement</p>
        </div>
      </Conteneur>
    </Section>
  );
}
