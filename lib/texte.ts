/**
 * Typographie française sur les chaînes venues des données :
 * espace insécable avant ? ! : ; % €, à l'intérieur des guillemets « »,
 * entre les groupes de chiffres (1 500 €), et apostrophe typographique.
 */
export function fr(s: string): string {
  return s
    .replace(/ ([?!:;%€])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/ »/g, " »")
    .replace(/(\d) (\d{3})(?!\d)/g, "$1 $2")
    .replace(/'/g, "’");
}
