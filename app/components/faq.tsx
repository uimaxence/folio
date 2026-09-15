import type { Question } from "@/lib/faq";
import { fr } from "@/lib/texte";

/** Accordéon natif : une question par boîte, le « + » en accent. */
export function Faq({ items }: { items: Question[] }) {
  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <details key={it.q} className="faq-item">
          <summary>
            <span aria-hidden className="plus">
              +
            </span>
            <span className="t-h4 text-[18px] md:text-[20px] leading-[1.3]">{fr(it.q)}</span>
          </summary>
          <p className="reponse t-corps max-w-[62ch]">{fr(it.r)}</p>
        </details>
      ))}
    </div>
  );
}
