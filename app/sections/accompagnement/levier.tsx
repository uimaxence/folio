import { Acc, Conteneur, Section } from "../../components/ui";
import { avecSource, chiffres } from "@/lib/site";

export function Levier() {
  const cartes = [chiffres.fiche, chiffres.appels, chiffres.top3].filter(avecSource);
  const troisFiches = avecSource(chiffres.troisFiches);
  return (
    <Section pad={false} className="py-16 md:py-24">
      <Conteneur>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="t-h2 lg:col-span-5">
            Ta fiche Google <Acc>d’abord</Acc>.
          </h2>
          <div className="lg:col-span-7 lg:pl-6">
            <p className="t-intro max-w-[46ch]">
              {troisFiches ? (
                <>
                  Pour un métier d’intervention, {chiffres.troisFiches.valeur} te trouvent via les
                  3 fiches en haut de la carte Google.
                </>
              ) : (
                <>
                  Pour un métier d’intervention, tes clients te trouvent via les 3 fiches en haut de
                  la carte Google.
                </>
              )}{" "}
              Le référencement local, c’est d’abord gagner ces 3 places. C’est là que je concentre
              le travail.
            </p>
            {troisFiches && <p className="t-meta mt-3">{chiffres.troisFiches.source}</p>}
          </div>
        </div>

        {cartes.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-5 list-none p-0 m-0">
            {cartes.map((c) => (
              <li key={c.valeur} className="carte-droite flex flex-col gap-4 basis-[280px] grow max-w-[380px]">
                <span className="t-chiffre-carte">{c.valeur}</span>
                <p className="text-[16px] leading-[1.35]">{c.texte}</p>
                <p className="mt-auto t-meta text-[#6f6f6a]">{c.source}</p>
              </li>
            ))}
          </ul>
        )}
      </Conteneur>
    </Section>
  );
}
