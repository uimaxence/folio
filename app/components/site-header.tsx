"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Btn, Conteneur, Signature } from "./ui";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const accueil = pathname === "/";
  const contact = pathname === "/accompagnement" ? "#contact" : "/#contact";
  const liens = [
    { href: "/", label: "Accueil" },
    { href: accueil ? "#realisations" : "/#realisations", label: "Réalisations" },
    { href: "/accompagnement", label: "Accompagnement" },
    { href: contact, label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <Conteneur className="flex items-center justify-between gap-4 h-[72px]">
        <Link href="/" aria-label="Accueil" className="shrink-0" onClick={() => setOpen(false)}>
          <Signature compact />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7 text-[15px] font-semibold">
          {liens.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="underline-offset-[6px] decoration-2 transition-colors hover:text-ink-2 aria-[current=page]:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Btn href={site.calUrl} external petit className="hidden md:inline-flex">
            Réserver un appel
          </Btn>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="md:hidden btn btn-secondaire btn-petit"
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </Conteneur>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="md:hidden border-t border-line bg-paper">
          <Conteneur className="py-4 flex flex-col">
            {liens.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[18px] font-semibold border-b border-line last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-5 pb-2">
              <Btn href={site.calUrl} external className="w-full">
                Réserver un appel
              </Btn>
            </div>
          </Conteneur>
        </nav>
      )}
    </header>
  );
}
