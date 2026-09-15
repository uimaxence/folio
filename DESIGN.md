# Direction artistique, ton et contenu du site — Maxence Cailleau

Version 2, 15 septembre 2026. Ce fichier est la référence pour refaire maxence-cailleau.fr. Il décrit l'identité visuelle en production sur les carrousels Instagram / LinkedIn et les bannières LinkedIn (style « sobre », décidé le 14 septembre), la voix de Maxence, et le contenu du nouveau site en deux pages. Le site doit donner l'impression d'être fait par la même personne que les posts.

Il est écrit pour être suivi à la lettre par Claude Code. Chaque règle est courte et vérifiable. Ce que Maxence doit encore confirmer est entre crochets `[à confirmer]`.

> État au 15 septembre 2026 : le site est implémenté d'après ce fichier. Les champs `[à confirmer]` et `[source]` vivent dans `lib/site.ts` (`tarifs.refonte`, `chiffres.*.source`, `refonteAvantApres`, `instagram`, `siren`). Un chiffre sans source ne s'affiche pas.
>
> **Version 2.1, retours de Maxence du 15 septembre (après la première mise en place) :**
> - **Aucun délai de livraison** sur le site : plus de « 2 semaines », ni dans le hero, ni dans les services, ni dans la FAQ.
> - **Les services** : site sur mesure, refonte, référencement local, **optimisation de ta fiche Google**. L'angle « un seul champ, la catégorie » est une idée de post pour les réseaux, il ne sert pas sur le site. Ce qui se dit partout : on échange constamment, un seul interlocuteur.
> - **Réalisations** : une section sur l'accueil (le premier site en grand, les six autres en grille) et **une page courte par site** (`/realisations/<slug>` : ce que c'est, pour qui, pourquoi, ce que j'ai fait). Données dans `lib/projects.ts`.
> - **Hero** : centré, sans image de site. Trois cartes flottantes en bas. Le halo déborde sous la section suivante et s'éteint avant tout bord ; la grille est portée par la page (`main.page`), les sections claires sont transparentes : aucune coupure.
> - **Version 2.2 : déroulé de l'accueil calqué sur l'offre « Ton site sans migraine » de seo-sans-migraine.fr** (référence donnée par Maxence : « je fais pareil en gros, mais garde notre DA »). Ordre des sections : hero (badge, h1, intro, trois repères, deux boutons) → « Tu sais ce qui est fait, quand, et pourquoi » (trois cartes, sans durée) → « Pourquoi ton site reste invisible ? » (trois cas : le modèle, l'ancienne version, la coquille vide) → « La solution : changer d'approche » (sans moi × / avec moi ✓, colonne « moi » teintée bande à 45 %) → l'offre en trois volets numérotés (Création & design, Visibilité, Sérénité) + option identité visuelle → « Est-ce que c'est fait pour toi ? » (oui / non) → les 7 étapes (frise) + « tu n'es jamais seul » → qui je suis (signature, trois chiffres vérifiables) → réalisations → avis → « Un tarif clair » (deux cartes : le site, l'accompagnement) → FAQ (dix questions) → contact sombre. Fichiers : `app/sections/accueil/*.tsx`.
> - **Échelle typographique calée sur designme.agency** (référence donnée par Maxence) : titres en 600, h1 `clamp(40px, 5.2vw, 72px)` interligne 1,03, h2 `clamp(34px, 4.6vw, 64px)`, rangée numérotée 42 px (« 01 Site sur mesure », filet en haut), h3 32 px, h4 20 px, intro 18 px en 600, corps 16 px interligne 1,5, boutons 15 px, méta 13 px. Conteneur 1200 px, sections `clamp(64px, 8vw, 120px)`. La FAQ passe en boîtes (une question par boîte, le « + » en accent). Le tableau §5.2 ci-dessous décrit l'échelle des carrousels ; le site suit celle-ci.

---

## 0. Ce qui a changé depuis la version 1

- **Le style « sobre » remplace le style « papier + duo pastel »** : fond blanc cassé `#FAFAF8`, grille fine, mot en dégradé, bande pastel, étiquettes-info, cartes qui flottent, halo doux. L'ancien duo Menthe & forêt reste un réglage interne de l'app, il ne sert pas au site.
- **Plus de police manuscrite** : la lettrine Imperial Script n'est plus utilisée. Archivo seule.
- **Pas de portrait en grand, pas de photo détourée** : Maxence n'aime pas les photos de lui en grand ni les détourages. Le seul visage est l'avatar rond de 60 px dans la signature.
- **Un objet simple plutôt qu'une maquette d'interface dessinée** : une grande barre de recherche, un repère de carte, un mot géant, une forme pure. Les captures de sites sont de **vraies captures**, présentées dans un cadre estompé avec des annotations.
- **Le wording des services** : Site vitrine · Refonte · Référencement local · Fiche Google. « Suivi mensuel » décrit une façon de travailler, pas un service : il devient **l'accompagnement**, qui a sa propre page.
- **Le site passe à deux pages** : l'accueil et l'accompagnement. Les tarifs affichés : **à partir de 900 €** pour le site, **à partir de 90 € / mois** pour l'accompagnement.
- Le ton ne change pas. La règle « jamais de structure X, pas Y » est devenue absolue : l'app la corrige automatiquement après génération. Le site actuel en est plein, la section 11 liste ce qu'il faut réécrire.

---

## 1. L'essentiel en dix lignes

