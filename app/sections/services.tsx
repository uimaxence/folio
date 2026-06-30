import { paletteAt, bgClass } from "@/lib/palette";
import { Sticker, type StickerName } from "../components/sticker";

type Service = {
  n: string;
  title: string;
  body: string;
  items: string[];
  sticker: StickerName;
  stickerRotate: number;
};

const services: Service[] = [
  {
    n: "01",
    title: "Design",
    body: "Identité visuelle, maquettes, direction artistique. Un design propre, lisible, qui sert votre message, pas l'inverse.",
    items: ["Maquettes Figma", "Design system", "Mobile-first"],
    sticker: "creativite",
    stickerRotate: 12,
  },
  {
    n: "02",
    title: "Développement",
    body: "Code à la main, performant, accessible. Stack moderne (Next.js, React, Tailwind) ou CMS si vous voulez gérer le contenu vous-même.",
    items: ["Next.js / React", "CMS sur-mesure", "100/100 PageSpeed"],
    sticker: "programmation",
    stickerRotate: -10,
  },
  {
    n: "03",
    title: "SEO & GEO",
    body: "Référencement local et national. Optimisation pour les moteurs de recherche classiques et pour les IA génératives (ChatGPT, Perplexity, Google AI).",
    items: ["Audit technique", "Contenu optimisé", "Suivi positions"],
    sticker: "referencement",
    stickerRotate: 14,
  },
  {
    n: "04",
    title: "Contenu",
    body: "Si vous bloquez sur le copywriting, je m'en occupe. Textes clairs, orientés bénéfices, qui parlent à vos vrais clients.",
    items: ["Pages de vente", "Pages services", "Articles SEO"],
    sticker: "contenu",
    stickerRotate: -8,
  },
  {
    n: "05",
    title: "Déploiement",
    body: "Mise en ligne propre : nom de domaine, hébergement, e-mails pro, certificat SSL, analytics. Tout est prêt le jour J.",
    items: ["Vercel / OVH", "Emails pro", "Analytics RGPD"],
    sticker: "but",
    stickerRotate: 10,
  },
  {
    n: "06",
    title: "Suivi & maintenance",
    body: "Un site, ça vit. Mises à jour, ajouts de pages, optimisations, sauvegardes. Je reste disponible après la livraison.",
    items: ["Forfait mensuel", "Support réactif", "Évolutions à la carte"],
    sticker: "assistance",
    stickerRotate: -12,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative px-6 md:px-32 lg:px-64 py-24 md:py-32"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[14px] tracking-[0.18em] text-mute mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            UN SEUL INTERLOCUTEUR. <span className="text-terracotta">DU PREMIER PIXEL À LA MISE EN LIGNE.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`group relative ${bgClass[paletteAt(i)]} rounded-3xl p-7 md:p-8 flex flex-col gap-4 min-h-[280px] transition-transform hover:-translate-y-1`}
            >
              <Sticker
                name={s.sticker}
                size={72}
                rotate={s.stickerRotate}
                className="absolute z-10 -top-5 -right-5 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110"
              />
              <div className="flex items-baseline justify-between">
                <span className="inline-flex items-center text-[12px] tracking-[0.14em] bg-paper rounded-full px-2.5 py-1 text-ink/70">
                  {s.n}
                </span>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/80">
                {s.body}
              </p>
              <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center text-[13px] bg-paper/80 rounded-full px-2.5 py-1 text-ink/75"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
