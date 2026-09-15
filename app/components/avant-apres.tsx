import { Capture, Checklist, Etiquette, Jauge } from "./ui";
import { refonteAvantApres } from "@/lib/site";

/**
 * Le visuel de la refonte. Avec de vraies captures et de vrais scores (lib/site.ts),
 * deux captures et deux jauges. Sinon, la carte « je garde, je refais ».
 */
export function AvantApres() {
  const d = refonteAvantApres;
  if (d) {
    return (
      <div className="grid gap-8 sm:grid-cols-2 max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
        <Capture src={d.avant.src} alt={`${d.site}, avant la refonte`} ratio="4 / 3" sizes="280px">
          <Etiquette point={4} pench={-2} className="absolute left-3 top-3">
            avant
          </Etiquette>
          <div className="absolute -bottom-6 right-3">
            <Jauge valeur={d.avant.score} etat="avant" label="PageSpeed" />
          </div>
        </Capture>
        <Capture src={d.apres.src} alt={`${d.site}, après la refonte`} ratio="4 / 3" sizes="280px">
          <Etiquette point={1} pench={2} className="absolute left-3 top-3">
            après
          </Etiquette>
          <div className="absolute -bottom-6 right-3">
            <Jauge valeur={d.apres.score} etat="apres" label="PageSpeed" />
          </div>
        </Capture>
      </div>
    );
  }

  return (
    <div className="carte-droite -rotate-2 max-w-[520px] mx-auto lg:mx-0 lg:ml-auto grid gap-8 sm:grid-cols-2 text-[16px]">
      <div>
        <p className="t-surtitre mb-4">Je garde</p>
        <Checklist items={["Ton nom de domaine", "Tes photos", "Les textes qui marchent", "Tes avis"]} />
      </div>
      <div>
        <p className="t-surtitre mb-4">Je refais</p>
        <Checklist
          fait={false}
          items={["Le titre de la page", "Le bouton d’appel", "La vitesse", "Les pages prestations"]}
        />
      </div>
    </div>
  );
}
