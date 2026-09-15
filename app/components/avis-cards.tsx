import type { ReactNode } from "react";
import { Etoiles } from "./ui";
import { avis } from "@/lib/avis";
import { fr } from "@/lib/texte";

function marquer(texte: string, fort?: string): ReactNode {
  const t = fr(texte);
  if (!fort) return t;
  const f = fr(fort);
  const i = t.indexOf(f);
  if (i < 0) return t;
  return (
    <>
      {t.slice(0, i)}
      <strong className="font-semibold">{f}</strong>
      {t.slice(i + f.length)}
    </>
  );
}

/** Trois avis publiés, cités tels quels. Le groupe de mots fort en 600. */
export function AvisCards({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-5 md:grid-cols-3 list-none p-0 m-0 ${className}`}>
      {avis.map((a) => (
        <li key={a.slug} className="carte-droite flex flex-col gap-5">
          <Etoiles taille={16} />
          <blockquote className="m-0 t-citation">«&nbsp;{marquer(a.extrait, a.fort)}&nbsp;»</blockquote>
          <p className="mt-auto pt-2 flex flex-col gap-1">
            <span className="font-semibold text-[15px]">{a.nom}</span>
            <span className="t-meta">
              {a.site ? (
                <a href={a.site.href} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">
                  {a.site.label}
                </a>
              ) : (
                "Avis Google"
              )}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
