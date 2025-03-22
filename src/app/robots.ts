import { siteConfig } from "@/config/data";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/og/*"],
      disallow: "/private/",
    },
    sitemap: `${siteConfig.website}/sitemap.xml`,
  };
}
