import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

/**
 * The passport spread from the brand kit, near full-width.
 *
 * The page is rendered without its three visa stamps; each stamp is a separate
 * transparent layer that "inks in" (fades + settles from a slight scale and
 * rotation) when the section scrolls into view, staggered Cairo, NYC, London.
 * Each stamp is also a link to that city's block on the Events page. The
 * layers share the base image's canvas, so no positioning math is needed; the
 * link hotspots are percentage boxes over the same canvas.
 */
const STAMPS = [
  { id: "cairo", left: 56.5, top: 29.6, width: 15.5, height: 15, delay: 900 },
  { id: "nyc", left: 66.5, top: 40, width: 12, height: 15, delay: 1500 },
  { id: "london", left: 55.5, top: 56.3, width: 21, height: 10, delay: 2100 },
] as const;

export function Cities({ t, locale }: { t: SiteContent["cities"]; locale: Locale }) {
  return (
    <section className="bg-sand-100 grain overflow-hidden">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-20 sm:pt-24 pb-6">
        <Reveal className="reveal-lg text-center flex flex-col items-center">
          <SectionHeading kicker={t.kicker} heading={t.heading} />
          <p className="mt-5 text-ink/70">{t.hint}</p>
        </Reveal>
      </div>
      {/* Edge-to-edge on phones; up to 1600px wide on large screens. */}
      <Reveal className="reveal-lg passport-stage mx-auto w-full max-w-[1600px] px-2 sm:px-6 pb-20 sm:pb-28">
        <div className="relative">
          <Image
            src="/brand/passport-base-2000.webp"
            alt={t.alt}
            width={2000}
            height={1414}
            sizes="(max-width: 1600px) 100vw, 1600px"
            className="w-full h-auto select-none"
          />
          {STAMPS.map((s) => (
            <Image
              key={s.id}
              src={`/brand/passport-stamp-${s.id}-2000.webp`}
              alt=""
              aria-hidden
              width={2000}
              height={1414}
              sizes="(max-width: 1600px) 100vw, 1600px"
              loading="eager"
              className="passport-stamp absolute inset-0 w-full h-auto select-none pointer-events-none"
              style={{ ["--stamp-delay" as string]: `${s.delay}ms` }}
            />
          ))}
          <nav aria-label={t.navLabel} className="absolute inset-0">
            {STAMPS.map((s) => (
              <Link
                key={s.id}
                href={pagePath(locale, "events", s.id)}
                aria-label={t[s.id]}
                className="absolute rounded-xl ring-ochre-600/0 hover:ring-4 focus-visible:ring-4 ring-ochre-600/70 transition-shadow"
                style={{
                  left: `${s.left}%`,
                  top: `${s.top}%`,
                  width: `${s.width}%`,
                  height: `${s.height}%`,
                }}
              />
            ))}
          </nav>
        </div>
      </Reveal>
    </section>
  );
}
