import { en } from "./en";
import { ar } from "./ar";
import type { SiteContent } from "./types";

export type { SiteContent } from "./types";
export { en };

export type Locale = "en" | "ar";

/** Recursive Partial: every object key optional, arrays replaced wholesale. */
export type DeepPartial<T> = T extends readonly (infer U)[]
  ? readonly DeepPartial<U>[]
  : T extends object
    ? { readonly [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlay `overrides` onto `base`. Objects are merged recursively; arrays and
 * primitives in `overrides` replace the base value outright (so a locale must
 * supply a full array, e.g. all nav links, not a sparse one). Keys missing from
 * `overrides` fall back to `base`, which lets a partial translation ship with
 * English gaps rather than blank strings.
 */
export function deepMerge<T>(base: T, overrides: DeepPartial<T> | undefined): T {
  if (overrides === undefined) return base;
  if (!isPlainObject(base) || !isPlainObject(overrides)) {
    return overrides as unknown as T;
  }
  const out: Record<string, unknown> = { ...base };
  for (const key of Object.keys(overrides)) {
    const next = (overrides as Record<string, unknown>)[key];
    if (next === undefined) continue;
    out[key] = deepMerge(base[key], next as DeepPartial<unknown>);
  }
  return out as T;
}

// Arabic is a partial overlay: anything not yet translated in ./ar.ts falls
// back to the English value, so /ar never renders an empty string.
const cache: Partial<Record<Locale, SiteContent>> = {};

export function getContent(locale: Locale): SiteContent {
  if (locale === "en") return en;
  // Widen `en` from its `as const` literal types to SiteContent so the
  // Arabic overlay type-checks against the shape, not the English values.
  return (cache[locale] ??= deepMerge<SiteContent>(en, ar));
}
