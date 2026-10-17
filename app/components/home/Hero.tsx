import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal, WordStagger } from "../../Reveal";
import { Arrow, WaveLines, btn } from "../primitives";
import { Passport } from "./Passport";

/**
 * Home hero. "Returning Sands" centred over the Khartoum bridge photograph,
 * intro and buttons beneath, then the passport inks in straight away with its
 * clickable stamps (cities to Events, the Returning Sands stamp to Donate).
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
    <section className="relative overflow-hidden bg-nile-900 text-sand-50">
      <Image
        src="/img/bridge.jpg"
        alt={t.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_60%] opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-900/75 via-nile-900/25 to-nile-900/65" />
      <div className="absolute inset-0 grain" />
      <WaveLines tone="white" className="opacity-[0.06]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-36 sm:pt-44 pb-2 flex flex-col items-center text-center">
        <h1 className="font-display text-[17vw] leading-[0.92] sm:text-[11vw] sm:whitespace-nowrap lg:text-[9.5rem] xl:text-[11rem] text-sand-50">
          <WordStagger as="span" text={`${t.titleLead} ${t.titleEmphasis}`} />
        </h1>
        <Reveal className="mt-8 max-w-2xl reveal-lg flex flex-col items-center" delay={150}>
          <p className="text-lg md:text-xl font-light leading-relaxed text-sand-100/90">{t.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={pagePath(locale, "donate")} className={btn.lightFilled}>
              {t.donateButton}
              <Arrow />
            </Link>
            <Link href={pagePath(locale, "events")} className={btn.lightOutline}>
              {t.eventsButton}
              <Arrow />
            </Link>
          </div>
          <p className="mt-8 text-sm text-sand-100/70">{cities.hint}</p>
        </Reveal>
      </div>
      <Passport t={cities} locale={locale} priority className="relative pt-4 sm:pt-6 pb-14 sm:pb-20" />
    </section>
  );
}
