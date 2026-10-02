import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Naskh_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getContent, type Locale } from "./content";
import "./globals.css";

/**
 * Shared root shell for both language editions.
 *
 * Routing: the site has two root layouts, `app/(en)/layout.tsx` (serves `/`)
 * and `app/ar/layout.tsx` (serves `/ar`). Each is a thin wrapper around
 * `RootShell`, which sets `lang`/`dir` on <html>. Switching language is a
 * full page load (different root layout), which is what we want so the
 * document direction and fonts change cleanly.
 */

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Arabic text face. Declared once; the browser only downloads it when an
// element actually uses it, which happens under html[lang="ar"] (globals.css).
const arabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const SITE_URL = "https://returningsands.org";

const PATHS: Record<Locale, string> = { en: "/", ar: "/ar" };

export function buildMetadata(locale: Locale): Metadata {
  const t = getContent(locale);
  const path = PATHS[locale];
  return {
    title: t.meta.title,
    description: t.meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
      languages: {
        en: PATHS.en,
        ar: PATHS.ar,
        "x-default": PATHS.en,
      },
    },
    openGraph: {
      title: t.meta.openGraph.title,
      description: t.meta.openGraph.description,
      type: "website",
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      locale: locale === "ar" ? "ar" : "en_GB",
      alternateLocale: locale === "ar" ? ["en_GB"] : ["ar"],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.twitter.title,
      description: t.meta.twitter.description,
    },
  };
}

export function RootShell({
  locale,
  children,
}: Readonly<{ locale: Locale; children: React.ReactNode }>) {
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${sans.variable} ${serif.variable} ${arabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-ink">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
