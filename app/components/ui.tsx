import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Contours } from "./contours";
import { Scramble } from "./scramble";
import { projectShot, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------
   Primitives de la DA « Trail & Code ». Une section = un repère mono,
   un titre avec un mot marqué, un seul objet fort. Les couleurs viennent
   des jetons de globals.css : jour, nuit, section sombre.
------------------------------------------------------------------- */

export function Conteneur({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`conteneur ${className}`}>{children}</div>;
}

export function Section({
  id,
  sombre = false,
  decor,
  pad = true,
  className = "",
  children,
}: {
  id?: string;
  sombre?: boolean;
  /** Les courbes de niveau en calque, pour un hero. « doux » pour une page intérieure. */
  decor?: "contours" | "contours-doux";
  pad?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section ${sombre ? "section-sombre" : ""} ${pad ? "section-pad" : ""} ${className}`}
    >
      {decor === "contours" && <Contours />}
      {decor === "contours-doux" && <Contours doux seed={5} cx={1350} cy={260} n={11} pas={44} />}
      {children}
    </section>
  );
}

/* ---------- Accents et repères ---------- */

/** Le mot marqué d'un titre : vert sapin. Un par titre. */
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

/** Le fanion orange : l'objet qui revient partout, marqueur de section. */
export function Fanion({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <rect x="50" y="18" width="12" height="90" rx="6" style={{ fill: "var(--fg-2)" }} />
      <path d="M62 18 L112 38 L62 58Z" style={{ fill: "var(--accent)" }} />
    </svg>
  );
}

/** Le repère d'une section : fanion, numéro mono, nom simple. */
export function Repere({ n, children, className = "" }: { n?: number; children: ReactNode; className?: string }) {
  return (
    <p className={`repere ${className}`}>
      <Fanion />
      {n !== undefined && <span className="n">({String(n).padStart(3, "0")})</span>}
      <span>{n !== undefined ? "· " : ""}{children}</span>
    </p>
  );
}

/* ---------- Objets posés sur la page ---------- */

type Pointeur = "haut" | "bas" | "gauche";

/** Étiquette-info : carte posée à point coloré. Sert à nommer un service, annoter une capture, poser une preuve courte. */
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
  /** Couleur du point : 1 sapin, 2 ocre, 3 orange, 4 encre, 0 aucun. */
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
          <path d="M4 3 L20 11 L13 13 L11 20 Z" style={{ fill: "var(--fg)", stroke: "var(--bg)" }} strokeWidth="1.6" strokeLinejoin="round" />
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

/** Badge : le sujet de la page ou de la section, en mono. */
export function Badge({ className = "", children }: { className?: string; children: ReactNode }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

/** Carte flottante : surtitre mono, titre, une ou deux barres, une pilule. Inclinée d'un rien. */
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

/** Capture : un vrai site, traité comme un tirage (coins, grain, vignettage). Estompée si le bas doit fondre dans la page.
    `dedans` se pose à l'intérieur du cadre (une fiche technique), `children` autour (des annotations). */
export function Capture({
  src,
  alt,
  priority = false,
  ratio = "16 / 10",
  sizes = "(min-width: 1024px) 600px, 100vw",
  estompe = true,
  petite = false,
  stamp,
  className = "",
  dedans,
  children,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  ratio?: string;
  sizes?: string;
  estompe?: boolean;
  petite?: boolean;
  /** La date orange en bas à droite, façon compact. */
  stamp?: string;
  className?: string;
  dedans?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`capture ${estompe ? "capture-estompee" : ""} ${petite ? "capture-petite" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        {stamp && (
          <span aria-hidden className="stamp">
            {stamp}
          </span>
        )}
        {dedans}
      </div>
      {children}
    </div>
  );
}

/** La fiche technique d'une réalisation : numéro, secteur, année, et le résultat quand il est sourcé. */
export function Fiche({ p, n }: { p: Project; n: number }) {
  return (
    <dl className="fiche">
      <dt>Prjct</dt>
      <dd>/{String(n).padStart(2, "0")}</dd>
      <dt>Secteur</dt>
      <dd>{p.secteur}</dd>
      <dt>Année</dt>
      <dd>{p.annee}</dd>
      {p.resultat && (
        <dd className="resultat">
          ↳ {p.resultat.valeur} {p.resultat.texte}
        </dd>
      )}
    </dl>
  );
}

/** Une réalisation en carte : la capture en tirage, la fiche technique au survol, la flèche qui se glisse devant le titre. */
export function CarteProjet({
  p,
  n,
  ratio = "4 / 3",
  sizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw",
  grand = false,
  texte = true,
  className = "",
}: {
  p: Project;
  n: number;
  ratio?: string;
  sizes?: string;
  grand?: boolean;
  /** Le nom et la phrase sous la capture. */
  texte?: boolean;
  className?: string;
}) {
  return (
    <article className={`projet ${className}`}>
      <Link href={`/realisations/${p.slug}`} className="block no-underline" data-scr-host>
        <Capture
          src={projectShot(p.slug)}
          alt={`La page d’accueil du site ${p.name}`}
          ratio={ratio}
          estompe={false}
          petite={!grand}
          sizes={sizes}
          dedans={<Fiche p={p} n={n} />}
        />
        {texte && (
          <>
            <h3 className="projet-titre t-h4 mt-4">
              <span aria-hidden className="fleche">
                ↳
              </span>
              <span className="glisse">
                <Scramble>{p.name}</Scramble>
              </span>
            </h3>
            <p className="t-corps text-[15px] mt-1 text-ink-2 max-w-[44ch]">{p.tagline}</p>
          </>
        )}
      </Link>
    </article>
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

/* ---------- Bouton et liens ---------- */

export function Btn({
  href,
  variant = "principal",
  external = false,
  petit = false,
  fleche,
  className = "",
  children,
}: {
  href: string;
  variant?: "principal" | "secondaire";
  external?: boolean;
  petit?: boolean;
  /** La flèche mono « ↳ » après le texte. Par défaut sur le bouton principal. */
  fleche?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = `btn ${variant === "secondaire" ? "btn-secondaire" : ""} ${petit ? "btn-petit" : ""} ${className}`;
  const avecFleche = fleche ?? variant === "principal";
  const inner = (
    <>
      <span>{children}</span>
      {avecFleche && (
        <span aria-hidden className="fleche">
          ↳
        </span>
      )}
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

/** Lien mono : « ↳ voir le site ». Le texte se brouille au survol. */
export function LienMono({
  href,
  external = false,
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: string;
}) {
  const cls = `lien-mono ${className}`;
  const inner = (
    <>
      <span aria-hidden>↳</span>
      <Scramble>{children}</Scramble>
    </>
  );
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return (
      <a href={href} className={cls} data-scr-host {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-scr-host>
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

/** Frise verticale : un process, une durée. Chaque étape porte `data-item` pour la mise en focus au scroll. */
export function Frise({
  etapes,
  className = "",
}: {
  etapes: { quand: string; titre: string; texte: string }[];
  className?: string;
}) {
  return (
    <ol className={`frise ${className}`}>
      {etapes.map((e, i) => (
        <li key={e.titre} data-item>
          <span aria-hidden className="point" />
          <p className="t-mono">
            <span className="text-ink">{String(i + 1).padStart(2, "0")}</span> · {e.quand}
          </p>
          <h3 className="t-h4 mt-2">{e.titre}</h3>
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
      <span className="t-num">({String(n).padStart(2, "0")})</span>
      <h3 className="t-h4 mt-3">{titre}</h3>
      <div className="t-corps mt-2 max-w-[52ch]">{children}</div>
    </div>
  );
}

/** Rangée numérotée : un filet, le numéro mono dans sa colonne, le contenu à droite. */
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
      <span className="t-num md:pt-2" aria-hidden>
        ({String(n).padStart(2, "0")})
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
