import { Acc, Checklist, Conteneur, Section } from "../../components/ui";

const toujours = [
  "Hébergement et maintenance de ton site",
  "Modifications courantes",
  "Surveillance de ta position sur Google",
  "Un rapport mensuel d’une page, sans jargon",
];

const ambition = [
  "Publications sur la fiche et réponses aux avis",
  "Collecte d’avis (QR code, relances)",
  "Pages ville et pages prestations",
  "Annuaires et citations (CMA, CCI)",
  "Présence dans les réponses des IA (ChatGPT, Perplexity, Gemini)",
];

export function Compris() {
  return (
    <Section id="compris" pad={false} className="py-16 md:py-24">
      <Conteneur className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <h2 className="t-h2">
            Ce qui est <Acc>compris</Acc>.
          </h2>
          <p className="t-intro mt-5">Toujours, quel que soit ton objectif.</p>
          <Checklist items={toujours} className="mt-8 t-puce" />
        </div>
        <div className="lg:col-span-6 lg:pt-10">
          <div className="carte-droite rotate-2 max-w-[460px] mx-auto lg:mx-0 lg:ml-auto">
            <p className="t-surtitre">Selon ton ambition</p>
            <ul className="points mt-5 text-[16px] md:text-[17px] font-medium leading-[1.35]">
              {ambition.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </Conteneur>
    </Section>
  );
}
