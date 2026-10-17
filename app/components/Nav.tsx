import Link from "next/link";
import type { Locale, PageKey, SiteContent } from "../content";
import { pagePath } from "../routes";
import { LangSwitch } from "../LangSwitch";
import { Arrow, Mark } from "./primitives";

/**
 * Site header, shared by every page. Sits absolutely over the page's hero
 * band. `tone` = "light" puts white text and logo over a dark hero (the
 * default); "dark" puts black text and logo over a white or sand hero.
 * `current` marks the active page with aria-current.
 */
export function Nav({
  t,
  locale,
  current,
  tone = "light",
}: {
  t: SiteContent;
  locale: Locale;
  current: PageKey;
  tone?: "light" | "dark";
}) {
  const textLinks = t.nav.links.filter((l) => l.key !== "donate");
  const donate = pagePath(locale, "donate");
  const light = tone === "light";
  const markTone = light ? "white" : "black";
  const linkBase = light
    ? "text-sand-100/90 aria-[current=page]:text-sand-50 aria-[current=page]:decoration-sand-300"
    : "text-ink/80 aria-[current=page]:text-ink aria-[current=page]:decoration-ochre-600";
  const donateBtn = light
    ? "bg-sand-50 text-nile-900 hover:bg-sand-200"
    : "bg-nile-900 text-sand-50 hover:bg-nile-800";
  const chip = light
    ? "border-sand-50/35 bg-nile-900/40 text-sand-50 aria-[current=page]:bg-sand-50 aria-[current=page]:text-nile-900"
    : "border-ink/20 bg-white/60 text-ink aria-[current=page]:bg-nile-900 aria-[current=page]:text-sand-50";
  return (
    <header className="absolute top-0 start-0 end-0 z-30">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 py-4 sm:py-6 flex items-center justify-between gap-3">
        <Link href={pagePath(locale, "home")} className="flex items-center gap-3 group" aria-label={t.brand.name}>
          <Mark tone={markTone} height={52} className="sm:hidden" priority />
          <Mark tone={markTone} height={72} className="hidden sm:block" priority />
          <span className="sr-only">{t.brand.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-base">
          {textLinks.map((l) => (
            <Link
              key={l.key}
              href={pagePath(locale, l.key)}
              aria-current={l.key === current ? "page" : undefined}
              className={`hover-underline aria-[current=page]:underline aria-[current=page]:underline-offset-8 ${linkBase}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <LangSwitch locale={locale} page={current} label={t.langSwitch} tone={tone} />
          {/* Donate is always visible, including on phones. */}
          <Link
            href={donate}
            aria-current={current === "donate" ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base transition-colors ${donateBtn}`}
          >
            {t.nav.donate}
            <Arrow />
          </Link>
        </div>
      </div>
      {/* Phone: tappable page chips sit under the header, above the fold. */}
      <nav
        aria-label={t.nav.sectionsLabel}
        className="md:hidden mx-auto max-w-7xl px-5 pb-2 flex gap-2 overflow-x-auto no-scrollbar"
      >
        {t.nav.links.map((l) => (
          <Link
            key={l.key}
            href={pagePath(locale, l.key)}
            aria-current={l.key === current ? "page" : undefined}
            className={`shrink-0 rounded-full border backdrop-blur px-3.5 py-1.5 text-xs whitespace-nowrap ${chip}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
