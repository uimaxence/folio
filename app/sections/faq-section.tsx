import type { ReactNode } from "react";
import { Faq } from "../components/faq";
import { Conteneur, Section } from "../components/ui";
import type { Question } from "@/lib/faq";

export function FaqSection({ titre, items }: { titre: ReactNode; items: Question[] }) {
  return (
    <Section id="faq" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="t-h2 lg:max-w-[10ch]">{titre}</h2>
        </div>
        <div className="lg:col-span-8">
          <Faq items={items} />
        </div>
      </Conteneur>
    </Section>
  );
}
