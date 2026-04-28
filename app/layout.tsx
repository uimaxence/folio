import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxence Cailleau · Designer Coder à Angers",
  description:
    "Création, développement, SEO et mise en ligne de sites web sur-mesure. Designer coder basé à Angers, France. Réservez un appel de découverte.",
  metadataBase: new URL("https://maxencecailleau.fr"),
  openGraph: {
    title: "Maxence Cailleau · Designer Coder",
    description:
      "Sites web livrés en 2 semaines. Design, dev, SEO, déploiement et suivi.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
