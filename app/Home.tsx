import Image from "next/image";
import Link from "next/link";
import { Reveal, WordStagger } from "./Reveal";
import { StampBadge, StampWatermark, Postmark, PerfSeam } from "./Stamp";
import { ThanksBanner } from "./Thanks";
import { MailingListForm } from "./MailingList";
import type { Locale, SiteContent } from "./content";
import { LangSwitch } from "./LangSwitch";

type T = SiteContent;

export function HomePage({ t, locale }: { t: SiteContent; locale: Locale }) {
  return (
    <>
      <Nav t={t} locale={locale} />
      <Hero t={t} />
      <OpeningQuote t={t.openingQuote} />
      <WhatsAtStake t={t.stake} />
      <Campaign t={t.campaign} />
      <Goals t={t.goals} />
      <Documentary t={t.documentary} />
      <AliNour t={t.aliNour} />
      <DirectorsNote t={t.directorsNote} />
      <Events t={t.events} />
      <OralHistory t={t.oralHistory} />
      <Timeline t={t.timeline} />
      <ClosingQuote t={t.closingQuote} />
      <Team t={t.team} />
      <Donate t={t} />
      <Contact t={t} />
      <Footer t={t} locale={locale} />
    </>
  );
}

function Nav({ t, locale }: { t: T; locale: Locale }) {
  return (
    <header className="absolute top-0 start-0 end-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex items-center justify-between">
        <Link href={locale === "ar" ? "/ar" : "/"} className="flex items-center gap-3 group">
          <Mark className="text-sand-50" />
          <span className="font-display text-xl tracking-tight text-sand-50">
            {t.brand.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-sand-100/85">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover-underline">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <LangSwitch locale={locale} label={t.langSwitch} tone="light" />
          <a
            href="#donate"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-sand-50 px-4 py-2 text-sm text-nile-900 hover:bg-sand-200 transition-colors"
          >
            {t.nav.donate}
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}

function Mark({ className = "text-ochre-600" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M2 30 C 10 22, 14 22, 20 28 S 32 34, 38 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 24 C 10 16, 14 16, 20 22 S 32 28, 38 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M2 18 C 10 10, 14 10, 20 16 S 32 22, 38 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  if (name === "instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V17M8 7.5v.1M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialLinks({ t, tone = "light" }: { t: T["social"]; tone?: "light" | "dark" }) {
  const base =
    tone === "light"
      ? "text-sand-100/80 hover:text-sand-50"
      : "text-ink/70 hover:text-ink";
  return (
    <ul className="flex items-center gap-5">
      {t.networks.map((s) => (
        <li key={s.network}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.ariaLabel.replace("{network}", s.label)}
            className={`inline-flex items-center gap-2 text-sm transition-colors ${base}`}
          >
            <SocialIcon name={s.network} />
            <span className="hover-underline">{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero({ t }: { t: T }) {
  const h = t.hero;
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-nile-900 text-sand-50">
      <Image
        src="/img/bridge.jpg"
        alt={h.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-900/70 via-nile-900/20 to-nile-900/85" />
      <div className="absolute inset-0 grain" />
      <StampBadge
        size={104}
        tilt="7deg"
        className="hidden sm:block absolute top-28 right-6 sm:right-10 z-10"
      />
      <StampBadge
        variant="magazine"
        size={190}
        tilt="-6deg"
        className="hidden md:block absolute top-28 left-6 lg:left-10 z-10"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-40 pb-20 sm:pb-28">
        <Reveal className="kicker-anim kicker text-sand-300 mb-6 flex items-center gap-3">
          <span className="stamp-chip">{h.kicker}</span>
        </Reveal>
        <h1 className="font-display text-[18vw] leading-[0.86] sm:text-[14vw] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] text-sand-50">
          <WordStagger as="span" text={h.titleLead} />
          <span className="block italic text-sand-300">
            <WordStagger as="span" text={h.titleEmphasis} />
          </span>
        </h1>
        <Reveal className="mt-10 grid gap-8 md:grid-cols-12 items-end reveal-lg" delay={150}>
          <p className="md:col-span-7 md:col-start-1 max-w-prose text-lg md:text-xl text-sand-100/90 font-light leading-relaxed">
            {h.intro}
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 text-sm reveal-stagger">
            {h.schedule.map((r) => (
              <Row key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-sand-50/25 pb-2">
      <span className="kicker text-sand-300">{label}</span>
      <span className="font-display text-lg text-sand-50">{value}</span>
    </div>
  );
}

function OpeningQuote({ t }: { t: T["openingQuote"] }) {
  return (
    <section className="relative bg-nile-900 text-sand-50 overflow-hidden">
      <div className="relative h-[70svh] min-h-[480px] parallax">
        <div className="parallax-layer">
          <Image
            src="/img/meroe.jpg"
            alt={t.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-nile-900/90 via-nile-900/50 to-nile-900/10" />
        <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex items-center">
          <Reveal as="figure" className="max-w-2xl reveal-lg">
            <p className="kicker text-sand-300 mb-6">{t.kicker}</p>
            <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-sand-50">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sand-300 kicker">
              {t.attribution}
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatsAtStake({ t }: { t: T["stake"] }) {
  return (
    <section id="stake" className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] rule-draw pb-6">
              {t.headingLead}
              <span className="italic text-ochre-600">{` ${t.headingEmphasis}`}</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            {t.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-3 gap-6 mt-16 reveal-stagger">
          {t.stats.map((s, i) => (
            <Reveal
              as="li"
              key={s.value}
              className="perf bg-sand-100 p-8 sm:p-10 reveal"
              style={{ ["--perf-bg" as string]: "var(--sand-50)" }}
              delay={i * 110}
            >
              <p className="font-display text-6xl sm:text-7xl text-ochre-600 leading-none mb-4">
                {s.value}
              </p>
              <p className="text-ink/75 leading-relaxed">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Campaign({ t }: { t: T["campaign"] }) {
  const [c1, c2, c3] = t.p1.cities;
  return (
    <section id="campaign" className="bg-sand-100 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              {t.headingLead}
              <span className="italic text-ochre-600">{` ${t.headingEmphasis}`}</span>
              {` ${t.headingTail}`}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            <p>
              {t.p1.lead}{" "}
              <strong>{c1}</strong>{t.p1.separator}<strong>{c2}</strong>{t.p1.lastSeparator}{" "}
              <strong>{c3}</strong>{` ${t.p1.tail}`}
            </p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Goals({ t }: { t: T["goals"] }) {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <PerfSeam />
      <StampWatermark
        variant="sudan"
        size={520}
        tilt="9deg"
        className="-top-24 -right-24 hidden lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="reveal-lg flex items-start justify-between gap-6">
          <div className="flex-1">
            <p className="kicker kicker-anim text-ochre-600 mb-6">{t.kicker}</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] mb-14 max-w-3xl rule-draw pb-6">
              {t.heading}
            </h2>
          </div>
          <StampBadge
            variant="magazine"
            size={140}
            tilt="4deg"
            className="hidden sm:block mt-2"
          />
        </Reveal>
        <ol className="grid gap-px bg-ink/15 rounded-2xl overflow-hidden md:grid-cols-2">
          {t.items.map((g, i) => (
            <Reveal
              as="li"
              key={i}
              className="bg-sand-50 p-8 sm:p-10 flex gap-6 items-start reveal"
              delay={i * 90}
            >
              <span className="font-display text-3xl text-ochre-600 leading-none mt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ink/80 leading-relaxed text-lg">{g}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Documentary({ t }: { t: T["documentary"] }) {
  return (
    <section id="documentary" className="bg-nile-900 text-sand-50 grain relative">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 mb-16">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-sand-300 mb-4">{t.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              {t.headingLead}
              <span className="italic text-sand-300">{` ${t.headingEmphasis}`}</span>
              {` ${t.headingTail}`}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-sand-100/85 reveal" delay={120}>
            <p>{t.p1}</p>
            <p>
              {`${t.p2Lead} `}<em>{t.p2Emphasis}</em>{t.p2Tail}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <Reveal className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl bg-nile-800 reveal parallax">
            <Image
              src="/img/barbers.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center zoom-in"
            />
          </Reveal>
          <Reveal as="figure" className="md:col-span-5 bg-nile-800 p-10 sm:p-12 rounded-2xl flex flex-col justify-center reveal" delay={140}>
            <p className="kicker text-sand-300 mb-4">{t.loglineKicker}</p>
            <blockquote className="font-display text-2xl sm:text-3xl leading-[1.2] text-sand-50">
              {t.logline}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AliNour({ t }: { t: T["aliNour"] }) {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink reveal-lg parallax">
            <Image
              src="/img/gateway.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center zoom-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 reveal" delay={140}>
            <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-6">
              {t.heading}
            </h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">{t.p1}</p>
            <p className="text-lg text-ink/80 leading-relaxed">{t.p2}</p>
            <div className="mt-10 divider-rule" />
            <figure className="mt-10">
              <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 kicker text-ink/55">
                {t.attribution}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DirectorsNote({ t }: { t: T["directorsNote"] }) {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4 reveal-lg flex items-start gap-6">
            <StampBadge size={92} tilt="-5deg" className="mt-1" />
            <div>
              <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
              <h2 className="font-display text-4xl leading-[0.95]">
                {t.name}
              </h2>
              <p className="mt-3 text-sm text-ink/60">{t.role}</p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 reveal" delay={120}>
            <blockquote className="font-display text-2xl sm:text-3xl leading-[1.3] text-ink mb-6">
              {t.quote}
            </blockquote>
            <p className="text-lg text-ink/75 leading-relaxed">
              {t.bodyLead}{" "}
              <em>{t.bodyTitle}</em>{" "}{t.bodyTail}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Events({ t }: { t: T["events"] }) {
  return (
    <section id="events" className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <StampBadge
        variant="magazine"
        size={170}
        tilt="5deg"
        className="hidden lg:block absolute top-24 right-10 z-10 opacity-90"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal className="reveal-lg flex items-start gap-5">
            <Postmark animate className="text-sand-300 mt-1 shrink-0" label="" />
            <div>
              <p className="kicker kicker-anim text-sand-300 mb-4">{t.kicker}</p>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
                {t.headingLead}
                <span className="italic text-sand-300">{` ${t.headingEmphasis}`}</span>
              </h2>
            </div>
          </Reveal>
          <Reveal as="p" className="max-w-md text-sand-100/80 leading-relaxed reveal" delay={140}>
            {t.intro}
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-sand-50/10 rounded-2xl overflow-hidden">
          {t.cities.map((e, i) => (
            <Reveal
              as="article"
              key={e.city}
              className="bg-nile-900 p-8 sm:p-10 flex flex-col gap-6 transition-colors hover:bg-nile-800 reveal-lg"
              delay={i * 140}
            >
              <div className="flex items-baseline justify-between">
                <span className="kicker text-sand-300">{e.when}</span>
              </div>
              <h3 className="font-display text-5xl leading-none">
                {e.city}
              </h3>
              <p className="text-sand-100/70 text-sm leading-relaxed">
                {e.body}
              </p>
              <ul className="mt-2 flex flex-col gap-5 border-t border-sand-100/15 pt-6">
                {e.items.map((it) => (
                  <li key={it.label}>
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="font-display text-lg text-sand-50">
                        {it.label}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.14em] text-sand-300 whitespace-nowrap">
                        {it.when}
                      </span>
                    </div>
                    <p className="text-sand-100/75 text-sm leading-relaxed">
                      {it.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OralHistory({ t }: { t: T["oralHistory"] }) {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink reveal-lg parallax">
              <Image
                src="/img/woman.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center zoom-in"
              />
            </Reveal>
            <StampBadge
              variant="magazine"
              size={210}
              tilt="-3deg"
              className="hidden sm:block absolute -bottom-8 -right-8 z-10"
            />
          </div>
          <Reveal className="md:col-span-6 md:col-start-7 reveal" delay={140}>
            <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] mb-6">
              {t.heading}
            </h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">{t.p1}</p>
            <p className="text-lg text-ink/80 leading-relaxed">{t.p2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline({ t }: { t: T["timeline"] }) {
  return (
    <section className="relative bg-sand-50 overflow-hidden">
      <PerfSeam />
      <StampWatermark
        variant="magazine"
        size={900}
        tilt="-3deg"
        className="top-1/3 -right-40 hidden xl:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <Reveal className="reveal-lg flex items-start justify-between gap-6">
          <div>
            <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-16 max-w-3xl">
              {t.headingLead}
              <span className="italic text-ochre-600">{` ${t.headingEmphasis}`}</span>
              {` ${t.headingTail}`}
            </h2>
          </div>
          <StampBadge size={110} tilt="6deg" className="hidden sm:block" />
        </Reveal>
        <ol className="relative border-l border-ink/20 pl-8 sm:pl-12 space-y-12">
          {t.entries.map((entry, i) => (
            <Reveal as="li" key={entry.when} className="relative reveal" delay={i * 100}>
              <span className="absolute -left-[2.6rem] sm:-left-[3.6rem] top-2 h-3 w-3 rounded-full bg-ochre-600 ring-4 ring-sand-50" />
              <p className="kicker text-ochre-600 mb-2">{entry.when}</p>
              <h3 className="font-display text-3xl sm:text-4xl mb-3">
                {entry.title}
              </h3>
              <ul className="text-ink/75 leading-relaxed max-w-xl space-y-1.5">
                {entry.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-ochre-600/70 mt-[0.55em] h-1 w-1 rounded-full bg-current shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ClosingQuote({ t }: { t: T["closingQuote"] }) {
  return (
    <section className="relative bg-sand-100">
      <div className="relative h-[80svh] min-h-[520px] overflow-hidden parallax">
        <div className="parallax-layer">
          <Image
            src="/img/portrait.jpg"
            alt={t.imageAlt}
            fill
            sizes="100vw"
            style={{ objectPosition: "85% center" }}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sand-100 via-sand-100/85 to-transparent" />
        <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex items-center">
          <Reveal as="figure" className="max-w-xl reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-6">{t.kicker}</p>
            <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 kicker text-ink/65">
              {t.attribution}
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team({ t }: { t: T["team"] }) {
  return (
    <section id="team" className="relative overflow-hidden bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-10 md:grid-cols-12 mb-16">
          <Reveal className="md:col-span-5 reveal-lg flex items-start gap-5">
            <StampBadge size={86} tilt="-8deg" className="mt-1 shrink-0" />
            <div>
              <p className="kicker kicker-anim text-ochre-600 mb-4">{t.kicker}</p>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
                {t.headingLead}
                <span className="italic text-ochre-600">{` ${t.headingEmphasis}`}</span>
                {/* No separating space here: preserves the pre-extraction markup exactly. */}
                {t.headingTail}
              </h2>
            </div>
          </Reveal>
          <Reveal as="p" className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-ink/75 reveal" delay={140}>
            {t.intro}
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {t.producers.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              className="bg-sand-100 p-8 sm:p-10 flex flex-col gap-3 transition-colors hover:bg-sand-50 reveal"
              delay={i * 110}
            >
              <span className="kicker text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                {p.name}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
              <p className="text-xs text-ink/55 leading-relaxed">{p.bio}</p>
              <p className="kicker text-ochre-600 mt-auto pt-4">{p.base}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <Reveal as="p" className="kicker kicker-anim text-ochre-600 mb-6">{t.coreTeamKicker}</Reveal>
          <ul className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.coreTeam.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                className="perf border border-ink/15 p-6 bg-sand-50/60 reveal"
                style={{ ["--perf-bg" as string]: "var(--sand-100)" }}
                delay={i * 90}
              >
                <h3 className="font-display text-xl mb-1">{p.name}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Donate({ t }: { t: T }) {
  const d = t.donate;
  const { us, uk, note } = d;
  return (
    <section id="donate" className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <StampWatermark
        variant="magazine"
        mode="screen"
        opacity={0.06}
        size={520}
        tilt="-7deg"
        className="-top-16 right-[4%] hidden lg:block"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <ThanksBanner text={t.thanks} />
        <Reveal className="reveal-lg max-w-3xl">
          <p className="kicker kicker-anim text-sand-300 mb-4">{d.kicker}</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-8">
            {d.headingLead}
            <span className="italic text-sand-300">{` ${d.headingEmphasis}`}</span>
          </h2>
          <p className="text-sand-100/75 leading-relaxed text-lg max-w-2xl">
            {d.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="reveal" delay={80}>
            <div className="h-full rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">{us.kicker}</p>
              <h3 className="font-display text-3xl mb-4">{us.heading}</h3>
              <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                {us.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={us.links.paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-nile-900 hover:bg-sand-200 transition-colors"
                >
                  {us.paypalButton}
                  <ExternalArrow />
                </a>
                <a
                  href={us.links.sponsorPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-sand-100/30 px-6 py-3 text-sand-50 hover:bg-sand-50 hover:text-nile-900 transition-colors"
                >
                  {us.sponsorButton}
                  <ExternalArrow />
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-sand-100/10">
                <MailingListForm text={t.mailingList} />
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal" delay={160}>
            <div className="h-full rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">{uk.kicker}</p>
              <h3 className="font-display text-3xl mb-4">{uk.heading}</h3>
              {uk.links.stripe || uk.bank ? (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                    {uk.body}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {uk.links.stripe && (
                      <a
                        href={uk.links.stripe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-nile-900 hover:bg-sand-200 transition-colors"
                      >
                        {uk.cardButton}
                        <ExternalArrow />
                      </a>
                    )}
                  </div>
                  {uk.bank && (
                    <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm text-sand-100/80">
                      <dt className="text-sand-300">{uk.bankLabels.accountName}</dt>
                      <dd>{uk.bank.accountName}</dd>
                      <dt className="text-sand-300">{uk.bankLabels.sortCode}</dt>
                      <dd>{uk.bank.sortCode}</dd>
                      <dt className="text-sand-300">{uk.bankLabels.accountNumber}</dt>
                      <dd>{uk.bank.accountNumber}</dd>
                      {uk.bank.iban && (
                        <>
                          <dt className="text-sand-300">{uk.bankLabels.iban}</dt>
                          <dd className="tabular-nums">{uk.bank.iban}</dd>
                        </>
                      )}
                      {uk.bank.bic && (
                        <>
                          <dt className="text-sand-300">{uk.bankLabels.bic}</dt>
                          <dd>{uk.bank.bic}</dd>
                        </>
                      )}
                    </dl>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                    {uk.fallback.bodyLead}{" "}
                    <a href={`mailto:${uk.links.donationsEmail}`} className="hover-underline text-sand-50">
                      {uk.links.donationsEmail}
                    </a>{" "}
                    {uk.fallback.bodyTail}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${uk.links.donationsEmail}?subject=${encodeURIComponent(uk.fallback.mailSubject)}`}
                      className="inline-flex items-center gap-3 rounded-full border border-sand-100/30 px-6 py-3 text-sand-50 hover:bg-sand-50 hover:text-nile-900 transition-colors"
                    >
                      {uk.fallback.button}
                      <Arrow />
                    </a>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="reveal mt-12" delay={220}>
          <p className="text-sm text-sand-100/60 max-w-2xl leading-relaxed">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ t }: { t: T }) {
  const c = t.contact;
  const [producer, director] = c.people;
  return (
    <section id="contact" className="bg-sand-50 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">{c.kicker}</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-8">
              {c.headingLead}
              <span className="italic text-ochre-600">{` ${c.headingEmphasis}`}</span>
            </h2>
            <p className="text-ink/75 leading-relaxed mb-10 max-w-xl text-lg">
              {c.bodyLead}{" "}
              <a href={`mailto:${c.email}`} className="hover-underline text-ink">
                {c.email}
              </a>
              {c.bodyTail}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${producer.email}?subject=${encodeURIComponent(c.mailSubject)}`}
                className="inline-flex items-center gap-3 rounded-full bg-ochre-600 px-6 py-3 text-sand-50 hover:bg-ochre-500 transition-colors"
              >
                {producer.buttonLabel}
                <Arrow />
              </a>
              <a
                href={`mailto:${director.email}?subject=${encodeURIComponent(c.mailSubject)}`}
                className="inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-3 text-ink hover:bg-ink hover:text-sand-50 transition-colors"
              >
                {director.buttonLabel}
                <Arrow />
              </a>
            </div>
            <div className="mt-10">
              <p className="kicker text-ink/55 mb-3">{c.followKicker}</p>
              <SocialLinks t={t.social} tone="dark" />
            </div>
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-9 reveal flex flex-col gap-10" delay={140}>
            <div className="flex items-start gap-4 self-end sm:self-start">
              <StampBadge size={122} tilt="-3deg" />
              <StampBadge variant="magazine" size={150} tilt="5deg" className="mt-6" />
            </div>
            <div className="space-y-6">
              {c.people.map((p) => (
                <div key={p.email}>
                  <p className="kicker text-ink/55 mb-1">{p.role}</p>
                  <p className="font-display text-2xl">{p.name}</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="block text-sm text-ink/70 hover-underline mt-1"
                  >
                    {p.email}
                  </a>
                  <p className="text-sm text-ink/60 mt-1">
                    {`${p.phone} · ${p.city}`}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, locale }: { t: T; locale: Locale }) {
  const f = t.footer;
  const marqueeItems = [...f.partners, ...f.partners];
  return (
    <footer className="relative overflow-hidden bg-nile-900 text-sand-100">
      <PerfSeam dark />
      <StampWatermark
        variant="sudan"
        mode="screen"
        opacity={0.05}
        size={560}
        tilt="6deg"
        className="bottom-10 right-[8%] hidden lg:block"
      />
      <div className="marquee-wrap overflow-hidden border-y border-sand-100/10 py-8">
        <div className="marquee">
          {marqueeItems.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl text-sand-100/80 whitespace-nowrap flex items-center gap-12"
            >
              {p}
              <Postmark className="text-ochre-500/50 h-6 w-6" label="" />
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Mark className="text-sand-300" />
            <span className="font-display text-2xl">{t.brand.name}</span>
          </div>
          <p className="text-sand-100/70 max-w-sm leading-relaxed">{f.blurb}</p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-sand-300 mb-3">{f.navigateKicker}</p>
          <ul className="space-y-2 text-sand-100/80">
            {f.links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover-underline">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-sand-300 mb-3">{f.partnersKicker}</p>
          <ul className="space-y-2 text-sand-100/80">
            {f.partners.map((p) => (
              <li key={p} className="font-display text-lg">{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-100/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-sand-100/55">
          <span>{`${f.copyrightPrefix} `}{new Date().getFullYear()}{` ${f.copyrightSuffix}`}</span>
          <div className="flex items-center gap-6">
            <SocialLinks t={t.social} />
            <LangSwitch locale={locale} label={t.langSwitch} />
          </div>
          <span>{f.cities}</span>
        </div>
      </div>
    </footer>
  );
}