1. Fond `#FAFAF8`, encre `#141414`, texte secondaire `#6F6F6A`. Jamais de blanc pur en fond de page ; le blanc pur sert aux cartes.
2. Une grille fine (traits à 7 % d'opacité) alignée sur les colonnes, et un halo radial très doux dans deux coins. C'est la texture du système.
3. Un accent : le **mot en dégradé** violet → bleu (`#7C5CFF` → `#2F7BFF`). Un accent secondaire : la **bande pastel** lime `#DDF77A` derrière un mot. Rare : le **mot entouré** à la main.
4. Une seule police, **Archivo** (variable). Espacement des lettres à −2 %, plus serré sur les titres. Majuscule initiale puis minuscules, jamais de capitales sur un titre.
5. Un accent par phrase, jamais deux.
6. Les objets du système : étiquette-info blanche à point coloré, badge sombre, carte blanche penchée, capture estompée annotée, jauge, étincelle. Un objet fort par écran.
7. Une section sombre `#141414` au maximum par page, pour une phrase forte ou la fin.
8. Pas de dégradé de fond, pas de 3D, pas d'ombre sur le texte, pas d'emoji, pas d'icône décorative, pas de photo de Maxence en grand.
9. Chaque zone est remplie par quelque chose d'utile ou son gabarit change. Le vide en bas d'un bloc est un défaut.
10. Ton : première personne, présent, tutoiement, phrases courtes, un fait, un chiffre avec sa source, jamais « X, pas Y », pas de vocabulaire de marketeur.

---

## 2. Qui est Maxence, ce que le site doit faire ressentir

- **Maxence Cailleau**, développeur web et consultant SEO freelance, basé à Angers, travaille à distance partout en France, en français et en anglais. Accroche officielle, toujours écrite ainsi : **développement web & accompagnement SEO**.
- Il dessine, code, met en ligne et s'occupe de la place du site sur Google. Une seule personne du premier pixel au rapport mensuel.
- Il conçoit des sites pour des artisans, des commerçants, des indépendants et des petites équipes. Sept sites en ligne à ce jour (voir section 12).
- Sur Instagram et LinkedIn, il publie des carrousels dans ce même style : conseils numérotés avec captures annotées, chiffres, erreurs vues sur des fiches Google.
- Ce qu'un visiteur doit ressentir en dix secondes : quelqu'un de précis, calme, qui montre ce qu'il fait avec des chiffres réels, sans posture d'expert. Un cahier de travail propre. Aucune ambiance « agence ».
- Public prioritaire : des dirigeants de TPE, artisans et commerçants qui ont un site qui ne rapporte rien, ou pas de site. Chaque terme technique est expliqué en une demi-phrase.

---

## 3. Cinq principes

1. **Blanc, grille, un accent.** La page est une feuille quadrillée très discrète. Le texte est à l'encre. La couleur arrive sur un mot, un point, une bande.
2. **Une chose forte par écran.** Un gros titre, un mot géant, une capture annotée, un chiffre. Jamais deux à la fois.
3. **Le mot marqué.** Sur chaque bloc de texte, un mot ou un groupe de mots qu'on retiendrait si on ne lisait que lui. En dégradé, sur bande, ou en gras.
4. **Posé droit, penché d'un rien.** Les cartes flottent avec 2 à 6 degrés d'inclinaison, sur une grille stricte. Aucune forme tremblée, aucun effet main levée sauf le mot entouré.
5. **Rempli, mais qui respire.** Marges généreuses, aucun trou. Si un bloc laisse du vide, on y met un élément utile (une étiquette-info, une carte, un chiffre) ou on change son gabarit.

---

## 4. Couleurs

### 4.1 Tokens

```css
:root {
  /* fond et encres */
  --paper: #fafaf8;                   /* fond de page, toujours */
  --ink: #141414;                     /* texte, titres, traits, boutons */
  --ink-2: #6f6f6a;                   /* texte secondaire, numéros, légendes */
  --card: #ffffff;                    /* cartes, étiquettes, captures */
  --card-line: rgba(20,20,20,.12);    /* bords de cartes et d'étiquettes */
  --grid: rgba(20,20,20,.07);         /* grille fine */
  --shadow: 0 26px 52px -26px rgba(20,20,20,.35);

  /* accent « violet » (défaut) */
  --g1: #7c5cff;                      /* début du dégradé */
  --g2: #2f7bff;                      /* fin du dégradé */
  --band: #ddf77a;                    /* bande pastel derrière un mot */
  --dot: #7c5cff;                     /* point des étiquettes-info */
  --glow1: rgba(124,92,255,.22);      /* halo bas droite */
  --glow2: rgba(47,123,255,.16);      /* halo haut gauche */

  /* jauges avant / après */
  --jauge-avant: #e8a33d; --jauge-avant-fond: #fff6e8;
  --jauge-apres: #1e9e5a; --jauge-apres-fond: #eaf8ef;
}

/* section sombre */
.section-sombre {
  --paper: #141414; --ink: #f4f4f2; --ink-2: #a9a9a4;
  --card: #1f1f1f; --card-line: rgba(255,255,255,.14); --grid: rgba(255,255,255,.08);
  --glow1: rgba(124,92,255,.4); --glow2: rgba(47,123,255,.3);
  background: var(--paper); color: var(--ink);
}

/* accents alternatifs, un seul par site */
[data-accent="orange"] { --g1: #ff7a1a; --g2: #ff3d8a; --band: #ffe08a; --dot: #ff7a1a; --glow1: rgba(255,122,26,.2); --glow2: rgba(255,61,138,.14); }
[data-accent="menthe"] { --g1: #1f9d6a; --g2: #2f7bff; --band: #cdeedd; --dot: #1f9d6a; --glow1: rgba(31,157,106,.2); --glow2: rgba(47,123,255,.14); }
```

### 4.2 Règles d'usage

- **Le dégradé ne colore que du texte** (un mot dans un titre, `background-clip: text`), **un badge** (pilule de nombre ou « VS ») et **les halos**. Jamais un fond de section, jamais un bouton.
- **La bande pastel** sert derrière un mot dans un titre ou une puce, et pour la petite pilule d'une carte. Jamais en fond de section.
- **Les boutons sont encre** `#141414` avec texte blanc. Sur une section sombre, blanc avec texte encre.
- **Le blanc pur** est réservé aux objets posés sur la page : cartes, étiquettes-info, cadre de capture.
- Un écran = encre, papier, un mot en dégradé, et éventuellement une bande. Rien de plus.
- **Une section sombre au maximum par page** : la fin de page, ou une phrase forte. Sur fond sombre, les cartes restent blanches.
- L'accent **violet** est celui en production sur les carrousels. Orange et menthe existent comme alternatives ; un seul accent pour tout le site. `[à confirmer : violet, sauf avis contraire]`

### 4.3 L'ancien style « carnet »

Papier `#F8F5EF`, duo pastel + foncé (Menthe & forêt `#CDEEDD` / `#1F4D3A`, Rose & bordeaux, Jaune & noir…), scotch, polaroids, lettrine. Il reste dans l'app comme réglage et sert à comprendre d'anciens rendus. **Il ne sert pas au site.**

---

## 5. Typographie

### 5.1 Familles

| Police | Rôle | Fichiers |
|---|---|---|
| **Archivo** (variable, graisses 100–900, largeur 62 %–125 %, romain + italique) | Tout | `public/fonts/archivo.woff2`, `public/fonts/archivo-italic.woff2` (licence OFL à côté) |
| Montserrat 400–800 | Repli si Archivo pose problème. Jamais mélangée à Archivo | `public/fonts/montserrat-400-800.woff2` |

Fichiers dans ce dépôt, déjà sous-ensemblés en woff2. Auto-héberger, pas de Google Fonts. Poppins est la police de l'outil interne de génération : pas sur le site. Imperial Script (lettrine) n'est plus utilisée.

```css
@font-face { font-family: 'Archivo'; font-style: normal; font-weight: 100 900; font-stretch: 62% 125%; font-display: swap; src: url('/fonts/archivo.woff2') format('woff2'); }
@font-face { font-family: 'Archivo'; font-style: italic; font-weight: 100 900; font-stretch: 62% 125%; font-display: swap; src: url('/fonts/archivo-italic.woff2') format('woff2'); }
```

### 5.2 Échelle

Sur les carrousels, la slide fait 1080 px de large. Équivalents web, à ajuster avec `clamp()`.

| Style | Graisse | Taille web (desktop → mobile) | Interligne | Espacement | Notes |
|---|---|---|---|---|---|
| **Hook / h1 de hero** | 800 | `clamp(44px, 8vw, 96px)` | 1 | −.04em | `text-wrap: balance`, 3 lignes maximum, un mot en dégradé |
| **Mot géant** (cover « mot ») | 800 | `clamp(72px, 16vw, 200px)` | .92 | −.06em | Précédé d'une amorce en 600 à 40 % de sa taille |
| **Titre de section (h2)** | 700 | `clamp(32px, 5vw, 64px)` | 1.06 | −.03em | |
| **Sous-titre (h3)** | 700 | 28 → 24px | 1.15 | −.03em | |
| **Numéro de conseil** | 500 | 18px | 1 | 0 | Couleur `--ink-2`, « 01. » |
| **Corps** | 400 | 18 → 17px | 1.45 | −.02em | 60 à 70 caractères par ligne |
| **Corps d'intro** | 400 | 22 → 19px | 1.4 | −.02em | Sous un titre, couleur `--ink-2` |
| **Puce de conseil** | 500 | 20 → 18px | 1.3 | −.02em | Point rond de 8 px, mot clé en dégradé 700 |
| **Citation** | 300 | `clamp(28px, 4vw, 56px)` | 1.1 | −.025em | Le mot fort en 800 |
| **Chiffre géant** | 900 | `clamp(96px, 18vw, 240px)` | .85 | −.07em | `tabular-nums; font-stretch: 92%`. Unité en 300 à 30 % de la taille |
| **Étiquette-info** | 600 | 15 → 14px | 1 | −.01em | Dans une carte blanche, point coloré à gauche |
| **Titre de carte flottante** | 700 | 22 → 20px | 1.05 | −.03em | Surtitre en 600 12px capitales +.06em `--ink-2` |
| **Bouton** | 700 | 16px | 1 | −.02em | Pilule encre |
| **Légende / meta** | 500 | 13px | 1.4 | −.02em | `--ink-2`, chiffres tabulaires |

### 5.3 Règles

- **Espacement négatif partout** : −2 % corps, −3 % titres, −4 % hook, −6 % mot géant. Seuls les surtitres de cartes en capitales sont espacés positivement (+6 %).
- **Casse** : majuscule initiale puis minuscules (« Ce que je vérifie sur une fiche »). Jamais de Title Case. Les capitales sont réservées aux surtitres de cartes (12 px). Le site actuel met tous ses titres en capitales : c'est à abandonner.
- **Un accent par phrase**, jamais deux :
  - **mot en dégradé** (accent principal) : `background: linear-gradient(100deg, var(--g1), var(--g2)); background-clip: text; color: transparent;` graisse héritée du titre, jamais en italique ;
  - **bande pastel** (secondaire) : `<mark>` fond `--band`, texte encre, `padding: .02em .14em .04em; border-radius: .16em; box-decoration-break: clone` ;
  - **mot entouré** (rare, une fois par page au plus, pour la promesse) : un ovale SVG posé sur le mot, trait 3 px encre, bout rond ;
  - dans un corps de texte : un mot en 600, ou en dégradé 700 dans une puce.
- **Pas d'italique** comme accent dans ce style. L'italique d'Archivo reste disponible pour une citation entière en 300.
- **Pas de contour de texte, pas d'ombre portée sur le texte.**
- Le texte secondaire est `--ink-2`, lisible. Pas de gris clair sur fond clair.

---

## 6. Grille, espace, formes

### 6.1 Grille de mise en page

Sur les slides : 8 colonnes de 92 px, gouttières 24 px, marges 88 px. En web :

- Conteneur `max-width: 1120px`, marges latérales `clamp(24px, 8vw, 88px)`.
- 8 colonnes, gouttière 24 px.
- Largeurs d'éléments : carte flottante 250 à 300 px, capture 6 à 8 colonnes, bloc de texte 6 colonnes maximum, étiquette-info à sa largeur de contenu.
- Rythme vertical sur une base de 8 px. Entre sections : 120 → 72 px. Entre blocs : 40 → 24 px.

### 6.2 La grille visible

La texture du système. Un calque sous le contenu :

```css
.section::before {
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: var(--cell) var(--cell);        /* --cell = une colonne + une gouttière */
  background-position: var(--marge) 0;             /* calée sur la marge gauche du conteneur */
}
.section { position: relative; isolation: isolate; }
```

- Sur les slides la cellule fait 116 px (92 + 24), calée à 88 px. Sur les bannières 88 px. En web : la cellule est la colonne plus la gouttière de la grille de la section, calée sur la marge gauche.
- Opacité 7 % sur fond clair, 8 % en blanc sur fond sombre.
- La grille disparaît derrière une image pleine largeur et derrière une capture.
- Ne jamais mettre `position: relative` en vrac sur les enfants d'une section : le calque se gère en `isolation: isolate` et `z-index: -1`.
- Implémentation : `.calque-grille` dans `app/globals.css` (cellule en `cqw`, calée sur le conteneur centré).

### 6.3 Le halo

Deux dégradés radiaux très doux, sous le contenu, sur le hero et une ou deux sections clés seulement :

```css
.section::after {
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: radial-gradient(720px 560px at 100% 100%, var(--glow1), transparent 70%),
              radial-gradient(600px 480px at 0% 0%, var(--glow2), transparent 70%);
}
```

C'est la seule place du dégradé en fond. Il reste presque invisible : si on le remarque au premier coup d'œil, il est trop fort.

### 6.4 Rayons

| Élément | Rayon |
|---|---|
| Badge sombre, bouton, pilule de chiffre | 999px |
| Carte flottante | 22px |
| Capture de site | 26px |
| Étiquette-info | 14px |
| Callout / post-it | 18px |
| Case à cocher | 8px |
| Image insérée | 24px |

### 6.5 Ombres et traits

- **Une seule ombre** pour tout ce qui est posé sur la page : `0 26px 52px -26px rgba(20,20,20,.35)`. Capture : `0 34px 70px -30px rgba(20,20,20,.35)`.
- **Un seul filet** : `1.5px solid var(--card-line)` sur cartes, étiquettes, captures. Les sections n'ont pas de bord.
- Pas d'ombre sur les boutons, les textes, les sections.
- Traits dessinés (flèche courbe, ovale) : 3 px web, `stroke-linecap: round`, couleur encre.
- Inclinaison des cartes : entre −6° et +6°, jamais deux cartes voisines dans le même sens.

---

## 7. Dispositifs graphiques

Le catalogue de ce qu'on a le droit de dessiner. Chaque écran en utilise **un seul** dispositif fort. Composants : `app/components/ui.tsx`.

| Dispositif | À quoi ça sert | Comment |
|---|---|---|
| **Mot en dégradé** | Le mot à retenir d'un titre | Voir 5.3. Un par titre |
| **Bande pastel** | Un second mot marqué, ou un mot dans une puce | `<mark>` fond `--band` |
| **Mot entouré** | La promesse, une fois par page | Ovale SVG `viewBox 0 0 400 120`, tracé `M14 66 C24 22,120 8,210 10 C320 12,392 40,386 70 C380 100,280 116,190 112 C90 108,12 90,22 56`, `preserveAspectRatio: none`, débordant de .14em autour du mot |
| **Étiquette-info** | Nommer un service, annoter une capture, poser une preuve courte (« 4 209 catégories ») | Carte blanche, bord 1.5 px, ombre, rayon 14, padding 10px 18px 10px 14px, point rond coloré de 8 à 10 px à gauche (`--dot`, ou `--g2`, `--band` cerclé, encre pour varier). Optionnel : un pointeur carré de 14 px tourné de 45° sur un bord, et un petit curseur de souris en bas à droite |
| **Badge sombre** | Le sujet de la page ou de la section (« Fiche Google », « Sites web & SEO local ») | Pilule `#141414`, texte blanc 700, point blanc à gauche |
| **Étiquette penchée** | Une relance sous un mot géant (« voilà comment corriger ») | Étiquette-info tournée de 3°, alignée à droite |
| **Carte flottante** | Trois services, trois étapes, un avant / après | Carte blanche 22 px, bord 1.5, ombre. Contenu : surtitre en capitales 12 px `--ink-2`, titre 700, puis une ou deux barres grises (`height: 8px; border-radius: 4px; background: rgba(20,20,20,.08)`, la seconde à 60 %). Optionnel : une petite pilule `--band`. Inclinée de −6° à +6° |
| **Capture estompée** | Montrer un vrai site | Cadre rayon 26, bord 1.5, ombre, image `object-position: top`, masque `mask-image: linear-gradient(#000 70%, transparent)` qui fond le bas dans la page. Deux ou trois étiquettes-info posées dessus, penchées de ±3°, et une flèche courbe qui part du texte |
| **Flèche courbe** | Relier une phrase à une preuve | SVG, trait 3 px, bout rond, pointe simple. Pas d'icône de flèche |
| **Jauge** | Un score avant / après | Anneau SVG 120 px (300 px en grand), piste `rgba(20,20,20,.08)`, avant orange `#E8A33D` sur `#FFF6E8`, après vert `#1E9E5A` sur `#EAF8EF`, score au centre en 700. Uniquement avec de vrais scores |
| **Conseil numéroté** | Un point de méthode | « 01. » en 500 `--ink-2`, titre h2, une ligne de pourquoi en `--ink-2`, deux à quatre puces à point rond avec le mot clé en dégradé, une capture annotée en dessous |
| **Chiffre géant** | Un fait | 900, −7 %, unité en 300 sur la même ligne de base, limité à 5 colonnes |
| **Mot géant** | Une cover, un hero | Amorce en 600 au-dessus, le mot en 800 à la largeur du conteneur, étiquette penchée à droite dessous |
| **Checklist** | Ce qui est compris, ce qu'on vérifie | Case carrée 8 px de rayon, bord 3 px, coche « ✓ » 800 à l'intérieur ; case vide bord `--ink-2` pour ce qui reste à faire |
| **Liste flèches** | Points clés | `→` encre 700 dans une colonne de 40 px. Jamais de puces rondes en dehors des conseils |
| **Tableau deux colonnes** | Comparer | En-têtes en capitales 12 px, la colonne « moi » teintée `--band` à 45 % |
| **Frise verticale** | Un process, une durée | Trait 4 px encre, points ronds `--band` bordés d'encre, quatre étapes qui remplissent la hauteur |
| **Étincelle** | Une respiration près d'un titre, au plus deux par page | SVG à quatre branches courbes, 30 à 44 px, couleur `--g1` ou `--g2` |
| **Fiche Google dessinée** | Illustrer le service Fiche Google | Une carte blanche : photo, nom en 700, étoiles `#FBBC04`, catégorie avec le mot marqué, adresse, deux boutons ronds bleus `#1A73E8`. Un seul objet, pas une interface complète |
| **Bouton** | Une action | Pilule encre `#141414`, texte blanc 700, padding 16px 28px. Secondaire : bord `--card-line`, sans fond. Sur fond sombre : blanc, texte encre. Survol : `#2a2a2a`, rien d'autre. Sans icône |
| **Signature** | Qui parle | Avatar rond 60 px + « Maxence Cailleau » (24 px, 500) + « développement web & accompagnement SEO » (22 px, **700**). Toujours au même endroit. `[signature PNG à venir, même emplacement, 64 px de haut]` |

Ce qu'on ne dessine plus : téléphones, fenêtres de navigateur avec barre d'onglets, notifications iOS, bulles de chat comme décor. Une vraie capture dans le cadre estompé les remplace.

---

## 8. Images

- **Vraies captures des sites livrés**, dans le cadre estompé, avec annotations. Sites en ligne : fenetres-sur-loir.fr, victoria-luz.fr, cielencouleurs.fr, petittonnerre.fr, joinboost.fr, mamie-seo.fr, mamie-vege.fr. `[captures à refaire en 1440 px de large, haut de page, et en 390 px mobile]`
- **Avant / après** : deux vraies captures côte à côte ou l'une sur l'autre, étiquettes « avant » et « après », jauges seulement avec de vrais scores (PageSpeed, position Google).
- **Aucun portrait en grand**, aucune photo détourée, aucune photo d'ambiance en fond. L'avatar rond de la signature est la seule photo de Maxence.
- Pas de stock, pas d'illustration, pas de personnage, pas de 3D, pas d'icône illustrative. Les icônes Lucide sont tolérées à l'intérieur d'une fiche Google dessinée ou d'une capture (téléphone, repère), jamais dans les listes du site.
- Les maquettes de sites fictifs dessinées en code (`references/design/elements/sites/`, plombier, boulangerie, coach…) servent aux carrousels quand il manque une vraie capture. Sur le portfolio, on montre les vrais sites.

---

## 9. Ce qui est interdit

Liste fermée, à vérifier avant chaque écran.

- Dégradé en fond de section ou sur un bouton. Le dégradé ne vit que sur un mot, un badge de nombre et les halos.
- Formes 3D, verre dépoli, ombre colorée.
- Serif, police manuscrite, police condensée en titre, monospace hors capture de code.
- Contour de texte, ombre portée sur le texte.
- Capitales sur un titre ou un bouton (le site actuel le fait partout).
- Emoji, où que ce soit.
- Icônes décoratives, jeux d'icônes pour les listes.
- Portrait en grand, photo détourée, photo en fond.
- Maquette d'interface dessinée en code comme décoration (téléphone, navigateur, notification).
- Nuage de mots, mots dispersés.
- Deux accents dans la même phrase. Deux dispositifs forts sur le même écran. Plus d'une section sombre par page. Plus d'un mot entouré par page.
- Du vide sous un bloc de contenu, en bas à droite d'une section.
- « → Suivre », « Découvrir », « En savoir plus » comme appel à l'action.
- Les mots de l'organisation interne : « carnet », « journal », « thématique », « sport / perso / pro », « template », « buffer », « IA » (comme outil de production).
- Animation d'entrée sur chaque élément, parallaxe, défilement détourné. Mouvement autorisé : 150 à 250 ms, `ease-out`, sur un survol ou un changement d'état, et `prefers-reduced-motion` respecté.

---

## 10. Le ton

### 10.1 La voix

- **Première personne, présent, tutoiement.** Comme sur les posts et les bannières (« des sites que tes clients trouvent »). Le site actuel vouvoie : tout passe au tutoiement, sans mélange. `[à confirmer : tutoiement sur le site]`
- Il raconte **ce qu'il fait et ce qu'il a vu**, avec des chiffres. Le conseil arrive à la fin, déduit du fait.
- Naturel, **sans humour forcé ni grossièreté**. On parle comme à quelqu'un qu'on connaît, on ne cherche pas la blague, on ne force rien.
- Références données par Maxence : le tutoiement chaleureux et le vocabulaire simple de webelle.fr (sans les métaphores ni les jeux de mots) ; l'authenticité de @tristan_vncnt qui montre ce qu'il construit, sans mise en scène, sans posture d'expert, sans promesse.
- Traduit en une règle : chaque texte part d'un fait (un client, une erreur, un chiffre), le dit simplement, et s'arrête quand c'est dit.

### 10.2 Règles d'écriture

1. Phrases courtes. Une idée par phrase. Vingt mots maximum.
2. Majuscule initiale puis minuscules, y compris dans les titres.
3. Pas d'emoji.
4. Pas de superlatifs (« incroyable », « ultime », « premium », « magnétique », « passionné », « expert »). Des chiffres à la place.
5. Pas de vocabulaire de marketeur (« hack », « secret », « booster », « propulser », « sur-mesure », « clé en main », « partenaire de croissance », « big picture », « levier de croissance »). Les mots du métier, expliqués en une demi-phrase.
6. Un aveu d'erreur vaut mieux qu'une leçon. L'ordre : ce qui s'est passé → ce que j'ai compris → ce que je fais maintenant.
7. Chaque chiffre a une source ou un contexte. Aucun chiffre inventé : si Maxence ne l'a pas donné, on écrit sans chiffre.
8. Le mot marqué de chaque bloc est celui qu'on retiendrait si on ne lisait que lui.
9. **Jamais la structure « X, pas Y »** ni « X, jamais Y » ni « pas X : Y » (« un site qui rapporte des clients, pas juste une vitrine », « pas un exécutant, un partenaire »). Ça sonne écrit par une machine. On dit ce qui est. Une négation simple reste possible (« pas de frais de mise en route »).
10. **Pas de métaphore** (« un commercial qui bosse 24 h / 24 », « un marathon, pas un sprint », « bouton magique »). On dit la chose.
11. **Pas de pont forcé** entre le vélo ou la vie perso et le travail. Sur le site, le vélo et le chat n'apparaissent pas, sauf une ligne dans une éventuelle section « qui je suis ».
12. Un seul appel à l'action par écran. Verbe à l'impératif, précis : « Réserver un appel », « Voir l'accompagnement », « Réserver mon audit gratuit ».

### 10.3 Le test du titre

Chaque titre s'écrit d'abord en version plate, puis passe le test :

1. **Précis** : un nombre exact, un réglage nommé, une durée, un lieu.
2. **Un enjeu pour le lecteur** : ce qu'il perd ou gagne, dit avec ses mots.
3. **Une curiosité honnête** : un élément nommé mais pas expliqué, que le texte suivant explique vraiment.
4. **L'erreur plutôt que le conseil** : « l'erreur que je vois sur 8 fiches sur 10 » plutôt que « 5 conseils pour ta fiche ».

| Plat | Passé au test |
|---|---|
| Comment bien remplir sa fiche Google | Un seul champ de ta fiche Google décide de qui t'appelle. |
| 5 conseils pour refaire son site | Si tu refais ton site cette année, vérifie ce détail avant de payer. |
| L'importance de la vitesse d'un site | Ton site met 6 secondes à s'ouvrir. Ton client est déjà chez le voisin. |
| Création de sites web sur mesure | Des sites que tes clients trouvent, puis appellent. |

Ce qu'on ne prend pas : « FOMO », « urgence », « astuce secrète », l'exagération. L'enjeu doit être vrai, la curiosité doit être payée par le texte qui suit.

### 10.4 Vocabulaire

**On garde** : site, site vitrine, refonte, fiche Google, référencement local, la carte Google, les trois fiches en haut, Search Console, mise en ligne, devis, appel, client, page, prestation, chargement, catégorie, avis, annuaire, accompagnement, rapport mensuel.

**On ne lit jamais** : expert, passionné, innovant, sur-mesure, clé en main, premium, magnétique, booster, propulser, optimiser (sans dire quoi), stratégie digitale, ADN, écosystème, game changer, hack, secret, ultime, incroyable, blabla, « n'hésite pas », « pixel » (hors « du premier pixel à la mise en ligne », qui est une formule de Maxence à garder), « dev offshore », « scale-up ».

### 10.5 Ce qu'on ne publie pas

- Rien qui identifie un client sans accord : ni nom, ni domaine, ni chiffre reconnaissable, sauf les sept sites déjà publics sur le portfolio et les trois avis déjà publiés.
- Rien de la vie privée : personnes, lieux précis, santé, âge.
- Pas de témoignage inventé, pas d'avis reformulé. Les avis se citent tels quels, on peut couper avec `[…]`, les superlatifs dedans sont ceux du client.
- Aucune garantie de position sur Google.

---

## 11. Le site précédent : ce qu'on garde, ce qu'on réécrit

Le site précédent (accueil + `/referencement-local` + `/performance`) avait un bon fond : un seul interlocuteur, livré en 2 semaines, site qui appartient au client, fiche Google comme premier levier, engagement 9 mois expliqué, audit gratuit. Ce qui change :

- **Trois pages deviennent deux.** `/performance` (startups, scale-ups, SaaS) disparaît : son public est un autre métier, son vocabulaire est celui qu'on bannit. `/referencement-local` devient `/accompagnement`. Redirections 301 : `/referencement-local` → `/accompagnement`, `/performance` → `/`.
- **Capitales partout** → majuscule initiale puis minuscules.
- **Vouvoiement** → tutoiement.
- **Tarifs** : 700 € → **à partir de 900 €** ; 80 € / mois → **à partir de 90 € / mois**.
- **Six services** (design, développement, SEO, contenu, déploiement, suivi) → **quatre** : Site vitrine, Refonte, Référencement local, Fiche Google. Le contenu, le déploiement et le suivi sont dits à l'intérieur des quatre.
- **Toutes les phrases « X, pas Y » sont à réécrire.** Relevées sur l'ancien site :

| Avant | Réécrit |
|---|---|
| Un site qui vous rapporte des clients, pas juste une vitrine. | Un site qui te ramène des clients. |
| Des sites qui ramènent des clients, pas des compliments. | Des sites que tes clients trouvent, puis appellent. |
| Votre fiche Google, pas le blog. | Ta fiche Google d'abord. |
| SEO inclus, pas en option. | Pensé pour Google dès la première ligne de code. |
| Un investissement, pas un bouton magique. | Ce qui se passe mois après mois. |
| Un travail propre, pas des raccourcis. | Mes engagements. |
| Pas un exécutant. Un partenaire de croissance. | (supprimé avec la page performance) |
| Un site, ce n'est pas une plaquette en ligne. C'est un commercial qui bosse 24 h / 24. | (supprimé : métaphore) |
| Un site qui transforme les visites en appels, pas juste en visites. | Un site qui transforme les visites en appels. |
| Pas de jargon, pas de rapport de 40 pages illisibles. | Une page, que tu comprends. |
| C'est un marathon, pas un sprint. | Compte 6 à 9 mois. L'avance prise est ensuite difficile à rattraper. |

- **Les chiffres de l'ancien site** (7 clients sur 10 via les 3 fiches, ~90 % des demandes locales par la fiche, 3 à 5× plus d'appels, 100/100 PageSpeed, 50 à 60 % de trafic mobile) sont gardés seulement avec une source ou un contexte en dessous. `[sources à donner par Maxence, sinon on retire le chiffre]` → `lib/site.ts`, objet `chiffres`.

