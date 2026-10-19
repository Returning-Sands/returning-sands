import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal, WordStagger } from "../../Reveal";
import { Arrow, btn } from "../primitives";
import { Passport } from "./Passport";

/**
 * Home hero. White band: "Returning Sands" centred in black, intro and buttons
 * beneath, then the passport inks in straight away with its clickable stamps
 * (cities to Events, the Returning Sands stamp to Donate).
 */
export function Hero({
  t,
  cities,
  locale,
}: {
  t: SiteContent["hero"];
  cities: SiteContent["cities"];
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden bg-white text-ink">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-36 sm:pt-44 pb-2 flex flex-col items-center text-center">
        {/* Plex Mono is wide (every letter 0.6em), so it runs smaller than
            the serif did to keep "Returning Sands" on one line from tablets up. */}
        <h1 className="title-mono text-[15vw] leading-[0.95] sm:text-[9vw] sm:whitespace-nowrap lg:text-[7rem] xl:text-[7.75rem] text-ink">
          <WordStagger as="span" text={`${t.titleLead} ${t.titleEmphasis}`} />
        </h1>
        <Reveal className="mt-8 max-w-2xl reveal-lg flex flex-col items-center" delay={150}>
          <p className="text-lg md:text-xl font-light leading-relaxed text-ink/80">{t.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={pagePath(locale, "donate")} className={btn.darkFilled}>
              {t.donateButton}
              <Arrow />
            </Link>
            <Link href={pagePath(locale, "events")} className={btn.darkOutline}>
              {t.eventsButton}
              <Arrow />
            </Link>
          </div>
          <p className="mt-8 text-sm text-ink/60">{cities.hint}</p>
        </Reveal>
      </div>
      <Passport t={cities} locale={locale} priority className="pt-4 sm:pt-6 pb-14 sm:pb-20" />
    </section>
  );
}
