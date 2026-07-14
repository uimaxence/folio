import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/logo";
import { AnimatedCTA } from "../components/animated-cta";
import { CalEmbed } from "../components/cal-embed";

export const metadata: Metadata = {
  title: "Performance web pour startups & scale-ups · Maxence Cailleau",
  description:
    "Votre site convertit-il le trafic que vous payez ? Lecture business + exécution premium (design, conversion, performance, SEO/GEO) pour startups, scale-ups, SaaS et PME tech. Un seul interlocuteur, de la stratégie au déploiement.",
  openGraph: {
    title: "Performance web · Maxence Cailleau",
    description:
      "Là où votre site sous-convertit le trafic que vous payez déjà, et l'angle stratégique que vous n'avez pas encore exploité.",
    locale: "fr_FR",
    type: "website",
  },
};

/* ---------- icônes ---------- */

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

function ArrowDownRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 22 22"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6l10 10M16 7v9H7" />
    </svg>
  );
}

/* ---------- données ---------- */

const audiences = ["STARTUPS", "SCALE-UPS", "SAAS", "PME TECH"];

const fuites = [
  {
    n: "01",
    dot: "bg-terracotta",
    title: "Un hero qui ne tranche pas",
    body: "En cinq secondes, le visiteur ne comprend ni ce que vous faites de mieux que les autres, ni pourquoi ça le concerne. Une proposition de valeur diluée, c'est du trafic payé qui rebondit.",
  },
  {
    n: "02",
    dot: "bg-sky",
    title: "Aucun CTA magnétique",
    body: "Un seul chemin d'action, faible, répété partout à l'identique. Le visiteur motivé, celui qui allait convertir, ne sait pas quoi faire de son élan.",
  },
  {
    n: "03",
    dot: "bg-sage",
    title: "Le mobile négligé",
    body: "50 à 60 % de votre trafic B2B est mobile. Un desktop soigné et un mobile approximatif, c'est la moitié de vos leads qui décroche avant même de vous lire.",
  },
  {
    n: "04",
    dot: "bg-lavender",
    title: "Un tracking incomplet",
    body: "Sans events propres, vous pilotez à l'aveugle : impossible de savoir quelle page, quel message ou quel canal convertit vraiment. On optimise ce qu'on mesure.",
  },
  {
    n: "05",
    dot: "bg-blush",
    title: "Pas de lead magnet",
    body: "Les 95 % de visiteurs pas encore prêts à parler repartent sans laisser de trace, au lieu d'entrer dans votre pipe et d'y être nourris jusqu'à maturité.",
  },
  {
    n: "06",
    dot: "bg-butter",
    title: "Un SEO/GEO exploitable, pas exploité",
    body: "Des requêtes à forte intention et une visibilité dans les réponses des IA (ChatGPT, Perplexity) à portée de main — laissées à vos concurrents faute d'angle et d'exécution.",
  },
];

const apports = [
  {
    tag: "LA LECTURE BUSINESS",
    title: "L'angle que personne n'a vu",
    body: "Je ne prends pas votre site comme une commande à exécuter. Je le lis comme un levier de croissance : positionnement, message, hiérarchie de l'offre, parcours. L'angle stratégique que vos concurrents — et souvent vous-même — n'avez pas encore exploité.",
    points: [
      "Positionnement et proposition de valeur qui tranchent",
      "Message et parcours pensés par intention de visite",
      "Priorisation business : ce qui déplace le chiffre d'abord",
    ],
  },
  {
    tag: "L'EXÉCUTION PREMIUM",
    title: "Le détail qui fait la performance",
    body: "La vision ne vaut rien sans l'exécution. Design, vitesse, conversion et référencement traités avec le même soin — parce que c'est le détail qui sépare un site « propre » d'un site qui performe réellement.",
    points: [
      "Design premium, cohérent de la stratégie au pixel",
      "Performance et Core Web Vitals au niveau attendu",
      "Conversion et SEO/GEO intégrés, pas ajoutés après coup",
    ],
  },
];

