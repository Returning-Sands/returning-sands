import Link from "next/link";
import type { Locale, PageKey, SiteContent } from "../content";
import { pagePath } from "../routes";
import { LangSwitch } from "../LangSwitch";
import { PerfSeam } from "../Stamp";
import { Mark, SocialLinks } from "./primitives";

/** Site footer, shared by every page: stamp logo, wordmark, page links in two columns. */
export function Footer({
  t,
  locale,
  current,
}: {
  t: SiteContent;
  locale: Locale;
  current: PageKey;
}) {
  const f = t.footer;
  return (
    <footer className="relative overflow-hidden bg-nile-900 text-sand-100">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6 flex flex-col gap-4">
          <Link href={pagePath(locale, "home")} aria-label={t.brand.name} className="self-start">
            <Mark tone="white" height={84} />
          </Link>
          <p className="font-display text-3xl text-sand-50">
            <span lang="en">{t.brand.name}</span>
            <span className="text-sand-300 mx-3" aria-hidden>·</span>
            <span lang="ar" dir="rtl">{t.brand.arabic}</span>
          </p>
          <p className="text-sand-100/70 max-w-sm leading-relaxed">{f.blurb}</p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-sand-300 mb-3">{f.navigateKicker}</p>
          {/* Two columns, three rows, so the list isn't one long stack. */}
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sand-100/80">
            {f.links.map((l) => (
              <li key={l.key}>
                <Link
                  href={pagePath(locale, l.key)}
                  aria-current={l.key === current ? "page" : undefined}
                  className="hover-underline aria-[current=page]:text-sand-50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3 flex flex-col gap-4">
          <SocialLinks t={t.social} />
          <LangSwitch locale={locale} page={current} label={t.langSwitch} />
        </div>
      </div>
      <div className="border-t border-sand-100/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col gap-3 text-xs text-sand-100/55">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <span>{`${f.copyrightPrefix} `}{new Date().getFullYear()}{` ${f.copyrightSuffix}`}</span>
            <span>{f.cities}</span>
          </div>
          {/* Companies Act 2006 s.82: registered name, number, place of registration and office. */}
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1 sm:items-center sm:justify-between">
            <span>{f.legal}</span>
            <Link href={pagePath(locale, "privacy")} className="hover-underline shrink-0">
              {f.privacyLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
