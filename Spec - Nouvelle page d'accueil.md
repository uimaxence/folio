# Spec + copy — Nouvelle page d'accueil maxence-cailleau.fr

**Objectif unique de la page : déclencher un contact (mail ou téléphone).**
Tout le reste (portfolio, blog, pages de service) est secondaire et sort du chemin principal.

DA : v2 jaune `#F7EC4D` / noir chaud `#201B1A` / blanc `#FEFEFE` / cream `#F2ECDF`. Bords francs, pas d'ombres, pas de dégradés. Largeur de contenu 1152 px. Padding vertical de section : 96 px mobile → 128 px desktop.

Règle transverse : **« je », jamais « nous ».** Zéro jargon. Test du carreleur de 55 ans à chaque phrase.

---

## Diagnostic rapide de la home actuelle (pourquoi on refait)

| Ce qui ne va pas | Conséquence |
|---|---|
| La promesse est « je fais du design, du dev, du SEO, du déploiement » | Tu vends un métier, pas un résultat. Le visiteur compare des devis, pas des personnes. |
| L'ordre des sections suit ton process, pas la tête du client | Le client s'en fiche de tes 6 services. Il veut savoir s'il va avoir plus d'appels. |
| Les 6 blocs « Services » sont symétriques | Rien ne ressort. Le SEO local, qui est ta vraie valeur, a le même poids visuel que « Déploiement ». |
| Les preuves (avis, projets, chiffres) sont en bas | Elles arrivent après la décision, donc trop tard. |
| Un seul type de CTA (« Réserver un appel ») | Un artisan sur un chantier n'appelle pas via Calendly. Il faut un numéro cliquable et un formulaire de 3 champs. |
| « À partir de 700 € » et « 80 €/mois » en bas de page | Ça positionne bas. Ça attire exactement les clients dont tu veux sortir (cf. objectif MRR). |
| Le suivi mensuel apparaît comme le service n°6 | Il ressemble à une option. Le brand book v2 dit l'inverse : c'est le produit. |
| La page `/referencement-local` est meilleure que la home | Ta page la plus convaincante n'est pas celle où les gens arrivent. |

| Le discours est ancré sur Angers | Tu te fermes toute la France pour rassurer les gens de ta rue. Le référencement local se vend partout : ce que tu vends, c'est la spécialité, pas la proximité. |
| Le seul CTA est un audit / un Calendly | Tu mets une machine entre le prospect et toi, alors que l'absence d'intermédiaire est exactement ce que tu vends. Le contact direct passe avant l'audit. |

**Ce qui marche déjà et qu'on garde :** le portfolio réel, les témoignages, la FAQ, la clarté du ton.

---

## Trois arbitrages qui traversent toute la page

1. **Aucune ville dans la promesse.** L'Anjou est une info sur toi, pas un périmètre. Il apparaît dans le bloc « Qui je suis » et dans le footer, jamais dans une accroche ou un titre.
2. **Aucun délai de livraison chiffré.** À la place, le comparatif agence : un seul interlocuteur, pas de file d'attente, une modif souvent le jour même. La date ferme est dans le devis.
3. **Le premier appel à l'action est un contact direct** — téléphone ou mail. L'audit gratuit n'est pas la porte d'entrée, c'est ce que tu proposes *pendant* la conversation.

---

## Structure de la page (17 blocs)

Ordre de lecture pensé comme un tunnel : *je te comprends → voilà le résultat → voilà la preuve → voilà comment → voilà le prix → on se parle.*

---

### 00 — Barre d'annonce (24 px de haut, aplat noir, texte jaune)

> ● 2 places de suivi disponibles en octobre — partout en France

Point vert `#16A34A` si disponible, sinon on masque la barre. **Ne jamais afficher une fausse rareté** : si tu as 5 places, écris 5.

---

### 01 — Header (sticky, fond blanc, filet noir 1 px en bas)