---

## 12. Le site en deux pages

Structure et contenu, dans la voix de Maxence, aux nouveaux tarifs. Les marques `~mot~` = dégradé, `==mot==` = bande pastel, `((mot))` = entouré.

### 12.1 Commun aux deux pages

**Header** (collant, fond papier, filet en bas) : « Maxence Cailleau » en 500 avec l'accroche en 700 dessous ou à côté, avatar 40 px. Navigation : Accueil · Accompagnement · Contact (ancre). Bouton « Réserver un appel ».

**Footer** (section sombre, la seule de la page) : la signature complète, « Angers · à distance partout », e-mail en clair, liens LinkedIn et Instagram en texte, lien « Mentions légales » (page légale obligatoire, hors comptage des deux pages). Pas de « codé par ».

**Boutons** : principal « Réserver un appel » (30 min, gratuit, sans engagement) sur l'accueil, « Réserver mon audit gratuit » sur l'accompagnement. Secondaire : e-mail.

**SEO** : titre d'onglet accueil « Création de site et référencement local à Angers · Maxence Cailleau » ; accompagnement « Accompagnement référencement local, à partir de 90 € par mois · Maxence Cailleau ». Descriptions écrites avec les règles de la section 10. Une seule h1 par page. Données structurées `LocalBusiness` (Angers) et `FAQPage`.

