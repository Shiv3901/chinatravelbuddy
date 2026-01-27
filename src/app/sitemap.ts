import { MetadataRoute } from "next";
import { getAllDestinations } from "@/lib/matchDestinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chinatravelassistant.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/plan`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/guides/vpn-setup`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/guides/esim-guide`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/guides/alipay-setup`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const allDestinations = getAllDestinations();
  const destinationPages = allDestinations.flatMap(({ city, destinations }) =>
    destinations.map((dest) => ({
      url: `${baseUrl}/destination/${city}/${dest.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...destinationPages];
}
