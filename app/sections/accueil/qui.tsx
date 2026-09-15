import { Acc, Conteneur, Etiquette, Section, Signature } from "../../components/ui";
import { avis } from "@/lib/avis";
import { projects } from "@/lib/projects";
import { site, stats } from "@/lib/site";

/** Qui parle. Une seule personne, pas de portrait en grand : la signature suffit. Quatre chiffres, tous vérifiables. */
export function Qui() {
  const chiffres = [
    { valeur: String(projects.length), texte: "sites en ligne, dessinés et codés à la main" },
    { valeur: String(stats.clientsSuivis), texte: "clients accompagnés chaque mois" },
    { valeur: "5,0 / 5", texte: `sur les ${avis.length} avis publiés` },
    { valeur: stats.resultat.valeur, texte: stats.resultat.texte, source: stats.resultat.source },
  ];
  return (
    <Section id="qui" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <Etiquette point={4}>Qui je suis</Etiquette>
          <h2 className="t-h2 mt-6">
            Une seule personne, du premier pixel au rapport <Acc>mensuel</Acc>.
          </h2>
          <p className="t-intro mt-6 max-w-[54ch]">
            Je m’appelle Maxence, développeur web et consultant SEO à {site.ville}. Je dessine, je
            code, je mets en ligne et je suis ta position sur Google. Tu sais toujours qui fait quoi.
          </p>
          <p className="t-corps mt-4 max-w-[60ch]">
            J’applique à tes pages ce que j’applique aux miennes : Mamie SEO et Et si mamie était
            végé sont mes propres sites. Je travaille avec des artisans, des commerçants, des
            indépendants et des petites équipes, à {site.ville} et à distance partout en France.
          </p>
          <div className="mt-8">
            <Signature />
          </div>
        </div>
        <ul className="lg:col-span-6 grid gap-5 sm:grid-cols-2 list-none p-0 m-0 lg:pl-8">
          {chiffres.map((c) => (
            <li key={c.texte} className="carte-droite flex flex-col gap-2">
              <span className="t-chiffre-carte">{c.valeur}</span>
              <span className="t-corps text-[15px]">{c.texte}</span>
              {"source" in c && c.source && <span className="t-meta mt-auto pt-2">{c.source}</span>}
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
