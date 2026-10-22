"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scramble } from "./scramble";
import { ThemeToggle } from "./theme-toggle";
import { Btn, Conteneur, Signature } from "./ui";
import { site } from "@/lib/site";

/** Sur grand écran : en-tête collant, liens mono, interrupteur jour / nuit, bouton.
    Sur mobile : la signature seule en haut, la navigation est dans le dock en bas. */
export function SiteHeader() {
  const pathname = usePathname();
  const accueil = pathname === "/";
  const contact = pathname === "/accompagnement" ? "#contact" : "/#contact";
  const liens = [
    { href: "/", label: "Accueil", actif: accueil },
    { href: accueil ? "#realisations" : "/#realisations", label: "Réalisations", actif: pathname.startsWith("/realisations") },
    { href: "/accompagnement", label: "Accompagnement", actif: pathname === "/accompagnement" },
    { href: contact, label: "Contact", actif: false },
  ];

  return (
    <header className="entete">
      <Conteneur className="flex items-center justify-between gap-4 h-[72px]">
        <Link href="/" aria-label="Accueil" className="shrink-0">
          <Signature compact />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
          {liens.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              aria-current={l.actif ? "page" : undefined}
              className="entete-lien"
              data-scr-host
            >
              <Scramble>{l.label}</Scramble>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Btn href={site.calUrl} external petit>
            Réserver un appel
          </Btn>
        </div>
      </Conteneur>
    </header>
  );
}
