import { companyContactEmail } from "@/backend/lib/mail";
import {
  companyFacebookUrl,
  companyLegalName,
  companyName,
  companyPhone,
  getSiteUrl,
  primaryTown,
  serviceTowns,
  townNames,
} from "@/lib/site";

export function buildLocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: companyName,
    legalName: companyLegalName,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    logo: `${siteUrl}/logo.png`,
    telephone: companyPhone,
    email: companyContactEmail,
    priceRange: "$$",
    description: `Fully insured residential cleaning services in ${primaryTown}, MA and surrounding South Shore towns.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: primaryTown,
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: serviceTowns.map((town) => ({
      "@type": "City",
      name: `${town.name}, MA`,
    })),
    sameAs: [companyFacebookUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Clean",
            areaServed: townNames.map((name) => `${name}, MA`),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep Clean",
            areaServed: townNames.map((name) => `${name}, MA`),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Move-In / Move-Out Cleaning",
            areaServed: townNames.map((name) => `${name}, MA`),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recurring Cleaning",
            areaServed: townNames.map((name) => `${name}, MA`),
          },
        },
      ],
    },
  };
}

export function buildTownServiceJsonLd(townName: string, slug: string) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `House Cleaning in ${townName}, MA`,
    serviceType: "Residential house cleaning",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: companyName,
      url: siteUrl,
      telephone: companyPhone,
    },
    areaServed: {
      "@type": "City",
      name: `${townName}, MA`,
    },
    url: `${siteUrl}/areas/${slug}`,
  };
}

export function buildWebsiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyName,
    url: siteUrl,
    potentialAction: {
      "@type": "ReserveAction",
      target: `${siteUrl}/#quote-form`,
      name: "Request a Quote",
    },
  };
}