const avantApres = [
  {
    kind: "AVANT",
    color: "bg-paper",
    title: "Un site correct, sous-optimisé",
    items: [
      "Hero descriptif : « Plateforme SaaS de gestion »",
      "Un « Nous contacter » discret en haut à droite",
      "Mobile fonctionnel mais négligé",
      "Aucune trace des 95 % qui ne sont pas prêts",
    ],
  },
  {
    kind: "APRÈS",
    color: "bg-sage",
    title: "Le même trafic, qui convertit",
    items: [
      "Hero qui nomme le problème et le gain, en 5 secondes",
      "Un CTA principal magnétique, un secondaire à faible friction",
      "Mobile pensé en premier, là où est la moitié du trafic",
      "Un lead magnet qui capte les visiteurs pas encore prêts",
    ],
  },
];

const differences = [
  {
    title: "Un seul interlocuteur",
    body: "De la stratégie au déploiement, la même personne. Aucun brief perdu entre trois prestataires, aucune vision diluée en cascade. Vous parlez à celui qui pense et qui exécute.",
  },
  {
    title: "La vision big picture",
    body: "Je ne code pas ce qu'on me dit de coder. Je challenge le message, le parcours et la priorité business avant d'écrire une ligne. C'est exactement ce que le dev offshore ne fera jamais pour vous.",
  },
  {
    title: "Le soin du détail",
    body: "La micro-interaction, la vitesse de chargement, le mot juste. Ce niveau de finition ne se délègue pas à la tâche : il se porte, du premier écran au dernier pixel.",
  },
];

const offres = [
  {
    name: "La refonte",
    tag: "ONE-SHOT",
    color: "bg-butter",
    featured: true,
    tagline:
      "Une refonte à forte valeur, scopée à votre contexte : design, conversion, performance et SEO/GEO traités ensemble.",
    items: [
      "Lecture stratégique et angle de positionnement",
      "Design et parcours pensés pour la conversion",
      "Performance, Core Web Vitals et tracking propre",
      "SEO/GEO intégré dès la structure",
    ],
  },
  {
    name: "Le suivi premium",
    tag: "RÉCURRENT",
    color: "bg-paper",
    featured: false,
    tagline:
      "Une fois la refonte livrée, on tient l'avance : maintenance premium et SEO cadré, en continu.",
    items: [
      "Maintenance premium et évolutions du site",
      "SEO/GEO piloté dans la durée",
      "Un interlocuteur unique, disponible et réactif",
      "Des ajustements guidés par vos données",
    ],
  },
];

/* ---------- composants ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-mute mb-4">
      <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
      {children}
    </p>
  );
}

/* ---------- page ---------- */

