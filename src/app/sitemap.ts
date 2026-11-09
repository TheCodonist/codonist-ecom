import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/work", "/lab", "/about", "/contact"].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