### 12.2 Page 1 · Accueil `/`

**1. Hero** (halo, grille, cartes flottantes à droite, pas de photo)
- Badge sombre : « Sites web & référencement local · Angers »
- h1 : « Des sites que tes clients ~trouvent~, puis appellent. »
- Intro : « Je dessine, je code, je mets en ligne et je m'occupe de ta place sur Google. Tu gardes ton temps pour ton métier. »
- Bouton « Réserver un appel » + ligne dessous « 30 min · gratuit · sans engagement ». Secondaire : « Voir l'accompagnement ».
- Étiquettes-info sous les boutons : Site vitrine · Refonte · Référencement local · Fiche Google (points de quatre couleurs différentes).
- Trois cartes flottantes à droite : « Site vitrine / En ligne en 2 semaines », « Référencement local / Trouvé dans ta ville » (pilule « Google »), « Fiche Google / Appelé direct ».

**2. Réassurance** (une rangée de quatre cartes blanches, droites, même hauteur)
- « Un seul interlocuteur » : Tu parles à celui qui dessine, code et met en ligne.
- « En ligne en 2 semaines » : Entre notre premier appel et la mise en ligne.
- « Le site t'appartient » : Payé une fois. Le code et le nom de domaine sont à toi.
- « Pensé pour Google dès le départ » : Structure, vitesse et pages métier dès la première ligne de code.

