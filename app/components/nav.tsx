"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { id: "about", label: "QUI SUIS-JE ?" },
  { id: "services", label: "SERVICES" },
  { id: "realisations", label: "RÉALISATIONS" },
  { id: "contact", label: "CONTACT" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top-left logo + nav (desktop) */}
      <header className="fixed top-10 left-10 z-40 hidden lg:block">
        <Link href="#top" aria-label="Accueil" className="block mb-8">
          <Logo className="h-10 w-auto lg:h-12" />
        </Link>
        <nav className="flex flex-col gap-2 text-[14px] tracking-[0.14em] text-mute">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <Link
                key={l.id}
                href={`#${l.id}`}
                className={`group inline-flex items-center gap-2 transition-colors hover:text-ink ${
                  isActive ? "text-ink" : ""
                }`}
              >
                <span
                  aria-hidden
                  className={`inline-block transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  /&nbsp;--&gt;
                </span>
                <span>{l.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Top-right CTA + Disponible (stacked) */}
      <div className="fixed top-10 right-10 z-40 hidden lg:flex flex-col items-end gap-3">
        <Link
          href="#contact"
          className="inline-flex items-center bg-ink text-canvas px-4 py-2.5 text-[14px] tracking-[0.14em] hover:bg-ink/85 transition-colors"
        >
          RÉSERVER UN APPEL
        </Link>
        <span className="inline-flex items-center gap-2 text-[14px] tracking-[0.14em] text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          DISPONIBLE
        </span>
      </div>

      {/* Mobile / tablet top bar */}
      <header className="fixed top-0 inset-x-0 z-40 lg:hidden bg-canvas/90 backdrop-blur border-b border-rule">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="#top" aria-label="Accueil">
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[14px] tracking-[0.12em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              DISPONIBLE
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="p-2 -mr-2"
            >
              <span className="block w-5 h-px bg-ink mb-1.5" />
              <span className="block w-5 h-px bg-ink mb-1.5" />
              <span className="block w-5 h-px bg-ink" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 px-4 pb-5 text-[15px] tracking-[0.12em]">
            {links.map((l) => (
              <Link
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-ink text-canvas px-4 py-3 text-[14px] tracking-[0.14em]"
            >
              RÉSERVER UN APPEL
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
