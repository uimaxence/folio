import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/logo";
import { Sticker } from "../components/sticker";
import { AnimatedCTA } from "../components/animated-cta";

export const metadata: Metadata = {
  title: "Référencement local à Angers · Maxence Cailleau",
  description:
    "Apparaissez dans les 3 premières fiches Google sur votre métier. Fiche Google, site et avis gérés par une seule personne. Pensé pour les artisans, indépendants, agences et prestations de services à Angers.",
  openGraph: {
    title: "Référencement local · Maxence Cailleau",
    description:
      "Le levier n°1 pour un métier de proximité : gagner les 3 places du pack local Google. Audit gratuit.",
    locale: "fr_FR",
    type: "website",
  },
};

/* ---------- petites icônes ---------- */

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 14 14"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7l3 3 5-6" />
    </svg>
  );
}

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 22 14"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 7H3M8 2L3 7l5 5" />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}

/* ---------- données ---------- */

const metiers = [
  "PLOMBIER",
  "ÉLECTRICIEN",
  "ARTISAN",
  "COMMERÇANT",
  "INDÉPENDANT",
  "AGENCE",
  "PRESTATAIRE",
];

const stats = [
  {
    value: "~90 %",
    label: "des demandes locales passent par la fiche Google, pas par un blog.",
    color: "bg-sky",
  },
  {
    value: "3 à 5×",
    label: "plus d'appels à trafic égal quand le site convertit vraiment.",
    color: "bg-blush",
  },
  {
    value: "6 à 9 mois",
    label: "pour viser le top 3 du pack local dans votre zone.",
    color: "bg-lavender",
  },
];

const leviers = [
  {
    n: "01",
    title: "Votre fiche Google",
    tag: "LE N°1",
    body: "Bonnes catégories principale et secondaires, services détaillés, section produits, vraies photos de terrain, publications régulières, réponses aux avis. C'est ~90 % de vos demandes qui se jouent ici.",
    color: "bg-butter",
  },
  {
    n: "02",
    title: "Votre site",
    tag: "CE QUI VOUS MAINTIENT EN HAUT",
    body: "Une page par prestation, des titres pensés pour votre métier, des pages « ville » solides, un bouton d'appel toujours visible. Un site qui transforme les visites en appels, pas juste en visites.",
    color: "bg-sage",
  },
  {
    n: "03",
    title: "Vos signaux de confiance",
    tag: "EN CONTINU",
    body: "Un flux d'avis récents, une présence cohérente sur les annuaires (Pages Jaunes, Solocal, Trustpilot…), des liens locaux pertinents. La régularité bat le volume figé de vos concurrents.",
    color: "bg-blush",
  },
];

type Plan = {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  lead?: string;
  items: string[];
  color: string;
  featured?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Présence",
    price: "190 €",
    priceNote: "/ mois",
    tagline: "Rester visible et entretenu, sans y penser.",
    items: [
      "Hébergement & maintenance de votre site inclus",
      "Publications sur la fiche Google (2×/sem)",
      "Réponse à tous vos avis",
      "Surveillance de votre position",
      "Rapport mensuel clair",
    ],
    color: "bg-sky",
  },
  {
    name: "Croissance",
    price: "390 €",
    priceNote: "/ mois",
    tagline: "Grimper activement dans le top 3 et le tenir.",
    lead: "Tout Présence, plus :",
    items: [
      "Collecte d'avis (QR code, 20–30/mois)",
      "Liens et citations locaux (CMA, CCI, presse)",
      "1 page « ville » rédigée / mois",
      "1 communiqué de presse local / mois",
    ],
    color: "bg-butter",
    featured: true,
    badge: "RECOMMANDÉ",
  },
  {
    name: "Autorité",
    price: "590 €",
    priceNote: "/ mois",
    tagline: "Dominer votre zone et être cité par les IA.",
    lead: "Tout Croissance, plus :",
    items: [
      "2 pages « ville » rédigées / mois",
      "Référencement sur les IA (ChatGPT, Perplexity, Gemini)",
      "Accompagnement prioritaire",
      "Fondations (490 €) offertes",
    ],
    color: "bg-lavender",
  },
];