En dessous, une ligne en `--ink-2` : « 7 sites en ligne : Fenêtres-sur-Loir, Victoria Luz, Ciel en Couleurs, Petit Tonnerre, Boost, Mamie SEO, Et si mamie était végé. » Chaque nom est un lien.

**3. Avis** (trois cartes, étoiles `#FBBC04`, citation en 300, nom et site en 12 px capitales). Les trois avis publiés, cités tels quels, coupés avec `[…]` (voir `lib/avis.ts`).

**4. Services** : quatre sections, même squelette (étiquette-info du service, h2 avec un accent, une phrase de définition, trois points en liste flèches, une ligne de prix, un bouton, un visuel). Un service par écran sur mobile.

*4a. Site vitrine* — visuel : capture estompée d'un site livré, deux étiquettes-info posées dessus (« titre orienté client », « un seul bouton »).
- h2 : « Un site qui s'ouvre vite et qu'on ~trouve~. »
- Définition : « Un site sur mesure, pensé mobile d'abord, avec une page par prestation et un bouton d'appel toujours visible. »
- → La maquette est validée avant la première ligne de code.
- → Nom de domaine, hébergement, e-mails pro, certificat et statistiques sont prêts le jour de la mise en ligne.
- → Le code et le site t'appartiennent.
- Prix : « À partir de 900 € · livré en 1 à 2 semaines »
- Bouton : « Réserver un appel »

