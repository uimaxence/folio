import { Acc, Conteneur, Etiquette, Section, Signature } from "../../components/ui";
import { avis } from "@/lib/avis";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

/** Qui parle. Une seule personne, pas de portrait en grand : la signature suffit. */
export function Qui() {
  const chiffres = [
    { valeur: String(projects.length), texte: "sites en ligne" },
    { valeur: `${avis.length} avis`, texte: "5 étoiles sur 5" },
    { valeur: "1", texte: "interlocuteur, du début à la fin" },
  ];
  return (
    <Section id="qui" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
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
        <ul className="lg:col-span-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 list-none p-0 m-0 lg:pl-8">
          {chiffres.map((c) => (
            <li key={c.texte} className="carte-droite flex flex-col gap-2">
              <span className="t-chiffre-carte">{c.valeur}</span>
              <span className="t-corps text-[15px] text-[#6f6f6a]">{c.texte}</span>
            </li>
          ))}
        </ul>
      </Conteneur>
    </Section>
  );
}