- Gauche : `Maxence Cailleau` en display, tracking serré + sous-ligne `Designer Coder indépendant`
- Centre (desktop uniquement) : `Ce que je fais` · `Résultats` · `Tarifs` · `Qui je suis`
- Droite : **bouton téléphone** (icône + numéro en clair, `tel:`) et **bouton jaune plein** `Écris-moi`

Sur mobile, le bouton téléphone reste visible en permanence, en barre fixe basse. C'est le CTA le plus rentable pour une cible artisan — et il faut que le numéro soit **lisible**, pas caché derrière une icône.

---

### 02 — Hero

**Fond :** aplat jaune `#F7EC4D` bord à bord. Texte noir chaud. Photo détourée de toi à droite (le sticker avatar de la DA), débordant du cadre.

**Surtitre** (didone, ~24 px)
> 01/ Sites web & référencement local · Un seul interlocuteur, du début à la fin

**Titre** (display Black, tracking très serré, 3 lignes)
> **Quand quelqu'un cherche ton métier près de chez toi, c'est toi qu'il doit trouver.**

**Sous-titre** (courant regular, max 2 lignes)
> Je crée ton site sur-mesure. Puis chaque mois, je travaille ton référencement local pour que tu remontes dans Google — et dans les réponses de ChatGPT. Tout ça avec une seule personne au bout du fil : moi.

**Double CTA — les deux sont des contacts directs**
- Bouton principal, noir plein, texte jaune, avec l'icône téléphone : `Appelle-moi — 06 XX XX XX XX` (lien `tel:`)
- Bouton secondaire, contour noir 1 px : `Envoie-moi un mail` (lien `mailto:`)

Le numéro est écrit en toutes lettres dans le bouton, pas remplacé par le mot « Appeler ». Un artisan compose souvent le numéro depuis un autre téléphone que celui qui affiche la page.

**Micro-preuve sous les boutons** (22 px, manuscrit)
> Tu tombes directement sur moi · Réponse sous 24 h · Je te dis ce que je vois, même si on ne travaille pas ensemble

**Bandeau de preuve, collé en bas du hero** (fond noir, texte blanc, 4 colonnes séparées par des filets 1 px)

| 10 | 5 | 1 | 5,0 ★ |
|---|---|---|---|
| sites livrés | clients suivis chaque mois | seul interlocuteur, du devis au référencement | sur Google |

> ⚠️ À vérifier avant mise en ligne : le portfolio public montre 7 projets. Soit tu en ajoutes 3, soit tu écris 7. Un chiffre qu'on ne peut pas vérifier sur la page d'à côté détruit les trois autres.

---

### 03 — Le problème (fond cream, 3 colonnes)

**Titre** (display)
> **Tu as sûrement déjà un site. Le problème n'est pas là.**

Trois cartes à bords francs, filet noir 1 px, numérotées en didone :

**01/ Personne ne le trouve**
> Ton site existe, il est joli, et il ne ramène rien. Normal : Google ne le connaît pas encore, ou il ne comprend pas ce que tu fais ni où tu le fais.

**02/ Il a été livré puis abandonné**
> Le développeur a encaissé, il est parti. Depuis, le site vieillit tout seul pendant que tes concurrents publient.

**03/ Tu n'as pas le temps de t'en occuper**
> Deux heures par semaine sur un truc qui n'est pas ton métier, toutes les semaines, pendant un an. Sois honnête : tu vas le faire ?

**Phrase de bascule, en dessous, bandeau surligneur jaune en biais 3°**
> Un site, ce n'est pas un livrable. C'est un point de départ.

---

### 04 — L'offre en deux temps (fond blanc, trame de pois)

**Titre**
> **Ça se passe en deux temps. Et le deuxième compte plus que le premier.**

Deux blocs côte à côte, séparés par un filet noir vertical. Le bloc 2 est visuellement dominant (fond jaune, le bloc 1 reste blanc) — c'est la hiérarchie qui vend l'abonnement.

**Bloc 1 — LA MISE EN LIGNE** · un projet · facturé une fois
> Design, développement, contenu, structure de référencement, fiche Google Business, mise en ligne.
> Le socle. Il est fini, il est payé, il est à toi.

