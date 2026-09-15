export type Categorie = "Site vitrine" | "Outil" | "App / Branding" | "Association" | "Éditorial";

export type Project = {
  slug: string;
  name: string;
  categorie: Categorie;
  annee: string;
  url: string;
  /** Une phrase : ce que c'est. */
  tagline: string;
  /** Pour qui le site est fait. */
  cible: string;
  /** Pourquoi ce site, ce qu'il devait faire. */
  pourquoi: string;
  /** Ce que j'ai fait, en trois points. Un chiffre seulement avec sa source. */
  fait: string[];
  technos: string[];
};

/** Les sept sites en ligne, dans l'ordre d'affichage. Capture : /public/shots/<slug>.jpg */
export const projects: Project[] = [
  {
    slug: "fenetres-sur-loir",
    name: "Fenêtres-sur-Loir",
    categorie: "Site vitrine",
    annee: "2025",
    url: "https://www.fenetres-sur-loir.fr/",
    tagline:
      "Menuiserie familiale installée depuis plus de 20 ans en Anjou. Un site vitrine, des pages par zone d'intervention et un accompagnement mensuel de référencement local.",
    cible:
      "Particuliers et professionnels du Maine-et-Loire qui cherchent des fenêtres, des portes ou des volets près de chez eux.",
    pourquoi:
      "Rassurer les particuliers qui comparent plusieurs menuisiers, déclencher la demande de devis, puis faire remonter l'entreprise sur les recherches locales.",
    fait: [
      "Une page par zone d'intervention et une fiche Google réglée champ par champ.",
      "Un catalogue produits structuré et un formulaire de devis simple.",
      "Chaque mois : position sur Google, avis, annuaires. Valeur du trafic Google ×3,2 en cinq mois (relevé DataForSEO du 5 septembre 2026).",
    ],
    technos: ["Next.js", "Tailwind CSS", "Référencement local", "Vercel"],
  },
  {
    slug: "victoria-luz",
    name: "Victoria Luz",
    categorie: "Site vitrine",
    annee: "2026",
    url: "https://www.victoria-luz.fr/",
    tagline:
      "Artiste tatoueuse spécialisée en reconstruction corporelle : tatouage, dermopigmentation et prise de rendez-vous.",
    cible:
      "Des femmes qui cherchent un tatouage ou une reconstruction (aréoles, cicatrices) dans un cadre rassurant.",
    pourquoi:
      "Un sujet intime : le site devait mettre en confiance avant le premier message et montrer chaque prestation clairement.",
    fait: [
      "Un univers doux, entre art et soin du corps.",
      "Des prestations structurées : tatouage, reconstruction, maquillage semi-permanent.",
      "Un parcours de prise de rendez-vous court, le podcast et les événements mis en avant.",
    ],
    technos: ["Next.js", "Tailwind CSS", "Référencement local", "Vercel"],
  },
  {
    slug: "ciel-en-couleurs",
    name: "Ciel en Couleurs",
    categorie: "Site vitrine",
    annee: "2026",
    url: "https://cielencouleurs.fr/",
    tagline:
      "Fumigènes colorés pour les mariages, les gender reveals et les événements pro, en Île-de-France.",
    cible: "Couples, futurs parents et organisateurs d'événements en Île-de-France.",
    pourquoi:
      "Un service qui se vend à l'image : le site devait montrer le résultat en grand et rassurer sur la sécurité.",
    fait: [
      "Un ton poétique et des visuels en grand pour montrer les prestations.",
      "Une page par prestation : mariage, gender reveal, événements pro.",
      "Un formulaire de devis et une section sécurité et certifications.",
    ],
    technos: ["Next.js", "Tailwind CSS", "Référencement local", "Vercel"],
  },
  {
    slug: "petit-tonnerre",
    name: "Petit Tonnerre",
    categorie: "Association",
    annee: "2025",
    url: "https://www.petittonnerre.fr/",
    tagline:
      "Association culturelle qui organise des rendez-vous musicaux et familiaux. Programmation, identité et contact.",
    cible: "Le public local et les partenaires culturels intéressés par des événements musicaux accessibles.",
    pourquoi: "Donner un lieu en ligne à la programmation et faciliter le contact des partenaires.",
    fait: [
      "Une direction artistique fidèle à l'univers de l'association.",
      "Les événements et la programmation à venir en première page.",
      "Un formulaire de contact et les liens vers les réseaux.",
    ],
    technos: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "joinboost",
    name: "Boost",
    categorie: "App / Branding",
    annee: "2025",
    url: "https://www.joinboost.fr/",
    tagline:
      "Programme d'accélération pour jeunes entrepreneurs : maquettes de l'application, identité complète et site de candidature.",
    cible: "Porteurs de projets et jeunes fondateurs qui cherchent un collectif pour lancer leur entreprise.",
    pourquoi:
      "Un programme neuf : il fallait une identité reconnaissable et une page qui donne envie de candidater.",
    fait: [
      "Le branding complet et les maquettes de l'application.",
      "Une page de présentation claire, orientée vers la candidature.",
      "Une base pensée pour évoluer avec la communauté.",
    ],
    technos: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "mamie-seo",
    name: "Mamie SEO",
    categorie: "Outil",
    annee: "2025",
    url: "https://www.mamie-seo.fr/",
    tagline:
      "Un outil d'analyse de référencement en 60 secondes pour les indépendants et les petites entreprises. Un rapport concret, sans jargon.",
    cible: "Freelances, artisans et TPE qui veulent savoir où ils en sont sur Google.",
    pourquoi: "Rendre lisible un audit technique pour quelqu'un qui ne fait pas ce métier.",
    fait: [
      "Audit technique, textes et design réunis dans un seul rapport.",
      "Une interface volontairement simple, qui explique chaque point.",
      "Un appel découverte proposé à la fin du rapport.",
    ],
    technos: ["Next.js", "API SEO", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "mamie-vege",
    name: "Et si mamie était végé",
    categorie: "Éditorial",
    annee: "2025",
    url: "https://www.mamie-vege.fr/",
    tagline:
      "Recettes végétariennes riches en protéines pour les sportifs. Articles, plannings de repas et conseils.",
    cible: "Sportifs végétariens et végétaliens qui cherchent des repas protéinés faciles à préparer.",
    pourquoi:
      "Un site de contenu : la structure devait servir la lecture sur mobile et le référencement de chaque recette.",
    fait: [
      "Une architecture éditoriale pensée pour Google et la lecture sur mobile.",
      "Des articles en MDX, rapides à publier.",
      "Une identité chaleureuse, un ton accessible.",
    ],
    technos: ["Next.js", "MDX", "Vercel"],
  },
];

export function projectShot(slug: string): string {
  return `/shots/${slug}.jpg`;
}

export function project(slug: string): Project | undefined {
  return projects.find((x) => x.slug === slug);
}
