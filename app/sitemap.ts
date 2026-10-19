import type { MetadataRoute } from "next";
import { PAGE_KEYS, pagePath, SITE_URL } from "./routes";

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

/** Every page in both editions: the English URL and its Arabic mirror. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGE_KEYS.flatMap((key) => {
    const en = abs(pagePath("en", key));
    const ar = abs(pagePath("ar", key));
    const alternates = { languages: { en, ar } };
    const priority = key === "home" ? 1 : key === "donate" ? 0.9 : 0.8;
    return [
      { url: en, lastModified, changeFrequency: "monthly" as const, priority, alternates },
      { url: ar, lastModified, changeFrequency: "monthly" as const, priority, alternates },
    ];
  });
}
