import type { MetadataRoute } from "next";
import { getSiteUrl, serviceTowns } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const townRoutes: MetadataRoute.Sitemap = serviceTowns.map((town) => ({
    url: `${siteUrl}/areas/${town.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: town.slug === "plymouth" ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...townRoutes];
}
