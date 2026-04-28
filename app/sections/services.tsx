const services = [
  {
    n: "01",
    title: "Design",
    body: "Identité visuelle, maquettes, direction artistique. Un design propre, lisible, qui sert votre message, pas l'inverse.",
    items: ["Maquettes Figma", "Design system", "Mobile-first"],
  },
  {
    n: "02",
    title: "Développement",
    body: "Code à la main, performant, accessible. Stack moderne (Next.js, React, Tailwind) ou CMS si vous voulez gérer le contenu vous-même.",
    items: ["Next.js / React", "CMS sur-mesure", "100/100 PageSpeed"],
  },
  {
    n: "03",
    title: "SEO & GEO",
    body: "Référencement local et national. Optimisation pour les moteurs de recherche classiques et pour les IA génératives (ChatGPT, Perplexity, Google AI).",
    items: ["Audit technique", "Contenu optimisé", "Suivi positions"],
  },
  {
    n: "04",
    title: "Contenu",
    body: "Si vous bloquez sur le copywriting, je m'en occupe. Textes clairs, orientés bénéfices, qui parlent à vos vrais clients.",
    items: ["Pages de vente", "Pages services", "Articles SEO"],
  },
  {
    n: "05",
    title: "Déploiement",
    body: "Mise en ligne propre : nom de domaine, hébergement, e-mails pro, certificat SSL, analytics. Tout est prêt le jour J.",
    items: ["Vercel / OVH", "Emails pro", "Analytics RGPD"],
  },
  {
    n: "06",
    title: "Suivi & maintenance",
    body: "Un site, ça vit. Mises à jour, ajouts de pages, optimisations, sauvegardes. Je reste disponible après la livraison.",
    items: ["Forfait mensuel", "Support réactif", "Évolutions à la carte"],
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
            UN SEUL INTERLOCUTEUR. DU PREMIER PIXEL À LA MISE EN LIGNE.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-canvas p-6 md:p-8 flex flex-col gap-4 min-h-[280px] hover:bg-canvas-soft transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[14px] tracking-[0.18em] text-mute">
                  {s.n}
                </span>
                <span className="text-[14px] tracking-[0.18em] text-mute transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/75">
                {s.body}
              </p>
              <div className="mt-auto pt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] text-ink/65">
                {s.items.map((it, i) => (
                  <span key={it} className="inline-flex items-center">
                    {it}
                    {i < s.items.length - 1 && (
                      <span aria-hidden className="ml-3 text-mute">
                        ·
                      </span>
                    )}
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
