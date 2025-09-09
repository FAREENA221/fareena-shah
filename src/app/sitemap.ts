// app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.fareena-shah.vercel.app";

  // Static pages based on Navbar links
  const pages = [
    "/",
    "/about",
    "/experience",
    "/projects",
    "/education",
    "/achievements",
    "/contact",
  ];

  // Map pages to sitemap format
  const sitemapEntries: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return sitemapEntries;
}
