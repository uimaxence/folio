# Brand book — Maxence Cailleau

Référence visuelle exploitable **hors-code** : print, réseaux sociaux, supports divers.
Pour l'implémentation web (classes Tailwind, composants, patterns par section), voir [`DESIGN.md`](DESIGN.md).

> Source de vérité des couleurs : `app/globals.css` (`@theme`).
> CMYK = conversions sRGB→CMYK indicatives (point de départ). À faire valider par l'imprimeur selon le profil (ex. FOGRA39 / Coated).

---

## 1. La marque

**Maxence Cailleau** — *Designer Coder* indépendant basé à **Angers, France**.

Je crée, développe, référence et mets en ligne des **sites web sur-mesure**, livrés en **~2 semaines**. Une seule personne du design au déploiement.

- **Signature / tagline** : « Designer Coder à Angers »
- **Promesse** : « Des sites qui ramènent des clients, pas des compliments. »
- **Site** : maxencecailleau.fr · **Contact** : maxencecailleau.pro@gmail.com

**Ton de voix** : direct, chaleureux, sans jargon. Affirmatif. Capitales pour les titres (style éditorial/affiche), un accent **terracotta** sur un mot-clé pour casser le bloc. On parle bénéfice client, pas technique.

**Direction artistique** : « éditoriale colorée ». Fond cream signature recouvert d'une grille papier millimétré, on remplit l'espace avec des **cartes aux couleurs douces**. Moins « portfolio de dev », plus magazine / merch.

---

## 2. Couleurs

### Base (neutres + structure)

| Nom | HEX | RGB | CMYK (indic.) | Usage |
|---|---|---|---|---|
| Canvas | `#FEFEF8` | 254 · 254 · 248 | 0 · 0 · 2 · 0 | **Fond principal** (off-white). Recouvert d'une grille millimétré 40×40 px (lignes ink ~4,5 % opacité). |
| Canvas Soft | `#F3F1E6` | 243 · 241 · 230 | 0 · 1 · 5 · 5 | Fonds doux, états hover. |
| Paper | `#FFFFFF` | 255 · 255 · 255 | 0 · 0 · 0 · 0 | Cartes intérieures, chips, tags. Blanc pur — couvre la grille pour créer des îlots propres. |
| Ink | `#1A1A1A` | 26 · 26 · 26 | 0 · 0 · 0 · 90 | **Texte principal**, CTA primaire. (Pour print : envisager un noir riche.) |
| Ink Soft | `#B8B6AD` | 184 · 182 · 173 | 0 · 1 · 6 · 28 | Texte « désactivé » / non lu. |
| Mute | `#7C7A6F` | 124 · 122 · 111 | 0 · 2 · 10 · 51 | Texte secondaire, labels. |
| Rule | `#D4D1C5` | 212 · 209 · 197 | 0 · 1 · 7 · 17 | Bordures fines, filets. |
| Accent (vert) | `#16A34A` | 22 · 163 · 74 | 87 · 0 · 55 · 36 | **Statut « disponible » uniquement** (voir garde-fous). |

### Palette cartes — 6 couleurs douces (+ 1 beige)

Tons pastels posés sur le canvas. Chaque carte (projet, avis, service, étape) en pioche une.

| Nom | HEX | RGB | CMYK (indic.) | Vibe |
|---|---|---|---|---|
| Butter | `#F5D878` | 245 · 216 · 120 | 0 · 12 · 51 · 4 | Jaune chaud |
| Sage | `#C6D6AD` | 198 · 214 · 173 | 8 · 0 · 19 · 16 | Vert tendre |
| Blush | `#F4D3CB` | 244 · 211 · 203 | 0 · 14 · 17 · 4 | Rose poudré |
| Sky | `#A8C8DA` | 168 · 200 · 218 | 23 · 8 · 0 · 15 | Bleu doux |
| Terracotta | `#E89263` | 232 · 146 · 99 | 0 · 37 · 57 · 9 | Orange chaud — **accent typo principal** |
| Lavender | `#CFC6E3` | 207 · 198 · 227 | 9 · 13 · 0 · 11 | Lavande |
| Clay | `#DCB892` | 220 · 184 · 146 | 0 · 16 · 34 · 14 | Beige chaud |

**Ordre de rotation** (quand on enchaîne des cartes) : Butter → Sage → Blush → Sky → Terracotta → Lavender → Clay.

### Garde-fous couleur

- **Le vert accent `#16A34A`** est réservé au statut « disponible » (point clignotant, point du chip Angers, ✓ des garanties). Ne pas l'utiliser comme couleur déco.
- **Le terracotta `#E89263`** est l'accent typographique principal. Ne pas le mélanger aux autres couleurs cartes dans un même bloc.
- **Le canvas reste partout en fond** — les couleurs cartes sont posées dessus, jamais en pleine page.
- Texte toujours en **Ink** sur les fonds cartes (contraste assuré ; ne pas mettre de texte clair sur pastel).

