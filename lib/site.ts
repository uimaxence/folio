/**
 * Configuration centrale du site. Tout ce qui est affiché à plusieurs endroits
 * (accroche, mail, tarifs, liens) vit ici, une seule fois.
 *
 * Les champs marqués « À REMPLIR » sont à compléter avant la mise en ligne.
 */
export const site = {
  name: "Maxence Cailleau",
  /** Accroche officielle, toujours écrite ainsi. */
  accroche: "développement web & accompagnement SEO",
  url: "https://maxencecailleau.fr",
  email: "maxencecailleau.pro@gmail.com",
  ville: "Angers",
  zone: "Angers · à distance partout",

  linkedin: "https://www.linkedin.com/in/maxence-cailleau-814871197/",
  /** À REMPLIR : URL du profil Instagram (vide = lien masqué). */
  instagram: "",
  /** Prise de rendez-vous : 30 min, gratuit, sans engagement. */
  calUrl: "https://cal.com/mc.maxence/appel-de-decouverte",
  /** À REMPLIR : SIREN, affiché dans les mentions légales quand renseigné. */
  siren: "",

  tarifs: {
    /** Création d'un site, « à partir de ». */
    site: 900,
    /** À CONFIRMER : même prix qu'une création, ou « Sur devis après un premier appel ». */
    refonte: 900,
    /** Accompagnement mensuel HT, « à partir de ». */
    accompagnement: 90,
    engagementMois: 9,
  },
} as const;

/** Chiffres de réassurance, tous vérifiables sur le site. À CONFIRMER : le nombre de clients accompagnés chaque mois. */
export const stats = {
  clientsSuivis: 5,
  /** Résultat sourcé, cité aussi sur la page de la réalisation. */
  resultat: {
    valeur: "×3,2",
    texte: "la valeur du trafic Google de Fenêtres-sur-Loir, en cinq mois",
    source: "Relevé DataForSEO du 5 septembre 2026",
  },
} as const;

export const mailtoHref = `mailto:${site.email}`;

/** « 900 € », « 1 500 € » : espace fine avant le symbole. */
export function euros(n: number): string {
  return `${n.toLocaleString("fr-FR")} €`;
}

/* ------------------------------------------------------------------
   Chiffres. Règle DESIGN.md §10.2 : chaque chiffre a une source ou un
   contexte, sinon il n'apparaît pas. Remplir `source` pour l'afficher.
------------------------------------------------------------------- */

export type Chiffre = { valeur: string; texte: string; source: string };

export const chiffres = {
  /** À REMPLIR : source. */
  troisFiches: {
    valeur: "7 clients sur 10",
    texte: "passent par les trois fiches en haut de la carte",
    source: "",
  },
  /** À REMPLIR : source. */
  fiche: {
    valeur: "~90 %",
    texte: "des demandes locales passent par la fiche Google",
    source: "",
  },
  /** À REMPLIR : source. */
  appels: {
    valeur: "3 à 5×",
    texte: "plus d'appels à trafic égal, quand le site convertit",
    source: "",
  },
  top3: {
    valeur: "6 à 9 mois",
    texte: "pour viser le top 3 dans ta zone",
    source: "Mon estimation, selon la concurrence du secteur",
  },
} satisfies Record<string, Chiffre>;

export function avecSource(c: Chiffre): boolean {
  return c.source.trim().length > 0;
}

