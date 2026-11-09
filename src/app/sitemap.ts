import type { MetadataRoute } from "next";
import { projects, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/lab", "/about", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  return pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : p.startsWith("/work/") ? 0.6 : 0.8 }));
}
