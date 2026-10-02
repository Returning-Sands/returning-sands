import type { Locale } from "./content";

/**
 * Language switcher. Links to the same page in the other edition. Each
 * edition has its own root layout, so this is a full navigation (plain <a>).
 * The link text is always in the TARGET language, which is the convention
 * users expect ("عربي" on the English site, "English" on the Arabic one).
 */
export function LangSwitch({
  locale,
  label,
  tone = "light",
}: {
  locale: Locale;
  label: { readonly toArabic: string; readonly toEnglish: string };
  tone?: "light" | "dark";
}) {
  const target = locale === "ar" ? "en" : "ar";
  const href = target === "ar" ? "/ar" : "/";
  const text = target === "ar" ? label.toArabic : label.toEnglish;
  const colour =
    tone === "light"
      ? "text-sand-100/85 hover:text-sand-50"
      : "text-ink/70 hover:text-ink";
  return (
    <a
      href={href}
      lang={target}
      hrefLang={target}
      dir={target === "ar" ? "rtl" : "ltr"}
      className={`text-sm hover-underline transition-colors ${colour}`}
    >
      {text}
    </a>
  );
}
