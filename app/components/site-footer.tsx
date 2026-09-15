import Link from "next/link";
import { Conteneur, Signature } from "./ui";
import { mailtoHref, site } from "@/lib/site";

const lien = "underline underline-offset-4 decoration-1 transition-colors hover:text-ink-2";

/** Fond sombre : c'est la fin de la section sombre de chaque page. Pas de « codé par ». */
export function SiteFooter() {
  return (
    <footer className="section section-sombre">
      <div className="border-t border-line">
        <Conteneur className="py-12 md:py-14 grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <Signature />
          </div>
          <div className="md:col-span-3 flex flex-col gap-2 text-[15px]">
            <span>{site.zone}</span>
            <a href={mailtoHref} className={lien}>
              {site.email}
            </a>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2 text-[15px]">
            <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className={lien}>
              LinkedIn
            </a>
            {site.instagram && (
              <a href={site.instagram} target="_blank" rel="noreferrer noopener" className={lien}>
                Instagram
              </a>
            )}
            <Link href="/mentions-legales" className={lien}>
              Mentions légales
            </Link>
          </div>
        </Conteneur>
      </div>
    </footer>
  );
}
