import { Contours } from "../../components/contours";
import { Massif } from "../../components/massif";
import { Scramble } from "../../components/scramble";
import { Acc, Btn, Conteneur, Repere, Section } from "../../components/ui";
import { avis } from "@/lib/avis";
import { projects } from "@/lib/projects";
import { site, stats } from "@/lib/site";

/** La date de la dernière mise en ligne, façon compact des années 2010 : « 22 10 '26 ». Figée au build. */
function stamp(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd} ${mm} '${String(d.getFullYear()).slice(-2)}`;
}

/** Hero : repère mono, titre (la phrase de la bannière LinkedIn), intro, boutons, puis le massif qui avance au scroll.
    Trois chiffres vérifiables en dessous, qui se décodent à l'arrivée. */
export function Hero() {
  const chiffres = [
    { valeur: String(projects.length).padStart(2, "0"), texte: "sites en ligne" },
    { valeur: String(stats.clientsSuivis).padStart(2, "0"), texte: "clients accompagnés chaque mois" },
    { valeur: "5,0", texte: `sur 5, sur les ${avis.length} avis publiés` },
  ];
  return (
    <>
      <Section pad={false} className="hero-massif overflow-hidden">
        <Contours />
        <Conteneur className="relative z-[1] pt-10 pb-4 md:pt-20 md:pb-10">
          <Repere>Sites web &amp; référencement local · partout en France</Repere>
          <h1 className="t-hook mt-6 max-w-[22ch]">
            Je conçois des sites attractifs pour développer ta <Acc>visibilité</Acc>.
          </h1>
          <p className="t-intro mt-6 max-w-[56ch]">
            Création ou refonte : je dessine, je code, je mets en ligne et je m’occupe de ta place sur
            Google, chaque mois. Tu gardes ton temps pour ton métier.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Btn href={site.calUrl} external>
              Parler de mon projet
            </Btn>
            <Btn href="#offre" variant="secondaire">
              Découvrir l’offre
            </Btn>
          </div>
          <p className="t-mono mt-4">appel de 30 min · gratuit · sans engagement</p>
        </Conteneur>
        <Massif />
        <span aria-hidden className="stamp absolute right-[var(--marge)] bottom-[150px] z-[2]">
          {stamp(new Date())}
        </span>
        <div aria-hidden className="hero-fondu" />
      </Section>

      <Section pad={false} className="py-10 md:py-14">
        <Conteneur>
          <dl className="grid gap-7 sm:grid-cols-3">
            {chiffres.map((c) => (
              <div key={c.texte} className="flex flex-col border-t border-line-2 pt-4" style={{ borderColor: "var(--line-2)" }}>
                <dd className="t-chiffre m-0">
                  <Scramble onView>{c.valeur}</Scramble>
                </dd>
                <dt className="t-mono mt-3 max-w-[26ch]">{c.texte}</dt>
              </div>
            ))}
          </dl>
        </Conteneur>
      </Section>
    </>
  );
}
