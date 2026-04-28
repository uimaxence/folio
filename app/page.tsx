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
        <span>SITE DESIGNÉ &amp; CODÉ EN INTERNE.</span>
      </footer>
    </>
  );
}