export default function Performance() {
  return (
    <div id="top">
      {/* Header autonome — aucun lien vers le funnel artisan */}
      <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-rule">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-5 md:px-8 py-3">
          <Link href="#top" aria-label="Haut de page" className="shrink-0">
            <Logo className="h-8 w-auto" />
          </Link>
          <span className="hidden sm:inline text-[12px] tracking-[0.18em] text-mute">
            PERFORMANCE WEB
          </span>
          <AnimatedCTA
            href="#echange"
            variant="primary"
            icon="calendar"
            className="!px-4 !py-2 text-[13px]"
          >
            UN ÉCHANGE
          </AnimatedCTA>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero — sombre, registre growth */}
        <section className="bg-ink text-paper">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
            <p className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-paper/50 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              PERFORMANCE · CONVERSION · SEO
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.04] max-w-4xl">
              VOTRE SITE CONVERTIT-IL LE TRAFIC QUE VOUS{" "}
              <span className="text-terracotta">PAYEZ&nbsp;?</span>
            </h1>
            <p className="mt-7 text-base md:text-lg text-paper/75 max-w-2xl leading-relaxed">
              Vous investissez en ads, en contenu, en SEO. Mais entre le clic et
              le lead, une part du trafic que vous payez se perd sur un site
              correct — jamais optimisé. Je le lis comme un levier de croissance,
              pas comme une vitrine.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <AnimatedCTA href="#echange" variant="light" icon="calendar">
                UNE LECTURE STRATÉGIQUE DE VOTRE SITE
              </AnimatedCTA>
              <AnimatedCTA
                href="#constat"
                variant="outline-light"
                icon="arrow"
              >
                CE QUE JE REGARDE
              </AnimatedCTA>
            </div>

            <ul className="mt-14 flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="inline-flex items-center rounded-full border border-paper/20 px-3 py-1.5 text-[12px] tracking-[0.14em] text-paper/70"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Le constat */}
        <section id="constat" className="px-6 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <Eyebrow>LE CONSTAT</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                VOUS PAYEZ LE TRAFIC. VOUS LAISSEZ LA CONVERSION{" "}
                <span className="text-terracotta">AU HASARD.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/75 leading-relaxed">
                Votre site n&rsquo;est pas cassé. Il est correct — et c&rsquo;est
                le problème : « correct » laisse filer une part du trafic que vous
                achetez déjà. Voici où la fuite se produit le plus souvent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {fuites.map((f) => (
                <div
                  key={f.n}
                  className="bg-paper rounded-3xl p-7 md:p-8 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${f.dot}`} />
                    <span className="text-[12px] tracking-[0.16em] text-ink/45">
                      {f.n}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-[22px] font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que j'apporte */}
        <section id="approche" className="px-6 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <Eyebrow>CE QUE J&rsquo;APPORTE</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                LA LECTURE BUSINESS QUE VOTRE SITE N&rsquo;A{" "}
                <span className="text-terracotta">JAMAIS EUE.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/75 leading-relaxed">
                Ma valeur n&rsquo;est pas dans l&rsquo;exécution seule —
                c&rsquo;est ce qui me sépare du dev offshore avec qui vous ne
                voulez pas travailler. Elle est dans la vision business, doublée
                d&rsquo;une exécution au niveau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {apports.map((a, i) => (
                <div
                  key={a.tag}
                  className={`rounded-3xl p-8 md:p-10 flex flex-col gap-5 ${
                    i === 0 ? "bg-ink text-paper" : "bg-canvas-soft"
                  }`}
                >
                  <span
                    className={`text-[12px] tracking-[0.16em] ${
                      i === 0 ? "text-paper/55" : "text-ink/50"
                    }`}
                  >
                    {a.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {a.title}
                  </h3>
                  <p
                    className={`text-[15px] leading-relaxed ${
                      i === 0 ? "text-paper/75" : "text-ink/75"
                    }`}
                  >
                    {a.body}
                  </p>
                  <ul className="mt-1 flex flex-col gap-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            i === 0
                              ? "bg-paper/15 text-paper"
                              : "bg-paper text-ink"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span
                          className={`text-[15px] leading-snug ${
                            i === 0 ? "text-paper/85" : "text-ink/85"
                          }`}
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preuve — avant / après (exemple illustratif) */}
        <section id="preuve" className="px-6 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <Eyebrow>LA DIFFÉRENCE, CONCRÈTEMENT</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                LE MÊME TRAFIC. UN SITE QUI EN{" "}
                <span className="text-terracotta">FAIT QUELQUE CHOSE.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/75 leading-relaxed">
                Un exemple de lecture, sur une page d&rsquo;accueil SaaS typique.
                Rien n&rsquo;est ajouté au budget d&rsquo;acquisition : on reprend
                le trafic que vous payez déjà et on arrête de le gaspiller.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {avantApres.map((c) => (
                <div
                  key={c.kind}
                  className={`${c.color} rounded-3xl p-7 md:p-9 flex flex-col gap-5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-[12px] tracking-[0.16em] text-ink/60">
                      {c.kind}
                    </span>
                    {c.kind === "APRÈS" && (
                      <span className="text-ink/70">
                        <ArrowDownRight className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {c.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-[15px] leading-snug text-ink/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-ink/50 max-w-3xl">
              Exemple illustratif. Les réalisations détaillées et les résultats
              chiffrés, quand ils existent, se partagent de vive voix pendant
              l&rsquo;échange — ils valent mieux qu&rsquo;un chiffre sorti de son
              contexte.
            </p>
          </div>
        </section>

        {/* Différenciation vs offshore */}
        <section
          id="difference"
          className="px-6 md:px-20 lg:px-32 py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <Eyebrow>POURQUOI MOI</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                PAS UN EXÉCUTANT. UN PARTENAIRE DE{" "}
                <span className="text-terracotta">CROISSANCE.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/75 leading-relaxed">
                Je ne suis pas une agence de dix personnes, et c&rsquo;est le but :
                un partenaire exigeant sur le détail, un seul interlocuteur, une
                vision d&rsquo;ensemble. Pas une chaîne de production où votre
                projet se dilue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {differences.map((d) => (
                <div
                  key={d.title}
                  className="bg-paper rounded-3xl p-7 md:p-8 flex flex-col gap-3"
                >
                  <h3 className="text-xl md:text-[22px] font-bold tracking-tight">
                    {d.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* L'offre — sans grille de prix */}
        <section id="offre" className="px-6 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 max-w-3xl">
              <Eyebrow>L&rsquo;ENGAGEMENT</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                DEUX FAÇONS DE TRAVAILLER{" "}
                <span className="text-terracotta">ENSEMBLE.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-ink/75 leading-relaxed">
                Chaque projet est scopé au cas par cas — une refonte de croissance
                ne se vend pas au forfait. Le prix arrive dans un devis
                personnalisé, après un premier échange, une fois votre contexte
                compris.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {offres.map((o) => (
                <div
                  key={o.name}
                  className={`relative ${o.color} rounded-3xl p-8 md:p-10 flex flex-col gap-5 ${
                    o.featured ? "ring-2 ring-ink/80" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {o.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-ink/8 px-3 py-1 text-[11px] tracking-[0.14em] text-ink/60">
                      {o.tag}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink/80">
                    {o.tagline}
                  </p>
                  <ul className="mt-1 flex flex-col gap-3">
                    {o.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span className="text-[15px] leading-snug text-ink/85">
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-3">
                    <span className="text-[13px] tracking-[0.12em] text-ink/55">
                      SUR DEVIS, APRÈS ÉCHANGE
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-ink/50 max-w-3xl">
              Un projet trop large pour un seul homme, je le dis franchement et on
              trouve le bon montage. Un partenaire honnête vaut mieux
              qu&rsquo;une promesse d&rsquo;équipe qu&rsquo;il ne pourrait pas
              tenir.
            </p>
          </div>
        </section>

        {/* CTA final — sombre, faible engagement */}
        <section id="echange" className="px-3 md:px-20 lg:px-32 py-16 md:py-24">
          <div className="relative w-full max-w-6xl mx-auto bg-ink text-paper rounded-[28px] md:rounded-[36px] p-6 md:p-12 lg:p-16">
            <div className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
              <p className="inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-paper/50 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                ON COMMENCE PAR UN ÉCHANGE
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                PARLONS DE VOTRE{" "}
                <span className="text-terracotta">TRAFIC.</span>
              </h2>
              <p className="mt-5 text-[15px] md:text-base text-paper/75 leading-relaxed">
                Un premier échange, sans engagement : je regarde votre site avec
                vous et je vous partage l&rsquo;angle stratégique et les points de
                conversion que je vois. Le devis, s&rsquo;il y a lieu, vient
                ensuite — jamais avant d&rsquo;avoir compris votre contexte.
              </p>
            </div>

            <ul className="flex flex-wrap justify-center gap-2 mb-10">
              {["SANS ENGAGEMENT", "PAR VISIO", "LECTURE STRATÉGIQUE"].map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-3.5 py-1.5 text-[12px] tracking-[0.14em] text-paper/80"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="bg-paper rounded-2xl md:rounded-3xl p-1 md:p-4 overflow-hidden">
              <CalEmbed />
            </div>

            <div className="mt-10 text-center text-[13px] tracking-[0.1em] text-paper/65">
              OU PAR EMAIL ·{" "}
              <a
                href="mailto:maxencecailleau.pro@gmail.com"
                className="text-paper hover:underline"
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
    </div>
  );
}