Liste à filets 1 px : `Maquette sur-mesure (pas de template)` · `Développement Next.js à la main` · `Textes écrits pour être trouvés ET pour convaincre` · `Fiche Google Business créée et optimisée` · `Nom de domaine, hébergement, mails pro, SSL` · `Mise en ligne et vérification des scores`

**Bloc 2 — LE SUIVI** · tous les mois
> C'est là que le site commence à rapporter.

Liste : `Référencement local en continu — positions, contenu, fiche Google, avis` · `Présence dans les réponses des IA (ChatGPT, Perplexity)` · `Évolution du site — nouvelles pages, retouches, performance` · `Maintenance, sécurité, sauvegardes, hébergement` · `Un point par mois avec les vrais chiffres`

**Bas de section, pleine largeur, fond noir texte jaune**
> Le site, c'est le début du résultat. Ce qui le fait vraiment, c'est les douze mois d'après.

---

### 05 — La section « Avant / Après » (celle de ton screen)

C'est le bloc le plus important de la page. Il montre le résultat sans un mot de jargon.

**Titre**
> **Voilà ce qui change.**

**Sous-titre**
> Même recherche. Même métier. La seule différence, c'est le travail fait entre les deux.

**Composant :** deux « faux Google » côte à côte, à bords francs (adapter ton screen à la DA v2 — retirer les arrondis 24 px, remplacer le violet par du noir chaud, garder le jaune).

- **Gauche — badge noir `Avant`** : barre de recherche avec une requête générique du type `menuisier près de chez moi` (ne mets pas de ville réelle — ça ancre la page sur un territoire et ça exclut tous les autres), 3 résultats grisés (blocs de squelette), et le client en 4ᵉ position, en bas, à peine visible.
- **Droite — badge jaune `Après`, cadre jaune 3 px, confettis** : même recherche, le client en position 1 avec favicon, titre, URL et une pastille `1`.

**Détails à ne pas rater :**
- Les résultats concurrents restent des blocs gris anonymes — **ne jamais afficher un nom de concurrent réel.**
- Ajouter sous chaque carte une légende manuscrite : à gauche `Personne ne descend jusque-là.` / à droite `C'est ici que le téléphone sonne.`
- Prévoir une version mobile empilée (Avant au-dessus, Après en dessous) avec une flèche manuscrite jaune entre les deux.
- Animation : au scroll, le résultat client « remonte » de la position 4 à la position 1 en 600 ms. Une seule fois, `prefers-reduced-motion` respecté.

**Sous le composant, un mot d'honnêteté** (ça renforce, ça n'affaiblit pas) :
> Ça ne se fait pas en une semaine. Sur une recherche locale, compte 3 à 6 mois pour bouger vraiment, 6 à 9 pour viser les trois premiers. Personne ne peut te garantir une position précise — celui qui te la promet te ment.

---

### 06 — La garantie technique (fond noir, texte blanc et jaune)

**Titre**
> **Les scores, eux, je peux te les garantir.**

**Chapô**
> Le classement Google dépend de Google. La qualité technique de ton site dépend de moi. Alors je m'engage dessus, par écrit, dans le devis.

**Quatre compteurs** (grands chiffres jaunes, label en dessous, filets 1 px entre les colonnes) :

| ≥ 90 | 100 | 100 | 3/3 |
|---|---|---|---|
| Performance | Bonnes pratiques | SEO technique | Lisibilité par les IA |

**Ligne de conditions, en petit, sous les compteurs — obligatoire :**
> Mesuré sur PageSpeed Insights, page d'accueil, profil mobile, le jour de la mise en ligne. Performance ≥ 90 sur desktop et ≥ 80 sur mobile.

**L'engagement** (bandeau surligneur jaune)
> Si les scores n'y sont pas à la livraison, je continue à travailler dessus sans te facturer une heure de plus.

