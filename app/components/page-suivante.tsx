"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scramble } from "./scramble";
import { projects } from "@/lib/projects";

/** Le pied de page enchaîne vers la page suivante, selon la page où on est. */
function suivante(pathname: string): { href: string; label: string } {
  if (pathname === "/") return { href: "/accompagnement", label: "L’accompagnement" };
  if (pathname === "/accompagnement") return { href: "/#realisations", label: "Les réalisations" };
  const m = pathname.match(/^\/realisations\/([^/]+)/);
  if (m) {
    const i = projects.findIndex((p) => p.slug === m[1]);
    const p = projects[(i + 1) % projects.length];
    return { href: `/realisations/${p.slug}`, label: p.name };
  }
  return { href: "/", label: "L’accueil" };
}

export function PageSuivante() {
  const s = suivante(usePathname() ?? "/");
  return (
    <Link href={s.href} className="group block no-underline" data-scr-host>
      <span className="t-mono block">↳ Page suivante</span>
      <span className="t-h2 mt-3 block transition-transform duration-300 ease-out group-hover:translate-x-2">
        <Scramble>{s.label}</Scramble>
      </span>
    </Link>
  );
}
