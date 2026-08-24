import Link from "next/link";
import { AnimatedCTA } from "../components/animated-cta";

const factors: Array<{ title: string; body: string }> = [
  {
    title: "Votre besoin",
    body: "Nombre de pages, fonctionnalités (devis en ligne, prise de rendez-vous…), contenus à rédiger ou déjà prêts.",
  },
  {
    title: "Votre objectif",
    body: "Une vitrine simple pour inspirer confiance, ou un site pensé pour générer des demandes chaque semaine.",
  },
  {
    title: "La direction artistique",
    body: "Vous avez déjà une identité visuelle, ou tout est à créer sur mesure : logo, couleurs, ton, photos.",
  },
  {
    title: "Le besoin en référencement",
    body: "Une visibilité locale de base, ou une vraie stratégie pour viser le top 3 de Google sur votre métier.",
  },
];

const faq: Array<{ q: string; a: string }> = [
  {
    q: "Combien de temps pour avoir mon site ?",
    a: "Comptez 1 à 2 semaines entre notre premier échange et la mise en ligne, selon la rapidité de nos allers-retours sur les contenus.",
  },
  {
    q: "Suis-je engagé sur la durée ?",
    a: "La création du site est un achat unique : le site vous appartient. S'y ajoute un abonnement mensuel qui couvre l'hébergement, la maintenance et, selon vos besoins, le référencement local.",
  },
  {
    q: "Et si je veux modifier mon site plus tard ?",
    a: "Les modifications courantes sont incluses dans l'abonnement mensuel. Pour les évolutions plus importantes, on en parle et je vous fais un devis simple.",
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
            propriétaire. Chaque projet est différent : le devis est fait sur
            mesure, clair et sans engagement.
          </p>
        </div>

        {/* Les deux repères de prix */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="bg-sage rounded-3xl p-7 md:p-9 flex flex-col">
            <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
              Création de votre site
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[13px] tracking-[0.1em] text-ink/55">
                à partir de
              </span>
              <span className="text-3xl md:text-4xl font-bold tracking-tight">
                700 €
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              Un site sur mesure, optimisé mobile, rapide à charger et pensé
              pour le référencement local dès le départ. Payé une fois : le
              site et son code vous appartiennent.
            </p>
            <p className="mt-auto pt-6 text-[13px] tracking-[0.02em] font-medium text-ink/70">
              Livré en 1 à 2 semaines
            </p>
          </div>

          <Link
            href="/referencement-local"
            className="group bg-sky rounded-3xl p-7 md:p-9 flex flex-col transition-transform hover:-translate-y-1"
          >
            <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
              Abonnement mensuel
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[13px] tracking-[0.1em] text-ink/55">
                à partir de
              </span>
              <span className="text-3xl md:text-4xl font-bold tracking-tight">
                80 €
              </span>
              <span className="text-[13px] tracking-[0.1em] text-ink/55">
                par mois
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
              Hébergement, maintenance, sauvegardes et modifications courantes.
              Et selon votre ambition : le référencement local pour viser le
              top 3 de Google sur votre métier.
            </p>
            <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[14px] tracking-[0.1em] font-medium text-ink">
              <span>DÉCOUVRIR LE RÉFÉRENCEMENT LOCAL</span>
              <Arrow className="w-4 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Ce qui fait varier le prix */}
        <div className="mt-6 bg-butter rounded-3xl p-7 md:p-9">
          <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
            Ce qui fait varier le prix
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80 max-w-2xl">
            Pas de grille figée : le tarif dépend de votre projet. Après un
            premier échange, vous recevez un devis précis, poste par poste.
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 md:gap-5">
            {factors.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="text-[15px] leading-snug text-ink/85">
                  <span className="font-bold text-ink">{f.title}.</span>{" "}
                  {f.body}
                </span>
              </li>
            ))}
          </ul>
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
