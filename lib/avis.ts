export type Avis = {
  slug: string;
  nom: string;
  /** Le site du client, affiché sous le nom. */
  site?: { label: string; href: string };
  /** Extrait verbatim, coupures marquées par […]. Jamais reformulé. */
  extrait: string;
  /** Le groupe de mots à marquer dans l'extrait (les superlatifs sont ceux du client). */
  fort?: string;
  /** L'avis complet, tel que publié. */
  texte: string;
};

/** Seulement des avis réellement publiés. On coupe avec […], on ne reformule pas. */
export const avis: Avis[] = [
  {
    slug: "elisa-chene",
    nom: "Élisa Chene",
    site: { label: "Fenêtres-sur-Loir", href: "https://www.fenetres-sur-loir.fr/" },
    extrait:
      "[…] Le webdesign est moderne, unique et hyper dynamique. Techniquement, le site fonctionne à la perfection […] Maxence est ultra-professionnel, présent et force de proposition à chaque étape.",
    fort: "force de proposition",
    texte:
      "Si vous cherchez le meilleur concepteur de site internet pour votre activité, foncez voir Maxence Cailleau ! Il a réalisé un site vitrine incroyable pour une activité de menuiserie extérieure. Le webdesign est moderne, unique et hyper dynamique. Techniquement, le site fonctionne à la perfection et offre une super expérience utilisateur. Maxence est ultra-professionnel, présent et force de proposition à chaque étape. C'est le partenaire idéal pour digitaliser le savoir-faire des artisans !",
  },
  {
    slug: "matteo-robert",
    nom: "Mattéo Robert",
    site: { label: "Boost", href: "https://www.joinboost.fr/" },
    extrait:
      "Bientôt un an que je travaille avec Maxence sur la conception des maquettes de mon application, du branding complet de mon projet […] Les délais sont toujours respectés et Maxence est en plus de ça force de proposition […] Je recommande les yeux fermés.",
    fort: "Les délais sont toujours respectés",
    texte:
      "Bientôt un an que je travaille avec Maxence sur la conception des maquettes de mon application, du branding complet de mon projet et j'ai toujours été satisfait du travail fourni. Les délais sont toujours respectés et Maxence est en plus de ça force de proposition pour aller toujours plus loin dans le projet. Je recommande les yeux fermés.",
  },
  {
    slug: "manon",
    nom: "Manon",
    extrait:
      "Maxence a créé mon site internet, il est dans l'air du temps, et tout s'est très bien passé, très réactif. Je recommande.",
    fort: "très réactif",
    texte:
      "Maxence a créé mon site internet, il est dans l'air du temps, et tout s'est très bien passé, très réactif. Je recommande.",
  },
];
