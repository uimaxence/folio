# Direction artistique — Folio

DA "éditoriale colorée" : on garde le cream signature en fond, on remplit l'espace avec des cartes aux couleurs douces inspirées des refs design éditorial / merch / template. Moins "dev portfolio", plus magazine.

## Tokens — `app/globals.css`

### Base
| Token | Valeur | Usage |
|---|---|---|
| `--color-canvas` | `#fefef8` | Fond du site (off-white quasi-blanc) recouvert d'une grille subtile 40×40 (lignes ink à ~4.5% opacité) — texture papier millimétré |
| `--color-canvas-soft` | `#f3f1e6` | Cream pour fonds doux et états hover |
| `--color-paper` | `#ffffff` | Cartes intérieures et chips — blanc pur. Couvre la grille pour créer des "îlots" propres |
| `--color-ink` | `#1a1a1a` | Texte principal, CTA primaire |
| `--color-ink-soft` | `#b8b6ad` | État "pas encore lu" du scroll-fill hero |
| `--color-mute` | `#7c7a6f` | Texte secondaire, labels |
| `--color-rule` | `#d4d1c5` | Bordures fines |
| `--color-accent` | `#16a34a` | Statut "disponible" uniquement |

### Palette cartes
6 couleurs douces tirées des refs. Chaque carte projet / avis / service / étape process en pioche une via `lib/palette.ts`.

| Token | Valeur | Vibe |
|---|---|---|
| `--color-butter` | `#f5d878` | Jaune chaud |
| `--color-sage` | `#c6d6ad` | Vert tendre |
| `--color-blush` | `#f4d3cb` | Rose poudré |
| `--color-sky` | `#a8c8da` | Bleu doux |
| `--color-terracotta` | `#e89263` | Orange chaud (remplace l'ancien `#ff6a1f` strident, sert aussi d'accent typographique) |
| `--color-lavender` | `#cfc6e3` | Lavande |
| `--color-clay` | `#dcb892` | Beige chaud |

## Helpers

- `lib/palette.ts` — `paletteAt(i)` retourne une couleur dans la rotation `butter → sage → blush → sky → terracotta → lavender → clay`, `bgClass[c]` et `textClass[c]` mappent vers les classes Tailwind correspondantes.
- `app/components/doodles.tsx` — petits SVGs réutilisables : `<Asterisk>`, `<Squiggle>`, `<Sparkle>`, `<ArrowSwoop>`. Couleur héritée via `currentColor`, taille via `className`. Plus utilisés sur les sections principales — gardés pour la page `/design` et usage ponctuel.
- `app/components/sticker.tsx` — `<Sticker name size rotate className>` pour les pictos illustrés flat (PNG dans `/public/stickers/`). 7 noms : `creativite`, `programmation`, `referencement`, `contenu`, `dactylographie`, `assistance`, `but`. Style "autocollant" : `pointer-events-none`, drop-shadow douce, rotation inline. Toujours posé en `absolute` débordant un coin de card (`-top-5 -right-5` typique).

## Icônes animées — `motion` + `lucide-react`

Stack : **`lucide-react`** fournit les pictos, **`motion`** (ex-Framer Motion, package v12) anime — pattern parent-variants : un parent en `whileHover="hover"` propage l'état aux enfants `motion.*` via `variants`.

- `app/components/animated-icons.tsx` — wrappers `motion.create(LucideIcon)` :
  - `<AnimatedArrowRight>` : translate X +4px en spring sur hover du parent
  - `<AnimatedArrowUpRight>` : translate diagonale +3/-3 en spring sur hover
  - `<AnimatedCalendar>` (lucide `CalendarCheck`) : scale 1.12 + rotate -6° avec spring très souple (damping 12) → effet "boop" tactile
- `app/components/animated-cta.tsx` — `<AnimatedCTA href variant icon external>` enveloppe un `<Link>` dans un `motion.span initial="rest" whileHover="hover" animate="rest"`. Variants : `primary` (ink/paper pill), `secondary` (border ink pill), `ghost` (lien plat). Icons : `arrow`, `arrow-up-right`, `calendar`, `none`.

**Convention d'usage des icônes** :
- `calendar` → CTA qui mène à la prise de RDV (`#contact`)
- `arrow` → navigation interne ("VOIR LES RÉALISATIONS")
- `arrow-up-right` → lien externe ou ancre vers un projet ("VOIR LE SITE", "VOIR LE LINKEDIN", carte avis → projet)

