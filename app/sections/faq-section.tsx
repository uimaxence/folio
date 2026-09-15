import type { ReactNode } from "react";
import { Faq } from "../components/faq";
import { Conteneur, Section } from "../components/ui";
import type { Question } from "@/lib/faq";

/** Le titre à gauche en taille « rangée » (le mot « accompagnement » doit tenir dans sa colonne), les questions à droite. */
export function FaqSection({ titre, items }: { titre: ReactNode; items: Question[] }) {
  return (
    <Section id="faq" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="t-rangee lg:max-w-[16ch]">{titre}</h2>
        </div>
        <div className="lg:col-span-7">
          <Faq items={items} />
        </div>
      </Conteneur>
    </Section>
  );
}
