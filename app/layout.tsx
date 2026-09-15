import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

/* Une seule police, Archivo variable (graisses 100 à 900, largeur 62 % à 125 %), auto-hébergée.
   L'italique reste dans public/fonts pour une éventuelle citation entière : on ne la charge pas. */
const archivo = localFont({
  src: "../public/fonts/archivo.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        {/* La page porte la grille fine : aucune coupure entre les sections. */}
        <main className="page flex-1">
          <div aria-hidden className="calque calque-grille" />
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
