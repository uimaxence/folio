import type { ReactNode } from "react";
import {
  Acc,
  Btn,
  Capture,
  Carte,
  Checklist,
  Conteneur,
  Etiquette,
  FlecheCourbe,
  ListeFleches,
  Rangee,
  Section,
} from "../../components/ui";
import { projectShot } from "@/lib/projects";

/** Même squelette pour les trois volets : une rangée numérotée, l'étiquette, un titre avec un accent, une définition, trois points, un visuel. */
function Volet({
  n,
  id,
  etiquette,
  point,
  titre,
  definition,
  points,
  visuel,
  inverse = false,
}: {
  n: number;
  id: string;
  etiquette: string;
  point: 1 | 2 | 3 | 4;
  titre: ReactNode;
  definition: ReactNode;
  points: ReactNode[];
  visuel: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Rangee n={n} id={id} className="mt-12 first:mt-0 md:mt-16">
      <Etiquette point={point}>{etiquette}</Etiquette>
      <h3 className="t-rangee mt-5 max-w-[22ch]">{titre}</h3>
      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center md:mt-10">
        <div className={`lg:col-span-6 ${inverse ? "lg:order-2" : ""}`}>
          <p className="t-intro max-w-[46ch]">{definition}</p>
          <ListeFleches items={points} className="mt-6 t-puce" />
        </div>
        <div className={`lg:col-span-6 ${inverse ? "lg:order-1" : ""}`}>{visuel}</div>
      </div>
    </Rangee>
  );
}

/** L'offre en trois volets : création et design, visibilité, sérénité. Une seule personne, du début à la fin. */
export function Services() {
  return (
    <Section id="offre" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="max-w-[720px]">
          <Etiquette point={1}>L’offre, en un seul morceau</Etiquette>
          <h2 className="t-h2 mt-6">
            Ton site, ta place sur Google, la technique&nbsp;: une seule <Acc>personne</Acc>.
          </h2>
          <p className="t-intro mt-6">
            Créer le site n’est que la première étape. Je réunis ce qui est trop souvent traité
            séparément&nbsp;: le design, le code, ton référencement sur Google et dans les IA, et la
            maintenance.
          </p>
          <p className="t-corps mt-4">
            Le référencement est pensé dès la maquette. Le site est dessiné pour ton métier. Et je
            reste là après la mise en ligne.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <Volet
            n={1}
            id="creation"
            etiquette="Création & design"
            point={1}
            titre={
              <>
                Un site sur mesure, qui s’ouvre vite et qu’on <Acc>trouve</Acc>.
              </>
            }
            definition="Création ou refonte : on dessine ensemble un site pour ton métier, pensé mobile d’abord, avec une page par prestation et un bouton d’appel toujours visible. On échange à chaque étape : maquette, contenus, mise en ligne."
            points={[
              "La maquette est validée avant la première ligne de code.",
              "Si ton site existe déjà, je garde ce qui marche et je refais ce qui bloque.",
              "Nom de domaine, hébergement, e-mails pro et statistiques sont prêts le jour de la mise en ligne. Le code et le site t’appartiennent.",
            ]}
            visuel={
              <div className="relative lg:pl-6">
                <FlecheCourbe className="hidden lg:block absolute -left-8 -top-10 w-[84px] h-[84px] rotate-[20deg]" />
                <Capture src={projectShot("fenetres-sur-loir")} alt="La page d’accueil du site Fenêtres-sur-Loir">
                  <Etiquette point={1} pench={-2} pointeur="bas" className="absolute left-[5%] top-[7%]">
                    titre orienté client
                  </Etiquette>
                  <Etiquette point={2} pench={2} pointeur="bas" className="absolute right-[5%] top-[44%]">
                    un seul bouton
                  </Etiquette>
                </Capture>
              </div>
            }
          />

          <Volet
            n={2}
            id="visibilite"
            etiquette="Visibilité : SEO + GEO"
            point={3}
            inverse
            titre={
              <>
                Être trouvé sur Google, dans la carte et cité par les <Acc>IA</Acc>.
              </>
            }
            definition="Le référencement de ton site (SEO) et ta visibilité dans les réponses des IA (GEO), travaillés chaque mois : audit, corrections techniques, contenus, pages ville, fiche Google, avis, annuaires."
            points={[
              "Un audit au départ, puis les corrections : vitesse, structure, balises, maillage, lisibilité par les IA.",
              "Des contenus ajoutés chaque mois : pages prestation, pages ville, articles qui répondent aux questions de tes clients.",
              "Ta fiche Google, tes avis et les annuaires pour la carte. Un rapport d’une page : ta position, ce qui a été fait.",
            ]}
            visuel={
              <div className="carte-droite -rotate-2 max-w-[520px] mx-auto lg:mx-0 grid gap-8 sm:grid-cols-2 text-[15px]">
                <div>
                  <p className="t-surtitre mb-4">Sur ton site</p>
                  <Checklist
                    items={[
                      "Audit et corrections techniques",
                      "Structure et maillage",
                      "Pages prestation et pages ville",
                      "Articles et contenus",
                      "Lisible par ChatGPT, Perplexity, Gemini",
                    ]}
                  />
                </div>
                <div>
                  <p className="t-surtitre mb-4">Autour de ton site</p>
                  <Checklist
                    items={[
                      "Fiche Google réglée et vivante",
                      "Avis récents, réponses à chacun",
                      "Annuaires et liens locaux",
                      "Position suivie chaque mois",
                    ]}
                  />
                </div>
              </div>
            }
          />

          <Volet
            n={3}
            id="serenite"
            etiquette="Sérénité"
            point={2}
            titre={
              <>
                Tu n’as plus à penser à la <Acc>technique</Acc>.
              </>
            }
            definition="Hébergement, sauvegardes, mises à jour, certificat, modifications courantes : c’est compris dans l’accompagnement. Tu m’écris, je m’en occupe."
            points={[
              "Un seul interlocuteur, du premier appel au rapport mensuel.",
              "Les modifications courantes sont comprises : un texte, une photo, un horaire.",
              "Le site reste à toi. Tu peux reprendre la main à tout moment.",
            ]}
            visuel={
              <div className="grid gap-4 max-w-[420px] mx-auto lg:mx-0 lg:ml-auto lg:mr-6">
                <Carte surtitre="Hébergement" titre="Sauvegardes et mises à jour" pench={-3} barres={1} className="w-[82%] justify-self-start" />
                <Carte surtitre="Modifications" titre="Un texte, une photo, un horaire" pench={2} barres={1} className="w-[82%] justify-self-end -mt-2" />
                <Carte surtitre="Sécurité" titre="Certificat et surveillance" pilule="Compris" pench={-2} barres={1} className="w-[82%] justify-self-center -mt-2" />
              </div>
            }
          />
        </div>

        <div className="mt-14 md:mt-20 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 callout">
            <p className="t-h4">Option identité visuelle</p>
            <p className="t-corps mt-2">
              Pas encore de logo, ou une identité à rafraîchir&nbsp;? Je crée ton univers (logo,
              couleurs, typographies) avant de dessiner le site. Sur devis, après un premier appel.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start gap-3 lg:pl-8">
            <Btn href="#tarifs">Voir les tarifs</Btn>
            <p className="t-meta">à partir de 900 € le site, 90 € par mois l’accompagnement</p>
          </div>
        </div>
      </Conteneur>
    </Section>
  );
}
