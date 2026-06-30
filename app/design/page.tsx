import type { Metadata } from "next";
import Link from "next/link";
import { CopyChip } from "./copy-chip";
import {
  AnimatedArrowRight,
  AnimatedArrowUpRight,
  AnimatedCalendar,
} from "../components/animated-icons";
import { AnimatedCTA } from "../components/animated-cta";
import { Asterisk, Sparkle, Squiggle, ArrowSwoop } from "../components/doodles";
import { Sticker, type StickerName } from "../components/sticker";

export const metadata: Metadata = {
  title: "Design System · Maxence Cailleau",
  description:
    "Palette, typographie, composants et règles d'usage du système graphique de Maxence Cailleau. Référence pour la cohérence cross-canal (site, LinkedIn, Instagram, Facebook).",
  robots: { index: false, follow: false },
};

type Swatch = {
  token: string;
  hex: string;
  role: string;
  textOn?: "ink" | "paper";
};

const baseColors: Swatch[] = [
  { token: "canvas", hex: "#fdfcf6", role: "Fond du site (off-white + grille subtile)", textOn: "ink" },
  { token: "canvas-soft", hex: "#f0ede2", role: "Cream pour hover et fonds doux", textOn: "ink" },
  { token: "paper", hex: "#ffffff", role: "Cartes intérieures, chips, embed Cal", textOn: "ink" },
  { token: "ink", hex: "#1a1a1a", role: "Texte principal, CTA primaire", textOn: "paper" },
  { token: "mute", hex: "#7c7a6f", role: "Texte secondaire, labels", textOn: "paper" },
  { token: "rule", hex: "#d4d1c5", role: "Bordures fines", textOn: "ink" },
  { token: "accent", hex: "#16a34a", role: "STRICTEMENT « disponible »", textOn: "paper" },
];

const cardPalette: Swatch[] = [
  { token: "butter", hex: "#f5d878", role: "Jaune chaud — chaleur, optimisme", textOn: "ink" },
  { token: "sage", hex: "#c6d6ad", role: "Vert tendre — calme, naturel", textOn: "ink" },
  { token: "blush", hex: "#f4d3cb", role: "Rose poudré — doux, accessible", textOn: "ink" },
  { token: "sky", hex: "#a8c8da", role: "Bleu doux — confiance, clarté", textOn: "ink" },
  { token: "terracotta", hex: "#e89263", role: "Orange chaud — accent typographique, énergie", textOn: "ink" },
  { token: "lavender", hex: "#cfc6e3", role: "Lavande — créatif, culturel", textOn: "ink" },
  { token: "clay", hex: "#dcb892", role: "Beige chaud — artisan, terroir", textOn: "ink" },
];

const stickerCatalog: { name: StickerName; label: string; usage: string; rotate: number }[] = [
  { name: "creativite", label: "Créativité", usage: "Design, idée, hero", rotate: 12 },
  { name: "programmation", label: "Programmation", usage: "Dev / code / stack", rotate: -10 },
  { name: "referencement", label: "Référencement", usage: "SEO, GEO, audit", rotate: 14 },
  { name: "contenu", label: "Contenu digital", usage: "Copy, social, vidéo", rotate: -8 },
  { name: "dactylographie", label: "Dactylographie", usage: "Travail solo, code à la main", rotate: 14 },
  { name: "assistance", label: "Assistance 24/7", usage: "Support, contact, suivi", rotate: 14 },
  { name: "but", label: "Objectif", usage: "Conversion, déploiement, victoire", rotate: -10 },
];

