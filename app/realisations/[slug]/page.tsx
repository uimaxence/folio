import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "../../sections/accueil/contact";
import {
  Btn,
  Capture,
  CarteProjet,
  Conteneur,
  Lien,
  ListeFleches,
  Repere,
  Section,
} from "../../components/ui";
import { project, projectShot, projects } from "@/lib/projects";
import { fr } from "@/lib/texte";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = project(slug);
  if (!p) return {};
  return {
    title: `${p.name}, ${p.categorie.toLowerCase()}`,
    description: fr(p.tagline),
    alternates: { canonical: `/realisations/${p.slug}` },
    openGraph: { title: p.name, description: fr(p.tagline), url: `/realisations/${p.slug}` },
  };
}

/** Une page courte par site : ce que c'est, pour qui, pourquoi, ce que j'ai fait. Aucune technique : seulement ce que le client lit. */
export default async function Realisation({ params }: Props) {
  const { slug } = await params;
  const p = project(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const precedent = projects[(i - 1 + projects.length) % projects.length];
  const suivant = projects[(i + 1) % projects.length];

  return (
    <>
      <Section decor="contours-doux" pad={false} className="pt-10 pb-10 md:pt-16 md:pb-16">
        <Conteneur>
          <Link href="/#realisations" className="t-mono hover:text-ink transition-colors no-underline">
            ← Toutes les réalisations
          </Link>
          <div className="mt-6">
            <Repere n={i + 1}>
              {p.categorie} · {p.annee}
            </Repere>
          </div>
          <h1 className="t-hook mt-6 max-w-[14ch]">{p.name}</h1>
          <p className="t-intro mt-6 max-w-[58ch]">{fr(p.tagline)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={p.url} external>
              Voir le site
            </Btn>
          </div>
          <Capture
            src={projectShot(p.slug)}
            alt={`La page d’accueil du site ${p.name}`}
            ratio="16 / 9"
            estompe={false}
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="mt-12 md:mt-16"
          />
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 t-mono">
            <div className="flex gap-3">
              <dt className="text-ink">Secteur</dt>
              <dd className="m-0">{p.secteur}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ink">Année</dt>
              <dd className="m-0">{p.annee}</dd>
            </div>
            {p.resultat && (
              <div className="flex gap-3">
                <dt className="text-ink">Résultat</dt>
                <dd className="m-0">
                  <span style={{ color: "var(--accent)" }}>
                    {p.resultat.valeur} {p.resultat.texte}
                  </span>{" "}
                  · {p.resultat.source}
                </dd>
              </div>
            )}
          </dl>
        </Conteneur>
      </Section>

      <Section pad={false} className="py-12 md:py-20">
        <Conteneur className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 grid gap-10 content-start">
            <div>
              <h2 className="t-h3">Pour qui</h2>
              <p className="t-corps mt-3 max-w-[48ch]">{fr(p.cible)}</p>
            </div>
            <div>
              <h2 className="t-h3">Pourquoi</h2>
              <p className="t-corps mt-3 max-w-[48ch]">{fr(p.pourquoi)}</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <h2 className="t-h3">Ce que j’ai fait</h2>
            <ListeFleches items={p.fait.map(fr)} className="mt-5 t-puce" />
          </div>
        </Conteneur>
      </Section>

      <Section pad={false} className="py-12 md:py-20">
        <Conteneur>
          <h2 className="t-h3">Autres réalisations</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
            {[precedent, suivant].map((a) => (
              <li key={a.slug}>
                <CarteProjet
                  p={a}
                  n={projects.findIndex((x) => x.slug === a.slug) + 1}
                  ratio="16 / 9"
                  sizes="(min-width: 1024px) 580px, 100vw"
                />
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Lien href="/#realisations">Voir les réalisations</Lien>
          </div>
        </Conteneur>
      </Section>

      <Contact />
    </>
  );
}
