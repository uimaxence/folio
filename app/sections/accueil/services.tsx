import type { ReactNode } from "react";
import { AvantApres } from "../../components/avant-apres";
import { RechercheLocale } from "../../components/recherche-locale";
import {
  Acc,
  Btn,
  Capture,
  Carte,
  Conteneur,
  Etiquette,
  FlecheCourbe,
  ListeFleches,
  Rangee,
  Section,
} from "../../components/ui";
import { projectShot } from "@/lib/projects";
import { avecSource, chiffres, euros, site } from "@/lib/site";

/** Même squelette pour les quatre services : une rangée numérotée, l'étiquette du service, un titre avec un accent, une définition, trois points, un prix, un bouton, un visuel. */
function Service({
  n,
  id,
  etiquette,
  point,
  titre,
  definition,
  points,
  prix,
  bouton,
  visuel,
  inverse = false,
}: {
  n: number;
  id: string;
  etiquette: string;
  point: 1 | 2 | 3 | 4;
  titre: ReactNode;
  definition: string;
  points: ReactNode[];
  prix: ReactNode;
  bouton: ReactNode;
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
          <p className="mt-7 font-semibold text-[16px]">{prix}</p>
          <div className="mt-5">{bouton}</div>
        </div>
        <div className={`lg:col-span-6 ${inverse ? "lg:order-1" : ""}`}>{visuel}</div>
      </div>
    </Rangee>
  );
}

export function Services() {
  return (
    <Section id="services" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <h2 className="t-h2 max-w-[18ch]">
          Ce que je fais pour <Acc>toi</Acc>.
        </h2>
        <p className="t-intro mt-5 max-w-[52ch]">
          Un site sur mesure, une refonte, ta place sur la carte Google et une fiche Google à jour.
          Une seule personne du début à la fin, et on échange à chaque étape.
        </p>

        <div className="mt-12 md:mt-16">
          <Service
            n={1}
            id="site-sur-mesure"
            etiquette="Site sur mesure"
            point={1}
            titre={
              <>
                Un site qui s’ouvre vite et qu’on <Acc>trouve</Acc>.
              </>
            }
            definition="Un site dessiné pour ton métier, pensé mobile d’abord, avec une page par prestation et un bouton d’appel toujours visible. On échange à chaque étape : maquette, contenus, mise en ligne."
            points={[
              "La maquette est validée avant la première ligne de code.",
              "Nom de domaine, hébergement, e-mails pro, certificat et statistiques sont prêts le jour de la mise en ligne.",
              "Le code et le site t’appartiennent.",
            ]}
            prix={<>À partir de {euros(site.tarifs.site)}</>}
            bouton={
              <Btn href={site.calUrl} external>
                Réserver un appel
              </Btn>
            }
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

          <Service
            n={2}
            id="refonte"
            etiquette="Refonte"
            point={2}
            inverse
            titre={
              <>
                Ton site existe déjà. Il peut ramener des <mark>appels</mark>.
              </>
            }
            definition="Pour un site en ligne qui ne fait rien : je garde ce qui marche et je refais ce qui bloque."
            points={[
              "Le titre dit ce que tu fais, pour qui, où.",
              "Un seul bouton, visible sur mobile.",
              "Vitesse et structure reprises pour Google.",
            ]}
            prix={<>À partir de {euros(site.tarifs.refonte)}</>}
            bouton={
              <Btn href={site.calUrl} external>
                Réserver un appel
              </Btn>
            }
            visuel={<AvantApres />}
          />

          <Service
            n={3}
            id="referencement-local"
            etiquette="Référencement local"
            point={3}
            titre={
              <>
                Apparaître dans les <Acc>trois fiches</Acc> en haut de la carte.
              </>
            }
            definition="Pour un métier de proximité, c’est là que les clients regardent avant d’appeler. Le travail se concentre sur ces trois places."
            points={[
              "Une page par prestation, des pages ville solides.",
              "Des avis récents et des annuaires cohérents.",
              "Chaque mois, un rapport : ta position, ce qui a été fait.",
            ]}
            prix={
              <>
                Compris dans l’accompagnement · à partir de {euros(site.tarifs.accompagnement)} / mois
              </>
            }
            bouton={<Btn href="/accompagnement">Voir l’accompagnement</Btn>}
            visuel={
              <div className="grid gap-8 justify-items-center lg:justify-items-start">
                <RechercheLocale />
                {avecSource(chiffres.troisFiches) && (
                  <div className="grid gap-2">
                    <Etiquette point={1} pench={-2}>
                      {chiffres.troisFiches.valeur} {chiffres.troisFiches.texte}
                    </Etiquette>
                    <span className="t-meta pl-2">{chiffres.troisFiches.source}</span>
                  </div>
                )}
              </div>
            }
          />

          <Service
            n={4}
            id="fiche-google"
            etiquette="Optimisation de ta fiche Google"
            point={4}
            inverse
            titre={
              <>
                Une fiche Google à jour, qui donne envie <Acc>d’appeler</Acc>.
              </>
            }
            definition="Catégories, services, photos, publications, réponses aux avis : je règle ta fiche champ par champ, puis je la fais vivre chaque mois."
            points={[
              "Des catégories et des services complets.",
              "Des photos de terrain et une publication régulière.",
              "Une réponse à chaque avis.",
            ]}
            prix="Compris dans l’accompagnement"
            bouton={<Btn href="/accompagnement">Voir l’accompagnement</Btn>}
            visuel={
              <div className="grid gap-4 max-w-[420px] mx-auto lg:mx-0 lg:ml-auto lg:mr-6">
                <Carte surtitre="Catégories" titre="Complètes et précises" pench={-3} barres={1} className="w-[82%] justify-self-start" />
                <Carte surtitre="Photos" titre="De terrain, régulières" pench={2} barres={1} className="w-[82%] justify-self-end -mt-2" />
                <Carte surtitre="Avis" titre="Une réponse à chacun" pilule="Google" pench={-2} barres={1} className="w-[82%] justify-self-center -mt-2" />
              </div>
            }
          />
        </div>
      </Conteneur>
    </Section>
  );
}