**Bloc « Lisibilité par les IA — 3/3 », dépliable**
> Trois choses décident si ChatGPT et Perplexity peuvent citer ton site :
> 1. Ton contenu est lisible sans JavaScript — la plupart des robots d'IA ne l'exécutent pas.
> 2. Tes données structurées sont propres (métier, adresse, horaires, avis) — c'est ce qui permet à une IA de te citer avec le bon numéro.
> 3. Un fichier `llms.txt` décrit ton activité aux moteurs génératifs.
> Je vérifie les trois avant de mettre en ligne.

> ⚠️ Trois décisions à valider :
> **(a)** Tu m'as dit « minimum 80 en performance ». Je te déconseille de l'écrire : 80 est un score moyen, et tu affiches aujourd'hui du 100/100. Écrire 80 te fait perdre l'argument. Mets ≥ 90, tu l'atteins déjà.
> **(b)** Idem pour le SEO : 95 est un chiffre bizarre à lire, et 100 est facile à tenir sur un site que tu construis. Mets 100.
> **(c)** Le « 3/3 agentic » : j'ai proposé une définition ci-dessus (sans-JS / données structurées / llms.txt). Si ton outil mesure autre chose, dis-moi quoi — une garantie chiffrée doit dire ce qu'elle mesure, sinon elle ne vaut rien.

---

### 07 — « Ce que tu peux en attendre » (le toggle par métier)

**Titre**
> **Concrètement, ça donne quoi chez toi ?**

**Sous-titre**
> Choisis ton cas. Les leviers ne sont pas les mêmes.

**Composant :** onglets à bords francs, fond blanc, l'onglet actif en aplat jaune avec texte noir. Sur mobile : accordéon, pas de scroll horizontal. Le premier onglet est ouvert par défaut. Chaque panneau contient 3 bénéfices + 1 phrase de contexte + un mini-CTA.

---

**Onglet 1 — Artisan du bâtiment** *(menuisier, plaquiste, couvreur, électricien, paysagiste…)*

> Ta demande arrive par Google Maps avant d'arriver par ton site. On travaille les deux ensemble.

- **Des demandes de devis qualifiées, pas des curieux.** Une page par métier et une page par ville pour capter « [ton métier] + [la commune] » — la recherche qui déclenche un appel.
- **Une fiche Google Business qui te met dans les 3 premiers.** Photos, zones, prestations, avis : c'est elle qui fait ~90 % des demandes locales, pas ton blog.
- **Un site qui rassure en 5 secondes.** Certifications (RGE, Qualibat), chantiers photographiés, devis gratuit sous 48 h, numéro cliquable partout.

*Repère honnête :* un chantier de plus par mois couvre largement le suivi, quand ton panier moyen dépasse 1 000 €.

---

**Onglet 2 — Indépendant de service** *(coach, consultant, formateur, photographe, artisan de bouche…)*

> Ton problème n'est pas la visibilité brute, c'est la confiance. On construit les deux.

- **Être trouvé sur ce que tu vends, pas sur ton nom.** Aujourd'hui on te trouve si on te connaît déjà. On vise les recherches de gens qui ne te connaissent pas encore.
- **Une page par prestation.** Une page qui parle d'une chose se positionne. Une page « Services » qui parle de six choses ne se positionne sur aucune.
- **Un parcours qui amène au rendez-vous.** Preuve, tarif ou fourchette, disponibilité, formulaire court. On enlève tout ce qui fait hésiter.

---

**Onglet 3 — Profession libérale & paramédical** *(ostéo, diététicien, kiné, thérapeute, avocat…)*

> Beaucoup de recherches, peu de sites corrects. C'est le terrain le plus facile à gagner.

- **Apparaître sur « [ta spécialité] + [ta ville] ».** C'est presque tout le trafic utile de ton métier.
- **Fiche Google, horaires, accès, prise de rendez-vous.** L'information pratique décide plus que le design.
- **Un site qui reste dans les clous.** Ton métier est encadré : on écrit ce qui est permis, on ne promet pas de résultat de soin.

---