Remplacer un CTA standard : `<AnimatedCTA href="..." variant="primary" icon="calendar">LIBELLÉ</AnimatedCTA>` au lieu de `<Link>` + classes. La nav active utilise directement `<AnimatedArrowRight>` dans un `motion.span` animé par état (`animate={{ opacity, x }}` selon `isActive`).

## Typographie

- **Police unique** : Space Grotesk (variable `--font-space-grotesk`), conservée.
- **Titres H2** : `text-3xl md:text-5xl font-bold tracking-tight`, **un segment colorisé en `text-terracotta`** pour casser le monoton (ex. "DES SITES QUI RAMÈNENT **DES CLIENTS,** PAS DES COMPLIMENTS.").
- **Tracking uppercase** : passé de `0.14em–0.18em` à `0.1em–0.12em` sur les CTA / chips → moins technique.
- **Chips et tags** : pill `rounded-full bg-paper`, plus de bordures dures.

## Formes

- **Cards** : `rounded-3xl` (24px) — ancien : carré dur sans radius.
- **CTA principal** : `bg-ink text-paper rounded-full` (ancien : carré tranchant).
- **Chips / tags** : `rounded-full bg-paper`.
- **Screenshots projets** : carte intérieure `rounded-2xl bg-paper` posée dans la frame colorée du projet.

## Patterns par section

| Section | Pattern |
|---|---|
| **Hero** | Texte unique centré, scroll-fill mot-à-mot : les 3 derniers mots "VOTRE SITE WEB" landent en terracotta. 2 stickers absolute : `creativite` (130px, +12°, haut-droit) et `but` (90px, −10°, bas-gauche), cachés en mobile. |
| **About** | Carte profil sur fond butter + sticker `dactylographie` (90px, +14°) collé en haut-droit débordant. Philosophie interactive auto-rotative (4.5s par étape) : 4 items posés sur `bg-paper`, l'item actif voit sa couleur sweeper de gauche à droite en remplissant le background → quand 100%, passe au suivant. Hover/clic interrompt et redémarre le compteur sur l'item ciblé. Carte de droite prend la couleur de l'item actif. |
| **Services** | Grille 6 cartes, chacune sa couleur via `paletteAt(i)` + un sticker mappé au sujet (01 Design → `creativite`, 02 Dev → `programmation`, 03 SEO → `referencement`, 04 Contenu → `contenu`, 05 Déploiement → `but`, 06 Suivi → `assistance`). Sticker 72px collé `-top-5 -right-5`, redresse à 0° et scale 110% au hover de la card. |
| **Process** | Carte d'étape active prend la couleur de l'étape. Rail de progression en terracotta. |
| **Réalisations** | Frame colorée par projet (couleur fixée dans `lib/projects.ts`) + screenshot inset `bg-paper rounded-2xl` + chip catégorie en haut-gauche (SITE VITRINE / OUTIL / APP-BRANDING / ASSOCIATION / ÉDITORIAL). |
| **Avis** | Une couleur par avis (fixée dans `lib/avis.ts`). Étoiles en ink, guillemet décoratif `ldquo` en haut-droit. |
| **Contact** | Bloc unique sur fond butter `rounded-[36px]` + sticker `assistance` (110px, +14°) collé en haut-droit débordant. Garanties en chips paper, embed Cal dans une carte intérieure `bg-paper rounded-3xl`. |

## Data

- `lib/projects.ts` : chaque projet a `category: ProjectCategory` (5 valeurs possibles) + `color: Palette` (assignée à la main, pas via rotation, pour avoir un mix qui plaît).
- `lib/avis.ts` : chaque avis a `color: Palette` (assignée à la main).

Pour ajouter un projet ou un avis : pousser un objet dans le tableau, choisir une catégorie et une couleur de la palette. Pas de helper à appeler.

## Garde-fous

- **Le vert `--color-accent`** reste réservé au statut "disponible" (point clignotant nav, point dans le chip Angers, check ✓ dans les garanties Contact). Ne pas l'utiliser pour autre chose.
- **Le terracotta** est l'accent typographique principal + couleur du rail process. À ne pas mélanger avec les autres couleurs cartes dans le même bloc.
- **Le fond `--color-canvas`** reste partout — les couleurs cartes sont posées dessus, jamais en pleine page.
- **Reduced motion** : les animations `marquee` et `wiggle` sont désactivées via `@media (prefers-reduced-motion: reduce)` dans `globals.css`.
