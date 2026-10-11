import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, btn } from "../primitives";

export function DonateBand({ t, locale }: { t: SiteContent["donateBand"]; locale: Locale }) {
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24">
        <Reveal className="reveal-lg perf bg-sand-100 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.98] text-ink">{t.heading}</h2>
            <p className="mt-4 text-lg text-ink/75 leading-relaxed">{t.body}</p>
          </div>
          <Link href={pagePath(locale, "donate")} className={`${btn.darkFilled} shrink-0 self-start md:self-center`}>
            {t.button}
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