**Onglet 4 — Artiste & créatif** *(tatoueur, illustrateur, photographe, artisan d'art…)*

> Ton travail est ta meilleure page de vente. Encore faut-il qu'il se charge vite et qu'on le trouve.

- **Un portfolio qui se charge instantanément.** Images optimisées, zéro attente : la première seconde décide si on reste.
- **Être trouvé par style et par lieu.** « tatoueur blackwork » + ta ville ramène des clients. « artiste » ne ramène personne.
- **Une identité qui te ressemble.** Design sur-mesure, pas de template reconnaissable au premier coup d'œil.

---

**Onglet 5 — Commerce local** *(boutique, restaurant, salon, garage…)*

> Ici, tout se joue sur Google Maps et sur les avis. Le site sert à convertir, pas à attirer.

- **Le trio horaires / itinéraire / téléphone, imbattable.** Visible sans scroll, à jour, cliquable.
- **Une machine à avis.** Une méthode simple pour en récolter régulièrement — c'est le premier critère du classement local.
- **Ce qui te différencie, en haut.** Produit, spécialité, ambiance : la raison de venir chez toi plutôt qu'à côté.

---

**Pied de section, commun aux 5 onglets**
> Ton métier n'est pas dans la liste ? C'est probablement quand même mon terrain. Écris-moi, je te dis franchement si je peux t'aider.

---

### 08 — Étude de cas (fond cream)

Badge didone `Étude de cas` + titre :

> **Fenêtres sur Loir : la valeur de leur trafic Google a été multipliée par 3 en cinq mois.**

Trois compteurs en très gros, chiffres noirs sur cream :

| ×3,2 | 714 € → 1 483 € | 2 |
|---|---|---|
| valeur du trafic organique (mars → août 2026) | l'équivalent Google Ads du trafic gratuit, par mois | nouvelles pages de zone entrées dans Google |

Sous les chiffres, une ligne de méthode (courant regular) :
> Menuisier RGE à Seiches-sur-le-Loir. Trois mois de travail sur la structure, les pages de zone et le contenu local. Aucun budget publicitaire.

CTA texte, souligné au feutre : `Voir le détail de ce qu'on a fait →` vers `/etudes-de-cas/fenetres-sur-loir`

> Source des chiffres : DataForSEO, historique de positionnement du domaine, relevé du 5 septembre 2026. Détail complet dans la page dédiée.

---

### 09 — Avis clients (fond blanc)

**Titre**
> **Ce qu'ils en disent.**

**Bloc note, en haut, aplat jaune :**
> ★★★★★ **5,0 / 5** sur Google

Puis 4 à 6 témoignages en cartes à bords francs, filet 1 px, avec : citation, nom complet, métier + ville, et le lien vers l'avis Google d'origine.

**Règles à tenir :**
- N'affiche que des avis réellement publiés. Chaque carte doit être cliquable vers sa source.
- Écris le nombre d'avis à côté de la note (« 5,0/5 sur 8 avis »). Une note sans volume donne l'impression qu'il y en a deux.
- Priorise les témoignages qui parlent d'un **résultat** (« on m'appelle plus ») avant ceux qui parlent d'un ressenti (« très pro, très réactif »). Si tu n'en as pas, demande-les : la bonne question à poser est *« qu'est-ce qui a changé concrètement depuis ? »*.

---

### 10 — Qui je suis (fond noir, photo en duotone sombre)

**Titre display, jaune**
> **Il n'y a personne d'autre derrière ce site.**

**Texte** (blanc, 3 courts paragraphes)
> Je m'appelle Maxence, j'ai 25 ans, je suis développeur web indépendant. Je fais le design, le développement, les textes, la mise en ligne et le référencement. Seul, du premier croquis au jour du lancement.
>
> Ce n'est pas une posture d'artisan. C'est ce qui fait que tu m'as, moi, directement — pas un commercial, pas un chef de projet, pas quelqu'un que tu ne verras jamais — et que changer une photo prend deux heures au lieu de trois semaines.
>
> Je suis basé en Anjou et je travaille avec des clients partout en France. Le référencement local n'est pas une question de kilomètres : c'est de savoir comment les gens cherchent dans ta zone. Ça, je le fais tous les jours.
>
> Et je ne prends pas trente clients en suivi. Une personne ne peut pas suivre trente sites sérieusement.

