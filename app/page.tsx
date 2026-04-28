import Image from "next/image";
import { Nav } from "./components/nav";
import { FooterCorner } from "./components/footer-corner";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Services } from "./sections/services";
import { Process } from "./sections/process";
import { Realisations } from "./sections/realisations";
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
        <Contact />
      </main>
      <footer className="px-6 md:px-32 lg:px-64 py-8 border-t border-rule text-[14px] tracking-[0.14em] text-mute flex flex-col md:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} MAXENCE CAILLEAU · ANGERS, FR</span>
        <span className="inline-flex items-center gap-2">
          CODÉ PAR
          <Image
            src="/signature.png"
            alt="Maxence Cailleau"
            width={120}
            height={40}
            className="h-5 w-auto"
          />
        </span>
      </footer>
    </>
  );
}
