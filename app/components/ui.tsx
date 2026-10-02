import Image from "next/image";
import Link from "next/link";
import { useId, type CSSProperties, type ReactNode } from "react";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------
   Primitives de la DA « sobre » (DESIGN.md §6 et §7).
   Une section = un titre, un seul objet fort. La grille est portée par la page.
------------------------------------------------------------------- */

export function Conteneur({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`conteneur ${className}`}>{children}</div>;
}

export function Section({
  id,
  sombre = false,
  halo = false,
  fond = false,
  pad = true,
  className = "",
  children,
}: {
  id?: string;
  sombre?: boolean;
  halo?: boolean;
  /** Le fond travaillé, pour un hero d'entrée. Remplace la grille et le halo : ne pas le cumuler avec `halo`. */
  fond?: boolean;
  pad?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section ${sombre ? "section-sombre" : ""} ${pad ? "section-pad" : ""} ${className}`}
    >
      {sombre && <div aria-hidden className="calque calque-grille" />}
      {halo && <div aria-hidden className="calque calque-halo" />}
      {fond && <FondTravaille />}
      {children}
    </section>
  );
}

/** Le fond travaillé (DESIGN.md §6.4) : lavis, bande courbe en dégradé, traits fins en arc.
    Le lavis est en CSS (`.calque-fond`). Chaque dessin est calé sur un coin du hero, l'origine sur ce coin. */
function FondTravaille() {
  const id = useId();
  return (
    <div aria-hidden className="calque calque-fond">
      {/* bas gauche : la bande part du coin, monte et s'éteint avant le titre. Un trait la suit. */}
      <svg className="fond-bas-gauche" viewBox="0 -100 100 100">
        <defs>
          <linearGradient id={`${id}a`} gradientUnits="userSpaceOnUse" x1="90" y1="0" x2="216" y2="-460">
            <stop offset="0" stopOpacity=".34" style={{ stopColor: "var(--g1)" }} />
            <stop offset=".55" stopOpacity=".18" style={{ stopColor: "var(--g2)" }} />
            <stop offset="1" stopOpacity="0" style={{ stopColor: "var(--g2)" }} />
          </linearGradient>
          {/* le trait s'éteint en hauteur : sur tablette il traverserait le titre. Sur mobile, où le texte
              prend toute la largeur, il n'est pas dessiné. */}
          <linearGradient id={`${id}t`} gradientUnits="userSpaceOnUse" x1="0" y1="-800" x2="0" y2="-1000">
            <stop offset="0" stopOpacity="1" style={{ stopColor: "var(--ink)" }} />
            <stop offset="1" stopOpacity="0" style={{ stopColor: "var(--ink)" }} />
          </linearGradient>
        </defs>
        <circle cx="2651" cy="452" r="2600" fill="none" stroke={`url(#${id}a)`} strokeWidth="190" />
        <circle className="trait max-sm:hidden" cx="2651" cy="452" r="2723" style={{ stroke: `url(#${id}t)` }} />
      </svg>
      {/* haut droite : la seconde bande, plus courte et plus pâle */}
      <svg className="fond-haut-droite" viewBox="-100 0 100 100">
        <defs>
          <linearGradient id={`${id}b`} gradientUnits="userSpaceOnUse" x1="-352" y1="0" x2="0" y2="160">
            <stop offset="0" stopOpacity="0" style={{ stopColor: "var(--g2)" }} />
            <stop offset="1" stopOpacity=".26" style={{ stopColor: "var(--g1)" }} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="-600" r="760" fill="none" stroke={`url(#${id}b)`} strokeWidth="110" />
      </svg>
      {/* bas droite : deux traits qui se croisent */}
      <svg className="fond-bas-droite" viewBox="-100 -100 100 100">
        <circle className="trait" cx="-38" cy="390" r="640" />
        <circle className="trait" cx="234" cy="198" r="688" />
      </svg>
    </div>
  );
}

/* ---------- Accents ---------- */

/** Mot en dégradé : l'accent principal, un par titre. */
export function Acc({ children }: { children: ReactNode }) {
  return <span className="acc">{children}</span>;
}

/** Mot entouré à la main : la promesse, une fois par page au plus. */
export function Entoure({ children }: { children: ReactNode }) {
  return (
    <span className="entoure">
      {children}
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden>
        <path
          d="M14 66 C24 22,120 8,210 10 C320 12,392 40,386 70 C380 100,280 116,190 112 C90 108,12 90,22 56"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}

/* ---------- Objets posés sur la page ---------- */

type Pointeur = "haut" | "bas" | "gauche";

/** Étiquette-info : carte blanche à point coloré. Sert à nommer un service, annoter une capture, poser une preuve courte. */
export function Etiquette({
  point = 1,
  pench = 0,
  pointeur,
  curseur = false,
  href,
  className = "",
  style,
  children,
}: {
  /** Couleur du point : 1 violet, 2 bleu, 3 bande cerclée, 4 encre, 0 aucun. */
  point?: 0 | 1 | 2 | 3 | 4;
  /** Inclinaison en degrés, entre -6 et 6. */
  pench?: number;
  pointeur?: Pointeur;
  curseur?: boolean;
  href?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const s: CSSProperties = { ...(pench ? { transform: `rotate(${pench}deg)` } : {}), ...style };
  const inner = (
    <>
      {pointeur && <span aria-hidden className={`pointeur pointeur-${pointeur}`} />}
      {children}
      {curseur && (
        <svg aria-hidden className="curseur" viewBox="0 0 24 24">
          <path d="M4 3 L20 11 L13 13 L11 20 Z" fill="#141414" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} className={`etiquette ${className}`} data-point={point} style={s}>
        {inner}
      </a>
    );
  }
  return (
    <span className={`etiquette ${className}`} data-point={point} style={s}>
      {inner}
    </span>
  );
}

/** Badge sombre : le sujet de la page ou de la section. */
export function Badge({ className = "", children }: { className?: string; children: ReactNode }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

/** Carte flottante : surtitre en capitales, titre, une ou deux barres grises, une pilule. Inclinée d'un rien. */
export function Carte({
  surtitre,
  titre,
  pilule,
  barres = 2,
  pench = 0,
  className = "",
  style,
}: {
  surtitre?: string;
  titre: string;
  pilule?: string;
  barres?: 0 | 1 | 2;
  pench?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`carte ${className}`}
      style={{ ...(pench ? { transform: `rotate(${pench}deg)` } : {}), ...style }}
    >
      {surtitre && <span className="t-surtitre">{surtitre}</span>}
      <span className="t-carte-titre">{titre}</span>
      {barres >= 1 && <span aria-hidden className="barre" />}
      {barres >= 2 && <span aria-hidden className="barre barre-courte" />}
      {pilule && (
        <span className="pilule" style={{ justifySelf: "start" }}>
          {pilule}
        </span>
      )}
    </div>
  );
}

/** Capture : une vraie capture de site dans un cadre. Estompée par défaut (le bas fond dans la page). Les annotations se posent en enfants. */
export function Capture({
  src,
  alt,
  priority = false,
  ratio = "16 / 10",
  sizes = "(min-width: 1024px) 600px, 100vw",
  estompe = true,
  petite = false,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  ratio?: string;
  sizes?: string;
  estompe?: boolean;
  petite?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`capture ${estompe ? "capture-estompee" : ""} ${petite ? "capture-petite" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
      {children}
    </div>
  );
}

/** Flèche courbe dessinée : relie une phrase à une preuve. */
export function FlecheCourbe({
  className = "",
  style,
  flip = false,
}: {
  className?: string;
  style?: CSSProperties;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={className}
      style={{ color: "var(--ink)", ...(flip ? { transform: "scaleX(-1)" } : {}), ...style }}
    >
      <path
        d="M14 10 C 30 60, 60 90, 104 100"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M78 96 L 104 100 L 92 76"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Jauge avant / après. Uniquement avec de vrais scores. */
export function Jauge({
  valeur,
  etat,
  grand = false,
  label,
}: {
  valeur: number;
  etat: "avant" | "apres";
  grand?: boolean;
  label?: string;
}) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(100, valeur));
  const couleur = etat === "avant" ? "var(--jauge-avant)" : "var(--jauge-apres)";
  const fond = etat === "avant" ? "var(--jauge-avant-fond)" : "var(--jauge-apres-fond)";
  const taille = grand ? 300 : 120;
  return (
    <figure className="inline-flex flex-col items-center gap-3 m-0">
      <svg width={taille} height={taille} viewBox="0 0 100 100" role="img" aria-label={`${label ?? etat} : ${Math.round(p)} sur 100`}>
        <circle cx="50" cy="50" r={r} fill={fond} stroke="rgba(20,20,20,.08)" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={couleur}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(c * p) / 100} ${c}`}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fill={couleur}
          fontFamily="var(--font-archivo), Archivo, sans-serif"
          fontWeight="600"
          fontSize="28"
        >
          {Math.round(p)}
        </text>
      </svg>
      {label && <figcaption className="t-meta">{label}</figcaption>}
    </figure>
  );
}

/** Étincelle : une respiration près d'un titre, au plus deux par page. */
export function Etincelle({
  taille = 36,
  couleur = "g1",
  className = "",
  style,
}: {
  taille?: number;
  couleur?: "g1" | "g2";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      width={taille}
      height={taille}
      className={className}
      style={{ color: `var(--${couleur})`, ...style }}
    >
      <path
        fill="currentColor"
        d="M50 2 C54 30 70 46 98 50 C70 54 54 70 50 98 C46 70 30 54 2 50 C30 46 46 30 50 2 Z"
      />
    </svg>
  );
}

/** Cinq étoiles Google. */
export function Etoiles({ taille = 18, className = "" }: { taille?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-[2px] ${className}`} role="img" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={taille} height={taille} aria-hidden>
          <path
            fill="#FBBC04"
            d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8L2.2 9.5l6.9-.7z"
          />
        </svg>
      ))}
    </span>
  );
}

/* ---------- Bouton et lien ---------- */

export function Btn({
  href,
  variant = "principal",
  external = false,
  petit = false,
  className = "",
  children,
}: {
  href: string;
  variant?: "principal" | "secondaire";
  external?: boolean;
  petit?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = `btn ${variant === "secondaire" ? "btn-secondaire" : ""} ${petit ? "btn-petit" : ""} ${className}`;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Lien texte souligné, la flèche en texte. */
export function Lien({
  href,
  external = false,
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = `lien ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden>→</span>
    </>
  );
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------- Listes ---------- */

/** Checklist : case carrée, coche « ✓ » pour ce qui est compris, case vide pour ce qui reste à faire. */
export function Checklist({
  items,
  fait = true,
  croix = false,
  className = "",
}: {
  items: ReactNode[];
  /** Coché (compris, fait) ou case vide (reste à faire). */
  fait?: boolean;
  /** Une croix : ce qu'on ne veut pas. */
  croix?: boolean;
  className?: string;
}) {
  return (
    <ul className={`grid gap-3 list-none p-0 m-0 ${className}`}>
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span aria-hidden className="case" data-fait={croix ? "false" : fait}>
            {croix ? "×" : fait ? "✓" : ""}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Liste flèches : « → » encre 600 dans une colonne de 36 px. */
export function ListeFleches({ items, className = "" }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`fleches ${className}`}>
      {items.map((t, i) => (
        <li key={i}>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Frise verticale : un process, une durée. Quatre étapes qui remplissent la hauteur. */
export function Frise({
  etapes,
  className = "",
}: {
  etapes: { quand: string; titre: string; texte: string }[];
  className?: string;
}) {
  return (
    <ol className={`frise ${className}`}>
      {etapes.map((e) => (
        <li key={e.titre}>
          <span aria-hidden className="point" />
          <p className="t-meta">{e.quand}</p>
          <h3 className="t-h4 mt-1">{e.titre}</h3>
          <p className="t-corps mt-2 max-w-[56ch]">{e.texte}</p>
        </li>
      ))}
    </ol>
  );
}

/** Conseil numéroté : « 01. », un titre, une ligne. */
export function Conseil({
  n,
  titre,
  children,
  className = "",
}: {
  n: number;
  titre: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="t-num">{String(n).padStart(2, "0")}.</span>
      <h3 className="t-h4 mt-3">{titre}</h3>
      <div className="t-corps mt-2 max-w-[52ch]">{children}</div>
    </div>
  );
}

/** Rangée numérotée : un filet, le numéro dans sa colonne, le contenu à droite. */
export function Rangee({
  n,
  id,
  className = "",
  children,
}: {
  n: number;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className={`rangee grid gap-4 md:grid-cols-[96px_1fr] scroll-mt-24 ${className}`}>
      <span className="t-rangee text-ink-2 md:text-ink" aria-hidden>
        {String(n).padStart(2, "0")}
      </span>
      <div>{children}</div>
    </div>
  );
}

/* ---------- Signature ---------- */

/** Qui parle : avatar rond, le nom en 500, l'accroche en 600. Toujours au même endroit. */
export function Signature({ compact = false }: { compact?: boolean }) {
  const taille = compact ? 40 : 60;
  return (
    <span className="inline-flex items-center gap-3 md:gap-4">
      <Image
        src="/avatar.jpg"
        alt=""
        width={taille}
        height={taille}
        className="rounded-full shrink-0"
        style={{ width: taille, height: taille }}
        priority={compact}
      />
      <span className="flex flex-col leading-tight">
        <span className={compact ? "text-[15px] font-medium" : "text-[20px] md:text-[24px] font-medium"}>
          {site.name}
        </span>
        <span
          className={
            compact
              ? "hidden sm:block text-[13px] font-semibold tracking-[-0.01em]"
              : "text-[17px] md:text-[22px] font-semibold tracking-[-0.02em]"
          }
        >
          {site.accroche}
        </span>
      </span>
    </span>
  );
}