**Les quatre preuves**, en ligne, séparées par des filets jaunes 1 px :

`Une seule personne, du design à la mise en ligne` · `Tu ne fais la queue derrière personne` · `Partout en France, tout à distance` · `Je publie mes chiffres : objectif ×3 annoncé publiquement, mois par mois`

CTA discret : `Le point du mois →` (vers la page Objectif x3) — la transparence est ta preuve la plus rare, elle mérite un lien.

---

### 10 bis — Moi ou une agence (fond blanc, tableau à filets 1 px)

C'est le bloc qui remplace l'ancien argument « livré en 2 semaines ». Il dit la même chose — c'est rapide — mais il dit **pourquoi**, et il attaque le seul concurrent sérieux du prospect.

**Titre**
> **Ce que tu payes vraiment dans une agence.**

| | Une agence | **Moi** |
|---|---|---|
| Ton interlocuteur | Un commercial, puis un chef de projet, puis peut-être le développeur | **Moi. C'est tout.** |
| Qui fabrique ton site | Quelqu'un que tu ne verras jamais | **La personne à qui tu parles** |
| Le démarrage | Ton dossier fait la queue derrière les gros comptes | **Il n'y a pas de file** |
| Une modification | Un ticket, parfois un devis, deux à trois semaines | **Souvent le jour même** |
| Après la livraison | Tu recontactes le service client | **Je suis déjà là, tous les mois** |
| Ce que tu payes | Des bureaux, des commerciaux et des chefs de projet | **Le travail** |

**Sous le tableau, en manuscrit :**
> Je ne dis pas qu'une agence fait du mauvais travail. Je dis que tu payes trois personnes pour parler à celle qui code.

**Ligne d'honnêteté à garder** (elle rend le reste crédible) :
> Ce que je ne sais pas faire : gérer dix chantiers de front, absorber une refonte à 200 pages, ou te répondre pendant mes vacances. Si ton projet demande une équipe, une agence est le bon choix — et je te le dirai.

---

### 11 — Comment ça se passe (fond blanc, trame de pois)

**Titre**
> **Quatre étapes, zéro intermédiaire, zéro surprise.**

Frise horizontale (accordéon vertical sur mobile), numérotée en didone :

**01/ Tu m'appelles — 15 minutes suffisent**
> Ton métier, ta zone, ce que tu attends, ce que font tes concurrents. Tu tombes sur moi, pas sur un standard. À la fin de l'appel, tu sais ce que je ferais à ta place, même si on ne travaille pas ensemble. Si ça a du sens, je regarde ton site en détail dans la foulée — gratuitement.

**02/ Devis — sous 48 h**
> Deux lignes, toujours : la mise en ligne, et le mois qui suit. Prix ferme, contenu détaillé, date de livraison écrite noir sur blanc.

**03/ Fabrication**
> Maquette validée, puis développement, textes et structure de référencement. Tu vois le site avancer en ligne, tu n'attends pas la surprise finale. Une question, une correction : tu m'écris, tu n'ouvres pas de ticket.

**04/ Mise en ligne, puis chaque mois**
> Nom de domaine, hébergement, mails, fiche Google, vérification des scores. Et à partir de là, le travail mensuel commence.

---

### 12 — Tarifs (fond cream) — transparence assumée

**Titre**
> **Ce que ça coûte.**

**Chapô**
> Pas de « sur devis » partout. Voilà les fourchettes réelles ; le prix exact dépend du nombre de pages, du contenu à écrire et de la concurrence sur ta zone.

**Colonne gauche — LA MISE EN LIGNE** (une fois)

