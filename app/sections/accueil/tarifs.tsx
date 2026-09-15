import { Acc, Btn, Checklist, Conteneur, Etiquette, Section } from "../../components/ui";
import { euros, site } from "@/lib/site";

const leSite = [
  "Maquette sur mesure, validée avant le code",
  "Code à la main, pensé pour Google et le mobile",
  "Une page par prestation, un bouton d’appel visible",
  "Nom de domaine, hébergement, e-mails pro prêts le jour J",
  "Fiche Google réglée champ par champ",
  "Le code et le site t’appartiennent",
];

const lAccompagnement = [
  "Hébergement, sauvegardes, mises à jour, certificat",
  "Modifications courantes comprises",
  "Fiche Google vivante : publications, photos, réponses aux avis",
  "Référencement local : pages ville, avis, annuaires",
  "Position sur Google suivie chaque mois",
  "Un rapport d’une page, que tu comprends",
];

/** Deux prix, rien d'autre. Le devis précis arrive après le premier appel. */
export function Tarifs() {
  return (
    <Section id="tarifs" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="max-w-[720px]">
          <h2 className="t-h2">
            Un tarif clair. Aucun coût <Acc>caché</Acc>.
          </h2>
          <p className="t-intro mt-6">
            Deux prix : le site, payé une fois, et l’accompagnement, chaque mois. Après un premier
            appel, tu reçois un devis poste par poste.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="carte-droite flex flex-col gap-5">
            <Etiquette point={1}>Le site</Etiquette>
            <div>
              <p className="t-rangee">À partir de {euros(site.tarifs.site)}</p>
              <p className="t-meta mt-2">payé une fois · création ou refonte</p>
            </div>
            <Checklist items={leSite} className="text-[15px]" />
          </div>
          <div
            className="carte-droite flex flex-col gap-5"
            style={{ background: "color-mix(in srgb, var(--band) 45%, #ffffff)" }}
          >
            <Etiquette point={3}>L’accompagnement</Etiquette>
            <div>
              <p className="t-rangee">
                À partir de {euros(site.tarifs.accompagnement)}
                <span className="text-[0.5em] font-medium"> HT / mois</span>
              </p>
              <p className="t-meta mt-2" style={{ color: "#141414" }}>
                engagement de {site.tarifs.engagementMois} mois · aucun frais de mise en route
              </p>
            </div>
            <Checklist items={lAccompagnement} className="text-[15px]" />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-3">
          <Btn href={site.calUrl} external>
            Réserver un appel
          </Btn>
          <p className="t-meta">
            Option identité visuelle sur devis ·{" "}
            <a href="/accompagnement" className="text-ink underline underline-offset-4">
              le détail de l’accompagnement
            </a>
          </p>
        </div>
      </Conteneur>
    </Section>
  );
}