*4b. Refonte* — visuel : avant / après, deux captures, jauges seulement avec de vrais scores. Tant qu'il n'y en a pas : la carte « je garde / je refais ».
- h2 : « Ton site existe déjà. Il peut ramener des ==appels==. »
- Définition : « Pour un site en ligne qui ne fait rien : je garde ce qui marche et je refais ce qui bloque. »
- → Le titre dit ce que tu fais, pour qui, où.
- → Un seul bouton, visible sur mobile.
- → Vitesse et structure reprises pour Google.
- Prix : `[à confirmer : « À partir de 900 € », comme une création, ou « Sur devis après un premier appel »]`
- Bouton : « Réserver un appel »

*4c. Référencement local* — visuel : une grande barre de recherche « plombier à angers » et, dessous, trois fiches simplifiées, la première marquée. Un seul objet.
- h2 : « Apparaître dans les ~trois fiches~ en haut de la carte. »
- Définition : « Pour un métier de proximité, c'est là que les clients regardent avant d'appeler. Le travail se concentre sur ces trois places. »
- → Une page par prestation, des pages ville solides.
- → Des avis récents et des annuaires cohérents.
- → Chaque mois, un rapport : ta position, ce qui a été fait.
- Chiffre en étiquette-info : « 7 clients sur 10 passent par ces trois fiches » `[source]`
- Prix : « Compris dans l'accompagnement · à partir de 90 € / mois »
- Bouton : « Voir l'accompagnement »