| | |
|---|---|
| Site essentiel — 3 à 5 pages | à partir de **1 500 €** |
| Site local complet — 6 à 12 pages + pages de zone | à partir de **2 500 €** |
| Sur-mesure, boutique, refonte lourde | sur devis, à partir de **4 000 €** |

**Colonne droite — LE SUIVI** (par mois) — mise en avant jaune

| | |
|---|---|
| La maintenance seule — hébergement, sécurité, sauvegardes, petites retouches | **90 €/mois** |
| **Le suivi** — tout ce qui précède + référencement local actif, contenu, fiche Google, avis, présence dans les IA, point mensuel chiffré | **350 €/mois** |
| Le suivi renforcé — plusieurs villes ou métiers, production de contenu soutenue | à partir de **650 €/mois** |

**Sous les deux colonnes :**
> Le suivi : 6 mois minimum, puis mensuel sans engagement. Six mois, c'est le délai en dessous duquel le référencement local ne produit rien de mesurable — je ne veux pas te prendre trois mois d'abonnement pour te laisser partir déçu.
> Ton site et tes accès t'appartiennent. Si tu arrêtes, tu pars avec.

> ⚠️ Décision à trancher : ta page `/referencement-local` annonce **9 mois** d'engagement. J'ai mis **6** ici — c'est plus facile à vendre et ça reste défendable. Choisis-en un et aligne les deux pages : deux chiffres différents sur le même site, c'est le genre de détail qui fait douter d'un devis.

---

### 13 — Objections (accordéon, fond blanc)

Reprend le tableau §2.11 du brand book, dans cet ordre :

1. **« Tu n'es pas dans ma région. »** → *Tout le travail se fait à distance, et ça n'a jamais posé de problème. Le référencement local, ce n'est pas une question de kilomètres : c'est de savoir comment les gens cherchent chez toi.* **À mettre en premier** : c'est la seule objection nouvelle que crée le passage au national, et elle doit être désamorcée avant toutes les autres.
2. **« Tu me le livres quand ? »** → *La date est dans le devis, ferme. Ce que je peux te dire tout de suite, c'est que tu ne fais la queue derrière personne, et que si tu m'écris un mardi je te réponds le mardi.*
3. **« C'est cher, un abonnement tous les mois. »**
4. **« Je peux le faire moi-même. »**
5. **« Je m'engage combien de temps ? »**
6. **« Combien de temps avant de voir quelque chose ? »** → *3 à 6 mois pour bouger, 6 à 9 pour viser le top 3. Et je te montre les chiffres tous les mois, y compris quand ils baissent.*
7. **« J'ai un neveu qui fait des sites. »**
8. **« J'ai déjà un site. »**
9. **« Pourquoi pas une agence ? »**
10. **« Et si ça ne marche pas ? »** → *Au bout de six mois, si rien ne bouge et que je n'ai pas d'explication solide à te donner, on arrête. Je n'ai aucun intérêt à te garder de force.*

Titres en question, réponses en « je ». Une seule ouverte à la fois.

---

### 14 — CTA final : le tunnel (aplat jaune plein cadre)

**Titre display, très gros, tracking serré**
> **Dis-moi ce qui coince. Je te réponds moi-même.**

**Sous-titre**
> Pas de formulaire à rallonge, pas de robot, pas de commercial. Tu m'appelles ou tu m'écris, et tu as quelqu'un au bout — celui qui fera le travail.

**Les deux vrais CTA, énormes, côte à côte, à poids égal :**

- **Bouton 1** — noir plein, texte jaune, icône téléphone, hauteur double :
  `06 XX XX XX XX`
  sous-ligne en petit : *du lundi au vendredi, 9 h – 19 h*
- **Bouton 2** — contour noir 2 px, icône enveloppe, même hauteur :
  `maxencecailleau.pro@gmail.com`
  sous-ligne : *réponse sous 24 h*

Sur mobile, les deux passent en pleine largeur, l'un sous l'autre, le téléphone au-dessus.

