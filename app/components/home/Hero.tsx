import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal, WordStagger } from "../../Reveal";
import { Arrow, WaveLines, btn } from "../primitives";

export function Hero({ t, locale }: { t: SiteContent["hero"]; locale: Locale }) {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-start overflow-hidden bg-nile-900 text-sand-50">
      <Image
        src="/img/bridge.jpg"
        alt={t.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-900/85 via-nile-900/35 to-nile-900/60" />
      <div className="absolute inset-0 grain" />
      <WaveLines tone="white" className="opacity-[0.07]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-32 sm:pt-32 pb-16 sm:pb-24">
        <h1 className="font-display text-[17vw] leading-[0.92] sm:text-[11vw] sm:whitespace-nowrap lg:text-[9.5rem] xl:text-[11rem] text-sand-50">
          <WordStagger as="span" text={`${t.titleLead} ${t.titleEmphasis}`} />
        </h1>
        <Reveal className="mt-8 max-w-2xl reveal-lg" delay={150}>
          <p className="text-lg md:text-xl text-sand-100/90 font-light leading-relaxed">
            {t.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={pagePath(locale, "donate")} className={btn.lightFilled}>
              {t.donateButton}
              <Arrow />
            </Link>
            <Link href={pagePath(locale, "events")} className={btn.lightOutline}>
              {t.eventsButton}
              <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
