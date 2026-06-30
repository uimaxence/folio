import type { Palette } from "./palette";

export type Avis = {
  slug: string;
  nom: string;
  color: Palette;
  projet?: { label: string; href: string };
  note: number;
  texte: string;
};

export const avis: Avis[] = [
  {
    slug: "elisa-chene",
    nom: "Élisa Chene",
    color: "butter",
    projet: { label: "Fenêtres-sur-Loir", href: "#realisations" },
    note: 5,
    texte:
      "Si vous cherchez le meilleur concepteur de site internet pour votre activité, foncez voir Maxence Cailleau ! Il a réalisé un site vitrine incroyable pour une activité de menuiserie extérieure. Le webdesign est moderne, unique et hyper dynamique. Techniquement, le site fonctionne à la perfection et offre une super expérience utilisateur. Maxence est ultra-professionnel, présent et force de proposition à chaque étape. C'est le partenaire idéal pour digitaliser le savoir-faire des artisans !",
  },
  {
    slug: "matteo-robert",
    nom: "Mattéo Robert",
    color: "sky",
    projet: { label: "Boost", href: "#realisations" },
    note: 5,
    texte:
      "Bientôt un an que je travaille avec Maxence sur la conception des maquettes de mon application, du branding complet de mon projet et j'ai toujours été satisfait du travail fourni. Les délais sont toujours respectés et Maxence est en plus de ça force de proposition pour aller toujours plus loin dans le projet. Je recommande les yeux fermés.",
  },
  {
    slug: "manon",
    nom: "Manon",
    color: "blush",
    note: 5,
    texte:
      "Maxence a créé mon site internet, il est dans l'air du temps, et tout s'est très bien passé, très réactif. Je recommande.",
  },
];
