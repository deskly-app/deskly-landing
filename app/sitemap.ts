import { MetadataRoute } from "next";

/**
 * Generates sitemap for search engine crawlers
 * Auto-generated at build time
 * Accessible at https://deskly.app/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deskly.vishaldev.space";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add more pages as your site grows
    // Example:
    // {
    //   url: `${baseUrl}/downloads`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/docs`,
    //   lastModified: currentDate,
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.5,
    // },
  ];
}
