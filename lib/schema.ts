import type { Question } from "./faq";
import { site } from "./site";

/** Les données structurées de l'accueil : le service (ProfessionalService, à Angers) et la personne,
    liés l'un à l'autre. Ce qui permet à Google et aux IA de citer le site avec les bonnes informations. */
export function graphe() {
  const business = `${site.url}/#business`;
  const personne = `${site.url}/#maxence`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": business,
        name: site.name,
        description:
          "Développement web et accompagnement SEO local. Sites vitrines, refontes, référencement local et fiche Google pour artisans, commerçants et indépendants. Une seule personne, du premier pixel à la mise en ligne.",
        url: site.url,
        email: site.email,
        image: `${site.url}/avatar.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.ville,
          addressRegion: "Pays de la Loire",
          addressCountry: "FR",
        },
        areaServed: [
          { "@type": "City", name: site.ville },
          { "@type": "AdministrativeArea", name: "Maine-et-Loire" },
          { "@type": "AdministrativeArea", name: "Pays de la Loire" },
          { "@type": "Country", name: "France" },
        ],
        priceRange: "€€",
        founder: { "@id": personne },
        sameAs: [site.linkedin, ...(site.instagram ? [site.instagram] : [])],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Création de site vitrine" },
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: site.tarifs.site,
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Accompagnement référencement local mensuel" },
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              minPrice: site.tarifs.accompagnement,
              priceCurrency: "EUR",
              unitCode: "MON",
            },
          },
        ],
      },
      {
        "@type": "Person",
        "@id": personne,
        name: site.name,
        jobTitle: "Développeur web et consultant SEO",
        url: site.url,
        image: `${site.url}/avatar.jpg`,
        email: site.email,
        worksFor: { "@id": business },
        address: { "@type": "PostalAddress", addressLocality: site.ville, addressCountry: "FR" },
        knowsLanguage: ["fr", "en"],
        sameAs: [site.linkedin, ...(site.instagram ? [site.instagram] : [])],
      },
    ],
  };
}

export function faqPage(items: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.r },
    })),
  };
}
