import Image from "next/image";
import Link from "next/link";
import { Nav } from "./components/nav";
import { FooterCorner } from "./components/footer-corner";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Services } from "./sections/services";
import { Process } from "./sections/process";
import { Realisations } from "./sections/realisations";
import { Avis } from "./sections/avis";
import { Tarifs } from "./sections/tarifs";
import { Contact } from "./sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <FooterCorner />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Process />
        <Realisations />
        <Avis />
        <Tarifs />
        <Contact />
      </main>
      <footer className="px-6 md:px-32 lg:px-64 py-8 border-t border-rule text-[14px] tracking-[0.14em] text-mute flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3">
        <span>© {new Date().getFullYear()} MAXENCE CAILLEAU · ANGERS, FR</span>
        <Link
          href="/performance"
          className="group inline-flex items-center gap-2 text-[13px] tracking-[0.12em] text-mute hover:text-ink transition-colors"
        >
          <span>STARTUP / SCALE-UP&nbsp;? · PERFORMANCE WEB</span>
          <svg
            aria-hidden
            viewBox="0 0 22 14"
            className="w-4 h-3 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 7h17M14 2l5 5-5 5" />
          </svg>
        </Link>
        <span className="inline-flex items-center gap-2">
          CODÉ PAR
          <Image
            src="/signature.png"
            alt="Maxence Cailleau"
            width={240}
            height={80}
            className="h-9 w-auto"
          />
        </span>
      </footer>
    </>
  );
}
