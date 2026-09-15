import { Etiquette, Etoiles } from "./ui";
import { site } from "@/lib/site";

/** Une grande barre de recherche et, dessous, les trois fiches en haut de la carte. La première est marquée. */
export function RechercheLocale() {
  const ville = site.ville.toLowerCase();
  return (
    <div className="relative max-w-[520px] mx-auto lg:mx-0">
      <div className="flex items-center gap-4 rounded-full bg-white text-[#141414] border-[1.5px] border-[rgba(20,20,20,.12)] shadow-pose px-6 py-4 md:py-5">
        <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" className="shrink-0">
          <circle cx="10.5" cy="10.5" r="7" fill="none" stroke="#141414" strokeWidth="2.4" />
          <path d="M16 16 L21.5 21.5" stroke="#141414" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
        <span className="t-carte-titre">plombier à {ville}</span>
      </div>

      <ol className="mt-5 grid gap-3 list-none p-0 m-0">
        <li className="carte-droite flex items-center gap-4 border-[#141414]" style={{ padding: "16px 20px" }}>
          <span className="pilule">1</span>
          <div className="grid gap-1">
            <p className="font-bold text-[17px] leading-tight">Ton entreprise</p>
            <p className="flex items-center gap-2 text-[14px] text-[#6f6f6a]">
              <Etoiles taille={14} />
              <span>
                Plombier · {site.ville}
              </span>
            </p>
          </div>
        </li>
        {[2, 3].map((n) => (
          <li
            key={n}
            className="flex items-center gap-4 rounded-[22px] bg-white border-[1.5px] border-[rgba(20,20,20,.12)]"
            style={{ padding: "16px 20px" }}
          >
            <span className="inline-block w-[26px] text-center font-bold text-[#6f6f6a] text-[14px]">{n}</span>
            <div className="grid gap-2 flex-1">
              <span aria-hidden className="block h-[10px] w-[46%] rounded-[5px] bg-[rgba(20,20,20,.1)]" />
              <p className="flex items-center gap-2 text-[14px]">
                <Etoiles taille={14} />
                <span aria-hidden className="inline-block h-[8px] w-[30%] rounded-[4px] bg-[rgba(20,20,20,.08)]" />
              </p>
            </div>
          </li>
        ))}
      </ol>

      <Etiquette point={2} pench={3} pointeur="gauche" className="absolute -right-1 top-[86px] md:top-[94px] sm:-right-8">
        toi, ici
      </Etiquette>
    </div>
  );
}
