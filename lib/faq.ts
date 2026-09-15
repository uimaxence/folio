import { euros, site } from "./site";

export type Question = { q: string; r: string };

const engagement = `${site.tarifs.engagementMois} mois`;

export const faqAccueil: Question[] = [
  {
    q: "Comment on travaille ensemble ?",
    r: "On échange à chaque étape : maquette, contenus, mise en ligne. Tu vois tout et tu valides tout. Tu as un seul interlocuteur, moi, du premier appel au rapport mensuel.",
  },
  {
    q: "Est-ce que je suis engagé ?",
    r: `La création du site est un achat unique : le site t'appartient. L'accompagnement mensuel couvre l'hébergement, la maintenance et, selon ton ambition, le référencement local. Il est engagé sur ${engagement}.`,
  },
  {
    q: "Et si je veux modifier mon site plus tard ?",
    r: "Les modifications courantes sont comprises dans l'accompagnement. Pour une évolution plus grosse, on en parle et je te fais un devis simple.",
  },
  {
    q: "J'ai déjà un site, tu peux le reprendre ?",
    r: "Oui. On regarde ensemble ce qui marche, et je refais ce qui bloque.",
  },
  {
    q: "Qu'est-ce qui fait varier le prix ?",
    r: "Le nombre de pages, les fonctions (devis en ligne, prise de rendez-vous), les contenus à écrire, et le niveau de référencement visé. Après un premier échange, tu reçois un devis poste par poste.",
  },
  {
    q: `Tu travailles seulement avec ${site.ville} ?`,
    r: `Je suis basé à ${site.ville} et je travaille surtout avec le Maine-et-Loire et les Pays de la Loire. Tout se fait très bien à distance.`,
  },
  {
    q: "Tu garantis la première place sur Google ?",
    r: "Non. Personne ne contrôle l'algorithme de Google, et méfie-toi de ceux qui le promettent. Je garantis d'actionner correctement chaque levier qui compte, et de te montrer chaque mois ce qui progresse.",
  },
];

export const faqAccompagnement: Question[] = [
  {
    q: "Faut-il déjà avoir un site ?",
    r: `Si tu en as un, on l'optimise. Sinon, je le crée à partir de ${euros(site.tarifs.site)}, construit pour le référencement dès le départ.`,
  },
  {
    q: "En combien de temps j'aurai des résultats ?",
    r: "La fiche gagne en visibilité dès les premières semaines. Pour viser le top 3, compte 6 à 9 mois selon la concurrence de ton secteur. L'avance prise est ensuite difficile à rattraper.",
  },
  {
    q: "C'est en plus de la maintenance de mon site ?",
    r: "Tout est compris : hébergement, maintenance et modifications courantes. Un seul abonnement.",
  },
  {
    q: `Pourquoi ${engagement} ?`,
    r: "C'est la durée réaliste pour construire une place solide dans le top 3. Plus court, on s'arrêterait juste avant que ça décolle.",
  },
  {
    q: "Tu garantis la première place ?",
    r: "Non. Personne ne contrôle l'algorithme de Google. Je garantis d'actionner chaque levier qui compte et de te montrer chaque mois ce qui progresse.",
  },
];