const engagements = [
  {
    title: "Aucune technique risquée",
    body: "Pas de bourrage de mots-clés dans le nom de votre fiche : c'est contraire aux règles de Google et ça peut faire suspendre la fiche. Je joue sur le long terme.",
  },
  {
    title: "Un rapport que vous comprenez",
    body: "Chaque mois, un point clair : votre position, les avis gagnés, ce qui a été fait. Pas de jargon, pas de rapport de 40 pages illisibles.",
  },
  {
    title: "Une seule personne, du début à la fin",
    body: "Vous ne passez pas de main en main. Design, développement, référencement : c'est moi. Vous savez toujours à qui parler.",
  },
  {
    title: "Un engagement qui a du sens",
    body: "9 mois, parce que c'est le temps qu'il faut pour construire de vrais résultats, pas pour vous enfermer. La durée correspond au travail, tout simplement.",
  },
];

const timeline = [
  {
    when: "Semaines 1–3",
    what: "Fondations posées : fiche optimisée, site restructuré, annuaires à jour.",
  },
  {
    when: "Mois 1–3",
    what: "Premiers mouvements : la fiche gagne en visibilité, les premiers avis récents arrivent.",
  },
  {
    when: "Mois 4–6",
    what: "Montée dans le pack : vous apparaissez sur plus de recherches, dans plus de communes.",
  },
  {
    when: "Mois 6–9",
    what: "Top 3 visé : figurer parmi les 3 fiches en haut de la carte sur vos requêtes clés.",
  },
];

const faq = [
  {
    q: "Pourquoi un coût de démarrage ?",
    a: "Parce que 80 % du résultat vient d'une fiche Google et d'un site bien construits au départ. Sans ces fondations, l'abonnement mensuel travaille dans le vide. On le fait une fois, proprement, et il sert pour toute la suite. Il est offert sur le pack Autorité.",
  },
  {
    q: "En combien de temps j'aurai des résultats ?",
    a: "La fiche optimisée gagne en visibilité dès les premières semaines. Pour viser le top 3 du pack local, comptez 6 à 9 mois selon la concurrence de votre secteur. C'est un marathon, pas un sprint, et l'avance prise est ensuite difficile à rattraper.",
  },
  {
    q: "Vous garantissez la première place sur Google ?",
    a: "Non, et méfiez-vous de ceux qui la promettent : personne ne contrôle l'algorithme de Google. Ce que je garantis, c'est d'actionner correctement tous les leviers qui comptent, et de vous montrer chaque mois exactement ce qui progresse.",
  },
  {
    q: "C'est en plus de la maintenance de mon site ?",
    a: "Oui, c'est complémentaire. La maintenance garde votre site en bonne santé ; le référencement le fait travailler pour ramener des clients. On voit ensemble comment les combiner selon votre situation.",
  },
  {
    q: "Pourquoi un engagement de 9 mois ?",
    a: "Parce que c'est la durée réaliste pour construire une place solide dans le top 3. Un engagement plus court reviendrait à s'arrêter juste avant que ça décolle. Vous pouvez monter de pack à tout moment pendant la période.",
  },
];

