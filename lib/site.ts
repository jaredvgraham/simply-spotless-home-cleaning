export const companyName = "Simply Spotless Cleaning Services";
export const companyLegalName = "Simply Spotless Cleaning LLC";
export const companyPhone = "(508) 570-6658";
export const companyPhoneHref = "tel:+15085706658";
export const companyLocation = "Plymouth, MA and surrounding areas";
export const companyRegion = "MA";
export const companyFacebookHandle = "simplyspotlessclean";
export const companyFacebookUrl =
  "https://www.facebook.com/simplyspotlessclean";

/** Production site URL. Set NEXT_PUBLIC_SITE_URL in production for canonical SEO. */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) return `https://${vercelProduction.replace(/\/$/, "")}`;

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const primaryTown = "Plymouth";

export const serviceTowns = [
  {
    name: "Plymouth",
    slug: "plymouth",
    county: "Plymouth County",
    blurb:
      "Reliable residential cleaning throughout Plymouth, from downtown and North Plymouth to neighborhoods across town.",
  },
  {
    name: "Duxbury",
    slug: "duxbury",
    county: "Plymouth County",
    blurb:
      "Detail-focused home cleaning for Duxbury households looking for consistent, trustworthy service.",
  },
  {
    name: "Kingston",
    slug: "kingston",
    county: "Plymouth County",
    blurb:
      "Standard, deep, and recurring cleans for Kingston homes that want a fresh, well-cared-for space.",
  },
  {
    name: "Carver",
    slug: "carver",
    county: "Plymouth County",
    blurb:
      "Flexible house cleaning in Carver for busy households and move-in or move-out transitions.",
  },
  {
    name: "Marshfield",
    slug: "marshfield",
    county: "Plymouth County",
    blurb:
      "Home cleaning across Marshfield with scheduling that fits weekly, biweekly, or one-time needs.",
  },
  {
    name: "Pembroke",
    slug: "pembroke",
    county: "Plymouth County",
    blurb:
      "Trusted residential cleaning for Pembroke families who want a spotless home without the stress.",
  },
  {
    name: "Plympton",
    slug: "plympton",
    county: "Plymouth County",
    blurb:
      "Thorough house cleaning in Plympton with options for recurring service and helpful add-ons.",
  },
  {
    name: "Halifax",
    slug: "halifax",
    county: "Plymouth County",
    blurb:
      "Local home cleaning in Halifax focused on reliable results and clear communication.",
  },
  {
    name: "Wareham",
    slug: "wareham",
    county: "Plymouth County",
    blurb:
      "Residential cleaning services for Wareham homes, including deep cleans and move-related jobs.",
  },
  {
    name: "Bourne",
    slug: "bourne",
    county: "Barnstable County",
    blurb:
      "House cleaning support for Bourne residents who want a dependable South Shore cleaning team.",
  },
  {
    name: "Hanover",
    slug: "hanover",
    county: "Plymouth County",
    blurb:
      "Quality home cleaning in Hanover tailored to your schedule, square footage, and priorities.",
  },
  {
    name: "Norwell",
    slug: "norwell",
    county: "Plymouth County",
    blurb:
      "Professional residential cleaning for Norwell homes that need consistent care and attention to detail.",
  },
  {
    name: "Scituate",
    slug: "scituate",
    county: "Plymouth County",
    blurb:
      "Coastal-town home cleaning in Scituate with flexible recurring and one-time service options.",
  },
  {
    name: "Middleborough",
    slug: "middleborough",
    county: "Plymouth County",
    blurb:
      "House cleaning throughout Middleborough for everyday upkeep, deep cleans, and move-outs.",
  },
  {
    name: "Bridgewater",
    slug: "bridgewater",
    county: "Plymouth County",
    blurb:
      "Dependable residential cleaning in Bridgewater built around your home and lifestyle.",
  },
] as const;

export type ServiceTown = (typeof serviceTowns)[number];
export type ServiceTownSlug = ServiceTown["slug"];

export function getTownBySlug(slug: string) {
  return serviceTowns.find((town) => town.slug === slug);
}

export const townNames = serviceTowns.map((town) => town.name);

export const serviceAreaLabel = `${townNames.slice(0, -1).join(", ")}, and ${townNames.at(-1)}`;

export const defaultDescription = `Simply Spotless Cleaning Services offers reliable house cleaning in ${primaryTown}, MA and nearby South Shore towns including ${townNames.slice(1, 6).join(", ")}, and more. Fully insured residential cleaning tailored to your home.`;

export const seoKeywords = [
  "house cleaning Plymouth MA",
  "home cleaning Plymouth MA",
  "house cleaners near me",
  "residential cleaning South Shore MA",
  "deep cleaning Plymouth MA",
  "move out cleaning Plymouth MA",
  "recurring house cleaning Massachusetts",
  ...townNames.map((town) => `house cleaning ${town} MA`),
  ...townNames.map((town) => `home cleaners ${town}`),
];
