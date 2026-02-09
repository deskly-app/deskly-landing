import { MetadataRoute } from "next";

/**
 * Generates robots.txt for search engine crawlers
 * Defines crawling rules and sitemap location
 * Accessible at https://deskly.app/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://deskly.vishaldev.space";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow private or internal routes (add as needed)
        // disallow: ["/api/", "/admin/"],
      },
      // Specific rules for specific bots (optional)
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
