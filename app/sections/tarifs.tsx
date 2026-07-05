import Link from "next/link";
import { AnimatedCTA } from "../components/animated-cta";

type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  lead?: string;
  items: string[];
  footnotes?: string[];
  color: string;
  badge?: string;
  featured?: boolean;
};

const creation: Plan[] = [
  {
    name: "Essentiel",
    price: "700 €",
    priceNote: "à partir de",
    tagline: "Pour être visible et inspirer confiance.",
    items: [
      "Site vitrine 5 à 6 pages, design sur mesure (pas de template générique)",
      "Optimisé mobile et rapide à charger",
      "Référencement local de base (votre métier + votre ville)",
      "Formulaire de contact, mentions légales, RGPD",
    ],
    footnotes: [
      "Livré en 1 à 2 semaines",
      "Vous êtes propriétaire de votre site et de son code",
    ],
    color: "bg-sage",
  },
  {
    name: "Pro",
    price: "1 200 €",
    priceNote: "à partir de",
    tagline: "Pour dominer votre marché local.",
    lead: "Tout l'Essentiel, plus :",
    items: [
      "Rédaction complète des contenus, optimisés pour Google",
      "Pages métiers / prestations détaillées",
      "Optimisation de vos photos et visuels",
      "Configuration de votre fiche Google Business Profile",
      "Stratégie de référencement local approfondie",
    ],
    color: "bg-butter",
    badge: "RECOMMANDÉ",
    featured: true,
  },
];

const recurring: Plan[] = [
  {
    name: "Hébergement & Maintenance",
    price: "39 €",
    priceNote: "par mois",
    tagline:
      "Un site a besoin d'entretien pour rester rapide et sécurisé. C'est compris dans mon accompagnement.",
    items: [
      "Hébergement performant",
      "Mises à jour techniques et de sécurité",
      "Sauvegardes régulières",
      "Support par email",
    ],
    color: "bg-sky",
    badge: "INCLUS AVEC CHAQUE SITE",
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "Comptez 1 à 2 semaines entre notre premier échange et la mise en ligne, selon la rapidité de nos allers-retours sur les contenus.",
  },
  {
    q: "Suis-je engagé sur la durée ?",
    a: "La création du site est un achat unique : le site vous appartient. L'hébergement & maintenance est un abonnement mensuel sans lequel un site ne peut pas fonctionner durablement. Mes offres de référencement local sont à part, avec leur propre rythme, on en parle si le sujet vous intéresse.",
  },
  {
    q: "Et si je veux modifier mon site plus tard ?",
    a: "Les modifications courantes sont incluses dans mes offres de référencement local. Sinon, elles sont facturées à la demande, sur devis simple.",
  },
  {
    q: "Travaillez-vous uniquement avec des entreprises d'Angers ?",
    a: "Je suis basé à Angers et je travaille surtout avec le Maine-et-Loire et les Pays de la Loire, mais tout se fait très bien à distance.",
  },
];

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

function Star({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
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
      <path d="M2 7h17M14 2l5 5-5 5" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative ${plan.color} rounded-3xl p-7 md:p-9 flex flex-col ${
        plan.featured ? "ring-2 ring-ink/80" : ""
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-7 inline-flex items-center bg-ink text-paper rounded-full px-3 py-1 text-[11px] tracking-[0.12em] font-medium">
          {plan.badge}
        </span>
      )}

      <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
        {plan.name}
      </h3>

      <div className="mt-3 flex items-baseline gap-2">
        {plan.priceNote && (
          <span className="text-[13px] tracking-[0.1em] text-ink/55">
            {plan.priceNote}
          </span>
        )}
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          {plan.price}
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

      {plan.footnotes && (
        <div className="mt-6 pt-5 border-t border-ink/10 flex flex-col gap-2">
          {plan.footnotes.map((f) => (
            <p
              key={f}
              className="text-[13px] tracking-[0.02em] font-medium text-ink/70"
            >
              {f}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function SeoCard() {
  return (
    <Link
      href="/referencement-local"
      className="group relative bg-lavender rounded-3xl p-7 md:p-9 flex flex-col ring-2 ring-ink/80 transition-transform hover:-translate-y-1"
    >
      <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-ink text-paper rounded-full px-3 py-1 text-[11px] tracking-[0.12em] font-medium">
        <Star className="w-3 h-3" />
        RECOMMANDÉ
      </span>

      <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
        Référencement local & SEO
      </h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[13px] tracking-[0.1em] text-ink/55">
          à partir de
        </span>
        <span className="text-3xl md:text-4xl font-bold tracking-tight">
          190 €
        </span>
        <span className="text-[13px] tracking-[0.1em] text-ink/55">par mois</span>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
        C&apos;est ici que se fait la différence : apparaître dans le top 3 de
        Google sur votre métier, passer devant vos concurrents et transformer les
        recherches en appels. Hébergement &amp; maintenance du site inclus.
      </p>

      <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[14px] tracking-[0.1em] font-medium text-ink">
        <span>DÉCOUVRIR MES OFFRES</span>
        <Arrow className="w-4 h-3 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function Tarifs() {
  return (
    <section
      id="tarifs"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">TARIFS</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            UN SITE QUI VOUS RAPPORTE DES CLIENTS,{" "}
            <span className="text-terracotta">PAS JUSTE UNE VITRINE.</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Des sites rapides, bien référencés localement et dont vous êtes
            propriétaire. Tarifs clairs, délais courts, un seul interlocuteur.
          </p>
        </div>

        {/* Création */}
        <p className="text-[13px] tracking-[0.14em] text-mute mb-5">
          CRÉATION DE VOTRE SITE
        </p>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {creation.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        {/* Récurrent */}
        <p className="text-[13px] tracking-[0.14em] text-mute mt-16 mb-5">
          APRÈS LA MISE EN LIGNE
        </p>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {recurring.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
          <SeoCard />
        </div>

        {/* FAQ */}
        <p className="text-[13px] tracking-[0.14em] text-mute mt-16 mb-5">
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

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <AnimatedCTA href="#contact" variant="primary" icon="calendar">
            RECEVOIR UN AUDIT GRATUIT
          </AnimatedCTA>
          <p className="text-[13px] tracking-[0.02em] text-ink/60 max-w-md">
            Je regarde votre site et votre visibilité sur Google, et je vous
            montre ce qui vous fait perdre des demandes. Devis clair, sans
            engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
