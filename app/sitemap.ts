import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { vehicles } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/vehicules",
    "/services",
    "/chauffeur",
    "/tarifs",
    "/a-propos",
    "/contact",
    "/reservation",
  ].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: new URL(`/vehicules/${vehicle.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...vehicleRoutes];
}
