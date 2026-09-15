import { Acc, Conteneur, Etiquette, Section } from "../../components/ui";
import { euros, site } from "@/lib/site";

const varie = [
  { titre: "Ton objectif", texte: "Rester visible, ou grimper dans le top 3." },
  { titre: "Le rythme de travail sur ta fiche", texte: "Publications, photos, réponses aux avis." },
  { titre: "Les contenus à produire", texte: "Pages ville, pages prestations, textes." },
  { titre: "La concurrence de ta zone", texte: "Plus elle est forte, plus il faut de régularité." },
] as const;

export function Prix() {
  return (
    <Section id="prix" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="t-h2">
              À partir de <Acc>{euros(site.tarifs.accompagnement)}</Acc> par mois.
            </h2>
            <p className="t-intro mt-6 max-w-[44ch]">
              Prix HT. Engagement de {site.tarifs.engagementMois}&nbsp;mois&nbsp;: la durée qu’il faut pour
              construire une place dans le top 3 et la tenir. Aucun frais de mise en route.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="carte-droite -rotate-2 max-w-[420px] mx-auto lg:ml-auto">
              <p className="t-surtitre">Pas encore de site, ou un site à refaire&nbsp;?</p>
              <p className="t-carte-titre mt-3">
                Je le crée à partir de {euros(site.tarifs.site)}, construit pour le référencement dès
                le départ.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="t-h3">Ce qui fait varier le prix</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
            {varie.map((v, i) => (
              <li key={v.titre} className="grid gap-3 justify-items-start">
                <Etiquette point={((i % 4) + 1) as 1 | 2 | 3 | 4}>{v.titre}</Etiquette>
                <p className="text-[16px] leading-[1.4] text-ink-2 pl-1">{v.texte}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 t-puce">Après l’audit gratuit, tu reçois un devis précis, poste par poste.</p>
        </div>

        <div className="mt-12 callout max-w-[62ch]">
          <p className="text-[17px] md:text-[18px] leading-[1.4]">
            <strong className="font-bold">Un chantier de plus par mois, et l’accompagnement est remboursé.</strong>{" "}
            Pour un artisan dont le panier moyen dépasse le millier d’euros, une seule demande en plus
            couvre souvent le mois.
          </p>
        </div>
      </Conteneur>
    </Section>
  );
}
