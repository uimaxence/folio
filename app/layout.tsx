import type { Metadata } from "next";
import localFont from "next/font/local";
import { Dock } from "./components/dock";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { SmoothScroll } from "./components/smooth-scroll";
import { site } from "@/lib/site";
import "./globals.css";

/* Archivo variable (graisses 100 à 900) pour tout le texte, auto-hébergée. L'axe de largeur est figé à 100 %
   (fonttools varLib.instancer) : 33 Ko au lieu de 88. L'italique reste dans public/fonts, on ne la charge pas. */
const archivo = localFont({
  src: "../public/fonts/archivo.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
});

/* JetBrains Mono variable, sous-ensemble latin, pour les petits repères : numéros, méta, chiffres. */
const jetbrains = localFont({
  src: "../public/fonts/jetbrains-mono.woff2",
  weight: "100 800",
  style: "normal",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Création de site et référencement local à ${site.ville} · ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Je dessine, je code et je mets en ligne des sites pour artisans, commerçants et indépendants. Ensuite je m'occupe de ta place sur Google, chaque mois. Basé à Angers, à distance partout en France.",
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: site.name,
  },
};

/* Le mode choisi à la main est relu avant le premier rendu : aucun flash de l'autre mode. */
const themeScript =
  '(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${jetbrains.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll />
        {/* le grain : une seule couche fixe sur toute la page */}
        <div aria-hidden className="grain" />
        <SiteHeader />
        <main className="page flex-1">{children}</main>
        <SiteFooter />
        <Dock />
      </body>
    </html>
  );
}
