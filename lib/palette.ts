export type Palette =
  | "blush"
  | "sage"
  | "butter"
  | "sky"
  | "terracotta"
  | "lavender"
  | "clay";

export const PALETTE_ROTATION: Palette[] = [
  "butter",
  "sage",
  "blush",
  "sky",
  "terracotta",
  "lavender",
  "clay",
];

export function paletteAt(index: number): Palette {
  return PALETTE_ROTATION[index % PALETTE_ROTATION.length];
}

export const bgClass: Record<Palette, string> = {
  blush: "bg-blush",
  sage: "bg-sage",
  butter: "bg-butter",
  sky: "bg-sky",
  terracotta: "bg-terracotta",
  lavender: "bg-lavender",
  clay: "bg-clay",
};

export const textClass: Record<Palette, string> = {
  blush: "text-blush",
  sage: "text-sage",
  butter: "text-butter",
  sky: "text-sky",
  terracotta: "text-terracotta",
  lavender: "text-lavender",
  clay: "text-clay",
};