*4d. Fiche Google* — visuel : la fiche Google dessinée, la catégorie marquée.
- h2 : « Un seul champ de ta fiche décide de qui ~t'appelle~. »
- Définition : « Catégorie principale, services détaillés, vraies photos, publications, réponses aux avis. Je la règle champ par champ et je la fais vivre. »
- → La catégorie la plus précise, parmi les 4 209 possibles.
- → Des photos de terrain et une publication régulière.
- → Une réponse à chaque avis.
- Prix : « Compris dans l'accompagnement »
- Bouton : « Voir l'accompagnement »

**5. Ce qui se passe si on travaille ensemble** (quatre conseils numérotés en colonne, ou une frise verticale)
- 01. **Un appel de 30 minutes.** On parle de ton métier, de tes clients et de ce que tu attends du site. Tu repars avec une recommandation et un ordre de prix.
- 02. **La maquette.** Tu vois le site avant la première ligne de code. On ajuste jusqu'à ce que ce soit bon.
- 03. **Le développement.** Code à la main. Vitesse, structure et accessibilité pour Google dès le départ.
- 04. **La mise en ligne, puis l'accompagnement.** Nom de domaine, e-mails, statistiques. Ensuite, chaque mois : hébergement, modifications, position sur Google.
- Ligne de fin : « 1 à 2 semaines entre le premier appel et la mise en ligne. »

**6. FAQ** (accordéon, questions en 700, réponses en corps) : voir `lib/faq.ts`, `faqAccueil`.

**7. Contact** (section sombre, la seule)
- h2 : « On fait ((connaissance)) ? »
- Texte : « Réserve un créneau. On parle de ton projet, je te donne un avis honnête et un ordre de prix. »
- Étiquettes-info : 30 min · Gratuit · Sans engagement
- Bouton blanc « Réserver un appel ». Dessous : « ou par e-mail · maxencecailleau.pro@gmail.com »
- Puis le footer.

### 12.3 Page 2 · L'accompagnement `/accompagnement`

**1. Hero** (halo, grille)
- Badge sombre : « Accompagnement mensuel · à partir de 90 € / mois »
- h1 : « Être trouvé sur Google, puis être ~appelé~. » (un seul accent par phrase : la bande sur « Google » de la v1 du texte est retirée)
- Intro : « Fiche Google, site et avis, gérés par une seule personne, chaque mois. Pensé pour les artisans et les commerçants, et tout aussi efficace pour les indépendants et les prestataires. »
- Étiquettes-info : Plombier · Électricien · Artisan · Commerçant · Indépendant · Prestataire
- Bouton « Réserver mon audit gratuit ». Secondaire : « Voir les prix » (ancre).

**2. Le vrai levier**
- h2 : « Ta fiche Google ~d'abord~. »
- Texte : « Pour un métier d'intervention, 7 clients sur 10 te trouvent via les 3 fiches en haut de la carte Google. Le référencement local, c'est d'abord gagner ces 3 places. C'est là que je concentre le travail. » (le chiffre n'apparaît qu'avec sa source)
- Trois chiffres en cartes (chiffre 900 + une ligne + source) : « ~90 % » des demandes locales passent par la fiche Google · « 3 à 5× » plus d'appels à trafic égal quand le site convertit · « 6 à 9 mois » pour viser le top 3 dans ta zone. `[sources]`

**3. La méthode** (trois conseils numérotés)
- 01. **Ta fiche Google.** Bonnes catégories principale et secondaires, services détaillés, section produits, vraies photos de terrain, publications régulières, réponses aux avis. C'est là que se jouent la plupart de tes demandes.
- 02. **Ton site.** Une page par prestation, des titres pensés pour ton métier, des pages ville solides, un bouton d'appel toujours visible. Un site qui transforme les visites en appels.
- 03. **Tes signaux de confiance.** Un flux d'avis récents, une présence cohérente sur les annuaires (Pages Jaunes, Solocal, Trustpilot…), des liens locaux pertinents. La régularité bat le volume figé de tes concurrents.

**4. Ce qui est compris** (checklist à gauche, carte flottante « Selon ton ambition » à droite)
- Toujours compris : ✓ Hébergement et maintenance de ton site · ✓ Modifications courantes · ✓ Surveillance de ta position sur Google · ✓ Un rapport mensuel d'une page, sans jargon.
- Selon ton ambition : publications sur la fiche et réponses aux avis · collecte d'avis (QR code, relances) · pages ville et pages prestations · annuaires et citations (CMA, CCI) · présence dans les réponses des IA (ChatGPT, Perplexity, Gemini).

**5. Le prix** (ancre `#prix`)
- h2 : « À partir de ~90 €~ par mois. »
- Texte : « Prix HT. Engagement de 9 mois : la durée qu'il faut pour construire une place dans le top 3 et la tenir. Aucun frais de mise en route. »
- Carte : « Pas encore de site, ou un site à refaire ? Je le crée à partir de 900 €, construit pour le référencement dès le départ. »
- Ce qui fait varier le prix (quatre étiquettes-info avec une ligne chacune) : ton objectif (rester visible, ou grimper dans le top 3) · le rythme de travail sur ta fiche · les contenus à produire · la concurrence de ta zone.
- Ligne : « Après l'audit gratuit, tu reçois un devis précis, poste par poste. »
- Callout : « Un chantier de plus par mois, et l'accompagnement est remboursé. Pour un artisan dont le panier moyen dépasse le millier d'euros, une seule demande en plus couvre souvent le mois. »

