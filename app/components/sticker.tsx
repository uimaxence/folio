export type StickerName =
  | "creativite"
  | "programmation"
  | "referencement"
  | "contenu"
  | "dactylographie"
  | "assistance"
  | "but";

const SRC: Record<StickerName, string> = {
  creativite: "/stickers/la-creativite.png",
  programmation: "/stickers/programmation-web.png",
  referencement: "/stickers/referencement.png",
  contenu: "/stickers/contenu-digital.png",
  dactylographie: "/stickers/dactylographie.png",
  assistance: "/stickers/assistance-24h-24.png",
  but: "/stickers/but.png",
};

const ALT: Record<StickerName, string> = {
  creativite: "Sticker créativité",
  programmation: "Sticker programmation web",
  referencement: "Sticker référencement SEO",
  contenu: "Sticker contenu digital",
  dactylographie: "Sticker dactylographie",
  assistance: "Sticker assistance 24/7",
  but: "Sticker objectif atteint",
};

type Props = {
  name: StickerName;
  className?: string;
  rotate?: number;
  size?: number;
};

export function Sticker({ name, className = "", rotate = 0, size = 80 }: Props) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={SRC[name]}
      alt={ALT[name]}
      aria-hidden
      loading="lazy"
      width={size}
      height={size}
      className={`pointer-events-none select-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(2px 4px 0 rgba(26, 26, 26, 0.08))",
        width: size,
        height: size,
      }}
    />
  );
}
