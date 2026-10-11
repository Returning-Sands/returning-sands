import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal, WordStagger } from "../../Reveal";
import { Arrow, WaveLines, btn } from "../primitives";

export function Hero({ t, locale }: { t: SiteContent["hero"]; locale: Locale }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-nile-900 text-sand-50">
      <Image
        src="/img/bridge.jpg"
        alt={t.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-900/70 via-nile-900/20 to-nile-900/85" />
      <div className="absolute inset-0 grain" />
      <WaveLines tone="white" className="opacity-[0.07]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-36 sm:pt-40 pb-16 sm:pb-28">
        <Reveal className="kicker-anim kicker text-sand-300 mb-6 flex items-center gap-3">
          <span className="stamp-chip">{t.kicker}</span>
        </Reveal>
        <h1 className="font-display text-[18vw] leading-[0.86] sm:text-[14vw] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] text-sand-50">
          <WordStagger as="span" text={t.titleLead} />
          <span className="block italic text-sand-300">
            <WordStagger as="span" text={t.titleEmphasis} />
          </span>
        </h1>
        <Reveal className="mt-10 grid gap-8 md:grid-cols-12 items-end reveal-lg" delay={150}>
          <div className="md:col-span-7 md:col-start-1">
            <p className="max-w-prose text-lg md:text-xl text-sand-100/90 font-light leading-relaxed">
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
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 text-sm reveal-stagger">
            {t.schedule.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between gap-6 border-b border-sand-50/25 pb-2"
              >
                <span className="kicker text-sand-300">{r.label}</span>
                <span className="font-display text-lg text-sand-50">{r.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
