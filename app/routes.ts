/**
 * Page paths for both editions. Pure, no content import, so client components
 * may use it too.
 */
export type PageKey = "home" | "events" | "about" | "gallery" | "donate";
export type Locale = "en" | "ar";

export const SITE_URL = "https://returningsands.org";

export const PAGE_KEYS: readonly PageKey[] = ["home", "events", "about", "gallery", "donate"];

/** English path for a page: "/" or "/events". */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  events: "/events",
  about: "/about",
  gallery: "/gallery",
  donate: "/donate",
};

/** Path for a page in a given edition: "/ar/events", "/ar", "/events", "/". */
export function pagePath(locale: Locale, key: PageKey, hash?: string): string {
  const base = PAGE_PATHS[key];
  const path = locale === "ar" ? (base === "/" ? "/ar" : `/ar${base}`) : base;
  return hash ? `${path}#${hash}` : path;
}

/** Resolve an English path ("/events") back to its page key. */
export function pageKeyFromPath(path: string): PageKey {
  const hit = (Object.keys(PAGE_PATHS) as PageKey[]).find((k) => PAGE_PATHS[k] === path);
  if (!hit) throw new Error(`Unknown page path: ${path}`);
  return hit;
}