const combos: { label: string; bgClass: string; usage: string; chipBg?: string }[] = [
  { label: "Carte projet artisan", bgClass: "bg-butter", usage: "Fond butter + titre ink + chip catégorie blanc + accent terracotta sur 1 mot du titre" },
  { label: "Carte avis", bgClass: "bg-blush", usage: "Fond blush + étoiles ink + nom ink bold + lien projet en arrow-up-right" },
  { label: "Post éditorial", bgClass: "bg-sage", usage: "Fond sage + h2 ink + une phrase clé en terracotta" },
  { label: "Annonce / event", bgClass: "bg-sky", usage: "Fond sky + grand chiffre/date ink + sous-titre mute" },
  { label: "Promo / urgence", bgClass: "bg-terracotta", usage: "Fond terracotta + texte ink + chip blanc avec ✓ accent (à utiliser rarement)" },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-20 border-t border-rule first:border-t-0 first:pt-0">
      <p className="text-[13px] tracking-[0.18em] text-mute mb-3">{eyebrow}</p>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8 md:mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorCard({ swatch }: { swatch: Swatch }) {
  const textColor = swatch.textOn === "paper" ? "text-paper" : "text-ink";
  return (
    <div className="rounded-2xl overflow-hidden border border-rule">
      <div
        className={`aspect-[4/3] flex flex-col justify-between p-4 ${textColor}`}
        style={{ background: swatch.hex }}
      >
        <span className="text-[12px] tracking-[0.14em] opacity-70">
          --color-{swatch.token}
        </span>
        <span className="font-mono text-[15px] md:text-base">
          {swatch.hex.toUpperCase()}
        </span>
      </div>
      <div className="bg-paper px-4 py-3 flex flex-col gap-2">
        <p className="text-[13px] text-ink/75 leading-snug">{swatch.role}</p>
        <div className="flex flex-wrap gap-1.5">
          <CopyChip value={swatch.hex.toUpperCase()} label={swatch.hex.toUpperCase()} />
          <CopyChip value={`--color-${swatch.token}`} label={`--color-${swatch.token}`} />
        </div>
      </div>
    </div>
  );
}

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.12em] text-mute hover:text-ink transition-colors mb-6"
          >
            ← RETOUR AU SITE
          </Link>
          <p className="text-[13px] tracking-[0.18em] text-mute mb-3">
            DESIGN SYSTEM
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            DE QUOI RESTER <span className="text-terracotta">COHÉRENT</span> SUR
            TOUS LES CANAUX.
          </h1>
          <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed text-ink/75 max-w-2xl">
            La palette, la typo, les composants et les règles d&rsquo;usage
            réutilisables pour les posts LinkedIn, Facebook et Instagram. Clique
            sur n&rsquo;importe quelle valeur pour la copier.
          </p>

          {/* Quick TOC */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "colors", label: "Couleurs" },
              { id: "typography", label: "Typographie" },
              { id: "components", label: "Composants" },
              { id: "icons", label: "Icônes & doodles" },
              { id: "stickers", label: "Stickers" },
              { id: "combos", label: "Combos sociaux" },
              { id: "rules", label: "Règles" },
            ].map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center text-[13px] tracking-[0.08em] bg-paper border border-rule rounded-full px-3 py-1 hover:bg-canvas-soft transition-colors"
              >
                {t.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Colors */}
        <Section id="colors" eyebrow="01 · COULEURS" title="Palette complète">
          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">
            BASE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {baseColors.map((s) => (
              <ColorCard key={s.token} swatch={s} />
            ))}
          </div>

          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">
            CARTES — 7 COULEURS DOUCES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cardPalette.map((s) => (
              <ColorCard key={s.token} swatch={s} />
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section id="typography" eyebrow="02 · TYPOGRAPHIE" title="Une seule fonte : Space Grotesk">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5 bg-paper rounded-2xl p-6 flex flex-col gap-3">
              <span className="text-[12px] tracking-[0.16em] text-mute">
                FONTE
              </span>
              <span className="text-3xl md:text-4xl font-bold">
                Space Grotesk
              </span>
              <p className="text-[14px] text-ink/70 leading-relaxed">
                Sans serif géométrique, weights utilisés : 400 (regular), 500
                (medium), 700 (bold).
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <CopyChip value="Space Grotesk" />
                <CopyChip value="fonts.google.com/specimen/Space+Grotesk" />
              </div>
            </div>
            <div className="md:col-span-7 bg-paper rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <span className="text-[12px] tracking-[0.16em] text-mute">
                  DISPLAY · 48–60 / BOLD
                </span>
                <p className="text-4xl md:text-[52px] leading-[1.05] font-bold tracking-tight mt-2">
                  Un titre <span className="text-terracotta">accent</span>.
                </p>
              </div>
              <div>
                <span className="text-[12px] tracking-[0.16em] text-mute">
                  H2 · 30–48 / BOLD
                </span>
                <p className="text-2xl md:text-4xl font-bold tracking-tight mt-2">
                  Un titre de section.
                </p>
              </div>
              <div>
                <span className="text-[12px] tracking-[0.16em] text-mute">
                  H3 · 20–28 / BOLD
                </span>
                <p className="text-xl md:text-2xl font-bold tracking-tight mt-2">
                  Un titre de carte.
                </p>
              </div>
              <div>
                <span className="text-[12px] tracking-[0.16em] text-mute">
                  CORPS · 15–17 / REGULAR
                </span>
                <p className="text-[16px] leading-relaxed text-ink/80 mt-2">
                  Le ton est direct, sans jargon. Les phrases courtes. Une
                  accroche émotionnelle, une preuve, un CTA.
                </p>
              </div>
              <div>
                <span className="text-[12px] tracking-[0.16em] text-mute">
                  CAPTION · 12–13 / TRACKING 0.12–0.16
                </span>
                <p className="text-[13px] tracking-[0.14em] text-mute mt-2 uppercase">
                  Eyebrow / label / chip
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-paper border border-rule">
              <h4 className="font-bold mb-2">Règle d&rsquo;accent</h4>
              <p className="text-[14.5px] leading-relaxed text-ink/75">
                Dans chaque H2, colorise <strong>1 segment</strong> (2–5 mots)
                en <span className="text-terracotta font-medium">terracotta</span>. Jamais
                tout le titre, jamais zéro mot.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-paper border border-rule">
              <h4 className="font-bold mb-2">Uppercase + tracking</h4>
              <p className="text-[14.5px] leading-relaxed text-ink/75">
                Réservé aux labels, chips et CTA — tracking entre{" "}
                <code className="font-mono text-[13px]">0.10em</code> et{" "}
                <code className="font-mono text-[13px]">0.16em</code>. Jamais sur
                le corps de texte (illisible).
              </p>
            </div>
          </div>
        </Section>

        {/* Components */}
        <Section id="components" eyebrow="03 · COMPOSANTS" title="CTA, chips, cards">
          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">
            CTA (3 variantes × 3 icônes)
          </h3>
          <div className="bg-paper rounded-2xl p-6 md:p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[12px] tracking-[0.16em] text-mute">PRIMARY</span>
                <AnimatedCTA href="#" variant="primary" icon="calendar">
                  RÉSERVER UN APPEL
                </AnimatedCTA>
                <AnimatedCTA href="#" variant="primary" icon="arrow">
                  EN SAVOIR PLUS
                </AnimatedCTA>
                <AnimatedCTA href="#" variant="primary" icon="arrow-up-right">
                  VOIR LE SITE
                </AnimatedCTA>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[12px] tracking-[0.16em] text-mute">SECONDARY</span>
                <AnimatedCTA href="#" variant="secondary" icon="calendar">
                  RÉSERVER UN APPEL
                </AnimatedCTA>
                <AnimatedCTA href="#" variant="secondary" icon="arrow">
                  EN SAVOIR PLUS
                </AnimatedCTA>
                <AnimatedCTA href="#" variant="secondary" icon="arrow-up-right">
                  VOIR LE LINKEDIN
                </AnimatedCTA>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <span className="text-[12px] tracking-[0.16em] text-mute">GHOST</span>
                <AnimatedCTA href="#" variant="ghost" icon="arrow">
                  VOIR PLUS
                </AnimatedCTA>
                <AnimatedCTA href="#" variant="ghost" icon="arrow-up-right">
                  PROJET LIÉ
                </AnimatedCTA>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-mute">
              Survole pour voir l&rsquo;animation des icônes (motion + lucide-react).
            </p>
          </div>

          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">CHIPS & LABELS</h3>
          <div className="bg-paper rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-canvas border border-rule rounded-full px-3 py-1 text-ink/75 uppercase">
                Site vitrine
              </span>
              <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-canvas border border-rule rounded-full px-3 py-1 text-ink/75 uppercase">
                Outil
              </span>
              <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-canvas border border-rule rounded-full px-3 py-1 text-ink/75 uppercase">
                App / Branding
              </span>
              <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-canvas border border-rule rounded-full px-3 py-1 text-ink/75 uppercase">
                Association
              </span>
              <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-canvas border border-rule rounded-full px-3 py-1 text-ink/75 uppercase">
                Éditorial
              </span>
              <span className="text-[13px] text-mute ml-2">← Catégories projets</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center text-[13px] bg-canvas rounded-full px-3 py-1">Next.js</span>
              <span className="inline-flex items-center text-[13px] bg-canvas rounded-full px-3 py-1">Tailwind CSS</span>
              <span className="inline-flex items-center text-[13px] bg-canvas rounded-full px-3 py-1">SEO local</span>
              <span className="inline-flex items-center text-[13px] bg-canvas rounded-full px-3 py-1">Vercel</span>
              <span className="text-[13px] text-mute ml-2">← Tags technos</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[13px] bg-canvas rounded-full px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Angers, FR
              </span>
              <span className="inline-flex items-center gap-2 text-[14px] tracking-[0.14em] text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                DISPONIBLE
              </span>
              <span className="text-[13px] text-mute ml-2">← Statut & localisation</span>
            </div>
          </div>

          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">CARDS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mini project card */}
            <article className="bg-butter rounded-3xl p-5 md:p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center text-[12px] tracking-[0.12em] bg-paper rounded-full px-3 py-1 text-ink/75 uppercase">
                  Site vitrine
                </span>
                <span className="text-[12px] tracking-[0.12em] text-ink/55">01 / 06</span>
              </div>
              <div className="aspect-[16/10] bg-paper rounded-2xl mb-5 flex items-center justify-center text-ink/30 text-[13px] tracking-[0.14em]">
                APERÇU
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Nom du projet</h3>
              <p className="text-[14.5px] leading-relaxed text-ink/80 mb-3">
                Une tagline courte qui dit quoi + pour qui en une phrase.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[12.5px] bg-paper/80 rounded-full px-2.5 py-0.5 text-ink/70">Next.js</span>
                <span className="text-[12.5px] bg-paper/80 rounded-full px-2.5 py-0.5 text-ink/70">Tailwind</span>
              </div>
              <div className="mt-auto pt-3 flex items-center justify-between gap-3">
                <span className="text-[12.5px] tracking-[0.12em] text-ink/55">LIVRÉ EN 2 SEMAINES</span>
                <AnimatedCTA href="#" variant="ghost" icon="arrow-up-right" external>
                  VOIR LE SITE
                </AnimatedCTA>
              </div>
            </article>
            {/* Mini avis card */}
            <figure className="bg-blush rounded-3xl p-7 md:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex gap-0.5 text-ink text-[15px] leading-none">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </span>
                <span aria-hidden className="text-[34px] leading-none text-ink/15 font-serif">
                  &ldquo;
                </span>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-ink/85 flex-1">
                Une citation client courte mais percutante. 1–4 phrases max,
                centrées sur le résultat ou la collaboration.
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-ink/10">
                <div className="text-[15px] font-bold tracking-tight">Prénom Nom</div>
                <div className="mt-1">
                  <AnimatedCTA href="#" variant="ghost" icon="arrow-up-right">
                    PROJET LIÉ
                  </AnimatedCTA>
                </div>
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* Icons & doodles */}
        <Section id="icons" eyebrow="04 · ICÔNES & DOODLES" title="Pictos animés et accents dessinés">
          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">
            ICÔNES ANIMÉES (motion + lucide-react)
          </h3>
          <div className="bg-paper rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-[14px] text-mute mb-6">
              Survole chaque carte pour déclencher l&rsquo;animation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <IconDemo
                name="AnimatedArrowRight"
                role="Navigation interne"
                trigger="primary"
              >
                <AnimatedArrowRight className="w-8 h-8 text-ink" />
              </IconDemo>
              <IconDemo
                name="AnimatedArrowUpRight"
                role="Lien externe"
                trigger="secondary"
              >
                <AnimatedArrowUpRight className="w-8 h-8 text-ink" />
              </IconDemo>
              <IconDemo
                name="AnimatedCalendar"
                role="Prise de RDV (#contact)"
                trigger="primary"
              >
                <AnimatedCalendar className="w-8 h-8 text-ink" />
              </IconDemo>
            </div>
          </div>

          <h3 className="text-[14px] tracking-[0.16em] text-mute mb-4">DOODLES SVG</h3>
          <div className="bg-paper rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <DoodleDemo name="Asterisk">
                <Asterisk className="w-10 h-10 text-terracotta" />
              </DoodleDemo>
              <DoodleDemo name="Sparkle">
                <Sparkle className="w-10 h-10 text-sage" />
              </DoodleDemo>
              <DoodleDemo name="Squiggle">
                <Squiggle className="w-16 h-4 text-terracotta" />
              </DoodleDemo>
              <DoodleDemo name="ArrowSwoop">
                <ArrowSwoop className="w-14 h-8 text-ink" />
              </DoodleDemo>
            </div>
            <p className="mt-6 text-[13px] text-mute">
              À utiliser avec parcimonie : un doodle par bloc maximum, pour
              ponctuer une carte ou un coin.
            </p>
          </div>
        </Section>

        {/* Stickers */}
        <Section
          id="stickers"
          eyebrow="05 · STICKERS"
          title="Pictos illustrés pour ponctuer les cards"
        >
          <p className="text-[15px] text-ink/75 mb-8 max-w-2xl">
            Sept stickers illustrés flat colorés, à poser en{" "}
            <code className="font-mono text-[13px]">absolute</code> sur les
            coins de cards ou de blocs, tiltés entre −15° et +15°. Drop-shadow
            doux pour le côté autocollant.
          </p>
          <div className="bg-paper rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stickerCatalog.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-28 items-end justify-center">
                    <Sticker name={s.name} size={96} rotate={s.rotate} />
                  </div>
                  <div>
                    <div className="text-[13px] tracking-[0.1em] uppercase font-medium">
                      {s.label}
                    </div>
                    <div className="text-[12px] text-mute mt-0.5">
                      {s.usage}
                    </div>
                  </div>
                  <CopyChip
                    value={`<Sticker name="${s.name}" size={72} rotate={10} />`}
                    label="copier JSX"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-[14px] text-mute max-w-2xl">
            Usage actuel sur le site : Hero (créativité + but), About (dactylographie), Services (un par card mappé au sujet), Contact (assistance).
          </p>
        </Section>

        {/* Social combos */}
        <Section id="combos" eyebrow="06 · COMBOS RÉSEAUX SOCIAUX" title="Recettes prêtes à l'emploi">
          <p className="text-[15px] text-ink/75 mb-8 max-w-2xl">
            Cinq combinaisons cohérentes avec le site, pour tes carrousels
            LinkedIn, posts Instagram et bannières Facebook. La logique :
            <strong> 1 couleur de fond + ink pour le texte + terracotta sur 1 mot accent</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {combos.map((c) => (
              <div
                key={c.label}
                className={`${c.bgClass} rounded-3xl p-7 md:p-8 flex flex-col gap-4`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-lg md:text-xl font-bold tracking-tight">
                    {c.label}
                  </h4>
                  <span className="text-[12px] tracking-[0.12em] bg-paper rounded-full px-2.5 py-1">
                    1080×1080
                  </span>
                </div>
                <p className="text-[14.5px] leading-relaxed text-ink/85">{c.usage}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-paper rounded-2xl p-6 border border-rule">
            <h4 className="font-bold mb-3">Format checklist post social</h4>
            <ul className="space-y-2 text-[14.5px] text-ink/80">
              <li>1. Fond : une seule couleur de la palette cartes (pas de dégradé).</li>
              <li>2. Texte : ink (#1A1A1A) — jamais blanc cassé.</li>
              <li>3. Accent : 1 mot ou 1 chiffre en <span className="text-terracotta font-medium">terracotta</span>.</li>
              <li>4. Police : Space Grotesk Bold pour le titre, Regular pour le corps.</li>
              <li>5. Signature : monogramme M*C en bas (paper sur ink ou inverse).</li>
            </ul>
          </div>
        </Section>

        {/* Rules */}
        <Section id="rules" eyebrow="07 · GARDE-FOUS" title="Les règles qui tiennent le système">
          <div className="grid md:grid-cols-2 gap-4">
            <Rule n="01" title="Le vert reste « DISPONIBLE »">
              <code className="font-mono text-[13px]">--color-accent #16A34A</code> ne sert qu&rsquo;au statut disponibilité (point clignotant, check ✓ de garantie). Jamais en accent typo, jamais en fond.
            </Rule>
            <Rule n="02" title="Le terracotta accentue 1 segment">
              Dans chaque H2, colorise un segment de 2 à 5 mots en terracotta. Pas tout le titre, jamais zéro mot. Sur les posts sociaux : un mot clé OU un chiffre clé.
            </Rule>
            <Rule n="03" title="Le cream reste en fond, jamais en carte">
              <code className="font-mono text-[13px]">--color-canvas</code> est le fond. Les cartes utilisent UNIQUEMENT la palette cartes (butter/sage/blush/sky/terracotta/lavender/clay) ou paper blanc.
            </Rule>
            <Rule n="04" title="Une couleur par carte, jamais de mélange">
              Une carte = une couleur de fond. Pas de dégradé, pas de stripe. Pour varier dans une grille, on alterne les couleurs entre cartes — pas dedans.
            </Rule>
            <Rule n="05" title="Cards rondes, CTA pill">
              Cards : <code className="font-mono text-[13px]">rounded-3xl</code> (24px). CTA principaux : <code className="font-mono text-[13px]">rounded-full</code>. Pas d&rsquo;angles vifs sauf chips déjà arrondies.
            </Rule>
            <Rule n="06" title="Reduced motion respecté">
              Toutes les animations marquee/wiggle/spring sont désactivées sous <code className="font-mono text-[13px]">prefers-reduced-motion</code>. Garder cette discipline sur tout nouveau composant.
            </Rule>
          </div>
        </Section>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] tracking-[0.12em] text-mute hover:text-ink transition-colors"
          >
            ← RETOUR AU SITE
          </Link>
        </div>
      </div>
    </main>
  );
}

function IconDemo({
  name,
  role,
  trigger,
  children,
}: {
  name: string;
  role: string;
  trigger: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <AnimatedCTA href="#" variant={trigger} icon="none">
      <span className="flex flex-col items-start gap-3 w-full">
        <span className="text-[20px]">{children}</span>
        <span className="text-[13px] tracking-[0.12em]">{name}</span>
        <span className="text-[12px] text-ink/55 font-normal normal-case tracking-normal">
          {role}
        </span>
      </span>
    </AnimatedCTA>
  );
}

function DoodleDemo({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-canvas rounded-2xl p-6 flex flex-col items-center justify-center gap-3 aspect-square">
      {children}
      <span className="text-[12px] tracking-[0.12em] text-mute font-mono">
        {name}
      </span>
    </div>
  );
}

function Rule({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper rounded-2xl p-6 flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <span className="text-[12px] tracking-[0.16em] text-terracotta font-medium">
          {n}
        </span>
        <h4 className="text-lg font-bold tracking-tight">{title}</h4>
      </div>
      <p className="text-[14.5px] leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}