---

## 3. Typographie

**Une seule police : [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)** (Google Fonts, gratuite, OFL). Variable. Poids utilisés : **Bold 700** (titres) et **Medium 500** (labels/CTA). Regular 400 possible pour les longs paragraphes print.

### Échelle typographique

| Rôle | Taille (web) | Poids | Détails |
|---|---|---|---|
| H1 / Hero | **38 → 76 px** (responsive) | Bold 700 | Capitales, `line-height 1.02`, `letter-spacing` serré (tight). Un segment en **terracotta**. |
| H2 / Titre section | **30 → 48 px** | Bold 700 | Capitales, tracking serré. Un mot-clé en **terracotta**. |
| Sous-titre / H3 | 20 → 24 px | Bold 700 | |
| Corps de texte | **15 – 16 px** | Regular / Medium | `line-height` confortable (~1.5). |
| Labels / chips / CTA | **12 – 13 px** | Medium 500 | **CAPITALES**, `letter-spacing 0.1 – 0.18em` (voir ci-dessous). |

### Tracking (interlettrage) des capitales

Réservé aux petits textes en capitales (labels, chips, CTA). Plus le texte est petit, plus on ouvre.

| Valeur | Usage |
|---|---|
| `0.10em` | CTA, labels principaux (le plus « moderne ») |
| `0.12em` | Chips, tags |
| `0.14 – 0.18em` | Micro-labels, sur-titres très petits |

> Règle : titres = tracking **serré** (négatif/tight). Petits labels capitales = tracking **ouvert** (positif).

---

## 4. Espacements & mise en page

Système basé sur une grille de **4 px** (multiples : 4, 8, 12, 16, 24, 32, 48, 64, 96, 128).

| Élément | Valeur |
|---|---|
| Largeur de contenu max | **1152 px** (`max-w-6xl`), centré |
| Marge horizontale (mobile → desktop) | 24 px → 80 px → 128 px |
| Padding vertical de section | **96 px** (mobile) → **128 px** (desktop) |
| Gouttière entre éléments | 8 / 12 / 16 / 24 px selon densité |
| Padding intérieur des grandes cartes | 16 px (mobile) → 48 – 64 px (desktop) |

### Grille papier (texture signature)

Fond canvas recouvert d'une grille millimétré : lignes de **1 px**, maille **40 × 40 px**, couleur ink à **~4,5 % d'opacité**. C'est l'élément de texture identitaire — à reproduire en fond des supports print/social pour la cohérence.

---

## 5. Formes & rayons

| Élément | Rayon |
|---|---|
| Cartes (projet, service, avis, contact) | **24 px** (`rounded-3xl`) |
| Grandes cartes / blocs hero | **28 – 36 px** |
| Screenshots / médias dans une carte | **16 px** (`rounded-2xl`) |
| CTA primaire, chips, tags, pills | **plein arrondi** (pilule / `rounded-full`) |

**Principe** : tout est doux et arrondi. Pas d'angles durs. Le CTA principal est une pilule `#1A1A1A` (Ink) texte `#FFFFFF`.

---

## 6. Iconographie & illustrations

- **Stickers illustrés (PNG)** — style « autocollant » flat, ombre portée douce, posés en rotation légère débordant le coin d'une carte. 7 sujets : `creativite`, `programmation`, `referencement`, `contenu`, `dactylographie`, `assistance`, `but`. Fichiers dans [`public/stickers/`](public/stickers/).
- **Doodles SVG** — petits traits décoratifs : astérisque, squiggle, sparkle, flèche swoop. Couleur héritée (mono), taille libre. Voir [`app/components/doodles.tsx`](app/components/doodles.tsx).
- **Pictos d'interface** — [`lucide-react`](https://lucide.dev) (trait fin), pour les flèches et le calendrier des CTA.

**Rotation typique des stickers** : entre −12° et +14°, jamais droit, toujours en débordement de cadre.

---

## 7. Kit de déclinaison rapide (print / social)

Pour un post, une affiche ou une carte de visite :

1. **Fond** : Canvas `#FEFEF8` + grille millimétré 40 px à ~4,5 % (optionnel mais signature).
2. **Bloc principal** : une carte couleur de la palette, `rounded` 24–36 px.
3. **Titre** : Space Grotesk Bold, CAPITALES, tracking serré, 1 mot en Terracotta `#E89263`.
4. **Texte** : Ink `#1A1A1A` (jamais de texte clair sur pastel).
5. **Label / CTA** : pilule, capitales Medium, tracking `0.1em`.
6. **Touche finale** : 1 sticker en rotation débordant un coin, ou un doodle terracotta.

**Combos de couleurs sûrs** (fond carte → texte) : toute couleur palette → texte Ink. Accent terracotta sur fond canvas/paper. Vert accent **uniquement** pour « disponible ».