**En dessous, en plus petit — le repli pour ceux qui ne veulent ni appeler ni écrire :**
> Tu préfères que ce soit moi qui te rappelle ? Laisse-moi ton numéro et ton métier :

Formulaire à **2 champs seulement** — `Ton numéro` et `Ton métier` — bouton `Rappelle-moi`.

**Micro-copie de réassurance, en manuscrit :**
> Pas de relance automatique. Pas de newsletter. Pas de séquence de mails. Je réponds moi-même.

**Ce qui a changé, et pourquoi :** l'audit gratuit n'est plus la porte d'entrée. Il devient ce que tu proposes **pendant** l'appel (« envoie-moi ton adresse, je regarde et je te rappelle »). Un formulaire d'audit met une machine entre le prospect et toi — exactement ce que tu reproches aux agences. Garde l'audit comme argument dans la conversation et dans la micro-copie du hero, jamais comme bouton principal.

**Points techniques à ne pas oublier :**
- Numéro en `tel:` avec un vrai `<a href="tel:+33...">`, pas un `onclick`. Mail en `mailto:` avec un objet pré-rempli (`?subject=Demande%20via%20le%20site`) : ça te permet de tracer la source.
- Le mini-formulaire poste sans rechargement et affiche la confirmation sur place (pas de page « merci » séparée : on perd du monde au chargement).
- Ajouter le même bloc CTA compact **au milieu de la page**, juste après la section Avant/Après — 40 % des gens ne descendent jamais jusqu'en bas.
- Garder le Calendly, mais uniquement en lien texte discret dans le footer et dans les mails de réponse. Pour un artisan, c'est une friction ; pour un consultant, c'est un confort.

---

### 15 — Footer (fond noir, texte blanc)

- Colonne 1 : ton nom, la signature `Designer Coder indépendant`, le mail, le téléphone, et une ligne discrète `Basé en Anjou — je travaille partout en France`
- Colonne 2 : `Création de site` · `Référencement local` · `Études de cas` · `Objectif ×3`
- Colonne 3 : LinkedIn, Instagram
- Ligne de bas : mentions légales, SIREN, © 2026

---

## Ce que tu as oublié et que je rajouterais

1. **Un numéro de téléphone.** Ton site n'en affiche pas. Tu vises des artisans : c'est le canal n°1. À mettre dans le header, dans le hero, dans le footer, et en barre fixe sur mobile.
2. **Une réponse claire à « tu es où ? », sans te fermer la France.** Une seule ligne dans le bloc « Qui je suis » et une dans le footer : *basé en Anjou, je travaille partout, tout se fait à distance.* Pas de liste de villes sur la home — elle te ferait perdre les prospects qui n'y sont pas, pour un gain SEO qui appartient de toute façon à des pages dédiées. Si tu veux capter les recherches locales autour de chez toi, fais-le avec **une page par ville**, hors de la home.
3. **Un délai de réponse annoncé.** « Réponse sous 24 h » vaut trois arguments de vente. Tiens-le.
4. **Le `LocalBusiness` en données structurées** sur la home (nom, zone desservie, prestations, note et nombre d'avis, téléphone). C'est ce qui permet aux IA de te citer avec le bon numéro — et ça illustre exactement ce que tu vends.
5. **Une preuve visible que le site est à jour.** Une date sur la page Objectif ×3 (« dernier point : septembre 2026 »). Un compteur figé sur un vieux mois te dessert.
6. **Trois vraies photos de toi.** Bureau, terrain, visage. Tu vends « une seule personne » — cette personne doit avoir un visage.
7. **Une capture PageSpeed réelle** à côté de la section garantie. Tu m'as proposé des screens : oui, mets-en un, avec la date et l'URL testée visibles.
8. **Retirer le mot « Services » du menu.** Deux entrées à la place : `Créer mon site` et `Être trouvé sur Google`. Le menu doit parler résultat, comme le reste.
9. **Un lien direct vers la page `/referencement-local`** depuis le bloc « Le suivi » — c'est ta meilleure page, elle mérite du trafic depuis la home.
