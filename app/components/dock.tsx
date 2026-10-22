"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

/** La navigation mobile : un dock flottant en bas (menu, logo, bouton). Pas d'en-tête fixe.
    Le menu se referme au clic sur un lien. */
export function Dock() {
  const [ouvert, setOuvert] = useState(false);
  const pathname = usePathname();

  const accueil = pathname === "/";
  const liens = [
    { href: "/", label: "Accueil" },
    { href: accueil ? "#realisations" : "/#realisations", label: "Réalisations" },
    { href: "/accompagnement", label: "Accompagnement" },
    { href: pathname === "/accompagnement" ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <>
      {ouvert && (
        <nav id="dock-menu" aria-label="Menu" className="dock-menu md:hidden">
          {liens.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOuvert(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-4 flex items-center justify-between gap-3">
            <span className="t-mono">Mode</span>
            <ThemeToggle />
          </div>
        </nav>
      )}
      <div className="dock md:hidden">
        <button
          type="button"
          className="dock-btn"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-controls="dock-menu"
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
        <Link href="/" aria-label="Accueil" className="dock-logo" onClick={() => setOuvert(false)}>
          <Image src="/avatar.jpg" alt="" width={44} height={44} />
        </Link>
        <a href={site.calUrl} target="_blank" rel="noreferrer noopener" className="btn dock-cta">
          Réserver
        </a>
      </div>
    </>
  );
}
