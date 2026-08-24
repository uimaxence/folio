import type { Palette } from "./palette";

export type ProjectCategory =
  | "Site vitrine"
  | "Outil"
  | "App / Branding"
  | "Association"
  | "Éditorial";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  color: Palette;
  tagline: string;
  cible: string;
  technos: string[];
  duree: string;
  annee: string;
  url: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "fenetres-sur-loir",
    name: "Fenêtres-sur-Loir",
    category: "Site vitrine",
    color: "butter",
    tagline:
      "Site vitrine pour une menuiserie installée près d'Angers depuis plus de 20 ans. Captation de leads locaux et présentation du catalogue sur-mesure.",
    cible:
      "Particuliers et professionnels du Maine-et-Loire cherchant fenêtres, portes et volets sur-mesure",
    technos: ["Next.js", "Tailwind CSS", "SEO local", "Vercel"],
    duree: "2 semaines",
    annee: "2025",
    url: "https://www.fenetres-sur-loir.fr/",
    highlights: [
      "SEO local Maine-et-Loire (pages villes, fiche Google Business)",
      "Catalogue produits structuré, formulaire de devis fluide",
      "Mise en ligne, hébergement et suivi inclus",
    ],
  },
  {
    slug: "mamie-vege",
    name: "Et si mamie était végé ?",
    category: "Éditorial",
    color: "sage",
    tagline:
      "Plateforme de recettes végétariennes riches en protéines pour sportifs. Articles, plannings repas et conseils nutritionnels.",
    cible:
      "Sportifs végétariens et végétaliens cherchant des repas protéinés et faciles à préparer",
    technos: ["Next.js", "MDX", "SEO contenu", "Vercel"],
    duree: "3 semaines",
    annee: "2025",
    url: "https://www.mamie-vege.fr/",
    highlights: [
      "Architecture éditoriale optimisée SEO et lisibilité mobile",
      "Système d'articles MDX rapide à mettre à jour",
      "Identité visuelle chaleureuse, ton accessible",
    ],
  },
  {
    slug: "mamie-seo",
    name: "Mamie SEO",
    category: "Outil",
    color: "blush",
    tagline:
      "Outil d'analyse SEO en 60 secondes pour indépendants et petites entreprises. Rapport concret, sans jargon.",
    cible:
      "Freelances, artisans et TPE qui veulent comprendre où ils en sont en référencement",
    technos: ["Next.js", "API SEO", "Tailwind CSS", "Vercel"],
    duree: "2 semaines",
    annee: "2025",
    url: "https://www.mamie-seo.fr/",
    highlights: [
      "Audit technique + copy + design en un seul rapport",
      "Interface volontairement simple, pédagogique",
      "Conversion en appel découverte intégrée",
    ],
  },
  {
    slug: "joinboost",
    name: "Boost",
    category: "App / Branding",
    color: "sky",
    tagline:
      "Site de communauté pour une accélération dédiée aux jeunes entrepreneurs. Présentation du programme, du collectif et inscription en ligne.",
    cible:
      "Porteurs de projets et jeunes fondateurs cherchant un écosystème pour lancer et accélérer leur boîte",
    technos: ["Next.js", "Tailwind CSS", "Vercel"],
    duree: "2 semaines",
    annee: "2025",
    url: "https://www.joinboost.fr/",
    highlights: [
      "Page de vente claire, orientée conversion vers la candidature",
      "Identité dynamique alignée avec un positionnement « nouvelle génération »",
      "Architecture pensée pour évoluer avec la communauté",
    ],
  },
  {
    slug: "victoria-luz",
    name: "Victoria Luz",
    category: "Site vitrine",
    color: "clay",
    tagline:
      "Site vitrine pour une artiste tatoueuse angevine spécialisée en reconstruction corporelle. Tatouage sur-mesure, dermopigmentation et prise de rendez-vous.",
    cible:
      "Femmes cherchant un tatouage sur-mesure ou une reconstruction (aréoles 3D, cicatrices) dans un cadre bienveillant",
    technos: ["Next.js", "Tailwind CSS", "SEO local", "Vercel"],
    duree: "2 semaines",
    annee: "2026",
    url: "https://www.victoria-luz.fr/",
    highlights: [
      "Univers doux et haut de gamme, entre art et soin du corps",
      "Prestations structurées : tatouage, reconstruction, maquillage semi-permanent",
      "Parcours de prise de rendez-vous clair, podcast et événements mis en avant",
    ],
  },
  {
    slug: "ciel-en-couleurs",
    name: "Ciel en Couleurs",
    category: "Site vitrine",
    color: "terracotta",
    tagline:
      "Site vitrine pour un prestataire de fumigènes colorés événementiels en Île-de-France. Mariages, gender reveals et événements pro.",
    cible:
      "Couples, futurs parents et organisateurs d'événements en Île-de-France cherchant une animation visuelle marquante",
    technos: ["Next.js", "Tailwind CSS", "SEO local", "Vercel"],
    duree: "2 semaines",
    annee: "2026",
    url: "https://cielencouleurs.fr/",
    highlights: [
      "Ton poétique et visuels immersifs pour valoriser les prestations",
      "Pages prestations détaillées (mariage, gender reveal, événements pro)",
      "Formulaire de devis et réassurance sécurité / certifications",
    ],
  },
  {
    slug: "petit-tonnerre",
    name: "Petit Tonnerre",
    category: "Association",
    color: "lavender",
    tagline:
      "Site vitrine pour une association culturelle angevine qui organise des rendez-vous musicaux et familiaux. Programmation, identité et contact.",
    cible:
      "Public angevin et partenaires culturels intéressés par des événements musicaux accessibles et inclusifs",
    technos: ["Next.js", "Tailwind CSS", "Vercel"],
    duree: "2 semaines",
    annee: "2025",
    url: "https://www.petittonnerre.fr/",
    highlights: [
      "Direction artistique poétique, fidèle à l'univers de l'association",
      "Mise en avant des événements et de la programmation à venir",
      "Formulaire de contact et liens réseaux sociaux intégrés",
    ],
  },
];

// Capture statique de la home de chaque site, servie depuis /public/shots.
// (Remplace l'ancien aperçu à la volée via l'API microlink, lent et peu fiable.)
export function projectShot(slug: string): string {
  return `/shots/${slug}.jpg`;
}
