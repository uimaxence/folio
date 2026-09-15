import Link from "next/link";
import { Acc, Capture, Conteneur, Etiquette, Lien, Section } from "../../components/ui";
import { projectShot, projects } from "@/lib/projects";

/** Les sept sites en ligne : le premier en grand, les six autres en grille. Chaque site a sa page. */
export function Realisations() {
  const [premier, ...autres] = projects;
  return (
    <Section id="realisations" pad={false} className="py-16 md:py-24">
      <Conteneur>
        <Etiquette point={2}>Réalisations</Etiquette>
        <h2 className="t-h2 mt-6 max-w-[18ch]">
          Sept sites en ligne, du premier <Acc>pixel</Acc> à la mise en ligne.
        </h2>

        <div className="mt-12 md:mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Link href={`/realisations/${premier.slug}`} className="lg:col-span-7 block group">
            <Capture
              src={projectShot(premier.slug)}
              alt={`La page d’accueil du site ${premier.name}`}
              ratio="16 / 10"
              estompe={false}
              sizes="(min-width: 1024px) 700px, 100vw"
              className="transition-transform duration-200 ease-out group-hover:-translate-y-1"
            />
          </Link>
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
          {autres.map((p) => (
            <li key={p.slug}>
              <Link href={`/realisations/${p.slug}`} className="block group">
                <Capture
                  src={projectShot(p.slug)}
                  alt={`La page d’accueil du site ${p.name}`}
                  ratio="4 / 3"
                  estompe={false}
                  petite
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="transition-transform duration-200 ease-out group-hover:-translate-y-1"
                />
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="t-h4">{p.name}</span>
                  <span className="pilule-grise">{p.categorie}</span>
                </div>
                <p className="t-corps text-[15px] mt-1 text-ink-2">{p.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
