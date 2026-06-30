import { AnimatedCTA } from "../components/animated-cta";

type StepIcon = "calendar" | "arrow";

const steps: Array<{
  n: string;
  title: string;
  body: string;
  cta: { label: string; href: string; icon: StepIcon };
  color: string;
}> = [
  {
    n: "01",
    title: "CADRAGE DU PROJET",
    body: "30 minutes en visio pour identifier vos objectifs, votre cible et le périmètre. Vous repartez avec une recommandation claire et un ordre d'idée du budget.",
    cta: { label: "RÉSERVER UN APPEL", href: "#contact", icon: "calendar" },
    color: "bg-butter",
  },
  {
    n: "02",
    title: "DESIGN & MAQUETTES",
    body: "Je conçois les maquettes sur Figma. Aller-retours rapides jusqu'à validation finale. Vous voyez exactement à quoi ressemblera le site avant que la première ligne de code soit écrite.",
    cta: { label: "VOIR LES RÉALISATIONS", href: "#realisations", icon: "arrow" },
    color: "bg-blush",
  },
  {
    n: "03",
    title: "DÉVELOPPEMENT",
    body: "Intégration et développement à la main. Performance, SEO et accessibilité dès le premier commit. Pas de page builder, pas de template, du code propre que je maîtrise de bout en bout.",
    cta: { label: "VOIR LES RÉALISATIONS", href: "#realisations", icon: "arrow" },
    color: "bg-sage",
  },
  {
    n: "04",
    title: "MISE EN LIGNE & SUIVI",
    body: "Déploiement, configuration des emails, analytics et suivi mensuel. Votre site reste vivant : ajouts de pages, optimisations, mises à jour. Je reste votre interlocuteur.",
    cta: { label: "RÉSERVER UN APPEL", href: "#contact", icon: "calendar" },
    color: "bg-sky",
  },
];

export function Process() {
  return (
    <section id="process" className="relative pb-32">
      <div className="sticky top-0 z-30 bg-canvas/95 backdrop-blur-sm border-b border-rule/40">
        <div className="px-6 md:px-32 lg:px-64 py-4 md:py-5 text-center">
          <p className="text-[11px] md:text-[13px] tracking-[0.18em] text-mute mb-1">
            LE PROCESS
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            4 ÉTAPES, <span className="text-terracotta">RIEN DE PLUS.</span>
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-32 lg:px-64 pt-12 md:pt-16">
        <div className="max-w-2xl mx-auto isolate">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`${step.color} rounded-3xl p-7 md:p-10 shadow-[0_14px_40px_-10px_rgba(26,26,26,0.22)]`}
              style={{
                position: "sticky",
                top: `${110 + i * 48}px`,
                zIndex: 10 + i,
                marginBottom: i === steps.length - 1 ? 0 : "30vh",
              }}
            >
              <div className="text-[13px] tracking-[0.16em] text-ink/55 mb-3">
                ÉTAPE {step.n}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed text-ink/80 mb-6">
                {step.body}
              </p>
              <AnimatedCTA
                href={step.cta.href}
                variant="primary"
                icon={step.cta.icon}
              >
                {step.cta.label}
              </AnimatedCTA>
            </div>
          ))}
          {/* Donne à la dernière carte la place de remonter et se poser seule en haut */}
          <div aria-hidden className="h-[80vh]" />
        </div>
      </div>
    </section>
  );
}