**6. Ce qui se passe mois après mois** (frise verticale, quatre étapes)
- Semaines 1 à 3 : Mise en route. Fiche réglée, site repris pour le référencement, annuaires à jour.
- Mois 1 à 3 : Premiers mouvements. La fiche gagne en visibilité, les premiers avis récents arrivent.
- Mois 4 à 6 : Montée dans la carte. Tu apparais sur plus de recherches, dans plus de communes.
- Mois 6 à 9 : Top 3 visé. Figurer parmi les 3 fiches en haut de la carte sur tes requêtes clés.

**7. Mes engagements** (quatre cartes)
- **Aucune technique risquée.** Pas de bourrage de mots-clés dans le nom de ta fiche : Google peut la suspendre. Je joue le long terme.
- **Un rapport que tu comprends.** Chaque mois : ta position, les avis gagnés, ce qui a été fait. Une page.
- **Une seule personne, du début à la fin.** Design, développement, référencement : c'est moi. Tu sais toujours à qui parler.
- **Un engagement qui a du sens.** 9 mois, parce que c'est le temps qu'il faut pour construire une place dans le top 3. Tu peux faire évoluer l'accompagnement à tout moment pendant la période.

**8. Tes clients demandent aussi à ChatGPT, Perplexity ou Gemini** (courte, une carte)
- « "Quel plombier fiable près de chez moi ?" De plus en plus de gens posent la question à une IA. Ses réponses puisent dans les mêmes annuaires, avis et pages que le référencement local. Les premiers installés seront difficiles à déloger. Je peux l'intégrer à ton accompagnement. »

**9. FAQ** : voir `lib/faq.ts`, `faqAccompagnement`.

**10. Un audit gratuit ?** (section sombre)
- h2 : « Un audit ((gratuit)) ? »
- Texte : « Je regarde ta fiche Google et ton site, et je te montre noir sur blanc ce qui te fait perdre des appels : dernière publication qui date, avis sans réponse, prestations invisibles sur Google, concurrents passés devant toi. Sans engagement, sans discours commercial. »
- Bouton blanc « Réserver mon audit gratuit ». Dessous : « ou par e-mail · maxencecailleau.pro@gmail.com »
- Puis le footer.

---

## 13. Traduction technique

- **Structure d'un écran** : étiquette-info ou badge en haut à gauche, titre, contenu, un seul élément « posé » (carte, capture, chiffre). Comme une slide.
- **Mode sombre** : non. Le site est clair, avec une section sombre par page.
- **Accessibilité** : `--ink` sur `--paper` et `#F4F4F2` sur `#141414` passent AAA ; encre sur `--band` passe AA ; jamais `--ink-2` sur `--band`. Le mot en dégradé est toujours dans un titre de 32 px ou plus, jamais en corps. Focus visible : anneau 2 px encre, décalé de 2 px. `prefers-reduced-motion` respecté.
- **Performance** : polices auto-hébergées, `font-display: swap`, préchargement d'Archivo romain ; images AVIF / WebP avec largeurs multiples, `loading="lazy"` hors hero, dimensions déclarées ; la grille et les halos en CSS pur, aucune image de fond.
- **SEO** : une h1 par page, titres en phrase, `LocalBusiness` + `FAQPage`, redirections 301 des anciennes URL, sitemap à deux entrées plus les mentions légales.
- **Bannières LinkedIn** : elles sont dans le même style (`references/design/bannieres-linkedin/v3-sobre/export/G1-violet.png` est celle que Maxence garde). Le hero du site et la bannière doivent se ressembler.

---

## 14. Assets récupérés dans le dépôt de l'app carrousel

Chemin de base : `/Users/maxencecailleau/Documents/PROGRAMMATION/App carrousel auto/`

| Quoi | Où |
|---|---|
| Polices woff2 + licences OFL | `public/fonts/` (copiées ici) |
| Tokens CSS du style sobre (source de vérité) | `src/lib/templates/tokens.css`, bloc `[data-style="sobre"]` et `[data-accent="…"]` |
| Composants de rendu : étiquette-info, carte flottante `.fc`, capture estompée, jauge, conseil, mot géant | `src/lib/templates/Slide.tsx`, `src/lib/templates/tokens.css` |
| Bannières sobres de référence (G1 à G4, trois accents) + leur source HTML | `references/design/bannieres-linkedin/v3-sobre/` (`template.html`, `export/`) |
| Formes SVG (étincelle, ovale, curseur, flèche courbe) | `references/design/bannieres-linkedin/v3-sobre/template.html` (symboles `#etincelle`, `#ovale`, `#curseur`), `references/design/elements/svg/formes.svg` |
| Carrousels rendus dans le style sobre (exemples de la DA appliquée) | `data/carousels/c-mu1g6svtbc1j/`, `data/carousels/c-mu2dw3b4itdz/` |
| Maquettes de sites fictifs (pour comprendre le cadre « capture ») | `references/design/elements/sites/` |
| Avatar de la signature | photo `p-mtvo93710sxg` dans `data/photos/` (recadrée en `public/avatar.jpg`) |
| Le fichier de ton complet | `references/contenu/ton-et-bonnes-pratiques.md` |
| Analyse des inspirations design (historique des décisions) | `references/design/analyse-inspirations-design.md` |

À demander à Maxence : la **signature PNG**, les **captures des sept sites** (1440 px et 390 px), les **sources des chiffres** de la section 12, le choix **création / refonte au même prix ou sur devis**, et la confirmation du **tutoiement** sur le site.

---

## 15. Checklist avant de montrer un écran

- [ ] fond `#FAFAF8`, grille fine à 7 %, halo discret sur le hero seulement
- [ ] Archivo partout, espacement négatif, majuscule initiale puis minuscules, aucune capitale sur un titre
- [ ] un mot en dégradé par titre, jamais deux accents dans une phrase, un mot entouré par page au plus
- [ ] un seul dispositif fort par écran, cartes penchées de 6° au plus, en sens alternés
- [ ] une section sombre par page, la fin
- [ ] vraies captures dans le cadre estompé avec annotations ; aucun portrait en grand
- [ ] aucun dégradé de fond, contour, emoji, icône décorative, maquette d'interface décorative
- [ ] aucun vide sous un bloc ou en bas à droite d'une section
- [ ] textes : première personne, présent, tutoiement, un fait, un chiffre sourcé, aucune phrase « X, pas Y », aucune métaphore, aucun mot de la liste bannie
- [ ] un seul appel à l'action par écran, verbe précis
- [ ] tarifs : à partir de 900 € (site), à partir de 90 € / mois (accompagnement)
- [ ] signature au même endroit sur chaque page
- [ ] relu à voix haute : ça sonne comme Maxence
