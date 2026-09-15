import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "../../sections/accueil/contact";
import {
  Badge,
  Btn,
  Capture,
  Conteneur,
  Etiquette,
  Lien,
  ListeFleches,
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

/** Une page courte par site : ce que c'est, pour qui, pourquoi, ce que j'ai fait. */
export default async function Realisation({ params }: Props) {
  const { slug } = await params;
  const p = project(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const precedent = projects[(i - 1 + projects.length) % projects.length];
  const suivant = projects[(i + 1) % projects.length];

  return (
    <>
      <Section halo pad={false} className="pt-12 pb-10 md:pt-20 md:pb-16">
        <Conteneur>
          <Link href="/#realisations" className="t-meta hover:text-ink transition-colors">
            ← Toutes les réalisations
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{p.categorie}</Badge>
            <span className="pilule-grise">{p.annee}</span>
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
            <ul className="mt-8 flex flex-wrap gap-2 list-none p-0 m-0">
              {p.technos.map((t) => (
                <li key={t}>
                  <Etiquette point={4}>{t}</Etiquette>
                </li>
              ))}
            </ul>
          </div>
        </Conteneur>
      </Section>

      <Section pad={false} className="py-12 md:py-20">
        <Conteneur>
          <h2 className="t-h3">Autres réalisations</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
            {[precedent, suivant].map((a) => (
              <li key={a.slug}>
                <Link href={`/realisations/${a.slug}`} className="block group">
                  <Capture
                    src={projectShot(a.slug)}
                    alt={`La page d’accueil du site ${a.name}`}
                    ratio="16 / 9"
                    estompe={false}
                    petite
                    sizes="(min-width: 1024px) 580px, 100vw"
                    className="transition-transform duration-200 ease-out group-hover:-translate-y-1"
                  />
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="t-h4">{a.name}</span>
                    <span className="pilule-grise">{a.categorie}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Lien href="/#realisations">Voir les sept sites</Lien>
          </div>
        </Conteneur>
      </Section>

      <Contact />
    </>
  );
}
