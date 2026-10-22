import { Acc, CarteProjet, Conteneur, Lien, Repere, Section } from "../../components/ui";
import { projects } from "@/lib/projects";

/** Les sept sites en ligne : le premier en grand avec son texte, les six autres en grille décalée.
    Chaque carte montre sa fiche technique au survol. Chaque site a sa page. */
export function Realisations() {
  const [premier, ...autres] = projects;
  return (
    <Section id="realisations" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <Repere n={8}>Réalisations</Repere>
        <h2 className="t-h2 mt-6 max-w-[18ch]">
          Sept sites en ligne, du premier <Acc>pixel</Acc> à la mise en ligne.
        </h2>

        <div className="mt-12 md:mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <CarteProjet
            p={premier}
            n={1}
            grand
            texte={false}
            ratio="16 / 10"
            sizes="(min-width: 1024px) 700px, 100vw"
            className="lg:col-span-7"
          />
          <div className="lg:col-span-5 lg:pl-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[16px]">{premier.name}</span>
              <span className="pilule-grise">{premier.categorie}</span>
              <span className="pilule-grise">{premier.annee}</span>
            </div>
            <h3 className="t-h4 mt-4">{premier.tagline}</h3>
            <p className="t-corps mt-3">{premier.pourquoi}</p>
            <div className="mt-6">
              <Lien href={`/realisations/${premier.slug}`}>Voir le projet</Lien>
            </div>
          </div>
        </div>

        <ul className="mt-12 md:mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {autres.map((p, i) => (
            <li key={p.slug} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <CarteProjet p={p} n={i + 2} />
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