/* ---------- composants ---------- */

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative ${plan.color} rounded-3xl p-7 md:p-8 flex flex-col ${
        plan.featured ? "ring-2 ring-ink/80" : ""
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-ink text-paper rounded-full px-3 py-1 text-[11px] tracking-[0.12em] font-medium">
          <Star className="w-3 h-3" />
          {plan.badge}
        </span>
      )}

      <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
        {plan.name}
      </h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          {plan.price}
        </span>
        <span className="text-[13px] tracking-[0.1em] text-ink/55">
          {plan.priceNote}
        </span>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
        {plan.tagline}
      </p>

      {plan.lead && (
        <p className="mt-5 text-[14px] font-medium text-ink">{plan.lead}</p>
      )}

      <ul className="mt-4 flex flex-col gap-2.5">
        {plan.items.map((it) => (
          <li key={it} className="flex items-start gap-2.5">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
              <Check className="w-2.5 h-2.5" />
            </span>
            <span className="text-[15px] leading-snug text-ink/85">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- page ---------- */

export default function ReferencementLocal() {
  return (
    <>
      {/* Header léger */}
      <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-rule">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-5 md:px-8 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.12em] text-mute hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-3" />
            <span className="hidden sm:inline">RETOUR</span>
          </Link>
          <Link href="/" aria-label="Accueil">
            <Logo className="h-8 w-auto" />
          </Link>
          <AnimatedCTA
            href="/#contact"
            variant="primary"
            icon="calendar"
            className="!px-4 !py-2 text-[13px]"
          >
            AUDIT GRATUIT
          </AnimatedCTA>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-6 md:px-20 lg:px-32 pt-16 md:pt-24 pb-14 text-center">
          <Sticker
            name="referencement"
            size={110}
            rotate={12}
            className="hidden md:block absolute top-6 right-8 lg:right-24"
          />
          <p className="text-[14px] tracking-[0.18em] text-mute mb-5">
            RÉFÉRENCEMENT LOCAL · ANGERS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.06]">
            APPARAISSEZ <span className="text-terracotta">EN PREMIER</span> QUAND
            ON CHERCHE VOTRE MÉTIER.
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Fiche Google, site et avis gérés par une seule personne. Pensé pour
            les <strong className="text-ink font-semibold">artisans</strong>, et
            tout aussi efficace pour les indépendants, agences et prestations de
            services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <AnimatedCTA href="/#contact" variant="primary" icon="calendar">
              RÉSERVER MON AUDIT GRATUIT
            </AnimatedCTA>
            <AnimatedCTA href="#offres" variant="secondary" icon="arrow">
              VOIR LES OFFRES
            </AnimatedCTA>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {metiers.map((m) => (
              <li
                key={m}
                className="inline-flex items-center bg-paper rounded-full px-3 py-1.5 text-[12px] tracking-[0.12em] text-ink/70"
              >
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* Le vrai levier */}
        <section className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] tracking-[0.18em] text-mute mb-4">
                LE VRAI LEVIER
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                VOTRE FICHE GOOGLE,{" "}
                <span className="text-terracotta">PAS LE BLOG.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
                Pour un métier d&rsquo;intervention (plombier, électricien,
                artisan, commerçant), 7 clients sur 10 vous trouvent via les 3
                fiches Google en haut de la carte. Le référencement, c&rsquo;est
                d&rsquo;abord gagner ces 3 places. C&rsquo;est exactement là que
                je concentre le travail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className={`${s.color} rounded-3xl p-7 md:p-8 flex flex-col gap-3`}
                >
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink/80">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* La méthode */}
        <section className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] tracking-[0.18em] text-mute mb-4">
                LA MÉTHODE
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                TROIS LEVIERS,{" "}
                <span className="text-terracotta">DANS LE BON ORDRE.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {leviers.map((l) => (
                <div
                  key={l.n}
                  className={`${l.color} rounded-3xl p-7 md:p-8 flex flex-col gap-4`}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center text-[12px] tracking-[0.14em] bg-paper rounded-full px-2.5 py-1 text-ink/70">
                      {l.n}
                    </span>
                    <span className="inline-flex items-center text-[11px] tracking-[0.1em] font-medium text-ink/60">
                      {l.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {l.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/80">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Les offres */}
        <section id="offres" className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] tracking-[0.18em] text-mute mb-4">
                LES OFFRES
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                ON POSE LES FONDATIONS,{" "}
                <span className="text-terracotta">PUIS ON GRIMPE.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
                On démarre toujours par les fondations, c&rsquo;est ce qui rend
                tout le reste efficace. Ensuite, vous choisissez le pack mensuel
                qui correspond à votre ambition. Engagement de 9 mois : la durée
                réaliste pour construire une place dans le top 3 et la tenir.
              </p>
            </div>

            {/* Étape 1, Fondations */}
            <p className="text-[13px] tracking-[0.14em] text-mute mb-5">
              ÉTAPE 1 · LES FONDATIONS
            </p>
            <div className="bg-clay rounded-3xl p-7 md:p-9 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              <div className="lg:w-2/5">
                <div className="flex items-baseline gap-2">
                  <span className="text-[13px] tracking-[0.1em] text-ink/55">
                    à partir de
                  </span>
                  <span className="text-3xl md:text-4xl font-bold tracking-tight">
                    490 €
                  </span>
                  <span className="text-[13px] tracking-[0.1em] text-ink/55">
                    paiement unique
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                  La mise à niveau complète de votre présence, sur un site de
                  base. Faite une fois, elle sert pour toujours.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 bg-paper rounded-full px-3 py-1.5 text-[12px] tracking-[0.1em] font-medium text-ink">
                  <Star className="w-3 h-3" />
                  OFFERTE SUR LE PACK AUTORITÉ
                </p>
              </div>
              <ul className="lg:w-3/5 grid sm:grid-cols-2 gap-3">
                {[
                  "Audit complet : où vous perdez des appels aujourd'hui (fiche figée, avis ignorés, prestations invisibles, concurrents devant vous)",
                  "Optimisation de la fiche Google : catégories, services, produits, photos",
                  "Structure du site : une page par prestation, titres et données optimisés",
                  "Inscription et cohérence sur les annuaires (Pages Jaunes, Solocal, Trustpilot…)",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="text-[15px] leading-snug text-ink/85">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Étape 2, Packs mensuels */}
            <p className="text-[13px] tracking-[0.14em] text-mute mt-16 mb-5">
              ÉTAPE 2 · VOTRE PACK MENSUEL
            </p>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {plans.map((p) => (
                <PlanCard key={p.name} plan={p} />
              ))}
            </div>

            {/* ROI */}
            <div className="mt-8 bg-ink text-paper rounded-3xl p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-2xl md:text-3xl font-bold tracking-tight md:w-1/2">
                1 chantier de plus par mois, et l&rsquo;abonnement est{" "}
                <span className="text-terracotta">remboursé.</span>
              </p>
              <p className="text-[15px] leading-relaxed text-paper/80 md:w-1/2">
                Pour un artisan dont le panier moyen dépasse le millier
                d&rsquo;euros, une seule demande supplémentaire suffit souvent à
                couvrir le pack sur le mois. Tout le reste, c&rsquo;est du chiffre
                en plus.
              </p>
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-ink/55 max-w-3xl">
              Prix HT. Les fondations (à partir de 490 €) sont le point de départ
              de chaque pack. Hébergement, maintenance et modifications courantes
              de votre site sont inclus dans chaque pack.
            </p>
          </div>
        </section>

        {/* La longueur d'avance, IA */}
        <section className="px-6 md:px-20 lg:px-32 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-sage rounded-[28px] md:rounded-[36px] p-8 md:p-12">
              <Sticker
                name="but"
                size={90}
                rotate={-10}
                className="absolute z-10 -top-8 right-6 md:-top-10 md:right-10"
              />
              <p className="text-[13px] tracking-[0.18em] text-ink/55 mb-4">
                LA LONGUEUR D&rsquo;AVANCE
              </p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-3xl">
                VOS CLIENTS DEMANDENT AUSSI{" "}
                <span className="text-terracotta">À CHATGPT.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-3xl leading-relaxed">
                « Quel plombier fiable près de chez moi ? » De plus en plus de
                gens posent la question à une IA plutôt qu&rsquo;à Google. Ces
                réponses puisent dans les mêmes annuaires, avis et articles que le
                référencement local. La fenêtre est encore ouverte : les premiers
                à s&rsquo;y installer seront difficiles à déloger. C&rsquo;est
                inclus dans le pack Autorité, et 99 % des agences artisan ne le
                proposent pas encore.
              </p>
            </div>
          </div>
        </section>

        {/* Mes engagements */}
        <section className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] tracking-[0.18em] text-mute mb-4">
                MES ENGAGEMENTS
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                UN TRAVAIL PROPRE,{" "}
                <span className="text-terracotta">PAS DES RACCOURCIS.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {engagements.map((e) => (
                <div key={e.title} className="bg-paper rounded-2xl p-6 md:p-7">
                  <p className="text-[16px] font-bold tracking-tight mb-2">
                    {e.title}
                  </p>
                  <p className="text-[14px] leading-relaxed text-ink/75">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À quoi s'attendre */}
        <section className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[13px] tracking-[0.18em] text-mute mb-4">
                À QUOI S&rsquo;ATTENDRE
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
                UN INVESTISSEMENT,{" "}
                <span className="text-terracotta">PAS UN BOUTON MAGIQUE.</span>
              </h2>
            </div>
            <ol className="grid md:grid-cols-2 gap-4 md:gap-5">
              {timeline.map((t) => (
                <li
                  key={t.when}
                  className="bg-paper rounded-2xl p-6 md:p-7 flex flex-col gap-2"
                >
                  <span className="inline-flex self-start items-center text-[12px] tracking-[0.12em] font-medium bg-canvas-soft rounded-full px-3 py-1 text-ink">
                    {t.when}
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink/80">
                    {t.what}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-20 lg:px-32 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-[13px] tracking-[0.14em] text-mute mb-5">
              QUESTIONS FRÉQUENTES
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {faq.map((item) => (
                <div key={item.q} className="bg-paper rounded-2xl p-6 md:p-7">
                  <p className="text-[16px] font-bold tracking-tight mb-2">
                    {item.q}
                  </p>
                  <p className="text-[14px] leading-relaxed text-ink/75">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative px-3 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="relative w-full max-w-5xl mx-auto bg-butter rounded-[28px] md:rounded-[36px] p-8 md:p-14 text-center">
            <Sticker
              name="assistance"
              size={90}
              rotate={14}
              className="absolute z-10 -top-10 right-4 md:-top-12 md:-right-6"
            />
            <p className="text-[14px] tracking-[0.18em] text-ink/55 mb-4">
              ON COMMENCE ICI
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              UN AUDIT{" "}
              <span className="text-terracotta">GRATUIT&nbsp;?</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
              Je regarde votre fiche Google et votre site, et je vous montre noir
              sur blanc ce qui vous fait perdre des appels : dernière publication
              qui date, avis sans réponse, prestations invisibles sur Google,
              concurrents passés devant vous. Sans engagement, sans discours
              commercial.
            </p>
            <div className="mt-8 flex justify-center">
              <AnimatedCTA href="/#contact" variant="primary" icon="calendar">
                RÉSERVER MON AUDIT GRATUIT
              </AnimatedCTA>
            </div>
            <div className="mt-8 text-[13px] tracking-[0.1em] text-ink/65">
              OU PAR EMAIL ·{" "}
              <a
                href="mailto:maxencecailleau.pro@gmail.com"
                className="text-ink hover:underline"
              >
                MAXENCECAILLEAU.PRO@GMAIL.COM
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-32 lg:px-64 py-8 border-t border-rule text-[14px] tracking-[0.14em] text-mute flex flex-col md:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} MAXENCE CAILLEAU · ANGERS, FR</span>
        <span className="inline-flex items-center gap-2">
          CODÉ PAR
          <Image
            src="/signature.png"
            alt="Maxence Cailleau"
            width={240}
            height={80}
            className="h-9 w-auto"
          />
        </span>
      </footer>
    </>
  );
}
